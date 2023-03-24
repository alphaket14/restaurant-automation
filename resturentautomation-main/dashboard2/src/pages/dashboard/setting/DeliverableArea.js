import React, { useState, useCallback } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
const DeliverableArea = (props) => {
  return (
    <>
      <Grid container>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Deliverable Area
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Select City
              </Typography>
              <Select size="small" fullWidth>
                <MenuItem>Kolkata</MenuItem>
                <MenuItem>Mumbai</MenuItem>
                <MenuItem>Delhi</MenuItem>
              </Select>
            </Grid>
          </Grid>

          {/* <Grid item container justifyContent="right" spacing={1}>
            <Grid item xs={1}>
              <Button variant="outlined" fullWidth>
                Reset
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth variant="contained">
                Save
              </Button>
            </Grid>
          </Grid> */}
        </Grid>
      </Grid>
    </>
  );
};
export default DeliverableArea;
