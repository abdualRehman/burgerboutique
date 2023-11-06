"use client";
import Router from "next/router";
import React from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Timings from "../../components/branch/Timings";

const page = () => {
  const history = () => {
    Router.back();
  };
  return (
    <div className="min-h-screen bg-[#f4f5f5]">
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <h2 className="font-semibold p-2 mt-6 text-sm">Hours</h2>
      <Timings />
    </div>
  );
};

export default page;
