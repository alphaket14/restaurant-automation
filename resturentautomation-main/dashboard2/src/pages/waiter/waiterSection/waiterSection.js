import React from "react";
import WaiterAppBar from "../waiternavbar/waiternavbar";
import "./waiterSection.css";
import { Divider, Typography, Grid, Button } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
const WaiterSection = () => {
  const navigate = useNavigate();
  return (
    <>
      <WaiterAppBar />
      <Typography sx={{ margin: "10px" }} variant="h5" gutterBottom>
        Sections
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid
        container
        style={{
          borderRadius: 5,
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <Grid item container style={{ padding: "20px 20px" }}>
          <div className="section-cards">
            <div className="section-name">Non Ac</div>
            <Button
              onClick={() =>
                navigate("/waiter/waitertables", { data: "Hello" })
              }
              variant="contained"
              size="small"
              fullWidth
            >
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Ac</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Garden</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Sea View</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Outer</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Terrace</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="section-cards">
            <div className="section-name">Swimming Pool</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WaiterSection;
