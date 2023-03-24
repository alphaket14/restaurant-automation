import React from "react";
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../table-template.jsx";
import Title from "../title.jsx";
import TaskBar from "../taskbar-above-table.jsx";
import FullScreen from "../full-screen-template.jsx";
//importing data to be displayed
import * as data from "../restaurant-data.jsx";

//manipulating rows and columns as per need:
//calling function to delete plan column and add status column and then return whole array of columns
const newColumns=data.addStatusColReq();
//filtering the data from rows to get all those rows who's status is approved
const filterRows=data.rows.filter(item=>item.status.includes("Requested"))



function requested(){
  return(
    <div>
    <Title title="Requested"/>
    <br/>

    <Table  title="Requested" rows={filterRows} columns={newColumns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default requested;
