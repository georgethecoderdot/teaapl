import React from "react";
import { FaSmile } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#071923] text-white text-xs p-4 text-center w-full font-poppins text-base leading-7 font-normal">
      © teaapl.gr 2023 | Developed by{" "}
      <a className="text-custom-new-blue" href="">
        SOFTBIZ
      </a>
      <FaSmile className="inline-block ml-2" />
    </div>
  );
};

export default Footer;
