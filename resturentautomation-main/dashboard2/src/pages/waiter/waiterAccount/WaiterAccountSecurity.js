import "./Waiteraccount.css";

import TextField from "@mui/material/TextField";
import { useState } from "react";
import { UpdateWaiterbyId } from "../../../redux/Waiter api/WaiterAuthApi";

const WaiterSecurity = () => {
  const [changefield, setchangefield] = useState(false);
  const Showinput = () => {
    setchangefield(!changefield);
  };
  const UpdateWaiter = async () => {
    const id = sessionStorage.getItem("waiterid");
    await UpdateWaiterbyId(id);
  };
  return (
    <>
      <div className="security-container">
        <div onClick={Showinput} className="submit">
          Change Password
        </div>

        {changefield && (
          <>
            <div className="inputboxsecurity">
              <TextField
                id="standard-basic"
                label="Old Password"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="inputboxsecurity">
              <TextField
                id="standard-basic"
                label="New Password"
                variant="standard"
                fullWidth
              />
            </div>
            <div className="inputboxsecurity">
              <TextField
                fullWidth
                id="standard-basic"
                label="Confirm Password"
                variant="standard"
              />
            </div>
            <div
              style={{
                padding: "10px",
                backgroundColor: "green",
                cursor: "pointer",
                borderRadius: "4px",
              }}
              onClick={UpdateWaiter}
            >
              Save
            </div>
          </>
        )}
      </div>
      <div className="security-container" style={{ marginBottom: "1rem" }}>
        <div className="delete-acc">Delete Account</div>
      </div>
    </>
  );
};

export default WaiterSecurity;
