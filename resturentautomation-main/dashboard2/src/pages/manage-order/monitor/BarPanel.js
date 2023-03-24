import React from "react";
import { AppBar, Divider, List, ListItem, ListItemText, makeStyles, Tab, Tabs } from "@material-ui/core";

import {
  Grid,
  Paper,
  Button,
  IconButton,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox
} from "@mui/material";
import { styled } from "@mui/material/styles";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff"
  },
}));

const BarPanel = (props) => {
  const [section, setSection] = React.useState("Done");

  const onSectionChangeHandler = (event, newValue) => {
    setSection(newValue);
  };

  const classes = useStyles()

  return (
    <>
    <Grid container>
      <AppBar position="sticky" className={classes.tabs}>
                <Tabs
                  value={section}
                  onChange={onSectionChangeHandler}
                  textColor="#00AB55"
                  indicatorColor="primary"
                  variant="fullWidth"
                >
                  <Tab label="New" value="Done" sx={{ borderRadius: 0 }} />
                  <Tab label="Preparing" value="Preparing" sx={{ borderRadius: 0 }} />
                  <Tab label="Done" value="New" sx={{ borderRadius: 0 }} />
                </Tabs>
        </AppBar>
        <Grid container p={4} spacing={4}>
            <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#239F54", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 ",maxHeight:"400px", overflowY:"auto"}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Done</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Zomato</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Delivery</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                      <ListItem  divider>
                        <ListItemText  primary="Soup" secondary="do not add pepper and salt"/>2
                      </ListItem>
                      <Divider/>
                      <ListItem  divider>
                        <ListItemText  primary="Chicken Noodles" />2
                      </ListItem>
                      <ListItem  divider>
                        <ListItemText  primary="French Fries" />2
                      </ListItem>
                      <ListItem   divider>
                        <ListItemText  primary="Soda" />2
                      </ListItem>



                  </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#CB8C12", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 "}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Preparing</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Bar</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2">Server Name</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">table No. 5</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="Soup" secondary="do not add pepper and salt"/>1
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="Chicken Noodles" />2
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="French Fries" />2
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="Soda" />2
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="burgers" />2
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText primary="Ice-creams" />2
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="French Fries" />2
                    </ListItem>


                  </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
            
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#E6E6E6", color:"#525252",padding:"8px 24px",borderRadius:"8px 8px 0 0 "}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">New</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Swiggy</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Pickup</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                <List style={{width:"100%"}}>
                    <ListItem  divider>
                      <ListItemText  primary="Soup" secondary="do not add pepper and salt"/>2
                    </ListItem>
                    <Divider/>
                    <ListItem  divider>
                      <ListItemText  primary="Chicken Noodles" />2
                    </ListItem>
                    <ListItem  divider>
                      <ListItemText  primary="French Fries" />2
                    </ListItem>
                    <ListItem   divider>
                      <ListItemText  primary="Soda" />2
                    </ListItem>



                </List>
                </Grid>
              </Paper>
            </Grid>
            <Grid item>
              <Paper elevation={8} style={{ minWidth: 260, maxWidth: 290,  borderRadius:8 }}>
                <Grid item container style={{backgroundColor:"#239F54", color:"#fff",padding:"8px 24px",borderRadius:"8px 8px 0 0 ",maxHeight:"400px", overflowY:"auto"}}>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="h6">Done</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="h6">32m 57s</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={2} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="body1">Token 4</Typography>
                    </Grid>                  
                    <Grid item px={1} sx={{border:2, borderRadius: 400}}>
                      <Typography variant="body1">Zomato</Typography>
                    </Grid>
                  </Grid>
                  <Grid mb={1} container justifyContent="space-between">
                    <Grid item>
                      <Typography variant="subtitle2">#4352</Typography>
                    </Grid>                  
                    <Grid item>
                      <Typography variant="subtitle2"></Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle2">Delivery</Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item container style={{padding:"8px" ,borderRadius:"0 0 8px 8px",height:"300px",maxHeight:"300px", overflowY:"auto"}}>
                  <List style={{width:"100%"}}>
                      <ListItem  divider>
                        <ListItemText  primary="Soup" secondary="do not add pepper and salt"/>2
                      </ListItem>
                      <Divider/>
                      <ListItem  divider>
                        <ListItemText  primary="Chicken Noodles" />2
                      </ListItem>
                      <ListItem  divider>
                        <ListItemText  primary="French Fries" />2
                      </ListItem>
                      <ListItem   divider>
                        <ListItemText  primary="Soda" />2
                      </ListItem>



                  </List>
                </Grid>
              </Paper>
            </Grid>

            


        </Grid>
    </Grid>
      
    </>
  );
};
export default BarPanel;
