import * as React from 'react';

import CloseIcon from '@mui/icons-material/Close';
import FullscreenIcon from '@mui/icons-material/Fullscreen';


import {Button, Dialog, Box, AppBar, Grid, Toolbar, IconButton, Typography,OutlinedInput, Slide, Tooltip, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox, ListItemText} from "@mui/material"

import { DatePicker } from '@mui/x-date-pickers/DatePicker';

//custom component
import TaskBar from "./taskbar-above-table.jsx";
import Table from "./table-template.jsx";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function FullScreenDialog(props) {
  const [open, setOpen] = React.useState(false);

  const [fromDateValue, setFromDateValue] = React.useState(null);
  const [toDateValue, setToDateValue] = React.useState(null);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [orderTypeFilter, setOrderTypeFilter] = React.useState([]);
  const [paymentModeFilter, setPaymentModeFilter] = React.useState([]);

  const orderTypeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOrderTypeFilter(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const paymentModeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setPaymentModeFilter(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };



  const orderTypes = ["Dine In","Delivery","Pick-Up"];
  const paymentModes = props.paymentModes && props.paymentModes

  const full = (
    <>
      <Tooltip title="Full Screen" placement="top-start"><Button variant="text" size="small" onClick={handleClickOpen} sx={{ color: "white", marginLeft: 10, position: 'relative', left: 5 }} startIcon={<FullscreenIcon />}>
      </Button></Tooltip>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>

            {/*Heading of dialog box*/}
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              {props.title}
            </Typography>
            {/*close button on right side*/}
            <Tooltip title="Close" placement="top-start">
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <CloseIcon />
              </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <br />
        {/*Body of dialog */}
        <Grid container sx={{ px: 2 }}>
          <Table isFullScreen rows={props.tableRows} columns={props.tableColumns} height={props.height} rowsPerPage={props.rowsPerPage} />

        </Grid>
      </Dialog>
    </>
  )

  return (
    <div>
      <Grid container sx={{mb:1}} spacing={1}>
        <Grid item  xs={props.transaction ? 2 : 3}>
        <DatePicker
        inputFormat='dd/MM/yyyy'
          label="From"
          value={fromDateValue}
          onChange={(newValue) => {
            setFromDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} size="small" fullWidth />}
        />

        </Grid>
        <Grid item xs={props.transaction ? 2 : 3}>
        <DatePicker
          label="To"
          inputFormat='dd/MM/yyyy'
          value={toDateValue}
          onChange={(newValue) => {
            setToDateValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} size="small" fullWidth  />}
        />

        </Grid>
        
        {props.transaction ? (
          <>
           <Grid item xs={2}>
        <FormControl fullWidth size="small">
        <InputLabel id="demo-multiple-checkbox-label">Order Type</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={orderTypeFilter}
          onChange={orderTypeChangeHandler}
          input={<OutlinedInput label="Order Type" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {orderTypes.map((orderType) => (
            <MenuItem key={orderType} value={orderType}>
              <Checkbox checked={orderTypeFilter.indexOf(orderType) > -1} />
              <ListItemText primary={orderType} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        </Grid>

        <Grid item xs={2}>
        <FormControl fullWidth size="small">
        <InputLabel id="demo-multiple-checkbox-label">Payment Mode</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={paymentModeFilter}
          onChange={paymentModeChangeHandler}
          input={<OutlinedInput label="Payment Mode" />}
          renderValue={(selected) => selected.join(', ')}
        >
          {paymentModes.map((paymentMode) => (
            <MenuItem key={paymentMode} value={paymentMode}>
              <Checkbox checked={paymentModeFilter.indexOf(paymentMode) > -1} />
              <ListItemText primary={paymentMode} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

        </Grid>
          </>
        ) : null}
       

        <Grid item xs={2}>
         <Typography variant="body1" ><Typography variant="h6" color="primary" component="span">10</Typography> Results.</Typography>

        </Grid>

      </Grid>


      <TaskBar tools={full} />

    </div>
  );
}
