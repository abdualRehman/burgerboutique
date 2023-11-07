import { TextField } from "@mui/material";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import LocationMenu from "./LocationMenu";

const Location = () => {
  return (
    <div className="">
      <h3 className="text-sm font-semibold mt-6 p-1">Location</h3>
      <div className="min-h-[60vh] bg-white px-2 py-1">
        <div className="px-1" >
          <TextField
            hiddenLabel
            id="filled-hidden-label-small"
            variant="standard"
            sx={{
              width: "100%",
              py: 2,
              '& .MuiInputBase-colorPrimary': {
                borderBottom: "3px solid #f5f5f5",
              },
              '& .MuiInput-underline': {
                borderBottom: "3px solid #f5f5f5",
                '&:hover , &:before': {
                  borderBottom: "3px solid #f5f5f5",
                }
              }
            }}
            size="small"
            placeholder="Search..."
            InputProps={{
              startAdornment: <SearchIcon style={{ color: "#878787" }} />,
            }}
          />
        </div>
        <LocationMenu />
      </div>
    </div>
  );
};

export default Location;
