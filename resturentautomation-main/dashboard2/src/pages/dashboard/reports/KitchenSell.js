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
import TableTemplate from "../../../components/TableTemplate";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";
const KitchenSell = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Order Type", minWidth: 50, maxWidth: 100 },
    { label: "Order No.", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    { label: "Start Time", minWidth: 50, maxWidth: 100 },
    { label: "End Time", minWidth: 50, maxWidth: 100 },
    { label: "Cooking Time", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (orderType, orderNo, invNo, startTime, endTime, cookingTime) => ({
    orderType,
    orderNo,
    invNo,
    startTime,
    endTime,
    cookingTime
  });

  const rows = [createRows("Dine In", 45, 123, "", "", "")];

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
        <Table size="small" sx={{ minWidth: 1300 }}>
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
                <TableCell align="center">{row.orderType}</TableCell>
                <TableCell align="center">{row.orderNo}</TableCell>
                <TableCell align="center">{row.invNo}</TableCell>
                <TableCell align="center">{row.startTime}</TableCell>
                <TableCell align="center">{row.endTime}</TableCell>
                <TableCell align="center">{row.cookingTime}</TableCell>
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
export default KitchenSell;
