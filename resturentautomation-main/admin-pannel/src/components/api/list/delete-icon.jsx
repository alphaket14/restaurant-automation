import * as React from 'react';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
export default function UploadButtons() {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <IconButton sx={{marginLeft:2}}color="primary" aria-label="upload picture" component="label">
      <DeleteIcon/>
      </IconButton>
      <IconButton color="primary" aria-label="upload picture" component="label">
      <EditIcon/>
      </IconButton>

    </Stack>
  );
}
