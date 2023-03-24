import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  Box,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  Tooltip,
  IconButton,
  InputAdornment,
  Checkbox,
  ListItemText,
  Modal,
  Backdrop,
  Fade,
  Autocomplete,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, Add, Delete, CurrencyRupee } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
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
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));
const ManageRecipe = (props) => {
  const classes = useStyles();
  const columns = [
    { label: "Item Code No.", minWidth: 130, maxWidth: 200 },
    { label: "Inventory Category", minWidth: 300, maxWidth: 400 },
    { label: "Inventory Item", minWidth: 300, maxWidth: 400 },
    { label: "Units", minWidth: 180, maxWidth: 200 },
    { label: "Quantity", minWidth: 150, maxWidth: 200 },
    {
      label: "Price",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 160,
      maxWidth: 200
    },
    { label: "Actions", minWidth: 130, maxWidth: 200 }
  ];
  const [quantity, setQuantity]= useState();
  const [items, setItems]= React.useState([]);
  const [units, setUnits]= React.useState([]);
  const [cats2, setCats2]= React.useState([]);
  const [serveUnit, SetServe] = useState();
  const [cost, SetCost] = useState(0);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/inventory-category/')
      const data2 = await axios.get('http://localhost:5000/inventory-unit/')
      const data3 = await axios.get('http://localhost:5000/inventory-stock/')
      console.log("categories:",data)
      setCats2(data.data[0].rows);
      setUnits(data2.data[0].rows);
      setItems(data3.data[0].rows);
      //console.log(rowsid); working correctlyitemname
    };
    fetchdata();
  },[]);
  //for category
  const [catName2, setCatName2] = React.useState([]);
  const handleCatChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setCatName2(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const createRows = (itemCode, units, quantity, price) => ({
    itemCode, units, quantity, price
  });
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const addRows = (itemCode) => {
    const tempArray = [...rows];
    tempArray.push(createRows(itemCode, [], "", ""));
    setRows(tempArray);
    setUnitName([]);
  };
  const deleteRows = (id) => {
    const tempArray = [...rows];
    const filteredArray = tempArray.filter((row, index) => index !== id);
    setRows(filteredArray);
    SetCost(cost - tempArray[id].price)
  };
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const parent_cats = ["Veg", "Non Veg"];
  const [parentName, setParName] = React.useState([]);
  const handleParChange = (event) => {
    const {
      target: { value },
    } = event;
    setParName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for units
  const [unitName, setUnitName] = React.useState([]);
  const handleUnitChange = (event) => {
    const {
      target: { value },
    } = event;
    setUnitName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    //console.log(unitName[0]);
    setRows(prevRows=>{
      return prevRows.map((row, id) => {
        if(prevRows.length-1 === id){
          return{
            ...prevRows[id], units: [...prevRows[id].units, typeof value === 'string' ? value.split(',') : value,],
          }
        }
        else{
          return row;
        }
      })
    })
    
  };
  //for foodcats
  const foodcats = [
    { title: 'Category 1'},
    { title: 'Category 2'},
    { title: 'Category 3'},
    { title: 'Category 4'},
  ];
   //for food item
   const fooditems = [
    { title: 'Item 1'},
    { title: 'Item 2'},
    { title: 'Item 3'},
    { title: 'Item 4'},
  ];
   //for variant
   const variants = [
    { title: 'Variant 1'},
    { title: 'Variant 2'},
    { title: 'Variant 3'},
    { title: 'Variant 4'},
  ];
  const reset = () => {
    setParName([])
    SetServe("");
  }
  const handleQuantChange = (event, id) => {
    const temp = rows;
    temp[id].price = parseInt(event.target.value) * 5;
    temp[id].quantity = event.target.value;
    setRows(temp)
    SetCost(cost + temp[id].price)
  }
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
            <Typography variant="h5" align="center">
              Add Recipe
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
                  <Typography variant="subtitle2">Parent Category :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={parentName}
                    onChange={handleParChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {parent_cats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={parentName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Category Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={foodcats}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Category" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Item :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={fooditems}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Item" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Variant :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={variants}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Variant" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Serving Unit :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField value ={serveUnit} fullWidth size="small"/>
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" mt={8}>
                <Grid item>
                  <Button  onClick={closeModalHandler} variant="contained" size="small" sx={{ marginRight: 5 }}>
                    Cancel
                  </Button>
                  <Button  onClick={reset} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                    Reset
                  </Button>
                  <Button
                    onClick={closeModalHandler}
                    /*onClick={addPosition}*/ variant="contained"
                    size="small"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
          <Box
        sx={{
          width: "100%",
          paddingLeft: 2,
          mb: 1,
          paddingBottom: 6,
        }}
      >
        <TextField
          sx={{ width: "20%",  float: "left" }}
          label="Parent Category"
          inputProps={{ readOnly: true, }}
          size="small"
          value={parentName}
        />
        <TextField
          sx={{ width: "20%", marginLeft:"10px", float: "left" }}
          label="Food Category"
          inputProps={{ readOnly: true, }}
          size="small"
          value={catName2}
        />
        <TextField
          sx={{ width: "20%", marginLeft:"10px", float: "left" }}
          label="Food Item"
          size="small"
          inputProps={{ readOnly: true, }}
        />
        <TextField
          sx={{ width: "20%", marginLeft:"10px", float: "left" }}
          label="Variant"
          size="small"
          inputProps={{ readOnly: true, }}
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
          //sx={{ justifyContent: "end" }}
          sx={{ float: "right" }}
        >
          Add Recipe
        </Button>
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
          <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1250 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                    align="center"
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((r, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{r.itemCode}</TableCell>
                    <TableCell align="center" >
                    <Autocomplete
                      //multiple
                      size="small"
                      fullWidth 
                      id="checkboxes-tags-demo"
                      options={cats2}
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
                        <TextField {...params}  placeholder="Search" />
                      )}
                    />
                    </TableCell>
                    <TableCell align="center">
                    <Autocomplete
                      //multiple
                      size="small"
                      fullWidth 
                      id="checkboxes-tags-demo"
                      options={items}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.itemname}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.itemname}
                        </li>
                      )}
                      //style={{ width: 500 }}
                      renderInput={(params) => (
                        <TextField {...params}  placeholder="Search" />
                      )}
                    />
                    </TableCell>
                    <TableCell align="center">
                    <Autocomplete
                      //multiple
                      size="small"
                      fullWidth 
                      id="checkboxes-tags-demo"
                      options={units}
                      disableCloseOnSelect
                      getOptionLabel={(option) => option.unitName}
                      renderOption={(props, option, { selected }) => (
                        <li {...props}>
                          <Checkbox
                            icon={icon}
                            checkedIcon={checkedIcon}
                            style={{ marginRight: 8 }}
                            checked={selected}
                          />
                          {option.unitName}
                        </li>
                      )}
                      //style={{ width: 500 }}
                      renderInput={(params) => (
                        <TextField {...params}  placeholder="Search" />
                      )}
                    />
                      {/*<Select
                      name="departName"
                      fullWidth
                      size="small"
                      //multiple
                      value={r.units}
                      onChange={handleUnitChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      >
                      {units.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={unitName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>*/}
                    </TableCell>
                    <TableCell>
                      {/*<Select
                      name="departName"
                      fullWidth
                      size="small"
                      //multiple
                      value={quantName}
                      onChange={handleQuantChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                      >
                      {quantity.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={quantName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                      </Select>*/}
                      <TextField
                        size="small"
                        InputProps={{
                          sx: {
                              "& input": {
                                  textAlign: "center"
                              }
                          }
                        }}
                        fullWidth
                        value={r.quantity}
                        onChange={(event) => handleQuantChange(event , id)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        size="small"
                        fullWidth
                        InputProps={{
                          sx: {
                            "& input": {
                                textAlign: "center"
                            }
                          },
                          startAdornment: (
                            <InputAdornment position="start">
                              <CurrencyRupee fontSize="small" />
                            </InputAdornment>
                          )
                        }}
                        value={r.price}
                      />
                    </TableCell>
                    <TableCell>
                    <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() => navigate("/dashboard/foodmanagement/managefood/add-variant")}
                          //onClick={openModalHandler2}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip placement="top" title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => deleteRows(id)}
                          sx={{ color: "error.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableRow>
              <TableCell align="right" colSpan={5} style={{fontWeight:"bold", fontSize:"large"}}>
                Total Cost
              </TableCell>
              <TableCell colSpan={2} style={{fontWeight:"bold", fontSize:"large"}}>
                <CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>
                {cost}
              </TableCell>
            </TableRow>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Button sx={{width:"14%"}} variant="outlined" onClick={() => addRows("C2")}>
          Add More Item
      </Button>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "right" }}>
        <Button onClick={() => setRows([])} variant="contained" size="small" sx={{ marginRight: 5 }}>
          Cancel
        </Button>
        <Button variant="outlined" size="small" sx={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button onClick={() => setRows([])} variant="contained">Save</Button>
      </Box>
    </>
  );
};
export default ManageRecipe;
