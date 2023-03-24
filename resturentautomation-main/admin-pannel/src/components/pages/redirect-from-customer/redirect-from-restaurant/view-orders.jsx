import React from 'react';
import Drawer from "../../../navbar/Drawer.jsx";

//custom components
import  * as Template from "../../../customers/restaurant-list//view-orders/view-orders-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function viewOrders(){
  return(
    <div>
    <Drawer content=<Template.viewOrdersTemplate/>/>
    </div>
  )
}
export default viewOrders;
