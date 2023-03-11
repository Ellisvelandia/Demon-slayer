import React from "react";
import { villages } from "../data/vilageTrailers";
import "./village.css";

const VillageModal = ({ movie, setMovie }) => {
  return (
    <div
      className="popup-media z-50"
      style={{ display: movie ? "block" : "none" }}
    >
      {movie && (
        <>
          {villages.map((village) => (
            <iframe
              key={village.id}
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

export default VillageModal;
