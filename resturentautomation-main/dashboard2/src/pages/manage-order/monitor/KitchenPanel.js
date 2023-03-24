import React, { useState, useEffect } from "react";

// import Scrollbar from "../../../components/Scrollbar";

import { Paper, Grid,Divider,CardContent,List,ListItem,ListItemText, Box, Typography, styled, Button } from "@mui/material";
import { AppBar, makeStyles, Tab, Tabs } from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff"
  },
}));

const KitchenPanel = (props) => {

  const [section, setSection] = React.useState("New");

  const sections = ["New","Preparing","Ready"];

  const onSectionChangeHandler = (event, newValue) => {
    setSection(newValue);
    if(newValue === "New"){
      const fetchOrders = async () =>{
        const orderStatus = await axios.get(`https://vast-pink-meerkat-suit.cyclic.app/order/new`);
        setNewOrder(orderStatus)
      }
      fetchOrders();
    }
    if(newValue === "Preparing"){
      const fetchOrders = async () =>{
        const orderStatus = await axios.get(`https://vast-pink-meerkat-suit.cyclic.app/order/prepare`);
        setNewOrder(orderStatus)
      }
      fetchOrders();
    }
    if(newValue === "Ready"){
      const fetchOrders = async () =>{
        const orderStatus = await axios.get(`https://vast-pink-meerkat-suit.cyclic.app/order/ready`);
        setNewOrder(orderStatus)
      }
      fetchOrders();
    }
   
    
  };

  const classes = useStyles()

  const [newOrder, setNewOrder] = useState("")

  useEffect(() => {
    const fetchdata = async () =>{
      const new_order = await axios.get("https://vast-pink-meerkat-suit.cyclic.app/order/new");
      setNewOrder(new_order);
      console.log("This is Data"+new_order)
    }
    fetchdata()
  }, []);


  const setToPreparing = (item) =>{
      axios.post(`https://vast-pink-meerkat-suit.cyclic.app/order/update/${item._id}`,
      {
        ...item, status:"Preparing"
      }
      ).then(()=>{alert("Ordered Sent To Preparing")}).catch((error)=>alert(error));
  }
  const setToReady = (item) =>{
      axios.post(`https://vast-pink-meerkat-suit.cyclic.app/order/update/${item._id}`,
      {
        ...item, status:"Ready"
      }
      ).then(()=>{alert("Ordered Sent To Ready")}).catch((error)=>alert(error));
  }

  const sendtoPaymentDue = async(table_data) =>{
    const table = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table');
  
    axios.post(`https://vast-pink-meerkat-suit.cyclic.app/order/update/${table_data._id}`,
      {
        ...table_data, status:"Payment Due"
      }
      ).then(()=>{alert("Order has been served. Go to Payment Due to pay the bill")}).catch((error)=>alert(error));

    console.log(table)
    const searchIndex = table.data.findIndex((item) => item.tableNo === table_data.tableNo  && item.section === table_data.section)
    const tableId = table.data[searchIndex]._id;
    console.log("This is the ID ===>" + tableId)
    axios.post(`https://vast-pink-meerkat-suit.cyclic.app/table/update/${tableId}`, {
      section: table_data.section,
      tableNo: table_data.tableNo,
      capacity: table_data.tableCapacity,
      status:  "Payment Due",
    })
  .then(res => console.log(res.data))
  .catch((error) => {console.log(error);}) 
  }

  return (
    <>
    <Grid container>
      <AppBar position="sticky" className={classes.tabs}>
                <Tabs
                  value={section}
                  onChange={onSectionChangeHandler}
                  textColor="#00AB55"
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  {
                    sections.map((item)=>(
                      <Tab label={item} value={item} sx={{ borderRadius: 0 }} />
                    ))
                  }

                  {/* <Tab label="New" value="Done" sx={{ borderRadius: 0 }} />
                  <Tab label="Preparing" value="Preparing" sx={{ borderRadius: 0 }} />
                  <Tab label="Done" value="New" sx={{ borderRadius: 0 }} />*/}
                
                </Tabs> 
        </AppBar>
        <Grid container p={4} spacing={4}>
            {/* <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#239F54", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 ",maxHeight:"400px", overflowY:"auto"}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Done</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Zomato</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Delivery</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem>
                  </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#CB8C12", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 "}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Preparing</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Bar</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2">Server Name</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">table No. 5</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="3 burgers" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="3 burgers" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem>
                  </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
            
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#E6E6E6", color:"#525252",padding:"8px 24px",borderRadius:"8px 8px 0 0 "}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">New</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Swiggy</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Pickup</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="3 burgers" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem>
                  </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#239F54", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 ",maxHeight:"400px", overflowY:"auto"}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Done</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Zomato</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Delivery</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem>
                  </List>
                </Grid>
              </Paper>
            </Grid> */}
            {newOrder && newOrder?.data.map((item)=>
               (
              <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#239F54", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 ",maxHeight:"400px", overflowY:"auto"}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">New</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">{item.order_type}</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Table No: {item.tableNo} </Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">Instructions : {item.instruction }</Typography>
                    </Grid>                  
                    
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    {/* <ListItem  divider>
                      <ListItemText  primary="1 Soup" secondary="do not add pepper and salt"/>
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="2 Chicken Noodles" />
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="1 French Fries" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="1 Soda" />
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="2 Ice-creams" />
                    </ListItem> */}
                      {
                        item.rows && item.rows?.map((no)=>(
                          <ListItem  divider>
                            <ListItemText  primary={`${no.item}`} /> {no.sl}
                            {/* <ListItemText  primary={no.item} secondary="do not add pepper and salt"/> */}
                            <Divider/>
                          </ListItem>
                        ))
                      }



                  </List>

                </Grid>
               {
                item.status === "New"?
                <Grid sx={{display:"flex", justifyContent:"center", alignContent:"center" }} mb={2}>
                  <Button mt={2} variant="contained" onClick={()=>setToPreparing(item)} >Accept</Button>
                </Grid>
                : item.status === "Preparing"?
                <Grid sx={{display:"flex", justifyContent:"center", alignContent:"center" }} mb={2}>
                  <Button mt={2} variant="contained" onClick={()=>setToReady(item)} >Ready</Button>
                </Grid>
                :
                <Grid sx={{display:"flex", justifyContent:"center", alignContent:"center" }} mb={2}>
                  <Button mt={2} variant="contained" onClick={()=>sendtoPaymentDue(item)} >Serve</Button>
                </Grid>
               }
               
                
               
              </Paper>
            </Grid>
              )
            )}
            


        </Grid>
    </Grid>
      
    </>
  );
};
export default KitchenPanel;