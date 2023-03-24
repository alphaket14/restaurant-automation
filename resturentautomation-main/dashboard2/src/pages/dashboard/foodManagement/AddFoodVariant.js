import React, { useState, useCallback } from "react";
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
  RadioGroup,
  Radio
} from "@mui/material";
const AddFoodVariant = (props) => {
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Food Variant
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
                <Typography variant="body1">Parent Category :</Typography>
              </Grid>
              <Grid item xs={8}>
                <FormControl fullWidth>
                  <RadioGroup row>
                    <FormControlLabel
                      control={
                        <Radio
                          sx={{ color: "primary.main", "&.Mui-checked": { color: "primary.main" } }}
                        />
                      }
                      label="Veg"
                      value="veg"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          sx={{ color: "error.main", "&.Mui-checked": { color: "error.main" } }}
                        />
                      }
                      label="Non-Veg"
                      value="nonveg"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Catagory :</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Name :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField placeholder="Food Name" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Variant :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField placeholder="Food Variant" fullWidth size="small" />
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
export default AddFoodVariant;
