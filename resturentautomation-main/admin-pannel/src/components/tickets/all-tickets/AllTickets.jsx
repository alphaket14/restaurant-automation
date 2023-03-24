import React from "react";
//mui components
import Box from '@mui/material/Box';
//custom components
import Table from "../../restaurants/table-template.jsx";
import Title from "../../restaurants/title.jsx";

const columns = [
    { field: 'id',
    renderHeader: () => (
      <strong>
        {'Sr. No.'}
      </strong>
    ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'restId',
  renderHeader: () => (
    <strong>
      {'ID'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'user',
  renderHeader: () => (
    <strong>
      {'User'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'title',
  renderHeader: () => (
    <strong>
      {'Title'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'priority',
  renderHeader: () => (
    <strong>
      {'Priority'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'category',
  renderHeader: () => (
    <strong>
      {'Category'}
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
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'createdDate',
  renderHeader: () => (
    <strong>
      {'Created Date'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
];

const createRow = (id, restId,user, title, priority, category, status, assignedTo, createdDate) => ({id, restId,user, title, priority, category, status, assignedTo, createdDate});

const rows = [
    createRow(1,"SP-18","User","Title","Critical","Category","Status","Assigned To","23-08-2022")
]

function AllTickets(){
  return(
    <div>
    <Title title="All Tickets"/>
    <br/>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table title="All Tickets" rows={rows} columns={columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default AllTickets;