import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//custom function to get id
import * as func from "./to-get-send-id.jsx";
//function to transfer restaurant id to customer-list customerListTemp
import *as  func2 from "./customer-list/customer-list-template.jsx";
//function to transfer restaurant id to vendor list template
import *as func3 from "./vendor-list/vendor-list-template.jsx";
//function to transfer restaurant id to inventory list template
import *as func4 from "./inventory-list/inventory-list-template.jsx";
//function to transfer restaurant id to menu list template
import *as func5 from "./menu/menu-list-template.jsx";
//function to send restaurant id to profile template.jsx to view its Profile
import *as func6 from "./restaurant-profile/profile-template.jsx";

export default function BasicMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
 let navigate = useNavigate();
//function to route customers list page of particular restaurantType using its resaturant id from funcntion sendId

function profile(){
  var id=func.Id()
  func6.getID(id)
  let path = "/restaurants/total-list/view-profile";
  navigate(path);
  console.log("profile button clicked"+ " "+func.Id())
}
function menu(){
  var id=func.Id()
  func5.getID(id)
  let path = "/restaurants/total-list/view-menu-list";
  navigate(path);
}
function vendor(){
  var id=func.Id()
  func3.getID(id)
  let path = "/restaurants/total-list/view-vendor-list";
  navigate(path);
}
function inventory(){
  var id=func.Id()
  func4.getID(id)
  let path = "/restaurants/total-list/view-inventory-list";
  navigate(path);
}
function customer(){
  var id=func.Id()
  func2.getID(id)
  let path = "/restaurants/total-list/view-customer-list";
  navigate(path);
}
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant="contained"
        sx={{height:20}}
      >
      {/*label of button*/}
        {props.label}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
      {/*drop down of button also Deciding which drop down button has been clicked and according to that call respective function for that action*/}
        {props.dropDown.map((text)=>(
          <div key={text}>
          {text=="Profile"?<MenuItem onClick={profile}>{text}</MenuItem>:text=="Menu"?<MenuItem onClick={menu}>{text}</MenuItem>:text=="Vendors"?<MenuItem onClick={vendor}>{text}</MenuItem>:text=="Inventory"?<MenuItem onClick={inventory}>{text}</MenuItem>:text=="Customers"?<MenuItem  onClick={customer}>{text}</MenuItem>:console.log("error in deciding which dropdown button of view column clicked")}
          </div>
        ))}
      </Menu>
    </div>
  );
}
