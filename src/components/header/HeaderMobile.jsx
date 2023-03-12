import React from "react";
import Links from "../Links";
import SocialIcons from "../SocialIcons";

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
              src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678590249/demon%20slayer/4482244-middle-removebg-preview_kzthxl.webp"
              alt="logo"
              className="w-[66vw] m-auto"
              loading="lazy"
            />
            <Links />

            <SocialIcons />
            <div className="flex flex-col justify-center items-center w-full pt-8">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678590333/demon%20slayer/main-logo-2x_x9hrht.webp"
                alt="demon logo"
                className="lg:w-[460px] w-[180px]"
                loading="lazy"
              />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default HeaderMobile;
