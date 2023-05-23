import { PADDING_DEFAULT } from "@/utils/constants";
import React from "react";

const Icons = (props: any) => {
  const { children, isBig } = props;
  return (
    <div
      className={`rounded-full shadow-lg shadow-gray-400 ${
        isBig ? PADDING_DEFAULT : "p-3"
      } cursor-pointer ${
        isBig ? "hover:scale-110" : "hover:scale-105"
      } ease-in duration-300`}
    >
      {children}
    </div>
  );
};

export default Icons;
