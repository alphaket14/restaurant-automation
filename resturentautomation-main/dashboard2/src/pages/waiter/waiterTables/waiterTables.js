import React, { useEffect } from "react";
import WaiterAppBar from "../waiternavbar/waiternavbar";
import "./waiterTables.css";
import { Divider, Typography, Grid, Button } from "@material-ui/core";

const WaiterTables = ({ data }) => {
  useEffect(() => {
    console.log(data && data);
  }, []);
  return (
    <>
      <WaiterAppBar />
      <Typography sx={{ margin: "10px" }} variant="h5" gutterBottom>
        Tables
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid
        containers
        style={{
          borderRadius: 5,
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <Grid item container style={{ padding: "20px 20px" }}>
          <div className="tablecards">
            <div className="tablename">T - 1</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 2</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 3</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 4</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 5</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 6</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
          <div className="tablecards">
            <div className="tablename">T - 7</div>
            <Button variant="contained" size="small" fullWidth>
              Enter
            </Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default WaiterTables;
