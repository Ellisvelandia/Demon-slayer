import { Link } from "react-router-dom";
import DistricTrailer from "../distric/DistricTrailer";
import "../distric/distric.css";
import FooterDistric from "../distric/FooterDistric";
import DistricSlider from "../distric/DistricSlider";

const Distric = () => {
  return (
    <>
      <div className="relative bg-distric">
        <div className="flex justify-center lg:flex-row-reverse flex-col w-full">
          <div className=" lg:w-[58%] object-fill w-full">
            <figure className="w-full m-auto">
              <img
                src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678418473/demon%20slayer/img-main-pc_1_1_lc2ond.webp"
                alt="mugen tv"
                className="w-full align-middle"
              />
            </figure>
          </div>

          <div className="flex-1 min-w-0  lg:pt-16 pt-8">
            <div className=" w-[61%] lg:pb-12" style={{ margin: "0 auto" }}>
              <Link to="/">
                <img
                  src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678418015/demon%20slayer/logo_4_bkuioj.webp"
                  alt="mugen arc logo"
                  className="block align-middle w-full"
                />
              </Link>
            </div>
            <div className=" w-[60%] lg:my-0 py-2 mx-auto text-white">
              <p className="w-full block align-middle lg:text-xl text-base font-black tracking-widest">
                Stop that crying, and you out of it for crying out loud. we're
                gonna train now!
              </p>
            </div>
            <DistricTrailer />
          </div>
        </div>
        <DistricSlider />
        <FooterDistric />
      </div>
    </>
  );
};

export default Distric;
