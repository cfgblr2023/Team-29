import React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  List,
  ListItem,
  Typography,
  styled,
  ListItemButton,
  ListItemText,
} from "@mui/material";
// menu
import DrawerItem from "./DrawerItem";
// rotas
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
// personalizacao
const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const ListMenu = styled(List)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

//rotas
const itemList = [
  {
    text: "Home",
    to: "/",
  },
  {
    text: "About",
    to: "/about",
  },
  {
    text: "Login",
    to: "/login",
  },
  {
    text: "Sign Up",
    to: "/signup",
  },
];

const Navbar = () => {
  return (
    <AppBar
      component="nav"
      position="sticky"
      sx={{
        backgroundColor: "orange",
      }}
      elevation={0}
    >
      <StyledToolbar>
        <Typography variant="h6" component="h2">
          <img src={logo} alt="ok" />
        </Typography>
        <Box sx={{ display: { xs: "block", sm: "none" } }}>
          <DrawerItem />
        </Box>
        <ListMenu>
          {itemList.map((item) => {
            const { text } = item;
            return (
              <ListItem key={text}>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  sx={{
                    color: "#fff",
                    "&:hover": {
                      backgroundColor: "transparent",
                      color: "#1e2a5a",
                    },
                    minWidth: 100
                  }}
                >
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            );
          })}
        </ListMenu>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
