import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

const MugenTvTrailer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div className="flex-1 min-w-0 relative lg:pt-16 pt-8">
      <Link to="/">
        <div className="relative w-[61%] lg:pb-12" style={{ margin: "0 auto" }}>
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678400894/demon%20slayer/logo_3_fejift.webp"
            alt="mugen arc logo"
            className="block align-middle w-full"
          />
        </div>
      </Link>
      <div className="relative w-[60%] lg:my-0 py-2 mx-auto text-white">
        <p className="w-full block align-middle lg:text-2xl text-base font-black tracking-widest">
          With your blade, bring an end to the nightmare.
        </p>
      </div>
      <div className="w-full bg-tv lg:h-screen" style={{ margin: "0 auto" }}>
        <div className="w-full xl:pt-[27%] relative px-2 lg:py-0 py-8">
          {!playing && (
            <div className="flex justify-center items-center">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678418525/demon%20slayer/btn-play_1_isguwo.webp"
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
  );
};

export default MugenTvTrailer;
