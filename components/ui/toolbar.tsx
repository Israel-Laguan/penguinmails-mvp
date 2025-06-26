/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  $getSelection,
} from "lexical";
import { FORMAT_ELEMENT_COMMAND } from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
  REMOVE_LIST_COMMAND,
} from "@lexical/list";
import {
  INDENT_CONTENT_COMMAND,
  OUTDENT_CONTENT_COMMAND,
} from "./LexicalEditor";

function Toolbar() {
  const [editor] = useLexicalComposerContext();

  function $patchStyleText(selection: any, styles: Record<string, string>) {
    if (selection && typeof selection.getNodes === "function") {
      const nodes = selection.getNodes();
      nodes.forEach((node: any) => {
        if (typeof node.patchStyle === "function") {
          node.patchStyle(styles);
        }
      });
    }
  }

  return (
    <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">
      <div className="flex gap-1">
        <button
          type="button"
          title="Undo"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        >
          ↺
        </button>
        <button
          type="button"
          title="Redo"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        >
          ↻
        </button>
      </div>

      <span className="mx-1 border-l border-gray-300" />

      <div className="flex gap-1">
        <button
          type="button"
          title="Bold"
          className="px-2 py-1 hover:bg-gray-200 rounded font-bold"
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")}
        >
          B
        </button>
        <button
          type="button"
          title="Italic"
          className="px-2 py-1 hover:bg-gray-200 rounded italic"
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")}
        >
          I
        </button>
      </div>

      <span className="mx-1 border-l border-gray-300" />

      <div className="flex gap-1">
        <button
          type="button"
          title="Align left"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}
        >
          ⬅
        </button>
        <button
          type="button"
          title="Center"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")
          }
        >
          ⬌
        </button>
        <button
          type="button"
          title="Align right"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")
          }
        >
          ➡
        </button>
        <button
          type="button"
          title="Justify"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify")
          }
        >
          ≡
        </button>
      </div>

      <span className="mx-1 border-l border-gray-300" />

      <div className="flex gap-1">
        <button
          type="button"
          title="Ordered list"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined)
          }
        >
          1.
        </button>
        <button
          type="button"
          title="Unordered list"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined)
          }
        >
          •
        </button>
        <button
          type="button"
          title="Remove list"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => editor.dispatchCommand(REMOVE_LIST_COMMAND, undefined)}
        >
          ⨯
        </button>
      </div>

      <span className="mx-1 border-l border-gray-300" />

      <div className="flex gap-1">
        <button
          type="button"
          title="Increase indent"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)
          }
        >
          →|
        </button>
        <button
          type="button"
          title="Decrease indent"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() =>
            editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)
          }
        >
          |←
        </button>
      </div>

      <span className="mx-1 border-l border-gray-300" />

      <div className="flex gap-1">
        <button
          type="button"
          title="Inline code"
          className="px-2 py-1 hover:bg-gray-200 rounded font-mono text-sm"
          onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "code")}
        >
          &lt;/&gt;
        </button>
        <button
          type="button"
          title="Clear formatting"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => {
            editor.update(() => {
              const selection = $getSelection();
              if (selection) {
                $patchStyleText(selection, {});
              }
            });
          }}
        >
          🧹
        </button>
      </div>
    </div>
  );
}

export default Toolbar;
