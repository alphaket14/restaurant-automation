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
  Button,
  TextField,
  InputAdornment
} from "@mui/material";
import { ArrowBack, ChevronRight } from "@mui/icons-material";
const DeleteAccount = (props) => {
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
          <Typography variant="h5">Account settings</Typography>
        </Grid>
        <Grid item sx={{ p: 1 }}>
          <List>
            <ListItem disableGutters>
              <ListItemText primary="Delete account" />
              <ChevronRight />
            </ListItem>
            <Divider />
          </List>
        </Grid>
      </Grid>
    </>
  );
};
export default DeleteAccount;
