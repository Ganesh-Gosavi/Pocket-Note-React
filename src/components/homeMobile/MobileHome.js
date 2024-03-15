import React from "react";
import "./MobileHome.css";
import notes from "../../assets/notes.jpg";

function MobileHome() {
  return (
    <div
      className="mobile__home"
      style={{
        backgroundImage: `url(${notes})`,
      }}
    >
      Create Your First Note...
    </div>
  );
}

export default MobileHome;
