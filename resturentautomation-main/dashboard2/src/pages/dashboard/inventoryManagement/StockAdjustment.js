import React from "react";

import {
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton
} from "@mui/material";

import { Add, Edit, Delete } from "@mui/icons-material";

const StockAdjustment = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 10, maxWidth: 20 },
    { label: "Reference No.", minWidth: 50, maxWidth: 150 },
    { label: "Date", minWidth: 50, maxWidth: 150 },
    { label: "Ingredient Count", minWidth: 50, maxWidth: 100 },
    { label: "Responsible Person", minWidth: 50, maxWidth: 150 },
    { label: "Note", minWidth: 50, maxWidth: 150 },
    { label: "Added By", minWidth: 50, maxWidth: 150 },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (refNo, date, ingCount, resPerson, note, addedBy) => {
    return { refNo, date, ingCount, resPerson, note, addedBy };
  };

  const rows = [
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin"),
    createRows("00025", "12/04/2022", 2, "Test Person", "Test Note", "Admin")
  ];

  return (
    <>
      <Grid container>
        <Typography variant="h5" gutterBottom>
          Stock Adjustments
        </Typography>
        <Grid item xs={12} align="right" sx={{ mb: 1 }}>
          <Button variant="contained" sx={{ mr: 1 }} startIcon={<Add />}>
            Add Stock Adjustment
          </Button>
        </Grid>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column, id) => (
                <TableCell sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow>
                <TableCell>{id + 1}</TableCell>
                <TableCell>{row.refNo}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.ingCount}</TableCell>
                <TableCell>{row.resPerson}</TableCell>
                <TableCell>{row.note}</TableCell>
                <TableCell>{row.addedBy}</TableCell>
                <TableCell>
                  <IconButton size="small" color="primary">
                    <Edit />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "error.main" }}>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default StockAdjustment;
