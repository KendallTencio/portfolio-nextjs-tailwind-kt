import Image from "next/image";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import {
  ABOUT_TITLE,
  HOME_TITLE,
  KT_LOGO,
  KT_LOGO_ALT_TEXT,
  SKILLS_TITLE,
} from "@/utils/constants";
import NavbarLink from "./NavbarLink";
import NavbarMobile from "./NavbarMobile";
import "../../styles/Navbar.css";

const navbarLinks = [HOME_TITLE, ABOUT_TITLE, SKILLS_TITLE];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [showShadow, setShowShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleScroll = () => {
    const { scrollY } = window;
    setShowShadow(scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="main-nav-container">
      <div
        className={`default-nav-container desktop-container ${
          showShadow ? "nav-shadow" : ""
        } `}
      >
        <Image
          priority
          src={KT_LOGO}
          alt={KT_LOGO_ALT_TEXT}
          width={"180"}
          height={"100"}
        />
        <div>
          <ul className="link-container">
            {navbarLinks.map((link, index) => (
              <NavbarLink name={link} key={index} />
            ))}
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <NavbarMobile nav={nav} handleNav={handleNav} />
    </div>
  );
};

export default Navbar;
