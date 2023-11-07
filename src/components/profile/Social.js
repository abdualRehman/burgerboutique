import Image from "next/image";
import React from "react";

const Social = ({ social }) => {
  return (
    <div
      className="flex gap-7 font-extralight text-sm p-3 pl-4 odd:border-gray-300 odd:border-y  items-center"
      key={social.logo}
    >
      <Image src={social.logo} alt={social.name} width={20} height={20} />
      <span>{social.name}</span>
    </div>
  );
};

export default Social;
