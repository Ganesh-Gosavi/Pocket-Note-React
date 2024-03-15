import React, { useState, useEffect } from "react";
import "./MobileView.css";
import MobilePopup from "../../components/createNotesPopupMobile/MobilePopup";
import MobileNotes from "../../components/notesMobile/MobileNotes";
import MobileHome from "../../components/homeMobile/MobileHome";

function MobileView() {
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
    <div className="mobile__sidebar">
      <div className="mobile__sidebar__title">Pocket Notes</div>
      
      <div className="mobile__sidebar__notes__title">
        {titles.length > 0 ? (
          titles.map((title, index) => (
            <MobileNotes
              title={title}
              key={index}
            />
          ))
        ) : (
          <MobileHome />
        )}
      </div>
      {showPopup && (
        <div className="mobile__popup__overlay">
          <MobilePopup
            onClose={handleClose}
            groupNamesParent={groupNamesParent}
            setGroupNamesParent={setGroupNamesParent}
          />
        </div>
      )}
      <div className="mobile__sidebar__create__notes__btn">
        <button onClick={handleClick}>
          <span id="add">+</span>
        
        </button>
      </div>
    </div>
  );
}

export default MobileView;
