import React from "react";

const MugenMovie = () => {
  return (
    <div className="relative w-full wrappers min-h-screen z-50" >
      <img
        src="https://demonslayer-anime.com/mugentrain/assets/img/logo.png"
        alt="mugentrain logo"
        className="w-80 relative px-10 py-0 my-4"
        loading="lazy"
      />
      <div className="block">
        <div className="w-full ">
          {/* <img
            src="https://demonslayer-anime.com/mugentrain/assets/img/kv.jpg"
            alt="mugen banner"
            loading="lazy"
            className="w-full align-bottom "
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MugenMovie;
