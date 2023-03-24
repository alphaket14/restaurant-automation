import React from "react";
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../../restaurants/table-template.jsx";
import Title from "../../restaurants/title.jsx";
import FullScreen from "../../restaurants/full-screen-template.jsx";
import TaskBar from "../../restaurants/taskbar-above-table.jsx";
//importing data to be displayed
import * as data from "../customers-data.jsx";

//manipulating rows and columns as per need:
//calling function to delete old action column and add  new action column and then return whole array of columns
const newColumns=data.addActionNew();

//filtering the data from rows to get all those rows who's origin is dine in //note column will remain same in this table unlike restaurant tables
const filterRows=data.rows.filter(item=>item.origin.includes("App"))

function totalList(){
  return(
    <div>
    <Title title="App"/>
    <br/>
    
    <Table title="App" rows={filterRows} columns={newColumns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default totalList;
