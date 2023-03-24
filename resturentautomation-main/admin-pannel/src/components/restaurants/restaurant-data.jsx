import React from "react";
//custom components
import ViewButton from "./view-button-template.jsx";
import ActionButton from "./action-button-template.jsx";
import Button from '@mui/material/Button';

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

  { field: 'restaurantType',
  renderHeader: () => (
    <strong>
      {'Restaurant Type '}
    </strong>
  ),
   width: 160,
   align:'center',
   headerAlign:'center',
   cellClassName:'cell'},
  { field: 'restaurantName',
  renderHeader: () => (
    <strong>
      {'Restaurant Name '}
    </strong>
  ),
   width: 160,
   align:'center',
   headerAlign:'center' },
   { field: 'registeredDate',
   renderHeader: () => (
     <strong>
       {'Registered '}
     </strong>
   ),
    width: 150,
    align:'center',
    headerAlign:'center' },
  {
    field: 'gst',
    renderHeader: () => (
      <strong>
        {'GST No. '}
      </strong>
    ),
    width: 150,
    align:'center',
    headerAlign:'center'
  },
  { field: 'city',
    renderHeader: () => (
    <strong>
      {'City'}
    </strong>
  ),
   width: 150,
   align:'center',
  headerAlign:'center'  },
  { field: 'plan',
    renderHeader: () => (
    <strong>
      {'Plan'}
    </strong>
  ),
  renderCell: (cellValues) => {
  return (
    <>
    {cellValues.value=="Active"?<div style={{color: "#0C9802",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Free"?<div style={{color: "#E78F02",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Trial"?<div style={{color: "#8902E7",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:cellValues.value=="Inactive"?<div style={{color: "#AD0000 ",width: "100%",textAlign:"center"}}>{cellValues.value}</div>:<div style={{color: "brown",width: "100%",textAlign:"center"}}>{cellValues.value}</div>}
    </>
  );
},
   width: 150,
   align:'center',
   headerAlign:'center'  },
  {
    field: 'view',
    renderHeader: () => (
      <strong>
        {'View '}
      </strong>
    ),
    headerAlign:'center',
    align:'center',
    description: 'This will take you to new page.',
    renderCell: (cellValues) => {
  return (
    <>
    {/*Checking cell plan status and according to that rendering drop down list buttons */}
    {cellValues.value=="Active"?
    <ViewButton label={"View"} dropDown={["Profile","Menu","Vendors","Inventory","Customers"]}/>:
    cellValues.value=="Trial"?
    <ViewButton label={"View"} dropDown={["Profile","Menu","Vendors","Inventory","Customers"]}/>:
    cellValues.value=="Free"?
    <ViewButton label={"View"} dropDown={["Profile","Menu","Vendors","Customers"]}/>:
    cellValues.value=="Inactive"?<ViewButton label={"View"} dropDown={["Profile","Menu","Vendors","Inventory","Customers"]}/>:
    <ViewButton label={"View"} dropDown={["Error"]}/>}
    </>
  );
},
    sortable: false,
    width: 150,
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
    <ActionButton label={"Action"} dropDown={["Block","Reject","Approve"]}/>
  );
},
    sortable: false,
    width: 150,
  },
];

//function to calculate days Left

const rows = [
  { id: 1, restaurantName: 'Kurry Kingdom', restaurantType: 'Casual Dining',registeredDate:"25/07/2022", gst:"07AAECR2971C1A" ,city:"Delhi",plan:"Active",view:"Active",action:"button",status:"Approved",rating:"5"},
  { id: 2, restaurantName: 'Tandoori Time', restaurantType: 'Fast Food',registeredDate:"25/07/2022", gst:"09AAECR2971C3L",city:"Lucknow",plan:"Active" ,view:"Active",action:"button",status:"Rejected",rating:"4.2"},
  { id: 3, restaurantName: 'Malai Marke', restaurantType: 'Cafe',registeredDate:"25/07/2022", gst:"17AAECR2971C5N" ,city:"Pune",plan:"Free",view:"Free",action:"button",status:"Approved",rating:"3"},
  { id: 4, restaurantName: 'Spice ‘N’ Rice', restaurantType: 'Pizzerias',registeredDate:"25/07/2022", gst:"45AAECR2971C1A",city:"Chennai",plan:"Trial",view:"Trial",saction:"button",status:"Pending",rating:"5" },
  { id: 5, restaurantName: 'Emperor of India', restaurantType: 'Pub',registeredDate:"25/07/2022", gst:"90AAECR2971C1P",city:"Kanpur",plan:"Free",view:"Free",staction:"button",status:"Subscribed",startDate:"01/07/2022",endDate:"31/07/2022",rating:"4" },
  { id: 6, restaurantName: 'Khana Khazana', restaurantType: 'Fine Dining',registeredDate:"25/07/2022", gst:"33AAEKL2923X9L",city:"Varanasi",plan:"Inactive",view:"Inactive",action:"button",status:"Expired",expiredDate:"10/07/2022",rating:"3" },
  { id: 7, restaurantName: 'Spice Shuttle', restaurantType: 'Buffet Style ',registeredDate:"25/07/2022", gst:"11JKSCR2185X2D",city:"Delhi" ,plan:"Active",view:"Active",action:"button",status:"Cancelled",cancelledDate:"20/07/2022",rating:"2"},
  { id: 8, restaurantName: 'Killer Kebab', restaurantType: 'Family',registeredDate:"25/07/2022", gst:"73AAECR2971X9L",city:"Kolkata",plan:"Trial",view:"Trial",saction:"button",status:"Subscription Due",dueDate:"01/08/2022",daysLeft:"9",rating:"3.5" },
  { id: 9, restaurantName: 'Zen and Out', restaurantType: 'Fast Food',registeredDate:"25/07/2022", gst:"47AAECR2971C1K",city:"Patna",plan:"Active",view:"Active",action:"button",status:"Free Subscription",startDate:"01/06/2022",endDate:"30/07/2022",rating:"4.2" },
  { id: 10, restaurantName: 'Targaryen', restaurantType: 'Pub',registeredDate:"25/07/2022", gst:"68AAECR2971C2O" ,city:"Delhi",plan:"Free",view:"Free",staction:"button",status:"Rejected",rating:"5" },
  { id: 11, restaurantName: 'Tikka ‘n Talk', restaurantType: 'Pub',registeredDate:"25/07/2022", gst:"71AAECR2971C3H" ,city:"Pune",plan:"Inactive",view:"Inactive",action:"button",status:"Expired",expiredDate:"04/06/2022",rating:"4.6" },
  { id: 12, restaurantName: 'Munch Box', restaurantType: 'Pub',registeredDate:"25/07/2022", gst:"80AAECR2971C8X" ,city:"Delhi",plan:"Inactive",view:"Inactive",action:"button",status:"Subscription Due",dueDate:"15/08/2022",daysLeft:"13",rating:"3.6" }
];
//since splice updates original array therefore creating original array for diff sub menus
const requested=[...columns];
const approved=[...columns];
const pending=[...columns];
const subscribed=[...columns];
const freeSubscription=[...columns];
const trialSubscription=[...columns];
const subscriptionDue=[...columns];
const expired=[...columns];
const cancelled=[...columns];
const blocked=[...columns];

//modify columns and headers for sub menus
//new columns
const status={ field: 'status',
                renderHeader: () => (
                      <strong>
                        {'Status'}
                      </strong>
                ),
                width: 150,
                align:'center',
                headerAlign:'center'  }
const startDate={ field: 'startDate',
                renderHeader: () => (
                      <strong>
                        {'Start Date'}
                      </strong>
                ),
                width: 150,
                align:'center',
                headerAlign:'center'  }
const endDate={ field: 'endDate',
                renderHeader: () => (
                      <strong>
                        {'End Date'}
                      </strong>
                ),
                width: 150,
                align:'center',
                headerAlign:'center'}
const dueDate={ field: 'dueDate',
                renderHeader: () => (
                      <strong>
                        {'Due Date'}
                      </strong>
                ),
                width: 150,
                align:'center',
                headerAlign:'center'}
const daysLeft={ field: 'daysLeft',
                renderHeader: () => (
                      <strong>
                        {'Days Left'}
                      </strong>
                ),
                width: 100,
                align:'center',
                headerAlign:'center'}
const expiredDate={ field: 'expiredDate',
                renderHeader: () => (
                      <strong>
                        {'Expired Date'}
                      </strong>
                ),
                width: 150,
                align:'center',
                description: 'Date formate: DD/MM/YYYY.',
                headerAlign:'center'}
const cancelledDate={ field: 'cancelledDate',
                renderHeader: () => (
                      <strong>
                        {'Cancelled Date'}
                      </strong>
                ),
                width: 150,
                align:'center',
                description: 'Date formate: DD/MM/YYYY.',
                headerAlign:'center'}
//adding status column works for both Approved & Pending
function addStatusColReq(){
  const deletedColumns=requested.splice(5,1,status)
    return requested
  }
//adding status column works for both Approved & Pending
function addStatusCol(){
  const deletedColumns=approved.splice(5,1,status)
  return approved
}
// adding dates and status both works for Subscribed
function addDatesSubs(){
 const deletedColumns=subscribed.splice(5,1,startDate,endDate,status)
 return subscribed
}
// adding dates and status Free Subscription
function addDatesFreeSubs(){
 const deletedColumns=freeSubscription.splice(5,1,startDate,endDate,status)
 return freeSubscription
}
// adding dates and status Trial Subscription
function addDatesTrialSubs(){
 const deletedColumns=trialSubscription.splice(5,1,startDate,endDate,status)
 return trialSubscription
}
//adding due data days left and status for Subscription Due
function addDatesSubsDue(){
  const deletedColumns=subscriptionDue.splice(5,1,dueDate,daysLeft,status)
  return subscriptionDue
}
//adding expired data  and status for Expired
function addExpiredDate(){
  const deletedColumns=expired.splice(5,1,expiredDate,status)
  return expired
}
function addCancelledDate(){
  const deletedColumns=cancelled.splice(5,1,cancelledDate,status)
  return cancelled
}
function addBlockedDate(){
  const deletedColumns=blocked.splice(5,1,cancelledDate,status)
  return blocked
}
export {columns, rows,addStatusColReq,addStatusCol,addDatesSubs,addDatesTrialSubs,addDatesFreeSubs,subscribed,addDatesSubsDue,addExpiredDate,addCancelledDate,addBlockedDate}
