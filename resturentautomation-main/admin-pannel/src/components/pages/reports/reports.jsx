import React from 'react';
import Drawer from "../../navbar/Drawer.jsx";

//Sales
import ProductSalesComp from '../../reports/Sales/product-sales/ProductSales.jsx';
import ProductHistoryComp from '../../reports/Sales/product-sales/ProductHistory.jsx';
import SmsSalesComp from '../../reports/Sales/sms/SmsSales.jsx';
import SmsHistoryComp from '../../reports/Sales/sms/SmsHistory.jsx';
import EmailSalesComp from '../../reports/Sales/email/EmailSales.jsx';
import EmailHistoryComp from '../../reports/Sales/email/EmailHistory.jsx';
import StorageSalesComp from '../../reports/Sales/cloud-storage/StorageSales.jsx';
import StorageHistoryComp from '../../reports/Sales/cloud-storage/StorageHistory.jsx';

//Transaction
import AllTransaction from '../../reports/Transaction/AllTransaction.jsx';
import CashTransaction from '../../reports/Transaction/CashTransaction.jsx';
import CardTransaction from '../../reports/Transaction/CardTransaction.jsx';
import UpiTransaction from '../../reports/Transaction/UpiTransaction.jsx';
import WalletsTransaction from '../../reports/Transaction/WalletsTransaction.jsx';
import OtherTransaction from '../../reports/Transaction/OtherTransaction.jsx';

{/*passing content prop in drawer to update content exporting all functions to paths
  in order to render required content according to path mapping*/}

  //Sales
function ProductSales(){
  return(
    <div>
    <Drawer content={<ProductSalesComp/>}>
    </Drawer>
    </div>
  )
}

function ProductHistory(){
  return(
    <div>
    <Drawer content={<ProductHistoryComp/>}>
    </Drawer>
    </div>
  )
}

function SmsSales(){
  return(
    <div>
    <Drawer content={<SmsSalesComp/>}>
    </Drawer>
    </div>
  )
}

function SmsHistory(){
  return(
    <div>
    <Drawer content={<SmsHistoryComp/>}>
    </Drawer>
    </div>
  )
}

function EmailSales(){
  return(
    <div>
    <Drawer content={<EmailSalesComp/>}>
    </Drawer>
    </div>
  )
}

function EmailHistory(){
  return(
    <div>
    <Drawer content={<EmailHistoryComp/>}>
    </Drawer>
    </div>
  )
}
function StorageSales(){
  return(
    <div>
    <Drawer content={<StorageSalesComp/>}>
    </Drawer>
    </div>
  )
}
function StorageHistory(){
  return(
    <div>
    <Drawer content={<StorageHistoryComp/>}>
    </Drawer>
    </div>
  )
}


// Transaction

function All(){
  return(
    <div>
    <Drawer content={<AllTransaction/>}>
    </Drawer>
    </div>
  )
}
function Cash(){
  return(
    <div>
    <Drawer content={<CashTransaction/>}>
    </Drawer>
    </div>
  )
}

function Card(){
  return(
    <div>
    <Drawer content={<CardTransaction/>}>
    </Drawer>
    </div>
  )
}

function UPI(){
  return(
    <div>
    <Drawer content={<UpiTransaction/>}>
    </Drawer>
    </div>
  )
}

function Wallets(){
  return(
    <div>
    <Drawer content={<WalletsTransaction/>}>
    </Drawer>
    </div>
  )
}

function Others(){
  return(
    <div>
    <Drawer content={<OtherTransaction/>}>
    </Drawer>
    </div>
  )
}

//Sales exports
export {ProductSales,ProductHistory,SmsSales,SmsHistory, EmailSales,EmailHistory,StorageSales, StorageHistory,};

//Transaction Exports
export {All, Cash, Card, UPI, Wallets,Others};