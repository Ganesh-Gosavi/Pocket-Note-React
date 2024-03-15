import React from "react";
import "./DesktopNotesContent.css";

function DesktopNotesContent({ note }) {
  
  return (
    <div className="desktop__notes__content__note">
      <div className="desktop__notes__content__details">
        <p>{note.content}</p>
      <div className="desktop__notes__content__date__time__details">
        <div className="desktop__notes__content__date">{note.date}</div>
        <div className="desktop__notes__content__time">{note.time}</div>
      </div>
      </div>
    </div>
  );
}

export default DesktopNotesContent;
