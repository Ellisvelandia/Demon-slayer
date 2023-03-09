import React from "react";

const Staff = () => {
  return (
    <div className="rounded-sm w-full flex lg:flex-row flex-col p-2">
      <div className=" lg:w-1/2 w-full h-full rounded-md justify-center items-center p-2">
        <img
          src="https://demonslayer-anime.com/mugentrain/assets/img/kv.jpg"
          alt="mugen banner"
          loading="lazy"
          className="w-full align-bottom "
        />
      </div>
      <div className=" lg:w-1/2 w-full h-full rounded-md justify-center items-center p-2">
        <img
          src="https://demonslayer-anime.com/mugentrain/assets/img/title_staff.png"
          alt="staff"
          className="m-auto w-[230px]"
        />
        <img
          src="https://demonslayer-anime.com/mugentrain/assets/img/txt_staff.png"
          alt="Original Story Koyoharu Gotoge (Weekly Shonen Jump / SHUEISHA) Director Haruo Sotozaki Character Design/Chief Animation Director Akira Matsushima Screenplay ufotable Sub Character Design	Miyuki Sato Yoko Kajiyama Mika Kikuchi Prop Design	Masaharu Koyama Conceptual Art Koji Eto Masaru Yanaka Yuri Kabasawa Director of Photography	Yuichi Terao 3D Director Kazuki Nishiwaki Color Setting Yuko Omae Editing Manabu Kamino Music Yuki Kajiura Go Shiina Animation Production ufotable"
        />
      </div>
    </div>
  );
};

export default Staff;
