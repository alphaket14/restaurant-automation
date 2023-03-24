import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//custom components
import RestaurantDetails from "./restaurant-details.jsx";
import Table from "../../restaurants/table-template.jsx";
import TaskBar from "../taskbar-above-table.jsx";
import FullScreen from "../full-screen-template.jsx";
//importing data to be displayed
import * as data from "../../vendors/vendors-data.jsx";
import * as dataRestaurants from "../restaurant-data.jsx";

//variable to store restaurant id
var restid="";

//function to collect restaurant id from view button template
function getID(id){
  restid=id;
}

function vendorListTemplate(){
  //filtering the data from rows to get all those vendors who's restaurant id is passed
  const filterRows=data.rows.filter(item=>item.restaurantId.includes(String(restid)));
  //finding the restaurant from array of restaurant object using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restid);
  return (
    <div>
    {/*passing resturant details as prop */}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Vendor List</Typography>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Vendor List"  tableRows={filterRows} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={filterRows} columns={data.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export {getID,vendorListTemplate}
