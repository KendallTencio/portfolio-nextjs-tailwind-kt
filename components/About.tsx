import {
  ABOUT_MAIN_IMAGE,
  ABOUT_TITLE,
  BIO_LONG_DESCRIPTION,
  TEXT_CHECK_PROJECTS,
  WHO_I_AM_TEXT,
} from "@/utils/constants";
import React from "react";
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-main-container">
      <div className="about-text-container">
        <p className={`highlight-text-xl`}>{ABOUT_TITLE}</p>
        <h2 className="default-py">{WHO_I_AM_TEXT}</h2>
        <p className="small-py">{BIO_LONG_DESCRIPTION}</p>
        <p className="small-py check-link-text">{TEXT_CHECK_PROJECTS}</p>
      </div>
      <div className="about-image-container">
        <img className="about-image" src={ABOUT_MAIN_IMAGE} />
      </div>
    </div>
  );
};

export default About;
