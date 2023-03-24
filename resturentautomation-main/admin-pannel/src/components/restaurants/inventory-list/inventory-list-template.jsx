import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//custom components
import RestaurantDetails from "../vendor-list/restaurant-details.jsx";
import DownloadOption from "../download-button.jsx";
import UploadOption from "../upload-button.jsx";

//importing data to be displayed
import * as data from "./inventory-data.jsx";
import * as dataRestaurants from "../restaurant-data.jsx";
import Table from "../table-template.jsx";
import TaskBar from "../taskbar-above-table-3-tools.jsx";
import FullScreen from "../full-screen-template-with-tools.jsx";

//variable to store restaurant id
var restid="";

//function to collect restaurant id from view button template
function getID(id){
  restid=id;
};

function inventoryListTemplate(){
  //filtering the data from rows to get all those vendors who's restaurant id is passed
  const filterRows=data.rows.filter(item=>item.id.includes(restid));
  //console.log(filterRows[0]) since includes matches all related
  //finding the restaurant from array of restaurant object using restaurant id
  var restDetails = dataRestaurants.rows.find(item => item.id === restid);
  return (
    <div>
    {/*passing resturant details as prop */}
    <RestaurantDetails details={restDetails}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Stock Inventory</Typography>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Stock Inventory"  tableRows={filterRows[0].stockInventoryData} tableColumns={data.stockColumns} height={'100vh'} rowsPerPage={10}/>} download={<DownloadOption/>} upload={<UploadOption/>}/>
    <Table rows={filterRows[0].stockInventoryData} columns={data.stockColumns} height={390} rowsPerPage={5}/>
    <br/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Food Inventory</Typography>
    <br/>
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Food Inventory"  tableRows={filterRows[0].foodInventoryData} tableColumns={data.foodColumns} height={'100vh'} rowsPerPage={10}/>}download={<DownloadOption/>} upload={<UploadOption/>}/>
    <Table rows={filterRows[0].foodInventoryData} columns={data.foodColumns} height={390} rowsPerPage={5}/>
    </div>
  )
}

export {getID,inventoryListTemplate}
