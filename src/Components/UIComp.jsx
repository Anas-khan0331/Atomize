import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import rocket from "../assets/images/rocket_1f680.webp";
const UIComp = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          backgroundColor: "#F7F8F9",
          minHeight: "200px",
          padding: {lg:"50px 65px"},
          borderRadius: "100rem",
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
            }}
          >
            <Typography
              variant="h5"
              sx={{ color: "black", mr: 1, p: 0, fontSize: "33px" }}
            >
              UI Templates are on their way
            </Typography>
            <img src={rocket} style={{ width: "40px" }} alt="/" />
          </Box>
          <Typography sx={{ pt: 2, fontSize: "17px" }}>
            Official UI templates build on Atomize React will be released very
            soon.
          </Typography>
        </Box>
        <Box>
          <Button
            size="small"
            sx={{
              backgroundColor: "#000000",
              borderRadius: "100rem",
              px: 2,
              py: 1,
              mt: { xs: "30px", sm: "20px" },
              color: "white",
            }}
            endIcon={<ArrowForwardIcon sx={{ ml: 3 }} />}
          >
            Get Notified
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default UIComp;
