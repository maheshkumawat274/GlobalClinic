import { useContext } from "react";
import { PopupContext } from "./PopupContext";
import type { PopupContextType } from "./PopupContext";

export const usePopup = (): PopupContextType => {
  const context = useContext(PopupContext);
  if (!context) throw new Error("usePopup must be used within PopupProvider");
  return context;
};
