import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

//custom components
import TotalListTemplate from "../../vendors/vendor-list/total-list-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function VendorList(){
  return(
    <div>
    <Drawer content=<TotalListTemplate/>>
    </Drawer>
    </div>
  )
}

export {VendorList};
