import React from "react";
import Skill from "./Skill";
import { MAIN_GREEN_HEX } from "@/utils/constants";

const Skills = () => {
  return (
    <div className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p
          className={`uppercase text-xl tracking-widest text-[${MAIN_GREEN_HEX}]`}
        >
          Skills
        </p>
        <h2 className="py-4">What I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Skill />
          <Skill />
          <Skill />
          <Skill />
          <Skill />
        </div>
      </div>
    </div>
  );
};

export default Skills;
