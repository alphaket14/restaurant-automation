import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Typography,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Radio,
  OutlinedInput,
  InputLabel,
  Checkbox,
  ListItemText
} from "@mui/material";
import { useDropzone } from "react-dropzone";
const AddAvailability = (props) => {
  const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [days, setDays] = useState([]);

  const dayChangeHandler = (event) => {
    const {
      target: { value }
    } = event;
    setDays(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Food Availability
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box"
        }}
      >
        <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={6} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Parent Category :</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <RadioGroup row>
                    <FormControlLabel
                      control={
                        <Radio
                          sx={{ color: "primary.main", "&.Mui-checked": { color: "primary.main" } }}
                        />
                      }
                      label="Veg"
                      value="veg"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          sx={{ color: "error.main", "&.Mui-checked": { color: "error.main" } }}
                        />
                      }
                      label="Non-Veg"
                      value="nonveg"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Catagory :</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Name :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField placeholder="Food Name" fullWidth size="small" />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Available Days :</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth size="small">
                  <InputLabel>Select Days</InputLabel>
                  <Select
                    multiple
                    value={days}
                    onChange={dayChangeHandler}
                    input={<OutlinedInput label="Select Days" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {daysArray.map((day) => (
                      <MenuItem key={day} value={day}>
                        <Checkbox checked={days.indexOf(day) > -1} />
                        <ListItemText primary={day} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Start Time :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField type="time" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">End Time :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField type="time" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="outlined">Reset</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddAvailability;
