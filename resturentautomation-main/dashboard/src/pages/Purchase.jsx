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

const Purchase = () => {
  const [purchases, setPurchases] = useState([]);
  const [openAddPurchase, setOpenAddPurchase] = useState(false);
  const [supplierOption, setSupplierOption] = useState("Select supplier");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0.0);
  const [refNo, setRefNo] = useState(1);

  const [paidAlready, setPaidAlready] = useState(0.0);

  const handleAddPurchase = (
    ref_no,
    supplier,
    ingredients_list,
    total_price,
    paid_price,
    due_price
  ) => {
    let newPurchases = [
      ...purchases,
      {
        ref_no: ref_no,
        supplier: supplier,
        ingredients_list: ingredients_list,
        total_price: total_price,
        paid_price: paid_price,
        due_price: due_price,
      },
    ];
    setPurchases(newPurchases);
    setOpenAddPurchase(false);
    setSupplierOption("Select Supplier");
    setPaidAlready(0.0);
    setGrandTotal(0.0);
    setSelectedIngredients([]);
  };

  const csvString = [
    ["Reference No.", "Supplier", "Total Price", "Paid Amount", "Due Amount"],
    ...purchases.map((item) => [
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

  const handleChangeIngredient = (index, e, price) => {
    let newFormValues = [...selectedIngredients];
    let tempq = newFormValues[index]["quantity"];
    newFormValues[index]["quantity"] = e.target.value;
    let temp = grandTotal;
    newFormValues[index]["total"] = e.target.value * price;
    setGrandTotal(temp + (e.target.value - tempq) * price);
    console.log("Total: ", newFormValues);
    setSelectedIngredients(newFormValues);
  };

  const addFormFields = (name, price) => {
    setSelectedIngredients([
      ...selectedIngredients,
      { name: name, quantity: 1, price: price, total: price },
    ]);
  };
  const removeFormFields = (index) => {
    let newFormValues = [...selectedIngredients];
    newFormValues.splice(index, 1);
    setSelectedIngredients(newFormValues);
  };

  const handleCloseAddPurchase = () => {
    setOpenAddPurchase(false);
  };

  const handleChangeSupplierOption = (e) => {
    setSupplierOption(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Purchases | Client Portal</title>
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
              Purchases
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
                onClick={() => setOpenAddPurchase(true)}
              >
                New Purchase
              </Button>
            </div>
            <Dialog open={openAddPurchase} onClose={handleCloseAddPurchase}>
              <DialogTitle>Add Purchase</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Adding a purchase manually will not trigger any notifications
                  or payments. To add a paid purchase you can create a new
                  invoice and mark it as paid.
                </DialogContentText>

                <Input
                  disabled
                  value={refNo}
                  defaultValue="Reference no."
                  inputProps={ariaLabel}
                  style={{ width: "95%", margin: "10px" }}
                />

                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  <FormControl fullWidth style={{ flex: 0.45, margin: "20px" }}>
                    <InputLabel id="demo-simple-select-label">
                      Supplier Options
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={supplierOption}
                      label="Supplier Option"
                      onChange={handleChangeSupplierOption}
                    >
                      <MenuItem value="Dinesh Food Co.">
                        Dinesh Food Co.
                      </MenuItem>
                      <MenuItem value="DJ SubZ">DJ SubZ</MenuItem>
                      <MenuItem value="Iyer Foods">Iyer Foods</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField
                    style={{ flex: "0.45", minWidth: "200px", margin: "20px" }}
                    type="date"
                    variant="outlined"
                    color="primary"
                  />
                </div>

                <FormControl style={{ margin: "20px", width: "92%" }}>
                  <InputLabel id="demo-simple-select-label">
                    Ingredients
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value="Select Ingredient"
                    label="Ingredient"
                    // onChange={handleChangeSupplierOption}
                  >
                    {ingredients.map((ing, index) => {
                      return (
                        <MenuItem
                          value={ing.ingredient_id}
                          onClick={() => {
                            setGrandTotal(grandTotal + ing.price);
                            addFormFields(ing.name, ing.price);
                          }}
                        >
                          {ing.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  {console.log(selectedIngredients)}

                  {selectedIngredients.map((elem, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          margin: "10px",
                        }}
                      >
                        <TextField
                          style={{ margin: "10px", flex: "0.45" }}
                          id="outlined-read-only-input"
                          label="Ingredient"
                          defaultValue={elem.name}
                          InputProps={{
                            readOnly: true,
                          }}
                        />
                        <TextField
                          style={{ margin: "10px", flex: "0.25" }}
                          id="outlined-number"
                          label="Number"
                          type="number"
                          defaultValue={elem.quantity}
                          InputLabelProps={{
                            shrink: true,
                          }}
                          onChange={(e) =>
                            handleChangeIngredient(index, e, elem.price)
                          }
                        />
                        <TextField
                          style={{ margin: "10px", flex: "0.25" }}
                          id="outlined-read-only-input"
                          label="Total"
                          value={elem.total}
                          defaultValue={elem.total}
                          InputProps={{
                            readOnly: false,
                          }}
                        />

                        <IconButton
                          style={{ margin: "10px" }}
                          onClick={() => {
                            setGrandTotal(grandTotal - elem.total);
                            removeFormFields(index);
                          }}
                        >
                          <Close />
                        </IconButton>
                      </div>
                    );
                  })}
                </div>

                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      width: "94%",
                    }}
                  >
                    <Input
                      disabled
                      value={`Grand Total: ${grandTotal}`}
                      defaultValue={0.0}
                      inputProps={ariaLabel}
                      style={{ width: "92%", margin: "10px" }}
                    />
                    <Input
                      disabled
                      value={`Paid: ${paidAlready}`}
                      defaultValue="Paid"
                      inputProps={ariaLabel}
                      style={{ width: "92%", margin: "10px" }}
                    />
                    <Input
                      disabled
                      value={`Due: ${grandTotal - paidAlready}`}
                      defaultValue={"Due"}
                      inputProps={ariaLabel}
                      style={{ width: "92%", margin: "10px" }}
                    />
                  </div>
                </div>
              </DialogContent>

              <DialogActions>
                <Button onClick={handleCloseAddPurchase}>Cancel</Button>
                <Button
                  onClick={() => {
                    setRefNo(purchases.length + 1);
                    handleAddPurchase(
                      purchases.length + 1,
                      supplierOption,
                      selectedIngredients,
                      grandTotal,
                      paidAlready,
                      grandTotal - paidAlready
                    );
                  }}
                >
                  Add
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
                  <TableCell>DATE</TableCell>
                  <TableCell>GRAND TOTAL</TableCell>
                  <TableCell>DUE</TableCell>
                  <TableCell>ADDED BY</TableCell>
                  <TableCell>ACTIONS</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {purchases.length > 0 ? (
                  purchases?.map((Purchase) => (
                    <TableRow hover key={Purchase.ref_no}>
                      <TableCell style={{}}>{Purchase.ref_no}</TableCell>
                      <TableCell>{Purchase.supplier}</TableCell>
                      <TableCell>{Purchase.total_price}</TableCell>
                      <TableCell>{Purchase.paid_price}</TableCell>
                      <TableCell align="right">{Purchase.due_price}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography variant="subtitle2" sx={{ p: 2 }}>
                    No Purchases...
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

export default Purchase;
