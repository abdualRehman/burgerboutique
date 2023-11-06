import React from "react";
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import { TextField } from "@mui/material";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";

const CartField = ({ title, placeholder, promotion }) => {
  return (
    <div className="">
      <h3 className="font-semibold ml-3 mb-2 ">{title}</h3>
      <div className="flex gap-4 justify-center h-full items-center bg-white p-4 ">
        {promotion ? (
          <LocalOfferOutlinedIcon sx={{ mt: 2 }} />
        ) : (
          <MessageOutlinedIcon sx={{ mt: 2 }} />
        )}
        <TextField
          sx={{ width: "100%" }}
          size="small"
          id="standard-basic"
          label={placeholder}
          variant="standard"
        />
      </div>
    </div>
  );
};

export default CartField;
