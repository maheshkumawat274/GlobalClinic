// src/context/PopupProvider.tsx
import React, { useState } from "react";
import { PopupContext } from "./PopupContext";

export const PopupProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openPopup = () => setIsOpen(true);
  const closePopup = () => setIsOpen(false);

  return (
    <PopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </PopupContext.Provider>
  );
};
