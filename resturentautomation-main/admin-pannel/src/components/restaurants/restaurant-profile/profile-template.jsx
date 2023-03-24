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
//importing data to render textfield values
import * as restData from "../restaurant-data.jsx";

import { CurrencyRupee } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";

//variable to store restaurant id
var restid="";
//function to collect restaurant id from view button template
function getID(id){
    restid=id;
  }

const AddOutlet = (props) => {
  const [favicon, setFavicon] = useState();
  const [logo, setLogo] = useState();

  const onDropFavicon = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFavicon(acceptedFiles[0]);
  });

  const {
    getRootProps,
    getInputProps,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop: onDropFavicon,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });
//finding restaurant details from restaurant data
  const restDetails=restData.rows.filter(item=>item.id==restid);
  const restaurant=restDetails[0]
  return (
    <>
      <Grid container>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Profile
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Restaurant ID
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Restaurant ID"
                disabled="true"
                // value={restaurant.id}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Restaurant Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Restaurant Name"
                disable="true"
                // value={restaurant.restaurantName}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                GST No.
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="GST No."
                disable="true"
                // value={restaurant.gst}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                FSSAI No.
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="FSSAI"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                City
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="City"
                disable="true"
                // value={restaurant.city}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Pin Code
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="700119"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Restaurant Address
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Address"
                multiline
                rows={3}
                maxRows={5}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Locality
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Locality"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Minimum Delivery Time
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="30" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Maximum Delivery Time
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="60" />
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Zone
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Zone</MenuItem>
                <MenuItem>Zone</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Latitude
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Latitude"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Longitude
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Longitude"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Restaurant Logo
              </Typography>
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
                {favicon ? (
                  <p style={{ color: "green", marginTop: 10 }}>
                    {favicon?.name} Selected.
                  </p>
                ) : null}
              </div>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Restaurant Cover
              </Typography>
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
                {favicon ? (
                  <p style={{ color: "green", marginTop: 10 }}>
                    {favicon?.name} Selected.
                  </p>
                ) : null}
              </div>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Contact Details
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Contact No. 1
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Contact No."
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Contact No. 2
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Contact No."
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Contact No. 3
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Contact No."
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Landline No.
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Landline No."
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Website Link
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Website"
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Restaurant Details
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Restaurant Type
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  row
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "primary.main",
                          "&.Mui-checked": { color: "primary.main" }
                        }}
                      />
                    }
                    label="Veg"
                    value="veg"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "error.main",
                          "&.Mui-checked": { color: "error.main" }
                        }}
                      />
                    }
                    label="Non-Veg"
                    value="nonveg"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Cuisines
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Cuisines</MenuItem>
                <MenuItem>Cuisines</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Average Cost for 2
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder=""
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
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Currency
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Currency</MenuItem>
                <MenuItem>Currency</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Table Booking
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  row
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "primary.main",
                          "&.Mui-checked": { color: "primary.main" }
                        }}
                      />
                    }
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "error.main",
                          "&.Mui-checked": { color: "error.main" }
                        }}
                      />
                    }
                    label="No"
                    value="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Online Delivery
              </Typography>
              <FormControl fullWidth>
                <RadioGroup
                  row
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "primary.main",
                          "&.Mui-checked": { color: "primary.main" }
                        }}
                      />
                    }
                    label="Yes"
                    value="Yes"
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        sx={{
                          color: "error.main",
                          "&.Mui-checked": { color: "error.main" }
                        }}
                      />
                    }
                    label="No"
                    value="No"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Owner Information
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Name
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Name"
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Phone
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Phone"
              />
            </Grid>
          </Grid>
          <Typography variant="subtitle2" gutterBottom sx={{ mt: 2 }}>
            Login Information
          </Typography>
          <Divider sx={{ width: "100%" }} />
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Email
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="email@gmail.com"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Password
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Password"
              />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Confirm Password
              </Typography>
              <TextField
                fullWidth
                size="small"
                type="text"
                placeholder="Confirm Password"
              />
            </Grid>
          </Grid>
          <Grid item container justifyContent="right" spacing={1}>
            <Grid item xs={1}>
              <Button variant="outlined" fullWidth>
                Reset
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth variant="contained">
                Add
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export {AddOutlet,getID};
