import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MyFeatures from "./FeaturesGrid/MyFeatures";

const Features = () => {
  return (
    <>
      <Box>
        <Button
          sx={{
            backgroundColor: "black",
            color: "#fff",
            padding: "8px 15px",
            borderRadius: "100rem",
            fontSize: "10px",
            "&:hover": {
              color: "white",
              backgroundColor: "black", // Set the background color to its initial value on hover
            },
          }}
        >
          key Features
        </Button>
      </Box>

      <Box sx={{padding:"40px 0",width:{lg:"470px", md:"520px",sm:"600px",xs:"100%"} , textAlign:{xs:"center",sm:"start",md:"start",lg:"start"}}}>
        <Typography variant="h5" sx={{mb:3,fontSize:"35px"}}>
          <b>Why use Atomize React?</b>
        </Typography>
        <Typography variant="body1">
          Atomize React helps you in building fully responsive websites and
          products that match your style.
        </Typography>
      </Box>

          <Box>
                <MyFeatures />
          </Box>

    </>
  );
};

export default Features;
