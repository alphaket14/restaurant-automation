import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { DataGrid } from '@mui/x-data-grid';

//custom functions to export id of which row was clicked
import * as func from "./to-get-send-id.jsx"

import FullScreenDialog from './full-screen-template.jsx';


const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  color:
    theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.85)',
  
  '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
    borderRight: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-iconSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
    borderBottom: `1px solid ${
      theme.palette.mode === 'light' ? '#f0f0f0' : '#303030'
    }`,
  },
  '& .MuiDataGrid-cell': {
    color:
      theme.palette.mode === 'light' ? 'rgba(0,0,0,.85)' : 'rgba(255,255,255,0.65)',
  },
}));



export default function DataTable(props) {
  {/*for setting rows per page*/}
  const [pageSize, setPageSize] = React.useState(props.rowsPerPage);
  const [idSelected, newIdSelected]=React.useState(null);
  func.getId(idSelected);
  const customHeight=props.height;
  return (
    <>
    {!props.isFullScreen ?         <FullScreenDialog sx={{align:"right"}} transaction={props.transaction} paymentModes={props.paymentModes} title={props.title}  tableRows={props.rows} tableColumns={props.columns} height={'100vh'} rowsPerPage={10}/>
: null}

    <Box style={{ height:customHeight, width: '100%',}}>
      <StyledDataGrid
        rows={props.rows}
        columns={props.columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5,10,20,30]}
        onSelectionModelChange={(id) => {
          const selectedIDs =id;
          newIdSelected(selectedIDs[0]);
        }}
      />
  </Box>
    </>
  );
}
