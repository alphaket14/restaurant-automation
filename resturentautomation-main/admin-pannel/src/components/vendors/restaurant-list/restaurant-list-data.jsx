import React from "react";
//custom components
import ActionButtonVendor from "../action-button-vendor-menu.jsx";
import Button from '@mui/material/Button';
//restaurant data
import * as restaurantData from "../../restaurants/restaurant-data.jsx";

const columns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Restaurant ID'}
    </strong>
  ),
  width: 180,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'restaurantType',
  renderHeader: () => (
    <strong>
      {'Restaurant Type '}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},

  { field: 'restaurantName',
  renderHeader: () => (
    <strong>
      {'Restaurant Name '}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center' },

   {
     field: 'gst',
     renderHeader: () => (
       <strong>
         {'GST No. '}
       </strong>
     ),
     width: 180,
     align:'center',
     headerAlign:'center'
   },

   { field: 'city',
     renderHeader: () => (
     <strong>
       {'City'}
     </strong>
   ),
    width: 180,
    align:'center',
   headerAlign:'center'  },

   { field: 'status',
                   renderHeader: () => (
                         <strong>
                           {'Status'}
                         </strong>
                   ),
                   width: 180,
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
     <ActionButtonVendor label={"Action"} dropDown={["View Profile","Purchase List","Purchase Return"]}/>
   );
 },
     sortable: false,
     width: 180,
   },

];

function extractRestaurantData(arr){
  var i=0;
  var list=[];
  for(i;i<arr.length;i++){
    const found = restaurantData.rows.find(item=>item.id==arr[i])
    list.push(found)
  }
  return list;
}

export{columns,extractRestaurantData}
