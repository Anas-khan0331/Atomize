import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import VisibilityIcon from "@mui/icons-material/Visibility";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import downloadPic from "../assets/images/download.png";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import { makeStyles } from "@mui/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import cardImg from "../assets/images/card-img-0fc7deb16731e5a07c16dad53ba71c7a.png";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import avatarImg from "../assets/images/girl2.png";
import ModeIcon from "@mui/icons-material/Mode";
import johnImg from "../assets/images/john.png"
import MineForm from "./loginForm/MineForm";  



const useStyle = makeStyles({
  li: {
    listStyle: "none",
  },
  iconButton: {
    boxShadow:
      "0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)",
  },
  content: {
    margin: "60px 0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  cardStyle: {
    width: "100%",
    minHeight: "390px",
    padding: "8px 10px",
    boxShadow:
      "rgba(0, 0, 0, 0.07) 0px 1px 1px, rgba(0, 0, 0, 0.07) 0px 2px 2px, rgba(0, 0, 0, 0.07) 0px 4px 4px, rgba(0, 0, 0, 0.07) 0px 8px 8px, rgba(0, 0, 0, 0.07) 0px 16px 16px",
  },
});

const CardSection = () => {
  const iconList = [
    <FavoriteIcon sx={{ color: "red", fontSize: "20px" }} />,
    <VisibilityIcon sx={{ color: "#1565C0", fontSize: "20px" }} />,
    <AttachFileIcon sx={{ color: "#6CC2A2", fontSize: "20px" }} />,
    <PlayArrowIcon sx={{ color: "#F4541D", fontSize: "20px" }} />,
    <FileDownloadOutlinedIcon sx={{ color: "#41A2FE", fontSize: "20px" }} />,
  ];

  const CardData = [
    {
      title: "Meagan Fisher",
      subTitle: "Engineering Manager",
    },
  ];

  const classes = useStyle();
  return (
    <>
      <Box sx={{ margin: "30px 0" }}>
        <Container>
          <Grid container spacing={2}>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Card className={classes.cardStyle}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  {iconList?.map((val, ind) => (
                    <ul>
                      <li className={classes.li} key={ind}>
                        <IconButton className={classes.iconButton}>
                          {val}
                        </IconButton>
                      </li>
                    </ul>
                  ))}
                </Box>
                {CardData?.map(({ title, subTitle }, ind) => (
                  <CardContent key={ind} className={classes.content}>
                    <CardMedia
                      image={downloadPic}
                      sx={{
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                      }}
                      alt
                    />
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="body2">{subTitle}</Typography>
                  </CardContent>
                ))}
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Button
                    sx={{
                      borderRadius: "100rem !important",
                      lineHeight: "28px",
                      fontSize: "13px",
                      backgroundColor: "#0284FE",
                    }}
                    endIcon=<AddOutlinedIcon sx={{ ml: 1 }} />
                    variant="contained"
                  >
                    follow
                  </Button>
                  <Button
                    sx={{
                      borderRadius: "100rem !important",
                      lineHeight: "28px",
                      fontSize: "13px",
                      backgroundColor: "white",
                      color: "#505256",
                    }}
                    endIcon=<ChatBubbleOutlineOutlinedIcon sx={{ ml: 1 }} />
                    variant="contained"
                  >
                    Message
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <Card sx={{ minHeight: "390px" }}>
                {CardData?.map(({ title, subTitle }, ind) => (
                  <CardContent
                    sx={{
                      p: 0,
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px !important",
                    }}
                  >
                    <CardMedia
                      image={cardImg}
                      sx={{
                        width: "100%",
                        height: "250px",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                      alt="/"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: 60,
                        p: 1,
                        boxShadow: '0 0 1px 0 rgba(8, 11, 14, 0.06), 0 16px 16px -1px rgba(8, 11, 14, 0.1)'
                      }}
                    >
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Avatar src={avatarImg} />{" "}
                        <Typography
                          variant="body2"
                          sx={{ ml: 1, fontSize: "13  px" }}
                        >
                          {title}
                        </Typography>
                      </Box>
                      <Box>
                        <IconButton>
                          <FavoriteBorderIcon />
                        </IconButton>
                      </Box>
                    </Box>
                  </CardContent>
                ))}
                <CardActions
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      width:"100%",
                      paddingTop:"10px",
                      display: "flex",
                      justifyContent: "space-between !important",
                      alignItems:"center",
                      
                    }}
                  >
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <Avatar src={johnImg} />
                      <Typography
                        variant="body2"
                        sx={{ ml: 1, fontSize: "13  px" }}
                      >John Doe</Typography>
                    </Box>
                    <Box>
                      <IconButton>
                        <ModeIcon />{" "}
                      </IconButton>
                    </Box>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item lg={4} md={4} sm={6} xs={12}>
              <MineForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default CardSection;
