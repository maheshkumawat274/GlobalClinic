// src/context/PopupContext.ts
import { createContext } from "react";

export type PopupContextType = {
  isOpen: boolean;
  openPopup: () => void;
  closePopup: () => void;
};

export const PopupContext = createContext<PopupContextType | undefined>(undefined);
