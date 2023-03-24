import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function OutlinedCard(props) {
  const card = (
    <React.Fragment>
      <CardContent>
      <Typography variant="h5"  gutterBottom>
            Order Details
          </Typography>
          <br/>
        <Typography  color="text.secondary" gutterBottom>
          <b>Order ID:</b> {props.details.id}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Ordered From:</b> {props.details.orderFrom}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Order Type:</b> {props.details.orderType}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Discount:</b> {props.details.discount}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Tax Amount:</b> {props.details.tax}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Invoice Amount:</b> {props.details.invoiceAmt}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Payment Mode:</b> {props.details.paymentMode}
        </Typography>
        <Typography sx={{marginTop:2}} color="text.secondary" gutterBottom>
          <b>Payment Status:</b> {props.details.payment}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="outlined">Invoice</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
