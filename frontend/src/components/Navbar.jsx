import React, { useContext } from "react";
import { assets } from "../assets/assets";
import { Link, useLocation } from "react-router-dom";
import { CanContext } from "../context/CanContext";

const Navbar = () => {
  const links = [
    { link: "Home", href: "/" },
    { link: "Services", href: "/services" },
    { link: "Healthtips", href: "/healthtips" },
  ];

  const location = useLocation();

  const {isMenuOpen, setIsMenuOpen} = useContext(CanContext)

  return (
    <>
    <nav className="px-5 py-5 rounded flex bg-white justify-between items-center">
      <div className="flex items-center gap-3">
        <img src={assets.health} alt="" />
        <p className="font-bold text-[14px]">Medico</p>
      </div>

      <div className="flex gap-5 items-center">
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

      <div className="flex gap-3 items-center">
        <img src={assets.vector4} alt="" />
        <p className="font-bold text-[16px]">1005-346-272</p>
      </div>
    </nav>

     <div onClick={() => setIsMenuOpen(false)} className={`${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'} top-0 bottom-0 right-0 left-0 fixed z-40 bg-gray-400 bg-opacity-100 backdrop-blur-3xl blur-3xl`}>

     </div>
    {/* nav for smaller screens */}
    <nav  className={`${isMenuOpen ? 'w-[70%]' : "w-0"} z-50 lg:hidden block overflow-hidden fixed top-0 bottom-0 left-0 bg-[#00A0AA]`}>

    </nav>
    </>
  );
};

export default Navbar;
