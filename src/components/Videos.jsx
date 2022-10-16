import React from "react";
import { Stack, Box, Typography } from "@mui/material";

import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos, direction, theme }) => {
  if (!videos?.length) {
    return (
      <Typography
        color={theme === true ? "#000" : "#fff"}
        variant="h5"
        fontWeight="bold"
        p={2}
      >
        Loading...
      </Typography>
    );
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent="start"
      alignItems="start"
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && (
            <ChannelCard channelDetail={item} theme={theme} />
          )}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
