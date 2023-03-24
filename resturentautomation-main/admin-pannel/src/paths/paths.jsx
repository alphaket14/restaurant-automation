import React from 'react';
//importing pages
//inside array page has been passed as component comp
import * as Restaurants from "../components/pages/restaurants/restaurants.jsx";
import * as Customers from "../components/pages/customers/customers.jsx";
import * as Vendors from "../components/pages/vendors/vendors.jsx";
import * as Marketing from "../components/pages/marketing/marketing.jsx";
import * as Reports from "../components/pages/reports/reports.jsx";
import * as API from "../components/pages/api/api.jsx";
import * as Membership from "../components/pages/membership/membership.jsx";
import * as Tickets from "../components/pages/tickets/tickets.jsx";
import * as Settings from "../components/pages/settings/settings.jsx";
{/* menu first part paths */}
const dashboard="/dashboard";

{/* menu third part paths */}
const helpAndSupport="/help-and-support";
const privacyPolicy="/privacy-policy";
const termsAndCondition="/terms-and-conditions";

{/* menu 2nd part with submenues paths */}
const restaurants=[
  { subMenu:"Total List",
    path:"/restaurants-total-list",
    comp:<Restaurants.TotalList/>},
  { subMenu:"Requested",
    path:"/restaurants-requested",
    comp:<Restaurants.Requested/>},
  { subMenu:"Approved",
    path:"/restaurants-approved",
    comp:<Restaurants.Approved/>},
  { subMenu:"Pending",
    path:"/restaurants-pending",
    comp:<Restaurants.Pending/>},
  { subMenu:"Subscribed",
    path:"/restaurants-subscribed",
    comp:<Restaurants.Subscribed/>},
  { subMenu:"Free Subscription",
    path:"/restaurants-free-subscription",
    comp:<Restaurants.FreeSubscription/>},
  { subMenu:"Trial Subscription",
    path:"/restaurants-trial-subscription",
    comp:<Restaurants.TrialSubscription/>},
  { subMenu:"Subscription Due",
    path:"/restaurants-subscription-due",
    comp:<Restaurants.SubscriptionDue/>},
  { subMenu:"Expired",
    path:"/restaurants-expired",
    comp:<Restaurants.Expired/>},
  { subMenu:"Cancelled",
    path:"/restaurants-cancelled",
    comp:<Restaurants.Cancelled/>},
  { subMenu:"Blocked",
    path:"/restaurants-blocked",
    comp:<Restaurants.Blocked/>}
];
//restaurant menu view button pages

//view profile
const viewProfile="/restaurants/total-list/view-profile";
//view customers
const viewCustomers="/restaurants/total-list/view-customer-list";
const viewOrders="/restaurants/total-list/view-customer-list/order-list";
const viewParticularOrder="/restaurants/total-list/view-customer-list/order-list/view-order";
//view vendors
const viewVendors="/restaurants/total-list/view-vendor-list";
const purchaseList="/restaurants/total-list/view-vendor-list/purchase-list";
const purchaseReturn="/restaurants/total-list/view-vendor-list/purchase-return";
//view inventory
const viewInventory="/restaurants/total-list/view-inventory-list";
//view menu
const viewMenu="/restaurants/total-list/view-menu-list";


const customers=[
  {subMenu:"Total List",
   path:"/customers-total-list",
   comp:<Customers.TotalList/>},
  {subMenu:"Dine In",
   path:"/customers-dine-in",
   comp:<Customers.Dining/>},
  {subMenu:"Web",
   path:"/customers-web",
   comp:<Customers.Web/>},
  {subMenu:"App",
   path:"/customers-app",
   comp:<Customers.App/>},
  {subMenu:"Third Party",
   path:"/customers-third-party",
   comp:<Customers.ThirdParty/>},
];

const viewRestaurantList="/customers/total-list/restaurant-list";
const viewOrdersfromCustomer="/customers/total-list/restaurant-list/view-orders";
const viewOrderfromOrders="/customers/total-list/restaurant-list/view-orders/view-order";


const vendors=[
  {subMenu:"Vendor List",
   path:"/vendors/vendor-list",
   comp:<Vendors.VendorList/>}
];

const viewVendorsRestaurantList="/vendors/total-list/restaurant-list";
const viewVendorsPurchaseList="/vendors/total-list/restaurant-list/purchase-list";
const viewVendorsPurchaseReturn="/vendors/total-list/restaurant-list/purchase-return";

const marketing=[
  {subMenu:"Coupons",
   path:"/marketing-management-coupons",
   comp:<Marketing.Coupons/>},
  {subMenu:"Msg",
   path:"/marketing-management-msg",
   comp:<Marketing.Msg/>},
  {subMenu:"Mails",
   path:"/marketing-management-mails",
   comp:<Marketing.Mails/>},
  {subMenu:"Push Notification",
   path:"/marketing-management-push-notifications",
   comp:<Marketing.PushNotification/>},
  {subMenu:"Refer",
   path:"/marketing-management-refer",
   comp:<Marketing.Refer/>}
];
const reports=[
  {subMenu:"Product Sales",
   path:"/reports-product-sales",
   comp:<Reports.ProductSales/>},
  {subMenu:"Product History",
   path:"/reports-product-history",
   comp:<Reports.ProductHistory/>},
  {subMenu:"Sms Sales",
   path:"/reports-sms-sales",
   comp:<Reports.SmsSales/>},
  {subMenu:"Sms History",
   path:"/reports-sms-history",
   comp:<Reports.SmsHistory/>},
  {subMenu:"Email Sales",
   path:"/reports-email-sales",
   comp:<Reports.EmailSales/>},
  {subMenu:"Email History",
   path:"/reports-email-history",
   comp:<Reports.EmailHistory/>},
  {subMenu:"Storage Sales",
   path:"/reports-storage-sales",
   comp:<Reports.StorageSales/>},
  {subMenu:"Storage History",
   path:"/reports-storage-history",
   comp:<Reports.StorageHistory/>},

  {subMenu:"All",
   path:"/transaction-all",
   comp:<Reports.All/>},
  {subMenu:"Cash",
   path:"/transaction-cash",
   comp:<Reports.Cash/>},
  {subMenu:"Card",
   path:"/transaction-card",
   comp:<Reports.Card/>},
  {subMenu:"UPI",
   path:"/transaction-upi",
   comp:<Reports.UPI/>},
  {subMenu:"Wallets",
   path:"/transaction-wallets",
   comp:<Reports.Wallets/>},
  {subMenu:"Others",
   path:"/transaction-others",
   comp:<Reports.Others/>},
];
const api=[
  {subMenu:"Payment Gateway Keys",
   path:"/api-payment-gateway-keys",
   comp:<API.PaymentGatewayK/>},
  {subMenu:"Delivery Partner Key",
   path:"/api-delivery-partnery-key",
   comp:<API.DeliveryPartnerK/>},
  {subMenu:"Cloud Storage",
   path:"/api-cloud-storage",
   comp:<API.CloudStorage/>},
  {subMenu:"SMS",
   path:"/api-sms",
   comp:<API.Sms/>},
  {subMenu:"Email",
   path:"/api-email",
   comp:<API.Email/>},
   {subMenu:"List",
    path:"/api-list",
    comp:<API.List/>}

];
const membership=[
  {subMenu:"Product Subscription",
   path:"/membership-plans-product-subscription",
   comp:<Membership.ProductSubs/>},
  {subMenu:"SMS Subscription",
   path:"/membership-plans-sms-subscription",
   comp:<Membership.SmsSubs/>},
  {subMenu:"Email Subscription",
   path:"/membership-plans-email-subscription",
   comp:<Membership.EmailSubs/>}
];
const tickets=[
  {
  subMenu:"Dashboard",
   path:"/tickets-dashboard",
   comp:<Tickets.Dashboard/>
  },
  {
  subMenu:"All Tickets",
   path:"/tickets-all",
   comp:<Tickets.All/>
  },
  {
  subMenu:"New Tickets",
   path:"/tickets-new",
   comp:<Tickets.New/>
  },
  {
    subMenu:"Active Tickets",
     path:"/tickets-active",
     comp:<Tickets.Active/>
    },
    {
      subMenu:"Closed Tickets",
       path:"/tickets-closed",
       comp:<Tickets.Closed/>
      },
      {
        subMenu:"On-Hold Tickets",
         path:"/tickets-on-hold",
         comp:<Tickets.OnHold/>
        },
        {
          subMenu:"Assigned Tickets",
           path:"/tickets-assigned",
           comp:<Tickets.Assigned/>
          },
          {
            subMenu:"Overdue Tickets",
             path:"/tickets-overdue",
             comp:<Tickets.OverDue/>
            },
];
const settings=[
  {subMenu:"Taxes",
   path:"/settings-taxes",
   comp:<Settings.Taxes/>},
  {subMenu:"Commission",
   path:"/settings-commission",
   comp:<Settings.Commission/>},
  {subMenu:"Currency",
   path:"/settings-currency",
   comp:<Settings.Currency/>},
  {subMenu:"User Setting",
   path:"/settings-setting",
   comp:<Settings.UserSetting/>},
  {subMenu:"Roles and Permission",
   path:"/settings-roles-and-permission",
   comp:<Settings.RolesAndPerm/>}
]
{/* Content to be displayed on right side */}

export {dashboard,customers,vendors,marketing,reports,api,membership,tickets,settings,restaurants,helpAndSupport,privacyPolicy,termsAndCondition,viewCustomers,viewOrders,viewParticularOrder,viewVendors,purchaseList,purchaseReturn,viewInventory,viewMenu,viewRestaurantList,viewOrdersfromCustomer,viewOrderfromOrders,viewVendorsRestaurantList,viewVendorsPurchaseList,viewVendorsPurchaseReturn,viewProfile};
