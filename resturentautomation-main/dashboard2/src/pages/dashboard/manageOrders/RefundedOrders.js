import React from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  IconButton,
  Modal,
  Fade,
  Tooltip,
  Backdrop,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import { Edit, Visibility, CurrencyRupee, Delete, Payments } from "@mui/icons-material";

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

const RefundedOrders = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const columns = [
    { label: "Order No.", minWidth: 50, maxWidth: 100 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 100 },
    { label: "Customer", minWidth: 50, maxWidth: 100 },
    { label: "Phone", minWidth: 50, maxWidth: 100 },
    { label: "Type", minWidth: 50, maxWidth: 100 },
    { label: "From", minWidth: 50, maxWidth: 100 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Grand Total", endIcon: <CurrencyRupee />, minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 10, maxWidth: 20 }
  ];

  const createRows = (orderNo, invNo, cust, phone, type, from, date, total) => ({
    orderNo,
    invNo,
    cust,
    phone,
    type,
    from,
    date,
    total
  });

  const rows = [
    createRows(12, 123, "Customer Name", "+9156455122", "Delivery", "Zomato", "20-05-2022", 2500)
  ];

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
              <TableContainer >
                <Scrollbar>
                <Table size="small">
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
      <Grid>
        {/* <Typography variant="h5" sx={{ mb: 2 }}>
          Refunded Orders
        </Typography> */}
        <Box sx={{ width: "100%", mb: 2 }}>
          <TextField label="Search" sx={{width:"20%",mb:2}} size="small" fullWidth />
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
                  {column.endIcon && (
                    <>
                      (<CurrencyRupee sx={{ fontSize: 14 }} />)
                    </>
                  )}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow>
                <TableCell align="center">{row.orderNo}</TableCell>
                <TableCell align="center">{row.invNo}</TableCell>
                <TableCell align="center">{row.cust}</TableCell>
                <TableCell align="center">{row.phone}</TableCell>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.from}</TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center"><CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />{row.total}</TableCell>
                <TableCell align="center">
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
                  <Tooltip title="Pay" placement="top">
                    <IconButton color="success" size="small">
                      <Payments />
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
      </Grid>
    </>
  );
};
export default RefundedOrders;
