import { useRouter } from "next/router";
import React from "react";

const MenuItem = ({ Logo, name, link }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(link)}
      className="p-2 ml-1 font-semibold cursor-pointer hover:bg-[#f2f1f1] duration-200 odd:border-y flex items-center gap-7 odd:border-gray-300"
    >
      <Logo sx={{ color: "#666666" }} />
      <span className="text-[#666666]">{name}</span>
    </div>
  );
};

export default MenuItem;
