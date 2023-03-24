import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import {SwipeableDrawer,ListItemIcon,ListItem,ListItemText,List} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { withStyles } from "@material-ui/styles";
import { Box } from "@material-ui/core";
import LoginIcon from '@mui/icons-material/Login';
import AssignmentIcon from '@mui/icons-material/Assignment';
import TabIcon from '@material-ui/icons/Tab';

import Dialog from '@material-ui/core/Dialog';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Divider from '@material-ui/core/Divider';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

import { API_SERVICE } from '../../URI';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // marginLeft: '95px',

    margin: "auto",
    width: "50%",
    padding: "10px",
  },
  countlabel: {
    color: "green",
    fontSize: "1em",
  },
}));
const StyledBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
export default function ButtonAppBar({ cart, user,showCartHandler,customer,setCustomerHandler }) {
  const classes = useStyles();
  const navigate = useNavigate();
 const [showDrawer,setShowDrawer]=useState(false);
 const logouthandle = () => {
  fetch(`${API_SERVICE}/api/v1/main/auth/logout`, {
    method: "POST",
    credentials: 'include', 
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json()).then(res=>{
      console.log(res);
      setCustomerHandler(null)
      navigate('/mobile/signin',{replace:true})
    }).catch(err=>console.log(err));

};

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>

    <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Container>
          <center style={{ marginTop: '70px' }}>
            <h2>
            Reservations
            </h2>
          </center>
          
          <Grid sx={{ mt: 4 }} container spacing={3}>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px', backgroundColor: 'gray' }} className={classes.paper}>
                <center>
                  Table 1
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px', backgroundColor: 'gray' }} className={classes.paper}>
                <center>
                  Table 2
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px' }} className={classes.paper}>
                <center>
                  Table 3
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px', backgroundColor: 'gray' }} className={classes.paper}>
                <center>
                  Table 4
                </center>
              </Paper>
            </Grid>
            
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px' }} className={classes.paper}>
                <center>
                  Table 5
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px', backgroundColor: 'gray' }} className={classes.paper}>
                <center>
                  Table 6
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px' }} className={classes.paper}>
                <center>
                  Table 7
                </center>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper sx={{ padding: '10px' }} className={classes.paper}>
                <center>
                  Table 8
                </center>
              </Paper>
            </Grid>
          </Grid>
          <TextField sx={{ mt: 4 }} type="number" fullWidth id="outlined-basic" label="Number of People" variant="outlined" />
          <TextField sx={{ mt: 4 }} type="datetime-local" fullWidth id="outlined-basic" label="Number of People" variant="outlined" />

          <Button sx={{ mt: 4 }} onClick={handleClose} color="primary" size="large" fullWidth variant="contained">Submit for Request</Button>
        </Container>
    </Dialog>

    <div className={classes.root}>
      <AppBar
        style={{ backgroundColor: "#fff", color: "#000" }}
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={()=>setShowDrawer(true)}
          >
            
            
            <MenuIcon />
          </IconButton>
          <SwipeableDrawer
            
            open={showDrawer}
            onClose={()=>setShowDrawer(false)}
            onOpen={()=>setShowDrawer(true)}
          >
             <List sx={{width:"70vw"}}>
        {customer===null?['Register','Sign In'].map((text, index) => (
          <ListItem button key={text} onClick={()=>{text==="Register"?navigate('/mobile/register'):navigate('/mobile/signin')}}>
            <ListItemIcon>
              {index % 2 === 0 ? <AssignmentIcon /> : <LoginIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        )):  <ListItem button key="Sign Out" onClick={()=>{logouthandle()}}>
        <ListItemIcon>
           <LoginIcon />
        </ListItemIcon>
        <ListItemText primary="Sign Out" />
      </ListItem>}
      </List>
          </SwipeableDrawer>
          {user?.logo === "" ? (
            <Typography
              variant="h4"
              className={classes.title}
              sx={{ color: "black" }}
            >
              {user?.restaurantName}
            </Typography>
          ) : (
            <Box className={classes.title}>
              <img src={user?.logo} width="50px" height="50px" alt={""} />
            </Box>
          )}

        <IconButton onClick={handleClickOpen} color="secondary" component="span">
          <TabIcon  sx={{ width: "40px", height: "40px" }} />
        </IconButton>

          <IconButton
            onClick={() => showCartHandler(true)}
            aria-label="cart"
          >
            <StyledBadge badgeContent={cart.length} color="secondary">
              <ShoppingCartIcon sx={{ width: "40px", height: "40px" }} />
            </StyledBadge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>

    </>
  );
}
