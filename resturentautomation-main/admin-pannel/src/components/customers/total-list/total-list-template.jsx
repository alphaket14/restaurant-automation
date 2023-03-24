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


function totalList(){
  return(
    <div>
    <Title title="Total List"/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table  title="Total List" rows={data.rows} columns={newColumns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default totalList;
