import React, { useState, useEffect } from "react";

const Poster = () => {
  const [isFirstImage, setIsFirstImage] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsFirstImage((prevState) => !prevState);
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div
      className="md:fixed md:w-[56%] relative overflow-hidden md:right-0 md:top-0"
      style={{ margin: "0 0 0 auto" }}
    >
      {isFirstImage ? (
        <div className="relative overflow-hidden top-0 left-0 w-full vanime_in">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678471370/demon%20slayer/kv-2_nkoiny.webp"
            alt="demonslayer"
            loading="lazy"
            className="md:aspect-square 2xl:h-auto h-screen w-full"
            width="100%"
            height="100%"
          />
        </div>
      ) : (
        <div className="top-0 left-0 w-full vanime_out relative overflow-hidden">
          <img
            src="https://res.cloudinary.com/dr49dbp8d/image/upload/v1678472077/demon%20slayer/kv-1_2_tmi6o5.webp"
            alt="demonslayer"
            className="md:aspect-square 2xl:h-auto h-screen w-full"
            loading="lazy"
            width="100%"
            height="100%"
          />
        </div>
      )}
    </div>
  );
};

export default Poster;
