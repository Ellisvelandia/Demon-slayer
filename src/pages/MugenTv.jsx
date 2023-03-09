import React, { useState } from "react";
import ReactPlayer from "react-player";

const MugenTv = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };
  return (
    <div className="relative w-full my-0 mx-auto min-h-screen">
      <div className="relative w-full min-h-screen my-0 mx-auto">
        <div className="flex  justify-center md:flex-row-reverse flex-col relative w-full">
          <div className="relative md:w-[58%] w-full">
            <figure className="w-full relative m-auto">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678400571/demon%20slayer/kv_nqqrgy.webp"
                alt="mugen tv"
                className="w-full align-middle"
              />
            </figure>
          </div>
          <div className="flex-1 min-w-0 relative pt-16">
            <div className="relative w-[61%]" style={{ margin: "0 auto 34px" }}>
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678400894/demon%20slayer/logo_3_fejift.webp"
                alt="mugen arc logo"
                className="block align-middle w-full"
              />
            </div>
            <div className="relative w-[60%] my-o mx-auto text-white">
              <p className="w-full block align-middle text-2xl font-black tracking-widest">
                With your blade, bring an end to the nightmare.
              </p>
            </div>
            <div className="w-[84%] h-full" style={{ margin: "0 auto" }}>
              <div className="w-full lg:pt-[37%] relative">
                {!playing && (
                  <div className="flex justify-center items-center">
                    <img
                      src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678403494/demon%20slayer/btn-play_ywm69j.webp"
                      alt="play logo"
                      onClick={handlePlayClick}
                      className="absolute bottom-36 w-20 h-20"
                    />
                  </div>
                )}
                <ReactPlayer
                  url="https://www.youtube.com/embed/QwvWdnd2Ktg"
                  className="object-fill"
                  playing={playing}
                  onPlay={() => setPlaying(true)}
                  onPause={() => setPlaying(false)}
                  width="100%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MugenTv;
