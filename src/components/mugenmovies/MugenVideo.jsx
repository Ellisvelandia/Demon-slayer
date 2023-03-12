import React, { useState } from "react";
import ReactPlayer from "react-player";
import play from "../../assets/play.png";

const MegunVideo = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div className="flex lg:flex-row flex-col">
      <div className="w-full p-1 justify-center items-center flex flex-col">
        <h1 className="text-4xl text-white text-center leading-loose tracking-widest my-4 font-black shadow">
          Audio latino
        </h1>
        <div className="lg:w-[50%] md:w-[70%] w-full h-full max-h-full cursor-pointer border border-solid border-[#89000a] relative">
          {!playing && (
            <div className="w-full flex justify-center items-center bg-[rgba(0,0,0,0.4)]">
              <img
                src={play}
                alt="play logo"
                loading="lazy"
                onClick={handlePlayClick}
                className="absolute top-0"
              />
            </div>
          )}
          <ReactPlayer
            url="https://player.odycdn.com/api/v3/streams/free/Kimetsu-No-Yaiba-The-Movie---Mugen-Train-latino-1080p/2f548ce841a4aaf67f510dd4808c9b524fa050f7/99b9e3.mp4 "
            className="object-fill"
            controls
            playing={playing}
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
            width="100%"
            light="https://www.pluggedin.com/wp-content/uploads/2021/05/Demon-Slayer-The-Movie.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default MegunVideo;
