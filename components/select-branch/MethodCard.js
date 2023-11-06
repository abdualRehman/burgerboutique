"use client";
import React, { useState } from "react";

const MethodCard = ({ title, Icon, active, id, setActive }) => {
  return (
    <div
      onClick={() => setActive(id)}
      className={`p-3 ${
        id === active ? "border-black" : "border-gray-300"
      } w-[100px] rounded-md cursor-pointer  px-1 border-2`}
    >
      <div className={`flex   flex-col items-center`}>
        <Icon />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default MethodCard;
