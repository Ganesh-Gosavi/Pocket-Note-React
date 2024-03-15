
import React from "react";
import "./MobileNotes.css";
import { useNavigate } from "react-router-dom";
import usePocketContext from "../../hooks/usePocketContext";

function MobileNotes({ title }) {
  const navigate = useNavigate();
  const { setSelected } = usePocketContext();
  const initials = title[0].name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const newTitle = title[0].name
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
  const handleTitleClick = () => {
    localStorage.setItem("selected", title[0].name);
    setSelected(title[0].name);
    navigate("/notes");
  };
  return (
    <div onClick={handleTitleClick} className="mobile__notes">
      <div
        className="mobile__notes__icon"
        style={{ backgroundColor: title[0].color }}
      >
        {initials}
      </div>
      <div className="mobile__notes__title">{newTitle}</div>
    </div>
  );
}

export default MobileNotes;
