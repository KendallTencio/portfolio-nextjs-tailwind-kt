import Image from "next/image";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Icon from "../Icon";
import {
  ABOUT_TITLE,
  HOME_TITLE,
  KT_LOGO,
  KT_LOGO_ALT_TEXT,
  PHRASE_LETS_CONNECT,
  PHRASE_ONE,
  SKILLS_TITLE,
} from "@/utils/constants";
import NavbarLink from "./NavbarLink";
import "../../styles/Navbar.css";

const NavbarMobile = (props: any) => {
  const { nav, handleNav } = props;
  return (
    <div className={nav ? "backdrop-container" : ""}>
      <div
        className={nav ? "mobile-nav-container" : "mobile-nav-container-closed"}
      >
        <div className="default-nav-container">
          <Image
            src={KT_LOGO}
            alt={KT_LOGO_ALT_TEXT}
            width={"200"}
            height={"200"}
          />
          <Icon onClickHandler={handleNav}>
            <AiOutlineClose />
          </Icon>
        </div>
        <div>
          <p className="mobile-phrase-container">{PHRASE_ONE}</p>
        </div>
        <div className="mobile-link-icon-container">
          <ul className="uppercase">
            <NavbarLink name={HOME_TITLE} isMobile />
            <NavbarLink name={ABOUT_TITLE} isMobile />
            <NavbarLink name={SKILLS_TITLE} isMobile />
          </ul>
          <div className="pt-[5rem]">
            <p className={`highlight-text`}>{PHRASE_LETS_CONNECT}</p>
            <div className="mobile-icon-container">
              <Icon>
                <FaLinkedinIn />
              </Icon>
              <Icon>
                <FaGithub />
              </Icon>
              <Icon>
                <AiOutlineMail />
              </Icon>
              <Icon>
                <BsFillPersonLinesFill />
              </Icon>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
