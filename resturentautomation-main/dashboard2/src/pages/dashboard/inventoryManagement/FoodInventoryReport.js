import React, { useState } from "react";
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  TableContainer,
  Paper,
  Divider,
  Typography,
  Stack,
  Box,
  TextField,
  TablePagination
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";
const FoodInventoryReport = (props) => {
  const columns = [
    { label: "Item Code No.", minWidth: 150, maxWidth: 170 },
    { label: "Parent Category", minWidth: 80, maxWidth: 100 },
    { label: "Food Category", minWidth: 80, maxWidth: 100 },
    { label: "Food Name", minWidth: 80, maxWidth: 100 },
    { label: "Serving Unit", minWidth: 150, maxWidth: 170 },
    { label: "Component", minWidth: 150, maxWidth: 170 },
    { label: "In Qnty", minWidth: 80, maxWidth: 100 },
    { label: "Out Onty", minWidth: 80, maxWidth: 100 },
    { label: "Current Stock", minWidth: 80, maxWidth: 100 },
    { label: "Status", minWidth: 80, maxWidth: 100 },
  ];

  const createData = (
    code,
    pCat,
    fCat,
    foodName,
    unit,
    component,
    inQnty,
    outQnty,
    stock,
    status
  ) => {
    return {
      code,
      pCat,
      fCat,
      foodName,
      unit,
      component,
      inQnty,
      outQnty,
      stock,
      status,
    };
  };

  const rows = [
    createData(
      234,
      "Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "ACTIVE"
    ),
    createData(
      234,
      "Non Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "INACTIVE"
    ),
    createData(
      234,
      "Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "ACTIVE"
    ),
    createData(
      234,
      "Non Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "INACTIVE"
    ),
    createData(
      234,
      "Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "ACTIVE"
    ),
    createData(
      234,
      "Veg",
      "Starters",
      "Arabian Burger",
      1,
      "component",
      21,
      -21,
      300,
      "ACTIVE"
    ),
  ];

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
      {/* <Typography variant="h5" gutterBottom>
        Food Inventory Report
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid
        container
        rowGap={4}
        direction="column"
        style={{
          margin: "20px 0",
          border: "1px solid grey",
          borderRadius: 5,
          boxSizing: "border-box",
          padding: "20px 0"
        }}
      >
        <Grid item container xs={10} spacing={5}>
          <Grid item style={{ alignSelf: "center", textAlign: "right" }} xs={3}>
            <label htmlFor="food">Food Name:</label>
          </Grid>
          <Grid item style={{ alignSelf: "center" }} xs={6}>
            <Input id="food" type="text" fullWidth placeholder="Food Name" />
          </Grid>
        </Grid>
        <Grid item container xs={10} spacing={5}>
          <Grid item style={{ alignSelf: "center", textAlign: "right" }} xs={3}>
            <label htmlFor="from">From:</label>
          </Grid>
          <Grid item style={{ alignSelf: "center" }} xs={6}>
            <Input id="from" type="date" fullWidth />
          </Grid>
        </Grid>
        <Grid item container xs={10} spacing={5}>
          <Grid item style={{ alignSelf: "center", textAlign: "right" }} xs={3}>
            <label htmlFor="to">To:</label>
          </Grid>
          <Grid item style={{ alignSelf: "center" }} xs={6}>
            <Input id="to" type="date" fullWidth />
          </Grid>
        </Grid>
        <Grid item container xs={10} spacing={1} style={{ justifyContent: "center" }}>
          <Grid item style={{ alignSelf: "center" }}>
            <Button variant="contained">Search</Button>
          </Grid>
          <Grid item style={{ alignSelf: "center" }}>
            <Button variant="outlined">Print</Button>
          </Grid>
        </Grid>
      </Grid> */}

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        {/* <Typography variant="h5">Completed Orders</Typography> */}
        <Box
          component="span"
          sx={{
            width: "100%",
          }}
        >
          <TextField
            sx={{ width: "20%", mb: 2, float: "left" }}
            size="small"
            label="Food Name"
          />
          {/* <Button variant="outlined" sx={{ ml: 1, float: "right" }}>
            Print
          </Button>
          <Button variant="contained" sx={{ ml: 1, float: "right" }}>
            Search
          </Button> */}
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
                sx={{ width: "15%", float: "right" }}
                size="small"
                helperText={null}
              />
            )}
          />
        </Box>
      </Stack>

      {/* Second block */}
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
            <Table
              size="small"
              sx={{ minWidth: 1300 }}
              style={{ marginTop: 10 }}
            >
              <TableHead>
                <TableRow>
                  {columns.map((column) => {
                    return (
                      <TableCell
                        align="center"
                        style={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                        }}
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
                    //code,pCat,fCat,foodName,unit,component, inQnty, outQnty, stock,status
                    <TableRow key={id} hover>
                      <TableCell align="center">{row.code}</TableCell>
                      <TableCell align="center">{row.pCat}</TableCell>
                      <TableCell align="center">{row.fCat}</TableCell>
                      <TableCell align="center">{row.foodName}</TableCell>
                      <TableCell align="center">{row.unit}</TableCell>
                      <TableCell align="center">{row.component}</TableCell>
                      <TableCell align="center">{row.inQnty}</TableCell>
                      <TableCell align="center">{row.outQnty}</TableCell>
                      <TableCell align="center">{row.stock}</TableCell>
                      <TableCell align="center">{row.status === "INACTIVE" ? (
                          <Button color="error"size="small" variant="outlined">
                            {row.status}
                          </Button>
                        ) : (
                          <Button color="primary" size="small" variant="outlined">
                            {row.status}
                          </Button>
                        )}  </TableCell>
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
export default FoodInventoryReport;
