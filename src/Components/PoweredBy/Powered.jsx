import { Box, Grid } from "@mui/material";
import React from "react";
import SsImage from "../../assets/images/Screenshot_1.png";
import { makeStyles } from "@mui/styles";
import PoweredGrid from "./PoweredGrid";

const useStyle = makeStyles({
  BoxClass: {
    width: "100%",
    height: "400px",
    padding:"20px"
  },
  imageClass: {
    width: "100%",
    height: "100%",
    objectFit:"contain"
  },powerClass:{
    marginLeft:"70px"
  }
});

const Powered = () => {
  const classes = useStyle();
  return (
    <>
      <Box sx={{ mb:{lg:20,md:15,sm:12,xs:10}, mt: {lg:20,md:15,sm:10,xs:10}}}>
        <Grid container>
          <Grid item lg={4} md={5} sm={12} xs={12}>
            <Box className={classes.BoxClass}>
              <img className={classes.imageClass} src={SsImage} alt="/" />
            </Box>
          </Grid>
          <Grid item lg={7} md={7} sm={12} xs={12}>
                <PoweredGrid />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Powered;
