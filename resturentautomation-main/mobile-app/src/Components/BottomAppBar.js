import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { IconButton, Typography, AppBar, Toolbar, Badge } from "@mui/material";
import { ShoppingBag, EventSeat, LocalOffer } from "@mui/icons-material";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  active: {
    color: "#e23744"
  },
  inActive: {
    color: "#616161"
  }
}));

const BottomAppBar = (props) => {
  const classes = useStyles();

  return (
    <>
      {props.children}
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
          bgcolor: "#fff"
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
          <IconButton>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? classes.active : classes.inActive)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none"
              }}
            >
              <ShoppingBag />
              <Typography variant="caption">Order</Typography>
            </NavLink>
          </IconButton>
          <IconButton>
            <NavLink
              to="/reservation-tab"
              className={({ isActive }) => (isActive ? classes.active : classes.inActive)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none"
              }}
            >
              <EventSeat />
              <Typography variant="caption">Reservations</Typography>
            </NavLink>
          </IconButton>
          <IconButton>
            <NavLink
              to="/offers"
              className={({ isActive }) => (isActive ? classes.active : classes.inActive)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textDecoration: "none"
              }}
            >
              <LocalOffer />
              <Typography variant="caption">Offers</Typography>
            </NavLink>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default BottomAppBar;
