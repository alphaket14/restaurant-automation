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
  Divider
} from "@mui/material";
import { Star, ArrowBack } from "@mui/icons-material";
const ProfileSettings = (props) => {
  const navigate = useNavigate();

  const onClickHandler = (path) => {
    navigate(`/${path}`);
  };

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
      <Grid container direction="column" sx={{ p: 1 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            Profile Settings
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem disableGutters onClick={() => onClickHandler("edit-profile")}>
              <ListItemText
                primary="Edit Profile"
                secondary="Change your name, description and profile photo"
              />
            </ListItem>
            <Divider />
            <ListItem disableGutters onClick={() => onClickHandler("notification-settings")}>
              <ListItemText
                primary="Notification settings"
                secondary="Define what alerts and notifications you want to see"
              />
            </ListItem>
            <Divider />
            <ListItem disableGutters onClick={() => onClickHandler("delete-account")}>
              <ListItemText primary="Account Settings" secondary="Delete your account" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </>
  );
};
export default ProfileSettings;
