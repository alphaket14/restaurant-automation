import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
//custom components
import CustomerDetails from "./customer-details-card.jsx"
import ShippingDetails from "./customer-shipping-details-card.jsx"
import BillingDetails from "./customer-billing-details-card.jsx"


export default function DirectionStack(props) {
  return (
    <div>
      <Stack direction={{xs:"column", md:"column",lg:"row"}} spacing={6} >
      <CustomerDetails customerDetails={props.customerDetail}/>
      <ShippingDetails customerDetails={props.customerDetail}/>
      <BillingDetails customerDetails={props.customerDetail}/>
      </Stack>
    </div>
  );
}
