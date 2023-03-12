import { Link } from "react-router-dom";

const MugenTvTrailer = () => {
  return (
    <div className="flex-1 min-w-0 relative lg:pt-16 pt-8">
      <div className="relative w-[61%] lg:pb-12" style={{ margin: "0 auto" }}>
        <Link to="/">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678400894/demon%20slayer/logo_3_fejift.webp"
            alt="mugen arc logo"
            className="block align-middle w-full"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="relative w-[60%] lg:my-0 py-2 mx-auto text-white">
        <p className="w-full block align-middle lg:text-2xl text-base font-black tracking-widest">
          With your blade, bring an end to the nightmare.
        </p>
      </div>
      <div
        className="w-full bg-tv lg:h-[400px] p-4"
        style={{ margin: "0 auto" }}
      >
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/QwvWdnd2Ktg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          loading="lazy"
          className="object-fill"
        ></iframe>
      </div>
    </div>
  );
};

export default MugenTvTrailer;
