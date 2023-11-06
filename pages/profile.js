import React from "react";
import Router from "next/router";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";

const profile = () => {
  const history = () => {
    Router.back();
  };
  const menuItems = ["My Cart", "Menu", "My Orders"];
  return (
    <div>
      <nav className="flex border-b bg-white border-gray-200 p-5">
        <div className="cursor-pointer" onClick={history}>
          <ArrowBackOutlinedIcon />
        </div>
      </nav>
      <div>
        <div className="p-3 font-semibold">Menu</div>
        <div>
          {menuItems.map((menuItem) => (
            <div
              className="p-2 font-semibold border-y border-gray-300"
              key={menuItem}
            >
              {menuItem}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default profile;
