import React from "react";
import Links from "../commons/Links";
import SocialIcons from "../commons/SocialIcons";

const HeaderMobile = ({ setToggleMenu }) => {
  return (
    <div className="fixed w-full top-0 h-full z-[500]">

    <div
      className="menu w-full h-screen"
      style={{ background: "rgba(0,0,0,0.80)" }}
      onClick={() => setToggleMenu(false)}
    >
      <nav
        className="relative w-full h-full top-0 text-white tracking-widest font-normal"
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
          <div className="flex flex-col justify-center items-center w-full pt-8">
            <img
              src="https://kimetsusai.com/assets/img/main_logo_2x.png"
              alt="demon logo"
              className="lg:w-[460px] w-[180px]"
            />
          </div>
        </div>
      </nav>
    </div>
    </div>
  );
};

export default HeaderMobile;
