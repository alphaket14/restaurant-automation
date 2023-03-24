import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  Fade,
  Backdrop,
  Select,
  MenuItem,
  TextField,
  ListItemText,
  Checkbox
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Add } from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import axios from "axios";
const clr = grey[500];

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  section: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
    backgroundColor: "#212B36",
  }
}));

const BookedTable = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const [secData, setSecData] = useState("");// For Storing the Section Tabs
  const [sectionData, setSectionData] = useState(""); // For Add Table Section DropDown 
  const [tableData, setTableData] = useState("");// For storing the Tables in db
  const [tables, setTables] = useState(""); //Tables in db for Sections 
  const [section, setSection] = useState("");//Initial Section 
  const [booked, setBooked] = useState("");//Booked Tables
  const [vacant, setVacant] = useState(true);//Vacant Tables

  const [vacantNumber, setVacantNumber] = useState("")// No of vacant tables for Que card
  const [bookedNumber, setBookedNumber] = useState("") //No of Booked tables for Que card
  const [paymentDueNumber, setPaymentDueNumber] = useState("") //No of Payment due tables for Que card

  const [sectionCount, setSectionCount] = useState("")// Section wise count

  useEffect(() => {
    const fetchdata = async () => {
      //Api calls 
      const section_data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/');
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/');
      const order = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/order/new');
      const vac_table = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/vacant');
      const book_table = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/booked');
      const payement_due = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/paymentdue');

      const sectionWiseCount = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/bookedcount');
      setSectionCount(sectionWiseCount);
      setTableData(order);
      setSectionData(section_data);
      setBooked(order);

      console.log("tables:",data);
      console.log("sections:",section_data);
  
      //Setting the section
      const unique = [...new Set(section_data?.data.map((item) => item.sectionName))];
      setSecData(unique);
      console.log("This is the Section ===>" + unique[0] );
  
      //For Loading the Tables in the section  
      const table_data = tableData && tableData?.data
   
      console.log("this are tableData"+table_data);
      setTables(table_data);
     
      console.log(tableData);


      //section-wise tables data
      const vacant_data = await  data?.data.filter((item)=>{
        return item.section === secData[0] && item.status === "Vacant"
      })
      
      setBookedNumber(book_table.data.length);
      setVacantNumber(vac_table.data.length);
      setPaymentDueNumber(payement_due.data.length);
  
    };
    fetchdata();
  }, [])

  const instructions = [
    { label: "Vacant Table", color: "grey.700" },
    { label: "Booked Table", color: "secondary.light" },
    { label: "Orders Accepted", color: "primary.light" },
    { label: "Payment Due", color: "error.main" }
  ];

  const [openModal, setOpenModal] = useState(false);
  const [openModalTable, setOpenModalTable] = useState(false);

    // Modal Data display
  const [modalData, setModalData] = useState("")

  const openModalHandler = (modData) => {
    console.log(modData)
    setModalData(modData)
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openModalTableHandler = () => {
    setOpenModalTable(true);
  };

  const closeModalTableHandler = () => {
    setOpenModalTable(false);
  };




  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }));

  //Add New Section Starts
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const initialdata = {
    sectionName: "",
  };
  const [newdata, setnewdata] = useState(initialdata);

  
  function submit(e){
    e.preventDefault();
    
    axios.post('https://vast-pink-meerkat-suit.cyclic.app/section/add', {
      sectionName: newdata.sectionName
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/')
      
      console.log("sections:",data)
      alert(`New Section Successfully Added`)
    };
    fetchdata();
    handleClose()
  }
  const handleChange = (e) => {
    e.preventDefault();
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
    console.log(newdata);
  };
  // Add New Section Ends


  // Add new Table Data
    const submitTableData = (e) =>{
      e.preventDefault();
    
      axios.post('https://vast-pink-meerkat-suit.cyclic.app/table/add', {
        section: newtabledata.section,
        tableNo: newtabledata.tableNo,
        capacity: newtabledata.capacity,
        status: newtabledata.status,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      const fetchdata = async () => {
        const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table/')
        console.log("sections:",data)
        setTableData(data)  
        setnewTabledata(initialTableData)
        alert("New Table is Added")
      };
      
      fetchdata();
      closeModalTableHandler()
    }

    const initialTableData = {
      section: "",
      tableNo: "",
      capacity: "",
      status: "",
      icon: "",
    };
    const status1 = ["Vacant", "Booked", "Order Accepted", "Payment Due"];


    const [newtabledata, setnewTabledata] = useState(initialTableData);
    const handleTableChange = (e) => {
      e.preventDefault();
      setnewTabledata({ ...newtabledata, [e.target.name]: e.target.value });
      console.log(newtabledata);
    };
    //Table Section Ends

    // OnClick Section Wise Table Generation Starts

      {/* <Tab label="Restaurant" value="restaurant" sx={{ borderRadius: 0 }} />
                <Tab label="Bar" value="bar" sx={{ borderRadius: 0 }} />
                <Tab label="Garden" value="garden" sx={{ borderRadius: 0 }} /> */}

                {/* 
                Task : Table Generation
                ---> onClick = {function(value.sectionName)} 
                ---> Filter  = group by section --> data --> useState() --> store in that state the array of the 
                              grouped objects --> useState Wala variable use karke map the tables.   

      */}
  

    const onSectionChangeHandler = (event, newValue) => {
      setVacant(false)
        const table_data = tableData?.data.filter((item)=>{
        return item.section === newValue
      })
      console.log(table_data)
      setTables(table_data)
      console.log(newValue)
      setSection(newValue);
    };

    // OnClick Section Wise Table Generation Ends


    //Booked Table
   const [onbook, setOnBook] = useState(false);
    const bookedTable = () =>{
      setTableData(booked)
      console.log(booked)
      setOnBook(true) 
    }

    //Vacant Table
    const vacantTable = () =>{
      setTableData(vacant)
      setOnBook(false) 
    }


    // OnClick Section Wise Table Generation Ends

    const getTheCount = (section) =>{
      var count=0;
      sectionCount?.data.filter((item)=>{
        if(item._id === section){
          count = item.count;
        }
      })
      console.log("this is the count "+ count)
      return count;
    } 
  


  return (
    <>
      {/* Invoice Modal */}
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <CustomColor variant="h4" component="div" gutterBottom align="center">
              Order Details
            </CustomColor>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={1}>
                <Grid item xs={4}>
                  Order Type : Dine In
                </Grid>
                <Grid item xs={4}>
                  Order From : Zomato
                </Grid>
                <Grid item xs={4}>
                  Order No. : {modalData.orderNo}
                </Grid>
                <Grid item xs={4}>
                  Table : {modalData.tableNo}
                </Grid>
                <Grid item xs={4}>
                  Waiter : {modalData.waiter}
                </Grid>
                <Grid item xs={4}>
                  Customer : {`${modalData.customerFname} ${modalData.customerLname} `} 
                </Grid>
                <Grid item xs={4}>
                  Payment Mode : {modalData.paymentMode}
                </Grid>
              </Grid>
              <Grid item>
                <Table size="small" sx={{ minWidth: 700 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Sr.</TableCell>
                      <TableCell align="center">Items</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Qty</TableCell>
                      {/* <TableCell align="center">Discount</TableCell> */}
                      {/* <TableCell align="right">Total</TableCell> */}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                  {modalData && modalData.rows.map((row, index) => (
                  <TableRow key={index}>
                    <TableCell align="center">{index+1}</TableCell>
                    <TableCell align="center">{row.item}</TableCell>
                    <TableCell align="center">{row.total}</TableCell>
                    <TableCell align="center">{row.qty}</TableCell>
                  </TableRow>
              ))}   
                    {/* <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow> */}
                  </TableBody>
                </Table>
              </Grid>
              <Grid item container>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Discount : {modalData.discAmt}</Grid>
                  <Grid item>Service charge : 80</Grid>
                </Grid>
                <Grid item container xs={4} align="center" direction="column" rowSpacing={1}>
                  <Grid item>SGST ({modalData.sgstAmt}) % : {(modalData.sgstAmt*modalData.grandTotal)/100}</Grid>
                  <Grid item>CGST ({modalData.cgstAmt}) % : {(modalData.cgstAmt*modalData.grandTotal)/100} </Grid>
                </Grid>
                <Grid item container xs={4} align="right" direction="column" rowSpacing={1}>
                  <Grid item>Coupon : ABCD1234</Grid>
                  <Grid item>Vat : 0</Grid>
                  <Grid item>Sub Total : 80</Grid>
                </Grid>
              </Grid>
              <Grid item align="right">
                Total Amout Payable :{" "}
                <Typography variant="h6" component="span" color="primary.main">
                  {modalData.grandTotal}
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                {/* <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Create Invoice
                  </Button>
                </Grid> */}
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth onClick={() => navigate("/manageorder/pos-invoice",{state: {item: modalData, new:false}})}>
                    Edit
                  </Button>
                </Grid>
                {/* <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Print KOT
                  </Button>
                </Grid> */}
                <Grid item xs={3}>
                  <Button variant="outlined" fullWidth onClick={closeModalHandler}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* Add Table Modal */}

      <Modal
        open={openModalTable}
        onClose={closeModalTableHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModalTable}>
          <Box className={classes.modal}>
            <Typography sx={{ width: "100%", textAlign: "center", mb: 2 }} variant="h5">
              Add Table
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              {/* select code starts */}
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Section :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="section"
                    fullWidth
                    size="small"
                    value={newtabledata.section}
                    onChange={handleTableChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected}
                  >
                     {sectionData && sectionData?.data.map((name) => (
                      <MenuItem key={name.sectionName} value={name.sectionName}>
                        <Checkbox />
                        <ListItemText primary={name.sectionName} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              {/* select code ends */}
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Table No. :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Table No."
                    size="small"
                    name="tableNo"
                    value={newtabledata.tableNo}
                    placeholder="Table No."
                    onChange={handleTableChange}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Capacity :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Capacity"
                    size="small"
                    name="capacity"
                    value={newtabledata.capacity}
                    placeholder="Capacity"
                    onChange={handleTableChange}
                  />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <TextField fullWidth size="small"  /> */}
                  <Select
                    name="status"
                    fullWidth
                    size="small"
                    value={newtabledata.status}
                    onChange={handleTableChange}
                    renderValue={(selected) => selected}
                  >
                    {status1.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox />
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Table Icon :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="icon"
                    fullWidth
                    size="small"
                    value={newtabledata.icon}
                    onChange={handleTableChange}
                  >
                    <MenuItem value={"Icon 1"}>
                      <img
                        width={"40px"}
                        height={"40px"}
                        src="https://i.ibb.co/YRvZLPG/download.jpg"
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"Icon 2"}>
                      <img
                        width={"40px"}
                        height={"40px"}
                        src="https://i.ibb.co/d0Lf99B/istockphoto-1145493140-612x612.jpg"
                      />
                    </MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid
                item
                container
                justifyContent="center"
                style={{ marginTop: "2rem", gap: "20px" }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  onClick={closeModalTableHandler}
                >
                  Cancel
                </Button>
                <Button
                  onClick={submitTableData}
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* Add Section Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box className={classes.section} sx={{p:5}}>
          <Typography
            sx={{ width: "100%", textAlign: "center", mb: 2 }}
            variant="h5"
          >
            Add Section
          </Typography>
          <Grid container direction="column" rowSpacing={1}>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography label="Search Name" placeholder="Section Name" variant="body1">Section Name  </Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  label="Section Name"
                  size="small"
                  name="sectionName"
                  placeholder="Section Name"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2rem", gap: "20px" }}
            >
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={submit}
                variant="contained"
                sx={{ ml: 1 }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>

      <Grid container style={{ height: "calc(100% - 65px" }}>
        {/* side menu */}
        <Grid item container mt={3} xs={2} sx={{ padding: 2 }}>
          <Grid container direction="column" justifyContent="space-between">
            <Grid item>
              <Grid item container direction="column" rowSpacing={2}>
                <Grid fullWidth item>
                  <Button
                    fullWidth
                    component={NavLink}
                    variant="contained"
                    to="/manageorder/table-view"
                    // activeClassName={classes.active}
                  >
                    Dine In
                  </Button>
                </Grid>
                <Grid fullWidth item>
                  <Button
                    fullWidth
                    variant="outlined"
                    component={NavLink}
                    to="/manageorder/delivery-view"
                  >
                    Delivery
                  </Button>
                </Grid>
                <Grid fullWidth item>
                  <Button
                    fullWidth
                    variant="outlined"
                    component={NavLink}
                    to="/manageorder/pickup-view"
                  >
                    Pick Up
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item sx={{ mt: 1 }}>
              <Grid item container direction="column" rowSpacing={2}>
                <Grid fullWidth item>
                  <Button
                    fullWidth
                    variant="outlined"
                    color="warning"
                    component={NavLink}
                    to="/manageorder/table-view"
                  >
                    Vacant table ({vacantNumber})
                  </Button>
                </Grid>
                <Grid fullWidth item>
                  <Button fullWidth variant="contained" color="secondary" >
                    Booked Table ({bookedNumber})
                  </Button>
                </Grid>
                {/* <Grid fullWidth item>
                  <Button fullWidth variant="outlined">
                    Order Accepted
                  </Button>
                </Grid> */}
                <Grid fullWidth item>
                  <Button fullWidth variant="outlined" color="error" component={NavLink} to='/manageorder/payment-due'>
                    Payment Due({paymentDueNumber})
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" rowSpacing={2}>
                <Grid fullWidth item sx={{ mt: 3 }}>
                  <Button fullWidth startIcon={<Add />} variant="outlined">
                    Table Reservation
                  </Button>
                </Grid>
                <Grid item fullWidth>
                  <Button
                    fullWidth
                    startIcon={<Add />}
                    variant="outlined"
                    onClick={handleOpen}
                    // onClick={() => navigate("/dashboard/setting/manage-table/add-section")}
                  >
                    Add Section
                  </Button>
                </Grid>
                <Grid item fullWidth>
                  <Button
                    fullWidth
                    startIcon={<Add />}
                    variant="outlined"
                    onClick={openModalTableHandler}
                  >
                    Add Table
                  </Button>
                </Grid>
                {/* <Grid item fullWidth>
                  <Button fullWidth startIcon={<Delete />} variant="outlined" color="error">
                    Delete Section
                  </Button>
                </Grid> */}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container xs={10} direction="column">
          {/* upper color instrutions */}
          {/* Section Change Appbar */}
          <Grid item container>
            <AppBar position="sticky" className={classes.tabs}>
              <Tabs
                value={section}
                onChange={onSectionChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
              

                {secData &&
                  secData.map((item,key)=>(
                    <Tab key={item} label={`${item} (${getTheCount(item)})`} value={item} sx={{ borderRadius: 0, borderRight:"2px solid green" }}  />
                  ))
                }

              </Tabs>
            </AppBar>
          </Grid>
          <Grid item container direction="column">
            <Grid item container sx={{ padding: 1 }} spacing={2}>
            {
                  tables && tables?.map((item)=>(
                    <Grid item xs={2} key={item._id}>
                    <Paper
                      onClick={()=>openModalHandler(item)}
                      fullWidth
                      elevation={6}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        // height: 85,
                        padding: "16px 5px",
                        border:"1px solid green"
                        // bgcolor: "secondary.light"
                        // bgcolor: "rgba(51,102,255,0.5)"
                      }}
                      // color= {status === "Booked" ? "Secondary": "Primary"}
                    >
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          flexDirection:"column",
                          justifyContent: "center",
                          alignItems: "center",
                          height: "100%",
                          width: "50%"
                        }}
                      >
                        <Typography variant="caption" component="div">
                      Table No.
                    </Typography>
                        <Typography variant="h3" component="div">
                          {item.tableNo}
                        </Typography>
                      </Box>
                      <Box
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "50%",
                          // borderRight: "1px solid",
                          borderLeft: "1px solid",
                          borderColor: "green",
                          height: "100%",
                          padding: "0 5px"
                        }}
                      >
                        <Typography variant="body1" component="div">
                         Dine In
                        </Typography>
                        <Typography variant="caption" color="green" component="div" textAlign="center">
                        {`${item.customerFname} ${item.customerLname} `} 
                        </Typography>
                        <Typography variant="caption" component="div">
                        {item.tableCapacity} Person
                        </Typography>
                      </Box>
                      {/* <Box
                        component="div"
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexDirection: "column",
                          width: "35%",
                          height: "100%",
                          padding: "0 5px"
                        }}
                      >
                        <Typography variant="subtitle2" component="div">
                         {item.capacity} Person
                        </Typography>
                        <Typography variant="subtitle2" component="div">
                          5pm to 8pm
                        </Typography>
                      </Box> */}
                      {/* <Box
                        variant="div"
                        sx={{
                          display: "flex",
                          // flexDirection: "column",
                          justifyContent: "center",
                          flexWrap: "wrap",
                          width: "15%"
                        }}
                      >
                        <IconButton size="small">
                          <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                        </IconButton>
                        <IconButton size="small" color="secondary">
                          <Print sx={{ fontSize: "medium" }} />
                        </IconButton>
                        <IconButton size="small" color="primary">
                          <Bookmark sx={{ fontSize: "medium" }} />
                        </IconButton>
                      </Box> */}
                    </Paper>
                  </Grid>
                 
                ))
                 
            }
              



              {/* <Grid item xs={4}>
                <Paper
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px",
                    // bgcolor: "primary.light"
                    bgcolor: "rgba(0, 171, 85, 0.5)"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <Typography variant="h3" component="div">
                      2
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Small Group
                    </Typography>
                    <Typography variant="caption" component="div">
                      Casual Fooding
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="subtitle2" component="div">
                      6 Person
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                      5pm to 8pm
                    </Typography>
                  </Box>
                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "15%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px"
                    // bgcolor: "grey.700"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <Typography variant="h3" component="div">
                      3
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Small Group
                    </Typography>
                    <Typography variant="caption" component="div">
                      Casual Fooding
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="subtitle2" component="div">
                      6 Person
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                      5pm to 8pm
                    </Typography>
                  </Box>
                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "15%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px",
                    // bgcolor: "error.light"
                    bgcolor: "rgba(255, 72, 66, 0.5)"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <Typography variant="h3" component="div">
                      4
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Small Group
                    </Typography>
                    <Typography variant="caption" component="div">
                      Casual Fooding
                    </Typography>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "35%",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="subtitle2" component="div">
                      6 Person
                    </Typography>
                    <Typography variant="subtitle2" component="div">
                      5pm to 8pm
                    </Typography>
                  </Box>
                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "15%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default BookedTable;
