import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//custom components
import CustomerDetails from "../../restaurants/customer-list/order-list/customer-details-holder.jsx";
import Table from "../../restaurants/table-template.jsx";
import TaskBar from "../../restaurants/taskbar-above-table.jsx";
import FullScreen from "../../restaurants/full-screen-template.jsx";

//importing data to be displayed
import * as dataCustomer from "../customers-data.jsx";
import * as dataRestaurants from "../../restaurants/restaurant-data.jsx";
import * as sendCustomerId from "./view-orders/view-orders-template.jsx";

//importing columns for restaurant list restaurantListTemplate
import * as tableData from "./restaurant-list-data.jsx"

//variable to store customer id
var customerid="";

//function to collect customer id from action button template
function getID(id){
  customerid=id;
}
//to send customer id to view order  template

function restaurantListTemplate(){
  //sending customer id to view-order-tempalte(next page)
  sendCustomerId.getCustomerId(customerid);
  //finding customer details from customer data using its // ID
  const customerDetail=dataCustomer.rows.find(item=>item.id==customerid);
  //storing id of restaurants from which this customer orders food
  var restaurants=customerDetail.restaurantId;
  //calling a function to send the data of restaurants of who's id is passed
  const rows=tableData.extractRestaurantData(restaurants);
  return (
    <div>
    {/*passing customer details as prop*/}
    <CustomerDetails customerDetail={customerDetail}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Restaurant List</Typography>
    <br/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Restaurant List"  tableRows={rows} tableColumns={tableData.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={rows} columns={tableData.columns} height={390} rowsPerPage={5}/>
    </div>

  )
}

export{getID,restaurantListTemplate}
