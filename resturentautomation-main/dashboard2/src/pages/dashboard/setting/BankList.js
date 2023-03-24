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
const BankList = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 30, maxWidth: 50 },
    { label: "Bank Name", minWidth: 100, maxWidth: 200 },
    { label: "A/C Name", minWidth: 100, maxWidth: 200 },
    { label: "A/C Number", minWidth: 150, maxWidth: 250 },
    { label: "Branch", minWidth: 100, maxWidth: 200 },
    { label: "Balance", minWidth: 100, maxWidth: 200 },
    { label: "Signature Picture", minWidth: 150, maxWidth: 250 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, bank, acName, acNumber, branch, balance, signaturePic, action) => {
    return { sl, bank, acName, acNumber, branch, balance, signaturePic, action };
  };

  const rows = [
    createData(
      1,
      "axis bank",
      "axis india ltd",
      "8080505020201010",
      "ahmedabad",
      2081008,
      "dummy",
      "dummy"
    ),
    createData(
      2,
      "axis bank",
      "axis india ltd",
      "8080505020201010",
      "ahmedabad",
      2081008,
      "dummy",
      "dummy"
    ),
    createData(
      3,
      "axis bank",
      "axis india ltd",
      "8080505020201010",
      "ahmedabad",
      2081008,
      "dummy",
      "dummy"
    ),
    createData(
      4,
      "axis bank",
      "axis india ltd",
      "8080505020201010",
      "ahmedabad",
      2081008,
      "dummy",
      "dummy"
    )
  ];

  return (
    <>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button variant="contained">Add New Bank</Button>
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
                  <TableCell>{row.bank}</TableCell>
                  <TableCell>{row.acName}</TableCell>
                  <TableCell>{row.acNumber}</TableCell>
                  <TableCell>{row.branch}</TableCell>
                  <TableCell>{row.balance}</TableCell>
                  <TableCell>
                    <img style={{ height: 50, width: 50 }} />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
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
export default BankList;
