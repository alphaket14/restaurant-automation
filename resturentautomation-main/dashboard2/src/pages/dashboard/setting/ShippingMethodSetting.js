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
const ShippingMethodSetting = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Shipping Method Name", minWidth: 200, maxWidth: 300 },
    { label: "Shipping Rate", minWidth: 150, maxWidth: 250 },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, shippingMethodName, shippingRate, status, action) => {
    return { sl, shippingMethodName, shippingRate, status, action };
  };

  const rows = [
    createData(1, "Delivery", "5.00", "Active", "dummy"),
    createData(2, "Pickup", "0.00", "Active", "dummy")
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
                  <TableCell>{row.shippingMethodName}</TableCell>
                  <TableCell>{row.shippingRate}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
export default ShippingMethodSetting;
