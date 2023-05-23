import {
  ABOUT_TITLE,
  BIO_LONG_DESCRIPTION,
  MAIN_GREEN_HEX,
  PHRASE_CHECK_PROJECTS,
} from "@/utils/constants";
import React from "react";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className={`uppercase text-xl tracking-widest text-primary`}>
            {ABOUT_TITLE}
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2">{BIO_LONG_DESCRIPTION}</p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            {PHRASE_CHECK_PROJECTS}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://media.tate.org.uk/aztate-prd-ew-dg-wgtail-st1-ctr-data/images/caspar_david_friedrich_wanderer_above_the_sea_.width-340.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
