import { useRef, useEffect } from "react";
import classes from "./TextEditor.module.css";
import IconBold from "./icons/IconBold";
import IconItalic from "./icons/IconItalic";

function TextEditor() {
  const textareaRef = useRef(null);
  const handleBold = () => {};
  const handleItalic = () => {};

  return (
    <div className={classes.texteditor}>
      <div className={classes.toolbar}>
        <div className={classes.icon} onClick={handleBold}>
          <IconBold />
        </div>
        <div className={classes.icon} onClick={handleItalic}>
          <IconItalic />
        </div>
      </div>
      <div className={classes.textarea} contentEditable ref={textareaRef} />
    </div>
  );
}

export default TextEditor;
