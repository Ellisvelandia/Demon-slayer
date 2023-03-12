import React from "react";
import { Link } from "react-router-dom";
import FooterMugen from "../components/mugenmovies/FooterMugen";
import MegunVideo from "../components/mugenmovies/MugenVideo";
import Staff from "../components/mugenmovies/Staff";

const MugenMovie = () => {
  return (
    <div className="relative w-full wrappers min-h-screen z-50">
      <div className="w-full md:justify-start justify-center flex">
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678386076/demon%20slayer/logo_mzackh.png"
            alt="mugentrain logo"
            className="sm:w-80 w-72 relative px-10 py-0 my-4"
            loading="lazy"
          />
        </Link>
      </div>
      <MegunVideo />
      <Staff />
      <FooterMugen />
    </div>
  );
};

export default MugenMovie;
