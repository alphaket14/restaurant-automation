import React from "react";

const columns=[
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Item ID'}
    </strong>
  ),
  width: 220,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'itemName',
  renderHeader: () => (
    <strong>
      {'Item Name'}
    </strong>
  ),
  width: 220,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'itemPrice',
  renderHeader: () => (
    <strong>
      {'Item Price'}
    </strong>
  ),
  width: 220,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'quantity',
  renderHeader: () => (
    <strong>
      {'Quantity'}
    </strong>
  ),
  width: 220,
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
  width: 220,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

]

//first id refers to order id and inside items array referes to item's id
const rows=[
  {id:"232",
  items:[
    {id:"1",itemName:"Chicken Butter Masala",itemPrice:"150",quantity:"4",totalPrice:"600"},
    {id:"2",itemName:"Chicken Tikka",itemPrice:"180",quantity:"2",totalPrice:"360"},
    {id:"3",itemName:"Coca Cola",itemPrice:"60",quantity:"3",totalPrice:"180"}],
  },
  {id:"233",
  items:[
    {id:"1",itemName:"Boneless Chicken Chilli",itemPrice:"210",quantity:"1",totalPrice:"210"},
    {id:"2",itemName:"Fired Rice",itemPrice:"120",quantity:"2",totalPrice:"240"},
    {id:"3",itemName:"Juice",itemPrice:"90",quantity:"2",totalPrice:"180"}],
  },
  {id:"234",
  items:[
    {id:"1",itemName:"Samosa",itemPrice:"20",quantity:"4",totalPrice:"80"},
    {id:"2",itemName:"Vada Pav",itemPrice:"40",quantity:"2",totalPrice:"80"},
    {id:"3",itemName:"Dal",itemPrice:"120",quantity:"1",totalPrice:"120"}],
  },
  {id:"235",
  items:[
    {id:"1",itemName:"Biryani",itemPrice:"210",quantity:"2",totalPrice:"420"},
    {id:"2",itemName:"Korma",itemPrice:"320",quantity:"1",totalPrice:"320"},
    {id:"3",itemName:"Saag Paneer",itemPrice:"120",quantity:"1",totalPrice:"120"}],
  },
  {id:"236",
  items:[
    {id:"1",itemName:"Tikka Masal",itemPrice:"180",quantity:"2",totalPrice:"360"},
    {id:"2",itemName:"Poori",itemPrice:"20",quantity:"4",totalPrice:"80"}
    ],
  },
  {id:"237",
  items:[
    {id:"1",itemName:"Roti",itemPrice:"10",quantity:"4",totalPrice:"40"}
],
  },
  {id:"238",
  items:[
    {id:"1",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"2",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"3",itemName:"",itemPrice:"",quantity:"",totalPrice:""}],
  },
  {id:"239",
  items:[
    {id:"1",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"2",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"3",itemName:"",itemPrice:"",quantity:"",totalPrice:""}],
  },
  {id:"240",
  items:[
    {id:"1",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"2",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"3",itemName:"",itemPrice:"",quantity:"",totalPrice:""}],
  },
  {id:"241",
  items:[
    {id:"1",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"2",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"3",itemName:"",itemPrice:"",quantity:"",totalPrice:""}],
  },
  {id:"242",
  items:[
    {id:"1",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"2",itemName:"",itemPrice:"",quantity:"",totalPrice:""},
    {id:"3",itemName:"",itemPrice:"",quantity:"",totalPrice:""}],
  }
]
export{columns,rows}
