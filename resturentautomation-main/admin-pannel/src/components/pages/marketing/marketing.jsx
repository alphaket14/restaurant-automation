import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Coupons(){
  return(
    <div>
    <Drawer content="Coupons">
    </Drawer>
    </div>
  )
}

function Msg(){
  return(
    <div>
    <Drawer content="Msg">
    </Drawer>
    </div>
  )
}

function Mails(){
  return(
    <div>
    <Drawer content="Mails">
    </Drawer>
    </div>
  )
}

function PushNotification(){
  return(
    <div>
    <Drawer content="Push Notification">
    </Drawer>
    </div>
  )
}

function Refer(){
  return(
    <div>
    <Drawer content="Refer">
    </Drawer>
    </div>
  )
}


export {Coupons,Msg,Mails,PushNotification,Refer};
