import React, { useContext, useEffect } from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import logoGeneral from "../public/images/logo.jpg";
// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";
// mui
import { AppBar, Box, IconButton, Paper, useMediaQuery } from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";

import Slider from "./Slider";

import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useRouter } from "next/router";

const Navbar = () => {
  const { mode, toggleMode } = useContext(ColorModeContext);
  const router = useRouter();

  const [menu, setMenu] = React.useState();

  const isTablet = useMediaQuery("(max-width:900px)");

  const state = useSelector((state) => state);
  const logo = state.config?.logo || logoGeneral;

  const [hasWindow, setHasWindow] = React.useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <Box maxWidth="1052px" m="auto" sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="transparent" sx={{ boxShadow: "none" }}>
        <Paper
          variant="outlined"
          sx={{
            boxShadow: "none",
            borderRadius: "0",
            border: "none",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            px: 2,
          }}
        >
          {/* responsive menu */}
          {isTablet && (
            <Box
              sx={{
                width: "100vw",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
              }}
            >
              <Box>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => router.push("/profile")}
                >
                  <MenuIcon sx={{ fontSize: "30px" }} />
                </IconButton>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: 4,

                  justifyContent: state.config?.navLogoPosition || "center",
                }}
              >
                <Image
                  src={logo}
                  alt="logo_Image"
                  style={{ borderRadius: "10px" }}
                  width={50}
                  height={40}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  gap: "10px",
                }}
              >
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  onClick={() => router.push("/cart")}
                  aria-label="menu"
                >
                  <LocalMallOutlinedIcon style={{ fontSize: "24px" }} />
                </IconButton>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  onClick={() => router.push("/search")}
                >
                  <SearchOutlinedIcon style={{ fontSize: "24px" }} />
                </IconButton>
                <IconButton
                  size="small"
                  edge="start"
                  color="inherit"
                  onClick={() => router.push("/")}
                  aria-label="menu"
                >
                  <LanguageOutlinedIcon style={{ fontSize: "24px" }} />
                </IconButton>
              </Box>
            </Box>
          )}
        </Paper>
      </AppBar>
      {isTablet && <Slider />}
    </Box>
  );
};

export default Navbar;
