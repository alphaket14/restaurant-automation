import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//custom components
import Table from "../../../../restaurants/table-template.jsx";
import TaskBar from "../../../taskbar-above-table.jsx";
import FullScreen from "../../../full-screen-template.jsx";
import OrderDetails from "./order-details-card.jsx";

//data of particular order according to order id
import * as data from "./view-order-data.jsx";
// General data of order which was rendered in order history table of particular customer
import * as dataOrders from "../order-data.jsx";


//variable to store order id
var orderid="";
var customerId="";
var restaurantId="";

//function to collect order id from action button template
function getID(id){
  orderid=id;
}
//to recieve customer id from previous page that is order list template
function getCustomerId(id){
  customerId=id;
}

//to recieve restaurant id from previous page that is order list template
function getRestaurantId(id){
  restaurantId=id;
}

function viewOrderTemplate(){
  //filtering the data from rows to get all the items who's order id is passed
  const filterRows=data.rows.filter(item=>item.id.includes(orderid));
  {/*console.log(filterRows[0])index o since includes() matches first word;*/}

  {/*first filtering by customer id from order-data.jsx*/}
  const customerOrderDetails=dataOrders.rows.filter(item=>item.id.includes(String(customerId)))
  {/*now filtering by restaurant id*/}
  const restaurantOrderDetails=customerOrderDetails[0].orders.filter(itm=>itm.resId.includes(String(restaurantId)));
  {/*now filtering the orders of that particular restaurant by particular order id */}
  const orderDetails=restaurantOrderDetails[0].order.filter(it=>it.id.includes(String(orderid)))
  return (
    <div>
    <OrderDetails details={orderDetails[0]}/>
    <br/>
      <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Ordered Item List</Typography>
      <br/>
      {/*passing fullscreen component tool as prop in taskbar component*/}
      <TaskBar tools={<FullScreen sx={{align:"right"}} title="Order History"  tableRows={filterRows[0].items} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>}/>
      <Table rows={filterRows[0].items} columns={data.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export {getID,getCustomerId,getRestaurantId,viewOrderTemplate}
