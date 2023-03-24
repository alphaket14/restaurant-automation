import React from "react";
import {
  Paper,
  Grid,
  Box,
  Typography,
  styled,
  Button,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@mui/material";
const TableReservation = (props) => {
  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }));

  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 50 },
    { label: "Person Name", minWidth: 100, maxWidth: 250 },
    { label: "Contact Details", minWidth: 150, maxWidth: 350 },
    { label: "No. of People", minWidth: 50, maxWidth: 150 },
    { label: "Date", minWidth: 50, maxWidth: 150 },
    { label: "Time Slot", minWidth: 50, maxWidth: 150 }
  ];

  const createData = (sl, personName, contact, noOfPeople, date, time) => {
    return { sl, personName, contact, noOfPeople, date, time };
  };

  const rows = [
    createData(1, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(2, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(3, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(4, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(5, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(6, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(7, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(8, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(9, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm"),
    createData(10, "Dummy", "7894561234, email@gmail.com", 6, "2022-01-23", "5pm to 8pm")
  ];

  return (
    <>
      <Grid container sx={{ p: 3 }}>
        <CustomColor variant="h3" gutterBottom component="div">
          Table Reservations
        </CustomColor>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow>
                <TableCell>{row.sl}</TableCell>
                <TableCell>{row.personName}</TableCell>
                <TableCell>{row.contact}</TableCell>
                <TableCell>{row.noOfPeople}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default TableReservation;
