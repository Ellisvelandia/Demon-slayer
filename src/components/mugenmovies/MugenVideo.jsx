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
    <div className="flex flex-col items-center px-1">
      <h1 className="md:text-4xl text-lg text-white text-center leading-loose tracking-widest my-4 font-black shadow">
        Audio latino
      </h1>
      <div className="bg-[url('https://res.cloudinary.com/dr49dbp8d/image/upload/v1678606255/demon%20slayer/xl_11032374_f5d72b2a_1_smcyju.webp')] bg-cover flex border-solid border md:h-[450px] h-[300px] w-full md:w-[600px]  border-[#6b4312] text-white  justify-center mb-8">
        {!playing && (
          <div className="h-full w-full flex items-center justify-center">
            <img
              src={play}
              alt="play logo"
              className="cursor-pointer w-28 h-28  object-fill relative shadow-md shadow-[#6b4312]"
              loading="lazy"
              width="100%"
              height="100%"
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
            loading="lazy"
            importance="low"
          />
        )}
      </div>
    </div>
  );
};

export default MegunVideo;
