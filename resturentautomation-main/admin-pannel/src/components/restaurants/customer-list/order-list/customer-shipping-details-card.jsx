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
          Shipping Details
        </Typography>
        <br/>
        <Typography  color="text.secondary">
          <b>Email:</b> {props.customerDetails.email}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
          <b>Phone:</b> {props.customerDetails.phone}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
          <b>City:</b> {props.customerDetails.city}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
          <b>Address:</b> {props.customerDetails.address}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
