import React from "react";
import { videos } from "../../data/videoTrailer";
import "./popup.css";

export const Popup = ({ setMovie, movie }) => {
  return (
    <div
      className="popup-media z-50"
      style={{ display: movie ? "block" : "none" }}
    >
      {movie && (
        <>
          {videos.map((video) => (
            <iframe
              key={video.id}
              title=""
              src={movie}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              width="100%"
              height="100%"
              className="aspect-video w-full"
              loading="lazy"
            />
          ))}
          <button onClick={() => setMovie(null)}>&times;</button>
        </>
      )}
    </div>
  );
};
