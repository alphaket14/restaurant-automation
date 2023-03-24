import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';

const buttons = [
  <Button key="one">View Profile</Button>,
  <Button key="two">Approve</Button>,
  <Button key="three">Reject</Button>,
  <Button key="three">Block</Button>,
];

export default function GroupOrientation() {
  return (
    <Box
      sx={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        {buttons}
      </ButtonGroup>
    </Box>
  );
}
