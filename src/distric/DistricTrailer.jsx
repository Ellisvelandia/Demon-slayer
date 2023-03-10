import React, { useState } from "react";
import ReactPlayer from "react-player";

const DistricTrailer = () => {
  const [playing, setPlaying] = useState(false);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  return (
    <div className="w-full bg-distric" style={{ margin: "0 auto" }}>
      <div className="w-full lg:pt-[27%] relative px-2 lg:py-0 py-8">
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
          url="https://www.youtube.com/embed/qiD99QYHqeo"
          className="object-fill"
          playing={playing}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          width="100%"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default DistricTrailer;
