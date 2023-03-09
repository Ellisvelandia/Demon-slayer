import React from "react";

const FooterMugen = () => {
  return (
    <footer className="bg-black relative md:text-right text-center w-full text-white p-8">
      <div className="md:text-base text-xs mb-3 gap-2 inline-flex items-center">
        <a href="http://aniplexusa.com/" target="_blank">
          Aniplex of America
        </a>
        <div className="border-r h-3 "></div>

        <a href="https://kimetsu.com/anime/" target="_blank">
          Japanese Official Website
        </a>
        <div className="border-r h-3 "></div>
        <div className="inline-block gap-2">
          <p>©吾峠呼世晴／集英社・アニプレックス・ufotable</p>
        </div>
      </div>
    </footer>
  );
};

export default FooterMugen;
