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
        {label:"History", path:"/reports-product-history"},
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

function ProductSales(){
  return(
    <div>
    <Title title="Product Sales"/>
    <br/>
    {/* <Grid container spacing={3} sx={{mb:2}}>
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
      </Grid> */}
    {/*passing fullscreen component tool as prop in taskbar component*/}
    <Table title="Product Sales" rows={rows} columns={columns} height={390} rowsPerPage={5}/>
    </div>
  )
}
export default ProductSales;