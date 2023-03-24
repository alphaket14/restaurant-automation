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
const AddFoodCampaign = (props) => {
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
          Add Basic Campaign
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Title
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="New Campaign" />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Short Description
              </Typography>
              <TextField
                fullWidth
                multiline
                rows={2}
                maxRows={5}
                type="text"
                placeholder="Description..."
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Zone
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Zone 1</MenuItem>
                <MenuItem>Zone 2</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Restaurant
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Restaurant 1</MenuItem>
                <MenuItem>Restaurant 2</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Start Date
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                End Date
              </Typography>
              <TextField fullWidth size="small" type="date" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Daily Start Time
              </Typography>
              <TextField fullWidth size="small" type="time" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Daily End Time
              </Typography>
              <TextField fullWidth size="small" type="time" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Price
              </Typography>
              <TextField fullWidth size="small" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Discount
              </Typography>
              <TextField fullWidth size="small" />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Discount Type
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Percent</MenuItem>
                <MenuItem>Amount</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Parent Catagory
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Non Veg</MenuItem>
                <MenuItem>Veg</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Attribute
              </Typography>
              <Select fullWidth size="small">
                <MenuItem>Capacity</MenuItem>
                <MenuItem>Size</MenuItem>
                <MenuItem>Type</MenuItem>
              </Select>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Addon
              </Typography>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1" gutterBottom>
                Campaign Image
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
                  <p style={{ color: "green", marginTop: 10 }}>{favicon?.name} Selected.</p>
                ) : null}
              </div>
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
export default AddFoodCampaign;
