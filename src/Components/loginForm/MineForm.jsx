import {
  Box,
  Button,
  Card,
  CardContent,
  FormControl,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  root: {
    "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
      backgroundColor: "white",
    },
    "& .MuiOutlinedInput-root": {
      borderRadius: "100rem",
      boxShadow: "none !important",

      "&:hover fieldset": {
        borderColor: "#e2e2e2",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#e2e2e2",
        
      },
    },
  },
});

const MineForm = () => {
  const classes = useStyles();

  return (
    <>
      <Card
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          minHeight: "390px",
        }}
      >
        <CardContent sx={{ mb: 2, mt: 2, textAlign: "center" }}>
          <Typography variant="h5">
            <b>Login into your account</b>
          </Typography>
          <Typography sx={{ fontSize: "12px", pt: 1 }} variant="body2">
            Don't have an account yet? <a href="#!">Create New</a>{" "}
          </Typography>
        </CardContent>

        <FormControl sx={{ width: "100%", p: 2 }}>
          <Box sx={{ marginBottom: "30px", position: "relative" }}>
            <EmailOutlinedIcon
              sx={{
                position: "absolute",
                zIndex: 1,
                right: "18px",
                top: "15px ",
              }}
            />
            <TextField
              classes={{ root: classes.root }} // Apply the custom class here
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
              sx={{
                width: "100%",
                position: "relative",
                backgroundColor: "white !important",
                boxShadow: "none !important",
              }}
              placeholder="johndoe@gmail.com"
            />
          </Box>

          <Box sx={{ position: "relative" }}>
            <TextField
              classes={{ root: classes.root }} // Apply the custom class here
              sx={{
                width: "100%",
                position: "relative",
                backgroundColor: "white !important",
                boxShadow: "none !important",
              }}
              id="outlined-basic"
              label="Password"
              variant="outlined"
              type="password"
              placeholder="Password"
            />
            <RemoveRedEyeOutlinedIcon
              sx={{ position: "absolute", right: "18px", top: "15px" }}
            />
          </Box>

          <Button
            sx={{
              backgroundColor: "#DDEFFF",
              mt: 4,
              height: 50,
              borderRadius: "100rem",
            }}
          >
            Login
          </Button>
        </FormControl>
      </Card>
    </>
  );
};

export default MineForm;
