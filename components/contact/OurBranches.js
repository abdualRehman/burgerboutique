import React from "react";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
const OurBranches = () => {
  return (
    <div>
      <div className="w-full flex py-3 border-y  border-gray-300 pb-7 items-center bg-white">
        <div className="flex w-full px-3 items-center hover:bg-[#f4f5f5]  ">
          <p className="border-b w-full p-3 text-gray-500 border-gray-300">
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
