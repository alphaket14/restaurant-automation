import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider
} from "@mui/material";
import { ChevronRight, ArrowBack } from "@mui/icons-material";

const About = (props) => {
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
      <Grid container direction="column" sx={{ p: 1 }}>
        <Grid item>
          <Typography variant="h5" gutterBottom>
            About
          </Typography>
        </Grid>
        <Grid item>
          <List>
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Terms of Service" />
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Open Source Libraries" />
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Licenses and Registration" />
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemButton sx={{ p: 0 }}>
                <ListItemText primary="Privacy Policy" />
                <ChevronRight />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemText primary="App version" secondary="v1.0.0 Live" />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Grid>
    </>
  );
};
export default About;
