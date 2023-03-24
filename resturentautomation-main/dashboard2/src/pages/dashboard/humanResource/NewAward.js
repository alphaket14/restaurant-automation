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
const NewAward = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Award name", minWidth: 100, maxWidth: 250 },
    { label: "Award Description", minWidth: 100, maxWidth: 250 },
    { label: "Gift Item", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 100, maxWidth: 250 },
    { label: "Employee Name", minWidth: 100, maxWidth: 250 },
    { label: "Award By", minWidth: 100, maxWidth: 250 }
  ];

  const createData = (sl, awardName, awardDesc, giftItem, date, empName, awardBy) => {
    return { sl, awardName, awardDesc, giftItem, date, empName, awardBy };
  };

  const rows = [
    createData(
      1,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      2,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      3,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      4,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      5,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      6,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    ),
    createData(
      7,
      "World Group",
      "Cash money $100",
      "Price Money",
      "2021-10-20",
      "Sam Farakate",
      "demo"
    )
  ];

  return (
    <>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button variant="contained">Add New Award</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Manage Award</Button>
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
                  <TableCell>{row.awardName}</TableCell>
                  <TableCell>{row.awardDesc}</TableCell>
                  <TableCell>{row.giftItem}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.empName}</TableCell>
                  <TableCell>{row.awardBy}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default NewAward;
