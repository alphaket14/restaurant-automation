import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { IconButton, Typography, AppBar, Toolbar, Badge } from "@mui/material";
import TableBarIcon from "@mui/icons-material/TableBar";
import {
  Receipt,
  CheckCircle,
  RestaurantMenu,
  Restaurant,
} from "@mui/icons-material";
import { makeStyles, useTheme } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  active: {
    color: "#00AB55",
  },
  bottomNav: {
    backgroundColor: theme.palette.mode == "light" ? "#fff" : "",
  },
}));

const BottomNav = (props) => {
  const classes = useStyles();

  return (
    <>
      <AppBar
        position="fixed"
        className={classes.bottomNav}
        sx={{
          top: "auto",
          bottom: 0,
          boxShadow: "0 -2px 10px rgba(0,0,0,0.3)",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <IconButton
            component={NavLink}
            to="/waiter/orders"
            activeClassName={classes.active}
            size="large"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={10} color="error">
              <Restaurant />
            </Badge>
            <Typography variant="caption">Order</Typography>
          </IconButton>
          <IconButton
            component={NavLink}
            to="/waiter/reservations"
            activeClassName={classes.active}
            size="large"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Badge badgeContent={5} color="error">
              {/* <Receipt /> */}
              <TableBarIcon />
            </Badge>
            <Typography variant="caption">Reservation</Typography>
          </IconButton>
          <IconButton
            component={NavLink}
            to="/waiter/waitermenu"
            activeClassName={classes.active}
            size="large"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CheckCircle />
            <Typography variant="caption">Menu</Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};
export default BottomNav;
