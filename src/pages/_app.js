import Head from "next/head";

// HOC react
import IframeHOC from "../components/IframeHOC";

// mui for backgraound
import { Box, Button, Grid, IconButton, Paper } from "@mui/material";

// mui theme
import { ColorContextProvider } from "../common/theme/MUI_MODE";

// components

import ScrollToTop from "../components/ScrollToTop";
import "../common/styles/globals.css";

// redux
import { Provider } from "react-redux";
import Store from "../../RTK/store/store";

// progressbar
import NextNProgress from "nextjs-progressbar";

import MenuIcon from "@mui/icons-material/Menu";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { useRouter } from "next/router";



function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>Burger Boutique NextJs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Provider store={Store}>
        <IframeHOC>
          <ColorContextProvider>


            <Paper
              variant="outlined"
              sx={{
                boxShadow: "none",
                borderRadius: 0,
                border: "none",
              }}
            >
              <NextNProgress
                color="#29D"
                startPosition={0.3}
                stopDelayMs={200}
                height={3}
                showOnShallow={true}
              />

              <Grid container spacing={0}>
                <Grid
                  item
                  xs={12}
                  lg={5}
                  sx={{
                    height: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                  }}
                >
                  <Paper
                    sx={{
                      flex: "1",
                      overflowY: "auto",
                      boxShadow: "none",
                      borderRadius: 0,
                      p: 0,
                      "&::-webkit-scrollbar": {
                        display: "none",
                      },
                    }}
                  >
                    <Component {...pageProps} />
                  </Paper>
                </Grid>
                <Grid
                  item
                  xs={12}
                  lg={7}
                  className="rightImage"
                  sx={{
                    display: { xs: "none", lg: "block" },
                    position: "fixed",
                    top: 0,
                    right: 0,
                    height: "100vh",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 40,
                      display: "flex",
                      gap: "30px",
                      px: 2,
                      width: "100%",
                    }}
                  >
                    <IconButton
                      onClick={() => router.push("/profile")}
                      size="small"
                      disableRipple
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className="bg-white"
                      sx={{ borderRadius: "100%", bgcolor: "white", p: 1.2 }}
                    >
                      <MenuIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => router.push("/cart")}
                      size="small"
                      disableRipple
                      edge="start"
                      color="inherit"
                      className="bg-white"
                      aria-label="menu"
                      sx={{ borderRadius: "100%", bgcolor: "white", p: 1.2 }}
                    >
                      <LocalMallOutlinedIcon />
                    </IconButton>
                    <IconButton
                      onClick={() => router.push("/search")}
                      size="small"
                      edge="start"
                      color="inherit"
                      className="bg-white"
                      aria-label="menu"
                      disableRipple
                      sx={{ borderRadius: "100%", bgcolor: "white", p: 1.2 }}
                    >
                      <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      edge="start"
                      color="inherit"
                      aria-label="menu"
                      className="bg-white"
                      disableRipple
                      sx={{
                        borderRadius: "100%",

                        bgcolor: "white",
                        p: 1.2,
                      }}
                    >
                      <LanguageOutlinedIcon />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>

              <ScrollToTop />
            </Paper>

          </ColorContextProvider>
        </IframeHOC>
      </Provider>
    </>
  );
}

export default MyApp;

