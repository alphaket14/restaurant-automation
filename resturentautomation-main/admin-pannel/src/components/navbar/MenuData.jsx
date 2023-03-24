import React from 'react';
import DiningIcon from '@mui/icons-material/Dining';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CampaignIcon from '@mui/icons-material/Campaign';
import SummarizeIcon from '@mui/icons-material/Summarize';
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import PolicyIcon from '@mui/icons-material/Policy';
import TaskIcon from '@mui/icons-material/Task';
import PeopleIcon from '@mui/icons-material/People';
import * as path from "../../paths/paths.jsx";

{/* second section menu and sub menu data*/}
const mainMenu=[
  { menu:"Restaurants",
    submenu:{
      text:[
{label:'Total List',path:'/restaurants-total-list'},
{label:'Requested',path:'/restaurants-requested'},
{label:'Approved',path:'/restaurants-approved'},
{label:'Pending',path:'/restaurants-pending'},
{label:'Subscribed',path:'/restaurants-subscribed'},
{label:'Free Subscription',path:'/restaurants-free-subscription'},
{label:'Trial Subscription',path:'/restaurants-trial-subscription'},
{label:'Subscription Due',path:'/restaurants-subscription-due'},
{label:'Expired',path:'/restaurants-expired'},
{label:'Cancelled',path:'/restaurants-cancelled'},
{label:'Blocked',path:'/restaurants-blocked'}]
    },
    icon:<DiningIcon/>},

{ menu:"Customers",
  submenu:{
    text:[
{label:'Total List',path:'/customers-total-list'},
{label:'Dine In',path:'/customers-dine-in'},
{label:'Web',path:'/customers-web'},
{label:'App',path:'/customers-app'},
{label:'Third Party',path:'/customers-third-party'}]
  },
  icon:<PeopleIcon/>},

  { menu:"Vendors",
    submenu:{
      text:[
{label:'Vendor List',path:'/vendors/vendor-list'}]
    },
    icon:<AccountBoxIcon/>},

  { menu:"Marketing Management",
    submenu:{
      text:[
{label:'Coupons',path:'/marketing-management-coupons'},
{label:'Msg',path:'/marketing-management-msg'},
{label:'Mails',path:'/marketing-management-mails'},
{label:'Push Notification',path:'/marketing-management-push-notifications'},
{label:'Refer',path:'/marketing-management-refer'}]
    },
    icon:<CampaignIcon/>},

  { menu:"Reports",
    submenu:{
      text:[
{label:'Sales', submenu:{text:[
  {label:"Product Sales", path:"/reports-product-sales"},
  {label:'Sms Sales',path:'/reports-sms-sales'},
  {label:'Email Sales',path:'/reports-email-sales'},
  {label:'Storage Sales',path:'/reports-storage-sales'},
]}},
{label:'Transaction', submenu:{text:[
  {label:"All", path:"/transaction-all"},
  {label:'Cash',path:'/transaction-cash'},
  {label:'Card',path:'/transaction-card'},
  {label:'UPI',path:'/transaction-upi'},
  {label:'Wallets',path:'/transaction-wallets'},
  {label:'Others',path:'/transaction-others'},
]}},
]
    },
    icon:<SummarizeIcon/>},

  { menu:"API’s",
    submenu:{
      text:[
{label:'Payment',path:'/api-payment-gateway-keys'},
{label:'Delivery',path:'/api-delivery-partnery-key'},
{label:'Cloud',path:'/api-cloud-storage'},
{label:'SMS',path:'/api-sms'},
{label:'Email',path:'/api-email'},
{label:'List',path:'/api-list'}]
    },
    icon:<ArticleIcon/>},

  { menu:"Membership Plans",
    submenu:{
      text:[{label:'Product Subscription',path:'/membership-plans-product-subscription'},{label:'SMS Subscription',path:'/membership-plans-sms-subscription'},
            {label:'E-mail Subscription',path:'/membership-plans-email-subscription'}]
    },
    icon:<ShoppingCartIcon/>},

  { menu:"Tickets",
    submenu:{
      text:[
{label:'Dashboard',path:'/tickets-dashboard'},
{label:'All Tickets',path:'/tickets-all'},
{label:'New Tickets',path:'/tickets-new'},
{label:'Active Tickets',path:'/tickets-active'},
{label:'Closed Tickets',path:'/tickets-closed'},
{label:'On-Hold Tickets',path:'/tickets-on-hold'},
{label:'Assigned Tickets',path:'/tickets-assigned'},
{label:'Overdue Tickets',path:'/tickets-overdue'},
]
    },
    icon:<ReceiptIcon/>},

  { menu:"Settings",
    submenu:{
      text:[
{label:'Taxes',path:'/settings-taxes'},
{label:'Commission',path:'/settings-commission'},
{label:'Currency',path:'/settings-currency'},
{label:'User Setting',path:'/settings-setting'},
{label:'Roles & Permission',path:'/settings-roles-and-permission'}]
    },
    icon:<SettingsIcon/>}
];

{/* third section menu data*/}
const thirdMenu=[
  {
    label:'Help & Support',
    path:"/help-and-support",
    icon:<HelpCenterIcon/>
  },
  {
    label:'Privacy Policy',
    path:"/privacy-policy",
    icon:<PolicyIcon/>
  },
  {
    label:'Term and Conditions',
    path:"/terms-and-conditions",
    icon:<TaskIcon/>
  }
  ];
export {mainMenu,thirdMenu};
