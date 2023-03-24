import { Helmet } from "react-helmet";
import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Radio,RadioGroup,
  FormControlLabel, FormLabel
} from "@material-ui/core";
import { v4 as uuid } from "uuid";

const itemStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
};

const OutletSettings = () => {
  const [dateFormat,setDateFormat]=useState("DD/MM/YYYY")
  const [timeZone, setTimeZone] = useState("+5:30 GMT Kolkata/India")
  const [currencySymbol, setCurrencySymbol] = useState("Rs")
  const [currencyPosition, setCurrencyPosition] = useState("Before Amount")
  const [precision, setPrecision] = useState("2 digit")
  const [paymentType, setPaymentType]=useState("prepayment")
  const [printFormat, setPrintFormat] = useState("noprint")
  const [exportResetSales, setExportResetSales]=useState("enable")
  const [printingMethodInvoice, setPrintingMethodInvoice] = useState("A")
  const [receiptPrinter, setReceiptPrinter] = useState("A")
  
  return (
  <>
    <Helmet>
      <title>Outlet Settings | Client Portal</title>
    </Helmet>

    <Box sx={{ px:5, py: 5 }}>
      <Typography variant="h4" sx={{ my: "20px" }}>
        Outlet Settings
      </Typography>

      <Paper sx={{ p: 7 }}>
        <Typography variant="subtitle1">
          Get your unique referral link and earn a commission for each order
          your referred clients place with us.
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 3 }}>
          Your link is:
        </Typography>
        <div sx={{ display: "flex"}} style={{display:"flex",flexDirection:"row", flexWrap:"wrap", width:"100%", justifyContent:"space-between"}}>
            <TextField style={{margin:"10px", flex:"0.22", minWidth:"250px"}} label="Restaurant name" ></TextField>
            <TextField style={{margin:"10px", flex:"0.22", minWidth:"250px"}} label="Invoice Logo" ></TextField>
            <TextField style={{margin:"10px", flex:"0.22", minWidth:"250px"}} lable = "Website"></TextField>
            <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Date Format</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Date Format"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>
        </div>
        <div sx={{ display: "flex"}} style={{display:"flex",flexDirection:"row", flexWrap:"wrap", width:"100%", justifyContent:"space-between"}}>
            <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Time Zone</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={timeZone}
                  label="Time Zone"
                  onChange={(e)=>setTimeZone(e.target.value)}
                >
                  <MenuItem value={"+5:30 GMT Kolkata/India"}>+5:30 GMT Kolkata/India</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

            <TextField onChange={(e)=>setCurrencySymbol(e.target.value)} style={{margin:"10px", flex:"0.22", minWidth:"250px"}} label="Currency Symbol" ></TextField>

            <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Currency Position</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={currencyPosition}
                  label="Currency Position"
                  onChange={(e)=>setCurrencyPosition(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Precision</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={precision}
                  label="Precision"
                  onChange={(e)=>setPrecision(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>
        </div>



        <div sx={{ display: "flex"}} style={{display:"flex",flexDirection:"row", flexWrap:"wrap", width:"100%", justifyContent:"space-between"}}>
            <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Default Customer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Default Customer"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>
            
            
            <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Default Payment Method</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Default Payment Method"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{flex:"0.22", minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Charge Type</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Charge Type"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

            
            <TextField style={{margin:"10px", flex:"0.22", minWidth:"250px"}} label="Charge (Amount/Percentage)" ></TextField>
        </div>

      <div style={{margin:"10px"}}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Payment type</FormLabel>
            <RadioGroup row aria-label="payment-type" name="row-radio-buttons-group" onChange={(e)=>setPaymentType(e.target.value)}>
              <FormControlLabel value="prepayment" control={<Radio />} label="Pre-payment" />
              <FormControlLabel value="postpayment" control={<Radio />} label="Post-payment" />
            </RadioGroup>
          </FormControl>
        </div>

        <div>
        <Typography variant="subtitle1">
          Export Daily Settings & Reset All Sales?
        </Typography>

        <FormControl style={{ minWidth:"250px",margin:"10px"}}>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={exportResetSales}
                  onChange={(e)=>setExportResetSales(e.target.value)}
                >
                  <MenuItem value={"enable"}>Enable</MenuItem>
                  <MenuItem value={"disable"}>Disable</MenuItem>
                
                </Select>
          </FormControl>


        </div>

        <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap"}}>
          <Button style={{margin:"10px", minWidth:"150px"}} variant="contained">White Label</Button>
          <Button style={{margin:"10px",minWidth:"150px"}} variant="contained">Printers</Button>
          <Button style={{margin:"10px",minWidth:"150px"}} variant="contained">Tax Settings</Button>
          <Button style={{margin:"10px",minWidth:"150px"}} variant="contained">Software Update</Button>
          <Button style={{margin:"10px",minWidth:"150px"}} variant="contained">License Transfer</Button>
        </div>

        <div style={{margin:"20px 10px 10px 10px", width:"100%"}}>
        <TextField style={{width:"40%"}}
          id="outlined-multiline-static"
          label="Invoice Footer"
          multiline
          rows={4}
          defaultValue=""
        />
        </div>

        <div style={{margin:"20px"}}>
        <FormControl style={{flex:"0.22", minWidth:"250px", margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Printing Method (Invoice) </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={printingMethodInvoice}
                  label="Printing Method (Invoice)"
                  onChange={(e)=>setPrintingMethodInvoice(e.target.value)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>

              <FormControl style={{flex:"0.22", minWidth:"250px", margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Receipt Printer</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={receiptPrinter}
                  label="Receipt Printer"
                  onChange={(e)=>setReceiptPrinter(e.target.value)}
                >
                  <MenuItem value={"A"}>A</MenuItem>
                  <MenuItem value={"B"}>B</MenuItem>
                  <MenuItem value={"C"}>C</MenuItem>
                </Select>
              </FormControl>
        </div>

        <div style={{margin:"10px"}}>
        <FormControl style={{ minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Default Payment Method</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Default Payment Method"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

              <FormControl component="fieldset" style={{ margin:"10px"}} >
                <FormLabel component="legend">Print Format</FormLabel>
                <RadioGroup row aria-label="payment-type" name="row-radio-buttons-group" onChange={(e)=>setPrintFormat(e.target.value)}>
                  <FormControlLabel value="noprint" control={<Radio />} label="No print" />
                  <FormControlLabel value="56mm" control={<Radio />} label="56mm" />
                  <FormControlLabel value="80mm" control={<Radio />} label="80mm" />
                </RadioGroup>
              </FormControl>
        </div>

        <div style={{margin:"10px"}}>
        <FormControl style={{ minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Printing</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Default Payment Method"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

              <FormControl component="fieldset" style={{ margin:"10px"}} >
                <FormLabel component="legend">Print Format</FormLabel>
                <RadioGroup row aria-label="payment-type" name="row-radio-buttons-group" onChange={(e)=>setPrintFormat(e.target.value)}>
                  <FormControlLabel value="noprint" control={<Radio />} label="No print" />
                  <FormControlLabel value="56mm" control={<Radio />} label="56mm" />
                  <FormControlLabel value="80mm" control={<Radio />} label="80mm" />
                </RadioGroup>
              </FormControl>
        </div>

        <div style={{margin:"10px"}}>
        <FormControl style={{ minWidth:"250px",margin:"10px"}}>
                <InputLabel id="demo-simple-select-label">Default Payment Method</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={dateFormat}
                  label="Default Payment Method"
                  onChange={(e)=>setDateFormat(e.target.value)}
                >
                  <MenuItem value={"DD/MM/YYYY"}>DD/MM/YYYY</MenuItem>
                  <MenuItem value={"MM/DD/YYYY"}>MM/DD/YYYY</MenuItem>
                  <MenuItem value={"YYYY/MM/DD"}>YYYY/MM/DD</MenuItem>
                </Select>
              </FormControl>

              <FormControl component="fieldset" style={{ margin:"10px"}} >
                <FormLabel component="legend">Print Format</FormLabel>
                <RadioGroup row aria-label="payment-type" name="row-radio-buttons-group" onChange={(e)=>setPrintFormat(e.target.value)}>
                  <FormControlLabel value="noprint" control={<Radio />} label="No print" />
                  <FormControlLabel value="56mm" control={<Radio />} label="56mm" />
                  <FormControlLabel value="80mm" control={<Radio />} label="80mm" />
                </RadioGroup>
              </FormControl>
        </div>

        <div style={{display:"flex", justifyContent:"center"}}>
        <Button variant="contained" size="large"> SUBMIT </Button>
        </div>

      </Paper>

      {/* <Card sx={{ mt: 4 }}>
        <CardContent>
          <Grid container spacing={4} sx={{ justifyContent: "space-around" }}>
            <Grid item md={2} sx={itemStyle}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Visitors
              </Typography>
              <Typography color="textPrimary" variant="h3">
                -
              </Typography>
            </Grid>
            <Grid item md={2} sx={itemStyle}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Signups
              </Typography>
              <Typography color="textPrimary" variant="h3">
                -
              </Typography>
            </Grid>
            <Grid item md={2} sx={itemStyle}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Clients
              </Typography>
              <Typography color="textPrimary" variant="h3">
                -
              </Typography>
            </Grid>
            <Grid item md={2} sx={itemStyle}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Unpaid Earnings
              </Typography>
              <Typography color="textPrimary" variant="h3">
                -
              </Typography>
            </Grid>
            <Grid item md={2} sx={itemStyle}>
              <Typography color="textSecondary" gutterBottom variant="h6">
                Total Earnings
              </Typography>
              <Typography color="textPrimary" variant="h3">
                -
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Typography variant="h4" sx={{ my: "20px" }}>
        Referrals
      </Typography>
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="subtitle2" align="center">
          When one of your referrals creates an account you'll see them here…
        </Typography>
      </Paper>

      <Typography variant="h4" sx={{ my: "20px" }}>
        Commissions
      </Typography>
      <Paper sx={{ p: 4, my: 4 }}>
        <Typography variant="subtitle2" align="center">
          When one of your referrals makes a payment you'll see a commission
          here…
        </Typography>
      </Paper> */}
    </Box>
  </>
);}

export default OutletSettings;
