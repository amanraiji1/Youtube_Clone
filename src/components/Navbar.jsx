import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = ({ theme, setTheme }) => {
  return (
    <Stack
      zIndex={1}
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        background: theme === true ? "#fff" : "#000",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={45} />
      </Link>

      <SearchBar />

      <button onClick={() => setTheme(!theme)} className="mode-btn">
        {theme === true ? <DarkModeOutlinedIcon /> : <LightModeOutlinedIcon />}
      </button>
    </Stack>
  );
};

export default Navbar;
