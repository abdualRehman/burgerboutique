"use client";
import React from "react";
import ShareIcon from "@mui/icons-material/Share";

const Share = () => {
  return (
    <div className="w-full border-y mb-6 flex mt-8 text-[#666666] gap-4 items-center justify-center border-gray-200  p-3">
      <ShareIcon />
      <span>SHARE WITH A FRIEND</span>
    </div>
  );
};

export default Share;
