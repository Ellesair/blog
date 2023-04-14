import React from "react";
import { useState, useEffect, useRef } from "react";
// import FontList from "./editoroptions/fontList.js";
// import FontSize from "./editoroptions/fontSize.js";
import "./textEditor.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBold,
  faItalic,
  faUnderline,
  faStrikethrough,
  faLink,
  faImage,
} from "@fortawesome/free-solid-svg-icons";

function TextEditor() {
  /////////=========>><<========///////////

  const [editorTextInput, setEditorTextInput] = useState("");
  const [highlightedText, setHighlightedText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(editorTextInput);
  };

  useEffect(() => {
    const editSelection = () => {
      setHighlightedText(window.getSelection().toString());
    };
    document.addEventListener("mouseup", editSelection);
    console.log(highlightedText);
  });

  const styleText = (e) => {
    let style = e.currentTarget.id;
    document.execCommand(style);
  };

  /////////=========>><<========///////////
  return (
    <div className="text-editor-container">
      <div className="options">
        <button id="bold" className="text-format-button" onClick={styleText}>
          <FontAwesomeIcon icon={faBold} />
        </button>
        <button id="italic" className="text-format-button" onClick={styleText}>
          <FontAwesomeIcon icon={faItalic} />
        </button>
        <button
          id="underline"
          className="text-format-button"
          onClick={styleText}
        >
          <FontAwesomeIcon icon={faUnderline} />
        </button>
        <button
          id="strikethrough"
          className="text-format-button"
          onClick={styleText}
        >
          <FontAwesomeIcon icon={faStrikethrough} />
        </button>

        <button id="url-link" className="text-format-button">
          <FontAwesomeIcon icon={faLink} />
        </button>
        <button id="img-insert" className="text-format-button">
          <FontAwesomeIcon icon={faImage} />
        </button>
        <select id="h-options" className="format-dropdown">
          <option value="H1">H1</option>
          <option value="H2">H2</option>
          <option value="H3">H3</option>
          <option value="H4">H4</option>
          <option value="H5">H5</option>
          <option value="H6">H6</option>
        </select>
        <select id="font-size" className="format-dropdown"></select>
      </div>
      <div
        id="text-input"
        contentEditable="true"
        value={editorTextInput}
        onBlur={(e) => setEditorTextInput(e.currentTarget.innerHTML)}
      ></div>
      <div id="button-wrapper">
        <button onClick={handleSubmit}>Submit</button>
        <button>Cancel</button>
      </div>
    </div>
  );
}

export default TextEditor;
