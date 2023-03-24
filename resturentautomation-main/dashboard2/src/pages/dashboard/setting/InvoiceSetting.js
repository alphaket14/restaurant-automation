import React, { useState, useCallback, Component, useEffect } from "react";
import axios from "axios";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  Checkbox,
  RadioGroup,
  InputLabel,
  ListItemText
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";


export default class InvoiceSetting extends Component{
  
  constructor(props){
  super(props);
  this.onChangeName = this.onChangeName.bind(this);
  this.onChangeGst = this.onChangeGst.bind(this);
  this.onChangeFssai = this.onChangeFssai.bind(this);
  this.onChangeState = this.onChangeState.bind(this);
  this.onChangeCity = this.onChangeCity.bind(this);
  this.onChangePincode = this.onChangePincode.bind(this);
  this.onChangeAddress = this.onChangeAddress.bind(this);
  this.onChangeOrderno = this.onChangeOrderno.bind(this);
  // this.onChangeInvoiceno = this.onChangeInvoiceno.bind(this);
  this.onChangeWaiter = this.onChangeWaiter.bind(this);
  this.onChangeAdmin = this.onChangeAdmin.bind(this);
  this.onChangeInvoice = this.onChangeInvoice.bind(this);
  this.onChangeCoupon_disc = this.onChangeCoupon_disc.bind(this);
  this.onChangeGst_per = this.onChangeGst_per.bind(this);
  this.onChangeSgst = this.onChangeSgst.bind(this);
  this.onChangeCgst = this.onChangeCgst.bind(this);
  this.onChangeIgst = this.onChangeIgst.bind(this);
  this.onChangeCharges = this.onChangeCharges.bind(this);
  this.onChangeFooter = this.onChangeFooter.bind(this);
  this.onChangeContact = this.onChangeContact.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onChangeDate = this.onChangeDate.bind(this);
  this.onChangeTime = this.onChangeTime.bind(this);
  this.onChangeCustNo = this.onChangeCustNo.bind(this);
  this.onChangecustName = this.onChangecustName.bind(this);
  this.onChangecustCity = this.onChangecustCity.bind(this);
  this.onChangeOrderType = this.onChangeOrderType.bind(this);
  this.onChangeOrderFrom = this.onChangeOrderFrom.bind(this);
  this.onChangeTableNo = this.onChangeTableNo.bind(this);
  this.onChangePaymentMode = this.onChangePaymentMode.bind(this);

  this.onSubmit=this.onSubmit.bind(this);
  this.state = { 
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
    date:"",
    time:null,
    cust_city:"",
    cust_name:"",
    cust_no:null,
    order_type:"",
    order_from:"",
    table_no:"",
    payment_mode:"",
  };
  }
  onChangecustCity(e){
    this.setState({
      cust_city: e.target.value
    });
  }
  onChangeCustNo(e){
    this.setState({
      cust_no: e.target.value
    });
  }
  onChangecustName(e){
    this.setState({
      cust_name: e.target.value
    });
  }
  onChangeDate(date){
    this.setState({
      date
    });
    // console.log(this.state.date)
  }
  onChangeTime(e){
    this.setState({
      time: e.target.value
    });
  }
  onChangeName(e){
    this.setState({
      name: e.target.value
    });
   
  }
  onChangeGst(e){
    this.setState({
      gst: e.target.value
    });
  }
  onChangeFssai(e){
    this.setState({
      fssai: e.target.value
    });
  }
  onChangeState(e){
    this.setState({
      state: e.target.value
    });
  }
  onChangeCity(e){
    this.setState({
      city: e.target.value
    });
  }
  onChangePincode(e){
    this.setState({
      pincode: e.target.value
    });
  }
  onChangeAddress(e){
    this.setState({
      address: e.target.value
    });
  }
  onChangeOrderno(e){
    this.setState({
      order_no: e.target.value
    });
  }
  // onChangeInvoiceno(e){
  //   this.setState({
  //     invoice_no: e.target.value
  //   });
  // }
  onChangeWaiter(e){
    this.setState({
      waiter: e.target.value
    });
  }
  onChangeAdmin(e){
    this.setState({
      admin: e.target.value
    });
  }
  onChangeInvoice(e){
    this.setState({
      invoice: e.target.value
    });
  }
  onChangeCoupon_disc(e){
    this.setState({
      coupon_disc: e.target.value
    });
  }
  onChangeGst_per(e){
    this.setState({
      gst_per: e.target.value
    });
  }
  onChangeSgst(e){
    this.setState({
      sgst: e.target.value
    });
  }
  onChangeCgst(e){
    this.setState({
      cgst: e.target.value
    });
  }
  onChangeIgst(e){
    this.setState({
      igst: e.target.value
    });
  }
  onChangeCharges(e){
    this.setState({
      charges: e.target.value
    });
  }
  onChangeFooter(e){
    this.setState({
      footer: e.target.value
    });
  }
  onChangeContact(e){
    this.setState({
      contact: e.target.value
    });
  }
  onChangeEmail(e){
    this.setState({
      email: e.target.value
    });
  }
  onChangeOrderType(e){
    
    this.setState({
      order_type: e.target.value
    })
  }
  onChangeOrderFrom(e){
    this.setState({
      order_from:  e.target.value
    })
  }
  onChangeTableNo(e){
    this.setState({
      table_no: e.target.value
    })
  }
  onChangePaymentMode(e){
    this.setState({
      payment_mode: e.target.value
    })
  }
  onSubmit(e){
    e.preventDefault();
    const invoice ={
      name: this.state.name,
      gst: this.state.gst,
      fssai: this.state.fssai,
      state: this.state.state,
      city: this.state.city,
      pincode: this.state.pincode,
      address: this.state.address,
      order_no: this.state.order_no,
      // invoice_no: this.state.invoice_no,
      waiter: this.state.waiter,
      admin: this.state.admin,
      invoice: this.state.invoice,
      coupon_disc: this.state.coupon_disc,
      gst_per: this.state.gst_per,
      sgst: this.state.sgst,
      cgst: this.state.sgst,
      igst: this.state.igst,
      charges: this.state.charges,
      footer: this.state.footer,
      contact: this.state.contact,
      email: this.state.email,
      // date: this.state.date,
      // time: this.state.time,
      cust_city: this.state.cust_city,
      cust_name: this.state.cust_name,
      cust_no: this.state.cust_no,
      order_type: this.state.order_type,
      order_from: this.state.order_from,
      table_no: this.state.table_no,
      payment_mode: "Cash",
    }
    console.log(invoice);
    axios.post('https://vast-pink-meerkat-suit.cyclic.app/invoice/add', invoice)
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
  }

  async componentDidMount (){
    const invoice = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/invoice');
    var index = invoice.data.length - 1;
    this.setState({
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
      cust_city:invoice.data[index].cust_city,
      cust_name:invoice.data[index].cust_name,
      cust_no:invoice.data[index].cust_no,
      // order_type:invoice.data[0].order_type,
      // order_from:invoice.data[0].cust_from,
      // table_no:invoice.data[0].table_no,
      // payment_mode:invoice.data[0].payment_mode,
    })
  }



  render(){
  
    const selections = ["Dine In", "Delivery", "Pickup"];
    const orderfrom = ["Zomato", "Swiggy", "Own App"];
    const tablenos = ["Table 1", "Table 2", "Table 3"];
    const paymentmode = ["Cash", "Credit Card", "Debit Card"];
    return (
    <>
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
      <Scrollbar>       
        <Grid item container rowSpacing={3} direction="column">
  
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Restaurant Name
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Restaurant Name" 
                required
                className="form-control"
                value={this.state.name}
                onChange={this.onChangeName}
                />
            </Grid>
          <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>

          <Grid item container spacing={2}>
          <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Restaurant Address
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Address"
                multiline
                rows={3}
                maxRows={5}
                required
                className="form-control"
                value={this.state.address}
                onChange={this.onChangeAddress}
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
                    placeholder="City" 
                    required
                    className="form-control"
                    value={this.state.city}
                    onChange={this.onChangeCity}
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
                placeholder="700119" 
                required
                className="form-control"
                value={this.state.pincode}
                onChange={this.onChangePincode}
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
                placeholder="State" 
                required
                className="form-control"
                value={this.state.state}
                onChange={this.onChangeState}
              />
              </Grid>
          <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>

          <Grid item container spacing={2}>
              <Grid item xs={3}>
                  <Typography variant="body1" gutterBottom>
                    Contact No.
                  </Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    type="text" 
                    placeholder="Phone" 
                    required
                    className="form-control"
                    value={this.state.contact}
                    onChange={this.onChangeContact}
                  />
              </Grid>
              <Grid item xs={3}>
                  <Typography variant="body1" gutterBottom>
                    Email
                  </Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    type="text" 
                    placeholder="Email" 
                    required
                    className="form-control"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                  />
              </Grid>
              <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                GST No.
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="GST No."
                required
                className="form-control"
                value={this.state.gst}
                onChange={this.onChangeGst}
              />
              </Grid>
              <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                FSSAI No.
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="FSSAI" 
                required
                className="form-control"
                value={this.state.fssai}
                onChange={this.onChangeFssai}
              />
              </Grid>
              <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>


          <Grid item container spacing={2}>
            <Grid item xs={3}>
            <Typography variant="body1" gutterBottom>
                Date
              </Typography>
            <DatePicker
              selected={this.state.date}
              type="date"
              inputFormat="dd/MM/yyyy"
              label="Date"
              onChange={this.onChangeDate}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth size="small" helperText={null}/>
              )}
            />
            </Grid>
            <Grid item xs={3} >
            <Typography variant="body1" gutterBottom>
                Time
              </Typography>
            <TextField onChange={this.onChangeTime} value={this.state.time}  fullWidth size="small" type="time" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Order No.
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Order No." 
                required
                className="form-control"
                value={this.state.order_no}
                onChange={this.onChangeOrderno}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Invoice No.
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Invoice No." 
                required
                className="form-control"
                value={this.state.invoice}
                onChange={this.onChangeInvoice}
              />
            </Grid>
            <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>

          <Grid item container spacing={2}>  
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Order Type
              </Typography>
              <FormControl
                fullWidth
                size="small"
              >
          
                <Select
                  value={this.state.order_from}
                  onChange={this.onChangeOrderFrom}
                 // renderValue={(selected) => selected.join(", ")}
                >
                  {orderfrom.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.state.order_from.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Order From
              </Typography>
              <FormControl
                fullWidth
                size="small"
              >
      
                <Select
                 
                  // id="select-type"
                  // size="small"
                  value={this.state.order_type}
                  onChange={this.onChangeOrderType}
                 // renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.state.order_type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Table No
              </Typography>
              <FormControl
                fullWidth
                size="small"
              >
                <Select
                  value={this.state.table_no}
                  onChange={this.onChangeTableNo}
                 // renderValue={(selected) => selected.join(", ")}
                >
                  {tablenos.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.state.table_no.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Waiter
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Name" 
                required
                className="form-control"
                value={this.state.waiter}
                onChange={this.onChangeWaiter}
              />
            </Grid>   
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Admin
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Name" 
                required
                className="form-control"
                value={this.state.admin}
                onChange={this.onChangeAdmin}
              />
            </Grid>   
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Payment Mode
              </Typography>
              <FormControl
                fullWidth
                size="small"
              >
                {/* <InputLabel id="select-type">Select Type</InputLabel> */}
                <Select
                 
                  id="select-type"
                  // size="small"
                  value={this.state.payment_mode}
                  onChange={this.onChangePaymentMode}
                 // renderValue={(selected) => selected.join(", ")}
                >
                  {paymentmode.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={this.state.payment_mode.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>   
            <Divider sx={{ mt: 2, width: "100%" }} />  
          </Grid>


          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Coupon Discount
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee />
                    </InputAdornment>
                  ),
                }}
                placeholder="Discount" 
                required
                className="form-control"
                value={this.state.coupon_disc}
                onChange={this.onChangeCoupon_disc}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Service Charges
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee />
                    </InputAdornment>
                  ),
                }}
                placeholder="Charges" 
                required
                className="form-control"
                value={this.state.charges}
                onChange={this.onChangeCharges}
              />
            </Grid>
          </Grid>


          <Grid item container spacing={2}>      
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                GST
              </Typography>
                <TextField size="small" fullWidth placeholder="GST" 
                 value={this.state.gst_per}
                 onChange={this.onChangeGst_per}
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
              <Typography variant="body1" gutterBottom>
                SGST
              </Typography>
              <TextField size="small" fullWidth placeholder="SGST" 
              value={this.state.sgst}
              onChange={this.onChangeSgst}
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
            <Typography variant="body1" gutterBottom>
                CGST
              </Typography>
              <TextField size="small" fullWidth placeholder="CGST" 
               value={this.state.cgst}
               onChange={this.onChangeCgst}
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
            <Typography variant="body1" gutterBottom>
                IGST
              </Typography>
              <TextField size="small" fullWidth placeholder="IGST" 
              value={this.state.igst}
              onChange={this.onChangeIgst}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>

          <Grid item container spacing={2}>
              <Grid item xs={3}>
                  <Typography variant="body1" gutterBottom>
                    Customer Name
                  </Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    type="text" 
                    placeholder="Customer Name" 
                    required
                    className="form-control"
                    value={this.state.cust_name}
                    onChange={this.onChangecustName}
                  />
              </Grid>
              <Grid item xs={3}>
                  <Typography variant="body1" gutterBottom>
                    Customer No
                  </Typography>
                  <TextField 
                    fullWidth 
                    size="small" 
                    type="text" 
                    placeholder="Customer No" 
                    required
                    className="form-control"
                    value={this.state.cust_no}
                    onChange={this.onChangeCustNo}
                  />
              </Grid>
              <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Customer City
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Customer City"
                required
                className="form-control"
                value={this.state.cust_city}
                onChange={this.onChangecustCity}
              />
              </Grid>
              <Divider sx={{ mt: 2, width: "100%" }} />
          </Grid>     


      
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Footer Note
              </Typography>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                placeholder="Note" 
                required
                className="form-control"
                value={this.state.footer}
                onChange={this.onChangeFooter}
                multiline
                rows={2}
              />
            </Grid>
          
          </Grid>

          <Grid item container justifyContent="right" spacing={1}>
            <Grid item xs={1}>
              <Button variant="outlined" fullWidth>
                Reset
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth variant="contained" onClick={this.onSubmit}>
                Save
              </Button>
            </Grid>
          </Grid>
         
        </Grid>
        </Scrollbar>
      </Grid>
    </>
  );
};
}
