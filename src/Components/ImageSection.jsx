import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import screenImge from "../assets/images/SSTwo.png";
const ImageSection = () => {
  return (
    <>
      <Box sx={{ mb:15  ,width: "100%", minHeight: "400px",display:"flex",alignItems:'center',flexDirection:"column" }}>
        <Box sx={{width:{lg:'40rem',sm:"35rem"},marginBottom:"4rem",textAlign:"center"}}>
          <Typography variant="h3" sx={{fontSize:{lg:"40px !important",sm:"35px",xs:"25px"},color:"#000000", fontWeight:"500"}}>
            Code the perfect design for each project using Atomize.
          </Typography>
        </Box>

        <Grid container>
          <Grid item>
            <img src={screenImge} width="100%"  alt="/" />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default ImageSection;
