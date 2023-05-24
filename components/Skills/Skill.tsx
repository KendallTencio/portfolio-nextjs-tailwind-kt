import Image from "next/image";
import React from "react";
import "../../styles/Skill.css";

const Skill = (props: any) => {
  const { skill, skillSrc } = props;
  return (
    <div className="skill-container skill-grid-container">
      <div className="m-auto">
        <Image src={skillSrc} alt="/" width={"40"} height={"40"} />
      </div>
      <div className="skill-name-container">
        <h3>{skill}</h3>
      </div>
    </div>
  );
};

export default Skill;
