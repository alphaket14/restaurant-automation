import React, { useState } from "react";
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
  Backdrop
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

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

const CashRegisterReport = (props) => {
  const classes = useStyles();

  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "User Name", minWidth: 50, maxWidth: 100 },
    { label: "Counter No.", minWidth: 50, maxWidth: 100 },
    {
      label: "Opening Balance",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Closing Balance",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100
    },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (date, name, counter, openBal, closeBal) => ({
    date,
    name,
    counter,
    openBal,
    closeBal
  });

  const rows = [createRows("11-06-2022", "Name", 50, 1000, 1000)];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
              <Grid item>
                <Table size="small" sx={{ minWidth: 1300 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Items</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Qty</TableCell>
                      <TableCell align="center">Discount</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
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
      <Typography variant="h5" gutterBottom>
        Cash Register Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid container spacing={2} sx={{ mb: 2 }}>
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
      </Grid>
      <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1300 }}>
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
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.name}</TableCell>
                <TableCell align="center">{row.counter}</TableCell>
                <TableCell align="center">{row.openBal}</TableCell>
                <TableCell align="center">{row.closeBal}</TableCell>
                <TableCell align="center">
                  <Tooltip title="View" placement="left">
                    <IconButton color="secondary" size="small" onClick={openModalHandler}>
                      <Visibility />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
export default CashRegisterReport;
