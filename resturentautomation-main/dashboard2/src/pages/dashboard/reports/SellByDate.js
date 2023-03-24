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

const SellByDate = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Food Category", minWidth: 50, maxWidth: 100 },
    { label: "Food Item", minWidth: 50, maxWidth: 100 },
    { label: "Food Variant", minWidth: 50, maxWidth: 100 },
    { label: "Quantity", minWidth: 50, maxWidth: 100 },
    {
      label: "Price",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (itemCode, foodCategory, foodItem, foodVariant, qty, price, totAmount) => ({
    itemCode,
    foodCategory,
    foodItem,
    foodVariant,
    qty,
    price,
    totAmount
  });

  const rows = [createRows("A1", "Food Category", "Food name", "Food Variant", 50, 1000, 5200)];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Sell By Date
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={4}>
          <Typography variant="body1" gutterBottom>
            From Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" gutterBottom>
            To Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
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
        <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1300 }}>
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
                <TableCell align="center">{row.itemCode}</TableCell>
                <TableCell align="center">{row.foodCategory}</TableCell>
                <TableCell align="center">{row.foodItem}</TableCell>
                <TableCell align="center">{row.foodVariant}</TableCell>
                <TableCell align="center">{row.qty}</TableCell>
                <TableCell align="center">{row.price}</TableCell>
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
export default SellByDate;
