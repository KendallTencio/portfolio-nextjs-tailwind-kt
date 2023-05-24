import React from "react";
import "../styles/Icon.css";

const Icon = (props: any) => {
  const { children, isBig, onClickHandler } = props;
  return (
    <div
      onClick={onClickHandler}
      className={`icon-container ${isBig ? "default-p" : "secondary-p"} ${
        isBig ? "hover-md" : "hover-sm"
      }`}
    >
      {children}
    </div>
  );
};

export default Icon;
