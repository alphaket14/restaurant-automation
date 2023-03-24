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
import Scrollbar from "src/components/Scrollbar";
import { DatePicker } from "@material-ui/lab";

const Commission = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Employee ID", minWidth: 50, maxWidth: 100 },
    { label: "Employee Name", minWidth: 50, maxWidth: 100 },
    { label: "No. of Orders", minWidth: 50, maxWidth: 100 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Commission",
      endIcon: (
        <Typography variant="subtitle2" component="span">
          %
        </Typography>
      ),
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Commission",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
  ];

  const createRows = (
    empId,
    empName,
    orders,
    amount,
    commission,
    commAmount
  ) => ({
    empId,
    empName,
    orders,
    amount,
    commission,
    commAmount,
  });

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const rows = [createRows("456", "Name", 45, 123, 12, 466)];

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
                    <TableCell align="center">{row.empId}</TableCell>
                    <TableCell align="center">{row.empName}</TableCell>
                    <TableCell align="center">{row.orders}</TableCell>
                    <TableCell align="center">
                      {" "}
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.amount}
                    </TableCell>
                    <TableCell align="center">{row.commission} <Typography variant="subtitle2" component="span" sx={{color:"grey"}}>
          %
        </Typography></TableCell>
                    <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />{row.commAmount}</TableCell>
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
export default Commission;
