import Image from "next/image";
import React from "react";
import Social from "./Social";

const Socials = () => {
  const socials = [
    {
      logo: "/socials/emailLogo.png",
      name: "Email",
    },
    {
      logo: "/socials/appleLogo.png",
      name: "Apple",
    },
    {
      logo: "/socials/googleLogo.png",
      name: "Google",
    },
  ];
  return (
    <div className="min-h-screen">
      <div className="p-3 text-[#666666] mt-6 font-semibold">Sign in with</div>
      <div className="">
        {socials.map((social) => (
          <Social key={social.name} social={social} />
        ))}
      </div>
    </div>
  );
};

export default Socials;
