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
  FormControl,
  ListItemText,
  Checkbox,
  InputLabel,
  TablePagination
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";
const SellReportOrderType = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Order Type", minWidth: 50, maxWidth: 100 },
    { label: "Order From", minWidth: 50, maxWidth: 100 },
    { label: "Order No.", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    }
  ];

  const createRows = (orderType, orderFrom, orderNo, invNo, totAmount) => ({
    orderType,
    orderFrom,
    orderNo,
    invNo,
    totAmount
  });

  const rows = [createRows("Delivery", "Zomato", 12, 123, 5200)];

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

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
        Sell Report Order Type
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
       <Grid
        container
        spacing={2}
        sx={{ mb: 2, display: "flex", justifyContent:"space-between" }}
      > 
      <Box sx={{ width: "20%", marginLeft: "10px" }}>
            <FormControl
                sx={{ mr: 1, float: "left", width: "100%" }}
                size="small"
              >
                <InputLabel id="select-type">Select Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  value={type}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
  
      </Box>
      
        <Box sx={{width:"70%",display:"flex",justifyContent:"flex-end"}}>
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
              sx={{ width: "20%", marginLeft: "10px" }}
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
              sx={{ width: "20%", marginLeft: "10px"}}
              size="small"
              helperText={null}
            />
          )}
        />
        
        </Box>
         
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
                <TableCell align="center">{row.orderFrom}</TableCell>
                <TableCell align="center">{row.orderNo}</TableCell>
                <TableCell align="center">{row.invNo}</TableCell>
                <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.totAmount}</TableCell>
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
export default SellReportOrderType;
