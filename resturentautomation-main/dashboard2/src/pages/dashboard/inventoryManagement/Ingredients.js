import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  InputAdornment,
  TableContainer,
  Checkbox,
  Autocomplete,
  ListItemText,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "../../../components/Scrollbar";
import { Add, Edit, Delete, CurrencyRupee } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 520,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    borderRadius: 10,
    padding: 20
  }
}));

const Ingredients = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const [alertQuant, setAlertQuant] = useState(0);
  const modalOpenHandler = () => setOpenModal(true);
  const modalCloseHandler = () => setOpenModal(false);

  const [openModal2, setOpenModal2] = useState(false);
  const modalOpenHandler2 = () => setOpenModal2(true);
  const modalCloseHandler2 = () => setOpenModal2(false);

  const [currIndex, setCurrIndex] = useState(null);

  const columns = [
    { label: "Sr. No.", minWidth: 90, maxWidth: 200 },
    { label: "Item Code No", minWidth: 130, maxWidth: 150 },
    { label: "Inventory Category", minWidth: 170, maxWidth: 250 },
    { label: "Inventory Item", minWidth: 130, maxWidth: 250 },
    { label: "Units", minWidth: 50, maxWidth: 150 },
    { label: "Price/Unit", minWidth: 50, maxWidth: 150, rupee: true  },
    { label: "Current Stock", minWidth: 140, maxWidth: 250 },
    { label: "Total Price", minWidth: 140, maxWidth: 250, rupee: true },
    { label: "Alert Qty.", minWidth: 100, maxWidth: 150 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 120, maxWidth: 100 }
  ];

  const createRows = (code,Catagory, itemname, unit, unitPrice, currStock, totPrice, alertLevel, status, unitRowStock) => {
    return { code, Catagory, itemname, unit, unitPrice, currStock, totPrice, alertLevel, status, unitRowStock };
  };

  const [rows, setRows] = useState([]);
  const [invcats, setInvcats] = useState([]);
  const [units, setUnits]= React.useState([]);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data2 = await axios.get('http://localhost:5000/inventory-unit/')
      setUnits(data2.data[0].rows);
      const data3 = await axios.get('http://localhost:5000/inventory-category/')
      setInvcats(data3.data[0].rows)
      const data = await axios.get('http://localhost:5000/inventory-stock/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setAlertQuant(data.data[0].alert_no);
      setStockValue(data.data[0].stockValue);
      setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);
  const [code, setCode] = useState("");
  const [catagory, setCatagory] = useState("");
  const [ingName, setIngName] = useState("");
  const [unitName, setUnitName] = useState("");
  const [pricePerUnit, setPricePerUnit] = useState();
  const [currStock, setCurrStock] = useState();
  const [alertStock, setAlertStock] = useState("");
  const [unitStock, setUnitStock] = useState("");
  const [prevAlert, setPrevAlert] = useState(0);
  const [unitRowStock, setUnitRowStock] = useState("");
  const [stockValue, setStockValue ] = useState(0);
  const onSubmitHandler = () => {
    const temp = [...rows];
    temp.push(
      createRows(code,catagory,ingName,unitName2,pricePerUnit,currStock,currStock * pricePerUnit,alertStock,Number(currStock) < Number(alertStock) ? "Good" : "Poor!", unitStock)
    );
    var alert_send=alertQuant;
    if(alertStock/currStock <0.3){
      setAlertQuant(alertQuant+1);
      alert_send=alertQuant+1;
      console.log(alertQuant);
    }
    setStockValue(stockValue + (currStock * pricePerUnit))
    axios.post('http://localhost:5000/inventory-stock/update/'+rowsid, {
      rows: temp,
      alert_no: alert_send,
      stockValue: stockValue + (currStock * pricePerUnit),
    })
    setRows(temp);
    setIngName("");
    setCatagory("");
    setUnitName2([]);
    setPricePerUnit(null);
    setCurrStock(null);
    setCode("");
    setAlertStock(null);
    setUnitRowStock("");
    modalCloseHandler();
    //calAlert();
  };

  const onDeleteRowHandler = (id) => {
    const temp = [...rows];
    setStockValue(stockValue - (rows[id].unitPrice * rows[id].currStock))
    if(rows[id].alertLevel/rows[id].currStock <0.3){
      setAlertQuant(alertQuant-1);
    }
    const newArray = temp.filter((el, index) => index !== id);
    axios.post('http://localhost:5000/inventory-stock/update/'+rowsid, {
      rows: newArray,
      alert_no: alertQuant-1,
      stockValue: stockValue - (rows[id].unitPrice * rows[id].currStock),
    })
    setRows(newArray);
  };
  const edit = (id) => {
    setCurrIndex(id);
    setIngName(rows[id].name);
    setCatagory(rows[id].catagory);
    setUnitName(rows[id].unit);
    setPricePerUnit(rows[id].unitPrice);
    setCurrStock(rows[id].currStock);
    setCode(rows[id].code);
    setAlertStock(rows[id].alertLevel);
    setUnitRowStock(rows[id].unitRowStock);
    if(rows[id].alertLevel/rows[id].currStock <0.3){
      setAlertQuant(alertQuant-1);
    }
    setStockValue(stockValue - (rows[id].unitPrice * rows[id].currStock))
    modalOpenHandler2();
  };

  const onEditHandler = () => {
    let temp = [...rows];
    temp[currIndex].name = ingName;
    temp[currIndex].catagory = catagory;
    temp[currIndex].currStock = currStock ;
    temp[currIndex].unit = unitName;
    temp[currIndex].unitPrice = pricePerUnit;
    temp[currIndex].totPrice = pricePerUnit * currStock;
    temp[currIndex].code = code;
    temp[currIndex].alertLevel = alertStock ;
    temp[currIndex].unitRowStock = unitStock;
    setRows(temp);
    //calAlert();
    setStockValue(stockValue + (currStock * pricePerUnit))
    var alert_send = alertQuant;
    if(prevAlert == 1){
      if(alertStock/currStock >0.3){
        setAlertQuant(alertQuant-1);
        alert_send = alertQuant-1;
        setPrevAlert(0);
      }
    }
    else{
      if(alertStock/currStock <0.3){
        setAlertQuant(alertQuant+1);
        alert_send = alertQuant+1;
      }
    }
    axios.post('http://localhost:5000/inventory-stock/update/'+rowsid, {
      rows: temp,
      alert_no: alert_send,
      stockValue: stockValue + (currStock * pricePerUnit),
    })
    setCurrIndex(null);
    setIngName("");
    setCatagory("");
    setUnitName("");
    setPricePerUnit("");
    setCurrStock("");
    setCode("");
    setUnitRowStock("");
    modalCloseHandler2();
  };
  //for category
  //for units
  
  const [unitName2, setUnitName2] = React.useState([]);
  const handleUnitChange = (event) => {
    const {
      target: { value },
    } = event;
    setUnitName2(
      // On autofill we get a stringified value.
      //typeof value === 'string' ? (value.split(','), console.log("1st part")) : (value, console.log("2nd part"))
      typeof value === 'string' ? value.split(',') : value,
      );
      if(value == "milligram"){
        setUnitStock("mg")
      }
      if(value == "gram"){
        setUnitStock("g")
      }
      if(value == "kilogram"){
        setUnitStock("kg")
      }
      if(value == "millilitre"){
        setUnitStock("ml")
      }
      if(value == "Litre"){
        setUnitStock("L")
      }
      if(value == "Tablespoon"){
        setUnitStock("Tablespoon")
      }
      if(value == "Teaspoon"){
        setUnitStock("Teaspoon")
      }
    //console.log(unitName2);
    //UnitStockChnage();
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
        onClose={modalCloseHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography variant="h5" gutterBottom sx={{ width: "100%", textAlign: "center" }}>
              Add Ingredient
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Item Code No.
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    placeholder="Item Code No."
                    required
                    size="small"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Inventory Catagory
                  </Typography>
                </Grid>
                <Grid item xs={6} >
                <Autocomplete
                //multiple
                inputValue={catagory}
                onInputChange={(event, newCatagory) => {
                  setCatagory(newCatagory);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={invcats}
                //onChange={handleOrderChange}
                /*onChange={(event, newValue) => {
                  setOrder(newValue.categoryName);
                }}*/
                disableCloseOnSelect
                getOptionLabel={(option) => option.categoryName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.categoryName}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} 
                    label="Order Type" 
                    placeholder="Search" 
                    onChange={(e) => setCatagory(e.target.params)}
                  />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Inventory Item
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    placeholder="Ingredient Name"
                    required
                    size="small"
                    value={ingName}
                    onChange={(e) => setIngName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Units
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                <Select
                      name="departName"
                      fullWidth
                      size="small"
                      //multiple
                      value={unitName2}
                      onChange={handleUnitChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      >
                      {units.map((name) => (
                        <MenuItem key={name.unitName} value={name.unitName}>
                          <Checkbox checked={unitName2.indexOf(name.unitName) > -1} />
                          <ListItemText primary={name.unitName} />
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Price Per Unit
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Price/Unit"
                    type="number"
                    size="small"
                    value={pricePerUnit}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee/>
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Current Stock
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Current Stock"
                    size="small"
                    required
                    value={currStock}
                    onChange={(e) => setCurrStock(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {unitStock}
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Alert Stock
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Alert Stock"
                    size="small"
                    value={alertStock}
                    onChange={(e) => setAlertStock(e.target.value)}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {unitStock}
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" mt={2}>
                <Grid item  >
                  <Button onClick={modalCloseHandler} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                    Cancel
                  </Button>
                  <Button onClick={onSubmitHandler}  variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModal2}
        onClose={modalCloseHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" gutterBottom sx={{ width: "100%", textAlign: "center" }}>
              Edit Ingredient
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Item Code No.
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    placeholder="Item Code No."
                    required
                    size="small"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Inventory Catagory
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                //multiple
                inputValue={catagory}
                onInputChange={(event, newCatagory) => {
                  setCatagory(newCatagory);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={invcats}
                //onChange={handleOrderChange}
                /*onChange={(event, newValue) => {
                  setOrder(newValue.categoryName);
                }}*/
                disableCloseOnSelect
                getOptionLabel={(option) => option.categoryName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.categoryName}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Order Type" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Inventory Item
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    placeholder="Ingredient Name"
                    required
                    size="small"
                    value={ingName}
                    onChange={(e) => setIngName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Units
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                <Select
                      name="departName"
                      fullWidth
                      size="small"
                      //multiple
                      value={unitName2}
                      onChange={handleUnitChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      >
                      {units.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={unitName2.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Price Per Unit
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Price/Unit"
                    type="number"
                    size="small"
                    value={pricePerUnit}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee/>
                        </InputAdornment>
                      )
                    }}
                    onChange={(e) => setPricePerUnit(e.target.value)}
                    required
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Current Stock
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Current Stock"
                    size="small"
                    required
                    value={currStock}
                    onChange={(e) => setCurrStock(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {unitStock}
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Alert Stock
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    type="number"
                    fullWidth
                    label="Alert Stock"
                    size="small"
                    value={alertStock}
                    onChange={(e) => setAlertStock(e.target.value)}
                    required
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          {unitStock}
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" mt={2}>
                <Grid item  >
                  <Button onClick={modalCloseHandler} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                    Cancel
                  </Button>
                  <Button onClick={onEditHandler}  variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid container>
        <Box
          sx={{
            paddingLeft: 2,
            mb: 1,
            paddingBottom: 1,
            //display: "flex",
            //justifyContent: "space-between",
            //alignItems: "center",
            width: "100%"
          }}
        >
          {/*<Typography variant="h5">Ingredients</Typography>

          <Box component="span" sx={{ display: "flex", alignItems: "center" }}>
            <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Ingredients : {rows.length}</Typography>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Alert Ingredients : 0</Typography>
            </Box>
            <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Stock Value : 0</Typography>
            </Box>
            <Button
              variant="contained"
              onClick={modalOpenHandler}
              sx={{ mr: 1, float: "right" }}
              startIcon={<Add />}
            >
              Add Ingredient
            </Button>
          </Box>*/}
            <Button
              variant="contained"
              onClick={modalOpenHandler}
              sx={{ mr: 1, float: "right" }}
              startIcon={<Add />}
            >
              Add Ingredient
            </Button>
            <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                float: "right",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Ingredients : {rows.length}</Typography>
            </Box>
            {/*<Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                float: "right",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(255,125,0,0.8)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Alert Ingredients : {alertQuant}</Typography>
            </Box>*/}
            <Button
              variant="contained"
              //color = "rgba(255,125,0,0.8)"
              sx={{ mr: 1, float: "right", color: '#fff', backgroundColor: 'rgba(255,125,0,0.8)', borderColor: 'orange' }}
              //style={{bgcolor: "rgba(255,125,0,0.8)",}}
              onClick={modalOpenHandler}
              //sx={{ mr: 1, float: "right" }}
            >
              Alert Ingredients : {alertQuant}
            </Button>
            <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                float: "right",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Stock Value : <CurrencyRupee fontSize="small" style={{ marginRight:"5px"}}/>{stockValue}</Typography>
            </Box>
            <FormControl sx={{width:"20%" , float: "left"}} size="small">
          <InputLabel id="demo-select-small">Inventory Category</InputLabel>
              <Select 
                labelId="demo-select-small"
                label="Food Category"
                id="demo-select-small"
                fullWidth size="small"></Select>
        </FormControl>
        <TextField sx={{ width: "20%", marginLeft:"10px", float: "left"}} label="Inventory Item" size="small"/>
        </Box>
        {/*<Divider sx={{ mb: 2 }} />*/}
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
                  <TableCell align="center" sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                    {column.rupee ? (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Box>{column.label}</Box>
                        (<CurrencyRupee fontSize="small" />)
                      </Box>
                    ) : (
                      column.label
                    )}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.length ? (
                rows.map((row, id) => (
                  <TableRow>
                    {/* const createRows = (code,catagory, name, unit, unitPrice, currStock, totPrice, alertLevel, status) => {
    return { code,catagory, name, unit, unitPrice, currStock, totPrice, alertLevel, status };
  }; */}
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                    <TableCell align="center">{row.Catagory}</TableCell>
                    <TableCell align="center">{row.itemname}</TableCell>
                    <TableCell align="center">{row.unit}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color: "grey" , marginRight:"5px"}}/>{row.unitPrice}</TableCell>
                    <TableCell align="center">{row.currStock} {row.unitRowStock}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color: "grey", marginRight:"5px"}}/>{row.totPrice}</TableCell>
                    <TableCell align="center">{row.alertLevel} {row.unitRowStock}</TableCell>
                    <TableCell align="center">
                      {
                      (row.alertLevel/row.currStock) <= 0.3 ?
                      <Button color="error" size="small" variant="outlined">
                        Low
                      </Button>                      
                      : (row.alertLevel/row.currStock) <= 0.75 ?
                      <Button color="warning" size="small" variant="outlined">
                        Good
                      </Button>
                      :
                      <Button color="primary" size="small" variant="outlined">
                        Excellent
                      </Button>
                      }
                    </TableCell>
                    <TableCell align="center">
                      <IconButton onClick={() => edit(id)} size="small" color="primary">
                        <Edit />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={() => onDeleteRowHandler(id)}
                        sx={{ color: "error.main" }}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={10} align="center">
                    No data available.
                  </TableCell>
                </TableRow>
              )}
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
export default Ingredients;
