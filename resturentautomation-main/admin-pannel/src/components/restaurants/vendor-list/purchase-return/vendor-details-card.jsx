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
          Vendor Details
        </Typography>
        <br/>
        <Typography  color="text.secondary">
          <b>Vendor Supply ID:</b> {props.vendorDetail.id}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Supplier Name: </b>{props.vendorDetail.supplierName}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Category: </b>{props.vendorDetail.category}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Item: </b>{props.vendorDetail.item}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  GST: </b>{props.vendorDetail.gst}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Email:</b> {props.vendorDetail.email}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Phone:</b> {props.vendorDetail.phone}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  City: </b>{props.vendorDetail.city}
        </Typography>
        <Typography  color="text.secondary" sx={{marginTop:2}}>
        <b>  Account</b>t: {props.vendorDetail.account}
        </Typography>
      </CardContent>
      <CardActions>
      <Button variant="outlined" size="small" sx={{marginBottom:1}}>Profile</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
