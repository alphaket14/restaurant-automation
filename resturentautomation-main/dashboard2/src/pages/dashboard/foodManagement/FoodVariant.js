import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Box,
  Typography,
  Divider,
  TableContainer,
  Tooltip,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  Modal,
  InputAdornment,
  Autocomplete,
  TablePagination
} from "@mui/material";
import Stack from '@mui/material/Stack';
import { makeStyles } from "@material-ui/core";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Scrollbar from "src/components/Scrollbar";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));
const FoodVariant = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 100, maxWidth: 200 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Parent Catagory", minWidth: 150, maxWidth: 300 },
    { label: "Food Catagory", minWidth: 150, maxWidth: 300 },
    { label: "Food Item", minWidth: 130, maxWidth: 100 },
    { label: "Option", minWidth: 100, maxWidth: 400 },
    { label: "Price", minWidth: 100, maxWidth: 400 },
    { label: "Actions", minWidth: 120, maxWidth: 250 },
  ];

  const createData = (parentCategory,categoryName,foodName,variant,price,h1) => {
    return { parentCategory, categoryName, foodName, variant, price, h1 };
  };

  const data = [
    createData("Non-Veg", "Food Catagory", "Food Name", "Variant", 500, "\t"),
  ];
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [price, setPrice] = useState("");
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openModalHandler2 = () => {
    setOpenModal2(true);
  };
  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/food-category/')
      const data2 = await axios.get('http://localhost:5000/toppings/')
      const data3 = await axios.get('http://localhost:5000/fooditem/')
      console.log("categories:",data3)
      //setCats(data.data[0].rows);
      //setToppings(data2.data[0].rows);
      setRows(data3.data[0].rows);
      setRowsid(data3.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  //parent_cat
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
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows3, setRows3] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  //for discount
  const disc= [
    'Applicable',
    'Not Applicable',
  ];
  const [discName, setDiscName] = React.useState([]);
  const handleDiscChange = (event) => {
    const {
      target: { value },
    } = event;
    setDiscName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for status
  const stats = ["Active", "Inactive"];
  const [statName, setStatName] = React.useState([]);
  const handleStatChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const createData2 = () => {
    return {varname : "", optarr : [ {option : "", price: ""},]};
  };
  const createData3 = () => {
    return {option : "", price: ""};
  };
  const data2 = [createData2()];
  const [rows2, setRows2] = useState(data2);
  const [foodCategory, setCategory] = useState("");
  const [currIndex, setCurrIndex] = useState(null);
  const edit = (i) => {
    openModalHandler();
    setCurrIndex(i);
    setRows2(rows[i].variants)
    setPrice(rows[i].price)
    setDiscName(rows[i].discount)
    setFoodName(rows[i].foodName)
    setParName(rows[i].parentCategory);
    setCategory(rows[i].foodCategory);
    setStatName(rows[i].status);
  };
  const editPosition = () => {
    let newRows = rows.map((row) => row);
    newRows[currIndex].parentCategory = parentName;
    newRows[currIndex].foodCategory = foodCategory;
    newRows[currIndex].status = statName;
    setRows(newRows);
    setCategory("");
    setParName([]);
    setStatName([]);
    closeModalHandler2();
  };
  const addOption = (index) =>{
    const newPosition = createData3()
    setRows2(prevRows => {
      return prevRows.map((row, id) => {
        if(index === id){
          return{
            ...prevRows[index], optarr: [...prevRows[index].optarr, newPosition]
          }
        }
        else{
          return row;
        }
      })
    })
  }
  const addVariant = () =>{
    const newPosition = createData2()
    setRows2(prev => [...prev,newPosition])
  }
  const deleteOption = (ind1, ind2) => {
    if(window.confirm("Are you sure you want to delete this item?")){
      setRows2(prevRows => {
        return prevRows.map((row, id) => {
          if(ind1 === id){
            let newRows = row.optarr.filter((opt,i) =>{
              return ind2 !== i;
            })
            row.optarr = newRows
            return row;
          }
          else{
            return row;
          }
        })
      })
    }

  }
  const deleteVariant = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows2.filter((row,i) =>{
        return index !== i;
      })
      setRows2(newRows)
    }}
  //for foodcats
  const foodcats = [
    { title: 'Category 1'},
    { title: 'Category 2'},
    { title: 'Category 3'},
    { title: 'Category 4'},
  ];
  //for order type
  const orderType= [
    {title: 'Dine In'},
    {title: 'Delivery'},
    {title: 'Pick Up'},
    {title: 'Partner Delivery'},
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
  //for toppings
  const toppings= [
    {title: 'Topping 1'},
    {title: 'Topping 2'},
    {title: 'Topping 3'},
    {title: 'Topping 4'},
   ];
  //for addons
  const addons= [
    {title: 'Addon 1'},
    {title: 'Addon 2'},
    {title: 'Addon 3'},
    {title: 'Addon 4'},
   ];
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
          Add Food
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Order Type :</Typography>
            </Grid>
            <Grid item xs={8}>
              <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={orderType}
                disableCloseOnSelect
                inputProps={{ readOnly: true, }}
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
                  <TextField {...params} label="Order Type" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Parent Category :</Typography>
            </Grid>
            <Grid item xs={8}>
              <Select 
                  name="departName"
                  fullWidth 
                  inputProps={{ readOnly: true, }}
                  size="small"
                  //multiple
                  value={parentName}
                  onChange={handleParChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
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
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={foodcats}
                inputProps={{ readOnly: true, }}
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
            <TextField fullWidth size="small"
                value={foodName}
                inputProps={{ readOnly: true, }}
                onChange={e => setFoodName(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Discount :</Typography>
            </Grid>
            <Grid item xs={8}>
              <Select 
                  name="departName"
                  fullWidth 
                  size="small"
                  //multiple
                  inputProps={{ readOnly: true, }}
                  value={discName}
                  onChange={handleDiscChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {disc.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={discName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Price :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={price}
                      type="number"
                      inputProps={{ readOnly: true, }}
                      onChange={e => setPrice(e.target.value)} 
                      //onChange={LoanAmtChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Status :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Select 
                  name="departName"
                  fullWidth 
                  size="small"
                  //multiple
                  inputProps={{ readOnly: true, }}
                  value={statName}
                  onChange={handleStatChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {stats.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={statName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Image :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField type="file" inputProps={{ readOnly: true, }} name="photograph" fullWidth size="small" />
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%", mb: 2, mt:2 }} />
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Topping :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                multiple
                size="small"
                fullWidth 
                inputProps={{ readOnly: true, }}
                id="checkboxes-tags-demo"
                options={toppings}
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
                  <TextField {...params} label="Toppings" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Divider sx={{ width: "100%", mb: 2, mt:2 }} />
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Add on :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                multiple
                size="small"
                inputProps={{ readOnly: true, }}
                fullWidth 
                id="checkboxes-tags-demo"
                options={addons}
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
                  <TextField {...params} label="Addons" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="center" mt={8}>
            <Grid item  >
              <Button onClick={openModalHandler2}  variant="contained" size="small" sx={{ marginRight: 5 }}>
                Add Variant
              </Button>
              <Button   variant="outlined" size="small" sx={{ marginRight: 5 }}>
                Reset
              </Button>
              <Button  variant="contained" size="small">
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
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
          <Typography variant="h5" align="center">
                Edit Variant
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Button  onClick={addVariant} variant="contained" size="small">
                      Add Variant
                    </Button>
                  </Grid>
                </Grid>
                {rows2.map((row, id) => {
                  return(
                    <><Grid container
                        style={{
                          borderRadius: 5,
                          border: "1px solid grey",
                          boxSizing: "border-box",
                          padding: "20px 20px",
                          margin: "20px 0px",
                        }}
                    >
                      <Grid item container>
                        <Grid item xs={4}>
                          <Typography variant="subtitle2">Variant Name :</Typography>
                        </Grid>
                        <Grid item xs={7}>
                          <TextField fullWidth size="small"
                            value={row.varname}
                            //onChange={e => setPosition(e.target.value)} 
                          />
                        </Grid>
                        <Grid item xs={1}>
                          <IconButton onClick={()=>deleteVariant(id)}>
                            <Delete />
                          </IconButton>
                        </Grid>
                      </Grid>
                      <Grid item container>
                        <Grid item xs={4} >
                          <Button  onClick={()=>addOption(id)} variant="contained" size="small">
                            Add Option
                          </Button>
                        </Grid>
                      </Grid>
                      {row.optarr.map((row1, id2) => {
                        //setAdderIndex(id)
                        return(
                            <Grid item container sx={{ marginTop: 2 }}>
                              <Grid item xs={5} sx={{marginRight:"35px"}}>
                                <TextField value={row1.option} label="Option" size="small"/>
                              </Grid>
                              <Grid item xs={5} >
                                <TextField  label="Price" size="small"
                                  value={row1.price}
                                  InputProps={{
                                    startAdornment: (
                                      <InputAdornment position="start">
                                        <CurrencyRupee/>
                                      </InputAdornment>
                                    )
                                  }}
                                />
                              </Grid>
                              <Grid item xs={1} >
                                <IconButton onClick={()=>deleteOption(id, id2)}>
                                  <Delete />
                                </IconButton>
                              </Grid>
                            </Grid>
                        )
                      })}
                      </Grid>
                </>
              )
            })}

                <Grid item container justifyContent="center">
                  <Grid item  >
                    <Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={editPosition} variant="contained" size="small">
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
    <Autocomplete
      //multiple
      size="small"
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
      sx={{width:"20%" , float: "left"}}
      //style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Food Category" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
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
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      //style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Food Item" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
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
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      //style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Variant" placeholder="Search" />
      )}
    />
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
        <TableContainer>
          <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      }}
                      key={column.label}
                    >
                      {column.label}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                console.log(row.variants)
                return(
                  <>
                  {row.variants.map((variant, id2) => {
                    return(
                      <>
                      <TableRow>
                      <TableCell align="center">{id+id2+1}</TableCell>
                      <TableCell align="center">{row.parentCategory}</TableCell>
                      <TableCell align="center">{row.categoryName}</TableCell>
                      <TableCell align="center">{row.foodName}</TableCell>
                      <TableCell align="center">
                        <Stack direction="column" spacing={2}>
                          {variant.optarr.map((opt, id3) => {
                            return(
                              <Button color="primary" size="small" variant="outlined">
                                {opt.option}
                              </Button>
                            );
                          })}
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                      <Stack direction="column" spacing={2}>
                        {variant.optarr.map((opt, id3) => {
                            return(
                              <Button color="primary" size="small" variant="outlined">
                              <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />
                              {opt.price}
                              </Button>
                            );
                          })}
                        </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit" placement="left">
                          <IconButton
                            color="primary"
                            size="small"
                            //onClick={() => navigate("/dashboard/foodmanagement/managefood/add-variant")}
                            onClick={() => edit(id)}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement="top">
                          <IconButton sx={{ color: "error.main" }} size="small">
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                    </>
                    );
                  })}
                  </>
                  );
                  })}
            </TableBody>
          </Table>
          </Scrollbar>
        </TableContainer>
        <TablePagination
                component="div"
                count={rows3.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
      </Grid>
    </>
  );
};
export default FoodVariant;
