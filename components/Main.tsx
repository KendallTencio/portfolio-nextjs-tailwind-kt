import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import {
  PHRASE_ONE,
  GREETING_ONE,
  SHORT_DESCRIPTION,
  NAME,
  POSITION,
} from "@/utils/constants";
import Icons from "./Icons";
import "../styles/Main.css";

const Main = () => {
  return (
    <div className="main-section-container">
      <div>
        <p className="phrase-container">{PHRASE_ONE}</p>
        <h1 className="primary-text">
          {GREETING_ONE}
          <span className={`text-primary`}>{NAME}</span>
        </h1>
        <h1 className="primary-text">{POSITION}</h1>
        <p className="secondary-text description-container">
          {SHORT_DESCRIPTION}
        </p>
        <div className="icons-container">
          <Icons isBig>
            <FaLinkedinIn />
          </Icons>
          <Icons isBig>
            <FaGithub />
          </Icons>
          <Icons isBig>
            <AiOutlineMail />
          </Icons>
          <Icons isBig>
            <BsFillPersonLinesFill />
          </Icons>
        </div>
      </div>
    </div>
  );
};

export default Main;
