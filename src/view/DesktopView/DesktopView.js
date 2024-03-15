import React from "react";
import "./DesktopView.css";
import DesktopSidebar from "../../components/sidebarDesktop/DesktopSidebar";
import DesktopHome from "../../components/homeDesktop/DesktopHome";
import DesktopNotes from "../../components/notesDesktop/DesktopNotes";
import usePocketContext from "../../hooks/usePocketContext";

function DesktopView() {
  const { selected } = usePocketContext();

  return (
    <div className="desktop">
      <DesktopSidebar />
      {selected.length > 0 ? <DesktopNotes /> : <DesktopHome />}
    </div>
  );
}

export default DesktopView;
