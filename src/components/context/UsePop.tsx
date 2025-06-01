import { useContext } from "react";
import { PopupContext } from "../context/PopupContext";
import type { PopupContextType } from "../context/PopupContext";

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within PopupProvider");
  return context;
};
