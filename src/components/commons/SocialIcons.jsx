import React from "react";
import { SocialIcon } from "react-social-icons";
import { socials } from "../../data/social";

const SocialIcons = () => {
  return (
    <div className="h-11 flex justify-center items-center">
      <div className="mr-2 flex-shrink-0">
        {socials.map((social) => (
          <SocialIcon
            key={social.id}
            url={social.url}
            fgColor="#fff"
            rel="noreferrer"
            target="_blank"
            style={{ height: 35, width: 35 }}
            className="mx-2 hover:scale-150"
          />
        ))}
      </div>
    </div>
  );
};

export default SocialIcons;
