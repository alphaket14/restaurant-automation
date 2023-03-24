import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
  AppBar,
  Modal,
  Backdrop,
  Fade,
  TextField
} from "@mui/material";
import { CheckCircle, ArrowBack, Report } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : ""
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const Transaction = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <>
      <AppBar position="sticky" sx={{ top: 0 }} elevation={4}>
        <Grid container>
          <Grid item xs={1} sx={{ p: 1, justifyContent: "center" }}>
            <IconButton sx={{ color: "#fff" }} onClick={() => navigate(-1)}>
              <ArrowBack />
            </IconButton>
          </Grid>
        </Grid>
      </AppBar>
      <Grid container sx={{ p: 1 }}>
        <Grid
          item
          container
          sx={{
            p: 2,
            pb: 1,
            mb: 1,
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid grey"
          }}
        >
          <CheckCircle sx={{ color: "primary.main", mr: 1 }} />
          <Typography variant="h6">Paid on 20 Feb 2022, 15:00</Typography>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
        >
          <Grid item>
            <Typography variant="h6">Receipt ID</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">123456</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
        >
          <Grid item>
            <Typography variant="h6">Total Amount</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">2500.00</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
        >
          <Grid item>
            <Typography variant="h6">Order No.</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">123</Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              Name
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              Aadarsh
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              Phone
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              +91-4561237890
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ p: 1, mt: 1, mb: 1 }}>
          <Grid item>
            <Typography variant="h6" color="secondary.main">
              View Order Details
            </Typography>
          </Grid>
        </Grid>
        <Button variant="outlined" fullWidth>
          Cancel Transaction
        </Button>
      </Grid>
    </>
  );
};
export default Transaction;
