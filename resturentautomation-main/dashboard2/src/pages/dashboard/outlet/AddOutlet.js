import React, { useState, useCallback, useEffect } from "react";
import axios from 'axios';
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  InputLabel
} from "@mui/material";
import { DatePicker } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
import { useLocation } from "react-router";
import {
  makeStyles,
  Fade,
  Box,
  IconButton,
  Backdrop,
  Modal,
  Typography
} from "@material-ui/core";
import FormGroup from '@mui/material/FormGroup';
import Checkbox from '@mui/material/Checkbox';
import FormLabel from '@mui/material/FormLabel';
import { CurrencyRupee } from "@mui/icons-material";
import ListItemText from '@mui/material/ListItemText';
import { useDropzone } from "react-dropzone";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { v4 as uuidv4 } from 'uuid';
import { useSearchParams } from "react-router-dom";
import { blue } from '@mui/material/colors';

const Form1 = ({state,Handle, setFormNo})=>{
  return (
    <>
    
      <Grid container spacing={2} margin xs={11} sx={{mt:2}}item>
        <Grid  item xs={4}>
          <Grid item>Restaurant ID</Grid>
          <Grid item>
            <TextField name="Restaurant ID" placeholder="Restaurant ID"  fullWidth size="small" 
                  defaultValue={state.resid}
                  value={state.resid}
                  inputProps={
                    { readOnly: true, }
                  }/>
          </Grid>
        </Grid>
        <Grid  item xs={4}>
          <Grid item>Restaurant Name</Grid>
          <Grid item>
            <TextField name="resname" id="resname"  fullWidth size="small" value={state.resname}  onChange={(e)=>Handle(e)}  />
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} margin xs={11} sx={{mt:2}} item>
      
      <Grid item xs={4}>
          <Grid item>FSSAI No.</Grid>
          <Grid item>
            <TextField name="fssai" id="fssai"  fullWidth size="small" value={state.fssai} onChange={(e) => Handle(e)}/>
          </Grid>
      </Grid>
      <Grid  item xs={4}>            
          <Grid item>PAN No.</Grid>
          <Grid item>
            <TextField name="pan"  id="pan"   fullWidth size="small" value={state.pan} onChange={(e) => Handle(e)}/>
          </Grid>
        </Grid>
        <Grid  item xs={4}>
          <Grid item>GST No.</Grid>
          <Grid item>
            <TextField name="gst" id="gst"  fullWidth size="small" value={state.gst} onChange={(e) => Handle(e)} />
          </Grid>
        </Grid>
        
      </Grid>
      <Grid container spacing={2} margin xs={11} sx={{mt:2}} item>
      <Grid  item xs={4}>
                <Grid item>Restaurant Logo</Grid>
                <Grid item>
                  <TextField type="file" name="photograph" fullWidth size="small" />
                </Grid>
        </Grid>
        <Grid  item xs={4}>
                <Grid item>Restaurant Cover</Grid>
                <Grid item>
                  <TextField type="file" name="photograph" fullWidth size="small" />
                </Grid>
        </Grid>
        </Grid>
  
    <Grid container justifyContent="flex-end" style={{marginTop:"10px"}}>
        <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
    </Grid>
    </>
  )
  }
  
  const Form2 = ({state,Handle, setFormNo, HandleMultipleChange})=>{
  //for department
  const names= [
    'Italian',
      'Mughlai',
      'Tandoori',
      'Chinese',
      'American',
      'South Indian',
  ];
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  
  //for restaurant type
  const restauranttype= [
    'Pure Veg',
    'Non Veg',
  ];
  const [restaurantType, setRestaurantType] = React.useState([]);
  const handleRestaurantType = (event) => {
    const {
      target: { value },
    } = event;
    setRestaurantType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );

  };
  
  //for table delivery
  const tabledelivery= [
    'Yes',
    'No',
  ];
  const [tabledeliveryStatus, setTableDeliveryStatus] = React.useState([]);
  const handleTableDeliveryStatus = (event) => {
    const {
      target: { value },
    } = event;
    setTableDeliveryStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //for Partner delivery
  const partnerdelivery= [
    'Yes',
    'No',
  ];
  const [partnerdeliveryStatus, setPartnerDeliveryStatus] = React.useState([]);
  const handlePartnerDeliveryStatus = (event) => {
    const {
      target: { value },
    } = event;
    setPartnerDeliveryStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //for outlet status
  const outletstatus= [
    'Active',
    'Inactive',
  ];
  const [outletStatus, setOutletStatus] = React.useState([]);
  const handleOutletStatus = (event) => {
    const {
      target: { value },
    } = event;
    setOutletStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //for Online status
  const onlinestatus= [
    'Yes',
    'No',
  ];
  const [onlineStatus, setOnlineStatus] = React.useState([]);
  const handleOnlineStatus = (event) => {
    const {
      target: { value },
    } = event;
    setOnlineStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //for Currency Type
  const currencytype= [
    'USD', 
    'INR', 
    'EURO',
    'GBP', 
    'AUD', 
    'CHF', 
    'ALL', 
  ];
  const [currencyType, setCurrencyType] = React.useState([]);
  const handleCurrencyType = (event) => {
    const {
      target: { value },
    } = event;
    setCurrencyType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  
  //start time
  const [startTime,setStartTime] = useState("");
  
  //end time  
  const [endTime,setEndTime] = useState("");
  
  //select working Days
  const days=["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday","Sunday"]
  const [status,setStatus] = useState([]);
  
  const handleWorkingDays = (event) =>{
    const {
      target: { value },
    } = event;
    let newValue = value
    // console.log(...status)
    setStatus(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : [...value,newValue],
    );
    console.log(status)
  }
  
  return (
  <>
  
  <Grid item container spacing={2} margin xs={11} sx={{mt:2}}>
  
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom>
              Restaurant Type
            </Typography>
            <Select 
              fullWidth 
              size="small"
              multiple
              name="restype"
              value={state.restype}
              onChange={(e)=>HandleMultipleChange(e)}
              //input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {restauranttype.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.restype.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid>        
          <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Table Booking
                </Typography>
                <Select 
                  sx={{width:"100%"}}
                  size="small"
                  id="tablebooking"
                  name="tablebooking"
                  value={state.tablebooking}
                  onChange={(e)=>Handle(e)}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected}
            >
              {tabledelivery.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.tablebooking.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid> 
          <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Partner Delivery
                </Typography>
                <Select 
                  sx={{width:"100%"}}
                  size="small"
                  name="partnerdelivery"
                  value={state.partnerdelivery}
                  onChange={(e)=>{Handle(e)}}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected}
            >
              {partnerdelivery.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.partnerdelivery.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid> 
  </Grid>
  
  <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
  
          <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Outlet Status
                </Typography>
                <Select 
                  sx={{width:"100%"}}
                  size="small"
                  name="outletstatus"
                  value={state.outletstatus}
                  onChange={(e)=>Handle(e)}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected}
            >
              {outletstatus.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.outletstatus.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid> 
          <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Online Delivery
                </Typography>
                <Select 
                  sx={{width:"100%"}}
                  size="small"
                  name="onlinedelivery"
              value={state.onlinedelivery}
              onChange={(e)=>Handle(e)}
              //input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected}
            >
              {onlinestatus.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.onlinedelivery.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid> 
          <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Currency
                </Typography>
                <Select 
                  sx={{width:"100%"}}
                  size="small"
                  // multiple
                  name="currencytype"
                  value={state.currencytype}
                  onChange={(e)=>Handle(e)}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected}
            >
              {currencytype.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.currencytype.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            
            </Select>
          </Grid> 
          
  </Grid>
  
  <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom>
              Cuisines
            </Typography>
            <Select 
              fullWidth 
              size="small"
              multiple
              name="cuisines"
              value={state.cuisines}
              onChange={(e)=>HandleMultipleChange(e)}
              //input={<OutlinedInput label="Tag" />}
              renderValue={(selected) => selected.join(', ')}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={state.cuisines.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </Grid>        
          <Grid item xs={4}>
            <Typography variant="body1" gutterBottom>
              Average Cost for 2
            </Typography>
            <TextField
              fullWidth
              size="small"
              type="text"
              
              placeholder=""
              onChange={(e) => Handle(e)}
              id="avgcost"
              value={state.avgcost}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {state.currency}
                  </InputAdornment>
                )
              }}
            />
          </Grid> 
          <Grid item xs={2}>    
          <Grid
              item
                
            >
              Start Time
            </Grid>
            <Grid item >
              <TextField onChange={(e)=>{Handle(e)}} name="starttime" value={state.starttime}  size="small" type="time" />
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Grid
              item
              
            >
              End Time
            </Grid>
            <Grid item  >
              <TextField onChange={(e)=>{Handle(e)}} name="endtime" value={state.endtime}  size="small" type="time" />
            </Grid> 
          </Grid>   
  </Grid>
  
  <Grid item container sx={{ mb: 2 }} style={{marginTop:"20px"}}>
            <Grid
              item
              xs={3}
              align="right"
              sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
            >
              Select working days
            </Grid>
            <Grid item xs={6}>
              <FormControl>
                  <FormGroup row>
                  {days.map((name) => ( 
                     <FormControlLabel control={<Checkbox />} name={name} value={name} label={name} labelPlacement="end" />
                  ))}
                  </FormGroup>
              </FormControl>
            </Grid>
          </Grid>
  
  
            <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
            <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
            <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
          </Grid>
            </>
  )
  }
  
  const Form3 = ({state,Handle, setFormNo})=>{
  const names= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const [personName, setPersonName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for designation
  const desigs= [
    'Owner',
    'Waiter',
    'Counter Server',
    'Manager',
    'Jainator',
    'Chef',
  ];
  const [desigName, setDesigName] = React.useState([]);
  const handleDesigChange = (event) => {
    const {
      target: { value },
    } = event;
    setDesigName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for supervisor name
  const sup_names= [
    'Dorathy McClain',
  ];
  const [supName, setSupName] = React.useState([]);
  const handleSupChange = (event) => {
    const {
      target: { value },
    } = event;
    setSupName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const selections = ["Zone 1", "Zone 2"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
      
      <Grid item container spacing={2}>
              <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Restaurant Address
                 </Typography>
                 <TextField
                   fullWidth
                   size="small"
                   type="text"
                   multiline
                   rows={3}
                   maxRows={5}
                   onChange={(e) => Handle(e)}
                   id="address"
                   name="address"
                   value={state.address}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Locality
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="locality"
                   name="locality"
                   value={state.locality}
                 />
               </Grid>
               
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Pin Code
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="pincode"
                   name="pincode"
                   value={state.pincode}
                 />
               </Grid>
               
      </Grid>
      <Grid item container spacing={2}>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   City
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="city"
                   name="city"
                   value={state.city}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   State
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="state"
                   name="state"
                   value={state.state}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Country
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="country"
                   name="country"
                   value={state.country}
                 />
               </Grid>
      </Grid>
  
      <Grid item container spacing={2}>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Zone
                 </Typography>
                 <FormControl
                      sx={{ mr: 1, float: "left", width: "100%", mb: 2 }}
                      size="small"
                    >
                      {/* <InputLabel id="select-type">Zone</InputLabel> */}
                      <Select
                        id="zone"
                        value={state.zone}
                        name="zone"
                        onChange={(e)=>{Handle(e)}}
                        renderValue={(selected) => selected}
                      >
                        {selections.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={state.zone.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Latitude
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="latitude"
                   name="latitude"
                   value={state.latitude}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Longitude
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="longitude"
                   name="longitude"
                   value={state.longitude}
                 />
               </Grid>
             </Grid>
  
     
      <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
        <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
        <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
      </Grid>
    </Grid>
  )
  }
  const Form4 = ({state,Handle, setFormNo})=>{
  //for date
  const [tarik, setTarik] = React.useState(new Date());
  const genders= [
    'Male',
    'Female',
  ];
  const [supName, setSupName] = React.useState([]);
  const handleSupChange = (event) => {
    const {
      target: { value },
    } = event;
    setSupName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const maritals= [
    'Married',
    'Unmarried',
  ];
  const [marName, setMarName] = React.useState([]);
  const handleMarChange = (event) => {
    const {
      target: { value },
    } = event;
    setMarName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
  
         <Grid item container spacing={2}>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Mobile No. 1
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text"  
                   onChange={(e) => Handle(e)}
                   id="con1"
                   name="con1"
                   value={state.con1}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Mobile No. 2
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text"  
                   onChange={(e) => Handle(e)}
                   id="con2"
                   name="con2"
                   value={state.con2}
                 />
               </Grid>
               
          </Grid>
          <Grid item container spacing={2}>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Landline No. 1
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   name="con3"
                   value={state.con3}
                 />
               </Grid>
               <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Landline No. 2
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="landline"
                   name="landline"
                   value={state.landline}
                 />
               </Grid>
              
          </Grid>
          <Grid item container spacing={2}>
              <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Email Id.
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="mail"
                   name="mail"
                   value={state.mail}
                 />
              </Grid>
              
          </Grid>
          <Grid item container spacing={2}>
          <Grid item xs={4}>
                 <Typography variant="body1" gutterBottom>
                   Website Link
                 </Typography>
                 <TextField 
                   fullWidth 
                   size="small" 
                   type="text" 
                   onChange={(e) => Handle(e)}
                   id="weblink"
                   name="weblink"
                   value={state.weblink}
                 />
              </Grid>
          </Grid>
  
  
  
      <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
        <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
        <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
      </Grid>
    </Grid>
  )
  }
  
  const Form5 = ({state,Handle, setFormNo, submit, status, editsubmit})=>{
  const createData = (title) => {
    return { title};
  };
  const data = [
    createData("Pan Card", null),
    createData("Aadhar Card", null),
    createData("Highest Education Certificate", null)
  ];
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
      backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
    }
  }));
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
    const [rows, setRows] = useState(data);
    const classes = useStyles();
    const openModalHandler = () => {
      setOpenModal(true);
    };
    const closeModalHandler = () => {
      setOpenModal(false);
    };
    const addPosition = () =>{
      const newPosition = createData(title)
      setRows(prev => [...prev,newPosition])
      setTitle("")
      closeModalHandler()
    }
    const deletePosition = (index) =>{
      if(window.confirm("Are you sure you want to delete this item?")){
        let newRows = rows.filter((row,i) =>{
          return index !== i;
        })
        setRows(newRows)
      }
  
    }
  return (
    <>
      {/* <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal} sx={{ width: '75%' }}>
            <Typography variant="h5" align="center">
              Document
            </Typography>
            <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
              <Grid item container >
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Title* :</Typography>
                </Grid>
                <Grid item xs={13} fullWidth>
                  <TextField fullWidth size="small"
                    value={title}
                    onChange={e => setTitle(e.target.value)} />
                </Grid>
              </Grid>
  
              <Grid item container justifyContent="flex-end">
                <Grid item  >
                  <Button onClick={addPosition}  variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>
  
  
            </Grid>
          </Box>
        </Fade>
    </Modal> */}
  
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
            <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  First Name
                </Typography>
                <TextField 
                  fullWidth 
                  size="small" 
                  type="text" 
                  
                  onChange={(e) => Handle(e)}
                  id="fname"
                  name="fname"
                  value={state.fname}
                />
            </Grid>
            <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                 Last Name
                </Typography>
                <TextField 
                  fullWidth 
                  size="small" 
                  type="text" 
                   
                  onChange={(e) => Handle(e)}
                  id="lname"
                  name="lname"
                  value={state.lname}
                />
              </Grid>  
    </Grid>
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
    <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Contact No.
                </Typography>
                <TextField 
                  fullWidth 
                  size="small" 
                  type="text" 
                   
                  onChange={(e) => Handle(e)}
                  id="phone"
                  name="phone"
                  value={state.phone}
                />
              </Grid>
    </Grid>
           
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
              <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Email
                </Typography>
                <TextField 
                  fullWidth 
                  size="small" 
                  type="text"                  
                  onChange={(e) => Handle(e)}
                  id="email"
                  name="email"
                  value={state.email}
                />
              </Grid>
             
             
    </Grid>
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
    <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Password
                </Typography>
                <TextField 
                  fullWidth 
                  size="small" 
                  type="text"      
                  onChange={(e) => Handle(e)}
                  id="password"
                  name="password"
                  value={state.password}
                />
    </Grid>
    </Grid>
    <Grid container spacing={2} margin xs={11} sx={{mt:2}}>
    <Grid item xs={4}>
                <Typography variant="body1" gutterBottom>
                  Confirm Password
                </Typography>
                <TextField fullWidth size="small" type="text"  />
              </Grid>
    </Grid>
  
  
      <Grid item container justifyContent="flex-end" columnGap={2} >
      {/* onClick={openModalHandler} */}
        <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
        {
          status?
          <Button variant="contained" onClick={(e) => editsubmit(e)} >Update</Button>
          :
        <Button variant="contained" onClick={(e) => submit(e)} >Save</Button>
        }
        
        {/* <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button> */}
      </Grid>
  </>
  )
  }


const ShowForm = ({state,Handle, setFormNo, formNo, submit, HandleMultipleChange,status,editsubmit})=>{
  switch(formNo){
    case 1:
      return <Form1 state={state} Handle={Handle} setFormNo={setFormNo}/>
    case 2:
      return <Form2 state={state} Handle={Handle} setFormNo={setFormNo} HandleMultipleChange={HandleMultipleChange} />
    case 3:
      return <Form3 state={state} Handle={Handle} setFormNo={setFormNo}/>
    case 4:
      return <Form4 state={state} Handle={Handle} setFormNo={setFormNo}/>
    case 5:
      return <Form5 state={state} Handle={Handle} setFormNo={setFormNo} submit={submit} status={status} editsubmit={editsubmit} /> 
    default:
      return <Form1 state={state} Handle={Handle} setFormNo={setFormNo}/>

  }

}


const AddOutlet = () => {
  const colorBlue = blue[900];
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
  
  const location = useLocation();
  

  const [SearchParams, setSearchParams] = useSearchParams();
 

  const [formNo, setFormNo] =  useState(SearchParams.get('form_no'));

  //Tabs method defination
  const fields = ["About", "Restaurant Details","Address","Contact Details","Account Details"];
  const [state, setState] = useState({
    resid: uuidv4(),
    resname:"",
    pan:"",
    gst: null,
    fssai: null,
    restype:[],
    tablebooking:"",
    partnerdelivery:"",
    outletstatus:"",
    onlinedelivery:"",
    currencytype:"",
    cuisines:[],
    starttime:"",
    endtime:"",
    city:"",
    pincode: null,
    address:"",
    locality:"",
    zone:"",
    state: null,
    country: null,
    latitude: null,
    longitude: null,
    con1: null,
    con2: null,
    con3: null,
    landline: null,
    mail:"",
    weblink: "",
    avgcost: null,
    fname: "",
    lname: "",
    phone: null,
    email: "",
    password: "",
    currency: <CurrencyRupee fontSize="small" />,
  });

  const [status, setStatus] = useState(false);

  useEffect(() => {
    {
      SearchParams.get('form_no') ?
      setFormNo(SearchParams.get('form_no'))
      :
      setFormNo(1)
    }
    console.log(SearchParams.get('form_no'));
    console.log(formNo);

    if(location.state !== undefined &&  location.state !== null){
      setState({
        resname:location.state.resname,
        pan:location.state.pan,
        gst: location.state.gst,
        fssai: location.state.fssai,
        restype:location.state.restype,
        tablebooking:location.state.tablebooking,
        partnerdelivery:location.state.partnerdelivery,
        outletstatus:location.state.outletstatus,
        onlinedelivery:location.state.onlinedelivery,
        currencytype:location.state.currencytype,
        cuisines:location.state.cuisines,
        starttime:location.state.starttime,
        endtime:location.state.endtime,
        city:location.state.city,
        pincode: location.state.pincode,
        address:location.state.address,
        locality:location.state.locality,
        zone:location.state.zone,
        state: location.state.state,
        country: location.state.country,
        latitude: location.state.latitude,
        longitude: location.state.longitude,
        con1: location.state.con1,
        con2: location.state.con2,
        con3: location.state.con3,
        landline: location.state.landline,
        mail:location.state.mail,
        weblink: location.state.weblink,
        avgcost: location.state.avgcost,
        fname: location.state.fname,
        lname: location.state.lname,
        phone: location.state.phone,
        email: location.state.email,
        password: location.state.password,
      })
      setStatus(true);
    }
   
  },[]);

  const Handle = (e) =>{
    // e.preventDefault();
    // const newState = {...state}
    // newState[e.target.id] = e.target.value
    // console.log(state)
    // setState(newState)
    // console.log(e.target.value)
    e.preventDefault();
      setState({ ...state, [e.target.name]: e.target.value });
      console.log(state);
  }

  const HandleMultipleChange = (event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    const newOrderType = typeof value === "string" ? value.split(",") : value 
    setState({ ...state, [event.target.name]: newOrderType });
    console.log(state);
    // setValue(typeof value === "string" ? value.split(",") : value);
  };


  // const handleWorkingDaysChange = (event) => {
  //   const { name, checked } = event.target;
  //   // setWorkingDays((prevState) => ({
  //   //   ...prevState,
  //   //   [name]: checked
  //   // }));
  //   setState({...state, [name]: checked})
  // };


  function submit(e){
    e.preventDefault();
    const newState = {...state}
    // axios.post('https://doubtful-tuna-leotard.cyclic.app/outlet/add', {
    axios.post('http://localhost:5000/outlet/add', {
      resname: newState.resname,
      pan: newState.pan,
      gst: newState.gst,
      fssai: newState.fssai,
      restype: newState.restype,
      tablebooking:newState.tablebooking,
      partnerdelivery:newState.partnerdelivery,
      outletstatus:newState.outletstatus,
      onlinedelivery:newState.onlinedelivery,
      currencytype:newState.currencytype,
      cuisines:newState.cuisines,
      starttime:newState.starttime,
      endtime:newState.endtime,
      city: newState.city,
      pincode: newState.pincode,
      address: newState.address,
      locality: newState.locality,
      zone: newState.zone,
      state: newState.state,
      country: newState.country,
      latitude: newState.latitude,
      longitude: newState.longitude,
      con1: newState.con1,
      con2: newState.con2,
      con3: newState.con3,
      landline: newState.landline,
      mail: newState.mail,
      weblink: newState.weblink,
      avgcost: newState.avgcost,
      fname: newState.fname,
      lname: newState.lname,
      phone: newState.phone,
      email: newState.email,
      password: newState.password,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setState({})

  }

  function editsubmit(e){
    e.preventDefault();
    const newState = {...state}
    // axios.post('https://doubtful-tuna-leotard.cyclic.app/outlet/add', {
    axios.post(`http://localhost:5000/outlet/update/${location.state._id}`, {
      resname: newState.resname,
      pan: newState.pan,
      gst: newState.gst,
      fssai: newState.fssai,
      restype: newState.restype,
      tablebooking:newState.tablebooking,
      partnerdelivery:newState.partnerdelivery,
      outletstatus:newState.outletstatus,
      onlinedelivery:newState.onlinedelivery,
      currencytype:newState.currencytype,
      cuisines:newState.cuisines,
      starttime:newState.starttime,
      endtime:newState.endtime,
      city: newState.city,
      pincode: newState.pincode,
      address: newState.address,
      locality: newState.locality,
      zone: newState.zone,
      state: newState.state,
      country: newState.country,
      latitude: newState.latitude,
      longitude: newState.longitude,
      con1: newState.con1,
      con2: newState.con2,
      con3: newState.con3,
      landline: newState.landline,
      mail: newState.mail,
      weblink: newState.weblink,
      avgcost: newState.avgcost,
      fname: newState.fname,
      lname: newState.lname,
      phone: newState.phone,
      email: newState.email,
      password: newState.password,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setState({})

  }
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };





  return (
    <>
    <Grid container columnGap={1} rowGap={1} style={{color: "white" }}>
        {fields.map((field, i)=>{
          return(
            <Grid item onClick={()=>setFormNo(i+1)}
            style={{
              cursor:"pointer",
              padding: 10,
              borderRadius: "5px 5px 0 0",
              backgroundColor:  formNo === i+1 ? "green": `${colorBlue}`,
              textAlign: "center",
              minWidth: "129px"
            }}  
          >
            {field}
          </Grid>
          )
        })}   
      </Grid>
      <ShowForm state={state} Handle={Handle} setFormNo={setFormNo} formNo={formNo} submit={submit} HandleMultipleChange={HandleMultipleChange} status={status} editsubmit={editsubmit} />
     
      
    </>
  );
};
export default AddOutlet;
