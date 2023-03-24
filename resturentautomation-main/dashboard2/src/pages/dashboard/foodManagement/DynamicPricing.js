import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Scrollbar from "src/components/Scrollbar";

import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Paper,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  Fade,
  Backdrop,
  Divider,
  TextField,
  Checkbox,
  ListItemText
} from "@mui/material";
import { DatePicker } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";
import { Remove, Edit, CurrencyRupee } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const DynamicPricing = (props) => {
  const [fromDate, setFromDate] = useState(new Date());

  const [toDate, setToDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const classes = useStyles();

  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }));

  return (
    <>
      <Grid container>
        <Grid item container xs={6} sx={{ height: "100%", position: "relative" }}>
          <Grid item container direction="column" rowSpacing={3} sx={{ pr: 2 }}>
            <Grid item>
              <Typography gutterBottom variant="h5" fontWeight={600}>
                Select Order Type
              </Typography>
              <FormControl fullWidth>
                <Select fullWidth>
                  <MenuItem>Dine In</MenuItem>
                  <MenuItem>Delivery</MenuItem>
                  <MenuItem>Pick-Up</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" fontWeight={600}>
                Select Food Catagory
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Food Catagory</InputLabel>
                <Select fullWidth label="Food Catagory">
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" fontWeight={600}>
                Select Food Item
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Food Item</InputLabel>
                <Select fullWidth label="Food Item">
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Typography gutterBottom variant="h5" fontWeight={600}>
                Best Selling
              </Typography>
              <FormControl fullWidth>
                <InputLabel>Best Selling</InputLabel>
                <Select fullWidth label="Best Selling">
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                  <MenuItem>
                    <Checkbox />
                    <ListItemText primary="Food" />
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid item>
              <Typography gutterBottom variant="h5" fontWeight={600}>
                Select Date
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 1 }}>
                <DatePicker
                  value={fromDate}
                  onChange={(newDate) => {
                    setFromDate(newDate);
                  }}
                  renderInput={(params) => {
                    const month = params.inputProps.value.split("/")[0];
                    const day = params.inputProps.value.split("/")[1];
                    const year = params.inputProps.value.split("/")[2];
                    const d = new Date(Number(year), Number(month) - 1, Number(day));
                    const dateValue = `${days[d.getDay()]}, ${day} ${months[d.getMonth()]} ${year}`;
                    params.inputProps.value = `${dateValue}`;
                    return (
                      <TextField
                        sx={{ mr: 1 }}
                        {...params}
                        label="From"
                        size="small"
                        helperText={null}
                      />
                    );
                  }}
                />
                <DatePicker
                  value={toDate}
                  onChange={(newDate) => {
                    setToDate(newDate);
                  }}
                  renderInput={(params) => {
                    const month = params.inputProps.value.split("/")[0];
                    const day = params.inputProps.value.split("/")[1];
                    const year = params.inputProps.value.split("/")[2];
                    const d = new Date(Number(year), Number(month) - 1, Number(day));
                    const dateValue = `${days[d.getDay()]}, ${day} ${months[d.getMonth()]} ${year}`;
                    params.inputProps.value = `${dateValue}`;
                    return <TextField {...params} label="To" size="small" helperText={null} />;
                  }}
                />
              </Box>
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={600}>
                Select Days
              </Typography>
              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-around", mb: 1 }}>
                {weekDays.map((day, id) => (
                  <Checkbox
                    icon={
                      <Box
                        sx={{
                          height: 40,
                          width: 40,
                          border: "1px solid grey",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center"
                        }}
                      >
                        {day.charAt(0)}
                      </Box>
                    }
                    checkedIcon={
                      <Box
                        sx={{
                          height: 40,
                          width: 40,
                          border: "1px solid grey",
                          borderRadius: "50%",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          bgcolor: "#00AB55",
                          color: "#000"
                        }}
                      >
                        {day.charAt(0)}
                      </Box>
                    }
                  />
                ))}
              </Box>
              <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
                <FormControl size="small" fullWidth sx={{ mr: 1 }}>
                  <InputLabel>Recurrence</InputLabel>
                  <Select label="Recurrence" fullWidth size="small">
                    <MenuItem>Monthly</MenuItem>
                    <MenuItem>Quarterly</MenuItem>
                    <MenuItem>Yearly</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small" sx={{ mr: 1 }} fullWidth>
                  <InputLabel>Status</InputLabel>
                  <Select label="Status" fullWidth size="small">
                    <MenuItem>Consecutive</MenuItem>
                    <MenuItem>Alternate</MenuItem>
                  </Select>
                </FormControl>
                <TextField label="No. of Weeks" size="small" fullWidth />
              </Box>
            </Grid>
          </Grid>
          <Divider orientation="vertical" sx={{ position: "absolute", right: 0 }} />
        </Grid>

        <Grid item container xs={6} sx={{ pl: 2 }}>
          <Grid
            item
            container
            direction="column"
            rowSpacing={2}
            sx={{ position: "relative", maxHeight: "90%" }}
          >
            <Grid item>
              <Paper
                fullWidth
                sx={{
                  pl: 2,
                  pr: "5px",
                  py: 1,
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "space-between"
                }}
                elevation={6}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body2">Particular Name</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
                  <Typography variant="body2" sx={{ mr: 3 }}>
                    Base Price
                  </Typography>
                  <Typography variant="body2" sx={{ mr: 1 }}>
                    Dynamic Price
                  </Typography>
                </Box>
              </Paper>
            </Grid>

            <Grid item>
              <Paper
                fullWidth
                sx={{
                  p: 1,
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "space-between"
                }}
                elevation={6}
              >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <IconButton size="small" sx={{ color: "error.main", mr: 1 }}>
                    <Remove />
                  </IconButton>
                  <Typography variant="body2">Food</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "right", alignItems: "center" }}>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <TextField
                    size="small"
                    sx={{ width: 80, mr: 3 }}
                    InputProps={{ startAdornment: <CurrencyRupee fontSize="small" /> }}
                    value={150}
                    disabled
                  />
                  <TextField
                    size="small"
                    sx={{ width: 80 }}
                    InputProps={{ startAdornment: <CurrencyRupee fontSize="small" /> }}
                    label="Set"
                  />
                </Box>
              </Paper>
            </Grid>

            <Box sx={{ position: "absolute", bottom: 0, width: "100%", display: "flex" }}>
              <Button variant="outlined" fullWidth sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button variant="contained" fullWidth>
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default DynamicPricing;
