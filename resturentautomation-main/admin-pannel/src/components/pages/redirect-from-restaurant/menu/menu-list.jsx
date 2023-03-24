import React from 'react';
import Drawer from "../../../navbar/Drawer.jsx";

//custom components
import  * as Template from "../../../restaurants/menu/menu-list-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function menuList(){
  return(
    <div>
    <Drawer content=<Template.menuListTemplate/>/>
    </div>
  )
}
export default menuList;
