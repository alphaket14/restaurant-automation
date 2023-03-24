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
import { useDropzone } from "react-dropzone";
const AddFood = (props) => {
  const [file, setFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Food
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
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Food Name :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField placeholder="Food Name" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                <Typography variant="body1">Description :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField multiline rows={3} maxRows={5} placeholder="Add Description" fullWidth />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                <Typography variant="body1">Image :</Typography>
              </Grid>
              <Grid item xs={8}>
                <div
                  {...getRootProps()}
                  style={{
                    cursor: "pointer",
                    border: isDragReject
                      ? "1px dashed red"
                      : isDragAccept
                      ? "1px dashed green"
                      : "1px dashed grey",
                    padding: 10,
                    borderRadius: 10,
                    textAlign: "center",
                    height: 100
                  }}
                >
                  <input {...getInputProps()} />
                  {isDragReject ? (
                    <p>File not Supported.</p>
                  ) : (
                    <>
                      <p>Drag and Drop.</p>
                      <p>(.jpg, .jpeg and .png)</p>
                    </>
                  )}
                  {file ? (
                    <p style={{ color: "green", marginTop: 10 }}>{file?.name} Selected.</p>
                  ) : null}
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Order Type :</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small">
                  <MenuItem>Dine In</MenuItem>
                  <MenuItem>Delivery</MenuItem>
                  <MenuItem>Pick-Up</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Price :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField placeholder="MRP" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Status :</Typography>
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small">
                  <MenuItem>Active</MenuItem>
                  <MenuItem>Inactive</MenuItem>
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
export default AddFood;
