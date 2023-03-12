import React, { useState, useRef } from "react";
import play from "../../assets/play.png";

const MegunVideo = () => {
  const [playing, setPlaying] = useState(false);
  const videoUrl =
    "https://player.odycdn.com/api/v3/streams/free/Kimetsu-No-Yaiba-The-Movie---Mugen-Train-latino-1080p/2f548ce841a4aaf67f510dd4808c9b524fa050f7/99b9e3.mp4";
  const iframeRef = useRef(null);

  const handlePlayClick = () => {
    setPlaying(true);
    iframeRef.current.src = videoUrl;
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl text-white text-center leading-loose tracking-widest my-4 font-black shadow">
        Audio latino
      </h1>
      <div className="w-full h-full max-h-full border border-solid border-[#89000a] relative">
        {!playing && (
          <div className="w-full h-full bg-[rgba(0,0,0,0.4)] flex items-center justify-center">
            <img
              src={play}
              alt="play logo"
              className="cursor-pointer"
              loading="lazy"
              onClick={handlePlayClick}
            />
          </div>
        )}
        {playing && (
          <iframe
            title="video-player"
            src={videoUrl}
            className="object-fill"
            controls
            width="100%"
            height="100%"
            ref={iframeRef}
          />
        )}
      </div>
    </div>
  );
};

export default MegunVideo;
