import React from "react";
//custom components
//used for restaurant menu
import ActionButton from "../restaurants/action-button-template.jsx";
import Button from '@mui/material/Button';
//used for customer menu
import ActionButtonCustomer from "./action-button-customer-menu.jsx";
const columns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Customer ID.'}
    </strong>
  ),
  width: 180,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'customerName',
  renderHeader: () => (
    <strong>
      {'Customer Name '}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},

  { field: 'email',
  renderHeader: () => (
    <strong>
      {'Email '}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center' },

   { field: 'phone',
   renderHeader: () => (
     <strong>
       {'Phone '}
     </strong>
   ),
    width: 180,
    align:'center',
    headerAlign:'center' },
  {

    field: 'city',
    renderHeader: () => (
      <strong>
        {'City'}
      </strong>
    ),
    width: 180,
    align:'center',
    headerAlign:'center'
  },

  { field: 'account',
    renderHeader: () => (
    <strong>
      {'Account'}
    </strong>
  ),
  renderCell: (cellValues) => {
  return (
    <>
    {cellValues.value=="Active"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:<div style={{color: "#AD0000",width: "100%",textAlign:"center"}}>{cellValues.value}</div>}
    </>
  );
},
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
    <ActionButton label={"Action"} dropDown={["Profile","Order List","Block"]}/>
  );
},
    sortable: false,
    width: 180,
  },
];

//function to calculate days Left
//actionNew is action button column for customer menu since we are using same data in restaurant menu also but in customer menu we want different action buttons
const rows = [
  { id: "1", customerName: 'Abhilash', email: 'mcnihil@me.com',phone:"7555588872", city:"07AAECR2971C1A" ,city:"Delhi",account:"Active",action:"button",origin:"Dine In",restaurantId:["1","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "2", customerName: 'Bhavna', email: 'chronos@msn.com',phone:"9355540939", city:"09AAECR2971C3L",city:"Lucknow",account:"Active" ,action:"button",origin:"App",restaurantId:["2","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "3", customerName: 'Deepak', email: 'daveed@yahoo.com',phone:"7555451092", city:"17AAECR2971C5N" ,city:"Pune",account:"Inactive",action:"button",origin:"Web",restaurantId:["1","8","6"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "4", customerName: 'Garima', email: 'frostman@hotmail.com',phone:"7555805381", city:"45AAECR2971C1A",city:"Chennai",account:"Active",action:"button",origin:"Third Party",restaurantId:["4","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "5", customerName: 'Harsha', email: 'trygstad@comcast.net',phone:"755523-4241", city:"90AAECR2971C1P",city:"Kanpur",account:"Inactive",action:"button",origin:"App",restaurantId:["5","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#" },
  { id: "6", customerName: 'Devika', email: 'dmbkiwi@yahoo.ca',phone:"85519625", city:"33AAEKL2923X9L",city:"Varanasi",account:"Inactive",action:"button",origin:"App",restaurantId:["6","4","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#" },
  { id: "7", customerName: 'Kalpana', email: 'mrdvt@icloud.com',phone:"9855502672", city:"11JKSCR2185X2D",city:"Delhi" ,account:"Active",action:"button",origin:"Web",restaurantId:["1","11","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "8", customerName: 'Kaushal', email: 'jelmer@gmail.com',phone:"7555086579", city:"73AAECR2971X9L",city:"Kolkata",account:"Inactive",action:"button",origin:"Third Party",restaurantId:["8","12","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "9", customerName: 'Roxie', email: 'fairbank@sbcglobal.net',phone:"9055574534", city:"47AAECR2971C1K",city:"Patna",account:"Active",action:"button",origin:"Dine In",restaurantId:["9","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"},
  { id: "10", customerName: 'Lavanya', email: 'wkrebs@sbcglobal.net',phone:"7555558259", city:"68AAECR2971C2O" ,city:"Delhi",account:"Active",action:"button",origin:"Dine In",restaurantId:["10","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#" },
  { id: "11", customerName: 'Param', email: 'jbryan@aol.com',phone:"7555167312", city:"71AAECR2971C3H" ,city:"Pune",account:"Inactive",action:"button",origin:"Third Party",restaurantId:["11","7","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#" },
  { id: "12", customerName: 'Mayur', email: 'malvar@optonline.net',phone:"8555040211", city:"80AAECR2971C8X" ,city:"Delhi",account:"Inactive",action:"button",origin:"Web",restaurantId:["12","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India",actionNew:"#"}
];
//since splice updates original array therefore creating original array for diff sub menus
const customerMenuColumn=[...columns];


//modify columns and headers for sub menus
//new columns
const actionNew={
  field: 'actionNew',
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
  <ActionButtonCustomer label={"Action"} dropDown={["Profile","Restaurant List","Block"]}/>
);
},
  sortable: false,
  width: 180,
};
//adding new action button with different dropdown from restuarant menu
function addActionNew(){
  const deletedColumns=customerMenuColumn.splice(6,1,actionNew)
    return customerMenuColumn
  }

export {columns, rows,addActionNew}
