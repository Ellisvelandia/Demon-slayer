import React, { useState } from "react";
import km from "../../assets/km.png";
import { Pivot as Hamburger } from "hamburger-react";
import HeaderMobile from "./HeaderMobile";
import SocialIcons from "../commons/SocialIcons";
import Links from "../commons/Links";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
      <div
        className="pt-10 w-60 bg-black fixed box-border left-0 top-0 bottom-auto border-r-2 border-solid border-[#6b4312] min-h-screen flex flex-col invisible md:visible z-10"
        style={{ paddingTop: "1px" }}
      >
        <div className="text-center items-center pt-6 pb-7">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678399511/demon%20slayer/logo_1_eldkrr.webp"
            alt="demon slayer"
            className="w-full"
            loading="lazy"
          />
        </div>

        <Links />
        <div className="px-3 py-5 border-t-2 border-solid border-[#6b4312] w-full">
          <SocialIcons />
        </div>
        <div className="m-auto pb-5">
          <div className="relative ">
            <img
              src={km}
              alt="logo footer"
              className="object-fill"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div
        className="md:hidden px-2 py-0 relative bg-black border-b-2 border-solid border-[#6b4312] w-full z-50"
        style={{ paddingTop: "40px", paddingBottom: "10px" }}
      >
        <div className="burguers">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="#fff"
            duration={0.6}
            easing="ease-in"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
        <div className="w-[16vw] m-auto">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678399641/demon%20slayer/logo_2_zepmcn.webp"
            alt="Demon Slayer: Kimetsu No Yaiba"
            className="max-w-full align-bottom overflow-clip"
            loading="lazy"
          />
        </div>
        {isOpen && <HeaderMobile setToggleMenu={setToggleMenu} />}
      </div>
    </>
  );
};

export default Header;
