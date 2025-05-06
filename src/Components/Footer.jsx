import { Box, Grid, IconButton, Typography } from "@mui/material";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import behance from "../assets/images/behance.png";
import dribble from "../assets/images/dribble.jpg";
import TwitterIcon from "@mui/icons-material/Twitter";
import linkedin from "../assets/images/linkedin-112.png";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  ulStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems:'center'
   
  },
});

const Footer = () => {
  const classess = useStyle();
  return (
    <>
      <Box
        sx={{
          my: {xs:7},
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Grid
          container
          spacing={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            justifyContent: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6">Docs</Typography>
            <ul>
              <li>Installation</li>
              <li>Theme Setup</li>
              <li>Grid</li>
              <li>Atoms</li>
              <li>Molecules</li>
              <li>Functions</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6">Atomize</Typography>
            <ul>
              <li>Features</li>
              <li>Theme Setup</li>
              <li>Design</li>
              <li>Development</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6">Resources</Typography>
            <ul>
              <li>Sketch File</li>
              <li>Github</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6">About</Typography>
            <ul>
              <li>Showcase</li>
              <li>Contribute</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={4} lg={2}>
            <Typography variant="h6">Extras</Typography>
            <ul>
              <li>Showcase</li>
              <li>Blog</li>
              <li>Need Help?</li>
              <li>Give Feedback</li>
            </ul>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          my: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Grid item xs={12} sm={6} md={6} lg={5}>
            <Typography variant="h6">
              Design and Developed By Proksh Luthra
            </Typography>
            <ul className={classess.ulStyle}>
              <li>
                <IconButton>
                  <GitHubIcon />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <img src={behance} width="20px" alt="/" />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <img src={dribble} width="20px" alt="/" />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <TwitterIcon />
                </IconButton>
              </li>
              <li>
                <IconButton>
                  <img src={linkedin} width="20px" alt="/" />
                </IconButton>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
