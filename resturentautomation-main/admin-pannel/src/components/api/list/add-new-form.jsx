import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
//custom components
import Select from "./status-select-radio-button.jsx";
import Category from "./add-new-categorySelection.jsx";
export default function FormPropsTextFields(props) {
  return (

    <Box
       sx={{
         width: 500,
         maxWidth: '100%',
       }}
     >
      <div>
        <form >
        <Category/>
        <TextField fullWidth
          id="name-of-partner"
          label="Name"
          type="text"
          autoComplete="current-password"
          sx={{mt:2}}
        />
        <br/>
        <TextField fullWidth
          id="client-id"
          label="Client ID"
          type="text"
          autoComplete="current-password"
          sx={{mt:2}}
        />
        <br/>
        <TextField fullWidth
          id="client-secret"
          label="Client Secret"
          type="text"
          autoComplete="current-password"
          sx={{mt:2,marginBottom:2}}
        />
        <br/>

        {/*To select status of partner*/}
          <Select />

        {/*To upload logo of partner*/}
          <Button id="logo" fullWidth variant="contained" component="label" sx={{mt:1.5}}>
           Upload  <PhotoCamera  />
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </form>

      </div>
    </Box>
  );
}
