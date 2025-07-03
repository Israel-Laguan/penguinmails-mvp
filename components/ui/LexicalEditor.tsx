/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { ListPlugin } from "@lexical/react/LexicalListPlugin";
import { LinkPlugin } from "@lexical/react/LexicalLinkPlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import {
  $getRoot,
  $createParagraphNode,
  EditorState,
  $isElementNode,
  $getSelection,
  $insertNodes,
  $createTextNode,
  ParagraphNode,
  TextNode,
  LineBreakNode,
} from "lexical";
import { createCommand } from "lexical";
import type { LexicalEditor as LexicalEditorType } from "lexical";
import Toolbar from "../toolbar/toolbar";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { HeadingNode, QuoteNode } from "@lexical/rich-text";
import { ListNode, ListItemNode } from "@lexical/list";
import { LinkNode, AutoLinkNode } from "@lexical/link";
import lexicalEditorTheme from "../theme/lexicalEditorTheme";
import LinkClickHandler from "../toolbar/LinkClickHandler";


export const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND");
export const INDENT_CONTENT_COMMAND = createCommand("INDENT_CONTENT_COMMAND");
export const OUTDENT_CONTENT_COMMAND = createCommand("OUTDENT_CONTENT_COMMAND");
export const INSERT_TEXT_COMMAND = createCommand("INSERT_TEXT_COMMAND");

interface LexicalEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export interface LexicalEditorRef {
  insertText: (text: string) => void;
}

function getInitialEditorState(value: string) {
  return (editor: LexicalEditorType) => {
    const root = $getRoot();
    root.clear();
    let html = value && value.trim().length > 0 ? value : "";
    if (html && !/<(p|ul|ol|h[1-6]|blockquote|pre|table)[\s>]/i.test(html)) {
      html = `<p>${html}</p>`;
    }
    if (html) {
      const parser = new DOMParser();
      const dom = parser.parseFromString(html, "text/html");
      const nodes = $generateNodesFromDOM(editor, dom);
      nodes.forEach((node) => {
        if ($isElementNode(node)) {
          root.append(node);
        }
      });
    } else {
      const paragraph = $createParagraphNode();
      root.append(paragraph);
    }
  };
}

function CommandHandler() {
  const [editor] = useLexicalComposerContext();

  useEffect(() => {
    const unregisterInsertText = editor.registerCommand(
      INSERT_TEXT_COMMAND,
      (text: string) => {
        const selection = $getSelection();
        if (selection) {
          const textNode = $createTextNode(text);
          $insertNodes([textNode]);
        }
        return true;
      },
      1
    );

    const unregisterInsertImage = editor.registerCommand(
      INSERT_IMAGE_COMMAND,
      (payload: { src: string; alt?: string }) => {
        const selection = $getSelection();
        if (selection) {
          const textNode = $createTextNode(`[Image: ${payload.alt || payload.src}]`);
          $insertNodes([textNode]);
        }
        return true;
      },
      1
    );

    return () => {
      unregisterInsertText();
      unregisterInsertImage();
    };
  }, [editor]);

  return null;
}

function LexicalSync({ value }: { value: string }) {
  const [editor] = useLexicalComposerContext();
  const lastValue = useRef<string>("");
  const isInternalChange = useRef<boolean>(false);

  useEffect(() => {
    if (!isInternalChange.current && value !== lastValue.current) {
      editor.getEditorState().read(() => {
        const currentHtml = $generateHtmlFromNodes(editor, null);

        if (
          lastValue.current === "" ||
          (value !== currentHtml && !currentHtml.includes(value))
        ) {
          editor.update(() => {
            getInitialEditorState(value)(editor);
          });
        }
      });
      lastValue.current = value;
    }
    isInternalChange.current = false;
  }, [value, editor]);

  return null;
}

const LexicalEditor = forwardRef<LexicalEditorRef, LexicalEditorProps>(
  ({ value, onChange, placeholder }, ref) => {
    const editorRef = useRef<LexicalEditorType | null>(null);

 const initialConfig = {
      namespace: "TemplateEditor",
      theme: {
        ...lexicalEditorTheme,
        list: {
          ul: "list-disc list-inside ml-4",
          ol: "list-decimal list-inside ml-4",
          listitem: "mb-1",
        },
        heading: {
          h1: "text-2xl font-bold mb-2",
          h2: "text-xl font-bold mb-2",
          h3: "text-lg font-bold mb-2",
        },
        quote: "border-l-4 border-gray-400 pl-4 italic text-gray-700",
        link: "text-blue-600 underline hover:text-blue-800",
        image: "my-4 max-w-full",
      },
      onError: (error: Error) => {
        console.error("Lexical Error:", error);
      },
      editorState: getInitialEditorState(value),
      nodes: [
        ParagraphNode,
        TextNode,
        LineBreakNode,
        HeadingNode,
        QuoteNode,
        LinkNode,
        AutoLinkNode,
        ListNode,
        ListItemNode,
      ],
    };

    useImperativeHandle(ref, () => ({
      insertText: (text: string) => {
        if (editorRef.current) {
          editorRef.current.dispatchCommand(INSERT_TEXT_COMMAND, text);
        }
      },
    }));

    function LexicalErrorBoundary({ children }: { children: React.ReactNode }) {
      return <>{children}</>;
    }

    return (
      <LexicalComposer initialConfig={initialConfig}>
        <LinkClickHandler>
        <div
          ref={(el) => {
            if (el) {
              const composer = el.querySelector("[data-lexical-editor]");
              if (composer && (composer as any).__lexicalEditor) {
                editorRef.current = (composer as any).__lexicalEditor;
              }
            }
          }}
        >
          <LexicalSync value={value} />
          <CommandHandler />
          <Toolbar />
          <RichTextPlugin
            contentEditable={
              <ContentEditable
                className="min-h-[150px] border rounded p-2"
                data-lexical-editor="true"
              />
            }
            placeholder={
              <div className="text-muted-foreground">{placeholder}</div>
            }
            ErrorBoundary={LexicalErrorBoundary}
          />
          <HistoryPlugin />
          <ListPlugin />
          <LinkPlugin />
          <OnChangePlugin
            onChange={(editorState: EditorState, editor) => {
              editorState.read(() => {
                const html = $generateHtmlFromNodes(editor, null);
                onChange(html);
              });
            }}
          />
        </div>
        </LinkClickHandler>
      </LexicalComposer>
    );
  }
);

LexicalEditor.displayName = "LexicalEditor";

export default LexicalEditor;
