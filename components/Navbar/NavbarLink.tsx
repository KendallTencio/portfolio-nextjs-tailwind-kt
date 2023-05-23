import Link from "next/link";
import React from "react";

const NavbarLink = (props: any) => {
  const { name, isMobile } = props;
  return (
    <Link href="/">
      <li
        className={`text-sm ${
          isMobile ? "default-py" : "ml-10 uppercase hover:border-b"
        }`}
      >
        {name}
      </li>
    </Link>
  );
};

export default NavbarLink;
