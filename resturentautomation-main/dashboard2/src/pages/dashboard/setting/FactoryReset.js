import React from "react";
import { Box, Grid, Button } from "@material-ui/core";
const FactoryReset = (props) => {
  return (
    <>
      <Grid
        direction="column"
        container
        rowGap={2}
        align="center"
        alignSelf="center"
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          justifyContent: "center",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
      >
        <Grid xs={6} item style={{ padding: 20, borderRadius: 5, backgroundColor: "grey" }}>
          Note: strongly recomanded to backup your SOURCE FILE and DATABASE before Reset.Factory
          Reset will be remove all your transactional data.
        </Grid>
        <Grid item>
          <Button variant="outlined">Reset</Button>
        </Grid>
      </Grid>
    </>
  );
};
export default FactoryReset;
