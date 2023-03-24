import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//custom components
import CustomerDetails from "../../../restaurants/customer-list/order-list/customer-details-holder.jsx";
import RestaurantDetails from "../../../restaurants/customer-list/restaurant-details.jsx";
import Table from "../../../restaurants/table-template.jsx";
import TaskBar from "../../../restaurants/taskbar-above-table.jsx";
import FullScreen from "../../../restaurants/full-screen-template.jsx";

import * as dataCustomer from "../../customers-data.jsx";
import * as dataRestaurants from "../../../restaurants/restaurant-data.jsx";
//importing columns for restaurant list restaurantListTemplate
import * as tableData from "./view-orders-data.jsx"

import * as sendIds from "./view-order/view-order-template.jsx";


//variable to store customer id
var customerid="";
//variable to store restaurant id
var restaurantid="";

//importing data to be displayed


//function to collect restaurant id from action button template
function getID(id){
  restaurantid=id;
}
//to recieve customer id from previous page that is restaurant list template
function getCustomerId(id){
  customerid=id;
}

//to send customer id and restaurant id to view order  template

function viewOrdersTemplate(){
  //sending customer id to view-order-tempalte(next page)
  sendIds.getCustomerId(customerid);
  //sending restaurant id to view-order-tempalte(next page)
  sendIds.getRestaurantId(restaurantid);
  //finding customer details from customer data using its // ID
  const customerDetail=dataCustomer.rows.find(item=>item.id==customerid);
  //finding the restaurant details from restaurant data using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restaurantid);
  //getting order history data from function defined in view orde data
  var rows=tableData.orderHistory(customerid,restaurantid);
  return(
    <div>
    <br/>
    {/*passing customer details as prop*/}
    <CustomerDetails customerDetail={customerDetail}/>
    <br/>
    <br/>
    {/*passing resturant details as prop */}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Order History</Typography>
    <br/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Restaurant List"  tableRows={rows} tableColumns={tableData.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={rows} columns={tableData.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}

export{getID,getCustomerId,viewOrdersTemplate}
