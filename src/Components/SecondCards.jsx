import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import diamond from "../assets/images/diamond.svg"
import reactImg from "../assets/images/react.svg"
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const SecondCards = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Box
          sx={{
            width: { lg: "50rem", sm: "38rem", xs: "100%" },
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { lg: "35px", md: "25px", sm: "30px", xs: "25px" },
              color: "#000000",
            }}
          >
            A combination of tools to design and develop modern applications at
            ease.
          </Typography>
        </Box>

        <Box
          sx={{
            width: "100%",
            my: 4,
            minHeight: "350px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Grid
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item lg={4} md={5} smd={6} xs={12}>
              <Card sx={{padding:"34px",boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)"}}>
                <CardMedia image={diamond} sx={{width:"50px",height:"45px",objectFit:'contain',ml:1}}/>
                <CardContent>
                  <Typography variant="h5" sx={{mb:1}}>
                        Design
                  </Typography>
                  <Typography variant="body1">
                        Design your website by using Atomize for Sketch App.
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{color:"#113da3"}} endIcon={<ArrowForwardIcon  sx={{ml:1,}} />}>Design Resource</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item lg={4} md={5} smd={6} xs={12}>
              <Card sx={{padding:"34px",boxShadow: "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)"}}>
                <CardMedia image={reactImg} sx={{width:"50px",height:"45px",objectFit:'contain',ml:1}}/>
                <CardContent>
                  <Typography variant="h5" sx={{mb:1}}>
                  Development
                  </Typography>
                  <Typography variant="body1">
                  Bring your designs to life with Atomize for React JS. 
                  </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" sx={{color:"#113da3"}} endIcon={<ArrowForwardIcon  sx={{ml:1,}} />}>Documentation</Button>
                </CardActions>
              </Card>
            </Grid>
           
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default SecondCards;
