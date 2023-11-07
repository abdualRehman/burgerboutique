import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Router from "next/router";

const search = () => {
  const handleBack = (e) => {
    e.preventDefault();
    Router.back();
  };
  return (
    <div className="min-h-screen">
      <div className="w-full  bg-white flex items-center gap-3 p-4 border-b border-gray-200">
        <div onClick={(e) => handleBack(e)}>
          <ArrowBackOutlinedIcon />
        </div>
        <input
          placeholder="Search..."
          className="outline-none placeholder:text-gray-300 w-full border-none"
        />
      </div>
      <span className="font-light text-gray-400  mt-9 w-full flex items-center justify-center">
        Search for a product
      </span>
    </div>
  );
};

export default search;
