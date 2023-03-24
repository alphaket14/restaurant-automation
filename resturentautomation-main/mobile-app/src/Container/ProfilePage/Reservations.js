import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Modal,
  Backdrop,
  Fade
} from "@mui/material";
import { Star, ArrowBack, Person } from "@mui/icons-material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
  borderRadius: 1
};

const Reservations = (props) => {
  const navigate = useNavigate();

  const [tab, setTab] = useState(0);
  const tabChangeHandler = (event, newValue) => {
    setTab(newValue);
  };

  const [editModal, setEditModal] = useState(false);

  const editModalOpenHandler = () => {
    setEditModal(true);
  };
  const editModalCloseHandler = () => {
    setEditModal(false);
  };

  return (
    <>
      <Modal
        open={editModal}
        onClose={editModalCloseHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={editModal}>
          <Box sx={style}>
            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Edit Date
              </Typography>
              <TextField size="small" fullWidth type="date" />
            </Box>
            <Box sx={{ width: "100%", mb: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Edit Time
              </Typography>
              <TextField size="small" fullWidth type="time" />
            </Box>
            <Box sx={{ width: "100%", display: "flex", flexDirection: "column", mb: 2 }}>
              <Typography variant="caption" color="text.secondary" gutterBottom>
                Persons
              </Typography>
              <TextField size="small" sx={{ width: 100 }} />
            </Box>
            <Button variant="contained" fullWidth>
              Request Change
            </Button>
          </Box>
        </Fade>
      </Modal>

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
      <Grid container sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          Table Bookings
        </Typography>
        <Grid item container sx={{ mb: 1 }}>
          <Tabs value={tab} onChange={tabChangeHandler}>
            <Tab label="Upcoming" />
            <Tab label="History" />
          </Tabs>
        </Grid>
        <Grid item container direction="column" rowSpacing={2}>
          <Grid item>
            <Paper
              elevation={6}
              sx={{ display: "flex", p: "3px", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 90,
                    width: 90,
                    overflow: "hidden",
                    borderRadius: 1
                  }}
                >
                  <img
                    src="burgerking.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%" }}
                  />
                </Box>

                <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" fontWeight={600}>
                    Burger King
                  </Typography>
                  <Typography variant="subtitle2">07-03-22 | 15:00 - 17:00</Typography>
                  <Typography component="div" sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" fontSize={18}>
                      6
                    </Typography>
                    <Person sx={{ fontSize: 20 }} />
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mb: "2px" }}
                  onClick={editModalOpenHandler}
                >
                  Edit
                </Button>
                <Button variant="text" size="small">
                  Cancel
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={6}
              sx={{ display: "flex", p: "3px", justifyContent: "space-between" }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 90,
                    width: 90,
                    overflow: "hidden",
                    borderRadius: 1
                  }}
                >
                  <img
                    src="burgerking.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%" }}
                  />
                </Box>

                <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h6" fontWeight={600}>
                    Burger King
                  </Typography>
                  <Typography variant="subtitle2">07-03-22 | 15:00 - 17:00</Typography>
                  <Typography component="div" sx={{ display: "flex", alignItems: "center" }}>
                    <Typography variant="body1" fontSize={18}>
                      6
                    </Typography>
                    <Person sx={{ fontSize: 20 }} />
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column"
                }}
              >
                <Button
                  variant="contained"
                  size="small"
                  sx={{ mb: "2px" }}
                  onClick={editModalOpenHandler}
                >
                  Edit
                </Button>
                <Button variant="text" size="small">
                  Cancel
                </Button>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Reservations;
