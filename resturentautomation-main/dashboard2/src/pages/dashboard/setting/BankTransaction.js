import React from "react";
import { Input, TextField, Select, MenuItem, Grid, Button } from "@material-ui/core";
const BankTransaction = (props) => {
  return (
    <>
      <Button variant="contained">Manage Bank</Button>
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
            padding: "5px 10px"
            // justifyContent: "space-between"
          }}
        >
          <Grid item xs={8} alignSelf="center">
            Bank Transtion
          </Grid>
          <Grid item xs={4} container>
            <Grid item>
              <Button variant="text">d</Button>
            </Grid>
            <Grid item>
              <Button variant="text">d</Button>
            </Grid>
            <Grid item>
              <Button variant="text">d</Button>
            </Grid>
            <Grid item>
              <Button variant="text">d</Button>
            </Grid>
            <Grid item>
              <Button variant="text">d</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={5} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Date*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <TextField fullWidth size="small" type="date" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Account type*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <Select fullWidth size="small" placeholder="Debit(+)"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Bank Name*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <Select fullWidth size="small" placeholder="axis bank"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Withdraw/Deposit ID*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <TextField fullWidth size="small" type="text" placeholder="Withdraw/Deposit ID" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Amount*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <TextField fullWidth size="small" type="text" placeholder="Amount" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Description*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={6}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                rowsMax={5}
                placeholder="Description"
              />
            </Grid>
          </Grid>
          <Grid item container xs={10} spacing={1} style={{ justifyContent: "center" }}>
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
export default BankTransaction;
