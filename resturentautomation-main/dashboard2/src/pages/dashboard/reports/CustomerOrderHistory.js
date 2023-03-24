import React from "react";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
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
  Card,
  CardContent,
  TablePagination,
  
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { Receipt, Visibility, CurrencyRupee } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";

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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  invoiceModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
}));

const CustomerOrderHistory = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const columns = [
    // {
    //   field: "orderDate",
    //   headerName: "Order Date",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150
    // },
    // { field: "id", headerName: "Order ID", align: "center", headerAlign: "center", width: 150 },
    // {
    //   field: "invNo",
    //   headerName: "Invoice No.",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "amount",
    //   headerName: "Discount Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "taxAmount",
    //   headerName: "Tax Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "invAmount",
    //   headerName: "Invoice Amount",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "orderType",
    //   headerName: "Order Type",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "orderFrom",
    //   headerName: "Order From",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // { field: "payment", headerName: "Payment", align: "center", headerAlign: "center", width: 200 },
    // {
    //   field: "paymentMode",
    //   headerName: "Payment Mode",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    //   renderCell: () => (
    //     <>
    //       <Tooltip title="View Order" placement="left">
    //         <IconButton size="small" color="primary" onClick={openModalHandler}>
    //           <Visibility />
    //         </IconButton>
    //       </Tooltip>
    //       <Tooltip title="Invoice" placement="top">
    //         <IconButton size="small" color="secondary" onClick={openInvoiceModalHandler}>
    //           <Receipt />
    //         </IconButton>
    //       </Tooltip>
    //     </>
    //   )
    // }
    { label: "Order Date", minWidth: 80 },
    { label: "Order ID", minWidth: 150 },
    { label: "Invoice No.", minWidth: 150 },
    { label: "Discount Amount", endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 150 },
    { label: "Tax Ammount",  endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,minWidth: 100 },
    { label: "Invoice Amount", endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />, minWidth: 100 },
    { label: "Order Type", minWidth: 100 },
    { label: "Order From", minWidth: 100 },
    { label: "Payment Mode", minWidth: 100 },
    { label: "Payment", minWidth: 100 },
    { label: "Actions", minWidth: 100 },
  ];

  const createRows = (
    orderDate,
    id,
    invNo,
    amount,
    taxAmount,
    invAmount,
    orderType,
    orderFrom,
    payment,
    paymentMode
  ) => {
    return {
      orderDate,
      id,
      invNo,
      amount,
      taxAmount,
      invAmount,
      orderType,
      orderFrom,
      payment,
      paymentMode,
    };
  };

  const rows = [
    createRows(
      "04-08-2022",
      1,
      123,
      2000,
      100,
      200,
      "Delivery",
      "Zomato",
      "Successful",
      "Debit Card"
    ),
    createRows(
      "04-08-2022",
      2,
      123,
      2000,
      100,
      200,
      "Delivery",
      "Zomato",
      "Successful",
      "Debit Card"
    ),
    createRows(
      "04-08-2022",
      3,
      123,
      2000,
      100,
      200,
      "Delivery",
      "Zomato",
      "Successful",
      "Debit Card"
    ),
  ];

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [openInvoiceModal, setOpenInvoiceModal] = React.useState(false);

  const openInvoiceModalHandler = () => {
    setOpenInvoiceModal(true);
  };

  const closeInvoiceModalHandler = () => {
    setOpenInvoiceModal(false);
  };

  const table = (
    <TableContainer sx={{ height: 420, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </TableContainer>
  );
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
            <Typography
              variant="h4"
              component="div"
              sx={{ mb: 2 }}
              align="center"
            >
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
                <Grid
                  item
                  container
                  xs={4}
                  align="center"
                  direction="column"
                  rowSpacing={1}
                >
                  <Grid item>SGST : 80</Grid>
                  <Grid item>CGST : 80</Grid>
                </Grid>
                <Grid
                  item
                  container
                  xs={4}
                  align="right"
                  direction="column"
                  rowSpacing={1}
                >
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
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={closeModalHandler}
                  >
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openInvoiceModal}
        onClose={closeInvoiceModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openInvoiceModal}>
          <Box className={classes.invoiceModal}>
            <Typography
              variant="h6"
              component="div"
              align="center"
              gutterBottom
            >
              Restaurant Name
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
              Address : Street Name, City, 700119.
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
              Contact No. : +91245794212
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
              06-08-2022, 20:00.
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body1" color="text.secondary">
                GST No. : 21551644
              </Typography>
              <Typography variant="body1" color="text.secondary">
                FSSAI No. : 54632144311
              </Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Table No. : 2</Typography>
              <Typography variant="subtitle1">Invoice No. : 1</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Order Type : Dine in</Typography>
              <Typography variant="subtitle1">Order From : Swiggy</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Waiter : Waiter Name</Typography>
              <Typography variant="subtitle1">User : Admin</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Payment Mode : PayTM</Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            <Typography
              variant="subtitle1"
              component="div"
              align="center"
              sx={{ mb: 1 }}
            >
              Food Items
            </Typography>
            <Divider sx={{ mb: 1 }} />
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
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Qty.</TableCell>
                  <TableCell align="center">
                    Amount (<CurrencyRupee sx={{ fontSize: 14 }} />)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Food Item 1</TableCell>
                  <TableCell align="center">2</TableCell>
                  <TableCell align="center"> <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />200</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Food Item 2</TableCell>
                  <TableCell align="center">2</TableCell>
                  <TableCell align="center"> <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />200</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            </Scrollbar>
            </TableContainer>
            </Grid>
            <Grid container direction="column">
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Amount :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; 400
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Coupon Code :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    ABCD1234
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Discount :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; 30
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">CGST(2.5%) :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; 10
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">SGST(2.5%) :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; 10
                  </Typography>
                </Grid>
              </Grid>
              <Divider sx={{ my: 1 }} />
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="h6">Grand Total :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="h6" alignSelf="center">
                    &#8377; 450
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Customer Name : Name
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Phone No. : +9124578623
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Email : email@gmail.com
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Address : Mumbai
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Typography variant="subtitle1" gutterBottom textAlign="center">
              Footer Note
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Button variant="outlined">Print</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Grid container spacing={3} sx={{ mb: 1 }}>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Customer Details
              </Typography>
              <br />
              <Typography color="text.secondary">
                <b>Customer ID:</b> 1
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b> Name: </b> Custommer Name
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b> Email:</b> email@gmail.com
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b> Phone:</b> +91545124548
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b> City: </b> City
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b> Account: </b> Active
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Shipping Details
              </Typography>
              <br />
              <Typography color="text.secondary">
                <b>Email:</b> email@gmail.com
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>Phone:</b> +91254678512
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>City:</b> CIty
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>Address:</b> Address
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card variant="outlined">
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Billing Details
              </Typography>
              <br />
              <Typography color="text.secondary">
                <b>Email:</b> email@gmail.com
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>Phone:</b> +91245745215
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>City:</b> City
              </Typography>
              <Typography color="text.secondary" sx={{ marginTop: 2 }}>
                <b>Address:</b> Address
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Typography variant="h5" gutterBottom>
        Order History
      </Typography>
      {/* <Divider sx={{ width: "100%", mb: 1 }} />
      <TableTemplate rows={rows} columns={columns} /> */}

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
            <Table size="small" sx={{ minWidth: 2400 }}>
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
                    <TableCell align="center">{row.orderDate}</TableCell>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.invNo}</TableCell>
                    <TableCell align="center"> <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.amount}</TableCell>
                    <TableCell align="center"> <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.taxAmount}</TableCell>
                    <TableCell align="center"> <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.invAmount}</TableCell>
                    <TableCell align="center">{row.orderType}</TableCell>
                    <TableCell align="center">{row.orderFrom}</TableCell>
                    <TableCell align="center">{row.paymentMode}</TableCell>
                    <TableCell align="center">{row.payment==="Successful"?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.payment}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.payment}
                            </Button>
                              }</TableCell>
                    <TableCell align="center">
                      <Tooltip title="View Order" placement="left">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={openModalHandler}
                        >
                          <Visibility />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Invoice" placement="top">
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={openInvoiceModalHandler}
                        >
                          <Receipt />
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
export default CustomerOrderHistory;
