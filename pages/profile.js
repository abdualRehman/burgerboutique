import React from "react";
import Router from "next/router";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Menu from "../components/profile/Menu";
import Socials from "../components/profile/Socials";
import BottomBar from "../components/BottomBar";

const profile = () => {
  const history = () => {
    Router.back();
  };

  return (
    <div className="">
      <nav className="flex border-b max-md:px-8 bg-white border-gray-200 p-3">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <div className="min-h-screen">
        <Menu />
        <Socials />
      </div>
      <BottomBar />
    </div>
  );
};

export default profile;
