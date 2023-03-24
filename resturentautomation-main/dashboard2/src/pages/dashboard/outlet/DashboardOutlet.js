import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
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
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const DashboardOutlet = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const [open, setOpen] = React.useState(false);
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
  const [outlets, setOutlets] = useState("");
  useEffect(() => {
    const fetchdata = async () => {
      // const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/outlet/')
      const data = await axios.get('http://localhost:5000/outlet/getoutlets')
      console.log("outlets:",data)
      setOutlets(data);
    };
    fetchdata();
  },[]);
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
      <Grid container>
        <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Add Outlet
              </Typography>
              <Grid item container direction="column" rowSpacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Outlet Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Outlet Code :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" placeholder="000014" />
                  </Grid>
                </Grid>

                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Address :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField size="small" fullWidth />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Phone :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField size="small" fullWidth />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Email :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField size="small" fullWidth />
                  </Grid>
                </Grid>

                <Grid item align="right">
                  <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
                    Reset
                  </Button>
                  <Button variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
        <Grid item container sx={{ mb: 2 }} justifyContent="space-between" alignItems="center">
          <Grid item>
            <Typography variant="h4">Outlets</Typography>
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate("/dashboard/outlet/add-outlet")}
            >
              Add Outlet
            </Button>
          </Grid>
        </Grid>
        <Grid item container spacing={2}>
          <Grid item xs={4}>
            <Paper
              sx={{ p: "15px 5px", display: "flex", alignItems: "center", flexDirection: "column" }}
              elevation={12}
            >
              <Box sx={{ mb: 1 }}>
                <img style={{ height: 50, width: 50 }} />
              </Box>
              <Typography variant="subtitle1" fontSize="larger" gutterBottom component="div">
                Maratha Bakery
              </Typography>
              <Typography variant="body2" sx={{ mb: 2 }} color="text.secondary" component="div">
                Outlet Code: 000001
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Address : Some Address
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Phone : +9125467124
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                Email : email@gmail.com
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
                  onClick={() => navigate("/dashboard/outlet/add-outlet")}
                  //onClick={handleClickOpen}
                >
                  Edit
                </Button>
                <Button 
                  variant="outlined" sx={{ width: "30%" }}
                  //onClick={handleClickOpen}
                  >
                  Delete
                </Button>
              </Box>
            </Paper>
          </Grid>
          {
            outlets && outlets?.data.map((outlet) => (
              <Card
                name={outlet.resname}
                code={outlet._id}
                address={outlet.address}
                phone={outlet.phone}
                email={outlet.email}
                data={outlet}
              />
            ))
          }
        </Grid>
      </Grid>
    </>
  );
};
export default DashboardOutlet;
