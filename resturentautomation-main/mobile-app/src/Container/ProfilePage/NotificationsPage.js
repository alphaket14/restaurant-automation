import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Collapse,
  TextField,
  Checkbox
} from "@mui/material";
import { Star, ArrowBack } from "@mui/icons-material";

const NotificationsPage = (props) => {
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
        <Toolbar sx={{ p: "2px 5px", display: "flex", justifyContent: "space-between" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Button variant="text" size="small">
            Mark As Read
          </Button>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ p: 1 }}>
        <Typography gutterBottom variant="h5">
          Notifications
        </Typography>
        <Grid item container direction="column">
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid grey"
            }}
          >
            <Box sx={{ height: 50, width: 50, bgcolor: "primary.main", borderRadius: "50%" }} />
            <Box sx={{ width: "80%" }}>
              <Typography variant="body1">Order Arriving Soon</Typography>
              <Typography variant="body2">Order will be at your doorstep shortly</Typography>
              <Typography variant="caption" color="text.secondary">
                2 Mar
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid grey"
            }}
          >
            <Box sx={{ height: 50, width: 50, bgcolor: "primary.main", borderRadius: "50%" }} />
            <Box sx={{ width: "80%" }}>
              <Typography variant="body1">Order Arriving Soon</Typography>
              <Typography variant="body2">Order will be at your doorstep shortly</Typography>
              <Typography variant="caption" color="text.secondary">
                2 Mar
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderBottom: "1px solid grey"
            }}
          >
            <Box sx={{ height: 50, width: 50, bgcolor: "primary.main", borderRadius: "50%" }} />
            <Box sx={{ width: "80%" }}>
              <Typography variant="body1">Order Arriving Soon</Typography>
              <Typography variant="body2">Order will be at your doorstep shortly</Typography>
              <Typography variant="caption" color="text.secondary">
                2 Mar
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default NotificationsPage;
