import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Typography,
  FormControl,
  FormControlLabel,
  InputAdornment
} from "@mui/material";

import { CurrencyRupee } from "@mui/icons-material";

const AddAddons = (props) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Add-ons
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box"
        }}
      >
        <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={6} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Add-on Name :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField fullWidth size="small" placeholder="Add-on Name" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Price :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  placeholder="Price"
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupee fontSize="small" />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Status :</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small">
                  <MenuItem>ACTIVE</MenuItem>
                  <MenuItem>INACTIVE</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="outlined">Reset</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddAddons;
