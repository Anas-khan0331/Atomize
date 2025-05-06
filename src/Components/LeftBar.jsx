import { Box, Button, CardActions, Container, Typography } from "@mui/material";
import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const LeftBar = () => {
  return (
    <>
      <Container sx={{ marginTop: "100px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: 'column !important', md: 'column',lg:'column' }, // Added flex direction logic for mobile devices
            minHeight: "380px",
            width: "100%",
          }}
        >
          <Box
            sx={{ maxWidth: "600px", textAlign: "center", margin: "20px 0" }}
          >
            <Typography variant="h2" sx={{ fontSize: "48px" }}>
              Design System for React JS
            </Typography>
            <Typography
              variant="body1"
              sx={{ marginTop: "20px", lineHeight: "35px " }}
            >
              Atomize React is a UI framework that helps developers collaborate
              with designers and build consistent user interfaces effortlessly.
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection:{xs:"column" , md :"row" ,lg:"row"}
            }}
          >
            <Button
              variant="contained"
              sx={{
                mr: 3,
                backgroundColor: "#0284FE",
                fontSize: "14px",
                lineHeight: "24px",
                borderRadius: "8px",
                height: "3rem",
                width: "11rem",
                transition: "all 0.4s ease-in-out",
              }}
            >
              Get Started Now
            </Button>
            <Button
              startIcon={<PlayArrowIcon />}
              sx={{
                fontSize: "14px",
                lineHeight: "24px",
                borderRadius: "8px",
                height: "3rem",
                width: "11rem",
                transition: "all 0.4s ease-in-out",
              }}
            >
              Watch Video
            </Button>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LeftBar;
