import React from "react";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Box,
  Paper,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
} from "@mui/material";
import { Menu } from "@mui/icons-material";
import { makeStyles, useTheme } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import BottomNav from "./BottomNav";
import WaiterAppBar from "./waiternavbar/waiternavbar";
const Reservations = (props) => {
  const reservations = [
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
    {
      name: "Aadarsh",
      email: "email@gmail.com",
      contact: "+91-9546124745",
      noOfPerson: 6,
      date: "MON, 21-02-2022",
      time: "17:00 - 20:00",
    },
  ];

  const navigate = useNavigate();

  const onViewReservationHandler = (reservation) => {
    navigate("/waiter/view-reservation", { state: reservation });
  };

  return (
    <>
      <WaiterAppBar />
      <Grid container xs={12} spacing={2} sx={{ p: 2 }}>
        {reservations.map((reservation, id) => (
          <Grid item sm={4} lg={4} style={{ margin: "auto" }}>
            <Paper
              elevation={12}
              fullWidth
              sx={{ display: "flex", flexDirection: "column", p: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">Name</Typography>
                <Typography variant="subtitle1">{reservation.name}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">Email</Typography>
                <Typography variant="subtitle1">{reservation.email}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">Contact</Typography>
                <Typography variant="subtitle1">
                  {reservation.contact}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">No. of Person</Typography>
                <Typography variant="subtitle1">
                  {reservation.noOfPerson}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">Date</Typography>
                <Typography variant="subtitle1">{reservation.date}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Typography variant="body1">Time</Typography>
                <Typography variant="subtitle1">{reservation.time}</Typography>
              </Box>
              <Button variant="outlined" size="small" fullWidth sx={{ mb: 1 }}>
                Reject
              </Button>
              <Button variant="contained" size="small" fullWidth>
                Accept
              </Button>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <BottomNav />
    </>
  );
};
export default Reservations;
