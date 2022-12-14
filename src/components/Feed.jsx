import React, { useEffect, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";

import { SideBar, Videos } from "./";

import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = ({ theme }) => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data) =>
      setVideos(data.items)
    );
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          theme={theme}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: theme === true ? "#000" : "#fff" }}
        >
          Copyright © 2022 Aman Rai
        </Typography>
      </Box>

      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          flex: 2,
          ml: { sm: "55px", xl: "150px" },
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: theme === true ? "#000" : "#fff" }}
        >
          {selectedCategory} <span style={{ color: "#FC1503" }}>videos</span>
        </Typography>

        <Videos videos={videos} theme={theme} />
      </Box>
    </Stack>
  );
};

export default Feed;
