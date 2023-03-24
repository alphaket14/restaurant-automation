import React from "react";
import Typography from '@mui/material/Typography';
import { BrowserRouter, Routes, Route } from "react-router-dom";
//custom components
import Drawer from "./components/navbar/Drawer.jsx";
//custom pages
import Analytics from "./components/pages/Analytics.jsx";
import Dashboard from "./components/pages/Dashboard.jsx";
import Help from "./components/pages/HelpAndSupport.jsx";
import Privacy from "./components/pages/PrivacyPolicy.jsx";
import Terms from "./components/pages/TermsAndCondition.jsx";
//from restaurant menu view and action buttons
//view profile
import ViewProfile from "./components/pages/redirect-from-restaurant/view-profile/view-profile.jsx";
//customer button
import CustomerList from "./components/pages/redirect-from-restaurant/customer-list.jsx";
import OrderList from "./components/pages/redirect-from-restaurant/redirect-from-customer/order-list.jsx";
import ParticularOrderList from "./components/pages/redirect-from-restaurant/redirect-from-customer/redirect-from-order-list/particular-order-list.jsx";
//vendor button
import VendorList from "./components/pages/redirect-from-restaurant/vendors/vendor-list.jsx";
import PurchaseList from "./components/pages/redirect-from-restaurant/vendors/redirect-from-vendor-list/purchase-list.jsx";
import PurchaseReturn from "./components/pages/redirect-from-restaurant/vendors/redirect-from-vendor-list/purchase-return.jsx";
//inventory button
import InventoryList from "./components/pages/redirect-from-restaurant/inventory/inventory-list.jsx";
//menu button
import MenuList from "./components/pages/redirect-from-restaurant/menu/menu-list.jsx";
//from customer Menu
//restaurant list button
import RestaurantList from "./components/pages/redirect-from-customer/restaurant-list.jsx";
//view orders button
import ViewOrders from "./components/pages/redirect-from-customer/redirect-from-restaurant/view-orders.jsx";
//view order button
import ViewOrder from "./components/pages/redirect-from-customer/redirect-from-restaurant/redirect-from-orders/view-order.jsx";

//from vendors menu
import VendorRestaurantList from "./components/pages/redirect-from-vendor/restaurant-list.jsx";
//purchase list button
import VendorPurchaseList from "./components/pages/redirect-from-vendor/redirect-from-restaurant/purchase-list/purchase-list.jsx";
//purchase return button
import VendorPurchaseReturn from "./components/pages/redirect-from-vendor/redirect-from-restaurant/purchase-return/purchase-return.jsx";
//path for navbar
import * as path from "./paths/paths.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/*root*/}
        <Route path='/' element={<div><Drawer /></div>}/>
        {/*firt part of menu*/}
        <Route  path={path.dashboard} element={<div><Dashboard /></div>}/>
        {/*Restaurant menu mapping of path and page*/}
        {path.restaurants.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Customers menu mapping of path and page*/}
        {path.customers.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Vendors menu mapping of path and page*/}
        {path.vendors.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Marketing Management menu mapping of path and page*/}
        {path.marketing.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Reports menu mapping of path and page*/}
        {path.reports.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*API'smenu mapping of path and page*/}
        {path.api.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Membership Plans smenu mapping of path and page*/}
        {path.membership.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Tickets menu mapping of path and page*/}
        {path.tickets.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Settings menu mapping of path and page*/}
        {path.settings.map((item)=>(
          <Route  path={item.path} element={<div>{item.comp}</div>}/>
        ))}
        {/*Third part of menu*/}
        <Route  path={path.helpAndSupport} element={<div><Help /></div>}/>
        <Route  path={path.privacyPolicy} element={<div><Privacy /></div>}/>
        <Route  path={path.termsAndCondition} element={<div><Terms /></div>}/>
        {/*Restaurant menu view dropdown button pages for customer button*/}
          <Route  path={path.viewProfile} element={<div><ViewProfile/></div>}/>
        {/*Restaurant menu view dropdown button pages for customer button*/}
        <Route  path={path.viewCustomers} element={<div><CustomerList/></div>}/>
        <Route  path={path.viewOrders} element={<div><OrderList/></div>}/>
        <Route  path={path.viewParticularOrder} element={<div><ParticularOrderList/></div>}/>
        {/*Restaurant menu view dropdown button pages for vendor button*/}
        <Route  path={path.viewVendors} element={<div><VendorList/></div>}/>
        <Route  path={path.purchaseList} element={<div><PurchaseList/></div>}/>
        <Route  path={path.purchaseReturn} element={<div><PurchaseReturn/></div>}/>
        {/*Restaurant menu view dropdown button pages for inventory button*/}
        <Route  path={path.viewInventory} element={<div><InventoryList/></div>}/>
        {/*Restaurant menu view dropdown button pages for menu button*/}
        <Route  path={path.viewMenu} element={<div><MenuList/></div>}/>
        {/*Customer menu action dropdown restaurant list button */}
        <Route  path={path.viewRestaurantList} element={<div><RestaurantList/></div>}/>
        <Route  path={path.viewOrdersfromCustomer} element={<div><ViewOrders/></div>}/>
        <Route  path={path.viewOrderfromOrders} element={<div><ViewOrder/></div>}/>
        {/*Vendor menu action dropdown restaurant list button */}
        <Route  path={path.viewVendorsRestaurantList} element={<div><VendorRestaurantList/></div>}/>
        <Route  path={path.viewVendorsPurchaseList} element={<div><VendorPurchaseList/></div>}/>
        <Route  path={path.viewVendorsPurchaseReturn} element={<div><VendorPurchaseReturn/></div>}/>
      </Routes>
    </BrowserRouter>
  );
}
