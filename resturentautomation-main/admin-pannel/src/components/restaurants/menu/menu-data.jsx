import React from "react";
//custom components
import ActionButton from "../action-button-template.jsx";
import Button from '@mui/material/Button';


const columns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Item Code.'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'image',
  renderHeader: () => (
    <strong>
      {'Food Image'}
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
      {'Parent Category'}
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
      {'Food Category.'}
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

  { field: 'variant',
  renderHeader: () => (
    <strong>
      {'Variant'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'salePrice',
  renderHeader: () => (
    <strong>
      {'Sale Price'}
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
    {cellValues.value=="Available"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Not Available"?<div style={{color: "#AD0000",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:null}
    </>
  );
},
  width: 160,
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
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },
      ];
//first id refers to restaurant id and inner id refers to menu item id
const rows=[
  {restaurantId:"1",
   dineIn:[
     {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
      {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
      {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
      {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
   ],
   online:[
     {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
     {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
     {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
   ],
   thridParty:[
     {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
     {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
   ]
 },

 {restaurantId:"2",
  dineIn:[
    {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
     {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
     {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
     {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
  ],
  online:[
    {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
  ],
  thridParty:[
    {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
  ]
},

{restaurantId:"3",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"4",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"5",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"6",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"7",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"8",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"9",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"10",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"11",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},

{restaurantId:"12",
 dineIn:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Batata Vada",variant:"#",salePrice:"120",status:"Available",action:"#"},
    {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Idli Sambhar",variant:"#",salePrice:"100",status:"Available",action:"#"},
    {id:"3",image:"#",parentCategory:"Non Veg",foodCategory:"Chinese",foodName:"Chicken Chilli",variant:"#",salePrice:"180",status:"Not Available",action:"#"},
    {id:"4",image:"#",parentCategory:"Veg",foodCategory:"Dessert",foodName:"Chocolate Whip",variant:"#",salePrice:"200",status:"Available",action:"#"}
 ],
 online:[
   {id:"1",image:"#",parentCategory:"Non Veg",foodCategory:"Starter",foodName:"Spring Roll",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Lunch",foodName:"Thali",variant:"#",salePrice:"120",status:"Not Available",action:"#"},
   {id:"3",image:"#",parentCategory:"Veg",foodCategory:"Snack",foodName:"Pasta",variant:"#",salePrice:"90",status:"Available",action:"#"}
 ],
 thridParty:[
   {id:"1",image:"#",parentCategory:"Veg",foodCategory:"Starter",foodName:"Greek Salad",variant:"#",salePrice:"80",status:"Available",action:"#"},
   {id:"2",image:"#",parentCategory:"Veg",foodCategory:"Breakfast",foodName:"Alo Paratha",variant:"#",salePrice:"30",status:"Not Available",action:"#"}
 ]
},
]
export{columns,rows}
