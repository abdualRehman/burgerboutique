import React from "react";
import CartItemQuantity from "./CartItemQuantity";

const Soda = ({ activeSoda, setActiveSoda, name }) => {
  return (
    <div className="flex items-center justify-between">
      <div
        className={`form-group ${
          activeSoda == name ? "border-2 border-black" : ""
        } flex items-center`}
      >
        <input type="checkbox" id={name} />
        <label className="font-semibold text-gray-500 " htmlFor={name}>
          {name}
        </label>
      </div>
      <CartItemQuantity />
    </div>
  );
};

export default Soda;
