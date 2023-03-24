import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  ButtonBase,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from "@mui/material";
import {
  Star,
  NotificationsActive,
  ArrowForward,
  AccountBalanceWallet,
  EventAvailable,
  Settings,
  Replay,
  Info
} from "@mui/icons-material";
const ProfilePage = (props) => {
  const navigate = useNavigate();

  const list = [
    { title: "Payments", color: "#2781e7", icon: <AccountBalanceWallet /> },
    {
      title: "Reservations",
      color: "#d77f1d",
      icon: <EventAvailable />,
      onClick: "/reservations"
    },
    { title: "Favourites", color: "#b91646", icon: <Star />, onClick: "/favourite" },
    {
      title: "Profile Settings",
      color: "#009999",
      icon: <Settings />,
      onClick: "/profile-settings"
    },
    {
      title: "Notifications",
      color: "#98a139",
      icon: <NotificationsActive />,
      onClick: "/notifications"
    },
    {
      title: "Order History",
      color: "#432e3d",
      icon: <Replay />,
      onClick: "/order-history"
    },
    {
      title: "About",
      color: "#133f14",
      icon: <Info />,
      onClick: "/about"
    }
  ];

  return (
    <>
      <Grid container style={{ padding: "0 10px" }}>
        <Grid item container justifyContent="space-between" style={{ margin: "20px 0" }}>
          <Grid item>
            <Box
              component="div"
              onClick={() => navigate("/")}
              style={{
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "#c2c2c2",
                height: 40,
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <i className="fas fa-arrow-left"></i>
            </Box>
          </Grid>
          <Grid item>
            <Box
              component="div"
              style={{
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "#e23744",
                color: "#ffffff",
                height: 40,
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <i className="fas fa-exclamation-circle"></i>
            </Box>
          </Grid>
        </Grid>
        <Grid item container xs={12} direction="column" align="center">
          <Grid item>
            <Box
              component="div"
              style={{
                boxSizing: "border-box",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
                height: 100,
                width: 100
              }}
            >
              <img
                src="dp.jpg"
                style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0 }}
              />
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="h5" component="div" style={{ fontWeight: "bold" }}>
              Arian Zesan
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              color="primary"
              variant="subtitle1"
              component="div"
              style={{ fontWeight: "bold" }}
            >
              View Activity
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "20px 0" }} direction="column">
          {list.map((el) => {
            return (
              <ButtonBase sx={{ mt: 2, borderRadius: 1 }}>
                <Box
                  onClick={el.onClick && (() => navigate(`${el.onClick}`))}
                  sx={{
                    width: "100%",
                    p: 1,
                    borderRadius: 1,
                    bgcolor: "#f4f4f4",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Box
                      component="div"
                      sx={{
                        borderRadius: "50%",
                        bgcolor: el.color,
                        color: "#fff",
                        height: 40,
                        width: 40,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mr: 1
                      }}
                    >
                      {el.icon}
                    </Box>
                    <Typography variant="h6" component="div" fontWeight={600}>
                      {el.title}
                    </Typography>
                  </Box>
                  <Box>
                    <ArrowForward sx={{ color: "#000" }} />
                  </Box>
                </Box>
              </ButtonBase>
            );
          })}
        </Grid>
        <Grid item container direction="column">
          <Typography variant="subtitle2" gutterBottom>
            Help & Support
          </Typography>
          <Divider sx={{ borderBottomWidth: 2 }} />
          <List>
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }} onClick={() => navigate("/send-feedback")}>
                <ListItemText primary="Send Feedback" />
              </ListItemButton>
            </ListItem>
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Rate us on Play Store" />
              </ListItemButton>
            </ListItem>
          </List>
        </Grid>
        <Grid item container style={{ margin: "10px 0 50px 0" }} align="center">
          <Grid item align="center" xs={12}>
            <Button variant="outlined">Sign Out</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ProfilePage;
