import React from "react";
//mui components
import {Paper,Grid,Typography} from '@mui/material';
//custom components
import Table from "../../../restaurants/table-template.jsx";
import Title from "../../../restaurants/title.jsx";
import ActionButton from "../../../restaurants/action-button-template.jsx";

const columns = [
    { field: 'id',
    renderHeader: () => (
      <strong>
        {'Restaurant No.'}
      </strong>
    ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'restName',
  renderHeader: () => (
    <strong>
      {'Restaurant Name'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'restType',
  renderHeader: () => (
    <strong>
      {'Restaurant Type'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'gstNo',
  renderHeader: () => (
    <strong>
      {'GST No.'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'city',
  renderHeader: () => (
    <strong>
      {'City'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'plan',
  renderHeader: () => (
    <strong>
      {'Plan'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'status',
  renderHeader: () => (
    <strong>
      {'Status'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'assignedTo',
  renderHeader: () => (
    <strong>
      {'Assigned To'}
    </strong>
  ),
  renderCell: () => {
    return (
      <ActionButton label={"Action"} dropDown={[
        {label:"View Profile", path:"/restaurants/total-list/view-profile"},
        {label:"Block"},
        {label:"Refund"},
        {label:"History", path:"/reports-email-history"},
      ]}/>
    );
  },
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
];

const createRow = (id, restName,restType,gstNo,city,plan,status) => ({id, restName,restType,gstNo,city,plan,status});

const rows = [
    createRow(1,"Name","Type",1234,"City","Plan","Active")
]

function EmailSales(){
  return(
    <div>
    <Title title="Email Sales"/>
    <br/>
    
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table title="Email Sales" rows={rows} columns={columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default EmailSales;