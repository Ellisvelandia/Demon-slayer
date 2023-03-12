import axios from "axios";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/zoom";
import "./introduction.css";

const ListMoviesReveal = () => {
  const [seasons1, setSeasons1] = useState([]);
  const [screenSize, setScreenSize] = useState(window.screen.width);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.screen.width);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        "https://demon-slayer-api-production.up.railway.app/Demonslayer/v1/getMovie"
      );
      setSeasons1(res.data.movie);
    };
    getMovies();
  }, []);

  return (
    <div className="bg-black pt-[180px] pb-[140px] w-full relative">
      <div className="w-full md:h-[300px] h-[180px] bg-cover absolute block area_up lg:-top-[140px] md:-top-[100px] -top-[20px]"></div>
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
        {seasons1.map((season) => (
          <SwiperSlide key={season._id}>
            <div className="w-full h-full relative drop-shadow-lg shadow-black font-bold text-white border-solid border border-[#b38c48]">
              <img
                src={season.posters}
                alt="comics"
                className="object-fill m-auto  h-[500px] opacity-70 hover:opacity-100"
                loading="lazy"
              />
              <h2 className="absolute top-0 text-center left-0 bg-black text-lg tracking-widest leading-9">
                {season.title}
              </h2>
              <div
                className="cursor-pointer absolute top-[35%] left-[35%] right-[25%]"
                onClick={() => setMovie(season.movies)}
              >
                <img
                  src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678403494/demon%20slayer/btn-play_ywm69j.webp"
                  alt="play logo"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

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

export default ListMoviesReveal;
