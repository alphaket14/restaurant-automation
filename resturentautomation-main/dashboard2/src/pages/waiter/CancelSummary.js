import React from "react";
import { Grid, Button, IconButton, Typography, AppBar, Box } from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { MonetizationOn } from "@mui/icons-material";

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

const CancelSummary = (props) => {
  const classes = useStyles();
  return (
    <>
      <Grid container sx={{ display: "flex", alignItems: "center", height: "100vh", p: 2 }}>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          direction="column"
          rowSpacing={2}
        >
          <Grid item>
            <Box sx={{ height: 100, width: 100, position: "relative" }}>
              <img
                style={{ position: "absolute", height: "100%", width: "100%" }}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaKu3BLxWmNgYlhty5_U7nJjkbPTJKN4ig5g&usqp=CAU"
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5">Order Declined</Typography>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              Sorry your order was declined due to the following reason.
            </Typography>
          </Grid>
          <Grid item>
            <Box sx={{ width: "100%", p: 1 }}>
              <Typography variant="body2" color="text.secondary">
                Reason
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Box sx={{ p: 1, border: "1px solid", borderColor: "warning.main", display: "flex" }}>
              <MonetizationOn sx={{ color: "primary.main", mr: 2 }} />
              <Box>
                <Typography variant="h6" color="primary" gutterBottom>
                  Amount Fully Refunded
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  You have been automatically refunded the full amount of your order
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0 }} className={classes.bottomNav}>
          <Grid container sx={{ p: 1 }} spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth>
                Help
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                Proceed
              </Button>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
    </>
  );
};
export default CancelSummary;
