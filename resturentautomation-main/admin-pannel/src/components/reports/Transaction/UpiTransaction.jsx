import React from "react";
//mui components
import {Paper,Grid,Typography} from '@mui/material';
//custom components
import Table from "../../restaurants/table-template.jsx";
import Title from "../../restaurants/title.jsx";
import ActionButton from "../../restaurants/action-button-template.jsx";

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

  { field: 'transactionDate',
  renderHeader: () => (
    <strong>
      {'Transaction Date'}
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
      {'Restaurant ID'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'orderId',
  renderHeader: () => (
    <strong>
      {'Order ID'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoice',
  renderHeader: () => (
    <strong>
      {'Invoice No.'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'orderType',
  renderHeader: () => (
    <strong>
      {'Order Type'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'paymentMode',
  renderHeader: () => (
    <strong>
      {'Payment Mode'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'total',
  renderHeader: () => (
    <strong>
      {'Grand Total'}
    </strong>
  ),
  renderCell:(cellValue) => (
    '\u20B9' + cellValue.value
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'action',
  renderHeader: () => (
    <strong>
      {'Action'}
    </strong>
  ),
  renderCell: () => {
    return (
      <ActionButton label={"Action"} dropDown={[
        {label:"View Profile"},
      ]}/>
    );
  },
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
];

const createRow = (id, transactionDate, restId, orderId, invoice, orderType, paymentMode,total,status) => ({id, transactionDate, restId, orderId, invoice, orderType, paymentMode,total,status});

const rows = [
    createRow(1,"29-08-2022","ID","Order ID","Invoice","Dine In","Google Pay",500,"Completed")
]

function UpiTransaction(){
  return(
    <div>
    <Title title="UPI Transaction"/>
    <br/>

    <Grid container spacing={3} sx={{mb:2}}>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">No. of Transactions</Typography>

            <Typography variant="h6" component="div">
            100
            </Typography>
          </Paper>
        </Grid>

        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Total Amount</Typography>

            <Typography variant="h6" component="div">
            &#8377;1000
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table transaction paymentModes={["PayTm","PhonePe","Google Pay"]} title="Upi Transaction" rows={rows} columns={columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default UpiTransaction;