import React from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import { useRouter } from "next/router";
const OurBranches = () => {
  const router = useRouter();
  return (
    <div>
      <div className="w-full flex py-3 border-y  border-gray-200 pb-6 items-center bg-white">
        <div
          onClick={() => router.push("/branch/1734")}
          className="flex cursor-pointer w-full px-3 items-center duration-200 hover:bg-[#f4f5f5]  "
        >
          <p className="border-b w-full p-3 text-base font-extralight text-gray-500 border-gray-200">
            Burger Boutique
          </p>
          <HelpOutlineOutlinedIcon
            sx={{ fontSize: 20, color: "rgb(125, 125, 125)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default OurBranches;
