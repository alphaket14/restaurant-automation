import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../../../components/TableTemplate";

import {
  TextField,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Divider,
  Tooltip,
  Box,
  TablePagination
} from "@mui/material";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";

const FoodAvailability = (props) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Item Name", minWidth: 100, maxWidth: 120 },
    { label: "Responsible Person", minWidth: 100, maxWidth: 120 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Note", minWidth: 80, maxWidth: 100 },
    { label: "Added By", minWidth: 80, maxWidth: 100 },
    {
      label: "Loss Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (itemCode, itemName, amount, respPerson, date, note, addedBy) => {
    return { itemCode, itemName, amount, respPerson, date, note, addedBy };
  };

  const rows = [
    createData("A1", "Item Name", 100, "Person", "07-06-2022", "Note for waste", "Staff Name")
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows2, setRows2] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      {/* <Typography variant="h5" gutterBottom>
        Waste Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <TextField sx={{ width: "20%",mb:2 }} label="Search" size="small" />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/dashboard/foodmanagement/add-waste")}
        >
          Add Waste
        </Button>
      </Box>
      <Grid
                container
                style={{
                  borderRadius: 5,
                  border: "1px solid grey",
                  boxSizing: "border-box",
                  padding: "20px 20px",
                  margin: "20px 0px",
                }}
                direction="column"
                rowGap={2}
              >
      <TableContainer >
        <Scrollbar>
          <Table size="small"  sx={{ minWidth: 1500 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.itemCode}</TableCell>
                    <TableCell align="center">{row.itemName}</TableCell>
                    <TableCell align="center">{row.respPerson}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.note}</TableCell>
                    <TableCell align="center">{row.addedBy}</TableCell>
                    <TableCell align="center"><CurrencyRupee
                      fontSize="small"
                      style={{ color: "gray", marginRight: "5px" }}
                    />{row.amount}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => navigate("/dashboard/foodmanagement/add-waste")}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small">
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      <TablePagination
                component="div"
                count={rows2.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
      </Grid>
    </>
  );
};
export default FoodAvailability;
