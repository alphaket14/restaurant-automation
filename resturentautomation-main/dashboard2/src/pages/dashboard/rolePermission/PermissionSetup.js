import React from "react";
import { Input, TextField, Select, MenuItem, Grid, Button, IconButton } from "@material-ui/core";
const PermissionSetup = (props) => {
  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "20px 0px"
        }}
      >
        <Grid
          item
          container
          style={{
            borderBottom: "1px solid grey",
            padding: "5px 10px",
            justifyContent: "space-between"
          }}
        >
          <Grid item alignSelf="center">
            Application Setting
          </Grid>
          <Grid item>
            <Button variant="contained">Menu Item List</Button>
          </Grid>
        </Grid>
        <Grid item container spacing={5} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Menu Title
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Page Url
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Module
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Parent Menu
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
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
export default PermissionSetup;
