import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//custom components
import CustomerDetails from "../../../../restaurants/customer-list/order-list/customer-details-holder.jsx";
import RestaurantDetails from "../../../../restaurants/customer-list/restaurant-details.jsx";
import OrderDetails from "../../../../restaurants/customer-list/order-list/view-order/order-details-card.jsx";
import Table from "../../../../restaurants/table-template.jsx";
import TaskBar from "../../../../restaurants/taskbar-above-table.jsx";
import FullScreen from "../../../../restaurants/full-screen-template.jsx";

//importing data to be displayed
import * as dataCustomer from "../../../customers-data.jsx";
import * as dataRestaurants from "../../../../restaurants/restaurant-data.jsx";
import * as dataViewOrder from "../../../../restaurants/customer-list/order-list/view-order/view-order-data.jsx";
import * as dataViewOrders from "../../../../restaurants/customer-list/order-list/order-data.jsx";
//importing order data from restaurant menu folder only
import * as dataOrders from "../../../../restaurants/customer-list/order-list/view-order/view-order-data.jsx";

//variable to store customer id
var customerid="";
//variable to store restaurant id
var restaurantid="";
//variable to store restaurant id
var orderid="";


//function to collect order id from action button template
function getID(id){
  orderid=id;
}
//to recieve customer id from previous page that is view orders list template
function getCustomerId(id){
  customerid=id;
}
//to recieve restaurant id from previous page that is view orders list template
function getRestaurantId(id){
  restaurantid=id;
}

function viewOrderTemplate(){
  //finding customer details from customer data using its // ID
  const customerDetail=dataCustomer.rows.find(item=>item.id==customerid);
  //finding the restaurant details from restaurant data using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restaurantid);
  {/*now order details for card*/}
  //finding customer first
  const customer=dataViewOrders.rows.find(item=>item.id===customerid);
  const allOrders=customer.orders;
  //finding restaurant's orders who's id is passed
  const restaurant=allOrders.find(item=>item.resId==restaurantid)
  //now finally all order details of that particular restaurant
  const allOrderDetails=restaurant.order;
  //finally getting that particular order detail
  const orderDetails=allOrderDetails.find(item=>item.id==orderid);
  {/*order details for card over*/}
  //extracting orderd item data from dataOrders for tableRows
  const rows=dataOrders.rows.find(item=>item.id==orderid);
  console.log(rows);
  return(
    <div>
    <br/>
    {/*passing customer details as prop*/}
    <CustomerDetails customerDetail={customerDetail}/>
    <br/>
    <br/>
    {/*passing resturant details as prop*/}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    {/*passing order details as prop*/}
    <OrderDetails details={orderDetails}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Ordered Item List</Typography>
    <br/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Restaurant List"  tableRows={rows.items} tableColumns={dataOrders.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={rows.items} columns={dataOrders.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}

export{getID,getCustomerId,getRestaurantId,viewOrderTemplate}
