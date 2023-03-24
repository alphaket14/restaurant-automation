import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  InputAdornment,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  TextField,
  Box,
  AppBar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Paper,
  Grid,
  Modal,
  Fade,
  Backdrop,
  Checkbox,
  Divider,
  Tooltip,
  Select,
  MenuItem
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { DatePicker } from "@material-ui/lab";
import {
  makeStyles,
  IconButton,
  Button,
  TableContainer,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
import {
  ExpandLess,
  ExpandMore,
  Search,
  Add,
  Remove,
  Delete,
} from "@mui/icons-material";
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import PaymentsIcon from '@mui/icons-material/Payments';
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import ManageOrderNavbar from "../../../layouts/manage-order/ManageOrderNavbar";
// import SideFoodMenu from "../../../layouts/manage-order/SideFoodMenu";
import DeckOutlinedIcon from '@mui/icons-material/DeckOutlined';
import Scrollbar from "src/components/Scrollbar";
import { useLocation } from "react-router";

const useStyles = makeStyles((theme) => ({
  sideFoodMenu: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#161C24",
  },
  popup: {
    backgroundColor: theme.palette.mode === "light" ? "#f6f7f8" : "inherit",
  },
  section3BillSection: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  appbar: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
  },
  input: {
    color: "#fff",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  variant1: {
    background: "#000",
    color: "#fff",
    border: "none",
  },
  invoiceModal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    maxHeight: "100vh",
    overflowY: "scroll",
  },
  payment:{
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
  split:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    width: 500,
    boxShadow: 24,
    height: 300,
    overflow: "hidden",
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  taxes:{
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    width: 500,
    boxShadow: 24,
    height: 250,
    overflow: "hidden",
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  },
  active: {
    backgroundColor: "#fff",
  },
  box:{
    display:"flex",
    alignItems:"center",
    border:"1px solid grey",
    padding:"5px",
    borderRadius:"5px"
  }
  
}));

const TableGrid = styled(Grid)(({ theme }) => ({
  ["@media (max-height:600px)"]: {
    maxHeight: 200,
  },
  ["@media (min-height:600px)"]: {
    maxHeight: 200,
  },
  ["@media (min-height:800px)"]: {
    maxHeight: 250,
  },
  ["@media (min-height:900px)"]: {
    maxHeight: 300,
  },
  ["@media (min-height:1080px)"]: {
    maxHeight: 340,
  },
}));

const CustomColor = styled(Typography)(({ theme }) => ({
  // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
  background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const PosInvoice = (props) => {
  const createData = (sl, item, qty, price, total) => {
    return {sl, item, qty, price, total}
  };
  const data = [createData(1, "Food", 1, 30)]
  const [openSideMenu, setOpenSideMenu] = useState(true);
  const [openTableModal, setOpenTableModal] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [tabValue, setTabValue] = useState("dine-in");
  const [vegValue, setVegValue] = useState("veg");
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openPaymentModal, setOpenPaymentModal] = useState(false);// For Payment Modal
  const [openDeliveryModal, setOpenDeliveryModal] = useState(false);// For Delivery Modal
  const [openAdditonalChargesModal, setOpenAdditonalChargesModal] = useState(false);// For AdditonalCharges Modal
  const [openTaxesModal, setOpenTaxesModal] = useState(false);// For Taxes Charges Modal
  const [openCouponsModal, setOpenCouponsModal] = useState(false);// For Coupons Charges Modal
  const [openSplitModal, setOpenSplitModal] = useState(false);// For Split Charges Modal
  const [cats, setCats]= useState([]);
  const [fooditems, setFooditems] = useState([]);
  const [variants, setVariant] = useState([]);
  const [optarr, setOptarr] = useState([]);
  const [addons, setAddons] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [rows, setRows] = useState([]);
  const [baseprice, setBaseprice] = useState(0);
  const [totprice, setTotprice] = useState(0);
  const [var_allot, setVariantAllot] = useState(null);
  const [top_allot, setToppingAllot] = useState(null);
  const [add_allot, setAddonAllot] = useState(null);
  const [invoiceNo, setInvoiceNo ] = useState(null);
  const [orderNo, setOrderNo ] = useState(null);
  const [invoData, setInvoData] = useState({
    name:"",
    gst: null,
    fssai: null,
    state:"",
    city:"",
    pincode: null,
    address:"",
    order_no: null,
    // invoice_no: null,
    waiter:"",
    admin:"",
    invoice:"",
    coupon_disc: null,
    gst_per: null,
    sgst: null,
    cgst: null,
    igst: null,
    charges: null,
    footer:"",
    contact: null,
    email:"",
    date:new Date(),
    time:new Date(),
    cust_city:"",
    cust_name:"",
    cust_no:null,
    order_type:"",
    order_from:"",
    table_no:"",
    payment_mode:"",
  });

  //For Storing the ManageOrderNavbar Data
  const [waiterData, setwaiterData] = useState("")

  // const [tableCapacity, setTableCapacity] = useState("")

  const [clientData, setclientData] = useState({
    fname:"",
    lname:"",
    contact: null,
    email:"",
    order_type:"",
    address:"",
    tableCapacity:null,
    instruction:"",
    pincode:"",
    city:"",
    state:"",
    country:"",
  })

  const location = useLocation();
  // console.log(location.state.tableNo)
  const [tableInfo, settableInfo] = useState({
    tableNo: "",
    section: "Section",
  })


  const [orderCount, setOrderCount] = useState(0)
  const [orderEdit, setOrderEdit] = useState(false)

//  const [orderData, setOrderData] = useState({

//  })

  const [tax, setTaxes] = useState("")
  const locationStatus = location.state;

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/food-category/')
      const data2 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/fooditem/')
      const data3 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/toppings/')
      const data4 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/addons/')
      const invoice = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/invoice')
      const order = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/order/');
      const taxes = await axios.get("https://vast-pink-meerkat-suit.cyclic.app/taxes/")

      setTaxes(taxes)
      setOrderCount(order.data.length);
      // console.log(order.data.length)

      console.log("categories:",data)
      setCats(data.data[0].rows);
      setFooditems(data2.data[0].rows);
      setVariant(data2.data[0].rows[0].variants)
      setAddons(data4.data[0].rows)
      setToppings(data3.data[0].rows)
      setOptarr(data2.data[0].rows[0].variants[0].optarr)
      //console.log(rowsid); working correctly
      // console.log(invoice.data)
      const timeElapsed = Date.now();
      const today = new Date(timeElapsed);
      const timeNow = new Date().toLocaleTimeString();
      const index = invoice.data.length - 1;
      // setInvoiceNo(invoData.data[index].invoice);
      setInvoData({
      name:invoice.data[index].name,
      gst: invoice.data[index].gst,
      fssai: invoice.data[index].fssai,
      state:invoice.data[index].state,
      city:invoice.data[index].city,
      pincode:invoice.data[index].pincode,
      address:invoice.data[index].address,
      order_no:invoice.data[index].order_no,
      waiter:invoice.data[index].waiter,
      admin:invoice.data[index].admin,
      invoice:invoice.data[index].invoice,
      coupon_disc:invoice.data[index].coupon_disc,
      gst_per:invoice.data[index].gst_per,
      sgst:invoice.data[index].sgst,
      cgst:invoice.data[index].cgst,
      igst:invoice.data[index].igst,
      charges:invoice.data[index].charges,
      footer:invoice.data[index].footer,
      contact:invoice.data[index].contact,
      email:invoice.data[index].email,
      date:today.toLocaleDateString(),
      time:timeNow,
      cust_city:invoice.data[index].cust_city,
      cust_name:invoice.data[index].cust_name,
      cust_no:invoice.data[index].cust_no,
      order_type:invoice.data[index].order_type,
      order_from:invoice.data[index].order_from,
      table_no:invoice.data[index].table_no,
      payment_mode:invoice.data[index].payment_mode,
      })
      setOrderEdit(false)
      // console.log(location.state.item)
      if(location.state.item !== undefined && location.state.new === false && location.state.item !== null){
        settableInfo({
          tableNo:location.state.item.tableNo,
          section:location.state.item.section,
          rows: location.state.item.rows,
        })
        console.log(location.state.item.waiter)
        setwaiterData( location.state.item.waiter)
        // setTableCapacity(location.state.item.tableCapacity)
        setclientData({
          fname: location.state.item.customerFname,
          lname: location.state.item.customerLname,
          contact: location.state.item.custPhone,
          email: location.state.item.custEmail,
          order_type: location.state.item.order_type,
          address: location.state.item.custAddress,
          tableCapacity: location.state.item.tableCapacity,
          instruction: location.state.item.instruction,
          pincode: location.state.item.pincode,
          city: location.state.item.city,
          state: location.state.item.state,
          country: location.state.item.country,
        })
        console.log(location.state.item)
        setRows(location.state.item.rows)
        setTotprice(location.state.item.grandTotal)
        setOrderEdit(true)
      }
     
      if(location.state.item !== undefined && location.state.new === true && location.state.item !== null){
        settableInfo({
          tableNo:location.state.item.tableNo,
          section:location.state.item.section,
        })
        setRows([]);
        setTotprice(0);
      }
      
    };
    fetchdata();
  },[]);

  //Payment Modal Handler
  const openDeliveryModalHandler = () => {
    setOpenDeliveryModal(true);
  };
  const closeDeliveryModalHandler = () => {
    setOpenDeliveryModal(false);
  };

  //Delivery Modal handler
  const openPaymentModalHandler = () => {
    setOpenPaymentModal(true);
  };

  const closePaymentModalHandler = () => {
    setOpenPaymentModal(false);
  };

  //Additional Charges Modal handler
  const openAdditonalChargesModalHandler = () => {
    setOpenAdditonalChargesModal(true);
  };

  const closeAdditonalChargesModalHandler = () => {
    setOpenAdditonalChargesModal(false);
  };

  //Taxes Charges Modal handler
  const openTaxesModalHandler = () => {
    setOpenTaxesModal(true);
  };

  const closeTaxesModalHandler = () => {
    setOpenTaxesModal(false);
  };

  //Coupons Charges Modal handler
  const openCouponsModalHandler = () => {
    setOpenCouponsModal(true);
  };

  const closeCouponsModalHandler = () => {
    setOpenCouponsModal(false);
  };

  //Coupons Split Modal handler
  const openSplitModalHandler = () => {
    setOpenSplitModal(true);
  };

  const closeSplitModalHandler = () => {
    setOpenSplitModal(false);
  };



  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const onTableModalOpenHandler = (index) => {
    //setBaseprice(parseInt(fooditems[index].price))
    setOpenTableModal(true);
  };
  const onTableModalCloseHandler = () => {
    setOpenTableModal(false);
  };

  const sideMenuClickHandler = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const onTabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const onVegChangeHandler = (event, newValue) => {
    setVegValue(newValue);
  };



  const onSelectItem = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();

  const [variant1, setVariant1] = useState(null);
  const [variant2, setVariant2] = useState(null);
  const [variant3, setVariant3] = useState(null);
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      var newRows = rows.map((row) => row);
      var grand_tot = totprice;
      grand_tot = grand_tot-parseInt(newRows[index].total);
      setTotprice(grand_tot)
      newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setRows(newRows);
    }
  };
  const AddQuantity = (index) => {
    var newRows = rows.map((row) => row);
    var newquat = parseInt(rows[index].qty)+1;
    console.log(newquat)
    newRows[index].qty = newquat;
    var grand_tot = totprice;
    grand_tot = grand_tot-parseInt(newRows[index].total);
    newRows[index].total = newquat * newRows[index].price;
    grand_tot = grand_tot+parseInt(newRows[index].total)
    setTotprice(grand_tot)
    setRows(newRows);
    console.log(rows)
  };
  const SubQuantity = (index) => {
    var newRows = rows.map((row) => row);
    var newquat = parseInt(rows[index].qty)-1;
    if(newquat>-1){
      console.log(newquat)
      newRows[index].qty = newquat;
      var grand_tot = totprice;
      grand_tot = grand_tot-parseInt(newRows[index].total);
      newRows[index].total = newquat * newRows[index].price;
      grand_tot = grand_tot+parseInt(newRows[index].total)
      setTotprice(grand_tot)
      setRows(newRows);
    }
  };
  const addPosition = () => {
    const newPosition = createData(1, "Item 1", 1, baseprice, baseprice);
    //var newRows = [...rows, newPosition]
    setRows((prev) => [...prev, newPosition]);
    setTotprice(totprice+baseprice)
    setBaseprice(0);
    onTableModalCloseHandler();
  };
  const addPosition2 = () => {
    const newPosition = createData(1, "Item 2", 1, 250, 250);
    //var newRows = [...rows, newPosition]
    setRows((prev) => [...prev, newPosition]);
    setTotprice(totprice+250)
    console.log("This is TotPrice"+totprice)
  };
  const handleVariantChange = (index) => {
    if(var_allot){
      setBaseprice(baseprice - parseInt(var_allot.price))
    }
    setBaseprice(baseprice + parseInt(optarr[index].price))
    setVariantAllot(optarr[index]);
    setVariant1(index);
    console.log(rows)
  }
  const handleToppingChange = (index) => {
    if(top_allot){
      setBaseprice(baseprice - parseInt(top_allot.price))
    }
    setBaseprice(baseprice + parseInt(toppings[index].price))
    setToppingAllot(toppings[index]);
    setVariant2(index);
  }
  const handleAddonChange = (index) => {
    if(add_allot){
      setBaseprice(baseprice - parseInt(add_allot.price))
    }
    setBaseprice(baseprice + parseInt(addons[index].price))
    setAddonAllot(addons[index]);
    setVariant3(index);
  }


  const [openInvoiceModal, setOpenInvoiceModal] = React.useState(false);


  const [getTaxes, setGetTaxes] = useState(0);
  const openInvoiceModalHandler = () => {
    const totalTaxes = tax &&  tax?.data.map((item)=>{
      return ((item.value * totprice) / 100) ;
    })
    console.log(totalTaxes)
    let sum=0;
    totalTaxes.forEach(item => {
      sum+=item
    });
    console.log("This is sum ==>"+sum);
    setGetTaxes(sum)
    setOpenInvoiceModal(true);
  };

  const closeInvoiceModalHandler = () => {
    setOpenInvoiceModal(false);
  };

  const handleInvoiceChange = (e) => {
    setInvoiceNo(e.target.value);
  }
  const handleOrderChange = (e) => {
    setOrderNo(e.target.value);
  }
  
  function submit(e){
    e.preventDefault();

    if (orderEdit === true){
      axios.post(`https://vast-pink-meerkat-suit.cyclic.app/order/update/${location.state.item._id}`, {
        resName: invoData.name,
        resAddr: invoData.address,
        resCont: invoData.contact,
        tableNo: tableInfo.tableNo,
        tableCapacity: clientData.tableCapacity,
        instruction: clientData.instruction,
        section: tableInfo.section,
        order_type: clientData.order_type,
        rows: rows,
        paymentMode: invoData.payment_mode,
        orderNo: invoData.order_no,
        grandTotal: totprice,
        cgstAmt: invoData.cgst,
        sgstAmt: invoData.sgst,
        discAmt: 30,
        customerFname: clientData.fname,
        customerLname:clientData.lname,
        custPhone: clientData.contact,
        custEmail: clientData.email,
        custAddress:clientData.address,
        invoiceNo:invoData.invoice,
        waiter: waiterData,
        status:"New"
      })
      .then(res => {console.log(res.data);alert("Order Has been Updated");
      
    
    } )
      .catch((error) => {console.log(error);})
    }
    else{
      axios.post('https://vast-pink-meerkat-suit.cyclic.app/order/add', {
      resName: invoData.name,
      resAddr: invoData.address,
      resCont: invoData.contact,
      tableNo: tableInfo.tableNo,
      tableCapacity: clientData.tableCapacity,
      instruction: clientData.instruction,
      section: tableInfo.section,
      order_type: clientData.order_type,
      rows: rows,
      paymentMode: invoData.payment_mode,
      orderNo: invoData.order_no,
      grandTotal: totprice,
      cgstAmt: invoData.cgst,
      sgstAmt: invoData.sgst,
      discAmt: 30,
      customerFname: clientData.fname,
      customerLname:clientData.lname,
      custPhone: clientData.contact,
      custEmail: clientData.email,
      custAddress:clientData.address,
      invoiceNo:invoData.invoice,
      waiter:waiterData,
      status:"New"
      })
      .then(res => {console.log(res.data); alert("Order Has been Placed");
      const tabledata = async() => {
        const table = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table');
  
          console.log(table)
          const searchIndex = table.data.findIndex((item) => item.tableNo === tableInfo.tableNo  && item.section === tableInfo.section)
          const tableId = table.data[searchIndex]._id;
          console.log("This is the ID ===>" + tableId)
          axios.post(`https://vast-pink-meerkat-suit.cyclic.app/table/update/${tableId}`, {
            section: tableInfo.section,
            tableNo: tableInfo.tableNo,
            capacity: clientData.tableCapacity,
            status:  "Booked",
          })
        .then(res => console.log(res.data))
        .catch((error) => {console.log(error);}) 
        }
        tabledata()
    })
      .catch((error) => {console.log(error);})
  }
  }

// Split Bill states
  
  const [splitCount, setSplitCount] = useState("") 
  const [taxTotal, setTaxTotal] = useState(0);

  return (
    <>
      {/* Payment Mode Modal */}
      <Modal
        open={openPaymentModal}
        onClose={closePaymentModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openPaymentModal}>
          <Box className={classes.payment}>
            <Typography variant="h5" mb={2}>
              Payment Mode  
             
            </Typography>
            <Divider />
           
            <FormControl>
                <RadioGroup row mt={2} >
                  <FormControlLabel
                    value="cash"
                    control={<Radio defaultChecked />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Card"
                  />
                  <FormControlLabel
                    value="due"
                    control={<Radio />}
                    label="Due"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  
                </RadioGroup>
              </FormControl>
             
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closePaymentModalHandler}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>                

      {/* Delivery Charges Modal */}
      <Modal
        open={openDeliveryModal}
        onClose={closeDeliveryModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openDeliveryModal}>
          <Box className={classes.payment}>
            <Typography variant="h5" mb={2}>
              Delivery Charges  
            </Typography>
            <Divider />
           
            <Grid item container mt={2}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2">Enter Delivery Charges :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "delcharges"
                    name = "delcharges"
                    value=""
                    // onChange={(e) => Handle(e)}
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeDeliveryModalHandler}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* Additional Charges Modal */}
      <Modal
        open={openAdditonalChargesModal}
        onClose={closeAdditonalChargesModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openAdditonalChargesModal}>
          <Box className={classes.payment}>
            <Typography variant="h5" mb={2}>
              Additional Charges  
            </Typography>
            <Divider />
           
            <Grid item container mt={2}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2">Enter Additional Charges :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "addcharges"
                    name = "addcharges"
                    value=""
                    // onChange={(e) => Handle(e)}
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeAdditonalChargesModalHandler}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>   

      {/* Taxes Charges Modal */}
      <Modal
        open={openTaxesModal}
        onClose={closeTaxesModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openTaxesModal}>
          <Box className={classes.taxes}>
            <Typography variant="h5" mb={2}>
              Taxes  
            </Typography>
            <Divider />
           
            <Grid item container mt={2}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2">GST :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "cgst"
                    name = "cgst"
                    value=""
                    // onChange={(e) => Handle(e)}
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
            {/* <Grid item container mt={2}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2">Enter SGST :</Typography>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "sgst"
                    name = "sgst"
                    value=""
                    // onChange={(e) => Handle(e)}
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid> */}
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeTaxesModalHandler}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>  

      {/* Coupons Charges Modal */}
      <Modal
        open={openCouponsModal}
        onClose={closeCouponsModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openCouponsModal}>
          <Box className={classes.payment}>
            <Typography variant="h5" mb={2}>
              Coupons  
            </Typography>
            <Divider />
           
      
            <Grid item container mt={2}>
                <Grid item xs={5}>
                  <Typography variant="subtitle2">Select Coupon :</Typography>
                </Grid>
                <Grid item xs={6}>
                <Select fullWidth id="demo-simple-select" value="">
                  <MenuItem value="Hello1">Hello 1</MenuItem>
                  <MenuItem value="Hello2">Hello 2</MenuItem>
                  <MenuItem value="Hello3">Hello 3</MenuItem>
                </Select> 
                </Grid>
              </Grid>
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeCouponsModalHandler}>
                Save
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>   

      {/* Delivery Charges Modal */}
      <Modal
        open={openSplitModal}
        onClose={closeSplitModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openSplitModal}>
          <Box className={classes.split}>
            <Typography variant="h5" mb={2}>
              Split Bill
            </Typography>
            <Divider />
           
            <Grid item container mt={2}>
                <Grid item xs={8}>
                  <Typography variant="subtitle2">Enter the number to split the bill :</Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    size="small"
                    id = "split"
                    name = "split"
                    value={splitCount}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          1/
                        </InputAdornment>
                      )
                    }}

                    onChange={(e) => setSplitCount(e.target.value) }
                    // value={categoryName}
                    // onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
            <Grid item container mt={2}>
                <Grid item xs={8}>
                  <Typography  variant="subtitle2">Per Head Amount : </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" className={classes.box}> <CurrencyRupee fontSize="small" /> {splitCount !== "" ?  ((totprice==0)?0 : (((totprice- invoData.coupon_disc) + (((invoData.sgst*totprice)/100) + ((invoData.cgst*totprice)/100))) )/ splitCount  )  : 0}</Typography>
                  
                </Grid>
            </Grid>
            <Grid item container mt={2}>
                <Grid item xs={8}>
                  <Typography variant="subtitle2">Grand Total : </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2" className={classes.box} > <CurrencyRupee fontSize="small" /> {(totprice==0)?0 : (((totprice- invoData.coupon_disc) + (((invoData.sgst*totprice)/100) + ((invoData.cgst*totprice)/100))) )}</Typography>
                  
                </Grid>
            </Grid>
            <Grid mt={2} item align="right">
              <Button variant="contained" size="small" onClick={closeSplitModalHandler}>
                Apply
              </Button>
            </Grid>
          </Box>
        </Fade>
      </Modal>

    

      {/* Food Name Variant Modal */}
      <Modal
        open={openTableModal}
        onClose={onTableModalCloseHandler}
        BackdropComponent={Backdrop}
        closeAfterTransition
      >
        <Fade in={openTableModal}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center" gutterBottom>
              Food Name
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Variants
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {optarr.map((row, id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant1 === id ? classes.variant1 : ""}
                    onClick={() => handleVariantChange(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      {row.option}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; {row.price}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Toppings
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {toppings.map((row, id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant2 === id ? classes.variant1 : ""}
                    onClick={() => handleToppingChange(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      {row.toppingName}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; {row.price}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Addons
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {addons.map((row , id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant3 === id ? classes.variant1 : ""}
                    onClick={() => handleAddonChange(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      {row.addonName}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; {row.price}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              {/*<Typography variant="body2" sx={{ mr: 1 }}>
                &#8377; 50
              </Typography>*/}
              <Button
                variant="outlined"
                color="error"
                onClick={onTableModalCloseHandler}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button onClick={addPosition} variant="contained">Add</Button>
            </Box>
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
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.section3BillSection}
              sx={{
                boxSizing: "border-box",
                padding: "10px 20px",
                paddingBottom: "0px",
                borderBottom: "1px solid lightGrey",
              }}
            >
              <Grid
                p={1}
                className={classes.popup}
                item
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} fontWeight={900} item>
                  Item Total
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography fontWeight={900}>Rs. 290</Typography>
                </Grid>
              </Grid>
              <Grid p={1} item container justifyContent="space-between">
                <Grid sx={{ borderRight: 1 }} color="#239F54" xs={6} item>
                  Coupon - (SAVE50)
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography color="#239F54">You saved Rs. 50</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                className={classes.popup}
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  Service charge
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid p={1} item container justifyContent="space-between">
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  SGST
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                className={classes.popup}
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  CGST
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
                container
                justifyContent="space-between"
              >
                <Grid fontWeight={900} item>
                  Grand Total
                </Grid>
                <Grid fontWeight={900} item>
                  Rs. 300
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>



      {/* Invoice Modal  */}
      <Modal
        open={openInvoiceModal}
        onClose={closeInvoiceModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openInvoiceModal}>
          <Box className={classes.invoiceModal}>
            <Typography
              variant="h6"
              component="div"
              align="center"
              gutterBottom
            >
              {invoData.name}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
             { `Address : ${invoData.address}, ${invoData.city}, ${invoData.state} ${invoData.pincode}`}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
              Contact No. : +91{invoData.contact}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              component="div"
              align="center"
              gutterBottom
            >
             {`${invoData.date}  ${invoData.time}`}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body1" color="text.secondary">
                GST No. : {invoData.gst_per}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                FSSAI No. : {invoData.fssai}
              </Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Table No. : {tableInfo.tableNo !== ""?tableInfo.tableNo:invoData.table_no}</Typography>
              <Typography variant="subtitle1">Invoice No. : {invoData.invoice}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Order Type : {clientData.order_type !== "" ? clientData.order_type  : invoData.order_type}</Typography>
              <Typography variant="subtitle1">Order From : {invoData.order_from}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Waiter : {waiterData!== ""?waiterData:invoData.waiter}</Typography>
              <Typography variant="subtitle1">User : {invoData.admin}</Typography>
            </Box>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="subtitle1">Payment Mode : {invoData.payment_mode}</Typography>
            </Box>
            <Divider sx={{ mb: 1 }} />
            <Typography
              variant="subtitle1"
              component="div"
              align="center"
              sx={{ mb: 1 }}
            >
              Food Items
            </Typography>
            <Divider sx={{ mb: 1 }} />
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
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sr.</TableCell>
                  <TableCell>Item</TableCell>
                  <TableCell align="center">Qty.</TableCell>
                  <TableCell align="center">
                    Amount (<CurrencyRupee sx={{ fontSize: 14 }} />)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {rows &&   rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell align="center">{index+1}</TableCell>
                  <TableCell align="center">{row.item}</TableCell>
                  <TableCell align="center">{row.qty}</TableCell>
                  <TableCell align="center">{row.total}</TableCell>
                </TableRow>
              ))}   
              </TableBody>
            </Table>
            </Scrollbar>
            </TableContainer>
            </Grid>
            <Grid container direction="column">
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Amount :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377;{totprice}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Coupon Code :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    ABCD1234
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">Discount :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; {invoData.coupon_disc}
                  </Typography>
                </Grid>
              </Grid>
              {/* <Grid item container spacing={1}>
                <Grid item xs={12} align="right">
                  <Typography variant="subtitle2">GST({invoData.gst_per}%) </Typography>
                </Grid>
              
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">CGST({invoData.cgst}%) :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; {(invoData.cgst*totprice)/100}
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="subtitle2">SGST({invoData.sgst}%) :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="subtitle2" alignSelf="center">
                    &#8377; {(invoData.sgst*totprice)/100}
                  </Typography>
                </Grid>
              </Grid> */}

              {
                tax && tax?.data.map((item)=>(
                  item.tax === "GST" ? 
                  <> 
                   <Grid item container spacing={1}>
                      <Grid item xs={12} align="right">
                        <Typography variant="subtitle2">{item.tax} : {item.value_type === "Percentage" ? `(${item.value}) %` : <>&#8377; {(item.value)}</>  }  </Typography>
                      </Grid>
                    </Grid>
                    { 
                      item.value_type === "Percentage" ?
                      <>
                      <Grid item container spacing={1}>
                      <Grid item xs={9} align="right">
                        <Typography variant="subtitle2">CGST({item.value/2}%) :</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {((item.value/2)*totprice)/100}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                      <Grid item xs={9} align="right">
                        <Typography variant="subtitle2">SGST({item.value/2}%) :</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {((item.value/2)*totprice)/100}
                        </Typography>
                      </Grid>
                    </Grid> 
                    </>
                      :
                      <>
                      <Grid item container spacing={1}>
                      <Grid item xs={9} align="right">
                        <Typography variant="subtitle2">CGST :</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {item.value/2}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid item container spacing={1}>
                      <Grid item xs={9} align="right">
                        <Typography variant="subtitle2">SGST :</Typography>
                      </Grid>
                      <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {item.value/2}
                        </Typography>
                      </Grid>
                    </Grid> 
                    </>
                      
                      
                    }
                   
                  </> : 
                  
                  <Grid item container spacing={1}>
                      <Grid item xs={9} align="right">
                        <Typography variant="subtitle2">{item.value_type === "Percentage" ? `${item.tax} (${item.value}) %` : item.tax } :</Typography>
                      </Grid>

                      {
                        item.value_type === "Percentage"? 
                        <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {((item.value/2)*totprice)/100}
                        </Typography>
                      </Grid>
                   
                        :
                        <Grid item xs={3} align="right">
                        <Typography variant="subtitle2" alignSelf="center">
                          &#8377; {item.value}
                        </Typography>
                      </Grid>
                        
                      }
                       </Grid>
                      

                ))
                  
               
              }

              <Divider sx={{ my: 1 }} />
              <Grid item container spacing={1}>
                <Grid item xs={9} align="right">
                  <Typography variant="h6">Grand Total :</Typography>
                </Grid>
                <Grid item xs={3} align="right">
                  <Typography variant="h6" alignSelf="center">
                    &#8377;  {(totprice==0)?0 : (((totprice- invoData.coupon_disc) + getTaxes) )}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Divider sx={{ my: 1 }} />
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Customer Name : {clientData.fname !== "" ? clientData.fname : invoData.cust_name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Phone No. : +91{clientData.contact !== null ?  clientData.contact :invoData.cust_no}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Email : { clientData.email !== "" ?  clientData.email : invoData.email}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Address : {clientData.address !== ""?  clientData.address :  invoData.cust_city}
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Typography variant="subtitle1" gutterBottom textAlign="center">
              {invoData.footer}
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Box sx={{ display: "flex", justifyContent: "right" }}>
              <Button variant="outlined">Print</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>








      <ManageOrderNavbar setwaiterData={setwaiterData} setclientData={setclientData} waiterData={waiterData} clientData={clientData} />

      <Grid
        container
        // xs={12}
        sx={{ height: "calc(100vh - 65px)" }}
      >
        {/* <SideFoodMenu /> */}
        {/* First Section */}
        <Grid
          className={classes.sideFoodMenu}
          item
          container
          direction="column"
          xs={2}
          sx={{
            height: "100%",
            borderRight: "1px solid",
            borderColor: "grey.800",
          }}
        >
          <Grid item xs={12}>
            <List sx={{ width: "100%" }} component="nav">
              <ListItemButton onClick={sideMenuClickHandler}>
                <ListItemText primary="Categories" />
                {openSideMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSideMenu} timeout="auto" unmountOnExit>
                <List component="div">
                  {cats.map((item, id) => {
                    return (
                      <ListItemButton
                        divider
                        alignItems="center"
                        selected={id === selectedIndex}
                        style={{
                          marginBottom: "2px",
                          padding: "16px",
                          backgroundColor:
                            id === selectedIndex ? "#239F54" : "inherit",
                          color: id === selectedIndex ? "#fff" : "inherit",
                        }}
                        onClick={(event) => onSelectItem(event, id)}
                      >
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              align="center"
                              variant="body1"
                              fontWeight={600}
                            >
                              {item.foodCategory}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>
        {/* Second Section */}
        <Grid
          item
          container
          xs={5}
          direction="column"
          sx={{
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "grey.800",
            height: "100%",
          }}
        >
          <Grid
            item
            container
            className={classes.sideFoodMenu}
            sx={{
              boxSizing: "border-box",
              padding: 1,
            }}
          >
            <Grid item xs={12}>
              <TextField
                fullWidth
                size="small"
                placeholder="Search Item"
                InputProps={{
                  startAdornment: <Search sx={{ marginRight: 1 }} />,
                }}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <AppBar
              position="sticky"
              className={classes.appbar}
              sx={{ bgcolor: "transparent" }}
            >
              <Tabs
                value={vegValue}
                onChange={onVegChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab
                  label="Veg"
                  icon={
                    <img src="https://img.icons8.com/color/25/000000/vegetarian-food-symbol.png" />
                  }
                  iconPosition="start"
                  value="veg"
                  sx={{ borderRadius: 0 }}
                />
                <Tab
                  label="Non-Veg"
                  icon={
                    <img src="https://img.icons8.com/color/25/000000/non-vegetarian-food-symbol.png" />
                  }
                  iconPosition="start"
                  value="non-veg"
                  sx={{ borderRadius: 0 }}
                />
              </Tabs>
            </AppBar>
          </Grid>
          {vegValue=="veg"?
          <Grid
          item
          container
          spacing={2}
          style={{
            boxSizing: "border-box",
            padding: "10px 20px",
          }}
          align="center"
        >
          {fooditems.map((row, id) => {
              return (
                <>
                  <Grid item xs={3}>
                    <Paper
                      onClick={() => onTableModalOpenHandler(id)}
                      fullWidth
                      elevation={6}
                      style={{
                        height: 75,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>{row.foodName}</Typography>
                    </Paper>
                  </Grid>
                </>
              )})}
                  <Grid item xs={3}>
                    <Paper
                      onClick={addPosition2}
                      fullWidth
                      elevation={6}
                      style={{
                        height: 75,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Item 2</Typography>
                    </Paper>
                  </Grid>
        </Grid>
          :
          <Grid
          item
          container
          spacing={2}
          style={{
            boxSizing: "border-box",
            padding: "10px 20px",
          }}
          align="center"
        >
                  <Grid item xs={3}>
                    <Paper
                      //onClick={addPosition2}
                      fullWidth
                      elevation={6}
                      style={{
                        height: 75,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Item 3</Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={3}>
                    <Paper
                      //onClick={addPosition2}
                      fullWidth
                      elevation={6}
                      style={{
                        height: 75,
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Typography>Item 4</Typography>
                    </Paper>
                  </Grid>
        </Grid>
          }

        </Grid>
        {/* Third Section */}
        <Grid
          item
          container
          xs={5}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
          }}
          direction="column"
        >
          {/* Tabs */}
          <Grid item container>
            <AppBar position="sticky" className={classes.appbar}>
              <Tabs
                value={tabValue}
                onChange={onTabChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab label="Dine In" value="dine-in" sx={{ borderRadius: 0 }} />
                <Tab
                  label="Delivery"
                  value="delivery"
                  sx={{ borderRadius: 0 }}
                />
                <Tab label="Pick Up" value="pick-up" sx={{ borderRadius: 0 }} />
              </Tabs>
            </AppBar>
          </Grid>
          <Grid item container sx={{ boxSizing: "border-box", padding: 1 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Orders</TableCell>
                  <TableCell align="center">Preparing</TableCell>
                  <TableCell align="center">Ready</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">{orderCount}</TableCell>
                  <TableCell align="center">5</TableCell>
                  <TableCell align="center">4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          <Grid
            container
            px={2}
            py={0.5}
            mb={1}
            justifyContent="space-between"
            //sx={{ borderTop: 1, borderBottom: 1 }}
          >
            <Grid item>
              {/*<Typography fontSize={15} component="span">
                Order No:{" "}
                <FormControl sx={{ height: 20, width: 140 }}>
                  <TextField size="small" InputProps={{ sx: { height: 27 } }} type="text" />
                </FormControl>
                <Typography component="span" fontWeight={600}>
                  546694
                  </Typography>
              </Typography>*/}
                  <FormControl sx={{ height: 40, width: 200 }}>
                  <TextField size="small" value={orderNo} onChange={(e)=>handleOrderChange(e)} InputProps={{ sx: { height: 40 } }} type="text" placeholder="Order No"/>
                  </FormControl>
            </Grid>
            <Grid item pr={1}>
              {/*<Typography fontSize={15} component="span">
                Invoice No:{" "}
                <FormControl sx={{ height: 20, width: 140 }}>
                <TextField size="small" InputProps={{ sx: { height: 27 } }} type="text" placeholder="Invoice No"/>
                </FormControl>
                <Typography component="span" fontWeight={600}>
                  98694
                </Typography>
              </Typography>*/}

              {/* Edited */}
          
                <Button variant="outlined" sx={{marginLeft:"5px"}} small>
                <Tooltip title="Tabel No">

                <Typography component="span" fontWeight={600} sx={{color:"primary",}}>
                <DeckOutlinedIcon /> 
                {tableInfo.tableNo}
                </Typography>
                </Tooltip>
                </Button>
                <Tooltip title="Section">
                <Button variant="outlined" sx={{marginLeft:"5px"}}>{tableInfo.section}</Button>
                </Tooltip>
              {/* <FormControl sx={{ height: 40, width: 200 }}>
                <TextField size="small" value={invoiceNo} onChange={(e)=>handleInvoiceChange(e)} InputProps={{ sx: { height: 40 } }} type="text" placeholder="Invoice No"/>
                </FormControl> */}
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item container flex={1} style={{ overflowY: "scroll" }}>
            <TableContainer>
            <Scrollbar>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>Items</TableCell>
                  <TableCell align="center">Qty.</TableCell>
                  <TableCell align="center">
                    Total(
                    <CurrencyRupee sx={{ fontSize: 14 }} />)
                  </TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  rows &&
                  rows.map((row, id) => {
                  return (
                    <TableRow key={row.sl} hover>
                      <TableCell>{row.item}</TableCell>
                      <TableCell align="center">
                        <IconButton onClick={()=>SubQuantity(id)} size="small" sx={{ color: "error.main" }}>
                          <Remove />
                        </IconButton>
                        <Typography
                          variant="body2"
                          component="span"
                          sx={{ margin: "0 10px" }}
                        >
                          {row.qty}
                        </Typography>
                        <IconButton onClick={()=>AddQuantity(id)}size="small" color="primary">
                          <Add />
                        </IconButton>
                      </TableCell>
                      <TableCell align="center">
                        <CurrencyRupee
                          fontSize="small"
                          style={{ color: "gray", marginRight: "5px" }}
                        />
                        {row.total}
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={()=>deletePosition(id)} size="small" sx={{ color: "error.main" }}>
                          <Delete />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                  })
                }


              </TableBody>
            </Table>
            </Scrollbar>
            </TableContainer>
          </Grid>
          {/* Bottom Controls */}
          <Grid item container direction="column">
            <Grid
              item
              container
              direction="column"
              className={classes.section3BillSection}
              sx={{
                boxSizing: "border-box",
                padding: "10px 20px",
                paddingBottom: "0px",
                borderBottom: "1px solid lightGrey",
                borderTop: "1px solid lightGrey",
              }}
            >
              <Grid
                py={0.5}
                item
                onClick={openModalHandler}
                style={{ cursor: "pointer" }}
                container
                justifyContent="space-between"
              >
                <Grid fontWeight={900} item>
                  Grand Total
                </Grid>
                <Button
                  color="secondary"
                  onClick={() => setOpen(!open)}
                  aria-label="expand"
                  size="small"
                >
                  {!openModal ? "view full details" : ""}
                </Button>
                <Grid fontWeight={900} item>
                  Rs. {totprice}
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 1,
              }}
            >
              {/* <FormControl>
                <RadioGroup row>
                  <FormControlLabel
                    value="cash"
                    control={<Radio defaultChecked />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Card"
                  />
                  <FormControlLabel
                    value="due"
                    control={<Radio />}
                    label="Due"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="part"
                    control={<Radio />}
                    label="Part"
                  />
                </RadioGroup>
              </FormControl> */}
              <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openCouponsModalHandler}> <ConfirmationNumberIcon/>  Coupons</Button>
              <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openSplitModalHandler}><SafetyDividerIcon/>  Split</Button>
              {/* <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openTaxesModalHandler}>Taxes</Button>
              <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openAdditonalChargesModalHandler}>Additional Charges</Button>
              <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openDeliveryModalHandler}>Delivery Charges</Button> */}
              <Button variant="outlined" color="secondary" activeClassName={classes.active} onClick={openPaymentModalHandler}><PaymentsIcon/>  Payment</Button>
            </Grid>
            <Grid
              className={classes.section3BillSection}
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 1,
                marginY: 1,
              }}
            >
              {/* <Button variant="outlined" activeClassName={classes.active} onClick={openSplitModalHandler}>Split</Button> */}
              <Button variant="outlined" activeClassName={classes.active}>KOT</Button>
              <Button variant="outlined" activeClassName={classes.active} onClick={openInvoiceModalHandler}>E-Bill</Button>
              <Button variant="outlined" activeClassName={classes.active} onClick={submit} >Place Order</Button>
              <Button variant="outlined" activeClassName={classes.active}>Cancel Order</Button>
              {/*<Button variant="outlined">Modify</Button>*/}
            </Grid>
            {/* Bottom Table */}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default PosInvoice;
