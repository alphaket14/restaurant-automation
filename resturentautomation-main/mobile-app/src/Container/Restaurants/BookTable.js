import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  Grid,
  Box,
  Button,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Select,
  MenuItem,
  FormControl,
  InputLabel
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, ArrowBack, Add, Remove } from "@mui/icons-material";
import { TimePicker, DatePicker } from "@mui/lab";

const useStyles = makeStyles((theme) => ({
  activeDay: {
    backgroundColor: "#e23744",
    color: "#fff"
  }
}));

const BookTable = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [date, setDate] = useState(new Date());

  const [hour, setHour] = useState(0);
  const [minutes, setMinutes] = useState(0);

  const hourChangeHandler = (e) => setHour(e.target.value);
  const minuteChangeHandler = (e) => setMinutes(e.target.value);

  const [persons, setPersons] = useState(1);

  const addPerson = () => {
    setPersons(Number(persons) + 1);
  };
  const removePerson = () => {
    if (persons > 1) {
      setPersons(persons - 1);
    }
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
      <Grid container sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          Book a Table
        </Typography>
        <Grid item container sx={{ mt: 1 }}>
          <Typography variant="h6" gutterBottom>
            Select Day
          </Typography>

          <DatePicker
            value={date}
            onChange={(newDate) => {
              setDate(newDate);
            }}
            renderInput={(params) => {
              const days = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
              ];
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
              const month = params.inputProps.value.split("/")[0];
              const day = params.inputProps.value.split("/")[1];
              const year = params.inputProps.value.split("/")[2];
              const d = new Date(Number(year), Number(month) - 1, Number(day));
              const dateValue = `${days[d.getDay()]}, ${day} ${months[d.getMonth()]} ${year}`;
              params.inputProps.value = `${dateValue}`;
              return <TextField fullWidth {...params} helperText={null} />;
            }}
          />
        </Grid>
        <Grid item container sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            Select Time
          </Typography>
          <Grid item container>
            <Box>
              <FormControl>
                <InputLabel>Hour</InputLabel>
                <Select label="Hour" value={hour} onChange={hourChangeHandler} sx={{ width: 80 }}>
                  <MenuItem value={0}>00</MenuItem>
                  <MenuItem value={1}>01</MenuItem>
                  <MenuItem value={2}>02</MenuItem>
                  <MenuItem value={3}>03</MenuItem>
                  <MenuItem value={4}>04</MenuItem>
                  <MenuItem value={5}>05</MenuItem>
                  <MenuItem value={6}>07</MenuItem>
                  <MenuItem value={7}>07</MenuItem>
                  <MenuItem value={8}>08</MenuItem>
                  <MenuItem value={9}>09</MenuItem>
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={11}>11</MenuItem>
                  <MenuItem value={12}>12</MenuItem>
                  <MenuItem value={13}>13</MenuItem>
                  <MenuItem value={14}>14</MenuItem>
                  <MenuItem value={15}>15</MenuItem>
                  <MenuItem value={16}>16</MenuItem>
                  <MenuItem value={17}>17</MenuItem>
                  <MenuItem value={18}>18</MenuItem>
                  <MenuItem value={19}>19</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={21}>21</MenuItem>
                  <MenuItem value={22}>22</MenuItem>
                  <MenuItem value={23}>23</MenuItem>
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", px: 1 }}>
              <Typography variant="h5" fontWeight={600}>
                :
              </Typography>
            </Box>

            <Box>
              <FormControl>
                <InputLabel>Min</InputLabel>
                <Select
                  label="Hour"
                  value={minutes}
                  onChange={minuteChangeHandler}
                  sx={{ width: 80 }}
                >
                  <MenuItem value={0}>00</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>
        </Grid>
        <Grid item container sx={{ mt: 3 }}>
          <Typography variant="h6" gutterBottom>
            How many people?
          </Typography>
          <Grid item xs={12} sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="primary"
              onClick={removePerson}
              disabled={persons === 1 ? true : false}
            >
              <Remove />
            </IconButton>
            <TextField
              type="number"
              InputProps={{
                inputProps: {
                  style: { textAlign: "center" }
                }
              }}
              sx={{ width: 80 }}
              value={persons}
              onChange={(e) => {
                if (e.target.value >= 0) {
                  setPersons(e.target.value);
                }
              }}
            />
            <IconButton color="primary" onClick={addPerson}>
              <Add />
            </IconButton>
          </Grid>
          <Grid item xs={12} sx={{ mt: 3, display: "flex" }}>
            <Typography variant="h6">Details</Typography>
            <IconButton size="small" color="primary">
              <Edit fontSize="small" />
            </IconButton>
          </Grid>
          <Grid item xs={12} sx={{ mt: 1 }}>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" component="span" color="text.secondary">
                Name:{" "}
              </Typography>
              <Typography variant="body1" component="span" color="text.secondary">
                Aadarsh Shaw
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" component="span" color="text.secondary">
                Phone:{" "}
              </Typography>
              <Typography variant="body1" component="span" color="text.secondary">
                1546751649
              </Typography>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Typography variant="body1" component="span" color="text.secondary">
                Email:{" "}
              </Typography>
              <Typography variant="body1" component="span" color="text.secondary">
                email@gmail.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
        <AppBar position="fixed" sx={{ bgcolor: "#fff", top: "auto", bottom: 0 }}>
          <Toolbar>
            <Button fullWidth variant="contained" onClick={() => navigate("/select-table")}>
              Select Table
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
export default BookTable;
