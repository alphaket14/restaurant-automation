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
  Menu,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@material-ui/core";

import Close from "@material-ui/icons/Close";
import FilterAlt from "@material-ui/icons/FilterAlt";

const ariaLabel = { "aria-label": "description" };

const ingredients = [
  { name: "Jeera 100g", ingredient_id: "ABC123", price: 240 },
  { name: "Dhaniya 100g", ingredient_id: "ABC124", price: 240 },
  { name: "Elaichi 100g", ingredient_id: "ABC125", price: 240 },
];

const StockAdjustments1 = () => {
  const [stocks, setStocks] = useState([]);
  const [openAddStock, setOpenAddStock] = useState(false);
  const [supplierOption, setSupplierOption] = useState("Select supplier");
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [grandTotal, setGrandTotal] = useState(0.0);
  const [refNo, setRefNo] = useState(1);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [selectedOptions0, setSelectedOptions0] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [dateOption, setDateOption] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeItemsPerPage = (event) => {
    setItemsPerPage(event.target.value);
  };

  const handleChangeDateOptions = (event) => {
    setDateOption(event.target.value);
  };

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 4.5 + 8,
        width: 250,
        marginTop: 60,
      },
    },
  };

  const options0 = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const options1 = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const options2 = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const options3 = [
    "Oliver Hansen",
    "Van Henry",
    "April Tucker",
    "Ralph Hubbard",
    "Omar Alexander",
    "Carlos Abbott",
    "Miriam Wagner",
    "Bradley Wilkerson",
    "Virginia Andrews",
    "Kelly Snyder",
  ];

  const handleChangeFilter0 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions0(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeFilter1 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions1(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeFilter2 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions2(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const handleChangeFilter3 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions3(
      // On autofill we get a the stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const [paidAlready, setPaidAlready] = useState(0.0);

  const handleAddStockAdjustment = (
    ref_no,
    supplier,
    ingredients_list,
    total_price,
    paid_price,
    due_price
  ) => {
    let newStocks = [
      ...stocks,
      {
        ref_no: ref_no,
        supplier: supplier,
        ingredients_list: ingredients_list,
        total_price: total_price,
        paid_price: paid_price,
        due_price: due_price,
      },
    ];
    setStocks(newStocks);
    setOpenAddStock(false);
    setSupplierOption("Select Supplier");
    setPaidAlready(0.0);
    setGrandTotal(0.0);
    setSelectedIngredients([]);
  };

  const csvString = [
    ["Reference No.", "Supplier", "Total Price", "Paid Amount", "Due Amount"],
    ...stocks.map((item) => [
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
    setOpenAddStock(false);
  };

  const handleChangeSupplierOption = (e) => {
    setSupplierOption(e.target.value);
  };

  return (
    <>
      <Helmet>
        <title>Stocks | Client Portal</title>
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
              Stock Adjustments
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

              <Button type="text" size="large" href="/dashboard/Stock/alert">
                Ingredients Alert
              </Button>

              <Button
                variant="contained"
                style={{ margin: "10px" }}
                onClick={() => setOpenAddStock(true)}
              >
                Add Stock Adjustment
              </Button>

              <Button
                onClick={handleClick}
                style={{ margin: "10px" }}
                variant="contained"
              >
                FILTER&nbsp;&nbsp;
                <FilterAlt />
              </Button>

              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
                sx={{ marginTop: 5 }}
              >
                {/* <MenuItem onClick={handleClose}> */}
                <MenuItem>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Order Status
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={selectedOptions0}
                      onChange={handleChangeFilter0}
                      input={<OutlinedInput label="Order Status" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {options0.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={selectedOptions0.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>

                <MenuItem>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Service
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={selectedOptions1}
                      onChange={handleChangeFilter1}
                      input={<OutlinedInput label="Any Service" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {options1.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={selectedOptions1.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>

                <MenuItem>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Tag
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={selectedOptions2}
                      onChange={handleChangeFilter2}
                      input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {options2.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={selectedOptions2.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>

                <MenuItem>
                  <FormControl sx={{ m: 0, width: 300 }}>
                    <InputLabel id="demo-multiple-checkbox-label">
                      Assigned User
                    </InputLabel>
                    <Select
                      labelId="demo-multiple-checkbox-label"
                      id="demo-multiple-checkbox"
                      multiple
                      value={selectedOptions3}
                      onChange={handleChangeFilter3}
                      input={<OutlinedInput label="Assigned User" />}
                      renderValue={(selected) => selected.join(", ")}
                      MenuProps={MenuProps}
                    >
                      {options2.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox
                            checked={selectedOptions3.indexOf(name) > -1}
                          />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </MenuItem>

                <MenuItem>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={}
                      label="Age"
                      onChange={handleChangeDateOptions}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>

                <MenuItem>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Items per page
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      // value={}
                      label="Items per page"
                      onChange={handleChangeItemsPerPage}
                    >
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                  </FormControl>
                </MenuItem>

                <div
                  style={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    onClick={handleClose}
                    style={{ margin: "20px" }}
                    variant="contained"
                  >
                    APPLY
                  </Button>
                </div>
              </Menu>
            </div>

            <Dialog open={openAddStock} onClose={handleCloseAddPurchase}>
              <DialogTitle>Add Stock Adjustment</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Adding a stock adjustment manually will not trigger any
                  notifications or payments. To add a paid purchase you can
                  create a new invoice and mark it as paid.
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
                    setRefNo(stocks.length + 1);
                    handleAddStockAdjustment(
                      stocks.length + 1,
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
                  <TableCell>Date</TableCell>
                  <TableCell>Ingredient</TableCell>
                  <TableCell>Responsible</TableCell>
                  <TableCell>Person Note</TableCell>
                  <TableCell>Added By</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {stocks.length > 0 ? (
                  stocks?.map((Stock) => (
                    <TableRow hover key={Stock.ref_no}>
                      <TableCell style={{}}>{Stock.ref_no}</TableCell>
                      <TableCell>{Stock.supplier}</TableCell>
                      <TableCell>{Stock.total_price}</TableCell>
                      <TableCell>{Stock.paid_price}</TableCell>
                      <TableCell align="right">{Stock.due_price}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <Typography variant="subtitle2" sx={{ p: 2 }}>
                    No Stock Adjustments...
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

export default StockAdjustments1;
