import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  TextField,
  Box,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Tooltip,
  Divider,
  TableContainer,
  Grid,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  InputAdornment,
  Modal,
  Autocomplete,
  TablePagination
} from "@mui/material";
import { makeStyles} from "@material-ui/core";
import { Edit, Delete, CurrencyRupee, Add } from "@mui/icons-material";
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
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    //width: 700,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));
const foodcats = [
  { title: 'Category 1'},
  { title: 'Category 2'},
  { title: 'Category 3'},
  { title: 'Category 4'},
];
const FoodList = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 100, maxWidth: 60 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Image", minWidth: 100, maxWidth: 120 },
    { label: "Order Type", minWidth: 120, maxWidth: 120 },
    { label: "Parent Catagory", minWidth: 150, maxWidth: 120 },
    { label: "Food Category", minWidth: 150, maxWidth: 120 },
    { label: "Food Item", minWidth: 130, maxWidth: 120 },
    { label: "Discount", minWidth: 100, maxWidth: 120 },
    {
      label: "Price",
      minWidth: 100,
      maxWidth: 120,
      endIcon: <CurrencyRupee sx={{ fontSize: 14 , marginLeft:"5px"}} />
    },
    { label: "Status", minWidth: 80, maxWidth: 100 },
    { label: "Actions", minWidth: 130, maxWidth: 50 }
  ];

  const createData = (image,orderType,parentCategory,categoryName,foodName,discount,price,status, variants) => {
    return {  image, orderType, parentCategory, categoryName, foodName, discount, price, status, variants };
  };
  const createData2 = () => {
    return {varname : "", optarr : [ {option : "", price: ""},]};
  };
  const createData3 = () => {
    return {option : "", price: ""};
  };
  const data = [
    createData( "dummy", "Dine In", "Non-Veg", "Thai", "Food Name", "Applicable", 599, "Active")
  ];
  const data2 = [
    createData2()
  ];
  const [rows, setRows] = useState([]);
  const [rows2, setRows2] = useState(data2);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [foodName, setFoodName] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [price, setPrice] = useState();
  const [cats, setCats]= React.useState([]);
  const [addons, setAddons]= React.useState([]);
  const [toppings, setToppings]= React.useState([]);
  const [variants, setVariants]= React.useState([]);
  const [order, setOrder]= useState("");
  const [test, setTest] = React.useState([]);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/food-category/')
      const data2 = await axios.get('http://localhost:5000/toppings/')
      const data3 = await axios.get('http://localhost:5000/fooditem/')
      const data4 = await axios.get('http://localhost:5000/addons/')
      console.log("categories:",data)
      setCats(data.data[0].rows);
      setToppings(data2.data[0].rows);
      setRows(data3.data[0].rows);
      setRowsid(data3.data[0]._id);
      setAddons(data4.data[0].rows);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const handleOrderChange = (event) => {
    const {
      target: { value },
    } = event;
    setTest(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    console.log(test)
  };
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
  const openModalHandler3 = () => {
    setOpenModal3(true);
  };
  const closeModalHandler3 = () => {
    setOpenModal3(false);
  };
  const addPosition = () => {
    //const index = rows.length;
    const newPosition = createData("", order, parentName, categoryName, foodName, discName, price, statName, variants);
    setRows((prev) => [...prev, newPosition]);
    //setParent("")
    setOrder("");
    setCategoryName("");
    setFoodName("");
    setPrice("");
    setParName([]);
    //setCatName([]);
    setDiscName([]);
    setStatName([]);
    setVariants([]);
    closeModalHandler();
  };
  //parent_cat
  const parent_cats= [
    'Veg',
    'Non Veg',
  ];
  const [parentName, setParName] = React.useState([]);
  const handleParChange = (event) => {
    const {
      target: { value },
    } = event;
    setParName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for status
  const stats= [
    'Active',
    'Inactive',
  ];
  const [statName, setStatName] = React.useState([]);
  const handleStatChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //discount
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
  //for order type
  const orderType= [
   {title: 'Dine In'},
   {title: 'Delivery'},
   {title: 'Pick Up'},
   {title: 'Partner Delivery'},
  ];
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
    const deletePosition = (index) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        let newRows = rows.filter((row, i) => {
          return index !== i;
        });
        setRows(newRows);
      }
    };
    const reset = () => {
      setOrder("");
      setCategoryName("");
      setFoodName("");
      setPrice("");
      setParName([]);
      //setCatName([]);
      setDiscName([]);
      setStatName([]);
    }

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rowsno, setRowsNo] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

    const saveVariant = () =>{
      setVariants([])
      console.log(rows2);
      closeModalHandler3();
    }
    const variantData = (e) => {
      const value = e.target.value
      const name = e.target.name
      const index = e.target.id
      //temp = rows2;
      setRows2(prev => {
        return prev.map((row, id) => {
          if(id === index){
            row.varname = value
            return row;
          }
          else{
            return row
          }
        })
        /*if(name === "varname"){
          rows2[index].varname = value
          rows2[index].optarr = prev[index].optarr
        }*/
      })
      console.log(index);
      //console.log(rows2);
    }
    const onSubmit = (e) => {}
  return (
    <>
      <Modal
          open={openModal3}
          onClose={closeModalHandler3}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal3}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Add Variant
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
                    <>
                    <form onSubmit={onSubmit}>
                    <Grid container
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
                          {/*<input
                            fullWidth size="small"
                            name = "varname"
                            id={id}
                            //value={row.varname}
                            onChange={variantData} 
                          />*/}
                          <TextField fullWidth size="small"
                            name = "varname"
                            id={id}
                            //value={row.varname}
                            onChange={variantData} 
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
                                <TextField onChange={variantData}  label="Option" size="small"/>
                              </Grid>
                              <Grid item xs={5} >
                                <TextField onChange={variantData}  label="Price" size="small"
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
                      </form>
                </>
              )
            })}

                <Grid item container justifyContent="center">
                  <Grid item  >
                    <Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={saveVariant} variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
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
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={orderType}
                //onChange={handleOrderChange}
                onChange={(event, newValue) => {
                  setOrder(newValue.title);
                }}
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
                  fullWidth 
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
                //multiple
                size="small"
                fullWidth
                id="checkboxes-tags-demo"
                options={cats}
                onChange={(event, newValue) => {
                  setCategoryName(newValue.foodCategory);
                }}
                disableCloseOnSelect
                getOptionLabel={(option) => option.foodCategory}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.foodCategory}
                  </li>
                )}
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
                  
                  fullWidth 
                  size="small"
                  //multiple
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
                  
                  fullWidth 
                  size="small"
                  //multiple
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
            <TextField type="file" name="photograph" fullWidth size="small" />
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
                id="checkboxes-tags-demo"
                options={toppings}
                disableCloseOnSelect
                getOptionLabel={(option) => option.toppingName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.toppingName}
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
                fullWidth 
                id="checkboxes-tags-demo"
                options={addons}
                disableCloseOnSelect
                getOptionLabel={(option) => option.addonName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.addonName}
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
              <Button onClick={openModalHandler3}  variant="contained" size="small" sx={{ marginRight: 5 }}>
                Add Variant
              </Button>
              <Button onClick={reset} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                Reset
              </Button>
              <Button onClick={addPosition}  variant="contained" size="small">
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
          Edit Food
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
                  
                  fullWidth 
                  size="small"
                  multiple
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
                //multiple
                size="small"
                id="checkboxes-tags-demo"
                options={cats}
                disableCloseOnSelect
                getOptionLabel={(option) => option.foodCategory}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.foodCategory}
                  </li>
                )}
                sx={{width:"20%" , float: "left"}}
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
                //value={categoryName}
                //onChange={e => setCategory(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Price :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={loan_amt}
                      type="number"
                      //onChange={e => setLoanAmt(e.target.value)} 
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
                  
                  fullWidth 
                  size="small"
                  //multiple
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
              <TextField type="file" name="photograph" fullWidth size="small" />
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
                fullWidth 
                id="checkboxes-tags-demo"
                options={addons}
                disableCloseOnSelect
                getOptionLabel={(option) => option.addonName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.addonName}
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
              <Button onClick={openModalHandler3}  variant="contained" size="small" sx={{ marginRight: 5 }}>
                Add Variant
              </Button>
              <Button   variant="outlined" size="small" sx={{ marginRight: 5 }}>
                Reset
              </Button>
              <Button onClick={addPosition}  variant="contained" size="small">
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
          marginBottom: "10px",
          paddingBottom: 6
        }}
      >
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={cats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.foodCategory}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.foodCategory}
        </li>
      )}
      sx={{width:"20%" , float: "left"}}
      renderInput={(params) => (
        <TextField {...params} label="Food Category" placeholder="Search" />
      )}
    />
        <TextField sx={{ width: "20%", marginLeft:"10px", float: "left"}} label="Food Item" size="small"/>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
          //sx={{ justifyContent: "end" }}
          sx={{float: "right"}}
        >
          Add Food
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
        <TableContainer>
          <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }} >
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.label}
                      {column.endIcon && <>({column.endIcon})</>}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell justifyContent="center">
                      <img style={{ height: 50, width: 30 }} />
                    </TableCell>
                    <TableCell align="center">{row.orderType}</TableCell>
                    <TableCell align="center">{row.parentCategory}</TableCell>
                    <TableCell align="center">{row.categoryName}</TableCell>
                    <TableCell align="center">{row.foodName}</TableCell>
                    <TableCell align="center">
                      {row.discount=="Applicable"? 
                        <Button color="primary" size="small" variant="outlined">
                          {row.discount}
                        </Button>
                      :
                        <Button color="error" size="small" variant="outlined">
                          {row.discount}
                        </Button>
                      }
                    </TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.price}</TableCell>
                    <TableCell align="center">
                      {row.status=="Active"? 
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      :
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      }
                      </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() => navigate("/dashboard/foodmanagement/managefood/addfood")}
                          onClick={openModalHandler2}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton 
                        sx={{ color: "error.main" }} 
                        size="small"
                        onClick={() => deletePosition(id)}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
          </Scrollbar>
          </TableContainer>
          <TablePagination
                component="div"
                count={rowsno.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
      </Grid>
    </>
  );
};
export default FoodList;
