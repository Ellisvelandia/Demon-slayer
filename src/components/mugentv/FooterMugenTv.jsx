import React from "react";
import { Link } from "react-router-dom";

const FooterMugenTv = () => {
  return (
    <footer className="bg-black relative text-[#fff] pt-9 xl:pr-36 lg:pr-6 md:pr-8 pb-9 pl-0 ">
      <div className="flex md:justify-end justify-center mb-4 flex-wrap text-right lg:text-[14px] text-[10px]">
        <div className="pl-3 ml-3 relative">
          <a href="http://aniplexusa.com/" target="_blank">
            Aniplex of America
          </a>
        </div>
        <div className="border-r px-2 h-3 "></div>
        <div className="pl-3 ml-3 relative">
          <a href="https://kimetsu.com/anime/" target="_blank">
            Japanese Official Website
          </a>
        </div>
      </div>
      <p className="text-xs text-[#666666] md:text-right text-center text-[11px] md:my-0 my-4">
        ©Koyoharu Gotoge / SHUEISHA, Aniplex, ufotable
      </p>
      <div className="md:text-left text-center lg:tracking-widest flex justify-center md:my-0 my-6  items-center md:absolute md:top-[50%] md:left-10 md:transform md:-translate-y-1/2 lg:text-[14px] md:text-[11px] text-[12px]">
        <div className="flex-col flex">
          <Link to="/resolvearc" className="list-none relative mb-3">
            Demon Slayer: Kimetsu No Yaiba Tanjiro Kamado Unwavering Resolve Arc
          </Link>
          <Link to="/mugenmovie" className="list-none relative mb-3">
            Demon Slayer -Kimetsu No Yaiba- The Movie: Mugen Train
          </Link>
          <Link to="/distric" className="list-none relative mb-3">
            Demon Slayer -Kimetsu No Yaiba- Entertainment District Arc
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default FooterMugenTv;
