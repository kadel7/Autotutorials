import React, { useState } from "react";
import BasicMenu from "./dropdown";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
//import SimplePaper from './Components/Orgprofile'
export const Hero = (props) => {
  const { handleLogout } = props;
  const navigate=useNavigate();
  return (
    <AppBar position="Fixed" style={{ background: "black" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          style={{ width: "100px" }}
        >
          <OndemandVideoIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AutoTutorials
        </Typography>
        <Stack direction="row " spacing={2}>
          <Button color="inherit">Courses</Button>
          <Button color="inherit">Journey</Button>
          <BasicMenu/>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default Hero;