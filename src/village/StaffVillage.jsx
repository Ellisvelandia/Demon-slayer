import React from "react";
import Cast from "./Cast";

const StaffVillage = () => {
  return (
    <div
      className="min-w-xs max-w-md w-[76%] pt-8"
      style={{ margin: "0 auto" }}
    >
      <div className="textvillage">STAFF</div>
      <div className="mb-14">
        <ul>
          <li className="text-center mb-6">
            <p className="text-xs">Original Story</p>
            <p className="leading-6">
              Koyoharu Gotoge<span>(JUMP COMICS / SHUEISHA)</span>
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Director</p>
            <p className="leading-6">Haruo Sotozaki</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">
              Character Design / Chief Animation Director
            </p>
            <p className="leading-6">Akira Matsushima</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Screenplay</p>
            <p className="leading-6">ufotable</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Sub Character Design</p>
            <p className="leading-6">
              Miyuki Sato, Yoko Kajiyama
              <br />
              Mika Kikuchi
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Prop Design</p>
            <p className="leading-6">Masaharu Koyama</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Director of Art</p>
            <p className="leading-6">Koji Eto</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Directors of Photography</p>
            <p className="leading-6">Yuichi Terao</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">3D Director</p>
            <p className="leading-6">Kazuki Nishiwaki</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Color Setting</p>
            <p className="leading-6">Yuko Omae</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Editing</p>
            <p className="leading-6">Manabu Kamino</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Music</p>
            <p className="leading-6">Yuki Kajiura, Go Shiina</p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Opening Theme Song</p>
            <p className="leading-6">
              MAN WITH A MISSION x milet
              <br />
              “Kizuna no Kiseki”<span>(Sony Music Records)</span>
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Animation Production</p>
            <p className="leading-6"> ufotable</p>
          </li>
        </ul>
      </div>

      <Cast />
    </div>
  );
};

export default StaffVillage;
