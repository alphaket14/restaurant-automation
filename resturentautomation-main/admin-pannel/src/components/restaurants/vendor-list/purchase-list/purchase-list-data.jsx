import React from "react";
//custom components
import ActionButton from "../../../restaurants/action-button-template.jsx";
import Button from '@mui/material/Button';


const columns = [
  { field: 'date',
  renderHeader: () => (
    <strong>
      {'Purchase Date'}
    </strong>
  ),
  width: 120,
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
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoiceCategory',
  renderHeader: () => (
    <strong>
      {'Invoice Category'}
    </strong>
  ),
  width: 130,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'inventoryItem',
  renderHeader: () => (
    <strong>
      {'Inventory Item'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
  { field: 'ingredientUnit',
  renderHeader: () => (
    <strong>
      {'Ingredient Unit'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'orderQty',
  renderHeader: () => (
    <strong>
      {'Order Qty'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'invoiceAmt',
  renderHeader: () => (
    <strong>
      {'Invoice Amount'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'taxAmt',
  renderHeader: () => (
    <strong>
      {'Tax Amount'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'discountAmt',
  renderHeader: () => (
    <strong>
      {'Discount Amt'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'creditPeriod',
  renderHeader: () => (
    <strong>
      {'Credit Period'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

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
      {cellValues.value=="Completed"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Credit"?<div style={{color: "#E78F02",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Outstanding"?<div style={{color: "#AD0000 ",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:null}
      </>
    );
  },
    width: 150,
    align:'center',
    headerAlign:'center'
  },

  { field: 'debit',
  renderHeader: () => (
    <strong>
      {'Debit'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'credit',
  renderHeader: () => (
    <strong>
      {'Credit'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'balance',
  renderHeader: () => (
    <strong>
      {'Balance'}
    </strong>
  ),
  width: 120,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

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
    <ActionButton label={"Action"} dropDown={["View Invoice"]}/>
  );
},
    sortable: false,
    width: 100,
  },
];

//in rows id refers to vendor id and inside purchase id refers to purchase id
const rows=[
  {id:"1",
    purchase:
    [{id:"1",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
      {id:"2",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Credit",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"3",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Outstanding",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"4",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]
    },
  {id:"2",
    purchase:
    [{id:"5",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
      {id:"6",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"7",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"8",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"3",
    purchase:
    [{id:"9",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
      {id:"10",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"11",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
      {id:"12",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"4",
  purchase:
  [{id:"13",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"14",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"15",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"16",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"5",
  purchase:
  [{id:"17",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"18",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"19",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"20",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"6",
  purchase:
  [{id:"21",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"22",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"23",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"25",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"7",
  purchase:
  [{id:"25",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"26",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"27",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"28",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"8",
  purchase:
  [{id:"29",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"30",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"31",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"32",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"9",
  purchase:
  [{id:"33",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"34",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"35",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"36",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"10",
  purchase:
  [{id:"37",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"38",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"39",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"40",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"11",
  purchase:
  [{id:"41",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"42",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"43",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"44",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
  {id:"12",
  purchase:
  [{id:"45",date:"28/06/2022",invoice:"4234324",invoiceCategory:"232",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button" },
    {id:"46",date:"08/07/2022",invoice:"8734323",invoiceCategory:"233",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"47",date:"14/07/2022",invoice:"1257324",invoiceCategory:"234",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"},
    {id:"48",date:"28/07/2022",invoice:"9034324",invoiceCategory:"235",inventoryItem:"Vegetables",ingredientUnit:"20",orderQty:"18",invoiceAmt:"1020",discountAmt:"200",taxAmt:"120",creditPeriod:"#",payment:"Completed",debit:"500",credit:"500",balance:"200",action:"button"}]},
];
//to send vendor's purchase list data for vendor's menu routing
function purchaseListData(vid,rid){
    const vendor = rows.find(item=>item.id==vid);
    const purchaseList=vendor.purchase;
    return purchaseList;
};

export{columns,rows,purchaseListData}
