import React from "react";
import Typography from '@mui/material/Typography';
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../../../restaurants/table-template.jsx";
import TaskBar from "../../taskbar-above-table.jsx";
import FullScreen from "../../full-screen-template.jsx";
import VendorFullDetails from "./vendor-details-card.jsx";

//data of purchase
import * as data from "./purchase-return-data.jsx";
// data of Vendor
import * as dataVendors from "../../../vendors/vendors-data.jsx";


//variable to store vendor id
var vendorid="";
//function to collect customer id from action button template
function getID(id){
  vendorid=id;
}

function purchaseReturnTemplate(){
  //filtering the data from rows to get all those purchase who's vendor id is passed
  const filterRows=data.rows.filter(item=>item.id.includes(vendorid));
  {/*console.log(filterRows[0].orders) index o since includes() matches first word;*/}
  const filterRowsVendor=dataVendors.rows.filter(item=>item.id.includes(vendorid));
  return (
    <div>
    <VendorFullDetails vendorDetail={filterRowsVendor[0]}/>
    <br/>
    <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Purchase Return List</Typography>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <TaskBar tools={<FullScreen sx={{align:"right"}} title="Purchase Return List"  tableRows={filterRows[0].ret} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>}/>
    <Table rows={filterRows[0].ret} columns={data.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export {getID,purchaseReturnTemplate}
