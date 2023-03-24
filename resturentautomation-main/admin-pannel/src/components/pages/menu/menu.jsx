import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Dining(){
  return(
    <div>
    <Drawer content="Menu Dining">
    </Drawer>
    </div>
  )
}

function Web(){
  return(
    <div>
    <Drawer content="Menu Web">
    </Drawer>
    </div>
  )
}

function App(){
  return(
    <div>
    <Drawer content="Menu App">
    </Drawer>
    </div>
  )
}

function ThirdParty(){
  return(
    <div>
    <Drawer content="Menu Third Party">
    </Drawer>
    </div>
  )
}

export {Dining,Web,App,ThirdParty};
