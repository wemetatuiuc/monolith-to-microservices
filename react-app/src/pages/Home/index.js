/*
Copyright 2019 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
import React from "react";
import { Box, Paper, Typography } from "@mui/material";

const LOGO_URL =
  "https://storage.googleapis.com/my_static_assets/Images/logo.jpg";
const LEFT_IMAGE_URL =
  "https://storage.googleapis.com/my_static_assets/Images/Alaska.jpg";
const RIGHT_IMAGE_URL =
  "https://storage.googleapis.com/my_static_assets/Images/RedCottage.jpg";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1, position: "relative", minHeight: "100vh" }}>
      {/* Center content */}
      <Paper
        elevation={3}
        sx={{
          width: "800px",
          margin: "0 auto",
          padding: (theme) => theme.spacing(3, 2),
          mt: 6,
        }}
      >
        <Typography variant="h5">Fancy Fashion &amp; Style Online</Typography>
        <br />
        <Typography variant="body1">
          Tired of mainstream fashion ideas, popular trends and societal norms?
          This line of lifestyle products will help you catch up with the Fancy
          trend and express your personal style. Start shopping Fancy items now!
        </Typography>
      </Paper>

      {/* Left image (center vertically) */}
      <Box
        component="img"
        src={LEFT_IMAGE_URL}
        alt="Left decoration"
        sx={{
          position: "fixed",
          left: 24,
          top: "50%",
          transform: "translateY(-50%)",
          height: 180,
          zIndex: 10,
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Right image (center vertically) */}
      <Box
        component="img"
        src={RIGHT_IMAGE_URL}
        alt="Right decoration"
        sx={{
          position: "fixed",
          right: 24,
          top: "50%",
          transform: "translateY(-50%)",
          height: 180,
          zIndex: 10,
          pointerEvents: "none",
          display: { xs: "none", md: "block" },
        }}
      />

      {/* Logo (bottom-right corner) */}
      <Box
        component="img"
        src={LOGO_URL}
        alt="Logo"
        sx={{
          position: "fixed",
          right: 24,
          bottom: 24,
          height: 80,
          zIndex: 11,
          pointerEvents: "none",
          opacity: 0.95,
        }}
      />
    </Box>
  );
}
