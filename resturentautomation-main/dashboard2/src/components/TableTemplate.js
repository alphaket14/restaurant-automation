import React, { useState } from "react";

import Fullscreen from "./Fullscreen";

import Scrollbar from "./Scrollbar";

import SimpleBarReact from "simplebar-react";
// material
import { alpha, experimentalStyled } from "@material-ui/core/styles";
import { TableContainer, Paper, Grid } from "@mui/material";

import { styled } from "@mui/material/styles";

import { DataGrid } from "@mui/x-data-grid";

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  "& .MuiDataGrid-iconSeparator": {
    display: "none",
  },
  "& .MuiDataGrid-root":{
    borderRadius:0,
  },
  
  "& .MuiDataGrid-columnHeader, .MuiDataGrid-cell": {
    borderRight: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "rgba(145, 158, 171, 0.24)"
    }`,
  },
  "& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell": {
    borderBottom: `1px solid ${
      theme.palette.mode === "light" ? "#f0f0f0" : "none"
    }`,
  },

  "& .MuiDataGrid-columnHeaders ": {
    background: `${
      theme.palette.mode === "light" ? "#f0f0f0" : "rgba(145, 158, 171, 0.16)"
    }`,
    borderRadius:'none!important'
  },

  "& ::-webkit-scrollbar": {
    width: 10,
    height:6,
    
  },

  "& ::-webkit-scrollbar-track": {
    width: 10,
    height: 6,

  },

  "& ::-webkit-scrollbar-thumb": {
    width: 10,
    height: 6,
    background:"rgba(145, 158, 171, 0.24)",
    borderRadius:5,
    opacity:0.9,
    margin:2
  },
}));

const TableTemplate = ({ rows, columns, ...others }) => {
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const table = (
    <Grid
      container
      style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        margin: "20px 0px",
      }}
      direction="column"
      rowGap={2}
    >
      <TableContainer>
        <Scrollbar>
          <StyledDataGrid
            rows={rows}
            autoHeight
            columns={columns}
            pageSize={rowsPerPage}
            onPageSizeChange={(newPageSize) => setRowsPerPage(newPageSize)}
            rowsPerPageOptions={[5, 10, 15, 20]}
          />
        </Scrollbar>
      </TableContainer>
    </Grid>
  );

  return (
    <>
      {/* <Fullscreen content={table} /> */}
      {table}
    </>
  );
};

export default TableTemplate;
