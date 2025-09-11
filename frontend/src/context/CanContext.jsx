import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const CanContext = createContext();

const CanContextProvider = ({ children }) => {
  
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(true)
    const [isModalOpen, setIsModalOpen] = useState(false);
   const location = useLocation()
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  const [allTips, setAllTips] = useState([]);
  const [tipsModal, setTipsModal] = useState(false);

  const getAllTips = async () => {

    if (location.pathname === "/healthtips") {
      try {
        const { data } = await axios.post(backendUrl + "/api/tips/get", {});
        if (data.success) {
          setAllTips(data.data);
          toast.success(data.message, { toastId: "success" });
        } else {
          toast.error(data.message, { toastId: "error" });
        }
      } catch (error) {
        console.log(error.message);
        toast.error(error.message, { toastId: "error" });
      }
    }
  };

  useEffect(() => {
    getAllTips();
  }, []);

  
  const value = {
    navigate,
    isMenuOpen,
    setIsMenuOpen,
    backendUrl,
    isModalOpen, setIsModalOpen, getAllTips, allTips, setAllTips, tipsModal, setTipsModal
  };

  return <CanContext.Provider value={value}>{children}</CanContext.Provider>;
};

export default CanContextProvider;
