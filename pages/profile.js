import React from "react";
import Router from "next/router";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Menu from "../components/profile/Menu";
import Socials from "../components/profile/Socials";

const profile = () => {
  const history = () => {
    Router.back();
  };

  return (
    <div>
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <Menu />
      <Socials />
    </div>
  );
};

export default profile;
