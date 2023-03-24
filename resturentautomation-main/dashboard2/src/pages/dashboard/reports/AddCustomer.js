import React, { useEffect, useState,  } from "react";
import {
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  Divider,
  Typography,
  Checkbox,
  ListItemText
} from "@mui/material";
import { DatePicker } from "@material-ui/lab";
import axios from 'axios'
import { useLocation } from "react-router";
const AddCustomer = (props) => {
    
  
    //for duty type
    const ordertypes= [
      'Dine In',
      'Delivery',
      'Pickup',
    ];


    // Submit Customer Details 

    const [newdata, setNewData] = useState({
      custfname: "",
      custlname: "",
      email: "",
      phone: "",
      orderdetails:"",
      dob:null,
      doa:null,
      address:"",
      city:"",
      pincode:"",
      state:"",
      country:"",
      status: "",
    })


    const handleChange = (e) => {
      e.preventDefault();
      setNewData({ ...newdata, [e.target.name]: e.target.value });
      console.log(newdata);
    };  

    function handleDateChange(date) {
      setNewData({ ...newdata, dob:date }); // update the date in the state
    }
    function handleArrivalDateChange(date) {
      setNewData({ ...newdata, doa:date }); // update the date in the state
    }

  function submit(e){
    e.preventDefault();

    const fetchdata = async () => {
        const customerList = await axios.get('http://localhost:5000/customer/')
        
        const filteredRows = customerList.data.filter((row) => {
            return row
          });
        // setrowstoadd(filteredRows);
    };

    axios.post('http://localhost:5000/customer/add', {
        custfname: newdata.custfname,
        custlname: newdata.custlname,
        email: newdata.email,
        phone: newdata.phone,
        orderdetails:newdata.orderdetails,
        dob:newdata.dob,
        doa:newdata.doa,
        address:newdata.address,
        city:newdata.address,
        pincode:newdata.pincode,
        state:newdata.state,
        country:newdata.country,
        status: "Active",
    })
    .then(res => {console.log(res.data);fetchdata();})
    .catch((error) => {console.log(error);})
  }

  function editCustomerDetails(e){
    e.preventDefault();

    const fetchdata = async () => {
        const customerList = await axios.get('http://localhost:5000/customer/')
        
        const filteredRows = customerList.data.filter((row) => {
            return row
          });
        // setrowstoadd(filteredRows);
    };

    axios.post(`http://localhost:5000/customer/update/${location.state._id}`, {
        custfname: newdata.custfname,
        custlname: newdata.custlname,
        email: newdata.email,
        phone: newdata.phone,
        orderdetails:newdata.orderdetails,
        dob:newdata.dob,
        doa:newdata.doa,
        address:newdata.address,
        city:newdata.address,
        pincode:newdata.pincode,
        state:newdata.state,
        country:newdata.country,
        status: "Active",
    })
    .then(res => {console.log(res.data);fetchdata();})
    .catch((error) => {console.log(error);})
  }


  const location = useLocation();
  const status = location.state;
  const [edit, setEdit] = useState(false);

  useEffect(()=>{
    if(status){
      setNewData({
        custfname: status.custfname,
        custlname: status.custlname,
        email: status.email,
        phone: status.phone,
        orderdetails:status.orderdetails,
        dob:status.dob,
        doa:status.doa,
        address:status.address,
        city:status.address,
        pincode:status.pincode,
        state:status.state,
        country:status.country,
        status: "Active",
      });
      setEdit(true);
    }
  },[])

  return (
    <>
      {/* <Typography variant="h5" gutterBottom>
        Add Customer
      </Typography> 
      <Divider sx={{ width: "100%", mb: 2 }} />*/}
      <Grid
        container spacing={3}
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          width: 1000,
          float: "left",
          padding: "20px 20px",
          margin: "20px 0px",
          boxSizing: "border-box"
        }}
      >
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Customer Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item  xs={12}>
          <TextField  size="small"  sx={{ width: "30%" }} placeholder="Customer ID" />
        </Grid>
        <Grid item  xs={6}>
          <TextField  size="small"  fullWidth placeholder="First Name" name="custfname" value={newdata.custfname} onChange={handleChange} />
        </Grid>
        <Grid item  xs={6}>
          <TextField  size="small"  fullWidth placeholder="Last Name" name="custlname" value={newdata.custlname} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Contact Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Contact No" name="phone" value={newdata.phone} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Email" name="email" value={newdata.email} onChange={handleChange} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Order Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={4}>
          <Select 
            name="orderdetails"
            fullWidth 
            size="small"
            // multiple
            value={newdata.orderdetails}
            onChange={handleChange}
            renderValue={(selected) => selected}
          >
            {ordertypes.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={newdata.orderdetails.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Reminder Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            value={newdata.dob}
            name="dob"
            inputFormat="dd/MM/yyyy"
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField 
                  {...params}
                  fullWidth size="small" helperText={null} label="DOB"/>
              )}
          />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            name="doa"
            value={newdata.doa}
            inputFormat="dd/MM/yyyy"
            onChange={handleArrivalDateChange}
            renderInput={(params) => (
              <TextField 
                {...params}
                fullWidth size="small" helperText={null} label="DOA"/>
              )}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Address Details
          </Typography>
          <Divider sx={{ mb: 2, width: "100%" }} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" multiline minRows={4} fullWidth label="Address" name="address" value={newdata.address} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="PIN code"name="pincode" value={newdata.pincode} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="City" name="city" value={newdata.city} onChange={handleChange}/>
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="State"name="state" value={newdata.state} onChange={handleChange} />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Country"name="country" value={newdata.country} onChange={handleChange} />
        </Grid>
      </Grid>
      <Grid item container spacing={2} style={{ justifyContent: "left" }}>
              <Grid item>
                <Button variant="outlined">Reset</Button>
              </Grid>
              {
                edit ? 
                  <Grid item>
                    <Button variant="contained" onClick={editCustomerDetails}>Update</Button>
                  </Grid>
                  :
                  <Grid item>
                    <Button variant="contained" onClick={submit}>Save</Button>
                  </Grid>
              }
              
              
            </Grid>
    </>
  );
};
export default AddCustomer;
