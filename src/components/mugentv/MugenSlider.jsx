import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import "./mugentv.css";
import play from "../../assets/play.png";

const MugenSlider = () => {
  const [mugenMovies, setMugenMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMugen = async () => {
      const res = await axios.get(
        "https://slayerdemonsellis.onrender.com/Demonslayer/v1/getMovieMugen"
      );
      setMugenMovies(res.data.movie);
    };
    getMugen();
  }, []);

  return (
    <div className="my-20 w-full">
      <Carousel
        cols={2}
        rows={1}
        gap={10}
        loop
        showDots={true}
        scrollSnap={true}
        autoplay={true}
        dotColorInactive="#000"
        mobileBreakpoint={767}
      >
        {mugenMovies.map((mugen) => (
          <Carousel.Item key={mugen._id} className="relative">
            <div
              className="w-full border-solid border border-[#b38c48] mx-auto my-8 overflow-hidden"
              key={mugen.id}
            >
              <div className="bg-cover opacity-80 hover:opacity-100 relative">
                <img
                  src={mugen.posters}
                  alt="logos oficial trailers"
                  className="aspect-video"
                  loading="lazy"
                />
                <p className="absolute top-0 left-0 text-white bg-black px-2 py-1 md:text-base text-xs">
                  {mugen.title}
                </p>
                <div className="hover:scale-150 w-full h-full justify-center absolute top-0 flex items-center">
                  <img
                    src={play}
                    alt="play logo"
                    className="w-28 h-28 cursor-pointer z-20"
                    loading="lazy"
                    onClick={() => setMovie(`${mugen.movies}`)}
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>

      <div className="w-full justify-center flex mt-8">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678571237/demon%20slayer/n-2021-05-16-21-001-removebg-preview_w4zccr.webp"
          alt="demons slayer"
          className="md:w-80 w-60"
          loading="lazy"
        />
      </div>

      <div
        className="popup-media z-50"
        style={{ display: movie ? "block" : "none" }}
      >
        {movie && (
          <>
            <iframe
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
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MugenSlider;