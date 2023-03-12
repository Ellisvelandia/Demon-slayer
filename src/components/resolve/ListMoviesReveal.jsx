import axios from "axios";
import React, { useEffect, useState } from "react";
import "./introduction.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Keyboard, Navigation, Zoom } from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/zoom";

const ListMoviesReveal = () => {
  const [seasons1, setSeasons1] = useState([]);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getMovies = async () => {
      const res = await axios.get(
        "https://slayerdemonsellis.onrender.com/Demonslayer/v1/getMovie"
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
        slidesPerView={1}
        breakpoints={{
          "@0.00": {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          "@0.75": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          hideOnClick: true,
        }}
        zoom={true}
        spaceBetween={10}
        keyboard={{ enabled: true }}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
      >
        {seasons1.map((season) => (
          <SwiperSlide key={season._id} className="relative">
            <div className="w-full border-solid border border-[#b38c48] mx-auto my-8 overflow-hidden text-white">
              <div className="bg-cover opacity-80 hover:opacity-100 relative">
                <img
                  src={season.posters}
                  alt="comics"
                  className="aspect-video lg:h-[400px]"
                  loading="lazy"
                  width="100%"
                  height="100%"
                />
                <h2 className="absolute top-0 left-0 text-white bg-black px-2 py-1 md:text-base text-xs">
                  {season.title}
                </h2>
                <div className="hover:scale-110 w-full h-full justify-center absolute top-0 flex items-center">
                  <img
                    src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678403494/demon%20slayer/btn-play_ywm69j.webp"
                    alt="play logo"
                    loading="lazy"
                    className="lg:w-24 lg:h-24 w-16 h-16 cursor-pointer z-20"
                    width="100%"
                    height="100%"
                    onClick={() => setMovie(season.movies)}
                  />
                </div>
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
              importance="low"
            />
            <button onClick={() => setMovie(null)}>&times;</button>
          </>
        )}
      </div>
    </div>
  );
};

export default ListMoviesReveal;
