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
import { useDropzone } from "react-dropzone";
const CustomerProfile = (props) => {
  const [favicon, setFavicon] = useState();
  const [logo, setLogo] = useState();

  const onDropFavicon = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFavicon(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop: onDropFavicon,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });

  return (
    <>
      <Grid container>
        <Typography variant="h5" sx={{ mb: 1 }}>
          Customer Profile
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Customer ID
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Customer ID" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Name
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Name" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Phone
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Phone" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Email
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Email" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Date Of Birth
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Date Of Anniversary
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                City
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="City" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Pin Code
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="700119" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Address
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
                Instructions
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Instructions" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Order Type
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Dine In</MenuItem>
                <MenuItem>Delivery</MenuItem>
                <MenuItem>Pick-Up</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Order From
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Zomato</MenuItem>
                <MenuItem>Garden</MenuItem>
                <MenuItem>Swiggy</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                No. of Orders
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Orders" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Last Order Date
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Payment Mode
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Credit Card</MenuItem>
                <MenuItem>Debit Card</MenuItem>
                <MenuItem>Cash On delivery</MenuItem>
              </Select>
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
export default CustomerProfile;
