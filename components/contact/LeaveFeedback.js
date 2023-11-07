import React from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Button } from "@mui/material";

const LeaveFeedback = () => {
  return (
    <div className="w-full border flex items-center justify-center border-gray-300 bg-white p-3">
      <Button
        sx={{
          color: "black !important",
          ":hover": {
            backgroundColor: "transparent",
          },
        }}
        className="flex gap-3 items-center !text-black  justify-center"
      >
        <span className="text-xs font-extralight  tracking-normal">
          LEAVE FEEDBACK
        </span>
        <ThumbUpIcon />
      </Button>
    </div>
  );
};

export default LeaveFeedback;
