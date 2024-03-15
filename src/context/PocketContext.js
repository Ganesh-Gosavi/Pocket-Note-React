import { createContext, useState } from "react";

const PocketContext = createContext({
  notes: [],
  setNotes: () => {},
  selected: "",
  setSelected: () => {},
});

const Provider = ({ children }) => {
  const [selected, setSelected] = useState(""); // eslint-disable-line
  const [notes, setNotes] = useState([]); // eslint-disable-line

  const valueToShare = {
    notes,
    setNotes,
    selected,
    setSelected,
  };

  return (
    <PocketContext.Provider value={valueToShare}>
      {children}
    </PocketContext.Provider>
  );
};

export { Provider };

export default PocketContext;
