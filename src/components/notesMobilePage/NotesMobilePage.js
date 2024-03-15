import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotesMobilePage.css";
import enter from "../../assets/icons/enter.png";
import back from "../../assets/icons/bacck.png";
import home from "../../assets/home.png";
import MobileNotesContent from "../notesContentMobile/MobileNotesContent";
import usePocketContext from "../../hooks/usePocketContext";

function NotesMobilePage() {
  const [text, setText] = useState("");
  const [bgColor, setBgColor] = useState("#fff");
  const [initials, setInitials] = useState("");
  const [selectedTitle, setSelectedTitle] = useState("");
  const navigate = useNavigate();
  const { notes, setNotes, selected, setSelected } = usePocketContext();

  useEffect(() => {
    setSelected(localStorage.getItem("selected") || "");
    setNotes(JSON.parse(localStorage.getItem(selected)) || []);
    const groupNames = JSON.parse(localStorage.getItem("groupNames"));
    const selectedGroup = groupNames.find((group) => group.name === selected);
    if (selectedGroup) {
      setBgColor(selectedGroup.color);
      setInitials(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0))
          .join("")
          .toUpperCase()
      );
      setSelectedTitle(
        selectedGroup.name
          .split(" ")
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(" ")
      );
    }
  }, [setSelected, setNotes, selected]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSaveNotes();
      setText("");
    }
  };

  const handleSaveNotes = (e) => {
    const notes = JSON.parse(localStorage.getItem(selected)) || [];
    const newNoteObj = {
      id: Date.now(),
      title: selected,
      content: text,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
    };
    notes.push(newNoteObj);
    localStorage.setItem(selected, JSON.stringify(notes));
    setText("");
    setNotes(notes);
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const goBack = () => {
    setSelected("");
    navigate("/");
  };

  return (
    <div className="mobiles__notes__page">
      <div className="mobile__notes__content__title">
        <img src={back} alt="back" onClick={goBack} />
        <div
          className="mobile__notes__content__title__color"
          style={{ backgroundColor: bgColor }}
        >
          {initials}
        </div>
        <div className="mobile__notes__content__title__text">
          {selectedTitle}
        </div>
      </div>
      <div className="mobile__notes__page__body">
        {notes.length === 0 ? (
          <div
            className="mobile__notes__page__body__empty"
            style={{ backgroundImage: `url(${home})` }}
          ></div>
        ) : (
          <div>
            {notes.map((note, index) => (
              <MobileNotesContent key={index} note={note} />
            ))}
          </div>
        )}
      </div>
      <div className="mobile__notes__input">
        <textarea
          value={text}
          placeholder="Enter your notes here"
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        ></textarea>
        <img src={enter} alt="enter" onClick={handleSaveNotes} />
      </div>
    </div>
  );
}

export default NotesMobilePage;
