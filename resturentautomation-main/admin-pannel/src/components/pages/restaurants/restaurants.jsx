import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";
//importing custom components
import TotalListTemplate from "../../restaurants/total-list/total-list-template.jsx";
import RequestedTemplate from "../../restaurants/requested/requested-template.jsx";
import ApprovedTemplate from "../../restaurants/approved/approved-template.jsx";
import PendingTemplate from "../../restaurants/pending/pending-template.jsx";
import SubscribedTemplate from "../../restaurants/subscribed/subscribed-template.jsx";
import FreeSubsTemplate from "../../restaurants/free-subscription/free-subscription-template.jsx";
import TrialSubsTemplate from "../../restaurants/trial-subscription/trial-subscription-template.jsx";
import SubsDueTemplate from "../../restaurants/subscription-due/subscription-due-template.jsx";
import ExpiredTemplate from "../../restaurants/expired/expired-template.jsx";
import CancelledTemplate from "../../restaurants/cancelled/cancelled-template.jsx";
import BlockedTemplate from "../../restaurants/blocked/blocked-template.jsx";
{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function TotalList(){
  return(
    <div>
    <Drawer content=<TotalListTemplate/>/>
    </div>
  )
}

function Requested(){
  return(
    <div>
    <Drawer content=<RequestedTemplate/>/>
    </div>
  )
}

function Approved(){
  return(
    <div>
    <Drawer content=<ApprovedTemplate/>/>
    </div>
  )
}

function Pending(){
  return(
    <div>
    <Drawer content=<PendingTemplate/>/>
    </div>
  )
}

function Subscribed(){
  return(
    <div>
    <Drawer content=<SubscribedTemplate/>/>s
    </div>
  )
}

function FreeSubscription(){
  return(
    <div>
    <Drawer content=<FreeSubsTemplate/>/>
    </div>
  )
}

function TrialSubscription(){
  return(
    <div>
    <Drawer content=<TrialSubsTemplate/>/>
    </div>
  )
}

function SubscriptionDue(){
  return(
    <div>
    <Drawer content=<SubsDueTemplate/>/>
    </div>
  )
}
function Expired(){
  return(
    <div>
    <Drawer content=<ExpiredTemplate/>/>
    </div>
  )
}
function Cancelled(){
  return(
    <div>
    <Drawer content=<CancelledTemplate/>/>
    </div>
  )
}

function Blocked(){
  return(
    <div>
    <Drawer content=<BlockedTemplate/>/>
    </div>
  )
}
export {TotalList,Requested,Approved,Pending,Subscribed,FreeSubscription,TrialSubscription,SubscriptionDue,Expired,Cancelled,Blocked};
