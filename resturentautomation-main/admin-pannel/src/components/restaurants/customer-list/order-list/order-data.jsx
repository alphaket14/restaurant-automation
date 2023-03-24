import React from "react";
//custom components
import ActionButton from "../../../restaurants/action-button-template.jsx";
import Button from '@mui/material/Button';
import ViewOrderPopup from "./view-order/view-order-popup-template.jsx";

const columns = [
  { field: 'date',
  renderHeader: () => (
    <strong>
      {'Order Date'}
    </strong>
  ),
  width: 120,
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
   width: 135,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},

  { field: 'invoice',
  renderHeader: () => (
    <strong>
      {'Invoice No.'}
    </strong>
  ),
   width: 170,
   align:'center',
   headerAlign:'center' },

   { field: 'discount',
   renderHeader: () => (
     <strong>
       {'Discount Amt '}
     </strong>
   ),
    width: 115,
    align:'center',
    headerAlign:'center' },

  {
    field: 'tax',
    renderHeader: () => (
      <strong>
        {'Tax Amt'}
      </strong>
    ),
    width: 150,
    align:'center',
    headerAlign:'center'
  },
  {
    field: 'invoiceAmt',
    renderHeader: () => (
      <strong>
        {'Invoice Amt'}
      </strong>
    ),
    width: 150,
    align:'center',
    headerAlign:'center'
  },
  {
    field: 'orderType',
    renderHeader: () => (
      <strong>
        {'Order Type'}
      </strong>
    ),
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 150,
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
    width: 100,
  },
];
//in rows id refers to customer id and inside id refers to particular restaurant id and next  id refers to order id
const rows=[
  {id:"1",
    orders:
    [
      {resId:"1",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"}
      ]},
      {resId:"2",order:[
        {date:"27/03/2020",id:"235",invoice:"9342256",discount:"10%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"09/04/2021",id:"236",invoice:"4579947",discount:"10%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
      ]},
      {resId:"3",order:[
        {date:"28/01/2021",id:"237",invoice:"6402073",discount:"15%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
      ]}
  ]},

  {id:"2",
    orders:
    [
      {resId:"2",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"5",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"3",
    orders:
    [
      {resId:"1",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"8",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"6",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"4",
    orders:
    [
      {resId:"4",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"5",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"5",
    orders:
    [
      {resId:"5",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"2",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"6",
    orders:
    [
      {resId:"6",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"4",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"7",
    orders:
    [
      {resId:"1",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"11",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"8",
    orders:
    [
      {resId:"8",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"12",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"9",
    orders:
    [
      {resId:"9",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"2",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"10",
    orders:
    [
      {resId:"10",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"5",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"11",
    orders:
    [
      {resId:"11",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"7",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

  {id:"12",
    orders:
    [
      {resId:"12",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"2",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]},
      {resId:"3",order:[
        {date:"28/06/2022",id:"232",invoice:"4234324",discount:"5%",tax:123,invoiceAmt:1233,orderType:"DineIn",orderFrom:"Zomato",payment:"Success",paymentMode:"Cash",action:"dropDown" },
        {date:"08/07/2022",id:"233",invoice:"8734323",discount:"5%",tax:323,invoiceAmt:2236,orderType:"Delivery",orderFrom:"App",payment:"Failed",paymentMode:"Debit Card",action:"dropDown"},
        {date:"14/07/2022",id:"234",invoice:"1257324",discount:"5%",tax:273,invoiceAmt:2233,orderType:"Delivery",orderFrom:"Swiggy",payment:"Cancelled",paymentMode:"Credit Card",action:"dropDown"},
        {date:"28/07/2022",id:"235",invoice:"9034324",discount:"5%",tax:425,invoiceAmt:4673,orderType:"Pickup",orderFrom:"Table No.23",payment:"Success",paymentMode:"Wallet",action:"dropDown"}
      ]}
  ]},

];
export{columns,rows}
