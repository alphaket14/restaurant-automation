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
  TablePagination
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";
const SellReportDeliveryType = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Delivery Type", minWidth: 50, maxWidth: 100 },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (deliveryType, totAmount) => ({
    deliveryType,
    totAmount
  });

  const rows = [createRows("Delivery Type", 5200)];

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
        <Table size="small" sx={{ minWidth: 1000 }}>
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
                <TableCell align="center">{row.deliveryType}</TableCell>
                <TableCell align="center"><CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.totAmount}</TableCell>
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
export default SellReportDeliveryType;
