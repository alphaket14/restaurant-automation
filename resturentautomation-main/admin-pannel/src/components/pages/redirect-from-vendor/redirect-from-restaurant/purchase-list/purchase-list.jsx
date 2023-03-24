import React from 'react';
import Drawer from "../../../../navbar/Drawer.jsx";

//custom components
import  * as Template from "../../../../vendors/restaurant-list/purchase-list/purchase-list-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function purchaseList(){
  return(
    <div>
    <Drawer content=<Template.viewPurchaseListTemplate/>/>
    </div>
  )
}
export default purchaseList;
