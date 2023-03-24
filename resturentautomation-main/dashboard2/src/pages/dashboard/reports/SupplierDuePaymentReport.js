import React from "react";
import TableTemplate from "../../../components/TableTemplate";
import { DatePicker } from "@material-ui/lab";
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
  Tooltip,
  TablePagination
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";

const SupplierDuePaymentReport = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 80 },
    { label: "Purchase Date", minWidth: 150 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Inventory Category", minWidth: 170 },
    { label: "Inventory Item", minWidth: 150 },
    { label: "Order Qty", minWidth: 100 },
    { label: "Price/Unit", minWidth: 100 },
    { label: "Total Amount", minWidth: 150 },
    { label: "Tax %", minWidth: 100 },
    { label: "Discount", minWidth: 100 },
    { label: "Invoice Amt", minWidth: 150 }
  ];

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const createData = (purchaseDate, invNo, supplierName, totalAmt) => {
    return { purchaseDate, invNo, supplierName, totalAmt };
  };

  const rows = [];

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
        Supplier Due Payment Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
        <Grid
        container
        spacing={2}
        sx={{ mb: 2, display: "flex", justifyContent:"flex-end" }}
      >
        <DatePicker
          inputFormat="dd/MM/yyyy"
          value={startDate}
          onChange={(newValue) => {
            SetStartDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="From"
              sx={{ width: "15%", marginLeft: "10px" }}
              size="small"
              helperText={null}
            />
          )}
        />

        <DatePicker
          inputFormat="dd/MM/yyyy"
          value={endDate}
          onChange={(newValue) => {
            SetEndDate(newValue);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="To"
              sx={{ width: "15%", marginLeft: "10px" }}
              size="small"
              helperText={null}
            />
          )}
        />
         
         

          {/* <Button variant="contained"  sx={{ float: "right", marginLeft: "10px" }}>
            Search
          </Button>
          
          <Button variant="outlined"  sx={{float: "right", marginLeft: "10px" }}>
            Print
          </Button> */}
      
         
      </Grid>
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
          <Table size="small"  sx={{ minWidth: 1400 }}>
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
              {rows.length ? (
                rows.map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell align="center" colSpan={columns.length}>
                    No Data Available
                  </TableCell>
                </TableRow>
              )}
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
export default SupplierDuePaymentReport;
