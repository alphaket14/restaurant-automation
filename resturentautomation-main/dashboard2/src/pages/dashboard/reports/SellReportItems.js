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
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  Stack,
  TablePagination
} from "@mui/material";

import TableTemplate from "../../../components/TableTemplate";
import { DatePicker } from "@material-ui/lab";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
const SellReportItems = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Food Category", minWidth: 50, maxWidth: 100 },
    { label: "Food Item", minWidth: 50, maxWidth: 100 },
    { label: "Food Variant", minWidth: 50, maxWidth: 100 },
    {
      label: "Price",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "No. of Orders", minWidth: 50, maxWidth: 100 },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    }
  ];

  const createRows = (itemCode, foodCategory, foodItem, foodVariant, price, orders, totAmount) => ({
    itemCode,
    foodCategory,
    foodItem,
    foodVariant,
    price,
    orders,
    totAmount
  });

  const rows = [createRows("A1", "Food Category", "Food name", "Food Variant", 50, 20, 5200)];
  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const orders = ["Top 10", "Top 20", "Top 30", "Top 40"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };
  const [ordertype, setOrderType] = React.useState([]);

  const typeOrderHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOrderType(typeof value === "string" ? value.split(",") : value);
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
        Sell Report Items
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      {/* <Grid container spacing={2} sx={{ mb: 2 }}>
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
        <Grid item xs={4}>
          <Typography variant="body1" gutterBottom>
            Order Type
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Dining In</MenuItem>
            <MenuItem>Delivery</MenuItem>
            <MenuItem>Pickup</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" gutterBottom>
            Top Selling
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Top 10</MenuItem>
            <MenuItem>Top 20</MenuItem>
            <MenuItem>Top 30</MenuItem>
          </Select>
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
      </Grid> */}
       <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
        <Box component="span" sx={{
          width: "100%",
        }}>
            <FormControl
                sx={{ mr: 1, float: "left", width:"20%" }}
                size="small"
              >
                <InputLabel id="select-type">Order Type</InputLabel>
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
            <FormControl
                sx={{ mr: 1, float: "left",width:"20%" }}
                size="small"
              >
                <InputLabel id="select-type">Top Selling</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  value={ordertype}
                  onChange={typeOrderHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {orders.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
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
              sx={{ width: "15%", marginLeft: "10px", float:"right"}}
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
              sx={{ width: "15%", marginLeft: "10px", float:"right" }}
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
      <TableContainer >
        <Scrollbar>
          <Table size="small"  sx={{ minWidth: 1300 }}>
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
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.price}</TableCell>
                  <TableCell align="center">{row.orders}</TableCell>
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
export default SellReportItems;
