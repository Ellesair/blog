import React from "react";
import "./textEditor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faListOl,
  faListUl,
  faAlignLeft,
  faAlignCenter,
  faAlignRight,
  faAlignJustify,
  faIndent,
  faOutdent,
  faRotateLeft,
  faRotateRight,
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

function TextEditor() {
  return (
    <div className="text-editor-container">
      <div className="options">
        <button id="undo" className="text-format-button">
          <FontAwesomeIcon icon={faRotateLeft} />
        </button>
        <button id="redo" className="text-format-button">
          <FontAwesomeIcon icon={faRotateRight} />
        </button>
        <button id="bold" className="text-format-button">
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button id="italic" className="text-format-button">
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button id="underline" className="text-format-button">
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button id="strikethrough" className="text-format-button">
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>
        <button id="ordered-list" className="text-format-button">
          <FontAwesomeIcon icon={faListOl} />
        </button>
        <button id="unordered-list" className="text-format-button">
          <FontAwesomeIcon icon={faListUl} />
        </button>
        <button id="url-link" className="text-format-button">
          <FontAwesomeIcon icon={faLink} />
        </button>
        <button id="img-link" className="text-format-button">
          <FontAwesomeIcon icon={faImage} />
        </button>
        <button id="align-left" className="text-format-button">
          <FontAwesomeIcon icon={faAlignLeft} />
        </button>
        <button id="align-center" className="text-format-button">
          <FontAwesomeIcon icon={faAlignCenter} />
        </button>
        <button id="align-right" className="text-format-button">
          <FontAwesomeIcon icon={faAlignRight} />
        </button>
        <button id="alighn-justify" className="text-format-button">
          <FontAwesomeIcon icon={faAlignJustify} />
        </button>
        <button id="indent" className="text-format-button">
          <FontAwesomeIcon icon={faIndent} />
        </button>
        <button id="outdent" className="text-format-button">
          <FontAwesomeIcon icon={faOutdent} />
        </button>
        <select id="h-options" className="format-dropdown">
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="H3">H3</option>
          <option value="H4">H4</option>
          <option value="H5">H5</option>
          <option value="H6">H6</option>
        </select>
        <select id="font-name" className="format-dropdown"></select>
        <select id="font-size" className="format-dropdown"></select>
        <div className="color-wrapper">
          <input type="color" id="font-color" className="format-dropdown" />
          <label for="font-color">Font Color</label>
        </div>
      </div>
      <div id="text-input" contenteditable="true"></div>
    </div>
  );
}

export default TextEditor;
