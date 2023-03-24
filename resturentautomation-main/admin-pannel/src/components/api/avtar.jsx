import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

export default function ImageAvatars(props) {
  return (
    <Avatar
    alt="Remy Sharp"
    src={props.src}
    sx={{ width: 156, height: 156 }}
  />
  );
}
