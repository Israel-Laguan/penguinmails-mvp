import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes, $generateNodesFromDOM } from "@lexical/html";
import {
  $getRoot,
  $createParagraphNode,
  EditorState,
  $isElementNode,
} from "lexical";
import { createCommand } from "lexical";
import type { LexicalEditor as LexicalEditorType } from "lexical";
import Toolbar from "./toolbar";

export const INSERT_IMAGE_COMMAND = createCommand("INSERT_IMAGE_COMMAND");
export const INDENT_CONTENT_COMMAND = createCommand("INDENT_CONTENT_COMMAND");
export const OUTDENT_CONTENT_COMMAND = createCommand("OUTDENT_CONTENT_COMMAND");

interface LexicalEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
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

export default function LexicalEditor({
  value,
  onChange,
  placeholder,
}: LexicalEditorProps) {
  const initialConfig = {
    namespace: "TemplateEditor",
    onError: (error: Error) => {
      console.error(error);
    },
    editorState: getInitialEditorState(value),
  };

  function LexicalErrorBoundary({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <Toolbar />
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="min-h-[150px] border rounded p-2" />
        }
        placeholder={<div className="text-muted-foreground">{placeholder}</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin
        onChange={(editorState: EditorState, editor) => {
          editorState.read(() => {
            const html = $generateHtmlFromNodes(editor, null);
            onChange(html);
          });
        }}
      />
    </LexicalComposer>
  );
}
