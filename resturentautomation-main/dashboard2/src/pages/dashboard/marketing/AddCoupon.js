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
const AddCoupon = (props) => {
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
          Add Coupon
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Title
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Title" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Order Type
              </Typography>
              <Select size="small" fullWidth>
                <MenuItem>Dine In</MenuItem>
                <MenuItem>Delivery</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Coupon Code
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Code" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Limit For Same User
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Limit" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Start Date
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Expiry Date
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Discount Type
              </Typography>
              <Select size="small" fullWidth>
                <MenuItem>Amount</MenuItem>
                <MenuItem>Percent</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Discount
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Max Discount
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Min Purchase
              </Typography>
              <TextField fullWidth size="small" type="text" />
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
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddCoupon;
