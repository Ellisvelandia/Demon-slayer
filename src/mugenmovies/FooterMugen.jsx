import React from "react";

const FooterMugen = () => {
  return (
    <footer
      className="bg-black relative md:text-right text-center w-full text-white p-8"
    >
      <div className="md:text-base text-xs mb-3 gap-2 inline-flex items-center">
        <a href="http://aniplexusa.com/" target="_blank">
          Aniplex of America
        </a>
        <div className="border-r h-3 "></div>
     
        <a href="https://kimetsu.com/anime/" target="_blank">
          Japanese Official Website
        </a>
      </div>
    </footer>
  );
};

export default FooterMugen;
