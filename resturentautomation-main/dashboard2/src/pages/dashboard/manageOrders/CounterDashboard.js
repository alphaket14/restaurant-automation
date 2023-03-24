import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  IconButton,
  Tabs,
  Tab,
  Paper,
  Divider,
  TablePagination
} from "@mui/material";
import Scrollbar from "src/components/Scrollbar";

import { Edit } from "@mui/icons-material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

const CounterDashboard = (props) => {
  //Kitchen panel table

  const [tab, setTab] = useState(0);
  const tabChangeHandler = (event, newValue) => {
    setTab(newValue);
  };

  const kitchenPanelColumns = [
    { label: "Order No.", minWidth: 20, maxWidth: 100 },
    { label: "Type", minWidth: 50, maxWidth: 100 },
    { label: "From", minWidth: 50, maxWidth: 100 },
    { label: "Table No.", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 }
  ];

  const paid = "PAID";
  const due = "DUE";
  const newOrders = "newOrders";
  const processingOrders = "processingOrders";
  const readyOrders = "readyOrders";

  const orders = [
    { orderNo: 5, type: "Dine In", from: "Restaurant", tableNo: 2, newOrders, paid },
    { orderNo: 5, type: "Dine In", from: "Restaurant", tableNo: 2, processingOrders, paid },
    { orderNo: 6, type: "Dine In", from: "Restaurant", tableNo: 5, newOrders, due },
    { orderNo: 8, type: "Dine In", from: "Garden", tableNo: 5, readyOrders, due },
    { orderNo: 10, type: "Delivery", from: "Zomato", processingOrders, paid },
    { orderNo: 11, type: "Pick Up", from: "Swiggy", newOrders, due },
    { orderNo: 11, type: "Delivery", from: "Swiggy", newOrders, due },
    { orderNo: 11, type: "Dine In", from: "Restaurant", tableNo: 5, readyOrders, due },
    { orderNo: 11, type: "Dine In", from: "Restaurant", tableNo: 5, readyOrders, due },
    { orderNo: 11, type: "Pick Up", from: "Swiggy", processingOrders, due },
    { orderNo: 45, type: "Pick Up", from: "Swiggy", processingOrders, paid },
    { orderNo: 50, type: "Delivery", from: "Swiggy", processingOrders, paid },
    { orderNo: 30, type: "Dine In", from: "Restaurant", tableNo: 5, readyOrders, paid },
    { orderNo: 35, type: "Dine In", from: "Restaurant", tableNo: 5, readyOrders, paid },
    { orderNo: 32, type: "Delivery", from: "Zomato", readyOrders, paid },
    { orderNo: 31, type: "Dine In", from: "Restaurant", tableNo: 5, readyOrders, paid }
  ];

  //counter dashboard table
  const columns = [
    { label: "Order No.", minWidth: 50, maxWidth: 150 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 150 },
    { label: "Type", minWidth: 50, maxWidth: 150 },
    { label: "From", minWidth: 50, maxWidth: 150 },
    { label: "Order Time", minWidth: 50, maxWidth: 150 },
    { label: "Remaining Time", minWidth: 50, maxWidth: 150 },
    { label: "Status", minWidth: 50, maxWidth: 100 }
  ];
  const createRows = (orderNo, invNo, type, from, orderTime, remainingTime, status) => ({
    orderNo,
    invNo,
    type,
    from,
    orderTime,
    remainingTime,
    status
  });
  const rows = [createRows(10, 123, "Delivery", "Zomato", "20:00", "Time Over", "PAID")];

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
      <Grid container sx={{ mb: 2 }} spacing={2}>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">New Orders</Typography>
            <Typography variant="body1">
              {orders.filter((order) => order.newOrders).length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(255, 193, 7, 0.5)"
            }}
          >
            <Typography variant="body1">In Process Orders</Typography>
            <Typography variant="body1">
              {orders.filter((order) => order.processingOrders).length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Ready Orders</Typography>
            <Typography variant="body1">
              {orders.filter((order) => order.readyOrders).length}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(255, 72, 66, 0.5)"
            }}
          >
            <Typography variant="body1">Due Payments</Typography>
            <Typography variant="body1">{orders.filter((order) => order.due).length}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 2 }}>
          <Tabs value={tab} onChange={tabChangeHandler} aria-label="basic tabs example">
            <Tab label="New" value={0} sx={{ mr: 2 }} />
            <Tab label="In Process" value={1} sx={{ mr: 2 }} />
            <Tab label="Ready" value={2} sx={{ mr: 2 }} />
            <Tab label="Due" value={3} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
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
          <Table size="small" sx={{ minWidth: 1300 }} >
            <TableHead>
              <TableRow>
                {kitchenPanelColumns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .filter((order) => order.newOrders)
                .map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{row.orderNo}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.tableNo}</TableCell>
                    <TableCell align="center">{row.paid ?  <Button color="primary" size="small" variant="outlined">
                          {row.paid}
                        </Button> : <Button color="error" size="small" variant="outlined">
                          {row.due}
                        </Button>}</TableCell>
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

        </TabPanel>
        <TabPanel value={tab} index={1}>
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
          <Table size="small" sx={{ minWidth: 1300 }} >
            <TableHead>
              <TableRow>
                {kitchenPanelColumns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .filter((order) => order.processingOrders)
                .map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{row.orderNo}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.tableNo}</TableCell>
                    <TableCell align="center">{row.paid ?  <Button color="primary" size="small" variant="outlined">
                          {row.paid}
                        </Button> : <Button color="error" size="small" variant="outlined">
                          {row.due}
                        </Button>}</TableCell>
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
        </TabPanel>
        <TabPanel value={tab} index={2}>

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
          <Table size="small" sx={{ minWidth: 1300 }} >
            <TableHead>
              <TableRow>
                {kitchenPanelColumns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .filter((order) => order.readyOrders)
                .map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{row.orderNo}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.tableNo}</TableCell>
                    <TableCell align="center">{row.paid ?  <Button color="primary" size="small" variant="outlined">
                          {row.paid}
                        </Button> : <Button color="error" size="small" variant="outlined">
                          {row.due}
                        </Button>}</TableCell>
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
        </TabPanel>
        <TabPanel value={tab} index={3}>
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
          <Table size="small" sx={{ minWidth: 1300 }} >
            <TableHead>
              <TableRow>
                {kitchenPanelColumns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {orders
                .filter((order) => order.due)
                .map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{row.orderNo}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.tableNo}</TableCell>
                    <TableCell align="center">{row.paid ?  <Button color="primary" size="small" variant="outlined">
                          {row.paid}
                        </Button> : <Button color="error" size="small" variant="outlined">
                          {row.due}
                        </Button>}</TableCell>
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
        </TabPanel>
      </Box>

      <Divider sx={{ mb: 1 }} />
      <Typography variant="h5" sx={{ mb: 2 }}>
        Counter Dashboard
      </Typography>
      <Box sx={{ width: "50%", mb: 1 }}>
        <TextField label="Search" sx={{width:"50%"}} size="small" fullWidth />
      </Box>
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
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow>
              <TableCell align="center">{row.orderNo}</TableCell>
              <TableCell align="center">{row.invNo}</TableCell>
              <TableCell align="center">{row.type}</TableCell>
              <TableCell align="center">{row.from}</TableCell>
              <TableCell align="center">{row.orderTime}</TableCell>
              <TableCell align="center">{row.remainingTime}</TableCell>
              <TableCell align="center">{row.status==="PAID" ?  <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button> : <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>}</TableCell>
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
export default CounterDashboard;
