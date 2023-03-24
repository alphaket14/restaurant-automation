import React from 'react';
import Drawer from "../../../navbar/Drawer.jsx";

//custom components
import  * as Template from "../../../restaurants/customer-list/order-list/order-list-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function orderList(){
  return(
    <div>
    <Drawer content=<Template.orderListTemplate/>/>
    </div>
  )
}
export default orderList;
