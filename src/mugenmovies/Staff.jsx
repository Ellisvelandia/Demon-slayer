import React from "react";

const Staff = () => {
  return (
    <div className="rounded-sm w-full flex lg:flex-row flex-col p-2">
      <div className=" lg:w-1/2 w-full h-full rounded-md justify-center items-center p-2">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678386499/demon%20slayer/kv_rkic4n_1_mvlph5.webp"
          alt="mugen banner"
          loading="lazy"
          className="w-full align-bottom "
        />
      </div>
      <div className=" lg:w-1/2 w-full h-full rounded-md justify-center items-center p-2">
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678386486/demon%20slayer/title_staff_wbn27b.webp"
          alt="staff"
          className="m-auto w-[230px]"
        />
        <img
          src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678386672/demon%20slayer/txt_staff_izoqkh.webp"
          alt="Original Story Koyoharu Gotoge (Weekly Shonen Jump / SHUEISHA) Director Haruo Sotozaki Character Design/Chief Animation Director Akira Matsushima Screenplay ufotable Sub Character Design	Miyuki Sato Yoko Kajiyama Mika Kikuchi Prop Design	Masaharu Koyama Conceptual Art Koji Eto Masaru Yanaka Yuri Kabasawa Director of Photography	Yuichi Terao 3D Director Kazuki Nishiwaki Color Setting Yuko Omae Editing Manabu Kamino Music Yuki Kajiura Go Shiina Animation Production ufotable"
        />
      </div>
    </div>
  );
};

export default Staff;