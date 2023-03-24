import { useState } from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  MenuItem,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  Input,
  IconButton,
} from "@material-ui/core";

import Close from "@material-ui/icons/Close";

const Purchases = [];
const ariaLabel = { "aria-label": "description" };

const ingredients = [
  { name: "Jeera 100g", ingredient_id: "ABC123", price: 240 },
  { name: "Dhaniya 100g", ingredient_id: "ABC124", price: 240 },
  { name: "Elaichi 100g", ingredient_id: "ABC125", price: 240 },
];

const Sale = () => {
  const [sales, setSales] = useState([]);
  const [openAddSale, setOpenAddSale] = useState(false);
  const [supplierOption, setSupplierOption] = useState("Select supplier");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0.0);
  const [refNo, setRefNo] = useState(0);

  const [paidAlready, setPaidAlready] = useState(0.0);

  const csvString = [
    ["Reference No.", "Supplier", "Total Price", "Paid Amount", "Due Amount"],
    ...sales.map((item) => [
      item.ref_no,
      item.supplier,
      item.total_price,
      item.paid_price,
      item.due_price,
    ]),
  ]
    .map((e) => e.join(","))
    .join("\n");

  let csvContent = "data:text/csv;charset=utf-8," + csvString;

  var encodedUri = encodeURI(csvContent);

  const handleCloseAddSale = () => {
    setOpenAddSale(false);
  };

  return (
    <>
      <Helmet>
        <title>Sale | Client Portal</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: "background.default",
          minHeight: "100%",
          padding: "30px",
        }}
      >
        <Container maxWidth={false}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h4" sx={{ my: "20px" }}>
              Sale
            </Typography>
            <div>
              <Button
                type="text"
                style={{ margin: "10px" }}
                size="large"
                onClick={() => {
                  window.open(encodedUri);
                }}
              >
                Export
              </Button>
              <Button
                variant="contained"
                style={{ margin: "10px" }}
                onClick={() => setOpenAddSale(true)}
              >
                New Sale
              </Button>
            </div>
            <Dialog open={openAddSale} onClose={handleCloseAddSale}>
              <DialogTitle>Add Sale</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  You are about to proceed to the Sales POS. Do you want to
                  continue?
                </DialogContentText>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleCloseAddSale}>Cancel</Button>
                <Button type="text" href="/salePOS">
                  Proceed
                </Button>
              </DialogActions>
            </Dialog>
          </div>
          <Paper>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>SN</TableCell>
                  <TableCell>REFERENCE NO.</TableCell>
                  <TableCell>ORDER TYPE</TableCell>
                  <TableCell>DATE</TableCell>
                  <TableCell>CUSTOMER</TableCell>
                  <TableCell>SUPPLIER</TableCell>
                  <TableCell>TOTAL PAYABLE</TableCell>
                  <TableCell>PAYMENT METHOD</TableCell>
                  <TableCell>ADDED BY</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sales.length > 0 ? (
                  sales?.map((Sale) => (
                    <TableRow hover key={Sale.ref_no}>
                      <TableCell style={{}}>{Sale.ref_no}</TableCell>
                      <TableCell>{Sale.supplier}</TableCell>
                      <TableCell>{Sale.total_price}</TableCell>
                      <TableCell>{Sale.paid_price}</TableCell>
                      <TableCell align="right">{Sale.due_price}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography variant="subtitle2" sx={{ p: 2 }}>
                    No Sales...
                  </Typography>
                )}
              </TableBody>
            </Table>
          </Paper>
        </Container>
      </Box>
    </>
  );
};

export default Sale;
