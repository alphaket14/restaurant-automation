import React from "react";
import { TextField, Grid, Button } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
const KitchenDashboardSetting = (props) => {
  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 0",
          margin: "20px 0px",
          width:"99%"
        }}
        spacing={1}
      >
        <Scrollbar>
        <Grid item container spacing={2}>
          <Grid item xs={5} align="right" alignSelf="center">
            Kitchen Refesh Time in Seconds
          </Grid>
          <Grid item xs={4}>
            <TextField type="number" size="small" placeholder="45" fullWidth />
          </Grid>
        <Grid item xs={3}>
          <Button variant="contained">Save</Button>
        </Grid>
        </Grid>
      </Scrollbar>
      </Grid>
    </>
  );
};
export default KitchenDashboardSetting;

{
  /* <Grid item container xs={8} spacing={2}>
          <Grid item xs={5} align="right" alignSelf="center">
            Kitchen Refesh Time in Seconds*
          </Grid>
          <Grid item xs={7}>
            <TextField type="number" size="small" placeholder="45" fullWidth />
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Save</Button>
        </Grid> */
}
