import React from "react";
import TableTemplate from "../../../components/TableTemplate";

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
  Stack,
  TablePagination
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
const ServiceChargeReport = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Order No.", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    {
      label: "Service Tax",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Tax",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 20,
      maxWidth: 50,
    },
    {
      label: "Partner Commission",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 150,
    },
    {
      label: "Delivery Charges",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
  ];

  const createRows = (
    orderNo,
    invNo,
    serviceTax,
    tax,
    commission,
    deliveryCharges,
    total
  ) => ({
    orderNo,
    invNo,
    serviceTax,
    tax,
    commission,
    deliveryCharges,
    total,
  });

  const rows = [createRows(45, "4514164", 100, 50, 150, 50, 5200)];

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

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
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Box
          component="span"
          sx={{
            width: "100%",
          }}
        >
          <TextField
            fullWidth
            placeholder="Invoice"
            label="Invoice"
            sx={{ mr: 1, float: "left", width: "20%" }}
            size="small"
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
                sx={{ width: "15%", float: "right", marginLeft: "10px" }}
                size="small"
                helperText={null}
              />
            )}
          />
          
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
                sx={{ width: "15%", float: "right", marginLeft: "10px" }}
                size="small"
                helperText={null}
              />
            )}
          />

       
        </Box>
      </Stack>
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
            <Table size="small" sx={{ minWidth: 1400 }}>
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
                    <TableCell align="center">{row.orderNo}</TableCell>
                    <TableCell align="center">{row.invNo}</TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.serviceTax}
                    </TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.tax}
                    </TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.commission}
                    </TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.deliveryCharges}
                    </TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.total}
                    </TableCell>
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
export default ServiceChargeReport;
