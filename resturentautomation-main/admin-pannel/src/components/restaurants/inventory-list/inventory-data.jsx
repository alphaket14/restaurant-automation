import React from "react";

//custom components
import ActionButton from "../action-button-template.jsx";
import Button from '@mui/material/Button';

const stockColumns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Item Code No.'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'inventoryCategory',
  renderHeader: () => (
    <strong>
      {'Inventory Category.'}
    </strong>
  ),
  width: 160,
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
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'units',
  renderHeader: () => (
    <strong>
      {'Units'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'priceUnit',
  renderHeader: () => (
    <strong>
      {'Price/Unit'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'stock',
  renderHeader: () => (
    <strong>
      {'Current Stock'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'totalPrice',
  renderHeader: () => (
    <strong>
      {'Total Price'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'alertQty',
  renderHeader: () => (
    <strong>
      {'Alert Quantity'}
    </strong>
  ),
  width: 160,
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
  renderCell: (cellValues) => {
  return (
    <>
    {cellValues.value=="Active"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Inactive"?<div style={{color: "#AD0000",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:null}
    </>
  );
},
   width: 160,
   align:'center',
   headerAlign:'center'  },
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
    <ActionButton label={"Action"} dropDown={["Edit","Delete","Add Purchase"]}/>
  );
},
    sortable: false,
    width: 160,
  },
];


const foodColumns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Item Code No.'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'parentCategory',
  renderHeader: () => (
    <strong>
      {'Parent Category.'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'foodCategory',
  renderHeader: () => (
    <strong>
      {'Food Category'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'foodName',
  renderHeader: () => (
    <strong>
      {'Food Name'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'servingUnit',
  renderHeader: () => (
    <strong>
      {'Serving Unit'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'component',
  renderHeader: () => (
    <strong>
      {'Component'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'inQty',
  renderHeader: () => (
    <strong>
      {'In. Qty'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'outQty',
  renderHeader: () => (
    <strong>
      {'Out.Qty'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'currentStock',
  renderHeader: () => (
    <strong>
      {'Current Stock'}
    </strong>
  ),
  width: 160,
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
  renderCell: (cellValues) => {
  return (
    <>
    {cellValues.value=="Active"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Inactive"?<div style={{color: "#AD0000",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:null}
    </>
  );
},
   width: 160,
   align:'center',
   headerAlign:'center'  },

];

//firs id refers to restaurant id and second id refers to stock of food id
const rows = [
  {id:"1",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"2",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"3",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"4",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"5",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"6",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"7",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"8",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"9",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"10",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"11",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
  {id:"12",
  stockInventoryData:[
    {id:"1",inventoryCategory:"#",inventoryItem:"#",units:"20",priceUnit:"100",stock:"12",totalPrice:"1100",alertQty:"8",status:"Active",action:"button"},
    {id:"2",inventoryCategory:"#",inventoryItem:"#",units:"30",priceUnit:"80",stock:"02",totalPrice:"1300",alertQty:"2",status:"Inactive",action:"button"},
    {id:"3",inventoryCategory:"#",inventoryItem:"#",units:"25",priceUnit:"20",stock:"34",totalPrice:"1543",alertQty:"1",status:"Active",action:"button"},
    {id:"4",inventoryCategory:"#",inventoryItem:"#",units:"08",priceUnit:"110",stock:"54",totalPrice:"2400",alertQty:"10",status:"Active",action:"button"}
  ],
  foodInventoryData:[
    {id:"1",parentCategory:"#",foodCategory:"Veg",foodName:"Burger",servingUnit:"3",component:"#",inQty:"3",outQty:"2",currentStock:"4",status:"Active"},
    {id:"2",parentCategory:"#",foodCategory:"Non Veg",foodName:"Pizza",servingUnit:"5",component:"#",inQty:"1",outQty:"4",currentStock:"6",status:"Active"},
    {id:"3",parentCategory:"#",foodCategory:"Veg",foodName:"Dal",servingUnit:"2",component:"#",inQty:"2",outQty:"1",currentStock:"1",status:"Inactive"},

  ]},
]

export {stockColumns,foodColumns, rows}
