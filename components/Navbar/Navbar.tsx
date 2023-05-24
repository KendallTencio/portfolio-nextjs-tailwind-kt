import Image from "next/image";
import React, { useState } from "react";
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

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="main-nav-container">
      <div className="default-nav-container desktop-container">
        <Image
          src={KT_LOGO}
          alt={KT_LOGO_ALT_TEXT}
          width={"50"}
          height={"50"}
        />
        <div>
          <ul className="link-container">
            <NavbarLink name={HOME_TITLE} />
            <NavbarLink name={ABOUT_TITLE} />
            <NavbarLink name={SKILLS_TITLE} />
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
