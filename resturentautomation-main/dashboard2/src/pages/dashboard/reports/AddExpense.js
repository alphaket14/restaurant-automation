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
  InputAdornment,
  InputLabel,
  Checkbox,
  ListItemText
} from "@mui/material";

import { CurrencyRupee } from "@mui/icons-material";

const AddExpense = (props) => {


  const selections = ["Item 1", "Item 2", "Item 3"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  const category = ["Category 1", "Category 2", "Category 3"];
  const [cat, setCat] = React.useState([]);

  const catChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setCat(typeof value === "string" ? value.split(",") : value);
  };

  const payments = ["Cash On Delivery", "Credit Card", "Debit Card"];
  const [pay, setPay] = React.useState([]);

  const payChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setPay(typeof value === "string" ? value.split(",") : value);
  };




  return (
    <>
      {/* <Typography variant="h5" gutterBottom>
        Add Expense
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
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
                <Typography variant="body1">Category :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Category</InputLabel>
                <Select
                  labelId="select-type"
                  label="Category"
                  id="select-type"
                  // size="small"
                  value={cat}
                  onChange={catChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {category.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={cat.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                  
                </Select>
              </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Expense Item :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">List Items</InputLabel>
                <Select
                  labelId="select-type"
                  label="List Items"
                  id="select-type"
                  // size="small"
                  value={type}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              </Grid>
            </Grid>

            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Payment Type :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Payment Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Payment Type"
                  id="select-type"
                  // size="small"
                  value={pay}
                  onChange={payChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {payments.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={pay.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                
                </Select>
              </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Added By :</Typography>
              </Grid>
              <Grid item xs={8}>
              <TextField
                  fullWidth
                  size="small"
                  label="Name"
                  placeholder="Name"
                  multiline
                 
                />
                </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Amount :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupee fontSize="small" />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                <Typography variant="body1">Note :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Note"
                  label="Note"
                  multiline
                  rows={3}
                  maxRows={5}
                />
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
export default AddExpense;
