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
  Tooltip,
  TablePagination
} from "@mui/material";
import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
import TableTemplate from "../../../components/TableTemplate";
import { DatePicker } from "@material-ui/lab";
const PurchaseReport = (props) => {
  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const columns = [
    // {
    //   field: "id",
    //   headerName: "Sr. No.",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "purchaseDate",
    //   headerName: "Purchase Date",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    // {
    //   field: "supplierCode",
    //   headerName: "Supplier Code",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    // {
    //   field: "supplierName",
    //   headerName: "Supplier Name",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    // {
    //   field: "inventoryCategory",
    //   headerName: "Inventory Category",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 170,
    // },
    // {
    //   field: "inventoryItem",
    //   headerName: "Inventory Item",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    // {
    //   field: "orderQty",
    //   headerName: "Order Qty",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "unit",
    //   headerName: "Unit",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "price",
    //   headerName: "Price/Unit",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "totAmount",
    //   headerName: "Total Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },
    // {
    //   field: "tax",
    //   headerName: "Tax %",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "discount",
    //   headerName: "Discount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 100,
    // },
    // {
    //   field: "invAmt",
    //   headerName: "Invoice Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150,
    // },

    { label: "Sr. No.", minWidth: 80 },
    { label: "Purchase Date", minWidth: 150 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Inventory Category", minWidth: 170 },
    { label: "Inventory Item", minWidth: 150 },
    { label: "Order Qty", minWidth: 100 },
    { label: "Unit", minWidth: 100 },
    { label: "Price/Unit",endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 100 },
    { label: "Total Amount",endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 150 },
    { label: "Tax %", minWidth: 100 },
    { label: "Discount",endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 100 },
    { label: "Invoice Amt",endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 150 }



  ];

  const createData = (
    purchaseDate,
    supplierCode,
    supplierName,
    inventoryCategory,
    inventoryItem,
    orderQty,
    unit,
    price,
    totAmount,
    tax,
    discount,
    invAmt
  ) => {
    return {
      purchaseDate,
      supplierCode,
      supplierName,
      inventoryCategory,
      inventoryItem,
      orderQty,
      unit,
      price,
      totAmount,
      tax,
      discount,
      invAmt,
    };
  };

  const rows = [
    createData(
      "20-08-2022",
      "ABCD",
      "Supplier Name",
      "Inventory Category",
      "Inventory Item",
      "Qty",
      "Unit",
      "price",
      "total",
      "tax",
      "discount",
      "invoice"
    ),
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
        Purchase Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Grid
        container
        spacing={2}
        sx={{ mb: 2, display: "flex", justifyContent: "flex-end" }}
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

      {/* <Scrollbar>
        <TableTemplate rows={rows} columns={columns} />
      </Scrollbar> */}

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
        <TableContainer>
          <Scrollbar>
            <Table size="small" sx={{ minWidth: 2400 }}>
              <TableHead>
                <TableRow>
                  {columns.map((column, id) => (
                    <TableCell
                      align="center"
                      sx={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      }}
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
                  <TableCell align="center">{row.purchaseDate}</TableCell>
                  <TableCell align="center">{row.supplierCode}</TableCell>
                  <TableCell align="center">{row.supplierName}</TableCell>
                  <TableCell align="center">{row.inventoryCategory}</TableCell>
                  <TableCell align="center">{row.inventoryItem}</TableCell>
                  <TableCell align="center">{row.orderQty}</TableCell>
                  <TableCell align="center">{row.unit}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.price}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.totAmount}</TableCell>
                  <TableCell align="center">{row.tax} %</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.discount}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.invAmt}</TableCell>
                  
                </TableRow>
              ))}
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
export default PurchaseReport;
