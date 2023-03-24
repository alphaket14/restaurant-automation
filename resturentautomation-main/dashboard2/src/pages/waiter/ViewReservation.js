import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Grid, Paper, Box, Typography, IconButton, Button, AppBar } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : ""
  }
}));

const ViewReservation = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const { state } = useLocation();
  return (
    <>
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Grid container sx={{ p: "15px 30px 15px 8px" }}>
          <Grid item container justifyContent="space-between" alignItems="center">
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <IconButton sx={{ color: "#fff", mr: 1 }} onClick={() => navigate(-1)}>
                <ArrowBack />
              </IconButton>
              <Typography variant="h6" component="span">
                Name:{" "}
              </Typography>
              <Typography variant="h6" component="span">
                {state.name}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span">
                Contact:{" "}
              </Typography>
              <Typography variant="h5" component="span">
                {state.contact}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container sx={{ p: 1 }}>
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" component="span">
              No. of Person
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{state.noOfPerson}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" component="span">
              Date
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{state.date}</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" component="span">
              Time
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">{state.time}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <AppBar
        className={classes.bottomNav}
        position="fixed"
        sx={{ top: "auto", bottom: 0, boxShadow: "0 -2px 10px rgba(0,0,0,0.3)" }}
      >
        <Grid container sx={{ p: 1 }} spacing={2}>
          <Grid item xs={6}>
            <Button variant="outlined" fullWidth>
              Reject
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button variant="contained" fullWidth>
              Accept
            </Button>
          </Grid>
        </Grid>
      </AppBar>
    </>
  );
};
export default ViewReservation;
