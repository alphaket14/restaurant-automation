import React from "react";
//mui components
import {Grid,Typography,Box,Paper} from "@mui/material"
//custom components
import Table from "../../../restaurants/table-template.jsx";
import Title from "../../../restaurants/title.jsx";
import ActionButton from "../../../restaurants/action-button-template.jsx";

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

  { field: 'startDate',
  renderHeader: () => (
    <strong>
      {'Start Date'}
    </strong>
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'endDate',
  renderHeader: () => (
    <strong>
      {'End Date'}
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

  { field: 'discount',
  renderHeader: () => (
    <strong>
      {'Discount'}
    </strong>
  ),
  renderCell:(cellValue)=>(
    '\u20b9' + cellValue.value
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'tax',
  renderHeader: () => (
    <strong>
      {'Tax Amount'}
    </strong>
  ),
  renderCell:(cellValue)=>(
    '\u20b9' + cellValue.value
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'serviceFees',
  renderHeader: () => (
    <strong>
      {'Service Fees'}
    </strong>
  ),
  renderCell:(cellValue)=>(
    '\u20b9' + cellValue.value
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'amount',
  renderHeader: () => (
    <strong>
      {'Amount Paid'}
    </strong>
  ),
  renderCell:(cellValue)=>(
    '\u20b9' + cellValue.value
  ),
  width: 150,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
];

const createRow = (id,plan, startDate,endDate,paymentMode,discount,tax, serviceFees, amount) => ({id,plan, startDate,endDate,paymentMode,discount,tax, serviceFees, amount});

const rows = [
    createRow(1,"Plan","25-08-2022","26-10-2022","Mode",100,20,100,500)
]

function ProductHistory(){
  return(
    <div>
    <Title title="Product History"/>
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
            <Typography variant="body1">Discount</Typography>

            <Typography variant="h6" component="div">
            &#8377;100
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
              bgcolor: "rgba(255, 72, 66, 0.5)"
            }}
          >
            <Typography variant="body1">Tax Amount</Typography>

            <Typography variant="h6" component="div">
            &#8377;20
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
            <Typography variant="body1">Service Fees</Typography>

            <Typography variant="h6" component="div">
            &#8377;50
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
              bgcolor: "rgba(255, 193, 7, 0.5)"
            }}
          >
            <Typography variant="body1">Amount Paid</Typography>

            <Typography variant="h6" component="div">
            &#8377;500
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table title="Product History" rows={rows} columns={columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default ProductHistory;