import React from "react";
import { videos } from "../../data/videoTrailer";

const VideoTrailer = ({ setMovie }) => {
  return (
    <div className="flex lg:flex-row flex-col">
      {videos.map((video) => (
        <div
          className="lg:w-[50%] p-1 border-r border-solid border-[#6b4312]"
          key={video.id}
        >
          <div
            className="w-full h-full max-h-60 cursor-pointer relative before:block before:absolute before:w-full before:h-full before:top-0 before:left-0 befores"
            onClick={() => setMovie(`${video.video}`)}
          >
            <img
              src={video.img}
              alt="trailer"
              className="w-full h-full object-fill"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoTrailer;
