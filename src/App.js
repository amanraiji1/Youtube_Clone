import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import {
  Navbar,
  Feed,
  VideoDetail,
  ChannelDetail,
  SearchFeed,
} from "./components";

const App = () => {
  const [theme, setTheme] = useState("true");
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: theme === true ? "#fff" : "#000",
        }}
      >
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" exact element={<Feed theme={theme} />} />
          <Route path="/video/:id" element={<VideoDetail theme={theme} />} />
          <Route
            path="/channel/:id"
            element={<ChannelDetail theme={theme} />}
          />
          <Route
            path="/search/:searchTerm"
            element={<SearchFeed theme={theme} />}
          />
        </Routes>
      </Box>
    </BrowserRouter>
  );
};

export default App;
