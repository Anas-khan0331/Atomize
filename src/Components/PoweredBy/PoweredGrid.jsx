import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import gridone from "../../assets/images/g1.svg";
import gridtwo from "../../assets/images/g2.svg";
import gridthree from "../../assets/images/g3.svg";
import gridfour from "../../assets/images/g4.svg";
import gridfive from "../../assets/images/g5.svg";
import gridsix from "../../assets/images/g6.svg";

const useStyle = makeStyles((theme) => ({
    spanClass: {
      color: "#0DD8FF",
    },
    gridOneimge: {
      width: "50px",
      height: "50px",
    },
    divClass: {
      paddingLeft: "2px",
    },
  }));
  

const PoweredGrid = () => {
  const classess = useStyle();
  return (
    <>
      <Box sx={{ width:"100%",marginTop:{lg:0,md:0,sm:10,xs:12}, marginLeft: {lg:"130px",md:"0px",sm:"0",xs:"0",display:"flex",alignItems:"center",flexDirection:'column'} }}>
        <Box sx={{width:{lg:"42rem",md:"30rem",sm:"40rem",xs:"100%"},textAlign:{md:'center',sm:"center",xs:"center"}}}>
          <Typography
            variant="h3"
            sx={{
              fontSize: {lg:"40px",md:"35",sm:"30px",xs:"28px"},
              fontWeight: "500",
              color: "black",
              lineHeight: {xs:"40px"},

            }}
          >
            Beautiful & consistant UI powered with
            <span className={classess.spanClass}> React</span>.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item lg={4} md={4} sm={6} xs={6}>
            <Box>
              <div>
                <img src={gridone} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Atomic</Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>Based on Atomic Design Methodology.</Typography>
              </div>
            </Box>
          </Grid>







          <Grid item lg={4} md={4} sm={6} xs={6}>
          <Box>
              <div>
                <img src={gridtwo} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Theme  </Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>Auto updating colors and Styleguide.</Typography>
              </div>
            </Box>
          </Grid>






          <Grid item lg={4} md={4} sm={6} xs={6}>
          <Box>
              <div>
                <img src={gridthree} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Components</Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>Ever-increasing list of components.</Typography>
              </div>
            </Box>
          </Grid>



          <Grid item lg={4} md={4} sm={6} xs={6}>
          <Box>
              <div>
                <img src={gridfour} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Responsive  </Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>Ever-increasing list of components.</Typography>
              </div>
            </Box>
          </Grid>

          <Grid item lg={4} md={4} sm={6} xs={6}>
          <Box>
              <div>
                <img src={gridfive} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Customisation  </Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>Multiple customisations to suit your style.</Typography>
              </div>
            </Box>
          </Grid>


          <Grid item lg={4} md={4} sm={6} xs={6}>
          <Box>
              <div>
                <img src={gridsix} className={classess.gridOneimge} alt="" />
              </div>
              <div className={classess.divClass}>
                <Typography variant="body1" sx={{fontWeight:"600",mb:1}}>Icon System  </Typography>
                <Typography variant="body2" sx={{fontWeight:"400",color: '#505256',fontSize:"14px", lineHeight:"25px"}}>An inbuilt Icon system for faster development.</Typography>
              </div>
            </Box>
          </Grid>

















        </Grid>
      </Box>
    </>
  );
};

export default PoweredGrid;
