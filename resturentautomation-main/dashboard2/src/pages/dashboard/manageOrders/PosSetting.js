import React from "react";
import {
  Grid,
  Stack,
  Checkbox,
  Typography,
  FormControl,
  FormControlLabel,
  Divider
} from "@mui/material";
const PosSetting = (props) => {
  return (
    <>
      <Grid container direction="column" sx={{ padding: "5px 15px" }}>
        <Grid item container direction="column">
          <Grid item>
            <Typography variant="h4">Place Order Setting</Typography>
          </Grid>
          <Divider />
        </Grid>
      </Grid>
    </>
  );
};
export default PosSetting;
