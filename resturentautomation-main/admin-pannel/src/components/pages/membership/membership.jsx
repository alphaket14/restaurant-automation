import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function ProductSubs(){
  return(
    <div>
    <Drawer content="TProduct Subscription">
    </Drawer>
    </div>
  )
}

function EmailSubs(){
  return(
    <div>
    <Drawer content="Email Subscription">
    </Drawer>
    </div>
  )
}

function SmsSubs(){
  return(
    <div>
    <Drawer content="Sms Subscription">
    </Drawer>
    </div>
  )
}


export {ProductSubs,EmailSubs,SmsSubs};
