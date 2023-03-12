import React from "react";

const Cast = () => {
  return (
    <>
      <div className="textvillage">CAST</div>
      <div className="mb-8 flex w-full justify-center">
        <ul className="block">
          <li className="text-center mb-6 m">
            <p className="text-xs">Tanjiro Kamado</p>
            <p className="leading-6">
              Natsuki Hanae / <br />
              Zach Aguilar
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Nezuko Kamado</p>
            <p className="leading-6">
              Akari Kito / <br />
              Abby Trott
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Zenitsu Agatsuma</p>
            <p className="leading-6">
              Hiro Shimono / <br />
              Aleks Le
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Inosuke Hashibira</p>
            <p className="leading-6">
              Yoshitsugu Matsuoka / <br /> Bryce Papenbrook
            </p>
          </li>
        </ul>
        <ul className="block">
          <li className="text-center mb-6">
            <p className="text-xs">Muichiro Tokito</p>
            <p className="leading-6">
              Kengo Kawanishi / <br />
              Griffin Burns
            </p>
          </li>
          <li className="text-center mb-6">
            <p className="text-xs">Mitsuri Kanroji</p>
            <p className="leading-6">
              Kana Hanazawa / <br />
              /Kira Buckland
            </p>
          </li>
        </ul>
      </div>
      <p className="jp_en">Japanese / English</p>
    </>
  );
};

export default Cast;
