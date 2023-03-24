import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}
function PurchaseList(){
  return(
    <div>
    <Drawer content="Purchase List">
    </Drawer>
    </div>
  )
}

function PurchaseReturn(){
  return(
    <div>
    <Drawer content="Purchase Return">
    </Drawer>
    </div>
  )
}

function LowStocks(){
  return(
    <div>
    <Drawer content="Low Stocks">
    </Drawer>
    </div>
  )
}

function OutOfStocks(){
  return(
    <div>
    <Drawer content="Out of Stocks">
    </Drawer>
    </div>
  )
}


export {PurchaseList,PurchaseReturn,LowStocks,OutOfStocks};
