import React, { useState } from "react";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import Router from "next/router";
import MethodCards from "../../components/select-branch/MethodCards";
import Location from "../../components/select-branch/Location";

import PickupStore from "../../components/select-branch/PickupStore";
const Branch = () => {
  const [active, setActive] = useState(1);
  const history = () => {
    Router.back();
  };
  return (
    <div className="min-h-screen bg-[#f4f5f5] ">
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <MethodCards active={active} setActive={setActive} />
      {active === 1 ? <Location /> : <PickupStore />}
    </div>
  );
};

export default Branch;
