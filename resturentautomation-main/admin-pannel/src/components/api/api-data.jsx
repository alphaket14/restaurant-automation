import React from 'react';
//icons for action button in List
import DeleteIcon from './list/delete-icon.jsx';


{/*title: title of page tabLabel and tabPannel related to tab component */}
const ApiData=[
  {title:"Payment Gateways Key",
   tabLabel:['Razorpay','Paytm','Mobikwik','PayGlobal','BillDesk','Cashfree','PayU','Instamojo','JusPay'],
   tabPannel:[
     {src:"assets/payment-gateways/razorpay.jpg",id:"313idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/paytm.jpg",id:"76435dos9312390@jd",key:"ghijk2"},
     {src:"assets/payment-gateways/mobikwik.png",id:"9872idos9312390@jd",key:"lmngi2"},
     {src:"assets/payment-gateways/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/payu.jpg",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/payment-gateways/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"}
   ]},
  {title:"Delivery Partners Key",
   tabLabel:['Zomato','Swiggy','FAASOS','Deliveroo','GrubHub','Pizza Hut'],
   tabPannel:[
     {src:"assets/delivery-partners/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/delivery-partners/swiggy2.jpg",id:"8550njks9312390@jd",key:"nbmmj2"},
     {src:"assets/delivery-partners/faasos.jpg",id:"1455idnms9912390@jd",key:"oiioi2"},
     {src:"assets/delivery-partners/deliveroo.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/delivery-partners/grubhub.jpg",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/delivery-partners/pizzahut.webp",id:"19203idos9312390@jd",key:"abcdef2"}
   ]},
  {title:"Cloud Storage",
   tabLabel:['Razorpay','PayGlobal','BillDesk','Cashfree','Paytm','PayU','Instamojo','Mobikwik','JusPay'],
   tabPannel:[
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"}
   ]},
  {title:"SMS",
   tabLabel:['Razorpay','PayGlobal','BillDesk','Cashfree','Paytm','PayU','Instamojo','Mobikwik','JusPay'],
   tabPannel:[
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"}
   ]},
  {title:"Email",
   tabLabel:['Razorpay','PayGlobal','BillDesk','Cashfree','Paytm','PayU','Instamojo','Mobikwik','JusPay'],
   tabPannel:[
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"},
     {src:"assets/zomato.png",id:"19203idos9312390@jd",key:"abcdef2"}
   ]},
];

const ApiListData=[
  {title:"List",
   tabLabel:['Payment Gateways','Delivery Partners','Cloud Storages','SMS','Email']},
]
//last element of data is used to identify toggle button through id
var ListPannelData=[
  {title:"Payment Gateways",data:[
    ["1","assets/payment-gateways/razorpay.jpg","Razorpay","Active",<DeleteIcon/>,'pg1'],
    ["2","assets/payment-gateways/paytm.jpg","Paytm","Inactive",<DeleteIcon/>,'pg2'],
    ["3","assets/payment-gateways/mobikwik.png","Mobikwik","Active",<DeleteIcon/>,'pg3'],
    ["4","Logo","PayGlobal","Inactive",<DeleteIcon/>,'pg4'],
    ["5","Logo","BillDesk","Active",<DeleteIcon/>,'pg5'],
    ["6","Logo","Cashfree","Active",<DeleteIcon/>,'pg6'],
    ["7","assets/payment-gateways/payu.jpg","PayU","Active",<DeleteIcon/>,'pg7'],
    ["8","Logo","Instamojo","Active",<DeleteIcon/>,'pg8'],
    ["9","Logo","JusPay","Active",<DeleteIcon/>,'pg9']]},
  {title:"Delivery partners",data:[
    ["1","assets/delivery-partners/zomato.png","Zomato","Active",<DeleteIcon/>,'dp1'],
    ["2","assets/delivery-partners/swiggy2.jpg","Swiggy","Active",<DeleteIcon/>,'dp2'],
    ["3","assets/delivery-partners/faasos.jpg","Faasos","Inactive",<DeleteIcon/>,'dp3'],
    ["4","assets/delivery-partners/deliveroo.png","Deliveroo","Active",<DeleteIcon/>,'dp4'],
    ["5","assets/delivery-partners/grubhub.jpg","GrabHub","Active",<DeleteIcon/>,'dp5']]},
  {title:"Cloud Storages",data:[
    ["1","Logo","Paytm","Active",<DeleteIcon/>,'cs1'],
    ["2","Logo","Paytm","Active",<DeleteIcon/>,'cs2'],
    ["3","Logo","Paytm","Active",<DeleteIcon/>,'cs3'],
    ["4","Logo","Paytm","Active",<DeleteIcon/>,'cs4'],
    ["5","Logo","Paytm","Active",<DeleteIcon/>,'cs5'],
    ["6","Logo","Paytm","Active",<DeleteIcon/>,'cs6'],
    ["7","Logo","Paytm","Active",<DeleteIcon/>,'cs7'],
    ["8","Logo","Paytm","Active",<DeleteIcon/>,'cs8'],
    ["9","Logo","Paytm","Active",<DeleteIcon/>,'cs9']]},
  {title:"SMS",data:[
    ["1","Logo","Paytm","Active",<DeleteIcon/>,'sm1'],
    ["2","Logo","Paytm","Active",<DeleteIcon/>,'sm2'],
    ["3","Logo","Paytm","Active",<DeleteIcon/>,'sm3'],
    ["4","Logo","Paytm","Active",<DeleteIcon/>,'sm9']]},
  {title:"Email",data:[
    ["1","Logo","Paytm","Active",<DeleteIcon/>,'em1'],
    ["2","Logo","Paytm","Active",<DeleteIcon/>,'em2'],
    ["3","Logo","Paytm","Active",<DeleteIcon/>,'em3'],
    ["4","Logo","Paytm","Active",<DeleteIcon/>,'em4'],
    ["5","Logo","Paytm","Active",<DeleteIcon/>,'em5'],
    ["6","Logo","Paytm","Active",<DeleteIcon/>,'em6'],
    ["7","Logo","Paytm","Active",<DeleteIcon/>,'em7'],
    ["8","Logo","Paytm","Active",<DeleteIcon/>,'em8'],
    ["9","Logo","Paytm","Active",<DeleteIcon/>,'em9']]}
]
export  {ApiData,ApiListData,ListPannelData};
