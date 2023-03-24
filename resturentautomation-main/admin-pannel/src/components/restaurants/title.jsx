import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Skeleton from '@mui/material/Skeleton';

export default function SimpleContainer(props) {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ textAlign:'center' }}>
          <Typography variant="h3" component="div" gutterBottom>
            {props.title}</Typography>
        </Box>
      </Container>
    </React.Fragment>
  );
}
