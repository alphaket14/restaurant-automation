import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';



export default function OutlinedCard(props) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography variant="h4" component="div" sx={{marginLeft:2}} >
        {props.details.restaurantName}
        </Typography>
        <div>
        <br/>
        <Typography sx={{ mb: 1.5,marginLeft:2}} color="text.secondary">
          Restaurant ID : {props.details.id}
        </Typography>
        <Typography sx={{ mb: 1.5,marginLeft:2}} color="text.secondary">
          Restaurant Type : {props.details.restaurantType}
        </Typography>
        <Typography sx={{ mb: 1.5,marginLeft:2}} color="text.secondary">
          GST No. : {props.details.gst}
        </Typography>
        <Typography sx={{ mb: 1.5,marginLeft:2}} color="text.secondary">
          Registered Date : {props.details.registeredDate}
        </Typography>
        <Typography sx={{ mb: 1.5,marginLeft:2}} color="text.secondary">
        City : {props.details.city}
      </Typography>
        <Typography color="text.secondary" sx={{marginLeft:2}}>
          Plan : {props.details.plan}
        </Typography>
      </div>
      </CardContent>
      <CardActions>
        <Button variant="outlined" size="small" sx={{marginBottom:1,marginLeft:2}}>Profile</Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}
