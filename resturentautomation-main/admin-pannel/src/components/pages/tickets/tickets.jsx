import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";
import DashboardTickets from '../../tickets/tickets-dashboards/DashboardTickets.jsx';
import AllTickets from '../../tickets/all-tickets/AllTickets.jsx';
import NewTickets from '../../tickets/new-tickets/NewTickets.jsx';
import ActiveTickets from '../../tickets/active-tickets/ActiveTickets.jsx';
import ClosedTickets from '../../tickets/closed-tickets/ClosedTickets.jsx';
import OnHoldTickets from '../../tickets/onhold-tickets/OnHoldTickets.jsx';
import AssignedTickets from '../../tickets/assigned-tickets/AssignedTickets.jsx';
import OverDueTickets from '../../tickets/overdue-tickets/OverDueTickets.jsx';

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function Dashboard(){
  return(
    <div>
    <Drawer content={<DashboardTickets/>}>
    </Drawer>
    </div>
  )
}
function All(){
  return(
    <div>
    <Drawer content={<AllTickets/>}>
    </Drawer>
    </div>
  )
}
function New(){
  return(
    <div>
    <Drawer content={<NewTickets/>}>
    </Drawer>
    </div>
  )
}
function Active(){
  return(
    <div>
    <Drawer content={<ActiveTickets/>}>
    </Drawer>
    </div>
  )
}
function Closed(){
  return(
    <div>
    <Drawer content={<ClosedTickets/>}>
    </Drawer>
    </div>
  )
}
function OnHold(){
  return(
    <div>
    <Drawer content={<OnHoldTickets/>}>
    </Drawer>
    </div>
  )
}
function Assigned(){
  return(
    <div>
    <Drawer content={<AssignedTickets/>}>
    </Drawer>
    </div>
  )
}
function OverDue(){
  return(
    <div>
    <Drawer content={<OverDueTickets/>}>
    </Drawer>
    </div>
  )
}




export {Dashboard,All, New,Active,Closed,OnHold,Assigned,OverDue, };
