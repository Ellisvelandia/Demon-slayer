import axios from "axios";
import React, { useEffect, useState } from "react";
import "./mugentv.css";
import play from "../../assets/play.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/zoom";

const MugenSlider = () => {
  const [mugenMovies, setMugenMovies] = useState([]);
  const [movie, setMovie] = useState(null);
  const [screenSize, setScreenSize] = useState(window.screen.width);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

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
      <Swiper
        style={{
          "--swiper-pagination-color": "#C90000",
        }}
        modules={[Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom]}
        slidesPerView={
          screenSize < 768 ? 1 : screenSize >= 768 && screenSize < 1024 ? 2 : 3
        }
        navigation
        zoom={true}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {mugenMovies.map((mugen) => (
          <SwiperSlide key={mugen._id} className="relative">
            <div
              className="w-full border-solid border border-[#b38c48] mx-auto my-8 overflow-hidden"
              key={mugen.id}
            >
              <div className="bg-cover opacity-80 hover:opacity-100 relative">
                <img
                  src={mugen.posters}
                  alt="logos oficial trailers"
                  className="aspect-video lg:h-[400px]"
                  loading="lazy"
                  width="100%"
                  height="auto"
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
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="w-full justify-center flex mt-8">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678571237/demon%20slayer/n-2021-05-16-21-001-removebg-preview_w4zccr.webp"
          alt="demons slayer"
          className="md:w-80 w-60"
          loading="lazy"
          width="100%"
          height="100%"
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
              importance="low"
            />
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default MugenSlider;
