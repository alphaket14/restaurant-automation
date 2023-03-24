import React from "react";
//custom components
import ActionButton from "../../action-button-customer-menu.jsx";
import Button from '@mui/material/Button';

//orderhistory data
import * as orderData from "../../../restaurants//customer-list/order-list/order-data.jsx"

const columns = [
  { field: 'date',
  renderHeader: () => (
    <strong>
      {'Order Date'}
    </strong>
  ),
  width: 180,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Order ID '}
    </strong>
  ),
   width: 185,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},

  { field: 'invoice',
  renderHeader: () => (
    <strong>
      {'Invoice No.'}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center' },

   {
     field: 'orderType',
     renderHeader: () => (
       <strong>
         {'Order Type'}
       </strong>
     ),
     width: 180,
     align:'center',
     headerAlign:'center'
   },

   {
     field: 'orderFrom',
     renderHeader: () => (
       <strong>
         {'Order From'}
       </strong>
     ),
     width: 180,
     align:'center',
     headerAlign:'center'
   },

   {
     field: 'payment',
     renderHeader: () => (
       <strong>
         {'Payment'}
       </strong>
     ),
     renderCell: (cellValues) => {
     return (
       <>
       {cellValues.value=="Success"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Cancelled"?<div style={{color: "#E78F02",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Failed"?<div style={{color: "#AD0000 ",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:null}
       </>
     );
   },
     width: 180,
     align:'center',
     headerAlign:'center'
   },

   {
     field: 'paymentMode',
     renderHeader: () => (
       <strong>
         {'Payment Mode'}
       </strong>
     ),
     width: 180,
     align:'center',
     headerAlign:'center'
   },

   {
     field: 'action',
     renderHeader: () => (
       <strong>
         {'Action '}
       </strong>
     ),
     headerAlign:'center',
     align:'center',
     description: 'This will take you to new page.',
     renderCell: () => {
   return (
     <ActionButton label={"Action"} dropDown={["View Order","Invoice"]}/>
   );
 },
     sortable: false,
     width: 180,
   },
 ];

 function orderHistory(cid,rid){
     const customer = orderData.rows.find(item=>item.id==cid);
     const restaurantOrders=customer.orders.find(item=>item.resId==rid);
     const orders=restaurantOrders.order;
     return orders;
 };



 export{columns,orderHistory}
