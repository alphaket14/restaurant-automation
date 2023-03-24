import React, { useState } from "react";
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

const createData = (sl, name, id, date, checkIn, checkOut, stay, action) => {
  return { sl, name, id, date, checkIn, checkOut, stay, action };
};

const data = [
  createData(
    1,
    "online order",
    1,
    "2021-12-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    2,
    "online order",
    9,
    "2021-12-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    4,
    "online order",
    1,
    "2021-12-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    3,
    "online order",
    7,
    "2021-12-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    5,
    "online order",
    8,
    "2021-12-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    6,
    "online order",
    11,
    "2021-11-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  ),
  createData(
    7,
    "online order",
    3,
    "2021-10-10",
    "07:09:33 am",
    "05:38:49 pm",
    "00:00:07",
    "dummmy"
  )
];
const AttendanceReports = (props) => {
  const [rows, setRows] = useState(data);

  const sortByDate = () =>{
    let newRows = rows.map(row => row);
    newRows.sort((a,b) => a.date - b.date)
    setRows(newRows)
  }

  const sortByTime = () =>{
    let newRows = rows.map(row => row);
    newRows.sort((a,b) => a.checkIn - b.checkIn)
    setRows(newRows)
  }

  const sortById = ()=>{
    let newRows = rows.map(row => row);
    newRows.sort((a,b) => a.id - b.id)
    setRows(newRows)
  }

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Employee ID", minWidth: 100, maxWidth: 250 },
    { label: "Name", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 100, maxWidth: 250 },
    { label: "Check In", minWidth: 100, maxWidth: 250 },
    { label: "Check Out", minWidth: 100, maxWidth: 250 },
    { label: "Stay", minWidth: 100, maxWidth: 250 }
  ];



  return (
    <>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={sortByDate} variant="contained">Report By Date</Button>
        </Grid>
        <Grid item>
          <Button onClick={sortById} variant="outlined">Report By ID</Button>
        </Grid>
        <Grid item>
          <Button onClick={sortByTime} variant="outlined">Report By Date & Time</Button>
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
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell>{row.checkOut}</TableCell>
                  <TableCell>{row.stay}</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default AttendanceReports;
