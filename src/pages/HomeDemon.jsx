import React from "react";
import Header from "../components/Header";

export const HomeDemon = () => {
  return (
    <>
        <Header />
      <div
        className="w-full relative flex justify-center"
        style={{ margin: "0 auto" }}
      >
        <img
          src="https://kimetsusai.com/assets/img/main_logo_2x.png"
          alt="demon logo"
          className="lg:w-[460px] w-[260px]"
        />
      </div>
    </>
  );
};
