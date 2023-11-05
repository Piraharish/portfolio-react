import React from "react";
import { linkedin3d, github3d, email } from "../assets";

const Footer = () => {
  return (
    <div className="flex justify-center items-center p-4 text-white">
      <a href="mailto:piraharish.s@gmail.com">
        <img
          src={email}
          alt="LinkedIn"
          className="w-7 h-7 mx-2 cursor-pointer"
        />
      </a>
      <a href="https://github.com/Piraharish">
        <img
          src={github3d}
          alt="Github"
          className="w-9 h-9 mx-2 cursor-pointer"
        />
      </a>
      <a href="https://www.linkedin.com/in/piraharish">
        <img
          src={linkedin3d}
          alt="LinkedIn"
          className="w-9 h-9 mx-2 cursor-pointer"
        />
      </a>
    </div>
  );
};

export default Footer;
