import MovieWrap from "../components/village/MovieWrap";
import Poster from "../components/village/Poster";
import StaffVillage from "../components/village/StaffVillage";
import { Link } from "react-router-dom";
import "../components/village/village.css";
import VillageFooter from "../components/village/VillageFooter";

const Village = () => {
  return (
    <div className="relative vbg">
      <div className="flex md:flex-row flex-col bg-[rgba(0,0,0,0.6)]">
        <Poster />
        <div
          className="relative md:w-[44%] w-full md:top-0 left-0 box-border text-center text-white"
          style={{ padding: "50px 4% 80px calc(30px + 4%" }}
        >
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678471487/demon%20slayer/logo_5_hap3xg.webp"
                alt="logo"
                loading="lazy"
                className="md:max-w-full w-56 align-bottom h-auto"
                width="100%"
                height="100%"
              />
            </Link>
          </div>
          <p
            className="border-solid border inline-block border-white text-base mt-20"
            style={{ padding: "0.2em 1.2em" }}
          >
            Episode 1
          </p>
          <p className="mt-2 text-md tracking-widest leading-6">
            One Hour Special
          </p>
          <StaffVillage />
          <MovieWrap />
        </div>
      </div>
      <VillageFooter />
    </div>
  );
};

export default Village;
