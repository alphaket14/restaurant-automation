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
import { DatePicker } from "@material-ui/lab";
import { CurrencyRupee } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
const AddBasicCampaign = (props) => {
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

  const [fromDate, setFromDate] = useState(new Date());

  const [toDate, setToDate] = useState(new Date().getTime() + 24 * 60 * 60 * 1000);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

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
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                Start Date
              </Typography>
              <DatePicker
                value={fromDate}
                onChange={(newDate) => {
                  setFromDate(newDate);
                }}
                renderInput={(params) => {
                  const month = params.inputProps.value.split("/")[0];
                  const day = params.inputProps.value.split("/")[1];
                  const year = params.inputProps.value.split("/")[2];
                  const d = new Date(Number(year), Number(month) - 1, Number(day));
                  const dateValue = `${days[d.getDay()]}, ${day} ${months[d.getMonth()]} ${year}`;
                  params.inputProps.value = `${dateValue}`;
                  return (
                    <TextField
                      sx={{ mr: 1 }}
                      {...params}
                      label="From"
                      size="small"
                      helperText={null}
                    />
                  );
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Typography variant="body1" gutterBottom>
                End Date
              </Typography>
              <DatePicker
                value={toDate}
                onChange={(newDate) => {
                  setToDate(newDate);
                }}
                renderInput={(params) => {
                  const month = params.inputProps.value.split("/")[0];
                  const day = params.inputProps.value.split("/")[1];
                  const year = params.inputProps.value.split("/")[2];
                  const d = new Date(Number(year), Number(month) - 1, Number(day));
                  const dateValue = `${days[d.getDay()]}, ${day} ${months[d.getMonth()]} ${year}`;
                  params.inputProps.value = `${dateValue}`;
                  return <TextField {...params} label="To" size="small" helperText={null} />;
                }}
              />
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
export default AddBasicCampaign;
