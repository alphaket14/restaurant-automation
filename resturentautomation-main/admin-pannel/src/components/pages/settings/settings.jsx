import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Taxes(){
  return(
    <div>
    <Drawer content="Taxes">
    </Drawer>
    </div>
  )
}

function Commission(){
  return(
    <div>
    <Drawer content="Commission">
    </Drawer>
    </div>
  )
}

function Currency(){
  return(
    <div>
    <Drawer content="Currency">
    </Drawer>
    </div>
  )
}

function UserSetting(){
  return(
    <div>
    <Drawer content="User Setting">
    </Drawer>
    </div>
  )
}

function RolesAndPerm(){
  return(
    <div>
    <Drawer content="Roles And Permission">
    </Drawer>
    </div>
  )
}


export {Taxes,Commission,Currency,UserSetting,RolesAndPerm};
