import * as React from 'react';
//components mui
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import Divider from '@mui/material/Divider';
//icons mui
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';


//data file
import * as Data from "./MenuData.jsx";
export default function NestedList(props) {

const icon='SettingsIcon';
{/*To handle submenu toggle*/}
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div>
    <List>
    {/*Main list name passed as a prop*/}
      <ListItem key={props.name}>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{props.icon}</ListItemIcon>
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      </ListItem>
      {/*Submenu array of submenu passed as a prop*/}
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        {props.submenu.text.map((item) => {
          if(item.submenu){
            return <NestedList  name={item.label} submenu={item.submenu} icon={<FiberManualRecordIcon sx={{fontSize:10,color:"#000"}}/>} />
          }
          else{

            return (
                          <ul type="disc">
                            <ListItem key={item.label}>
  
                            <ListItemButton component="a" href={item.path} sx={{ pl: 4 }}>
                          <li>  <ListItemIcon >
                              </ListItemIcon></li>
                            <ListItemText primary={item.label} sx={{position:'relative',right:45}} />
                              </ListItemButton>
  
                              </ListItem>
                          </ul>
          )
          }
        })}
        </List>
        <Divider  />
      </Collapse>
    </List>
  </div>
  );
}
