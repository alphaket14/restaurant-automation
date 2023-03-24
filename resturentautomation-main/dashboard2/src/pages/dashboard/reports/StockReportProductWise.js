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
  withStyles,
  TablePagination
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";


const StockReportProductWise = (props) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const columns = [
    { label: "Food Name", minWidth: 150, maxWidth: 170 },
    { label: "In Qnty", minWidth: 80, maxWidth: 100 },
    { label: "Out Onty", minWidth: 80, maxWidth: 100 },
    { label: "Stock", minWidth: 80, maxWidth: 100 }
  ];

  const createData = (foodName, inQnty, outQnty, stock) => {
    return { foodName, inQnty, outQnty, stock };
  };

  const rows = [
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21),
    createData("Arabian Burger", 1, 21, -21)
  ];

  const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <>
      <h2 style={{ marginTop: 20 }}>Stock Report (Product Wise)</h2>
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
      </Grid>
      {/* Second block */}
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "20px 0px"
        }}
      >
        <Grid
          item
          container
          style={{
            borderBottom: "1px solid grey",
            padding: "5px 10px",
            justifyContent: "space-between"
          }}
        >
          <Grid item alignSelf="center">
            Stock Report(Product Wise)
          </Grid>
          <Grid item>
            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <EditIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <ControlCameraIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CachedIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <RemoveIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <FullscreenIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container direction="column" textAlign="center" style={{ padding: "20px 10px" }}>
          <Grid item style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}>
            Dhaka Restaurant
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            98 Green Road, Farmgate, Dhaka-1215.
          </Grid>
          <Grid item style={{ marginBottom: 10 }}>
            Print Date: 04/12/2021 02:28:20
          </Grid>

          <Grid
            item
            container
            style={{ padding: 0, justifyContent: "space-between", margin: "10px 0" }}
          >
            <Grid item>
              <Button size="small">Copy</Button>
              <Button size="small">CSV</Button>
              <Button size="small">Excel</Button>
              <Button size="small">PDF</Button>
              <Button size="small">Print</Button>
              <Button size="small">Column Visibility</Button>
            </Grid>
            <Grid item>
              <Input type="text" placeholder="Search" />
            </Grid>
          </Grid>
          <Grid item container>
          <Table size="small" sx={{ minWidth: 1300 }} style={{ marginTop: 10 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      style={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth
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
              {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, id) => {
                return (
                  <TableRow key={id} hover>
                    <TableCell>{row.foodName}</TableCell>
                    <TableCell>{row.inQnty}</TableCell>
                    <TableCell>{row.outQnty}</TableCell>
                    <TableCell>{row.stock}</TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
              <TableRow style={{ height: 33 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
              )}
            </TableBody>
          </Table>
          <TablePagination
              component="div"
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={pageChangeHandler}
              onRowsPerPageChange={rowsPerPageChangeHandler}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default StockReportProductWise;
