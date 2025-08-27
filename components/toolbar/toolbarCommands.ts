import {
  FORMAT_TEXT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  $getSelection,
  $isRangeSelection,
  $createParagraphNode,
} from "lexical";
import {
  INSERT_ORDERED_LIST_COMMAND,
  INSERT_UNORDERED_LIST_COMMAND,
} from "@lexical/list";
import { TOGGLE_LINK_COMMAND } from "@lexical/link";
import { $setBlocksType } from "@lexical/selection";
import { 
  $createHeadingNode,
  $createQuoteNode, 
} from "@lexical/rich-text";
import { eventTypes } from "./toolbarIconsList";

import type { LexicalEditor } from "lexical";

export function handleToolbarEvent(editor: LexicalEditor, event: string) {
  editor.update(() => {
    const selection = $getSelection();
    
    switch (event) {
      case eventTypes.formatUndo:
        editor.dispatchCommand(UNDO_COMMAND, undefined);
        break;
        
      case eventTypes.formatRedo:
        editor.dispatchCommand(REDO_COMMAND, undefined);
        break;
        
      case eventTypes.formatBold:
      case eventTypes.formatItalic:
      case eventTypes.formatUnderline:
      case eventTypes.formatStrike:
      case eventTypes.formatCode: {
        type TextFormatType = "bold" | "italic" | "underline" | "strikethrough" | "code";
        const formatMap: Record<string, TextFormatType> = {
          [eventTypes.formatBold]: "bold",
          [eventTypes.formatItalic]: "italic",
          [eventTypes.formatUnderline]: "underline",
          [eventTypes.formatStrike]: "strikethrough",
          [eventTypes.formatCode]: "code",
        };
        editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatMap[event]);
        break;
      }
      
      case eventTypes.ul:
        if ($isRangeSelection(selection)) {
          editor.dispatchCommand(INSERT_UNORDERED_LIST_COMMAND, undefined);
        }
        break;
        
      case eventTypes.ol:
        if ($isRangeSelection(selection)) {
          editor.dispatchCommand(INSERT_ORDERED_LIST_COMMAND, undefined);
        }
        break;
        
      case eventTypes.paragraph:
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createParagraphNode());
        }
        break;
        
      case eventTypes.h1: {
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode("h1"));
        }
        break;
      }
      
      case eventTypes.h2: {
        if ($isRangeSelection(selection)) {
          $setBlocksType(selection, () => $createHeadingNode("h2"));
        }
        break;
      }
      
      case eventTypes.quote:
        if ($isRangeSelection(selection)) {
          const anchor = selection.anchor.getNode();
          const topElement = anchor.getTopLevelElementOrThrow();
          if (topElement.getType() === "quote") {
            $setBlocksType(selection, () => $createParagraphNode());
          } else {
            $setBlocksType(selection, () => $createQuoteNode());
          }
        }
        break;
        
      case eventTypes.formatAlignLeft:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left");
        break;
        
      case eventTypes.formatAlignCenter:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center");
        break;
        
      case eventTypes.formatAlignRight:
        editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right");
        break;
        
      case eventTypes.formatInsertLink:
        if ($isRangeSelection(selection)) {
          const url = window.prompt("Enter URL:");
          if (url) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, { url });
          }
        }
        break;
        
    case eventTypes.insertImage:
      const imageUrl = window.prompt("Image URL:") || "";
      if (imageUrl) {
        console.log("Inserting image:", imageUrl);
      }
      break;

      default:
        console.warn("Unknown toolbar event:", event);
        break;
    }
  });
}
