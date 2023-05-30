import React from "react";
import Skill from "./Skill";
import { SKILLS_SUB_TITLE, SKILLS_TITLE } from "@/utils/constants";
import { SKILLS } from "@/utils/skills";
import "../../styles/Skill.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <p className={`highlight-text-xl`}>{SKILLS_TITLE}</p>
      <h2 className="default-py">{SKILLS_SUB_TITLE}</h2>
      <div className="skills-grid-container">
        {SKILLS.map((skill) => (
          <Skill skill={skill.name} skillSrc={skill.src} key={skill.id} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
