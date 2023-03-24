import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, green } from '@mui/material/colors';
import AssignmentIcon from '@mui/icons-material/Assignment';

export default function VariantAvatars(props) {
  return (
    <Stack direction="row" spacing={2} align="right">
      <Avatar sx={{ bgcolor: deepOrange[500],height:  50,width:100 }} variant="square" src={props.src} align="right">
      </Avatar>
    </Stack>
  );
}
