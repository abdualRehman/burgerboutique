import React, { useContext, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

// image
import logoGeneral from '../public/images/logo.jpg';
import arrow_right from '../public/images/arrow_right.png';
import person from '../public/images/person.png';
import shopping_cart from '../public/images/shopping_cart.png';


// context for light and dark mode
import { ColorModeContext } from "../theme/MUI_MODE";

// mui
import {
    AppBar, Badge, Box, Button, Container, Drawer,
    IconButton, List, ListItem, ListItemButton,
    Paper, Tooltip, Typography, useMediaQuery
} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import InfoIcon from '@mui/icons-material/Info';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import SearchIcon from '@mui/icons-material/Search';
import { PRIMARY } from "../theme/palette";
import Slider from "./Slider";

import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';

const Navbar = () => {
    const { mode, toggleMode } = useContext(ColorModeContext)

    const [menu, setMenu] = React.useState();

    const isTablet = useMediaQuery('(max-width:900px)')


    const state = useSelector(state => state);
    const logo = state.config?.logo || logoGeneral;

    const [hasWindow, setHasWindow] = React.useState(false);
    useEffect(() => {
        if (typeof window !== "undefined") {
            setHasWindow(true)
        }
    }, [])


    return (
        <Box maxWidth='1052px' m='auto' sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" sx={{ boxShadow: 'none' }}>
                <Paper variant="outlined"
                    sx={{
                        boxShadow: 'none', borderRadius: '0', border: 'none',
                        display: 'flex', alignItems: 'center', px: 2
                    }}>

                    {/* responsive menu */}
                    {isTablet &&
                        <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: "space-between", px: 2 }}>
                            <Box sx={{ width: "30%" }}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={() => setMenu(true)}
                                >
                                    <MenuIcon sx={{ fontSize: '30px' }} />
                                </IconButton>
                            </Box>

                            <Box sx={{ width: "100%", display: 'flex', alignItems: 'center', justifyContent: state.config?.navLogoPosition || "center" }}>
                                <Image src={logo} alt='logo_Image' style={{ borderRadius: "10px" }} width={50} height={40} />
                            </Box>

                            <Box sx={{ width: "30%", display: 'flex', alignItems: 'flex-end', justifyContent: "flex-end", gap: "10px" }}>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"

                                >
                                    <LocalMallOutlinedIcon style={{ fontSize: "24px" }} />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"

                                >
                                    <SearchOutlinedIcon style={{ fontSize: "24px" }} />
                                </IconButton>
                                <IconButton
                                    size="small"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"

                                >
                                    <LanguageOutlinedIcon style={{ fontSize: "24px" }} />
                                </IconButton>
                            </Box>

                            <Drawer
                                anchor='left'
                                open={menu}
                                onClose={() => setMenu(false)}
                            >
                                <Box
                                    sx={{ width: 250 }}
                                    role="presentation"
                                    onClick={() => setMenu(false)}
                                    onKeyDown={() => setMenu(false)}
                                >
                                    <List>
                                        <ListItem disablePadding
                                            sx={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', px: '20px', mt: '50px' }}
                                        >

                                            <Link href='/'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <HomeIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Home
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/products'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <LocalMallIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Products
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/signUp'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <AccountCircleIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Profile
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/aboutUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <InfoIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        About us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>

                                            <Link href='/contactUs'>
                                                <ListItemButton display='flex' alignItems='center' sx={{ width: '100%', gap: '15px' }}>
                                                    <ContactSupportIcon fontSize="large" />
                                                    <Typography variant="body1" component='h1' fontWeight={600}>
                                                        Contact Us
                                                    </Typography>
                                                </ListItemButton>
                                            </Link>



                                        </ListItem>
                                    </List>
                                </Box>
                            </Drawer>
                        </Box>
                    }
                </Paper>
            </AppBar>
            {isTablet && <Slider />}
        </Box>
    );
}

export default Navbar;