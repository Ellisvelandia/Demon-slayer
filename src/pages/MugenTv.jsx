import MugenTvTrailer from "../components/mugentv/MugenTvTrailer";
import "../components/mugentv/mugentv.css";
import FooterMugenTv from "../components/mugentv/FooterMugenTv";
import MugenSlider from "../components/mugentv/MugenSlider";

const MugenTv = () => {
  return (
    <div className="relative w-full my-0 mx-auto bg-tv">
      <div className="flex justify-center lg:flex-row-reverse flex-col relative w-full">
        <div className="relative lg:w-[58%] w-full">
          <figure className="w-full m-auto">
            <img
              src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678400571/demon%20slayer/kv_nqqrgy.webp"
              alt="mugen tv"
              className="w-full align-middle"
              loading="lazy"
              width="100%"
              height="100%"
            />
          </figure>
        </div>
        <MugenTvTrailer />
      </div>
      <MugenSlider />
      <FooterMugenTv />
    </div>
  );
};

export default MugenTv;
