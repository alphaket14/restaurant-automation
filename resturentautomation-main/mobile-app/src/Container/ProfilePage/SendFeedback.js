import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  AppBar,
  TextField,
  IconButton,
  Toolbar
} from "@mui/material";
import { Star, ArrowBack } from "@mui/icons-material";

const SendFeedback = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        elevation={1}
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "#fff",
          maxHeight: 50,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar sx={{ p: "2px 5px" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container direction="column" rowSpacing={2} sx={{ p: 1 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Send Feedback
          </Typography>
          <Typography variant="body2" gutterBottom color="text.secondary">
            Help us improve the app for you.
          </Typography>
        </Grid>
        <Grid item>
          <TextField fullWidth variant="standard" label="Enter Feedback" />
        </Grid>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0, bgcolor: "#fff" }}>
          <Toolbar>
            <Button variant="contained" fullWidth>
              Submit Feedback
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
export default SendFeedback;
