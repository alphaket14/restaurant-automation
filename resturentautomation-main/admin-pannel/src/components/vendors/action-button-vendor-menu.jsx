import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//custom function to get id
import * as func from "../restaurants/to-get-send-id.jsx";
//function to transfer vendor id to restaurant list template
import * as transferVendorId from "./restaurant-list/restaurant-list-template.jsx";
//function to transfer restaurant  id to purchase list template
import * as transferRestaurantIdPL from "./restaurant-list/purchase-list/purchase-list-template.jsx";
//function to transfer restaurant  id to purchase return template
import * as transferRestaurantIdPR from "./restaurant-list/purchase-return/purchase-return-template.jsx";

//function to transfer order id to view order template
//import * as transferOrderId from "./restaurant-list/view-orders/view-order/view-order-template.jsx";

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
//function to route customers list page of particular restaurantType mixed for all pages

//customer list page note block there in customer as well as restaurant page
function profile(){
  console.log("profile button clicked")
}

function restaurantList(){
  var id=func.Id()
  transferVendorId.getID(id)
  let path = "/vendors/total-list/restaurant-list";
  navigate(path);
  console.log("restaurant button clicked")
}
//next table
function viewProfile(){
  console.log("View profile button clicked")
}
function purchaseList(){
  var id=func.Id()
  transferRestaurantIdPL.getID(id)
  let path = "/vendors/total-list/restaurant-list/purchase-list";
  navigate(path);
}
function purchaseReturn(){
  var id=func.Id()
  transferRestaurantIdPR.getID(id)
  let path = "/vendors/total-list/restaurant-list/purchase-return";
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
        {text=="Profile"?<MenuItem onClick={profile}>{text}</MenuItem>:text=="Restaurant List"?<MenuItem onClick={restaurantList}>{text}</MenuItem>:text=="View Profile"?<MenuItem onClick={viewProfile}>{text}</MenuItem>:text=="Purchase List"?<MenuItem onClick={purchaseList}>{text}</MenuItem>:text=="Purchase Return"?<MenuItem onClick={purchaseReturn}>{text}</MenuItem>:null}
        </div>
        ))}
      </Menu>
    </div>
  );
}
