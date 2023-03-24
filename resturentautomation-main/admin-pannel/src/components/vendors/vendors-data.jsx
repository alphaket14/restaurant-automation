import React from "react";
//custom components
import ActionButton from "../restaurants/action-button-template.jsx";
import Button from '@mui/material/Button';

//used for customer menu
import ActionButtonVendor from "./action-button-vendor-menu.jsx";

const columns = [
  { field: 'id',
  renderHeader: () => (
    <strong>
      {'Supplier Code.'}
    </strong>
  ),
  width: 160,
  align:'center',
  headerAlign:'center',
  headerClassName:'header',
  cellClassName:'cell' },

  { field: 'supplierName',
  renderHeader: () => (
    <strong>
      {'Supplier Name '}
    </strong>
  ),
   width: 180,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},

   { field: 'category',
   renderHeader: () => (
     <strong>
       {'Category '}
     </strong>
   ),
    width: 180,
    align:'center',
    headerAlign:'center' },

    { field: 'item',
    renderHeader: () => (
      <strong>
        {'Item '}
      </strong>
    ),
     width: 180,
     align:'center',
     headerAlign:'center' },

     { field: 'gst',
     renderHeader: () => (
       <strong>
         {'GST '}
       </strong>
     ),
      width: 180,
      align:'center',
      headerAlign:'center' },

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

        { field: 'city',
        renderHeader: () => (
          <strong>
            {'City '}
          </strong>
        ),
         width: 180,
         align:'center',
         headerAlign:'center' },

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
            <ActionButton label={"Action"} dropDown={["Profile","Purchase List","Purchase Return"]}/>
          );
        },
            sortable: false,
            width: 160,
          },
        ];

const rows = [
  { id: "1", supplierName: 'Abhilash',category:"##",item:"##",gst:"07AAECR2971C1A" , email: 'mcnihil@me.com',phone:"7555588872", city:"Delhi",account:"Active",action:"button",origin:"#",restaurantId:["1","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "2", supplierName: 'Bhavna',category:"##",item:"##",gst:"09AAECR2971C3L", email: 'chronos@msn.com',phone:"9355540939", city:"Lucknow",account:"Active" ,action:"button",origin:"#",restaurantId:["2","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "3", supplierName: 'Deepak',category:"##",item:"##",gst:"17AAECR2971C5N" , email: 'daveed@yahoo.com',phone:"7555451092", city:"Pune",account:"Inactive",action:"button",origin:"#",restaurantId:["1","8","6"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "4", supplierName: 'Garima',category:"##",item:"##",gst:"45AAECR2971C1A", email: 'frostman@hotmail.com',phone:"7555805381", city:"Chennai",account:"Active",action:"button",origin:"#",restaurantId:["4","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "5", supplierName: 'Harsha',category:"##",item:"##",gst:"90AAECR2971C1P", email: 'trygstad@comcast.net',phone:"755523-4241", city:"Kanpur",account:"Inactive",action:"button",origin:"#",restaurantId:["5","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India" },
  { id: "6", supplierName: 'Devika',category:"##",item:"##",gst:"33AAEKL2923X9L", email: 'dmbkiwi@yahoo.ca',phone:"85519625", city:"Varanasi",account:"Inactive",action:"button",origin:"#",restaurantId:["6","4","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India" },
  { id: "7", supplierName: 'Kalpana',category:"##",item:"##",gst:"11JKSCR2185X2D", email: 'mrdvt@icloud.com',phone:"9855502672", city:"Delhi" ,account:"Active",action:"button",origin:"#",restaurantId:["1","11","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "8", supplierName: 'Kaushal',category:"##",item:"##",gst:"73AAECR2971X9L", email: 'jelmer@gmail.com',phone:"7555086579", city:"Kolkata",account:"Inactive",action:"button",origin:"#",restaurantId:["8","12","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "9", supplierName: 'Roxie',category:"##",item:"##",gst:"47AAECR2971C1K", email: 'fairbank@sbcglobal.net',phone:"9055574534", city:"Patna",account:"Active",action:"button",origin:"#",restaurantId:["9","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"},
  { id: "10", supplierName: 'Lavanya',category:"##",item:"##",gst:"68AAECR2971C2O",  email: 'wkrebs@sbcglobal.net',phone:"7555558259", city:"Delhi",account:"Active",action:"button",origin:"#",restaurantId:["10","5","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India" },
  { id: "11", supplierName: 'Param',category:"##",item:"##",gst:"71AAECR2971C3H" , email: 'jbryan@aol.com',phone:"7555167312", city:"Pune",account:"Inactive",action:"button",origin:"#",restaurantId:["11","7","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India" },
  { id: "12", supplierName: 'Mayur',category:"##",item:"##",gst:"80AAECR2971C8X" , email: 'malvar@optonline.net',phone:"8555040211", city:"Delhi",account:"Inactive",action:"button",origin:"#",restaurantId:["12","2","3"],address:"3 / Y M Complex Hosur Road Madiwala, Bangalore,Delhi,560095,India"}
];

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
  <ActionButtonVendor label={"Action"} dropDown={["Profile","Restaurant List"]}/>
);
},
  sortable: false,
  width: 180,
};

//since splice updates original array therefore creating original array for diff sub menus
const vendorMenuColumn=[...columns];

//adding new action button with different dropdown from restuarant menu
function addActionNew(){
  const deletedColumns=vendorMenuColumn.splice(9,1,actionNew)
    return vendorMenuColumn
  }

export {columns, rows,addActionNew}
