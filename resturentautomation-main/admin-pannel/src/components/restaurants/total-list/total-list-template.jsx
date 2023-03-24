import React from "react";
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../table-template.jsx";
import Title from "../title.jsx";
import FullScreen from "../full-screen-template.jsx";
import TaskBar from "../taskbar-above-table.jsx";
//importing data to be displayed
import * as data from "../restaurant-data.jsx";

function totalList(){
  return(
    <div>
    <Title title="Total List"/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table  title="Total List" rows={data.rows} columns={data.columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default totalList;
