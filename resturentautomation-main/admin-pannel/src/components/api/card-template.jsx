import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//custom components
import Avtar from "./avtar.jsx";
import Textfield from "./textfield.jsx";

const card = (
  <React.Fragment>
    <CardContent>

    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard(props) {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}
      {/*Left coloumn */}
      <Grid container spacing={2} sx={{marginBottom:4,marginTop:2}} >
        <Grid item xs={12} sm={12} md={12} lg={4} display="flex" justifyContent="center">
        {/*Logo */}
          <Avtar src={props.content.src} size="156"  />
          <br/>
        </Grid>
        {/*Right column */}
        <Grid item xs={12} sm={12} md={12} lg={8}>
        {/*details */}
        <Typography variant="caption" display="block" gutterBottom sx={{marginLeft:10}} >
        Client ID: <Textfield value={props.content.id} /> </Typography>
        <Typography variant="caption" display="block" gutterBottom sx={{marginLeft:10}}>
        <br/>
        Client Secret: <Textfield value={props.content.key}/> </Typography>
        </Grid>
      </Grid>
      </Card>
    </Box>
  );
}
