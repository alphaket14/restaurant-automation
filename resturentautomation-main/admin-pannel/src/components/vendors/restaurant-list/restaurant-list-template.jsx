import React from "react";
//mui components
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//custom components
import VendorDetails from "../../restaurants/vendor-list/purchase-list/vendor-details-card.jsx";
import Table from "../../restaurants/table-template.jsx";
import TaskBar from "../../restaurants/taskbar-above-table.jsx";
import FullScreen from "../../restaurants/full-screen-template.jsx";

//importing data to be displayed
import * as dataVendor from "../vendors-data.jsx";

//importing columns for restaurant list restaurantListTemplate
import * as tableData from "./restaurant-list-data.jsx"

//to send vendor id to view purchase list template
import * as sendVendorIdPL from "./purchase-list/purchase-list-template.jsx";

//to send vendor id to view purchase return template
import * as sendVendorIdPR from "./purchase-return/purchase-return-template.jsx";

//variable to store vendor id
var vendorid="";

//function to collect vendor id from action button template
function getID(id){
  vendorid=id;
}


function restaurantListTemplate(){
  //sending vendor id to purchase-list-tempalte(next page)
  sendVendorIdPL.getVendorId(vendorid);
  //sending vendor id to purchase-return-tempalte(next page)
  sendVendorIdPR.getVendorId(vendorid);
  //finding vendor details from vendor data using its // ID
  const vendorDetail=dataVendor.rows.find(item=>item.id==vendorid);
  //storing id of restaurants from which this vendor deliver items
  var restaurants=vendorDetail.restaurantId;
  //calling a function to send the data of restaurants of who's id is passed
  const rows=tableData.extractRestaurantData(restaurants);
  return (
    <div>
    {/*passing customer details as prop*/}
    <VendorDetails vendorDetail={vendorDetail}/>
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
