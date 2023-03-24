import React from "react";
import "./Waiteraccount.css";
import { useState } from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import WaiterGeneral from "./WaiterAccountGeneral";
import WaiterBilling from "./WaiterAccountBilling";
import WaiterSecurity from "./WaiterAccountSecurity";
import WaiterAppBar from "../waiternavbar/waiternavbar";

const Waiteraccount = () => {
  const [alignment, setAlignment] = useState("general");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const togglestyle = {
    color: "white",
    height: "30px",
    fontSize: "1rem",
    textTransform: "lowercase",
  };
  let button = <WaiterGeneral />;
  if (alignment === "general") {
    button = <WaiterGeneral />;
  } else if (alignment === "security") {
    button = <WaiterSecurity />;
  }
  return (
    <div className="account_container">
      <WaiterAppBar />
      <div className="account_shell">
        <h1>Account</h1>

        <div>
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
          >
            <ToggleButton
              style={togglestyle}
              onClick={() => setAlignment("general")}
              value="general"
            >
              General
            </ToggleButton>

            <ToggleButton
              style={togglestyle}
              onClick={() => setAlignment("security")}
              value="security"
            >
              Security
            </ToggleButton>
          </ToggleButtonGroup>
          <div>{button}</div>
        </div>
      </div>
    </div>
  );
};

export default Waiteraccount;
