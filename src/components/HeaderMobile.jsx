import React from "react";
import Links from "./commons/Links";
import SocialIcons from "./commons/SocialIcons";

const HeaderMobile = ({ setToggleMenu }) => {
  return (
    <div
      className="menu w-full h-screen"
      style={{ background: "rgba(0,0,0,0.80)" }}
      onClick={() => setToggleMenu(false)}
    >
      <nav
        className="relative w-full h-full top-[50%] text-white tracking-widest font-normal"
        style={{ transition: "all 0.4s ease-out" }}
      >
        <div className="menu">
          <img
            src="https://i.ibb.co/gv1xMK0/4482244-middle-removebg-preview.png"
            alt="logo"
            className="w-[66vw] m-auto"
          />
          <Links />

          <SocialIcons />
        </div>
      </nav>
    </div>
  );
};

export default HeaderMobile;
