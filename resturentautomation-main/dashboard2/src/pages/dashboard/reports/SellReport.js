import React, { useState } from "react";
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
  Modal,
  Fade,
  Backdrop,
  ListItemText,
  Checkbox,
  FormControl,
  InputLabel,
  Stack,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { DatePicker } from "@material-ui/lab";
import Scrollbar from "../../../components/Scrollbar";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";

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

const SellReport = (props) => {
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Order Date", minWidth: 50, maxWidth: 100 },
    { label: "Order No.", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    { label: "Customer Name", minWidth: 50, maxWidth: 100 },
    { label: "Order Type", minWidth: 50, maxWidth: 100 },
    { label: "Order From", minWidth: 50, maxWidth: 100 },
    { label: "Payment Type", minWidth: 50, maxWidth: 100 },
    {
      label: "Order Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Service Charge",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Delivery Charges",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Discount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "Tax", endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 50, maxWidth: 100 },
    {
      label: "Total Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150
    },
    { label: "Commission", minWidth: 50, maxWidth: 100 },
    {
      label: "Commission Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150
    },
    { label: "Order Instruction", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Action", minWidth: 10, maxWidth: 30 }
  ];

  const createRows = (
    orderDate,
    orderNo,
    invNo,
    custName,
    orderType,
    orderFrom,
    paymentType,
    orderAmt,
    serviceCharge,
    deliveryCharges,
    discount,
    tax,
    totalAmt,
    commission,
    commissionAmt,
    orderIns,
    status
  ) => ({
    orderDate,
    orderNo,
    invNo,
    custName,
    orderType,
    orderFrom,
    paymentType,
    orderAmt,
    serviceCharge,
    deliveryCharges,
    discount,
    tax,
    totalAmt,
    commission,
    commissionAmt,
    orderIns,
    status
  });

  const rows = [
    createRows(
      "10-06-2022",
      20,
      456,
      "Name",
      "Delivery",
      "Zomato",
      "Debit Card",
      5000,
      52,
      95,
      45,
      62,
      6000,
      "20%",
      45,
      "Instruction",
      "DUE"
    )
  ];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

  const [selectiontype, setSelectionType] = React.useState([]);
  const [ordertype, setOrderType] = React.useState([]);
  const [paymenttype, setPaymentType] = React.useState([]);

  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const orderfrom = ["Zomato", "Swiggy"];
  const paymentMode = ["Credit Card","Debit Card","Cash On Delivery"]

  const typeSelectionHandler = (event) => {
    const {
      target: { value },
    } = event;
    setSelectionType(typeof value === "string" ? value.split(",") : value);
  };
  const typeOrderHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOrderType(typeof value === "string" ? value.split(",") : value);
  };
  const typePaymentHandler = (event) => {
    const {
      target: { value },
    } = event;
    setPaymentType(typeof value === "string" ? value.split(",") : value);
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
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography variant="h4" component="div" gutterBottom align="center">
              Order Details
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Order Type : Dine In</Grid>
                  <Grid item>Waiter : Captain</Grid>
                </Grid>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Order No. : 123456789</Grid>
                  <Grid item>Customer : Customer Name</Grid>
                </Grid>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Table : Table 02</Grid>
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
          <TableContainer >
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
                <Grid item xs={9}></Grid>

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
      {/* <Typography variant="h5" gutterBottom>
        Sell Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 2 }}>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            Order Type
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Dining In</MenuItem>
            <MenuItem>Delivery</MenuItem>
            <MenuItem>Pickup</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            Order From
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Zomato</MenuItem>
            <MenuItem>Swiggy</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            Payment Mode
          </Typography>
          <Select fullWidth size="small">
            <MenuItem>Credit Card</MenuItem>
            <MenuItem>Debit Card</MenuItem>
            <MenuItem>Cash On Delivery</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            From Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            To Date
          </Typography>
          <TextField fullWidth size="small" type="date" />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="body1" gutterBottom>
            Invoice No.
          </Typography>
          <TextField fullWidth size="small" placeholder="Invoice" />
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
               sx={{ mr: 1, float: "left", width:"18%" }}
               size="small"
             >
               <InputLabel id="select-type">Order Type</InputLabel>
               <Select
                 labelId="select-type"
                 label="Select Type"
                 id="select-type"
                 value={selectiontype}
                 onChange={typeSelectionHandler}
                 renderValue={(selected) => selected.join(", ")}
               >
                 {selections.map((name) => (
                   <MenuItem key={name} value={name}>
                     <Checkbox checked={selectiontype.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                   </MenuItem>
                 ))}
               </Select>
             </FormControl>
           <FormControl
               sx={{ mr: 1, float: "left",width:"18%" }}
               size="small"
             >
               <InputLabel id="select-type">Order From</InputLabel>
               <Select
                 labelId="select-type"
                 label="Select Type"
                 id="select-type"
                 value={ordertype}
                 onChange={typeOrderHandler}
                 renderValue={(selected) => selected.join(", ")}
               >
                 {orderfrom.map((name) => (
                   <MenuItem key={name} value={name}>
                     <Checkbox checked={ordertype.indexOf(name) > -1} />
                     <ListItemText primary={name} />
                   </MenuItem>
                 ))}
               </Select>
             </FormControl>
           <FormControl
               sx={{ mr: 1, float: "left",width:"18%" }}
               size="small"
             >
               <InputLabel id="select-type">Payment Mode</InputLabel>
               <Select
                 labelId="select-type"
                 label="Select Type"
                 id="select-type"
                 value={paymenttype}
                 onChange={typePaymentHandler}
                 renderValue={(selected) => selected.join(", ")}
               >
                 {paymentMode.map((name) => (
                   <MenuItem key={name} value={name}>
                     <Checkbox checked={paymenttype.indexOf(name) > -1} />
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
          <Table size="small" sx={{ minWidth: 3600 }}>
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
                  <TableCell align="center">{row.orderDate}</TableCell>
                  <TableCell align="center">{row.orderNo}</TableCell>
                  <TableCell align="center">{row.invNo}</TableCell>
                  <TableCell align="center">{row.custName}</TableCell>
                  <TableCell align="center">{row.orderType}</TableCell>
                  <TableCell align="center">{row.orderFrom}</TableCell>
                  <TableCell align="center">{row.paymentType}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.orderAmt}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.serviceCharge}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.deliveryCharges}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.discount}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.tax}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.totalAmt}</TableCell>
                  <TableCell align="center">{row.commission}</TableCell>
                  <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.commissionAmt}</TableCell>
                  <TableCell align="center">{row.orderIns}</TableCell>
                  <TableCell align="center"><Button
                                color="error"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button></TableCell>
                  <TableCell align="center">
                    <Tooltip title="View" placement="left">
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
    </>
  );
};
export default SellReport;
