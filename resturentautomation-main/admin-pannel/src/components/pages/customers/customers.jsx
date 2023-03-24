import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

//custom components
import TotalListTemplate from "../../customers/total-list/total-list-template.jsx";
import DineInTemplate from "../../customers/dine-in/dine-in-template.jsx";
import WebTemplate from "../../customers/web/web-template.jsx";
import AppTemplate from "../../customers/app/app-template.jsx";
import ThirdPartyTemplate from "../../customers/third-party/third-party-template.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function TotalList(){
  return(
    <div>
    <Drawer content=<TotalListTemplate/>/>
    </div>
  )
}

function Dining(){
  return(
    <div>
    <Drawer content=<DineInTemplate/>/>
    </div>
  )
}
function Web(){
  return(
    <div>
    <Drawer content=<WebTemplate/>/>
    </div>
  )
}
function App(){
  return(
    <div>
    <Drawer content=<AppTemplate/>/>
    </div>
  )
}
function ThirdParty(){
  return(
    <div>
    <Drawer content=<ThirdPartyTemplate/>/>
    </div>
  )
}


export {TotalList,Dining,Web,App,ThirdParty};
