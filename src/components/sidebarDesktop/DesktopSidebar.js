import React, { useEffect, useState } from "react";
import "./DesktopSidebar.css";
import CreateNotesPopup from "../createNotesPopupDesktop/CreateNotesPopup";
import NotesTitle from "../notesSidebar/NotesTitle";

function DesktopSidebar() {
  const [titles, setTitles] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [groupNamesParent, setGroupNamesParent] = useState(
    localStorage.getItem("groupNames") || []
  );

  useEffect(() => {
    const data = localStorage.getItem("groupNames");
    if (data) {
      setGroupNamesParent(JSON.parse(data));
    } else {
      setGroupNamesParent([]);
    }
  }, []);

  useEffect(() => {
    if (groupNamesParent.length > 0) {
      const obj = JSON.parse(localStorage.getItem("groupNames"));
      const result = Object.keys(obj).map((key) => [obj[key]]);
      setTitles(result);
    }
  }, [groupNamesParent]);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="desktop__sidebar">
      <div className="desktop__sidebar__title">Pocket Notes</div>
      <div className="desktop__sidebar__notes__title">
        {titles.length > 0 ? (
          titles.map((title, index) => <NotesTitle key={index} title={title} />)
        ) : (
          
            <div className="desktop__sidebar__notes__title__empty">
           
          </div>
        )}
      <div className="desktop__sidebar__create__notes__btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
         
        </button>
      </div>
      </div>
      {showPopup && (
        <div className="desktop__popup__overlay">
          <CreateNotesPopup
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
            onClose={handleClose}
          />
        </div>
      )}
    </div>
  );
}

export default DesktopSidebar;
