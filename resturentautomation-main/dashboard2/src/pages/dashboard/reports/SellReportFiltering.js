import React from "react";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Divider,
  Typography,
  Tooltip
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";

const SellReportFiltering = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    { label: "Customer ID", minWidth: 50, maxWidth: 100 },
    { label: "Waiter", minWidth: 50, maxWidth: 100 },
    { label: "Sales Type", minWidth: 50, maxWidth: 100 },
    { label: "Total Discount", minWidth: 50, maxWidth: 100 },
    { label: "Third Party Commission", minWidth: 50, maxWidth: 100 },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (date, invNo, custId, waiter, salesType, discount, commission, totAmount) => ({
    date,
    invNo,
    custId,
    waiter,
    salesType,
    discount,
    commission,
    totAmount
  });

  const rows = [createRows("11-06-2022", "456123", "ID", "Waiter", "Pick-Up", 120, 50, 5200)];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Sell Report Filtering
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            From Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            To Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            Select Type
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Dine In</MenuItem>
            <MenuItem>Delivery</MenuItem>
            <MenuItem>Pickup</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={1} alignSelf="end">
          <Button variant="contained" fullWidth>
            Search
          </Button>
        </Grid>
        <Grid item xs={1} alignSelf="end">
          <Button variant="outlined" fullWidth>
            Print
          </Button>
        </Grid>
      </Grid>
      <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1500 }}>
          <TableHead>
            <TableRow>
              {columns.map((column, id) => (
                <TableCell
                  align="center"
                  sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                >
                  {column.label} {column.endIcon && <>({column.endIcon})</>}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow>
                <TableCell align="center">{id + 1}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.invNo}</TableCell>
                <TableCell align="center">{row.custId}</TableCell>
                <TableCell align="center">{row.waiter}</TableCell>
                <TableCell align="center">{row.salesType}</TableCell>
                <TableCell align="center">{row.discount}</TableCell>
                <TableCell align="center">{row.commission}</TableCell>
                <TableCell align="center">{row.totAmount}</TableCell>
                <TableCell align="center">
                  <Tooltip title="View" placement="left">
                    <IconButton color="secondary" size="small">
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" placement="top">
                    <IconButton sx={{ color: "error.main" }} size="small">
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default SellReportFiltering;