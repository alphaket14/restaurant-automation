import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//custom components
import VendorDetails from "../../../restaurants/vendor-list/purchase-list/vendor-details-card.jsx";
import RestaurantDetails from "../../../restaurants/customer-list/restaurant-details.jsx";
import Table from "../../../restaurants/table-template.jsx";
import TaskBar from "../../../restaurants/taskbar-above-table.jsx";
import FullScreen from "../../../restaurants/full-screen-template.jsx";

import * as dataVendor from "../../vendors-data.jsx";
import * as dataRestaurants from "../../../restaurants/restaurant-data.jsx";
//importing columns for purchase return
import * as tableData from "../../../restaurants/vendor-list/purchase-return/purchase-return-data.jsx";

//variable to store customer id
var vendorid="";
//variable to store restaurant id
var restaurantid="";

//importing data to be displayed


//function to collect restaurant id from action button template
function getID(id){
  restaurantid=id;
}
//to recieve vendor id from previous page that is restaurant list template
function getVendorId(id){
  vendorid=id;
}

function viewPurchaseReturnTemplate(){
  console.log("vendor id received is",vendorid)
  //finding vendor details from vendor data using its // ID
  const vendorDetail=dataVendor.rows.find(item=>item.id==vendorid);
  //finding the restaurant details from restaurant data using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restaurantid);
  //getting purchase list data from function defined in purchase list data
  var rows=tableData.purchaseReturnData(vendorid,restaurantid);
  return(
    <div>
    <br/>
    {/*passing customer details as prop*/}
    <VendorDetails vendorDetail={vendorDetail}/>
    <br/>
    <br/>
    {/*passing resturant details as prop */}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Purchase Return</Typography>
    <br/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Purchase Return"  tableRows={rows} tableColumns={tableData.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={rows} columns={tableData.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}

export{getID,getVendorId,viewPurchaseReturnTemplate}
