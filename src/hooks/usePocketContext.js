import { useContext } from "react";
import PocketContext from "../context/PocketContext";

const usePocketContext = () => {
  return useContext(PocketContext);
}

export default usePocketContext;
