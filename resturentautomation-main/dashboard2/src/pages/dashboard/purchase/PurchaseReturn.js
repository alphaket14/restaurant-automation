import React, {useState} from "react";
import {
  Button,
  Grid,
  Box,
  Typography,
  Divider,
  Autocomplete,
  Checkbox, 
  InputAdornment,
  TextField
} from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { CurrencyRupee } from "@mui/icons-material";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const PurchaseReturn = () => {
  const [invoiceDate,SetInvoiceDate] = useState(null);
  const [returnDate,SetReturnDate] = useState(null);
  const items = [];
  return (
    <>
      <Grid container spacing={3}
        style={{float:"left", marginLeft:"830px"}}
      >
        <Grid item xs={12}>
        <Button sx={{float:"left"}} variant="contained">Return Purchase</Button>
        </Grid>
      </Grid>
      <Grid 
        container 
        spacing={3}
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
        <Grid item xs={3}>
          <DatePicker
            value={invoiceDate}
            inputFormat="dd/MM/yyyy"
            label="Purchase Return Date"
            onChange={(newValue) => {
              SetInvoiceDate(newValue);
            }}
            renderInput={(params) => (
              <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
              )}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" type="number" fullWidth label="Supplier Code" />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" type="text" fullWidth label="Supplier Name" />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" type="text" fullWidth label="GST No." />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Inventory Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            //multiple
            size="small"
            fullWidth
            id="checkboxes-tags-demo"
            options={items}
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
            options={items}
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
          <TextField size="small" fullWidth placeholder="Order Return Qty" />
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
            Discount Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={3}>
          <TextField size="small" fullWidth placeholder="Discount Value" 
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
        <Grid item xs={4}>
          <TextField size="small" fullWidth placeholder="Purchase Return Amount" 
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <CurrencyRupee />
                </InputAdornment>
              ),
            }}
          />
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

export default PurchaseReturn;
