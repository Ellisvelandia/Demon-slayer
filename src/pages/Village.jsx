import Poster from "../village/Poster";
import StaffVillage from "../village/StaffVillage";
import "../village/village.css";

const Village = () => {
  return (
    <div className="relative z-50 vbg">
      <div className="flex md:flex-row flex-col bg-[rgba(0,0,0,0.6)]">
        <Poster />
        <div
          className="relative md:w-[44%] w-full md:top-0 left-0 box-border text-center text-white"
          style={{ padding: "50px 4% 80px calc(30px + 4%" }}
        >
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678471487/demon%20slayer/logo_5_hap3xg.webp"
            alt="logo"
            className="max-w-full align-bottom h-auto"
          />
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
        </div>
      </div>
    </div>
  );
};

export default Village;
