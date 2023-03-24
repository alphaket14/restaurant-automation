import React, { useState } from "react";
// import Fullscreen from "../../components/Fullscreen";
import RefreshIcon from '@mui/icons-material/Refresh';
import {
  AppBar,
  Button,
  Typography,
  IconButton,
  Grid,
  Box,
  makeStyles,
  Backdrop,
  Modal,
  Fade,
  Select,
  Checkbox,
  TextField,
  MenuItem
} from "@material-ui/core";
import {
  Drawer,
  ListItemText,
  Tooltip,
} from "@mui/material";
import {
  Menu,
  Notifications,
  PowerSettingsNew,
  TableBar,
  PersonOutline,
  People,
  Restaurant,
  LocalBar,
  TrendingUp,
  DateRange
} from "@mui/icons-material";
// import { DatePicker } from "@material-ui/lab";
// import SupervisedUserCircleIcon from "@mui/icons-material/SupervisedUserCircle";
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { NavLink } from "react-router-dom";
import SideDrawer from "../dashboard/SideDrawer";
// import { set } from "lodash";
const useStyle = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    width: 500,
    boxShadow: 24,
    height: 600,
    overflow: "hidden",
    overflowY: "scroll",
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  waiter:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    width: 500,
    boxShadow: 24,
    height: 200,
    overflow: "hidden",
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  active: {
    color: "#00AB55"
  }
}));

const ManageOrderNavbar = ({setwaiterData, setclientData, waiterData, clientData, tableCapacity, setTableCapacity}) => {
  const classes = useStyle();
  // const [dob, SetDob] = useState(null);
  // const [doa, SetDoa] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openCapacityModal, setOpenCapacityModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);

  //Waiters
  const waiterlist = [
    'Waiter 1',
    'Waiter 2',
    'Waiter 3'
  ] 

  const [waiter, setWaiter] = useState("");
  const [clientsData, setclientsData] = useState({
    fname:"",
    lname:"",
    contact: null,
    email:"",
    order_type:"",
    tableCapacity:null,
    instruction:"",
    address:"",
    pincode:"",
    city:"",
    state:"",
    country:"",
  })

 
  const handleWaiterChange = (event) => {
    const {
      target: { value },
    } = event;
    setWaiter(
      // On autofill we get a stringified value.
       value
    );
    setwaiterData(waiter);
    console.log(waiter);
  };

  const Handle = (e) =>{
    e.preventDefault();
    console.log(e.target.value)
    const newState = {...clientsData}
    newState[e.target.name] = e.target.value
    console.log(clientsData)
    setclientsData(newState)
    console.log(clientsData)
    setclientData(newState)
    console.log(e.target.value)
  }

  const WaiterData = () =>{
    setWaiter(waiterData)
  }

  const [capacity, setCapacity] = useState("")

  const CapacityData = () =>{
    setCapacity(tableCapacity)
  }

  const CustomerData = () =>{
    console.log(clientData.instruction)
      setclientsData({
        fname: clientData.fname,
        lname:clientData.lname,
        contact: clientData.contact,
        email:clientData.email,
        order_type:clientData.order_type,
        address:clientData.address,
        tableCapacity: clientData.tableCapacity,
        instruction:clientData.instruction,
        pincode:clientData.pincode,
        city:clientData.city,
        state:clientData.state,
        country:clientData.country,
      })
  }


  //for duty type
  const ordertypes= [
    'Dine In',
    'Delivery',
    'Pickup',
  ];
  // const [orderName, setOrderName] = React.useState("");
  const handleOrderChange = (e) => {
    e.preventDefault();
    const {
      target: { value },
    } = e;
    console.log(e.target.value)
    const newState = {...clientsData}
    newState.order_type = {value}
    console.log(clientsData)
    setclientsData(newState)
    console.log(clientsData)
    setclientData(newState)
    console.log(e.target.value)
  };

  const handleCapacityChange = (e) =>{
    setCapacity(e.target.value);
    setTableCapacity(e.target.value);
  }



  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openCapacityModalHandler = () => {
    setOpenCapacityModal(true);
  };

  const closeCapacityModalHandler = () => {
    setOpenCapacityModal(false);
  };
  const openModalHandler2 = () => {
    setOpenModal2(true);
  };

  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };
  const handleChange = (event) => {
    setWaiter(event.target.value);
  };

  const calendar = (
    <iframe
      src="https://calendar.google.com/calendar/embed?src=08r0bvu8ibscf35g3fne0uqkhs%40group.calendar.google.com&ctz=Asia%2FKolkata"
      style={{ border: 0 }}
      width="800"
      height="600"
      frameBorder="0"
      scrolling="no"
    ></iframe>
  );

  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.waiter}>
            <Typography variant="h5" mb={2}>
              Assign Waiter  <Button onClick={WaiterData} ><RefreshIcon/></Button>
            </Typography>
           
            {/* <Select fullWidth id="demo-simple-select" value={waiter} onChange={()=>setbillData({waiter: waiter })}>
              <MenuItem value={"Waiter 1"}>Waiter 1</MenuItem>
              <MenuItem value={"Waiter 2"}>Waiter 2</MenuItem>
              <MenuItem value={"Waiter 3"}>Waiter 3</MenuItem>
            </Select> */}
             <Select 
                    name="waiterName"
                    fullWidth 
                    size="small"
                    // multiple
                    value={waiter}
                    onChange={handleWaiterChange}
                    renderValue={(selected) => selected}
                  >
                    {waiterlist.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={waiter.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={()=>{setwaiterData(waiter); closeModalHandler()}}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      <Modal
        open={openCapacityModal}
        onClose={closeCapacityModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openCapacityModal}>
          <Box className={classes.modal}>
            <Typography variant="h5" mb={2}>
              Add No. of People <Button onClick={CapacityData} ><RefreshIcon/></Button>
            </Typography>
           
            <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">No. of People</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "capacity"
                    name = "capacity"
                    value={capacity}
                    onChange={(e) => {handleCapacityChange(e)}}
                  />
                </Grid>
              </Grid>
            
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeCapacityModalHandler}>
                Save
              </Button>
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
              Add Customer  <Button onClick={CustomerData} ><RefreshIcon/></Button>
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
                  <Typography variant="subtitle2">Customet ID :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">First Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "fname"
                    name = "fname"
                    value={clientsData.fname}
                    onChange={(e) => Handle(e)}
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Last Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "lname"
                    name = "lname"
                    value={clientsData.lname}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Contact No :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "contact"
                    name = "contact"
                    value={clientsData.contact}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Email :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "email"
                    name = "email"
                    value={clientsData.email}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Order Type :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select 
                  
                    fullWidth 
                    size="small"
                    // multiple
                    // id = "order_type"  
                    name = "order_type"
                    value={clientsData.order_type}
                    
                    onChange={(e)=>{Handle(e)}}
                    // renderValue={(selected) => selected.join(', ')}
                  >
                    {ordertypes.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={clientsData.order_type.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              {/* <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">DOB :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <DatePicker
                    value={dob}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                      SetDob(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField 
                        {...params}
                        fullWidth size="small" helperText={null}/>
                    )}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">DOA :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                    value={clientsData.doa}
                    id="doa"
                    name="doa"
                    inputFormat="dd/MM/yyyy"
                    onChange={(e, newValue) => {
                      SetDoa(newValue);
                      Handle(e)
                    }}
                    renderInput={(params) => (
                      <TextField 
                        {...params}
                        fullWidth size="small" helperText={null}/>
                    )}
                  />
                </Grid>
              </Grid> */}
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Address :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField id = "address"
                    name = "address"
                    value={clientsData.address}
                    onChange={(e) => Handle(e)} size="small" type="text" multiline minRows={4} fullWidth />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">No. of People :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField id = "tableCapacity"
                    name = "tableCapacity"
                    value={clientsData.tableCapacity}
                    onChange={(e) => Handle(e)} size="small" type="text"  fullWidth />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Instructions :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField id = "instruction"
                    name = "instruction"
                    value={clientsData.instruction}
                    onChange={(e) => Handle(e)} size="small" type="text" multiline minRows={4} fullWidth />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">PIN Code :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "pincode"
                    name = "pincode"
                    value={clientsData.pincode}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">City :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "city"
                    name = "city"
                    value={clientsData.city}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">State :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "state"
                    name = "state"
                    value={clientsData.state}
                    onChange={(e) => Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Country :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "country"
                    name = "country"
                    value={clientsData.country}
                    onChange={(e)=> Handle(e)}
                    //value={categoryName}
                    //onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                  </Button>*/}
                  <Button
                    onClick={closeModalHandler2}
                    variant="contained"
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
      <Drawer anchor="left" open={drawer} onClose={() => setDrawer(false)}
      >
        <SideDrawer/>
        {/*<Box>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton sx={{ width: 250 }}>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
            </Box>*/}
      </Drawer>
      <Grid
        container
        sx={{
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: -0,
          zIndex: 1000
        }}
      >
        <AppBar
          position="sticky"
          sx={{
            boxShadow: "none",
            padding: 1,
            background: "transparent",
            height: 65,
            backdropFilter: "blur(15px)",
            borderBottom: "1px solid #000"
          }}
        >
          <Grid container item>
            <Grid
              item
              container
              xs={4}
              sm={4}
              md={4}
              lg={6}
              style={{ display: "flex", alignItems: "center", justifyContent: "flex-start" }}
              spacing={2}
            >
              <Grid item>
                <Typography variant="h5" component="span" color="primary">
                  LOGO
                </Typography>
              </Grid>
              <Grid item>
                <IconButton color="primary" onClick={() => setDrawer(true)}>
                  <Menu />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component={NavLink} to="/dashboard/manage/order-list">
                  <TrendingUp />
                </IconButton>
              </Grid>
              <Grid item>
                <IconButton component={NavLink} to="/dashboard/calendar">
                  <DateRange />
                </IconButton>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={8}
              sm={8}
              md={8}
              lg={6}
              style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}
              // spacing={2}
            >
              <Grid item xs={1}>
                <IconButton
                  component={NavLink}
                  to="/manageorder/pos-invoice"
                  activeClassName={classes.active}
                >
                  <Typography variant="body2">POS</Typography>
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="assign waiter">
                  <IconButton onClick={openModalHandler} activeClassName={classes.active}>
                    <RoomServiceIcon/>
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="table view">
                  <IconButton
                    component={NavLink}
                    to="/manageorder/table-view"
                    activeClassName={classes.active}
                  >
                    <TableBar />
                  </IconButton>
                </Tooltip>
              </Grid>

              <Grid item xs={1}>
                <Tooltip title="kitchen panel">
                  <IconButton
                    component={NavLink}
                    to="/manageorder/kitchen-panel"
                    activeClassName={classes.active}
                  >
                    <Restaurant />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
                <Tooltip title="bar panel">
                  <IconButton
                    component={NavLink}
                    to="/manageorder/bar-panel"
                    activeClassName={classes.active}
                  >
                    <LocalBar />
                  </IconButton>
                </Tooltip>
              </Grid>
              <Grid item xs={1}>
              <Tooltip title="Customer Details">
                <IconButton onClick={openModalHandler2}>
                  <PersonOutline />
                </IconButton>
              </Tooltip>
              </Grid>
              {/* <Grid item xs={1}>
              <Tooltip title="No. of People">
                <IconButton onClick={openCapacityModalHandler} activeClassName={classes.active}>
                  <People />
                </IconButton>
              </Tooltip>  
              </Grid> */}
              <Grid item xs={1}>
                <IconButton>
                  <Notifications />
                </IconButton>
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <PowerSettingsNew />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </AppBar>
      </Grid>
    </>
  );
};
export default ManageOrderNavbar;
