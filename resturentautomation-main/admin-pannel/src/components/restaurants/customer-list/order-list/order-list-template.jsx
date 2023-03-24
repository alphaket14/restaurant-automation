import React from "react";
import Typography from '@mui/material/Typography';
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../../../restaurants/table-template.jsx";
import TaskBar from "../../taskbar-above-table.jsx";
import FullScreen from "../../full-screen-template.jsx";
import CustomerFullDetails from "./customer-details-holder.jsx";

//data of order
import * as data from "./order-data.jsx";
// data of Customers
import * as dataCustomers from "../../../customers/customers-data.jsx";
//to send customer id to view order template
import * as sendCustomerId from "./view-order/view-order-template.jsx";
//to send restaurant id to view order template
import * as sendRestaurantId from "./view-order/view-order-template.jsx";

//variable to store customer id
var customerid="";
//variable to store restaurant id
var restaurantId="";

//function to collect customer id from action button template
function getID(id){
  customerid=id;
}
//to recieve restaurant id from previous page that is customer list template
function getRestaurantId(id){
  restaurantId=id;
}

function orderListTemplate(){
  //sending customer id to view-order-tempalte
  sendCustomerId.getCustomerId(customerid);
  //sending restaurant id further to render details card in view order template
  sendRestaurantId.getRestaurantId(restaurantId);
  //filtering the data from rows to get all the customer who's customer id is passed
  const filter=data.rows.filter(item=>item.id.includes(String(customerid)));
  //Now filter the data to get the orders of that customer according to particular restaurant id passed
  const f=filter[0].orders.filter(itm=>itm.resId.includes(String(restaurantId)));
  //deatails of order
  const orderList=f[0].order
  {/*console.log(filterRows[0].orders) index o since includes() matches first word;*/}
  const filterRowsCustomer=dataCustomers.rows.filter(item=>item.id.includes(customerid));
  {/*console.log(filterRowsCustomer[0]) indexo since includes() matches first word;*/}

  return(
    <div>
    <br/>
    <CustomerFullDetails customerDetail={filterRowsCustomer[0]}/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Order History</Typography>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Order History"  tableRows={orderList} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={orderList} columns={data.columns} height={390} rowsPerPage={5}/>
   </div>
  )
}
export {getID,getRestaurantId,orderListTemplate}
