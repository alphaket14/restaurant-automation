import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
//custom components
import RestaurantDetails from "../vendor-list/restaurant-details.jsx";
import Table from "../table-template.jsx";
import TaskBar from "../taskbar-above-table.jsx";
import FullScreen from "../full-screen-template.jsx";
import Tab from "./tab-template-2.jsx";


//importing data to be displayed
import * as dataRestaurants from "../restaurant-data.jsx";


//variable to store restaurant id
var restid="";

//function to collect restaurant id from view button template
function getID(id){
  restid=id;
}
//function to send restaurant id to tab template
function sendId(){
  console.log("sending id",restid)
  return restid;
}
function menuListTemplate(){
  //finding the restaurant from array of restaurant object using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restid);
  return (
    <div>
    {/*passing resturant details as prop */}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    <br/>
    <Tab/>
    </div>
  )
}
export {getID,sendId,menuListTemplate}
