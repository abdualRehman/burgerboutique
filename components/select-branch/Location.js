import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationMenu from "./LocationMenu";

const Location = () => {
  return (
    <div className="">
      <h3 className="text-sm font-semibold mt-6 p-2">Location</h3>
      <div className="min-h-[60vh] bg-white">
        <div>
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="standard"
            sx={{ width: "100%" }}
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon />,
            }}
          />
        </div>
        <LocationMenu />
      </div>
    </div>
  );
};

export default Location;
