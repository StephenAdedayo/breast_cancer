import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const CanContext = createContext();

const CanContextProvider = ({ children }) => {
  
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(true)
  
  const value = {
    navigate,
    isMenuOpen,
    setIsMenuOpen
  };

  return <CanContext.Provider value={value}>{children}</CanContext.Provider>;
};

export default CanContextProvider;
