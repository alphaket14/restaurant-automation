import React from 'react'
import { useNavigate } from "react-router-dom";
import {
    Grid,
    Paper,
    Button,
    Typography,
    Box,
    Modal,
    Fade,
    Backdrop,
    TextField
  } from "@mui/material";
  import { makeStyles } from "@material-ui/core";
  import { Add } from "@mui/icons-material";
  //import TextField from '@mui/material/TextField';
  import Dialog from '@mui/material/Dialog';
  import DialogActions from '@mui/material/DialogActions';
  import DialogContent from '@mui/material/DialogContent';
  import DialogContentText from '@mui/material/DialogContentText';
  import DialogTitle from '@mui/material/DialogTitle';
  import InputAdornment from '@mui/material/InputAdornment';
  import Visibility from '@mui/icons-material/Visibility';
  import VisibilityOff from '@mui/icons-material/VisibilityOff';
  import IconButton from '@mui/material/IconButton';
  import Input from '@mui/material/Input';
  import InputLabel from '@mui/material/InputLabel';
  import FormControl from '@mui/material/FormControl';
  import axios from 'axios';

export default function Card(props) {
    const [open, setOpen] = React.useState(false);
    const navigate = useNavigate();
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
    const handleChange = (prop) => (event) => {
      setValues({ ...values, [prop]: event.target.value });
    };
    const [values, setValues] = React.useState({
      password: '',
      showPassword: false,
    });
    const handleClickShowPassword = () => {
      setValues({
        ...values,
        showPassword: !values.showPassword,
      });
    };
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const handleRemove = (e, id) => {
      e.preventDefault();
      axios.delete(`http://localhost:5000/outlet/delete/${id}`).then(() => console.log('Outlet deleted.'))
      .catch(err => console.log('Error: ' + err));
      
    };
  

  return (
    <>
        <div>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Password</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To open this outlet page, please enter your password here. We
            will authorize this access point.
          </DialogContentText>
          <FormControl fullWidth sx={{ m: 1 }} variant="standard">
          <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            />
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
    <Grid item xs={4}>
    <Paper
      sx={{ p: "15px 5px", display: "flex", alignItems: "center", flexDirection: "column" }}
      elevation={12}
    >
      <Box sx={{ mb: 1 }}>
        <img style={{ height: 50, width: 50 }} />
      </Box>
      <Typography variant="subtitle1" fontSize="larger" gutterBottom component="div">
        {props.name}
      </Typography>
      <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary" component="div">
        Outlet Code: {props.code}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Address : {props.address}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Phone : {props.phone}
      </Typography>
      <Typography variant="subtitle1" gutterBottom component="div">
        Email : {props.email}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around", width: "100%", mt: 1 }}>
        <Button 
          variant="contained" sx={{ width: "30%" }}
          //onClick={handleClickOpen}
          onClick={() => navigate("/dashboard/outlet/add-outlet")}
          >
          Enter
        </Button>
        <Button
          variant="contained"
          sx={{ width: "30%" }}
          onClick={() => navigate("/dashboard/outlet/add-outlet",{state:props.data})}
          //onClick={handleClickOpen}
        >
          Edit
        </Button>
        <Button 
          variant="outlined" sx={{ width: "30%" }}
          onClick={(e)=>handleRemove(e, props.data._id)}
          >
          Delete
        </Button>
      </Box>
    </Paper>
  </Grid>
  </>
  )
}
