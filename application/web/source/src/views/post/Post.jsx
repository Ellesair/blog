import React from "react";
import TextEditor from "../../components/texteditor/TextEditor.jsx";
import "./post.css";

function post() {
  return (
    <div className="post-body">
      <TextEditor />
    </div>
  );
}

export default post;
