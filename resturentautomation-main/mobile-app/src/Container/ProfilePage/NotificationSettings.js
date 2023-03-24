import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  ListItem,
  ListItemText,
  List,
  Divider,
  Switch,
  Box,
  Button
} from "@mui/material";
import { NotificationsNone, ArrowBack } from "@mui/icons-material";
const NotificationSettings = (props) => {
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
      <Grid container direction="column">
        <Grid item sx={{ p: 1 }}>
          <Typography variant="h5" gutterBottom>
            Notification Preferences
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem sx={{ display: "flex", alignItems: "flex-start" }}>
              <ListItemText primary="Enable all" secondary="Activate all notifications" />
              <Switch defaultChecked />
            </ListItem>
            <Divider sx={{ borderBottomWidth: 5 }} />
            <ListItem sx={{ display: "flex", alignItems: "flex-start" }}>
              <ListItemText
                primary="Promos and offers"
                secondary="Receive updates about coupons, promotions and money-saving offers"
              />
              <Switch defaultChecked />
            </ListItem>
            <Divider sx={{ borderBottomWidth: 5 }} />
            <ListItem sx={{ display: "flex", alignItems: "flex-start" }}>
              <ListItemText
                primary="Social Notifications"
                secondary="Get notified when someone follows your profile, or when you get likes and comments on reviews and photos posted by you"
              />
              <Switch defaultChecked />
            </ListItem>
            <Divider sx={{ borderBottomWidth: 5 }} />
            <ListItem sx={{ display: "flex", alignItems: "flex-start" }}>
              <ListItemText
                primary="Orders and purchases"
                secondary="Receive updates related to your order status, memberships, teble bookings and more"
              />
              <Switch defaultChecked />
            </ListItem>
            <Divider sx={{ borderBottomWidth: 5 }} />
          </List>
        </Grid>
      </Grid>
      <AppBar position="fixed" sx={{ top: "auto", bottom: 0, p: 1, bgcolor: "#fff" }}>
        <Button fullWidth variant="contained">
          Save Changes
        </Button>
      </AppBar>
    </>
  );
};
export default NotificationSettings;
