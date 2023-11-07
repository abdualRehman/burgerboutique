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
<<<<<<< HEAD
    <div className="h-100" style={{height:'100vh'}} >
      <nav className="flex border-b bg-white border-gray-200 p-5">
=======
    <div className="">
      <nav className="flex border-b max-md:px-8 bg-white border-gray-200 p-3">
>>>>>>> 66d2f489ba27d95c634464a67ce5feb88624e34f
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
