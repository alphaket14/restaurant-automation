import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  Grid,
  Box,
  Button,
  Divider,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  LinearProgress
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, ArrowBack } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  activeDay: {
    backgroundColor: "#e23744",
    color: "#fff"
  }
}));

const TableReservationSummary = (props) => {
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
      <Grid container sx={{ p: 1 }}>
        <Grid item xs={12} sx={{ mt: 1 }}>
          <LinearProgress fullWidth />
          <Typography variant="body2">Processing Request for Reservation...</Typography>
        </Grid>
        <Typography variant="h5" fontWeight={600} sx={{ my: 1 }}>
          Booking Details
        </Typography>
        <Grid item sx={{ mb: 2 }}>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            DATE
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            March 25, 2022 At 12:00
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            PERSONS
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            5
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            NAME
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Aadarsh Shaw
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            PHONE
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            4615486264
          </Typography>
          <Typography variant="caption" color="text.secondary" gutterBottom>
            EMAIL
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            email@gmail.com
          </Typography>
        </Grid>
        <Typography variant="h5" sx={{ mb: 1 }} fontWeight={600}>
          Restaurant Details
        </Typography>
        <Grid item xs={12}>
          <Typography variant="h6" fontWeight={600}>
            Burger King
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            Sodepur, Kolkata.
          </Typography>
          <Typography variant="caption" color="text.secondary">
            ADDRESS
          </Typography>
          <Typography variant="subtitle1">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};
export default TableReservationSummary;
