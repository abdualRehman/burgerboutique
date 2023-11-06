import { TextField } from "@mui/material";
import React from "react";

const SpecialRequests = () => {
  return (
    <div className="flex bg-white mt-6 flex-col gap-4">
      <h3 className="px-4 mt-4">Special Requests</h3>
      <div className="px-6">
        <TextField
          hiddenLabel
          id="filled-hidden-label-small"
          variant="standard"
          sx={{ width: "100%" }}
          size="small"
        />
      </div>
    </div>
  );
};

export default SpecialRequests;
