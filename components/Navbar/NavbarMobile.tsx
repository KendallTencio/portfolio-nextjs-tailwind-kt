import Image from "next/image";
import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Icons from "../Icons";
import {
  ABOUT_TITLE,
  HOME_TITLE,
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
        className={
          nav
            ? `fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-secondary p-10 ease-in duration-500`
            : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
        }
      >
        <div>
          <div className="flex w-full items-center justify-between">
            <Image
              src="/../public/assets/KT-Page-Logo.png"
              alt="Logo of the page"
              width={"40"}
              height={"40"}
            />
            <div
              onClick={handleNav}
              className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
            >
              <AiOutlineClose />
            </div>
          </div>
          <div>
            <p className="w-[85%] md:w-[90%] py-4">{PHRASE_ONE}</p>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <NavbarLink name={HOME_TITLE} isMobile />
              <NavbarLink name={ABOUT_TITLE} isMobile />
              <NavbarLink name={SKILLS_TITLE} isMobile />
            </ul>
            <div className="pt-[5rem]">
              <p className={`uppercase tracking-widest text-primary`}>
                {PHRASE_LETS_CONNECT}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Icons>
                  <FaLinkedinIn />
                </Icons>
                <Icons>
                  <FaGithub />
                </Icons>
                <Icons>
                  <AiOutlineMail />
                </Icons>
                <Icons>
                  <BsFillPersonLinesFill />
                </Icons>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarMobile;
