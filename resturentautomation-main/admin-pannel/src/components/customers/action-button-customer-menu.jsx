import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

//custom component view order popup
import ViewOrderPopup from "./restaurant-list/view-orders/view-order/view-order-template-try.jsx";


//custom function to get id
import * as func from "../restaurants/to-get-send-id.jsx";
//function to transfer customer id to restaurant list template
import * as transferCustomerId from "./restaurant-list/restaurant-list-template.jsx";
//function to transfer restaurant  id to view orders template
import * as transferRestaurantId from "./restaurant-list/view-orders/view-orders-template.jsx";
//function to transfer order id to view order template
import * as transferOrderId from "./restaurant-list/view-orders/view-order/view-order-template.jsx";
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
function block(){
  console.log("block button clicked")
}

//customer list page note block there in customer as well as restaurant page
function profile(){
  console.log("profile button clicked")
}

function restaurantList(){
  var id=func.Id()
  transferCustomerId.getID(id)
  let path = "/customers/total-list/restaurant-list";
  navigate(path);
}
//next table
function viewOrders(){
  var id=func.Id()
  transferRestaurantId.getID(id)
  let path = "/customers/total-list/restaurant-list/view-orders";
  navigate(path);
}
function viewOrder(){
  var id=func.Id()
  transferOrderId.getID(id)
  let path = "/customers/total-list/restaurant-list/view-orders/view-order";
  navigate(path);
}
function invoice(){

  console.log("invoice button clicked")
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
        {text=="Block"?<MenuItem onClick={block}>{text}</MenuItem>:text=="Profile"?<MenuItem onClick={profile}>{text}</MenuItem>:text=="Restaurant List"?<MenuItem onClick={restaurantList}>{text}</MenuItem>:text=="View Orders"?<MenuItem onClick={viewOrders}>{text}</MenuItem>:text=="View Order"?<MenuItem><ViewOrderPopup/></MenuItem>:text=="Invoice"?<MenuItem onClick={invoice}>{text}</MenuItem>:null}
        </div>
        ))}
      </Menu>
    </div>
  );
}
