import React, { useContext, useEffect } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { CanContext } from "../context/CanContext";
import { HiOutlineMenuAlt1 } from "react-icons/hi";


const Navbar = () => {
  const links = [
    { link: "Home", href: "/" },
    { link: "Services", href: "/services" },
    { link: "Healthtips", href: "/healthtips" },
  ];

  const location = useLocation();

  const {isMenuOpen, setIsMenuOpen} = useContext(CanContext)

  useEffect(() => {
    setIsMenuOpen(false)
  }, [location])

  return (
    <>
    <nav className="px-5 py-5 rounded flex bg-white justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={assets.health} alt="" />
        <p className="font-bold text-[14px]">Medico</p>
      </div>

      <div className="lg:flex gap-5 items-center  hidden">
        {links.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={index}
              to={link.href}
              className={`${
                isActive ? "text-[#00A0AA]" : ""
              } text-[16px] font-medium`}
            >
              {link.link}
            </Link>
          );
        })}
      </div>

      <div className="lg:flex gap-3 items-center hidden  ">
        <img src={assets.vector4} alt="" />
        <p className="font-bold text-[16px]">1005-346-272</p>
      </div>

      <div onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden block">
        {/* <img src="" alt="" /> */}
       <HiOutlineMenuAlt1 />
      </div>
    </nav>

     <div onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} lg:hidden block top-0 bottom-0 right-0 left-0 fixed z-40 bg-gray-400 bg-opacity-100 backdrop-blur-3xl blur-3xl transition-opacity duration-500 delay-75 ease-in-out`}>

     </div>
    {/* nav for smaller screens */}
    <nav  className={`${isMenuOpen ? 'w-[70%]' : "w-0"} z-50 transition-all duration-200 delay-75 ease-in lg:hidden block overflow-hidden fixed top-0 bottom-0 left-0 bg-[#00A0AA] `} >
      <div className="flex flex-col gap-5 pt-10 mb-5">
        {links.map((link, index) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={index}
              to={link.href}
              className={`${isActive ? "bg-white text-black" : "text-white"}  py-2 px-5`}>
              {link.link}
            </Link>
          );
        })}
      </div>

            <div className="flex gap-3 items-center   px-5">
        <img src={assets.vector4} alt="" />
        <p className="font-bold text-white text-[16px]">1005-346-272</p>
      </div>

    </nav>
    </>
  );
};

export default Navbar;
