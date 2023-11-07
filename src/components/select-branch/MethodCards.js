import React, { useState } from "react";
import MethodCard from "./MethodCard";
import DirectionsCarOutlinedIcon from "@mui/icons-material/DirectionsCarOutlined";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";

const MethodCards = ({ active, setActive }) => {
  const methods = [
    { icon: DirectionsCarOutlinedIcon, title: "Delivery", id: 1 },
    { icon: DirectionsWalkIcon, title: "Pickup", id: 2 },
  ];

  return (
    <div>
      <h3 className="text-sm font-semibold mt-6 p-2">Method</h3>
      <div className="flex p-4 border-y border-y-gray-200 bg-white w-full gap-4 ">
        {methods.map((method) => (
          <MethodCard
            active={active}
            id={method.id}
            setActive={setActive}
            Icon={method.icon}
            key={method.id}
            title={method.title}
          />
        ))}
      </div>
    </div>
  );
};

export default MethodCards;
