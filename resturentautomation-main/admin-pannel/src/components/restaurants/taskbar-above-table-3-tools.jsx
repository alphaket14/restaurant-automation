import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export default function ButtonAppBar(props) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{height:40}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Stack direction="row" spacing={-12} sx={{marginBottom:2.5}}>
                  <Box sx={{marginRight:2}}>
                    {props.upload}
                  </Box>
                  <Box sx={{marginRight:3}}>
                      {props.download}
                    </Box>
                  <Box sx={{marginLeft:3}}>
                    {props.tools}
                  </Box>
                </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
