import React, { useState, useEffect } from "react";
import axios from "axios";
import { 
  Button, 
  Grid, 
  TextField, 
  Box, 
  Autocomplete, 
  Checkbox, 
  Typography,
  Divider,
  InputAdornment
} from "@mui/material";
import { DatePicker } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import AddIcon from "@mui/icons-material/Add";
import { Add, CurrencyRupee } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const AddPurchase = () => {
  const [purchaseDate,SetPurchaseDate] = useState(null);
  const [purchaseDate2,SetPurchaseDate2] = useState(new Date());
  const [expireDate,SetExpireDate] = useState(new Date());
  const [cats2, setCats2]= React.useState([]);
  const [units, setUnits]= React.useState([]);
  const [items, setItems]= React.useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/inventory-category/')
      const data2 = await axios.get('http://localhost:5000/inventory-unit/')
      const data3 = await axios.get('http://localhost:5000/inventory-stock/')
      console.log("categories:",data)
      setCats2(data.data[0].rows);
      setUnits(data2.data[0].rows);
      setItems(data3.data[0].rows);
    };
    fetchdata();
  },[]);
  //discount
  const disc= [
    {title :'Fixed'},
    {title :'Percentage'},
  ];
  //paystat
  const paystat= [
    {title :'Fully Paid'},
    {title :'Credit Period'},
    {title :'Outstanding'},
  ];
  return (
    <>
      <Grid container spacing={3}
        style={{float:"left", marginLeft:"830px"}}
      >
        <Grid item xs={12}>
        <Button
          component={NavLink}
          to="/dashboard/purchase/addpurchase"
          variant="contained"
          sx={{float:"left"}}
          startIcon={<AddIcon />}
        >
          Add Purchase
        </Button>
        </Grid>
      </Grid>
      <Grid container spacing={3}
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          width: 1000,
          float: "left",
          margin: "20px 0px",
        }}
      >        
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Purchase Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
          <DatePicker
            value={purchaseDate}
            inputFormat="dd/MM/yyyy"
            label="Invoice Date"
            onChange={(newValue) => {
              SetPurchaseDate(newValue);
            }}
            renderInput={(params) => (
              <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
            )}
          />
        </Grid>
        {/*<Grid item xs={6}>
          <TextField size="small"  fullWidth placeholder="Reference No" />
            </Grid>*/}

        <Grid item  xs={4}>
          <TextField  size="small"  fullWidth placeholder="Supplier Code" />
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"  fullWidth placeholder="Supplier Name" />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Inventory Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
          <TextField size="small"  fullWidth placeholder="GST No" />
        </Grid>
        <Grid item xs={4}>
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
              <TextField {...params}  placeholder="Search" label="Inventory Category"/>
            )}
          />
        </Grid>
        <Grid item container xs={4}>
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
              <TextField {...params}  placeholder="Search" label="Inventory Item"/>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Units And Pricing
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
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
              <TextField {...params}  placeholder="Search" label="Unit"/>
            )}
          />
        </Grid>
        <Grid item  xs={3}>
          <TextField size="small" fullWidth placeholder="Price/Unit" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="Order Qty" />
        </Grid>
        <Grid item  xs={3}>
          <TextField size="small" fullWidth placeholder="Price" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Discount Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
        <Autocomplete
            //multiple
            size="small"
            fullWidth
            id="checkboxes-tags-demo"
            options={disc}
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
              <TextField {...params}  placeholder="Search" label="Discount"/>
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="Discount Amount" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            GST Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="GST" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="SGST" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="CGST" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="IGST" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Payment Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
        <Autocomplete
            //multiple
            size="small"
            fullWidth
            id="checkboxes-tags-demo"
            options={paystat}
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
              <TextField {...params}  placeholder="Search" label="Payment Status"/>
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField size="small" fullWidth placeholder="Credit Period" />
        </Grid>
        <Grid item xs={4}>
          <TextField size="small" fullWidth placeholder="Invoice Amount" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Invoice Upload
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
          <TextField size="small" type="file" fullWidth placeholder="Invoice" />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "left" , marginTop:"60px"}}>
        <Button  variant="contained" size="small" sx={{ marginRight: 5 }}>
          Cancel
        </Button>
        <Button variant="outlined" size="small" sx={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button variant="contained">Save</Button>
      </Box>
    </>
  );
};

export default AddPurchase;
