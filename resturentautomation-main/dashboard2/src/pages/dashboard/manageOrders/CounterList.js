import React from "react";
import {
  Input,
  Box,
  Button,
  IconButton,
  TextField,
  Grid,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Stack,
  Typography,
  Item
} from "@material-ui/core";

import EditIcon from "@mui/icons-material/Edit";

const CounterList = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Counter Number", minWidth: 300, maxWidth: 600 },
    { label: "Action", minWidth: 50, maxWidth: 100 }
  ];

  const createData = (counterNo) => {
    return { counterNo };
  };

  const rows = [
    createData(100),
    createData(200),
    createData(300),
    createData(400),
    createData(500),
    createData(600),
    createData(700),
    createData(800),
    createData(900),
    createData(1000)
  ];

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
            Counter List
          </Grid>
        </Grid>
        <Grid item container direction="column" textAlign="center" style={{ padding: "20px 10px" }}>
          <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 2 }}>
            <Typography variant="body1" component="div">
              Counter Number*
            </Typography>
            <TextField size="small" placeholder="Counter Number" />
            <Button variant="contained">Add Counter</Button>
          </Stack>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
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
              {rows[0] ? (
                rows.map((row, id) => {
                  return (
                    <TableRow key={id} hover>
                      <TableCell>{id + 1}</TableCell>
                      <TableCell>{row.counterNo}</TableCell>
                      <TableCell>
                        <IconButton color="primary">
                          <EditIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })
              ) : (
                <TableRow hover>
                  <TableCell colSpan={4} align="center">
                    No data available in table.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};
export default CounterList;
