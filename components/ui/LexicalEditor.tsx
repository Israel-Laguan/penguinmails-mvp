import React from "react";
import { LexicalComposer } from "@lexical/react/LexicalComposer";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import { OnChangePlugin } from "@lexical/react/LexicalOnChangePlugin";
import { $generateHtmlFromNodes } from "@lexical/html";
import {
  $getRoot,
  $createParagraphNode,
  $createTextNode,
  EditorState,
} from "lexical";

interface LexicalEditorProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

function getInitialEditorState(value: string) {
  return () => {
    const root = $getRoot();
    root.clear();
    const paragraph = $createParagraphNode();
    paragraph.append($createTextNode(value));
    root.append(paragraph);
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
      throw error;
    },
    editorState: getInitialEditorState(value),
  };

  function LexicalErrorBoundary({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
  }

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <RichTextPlugin
        contentEditable={
          <ContentEditable className="min-h-[150px] border rounded p-2" />
        }
        placeholder={<div className="text-muted-foreground">{placeholder}</div>}
        ErrorBoundary={LexicalErrorBoundary}
      />
      <HistoryPlugin />
      <OnChangePlugin
        onChange={(_editorState: EditorState, editor) => {
          editor.getEditorState().read(() => {
            const html = $generateHtmlFromNodes(editor, null);
            onChange(html);
          });
        }}
      />
    </LexicalComposer>
  );
}
