import axios from "axios";
import React, { useEffect, useState } from "react";
import Carousel from "better-react-carousel";
import "../mugentv/mugentv.css";
import play from "../assets/play.png";
import MugenSliderModal from "./MugenSliderModal";

const MugenSlider = () => {
  const [mugenMovies, setMugenMovies] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMugen = async () => {
      const res = await axios.get(
        "https://demon-slayer-api-production.up.railway.app/Demonslayer/v1/getMovieMugen"
      );
      setMugenMovies(res.data.movie);
    };
    getMugen();
  }, []);

  return (
    <div className="my-20 bg-black bg-tv w-full">
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
                />
                <p className="absolute top-0 left-0 text-white bg-black px-2 py-1 md:text-base text-xs">
                  {mugen.title}
                </p>
                <div className="hover:scale-150 w-full h-full justify-center absolute top-0 flex items-center">
                  <img
                    src={play}
                    alt="play logo"
                    className="w-28 h-28 cursor-pointer z-20"
                    onClick={() => setMovie(`${mugen.movies}`)}
                  />
                </div>
              </div>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <MugenSliderModal
        movie={movie}
        setMovie={setMovie}
        mugenMovies={mugenMovies}
      />
      <div className="w-full justify-center flex mt-8">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678571237/demon%20slayer/n-2021-05-16-21-001-removebg-preview_w4zccr.webp"
          alt="demons slayer"
          className="md:w-80 w-60"
        />
      </div>
    </div>
  );
};

export default MugenSlider;
