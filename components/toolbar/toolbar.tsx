import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import pluginsList from "./toolbarIconsList";
import { handleToolbarEvent } from "./toolbarCommands";

function Toolbar() {
  const [editor] = useLexicalComposerContext();

  const onClick = (event: string) => {
    console.log("Toolbar event:", event);
    handleToolbarEvent(editor, event);
  };

  return (
    <div className="flex flex-wrap gap-2 border-b p-2 bg-gray-50">
      {pluginsList.map(({ id, Icon, event }) => (
        <button
          key={id}
          type="button"
          className="px-2 py-1 hover:bg-gray-200 rounded"
          onClick={() => onClick(event)}
        >
          <Icon fontSize="small" />
        </button>
      ))}
    </div>
  );
}

export default Toolbar;
