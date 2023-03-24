import React, { useState, useCallback } from "react";
import { Input, TextField, Select, MenuItem, Grid, Button } from "@material-ui/core";
const AddDivision = (props) => {
  return (
    <>
      <Grid
        container
        style={{
          boxSizing: "border-box"
        }}
      >
        <Grid item container spacing={3} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Division Name*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Department Name
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>

          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddDivision;
