import React from "react";
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
const UnitMeasurementList = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Unit Name", minWidth: 200, maxWidth: 350 },
    { label: "Short Name", minWidth: 200, maxWidth: 350 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, unitName, shortName, action) => {
    return { sl, unitName, shortName, action };
  };

  const rows = [
    createData(1, "o", "oo", "dummy"),
    createData(2, "o", "oo", "dummy"),
    createData(3, "o", "oo", "dummy"),
    createData(4, "o", "oo", "dummy"),
    createData(5, "o", "oo", "dummy"),
    createData(6, "o", "oo", "dummy"),
    createData(7, "o", "oo", "dummy"),
    createData(8, "o", "oo", "dummy"),
    createData(9, "o", "oo", "dummy")
  ];

  return (
    <>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button variant="contained">Add Unit</Button>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
        </Grid>

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
            {rows.map((row) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.unitName}</TableCell>
                  <TableCell>{row.shortName}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <DeleteIcon color="error"/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default UnitMeasurementList;
