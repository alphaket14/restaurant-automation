import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Stack,
  FormControl,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  Modal,
  Fade,
  Backdrop,
  Grid,
  Checkbox,
  ListItemText,
  Tooltip,
  Divider,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
import { Edit, Delete, Visibility, CurrencyRupee } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const CancelOrders = () => {
  const classes = useStyles();

  const columns = [
    { label: "Order No.", minWidth: 20, maxWidth: 50 },
    { label: "Inv No.", minWidth: 20, maxWidth: 50 },
    { label: "Name", minWidth: 20, maxWidth: 20 },
    { label: "Phone", minWidth: 50, maxWidth: 150 },
    { label: "Waiter", minWidth: 20, maxWidth: 20 },
    { label: "Table", minWidth: 20, maxWidth: 50 },
    { label: "Order Date", minWidth: 20, maxWidth: 20 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150
    },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Actions", minWidth: 250, maxWidth: 300 }
  ];

  const deliveryColumns = [
    { label: "Order No.", minWidth: 50, maxWidth: 150 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 150 },
    { label: "Customer Name", minWidth: 50, maxWidth: 150 },
    { label: "Phone", minWidth: 50, maxWidth: 150 },
    { label: "Type", minWidth: 50, maxWidth: 150 },
    { label: "From", minWidth: 50, maxWidth: 150 },
    { label: "Order Date", minWidth: 20, maxWidth: 50 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150
    },
    { label: "Status", minWidth: 50, maxWidth: 150 },
    { label: "Actions", minWidth: 50, maxWidth: 150 }
  ];

  const createData = (
    orderNo,
    invoice,
    customerName,
    phone,
    waiter,
    tableNumber,
    state,
    orderDate,
    amount
  ) => {
    return {
      orderNo,
      invoice,
      customerName,
      phone,
      waiter,
      tableNumber,
      state,
      orderDate,
      amount
    };
  };

  const createRows = (
    orderNo,
    invoice,
    customerName,
    phone,
    type,
    from,
    state,
    orderDate,
    amount
  ) => {
    return {
      orderNo,
      invoice,
      customerName,
      phone,
      type,
      from,
      state,
      orderDate,
      amount
    };
  };

  const [rows, setRows] = React.useState([
    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "CANCELED",
      "20-05-2022",
      2599.0
    )
  ]);

  const deliveryRows = [
    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "CANCELED",
      "20-05-2022",
      2599.0
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "CANCELED",
      "20-05-2022",
      2599.0
    )
  ];

  const deleteRow = (rowId) => {
    console.log("delete");
    const temp = [...rows];
    temp.splice(rowId, 1);
    setRows(temp);
  };

 
  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
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
    <Box style={{ margin: 0 }}>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography variant="h4" component="div" sx={{ mb: 2 }} align="center">
              Order Details
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={1}>
                <Grid item xs={4}>
                  Order Type : Dine In
                </Grid>
                <Grid item xs={4}>
                  Table : Table 02
                </Grid>
                <Grid item xs={4}>
                  Order No. : 123
                </Grid>
                <Grid item xs={4}>
                  Customer : Customer Name
                </Grid>
                <Grid item xs={4}>
                  Email : email@gmail.com
                </Grid>
                <Grid item xs={4}>
                  Phone : +91545521456
                </Grid>
                <Grid item xs={4}>
                  Waiter : Captain
                </Grid>
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
            <TableContainer>
              <Scrollbar>
                <Table size="small" >
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Items</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Qty</TableCell>
                      <TableCell align="center">Discount</TableCell>
                      <TableCell align="center">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell align="center">Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="center">220.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell align="center">Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="center">220.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
                </Scrollbar>
                </TableContainer>
              </Grid>
              <Grid item container>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Discount : 5%</Grid>
                  <Grid item>Service charge : 80</Grid>
                </Grid>
                <Grid item container xs={4} align="center" direction="column" rowSpacing={1}>
                  <Grid item>SGST : 80</Grid>
                  <Grid item>CGST : 80</Grid>
                </Grid>
                <Grid item container xs={4} align="right" direction="column" rowSpacing={1}>
                  <Grid item>Vat : 0</Grid>
                  <Grid item>Sub Total : 80</Grid>
                </Grid>
              </Grid>
              <Grid item align="right">
                Total Amout Payable :{" "}
                <Typography variant="h6" component="span" color="primary.main">
                  180
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Create Invoice
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    E-Bill
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Print KOT
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="outlined" fullWidth onClick={closeModalHandler}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
        {/* <Typography variant="h5">Canceled Orders</Typography> */}
        <Box component="span"sx={{width: "100%" }}>

        <FormControl
                sx={{ mr: 1, float: "left", width: "20%",mb: 2  }}
                size="small"
              >
                <InputLabel id="select-type">Select Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  // size="small"
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

                  {/* <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Dine In"}>Dine In</MenuItem>
                  <MenuItem value={"Delivery"}>Delivery</MenuItem>
                  <MenuItem value={"Pickup"}>Pickup</MenuItem> */}
                </Select>
              </FormControl>
              <TextField sx={{ width: "20%",mb: 2  }} size="small" label="Order No." />   
              <TextField sx={{ width: "20%",mb: 2,ml:1  }} size="small" label="Mobile No." />   
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



          {/* <FormControl sx={{ mr: 1,float:"left" }}>
            <InputLabel id="select-type">Select Type</InputLabel>
            <Select
              onChange={typeChangeHandler}
              value={type}
              size="small"
              label="Select Type"
              labelId="select-type"
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Dine In"}>Dine In</MenuItem>
              <MenuItem value={"Delivery"}>Delivery</MenuItem>
              <MenuItem value={"Pickup"}>Pickup</MenuItem>
            </Select>
          </FormControl>
          <FormControl size="small" sx={{ mr: 1 }}>
            <TextField required label="From" size="small" />
          </FormControl>
          <FormControl size="small" sx={{ mr: 1 }}>
            <TextField required label="To" size="small" />
          </FormControl>
          <Button variant="outlined"sx={{float:"right",mr:1}}>Reset</Button>
          <Button variant="contained" sx={{ mr: 1,float:"right" }}>
            Search
          </Button> */}
        </Box>
      </Stack>
      {/* <Divider sx={{ mb: 1 }} />
      <Box sx={{ width: "50%", mb: 1 }}>
        <TextField label="Search" sx={{width:"50%"}} size="small" fullWidth />
      </Box> */}
      <Box>
        {type === "Dine In" ? (
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
          <Table size="small" sx={{ minWidth: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center">
                    {column.label}
                    {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.orderNo}</TableCell>
                  <TableCell align="center">{row.invoice}</TableCell>
                  <TableCell align="center">{row.customerName}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.waiter}</TableCell>
                  <TableCell align="center">{row.tableNumber}</TableCell>
                  <TableCell align="center">{row.orderDate}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.amount}</TableCell>
                    <TableCell align="center">
                    {
                                row.state==='PAID'?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='PENDING'?<Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='WAITING'?<Button
                                color="secondary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.state}
                            </Button>
                              }
                              </TableCell>
                  <TableCell align="center" sx={{ p: 0 }}>
                    {/* <IconButton color="primary" size="small">
                      <Edit />
                    </IconButton> */}
                    <IconButton
                      size="small"
                      sx={{ color: "error.main" }}
                      onClick={() => deleteRow(index)}
                    >
                      <Delete />
                    </IconButton>
                    <IconButton color="secondary" size="small" onClick={openModalHandler}>
                      <Visibility />
                    </IconButton>
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
        ) : (
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
          <Table size="small" sx={{ minWidth: 1300 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                {deliveryColumns.map((column) => (
                  <TableCell align="center">
                    {column.label}
                    {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {deliveryRows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{row.orderNo}</TableCell>
                  <TableCell align="center">{row.invoice}</TableCell>
                  <TableCell align="center">{row.customerName}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.from}</TableCell>
                  <TableCell align="center">{row.orderDate}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.amount}</TableCell>
                  <TableCell align="center">
                  {
                                row.state==='PAID'?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='PENDING'?<Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='WAITING'?<Button
                                color="secondary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.state}
                            </Button>
                              }
                            </TableCell>
                  <TableCell align="center" sx={{ p: 0 }}>
                    {/* <Tooltip title="Edit" placement="left">
                      <IconButton color="primary" size="small">
                        <Edit />
                      </IconButton>
                    </Tooltip> */}
                    <Tooltip title="View" placement="top">
                      <IconButton color="secondary" size="small" onClick={openModalHandler}>
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
        )}
      </Box>
    </Box>
  );
};

export default CancelOrders;
