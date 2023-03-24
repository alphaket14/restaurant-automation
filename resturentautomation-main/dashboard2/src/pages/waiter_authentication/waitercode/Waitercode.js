import React, { useState } from "react";
import Wavy from "../../../assets/wave otp.svg";
import TextField from "@mui/material/TextField";
import "./waitercode.css";
import { useNavigate } from "react-router";

const Waitercode = () => {
  const [code, setcode] = useState("");
  const handlechange = (e) => {
    e.preventDefault();
    setcode(e.target.value);
  };
  const navigate = useNavigate();
  const handlesubmit = () => {
    console.log(code);
    navigate("/waiter/waiterlogin");
  };
  return (
    <div className="otp-main">
      <img src={Wavy} alt="" />
      <div className="otp-container">
        <TextField
          id="standard-basic"
          label="Enter Code"
          variant="standard"
          onChange={handlechange}
        />
        <span onClick={handlesubmit}>Submit</span>
      </div>
    </div>
  );
};

export default Waitercode;
