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
import { NotificationsNone, ArrowBack, Edit } from "@mui/icons-material";
const EditProfile = (props) => {
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
            Edit Profile
          </Typography>
        </Grid>
        <Grid item align="center">
          <Box
            sx={{
              position: "relative",
              height: 100,
              width: 100,
              borderRadius: "50%"
            }}
          >
            <img
              src="dp.jpg"
              style={{
                position: "absolute",
                height: "100%",
                width: "100%",
                top: 0,
                left: 0,
                borderRadius: "50%"
              }}
            />
            <Box
              sx={{
                position: "absolute",
                bottom: 2,
                right: 3,
                bgcolor: "rgba(0,0,0,0.3)",
                height: 25,
                width: 25,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 1
              }}
            >
              <Edit fontSize="small" />
            </Box>
          </Box>
        </Grid>
        <Grid item sx={{ p: 2 }} align="center">
          <TextField
            fullWidth
            label="Name"
            defaultValue="Arian Zesan"
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Edit fontSize="small" />
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sx={{ p: 2 }} align="center">
          <TextField
            fullWidth
            label="Phone"
            variant="standard"
            defaultValue="+91"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button size="small">Add</Button>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sx={{ p: 2 }} align="center">
          <TextField
            fullWidth
            label="Email"
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Button size="small">Add</Button>
                </InputAdornment>
              )
            }}
          />
        </Grid>
        <Grid item sx={{ p: 2 }} align="center">
          <TextField fullWidth label="Location" defaultValue="Kolkata" variant="standard" />
        </Grid>
        <Grid item sx={{ px: 2 }}>
          <Button sx={{ p: 0 }}>Change Password</Button>
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
export default EditProfile;
