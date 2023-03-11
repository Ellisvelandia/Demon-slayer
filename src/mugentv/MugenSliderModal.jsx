import React from "react";

const MugenSliderModal = ({ movie, setMovie, mugenMovies }) => {
  return (
    <div
      className="popup-media z-50"
      style={{ display: movie ? "block" : "none" }}
    >
      {movie && (
        <>
          {mugenMovies.map((mugen) => (
            <iframe
              key={mugen._id}
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

export default MugenSliderModal;
