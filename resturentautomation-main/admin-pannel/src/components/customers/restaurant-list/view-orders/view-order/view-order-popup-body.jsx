import React from "react";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function neww() {
  return (
    <>
      <Typography variant="h4" component="div" gutterBottom align="center">
        Order Details
      </Typography>
      <br/>
      <Grid container direction="column" rowSpacing={2} sx={{textAlign:"left"}}>
        <Grid item container>
          <Grid item container xs={4} direction="column" rowSpacing={2} sx={{textAlign:"left"}}>
            <Grid item>Order Type : Dine In</Grid>
            <Grid item>Waiter : Captain</Grid>
          </Grid>
          <Grid item container xs={4} direction="column" rowSpacing={2} sx={{textAlign:"left"}}>
            <Grid item>Order No. : 123456789</Grid>
            <Grid item>Customer : Customer Name</Grid>
          </Grid>
          <Grid item container xs={4} direction="column" rowSpacing={2} sx={{textAlign:"left"}}>
            <Grid item>Table : Table 02</Grid>
            <Grid item>Phone : +91545521456</Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Table size="small">
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
        <Grid item container spacing={4} display="flex" align="center">
          <Grid item xs={3}>
            <Button variant="contained" fullWidth>
              Create Invoice
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth>
              Print-KOT
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained" fullWidth>
              E-Bill
            </Button>
          </Grid>

        </Grid>
      </Grid>
    </>
  );
}
export default neww;
