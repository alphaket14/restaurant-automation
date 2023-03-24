import React, { useState, useCallback } from "react";
import { Input, Box, Button, TextField, Grid, Select, MenuItem } from "@material-ui/core";
const AddProduction = (props) => {
  return (
    <>
      <h2>Add Production</h2>
      <hr color="grey" />
      <Grid container style={{ marginTop: 30 }}>
        <Grid item container style={{ padding: "20p 0px" }}>
          <Grid item container direction="column" xs={4} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={5} align="right">
                Food Name*
              </Grid>
              <Grid item xs={7}>
                <Select size="small" placeholder="Select Option" fullWidth>
                  <MenuItem>Pasta</MenuItem>
                  <MenuItem>Salmon Barbeque</MenuItem>
                  <MenuItem>Ramen</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={5} align="right">
                Serving Unit
              </Grid>
              <Grid item xs={7}>
                <TextField size="small" variant="outlined" fullWidth />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" xs={4} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={5} align="right">
                Variant Name*
              </Grid>
              <Grid item xs={7}>
                <Select size="small" placeholder="Select Option" fullWidth>
                  <MenuItem>1:2</MenuItem>
                  <MenuItem>1:3</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={5} align="right">
                Expiry Date*
              </Grid>
              <Grid item xs={7}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  placeholder="07-12-2021"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={4}>
            <Grid item container spacing={3}>
              <Grid item xs={5} align="right">
                Production Date*
              </Grid>
              <Grid item xs={7}>
                <TextField
                  size="small"
                  variant="outlined"
                  type="date"
                  placeholder="07-12-2021"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="contained">Submit</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddProduction;
