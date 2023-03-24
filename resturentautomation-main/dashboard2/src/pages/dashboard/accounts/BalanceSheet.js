import React from "react";
import {
  Input,
  Box,
  Button,
  IconButton,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  withStyles
} from "@material-ui/core";

import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const BalanceSheet = (props) => {
  const columns = [
    { label: "Head Name", minWidth: 350, maxWidth: 500 },
    { label: "Amount", minWidth: 200, maxWidth: 350 }
  ];

  const createData = (headName, amount) => {
    return { headName, amount };
  };

  const rows = [
    createData("Cash and Equivalent", 4188.46),
    createData("Cash and Equivalent", 4188.46),
    createData("Cash and Equivalent", 4188.46),
    createData("Cash and Equivalent", 4188.46),
    createData("Cash and Equivalent", 4188.46),
    createData("Cash and Equivalent", 4188.46)
  ];

  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
      >
        <Grid item alignSelf="center">
          <label htmlFor="date1" style={{ margin: "0 15px" }}>
            From
          </label>
        </Grid>
        <Grid item>
          <Input type="date" id="date1" />
        </Grid>
        <Grid item alignSelf="center">
          <label htmlFor="date2" style={{ margin: "0 15px" }}>
            To
          </label>
        </Grid>
        <Grid item>
          <Input type="date" id="date2" />
        </Grid>
        <Grid item>
          <Button variant="contained" style={{ margin: "0 10px" }}>
            Search
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Print</Button>
        </Grid>
      </Grid>

      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "10px 0px"
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
            Balance Sheet
          </Grid>
          <Grid item>
            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <EditIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <ControlCameraIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CachedIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <RemoveIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <FullscreenIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container style={{ padding: "20px 20px" }}></Grid>
        <Grid
          item
          container
          style={{
            boxSizing: "border-box",
            padding: "20px 20px",
            margin: "0 0px"
          }}
          direction="column"
          rowGap={2}
        >
          <Grid item>Date: 9th Dec 2021</Grid>

          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow key={id} hover>
                    <TableCell>{row.headName}</TableCell>
                    <TableCell>{row.amount}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          <Grid item align="center">
          <Button variant="contained">Print</Button>
        </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BalanceSheet;
