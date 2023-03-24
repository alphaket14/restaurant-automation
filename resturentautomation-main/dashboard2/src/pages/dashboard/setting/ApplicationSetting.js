import React, { useState, useCallback } from "react";
import { Input, TextField, Select, MenuItem, Grid, Button, IconButton } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
const ApplicationSetting = (props) => {
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
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "20px 0px"
        }}
      >
        <Grid
          item
          container
          style={{
            borderBottom: "1px solid grey",
            padding: "5px 10px",
            justifyContent: "space-between"
          }}
        >
          <Grid item alignSelf="center">
            Application Setting
          </Grid>
          <Grid item>
            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <EditIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <ControlCameraIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CachedIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <RemoveIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <FullscreenIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid item container spacing={5} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Application Title*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Store Name
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Address
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Email Address
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Phone
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Favicon
            </Grid>
            <Grid item xs={7}>
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
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Opening Time
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Closing Time
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Discount Type
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Discount Rate
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Service Charge
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Select Service Charge Type
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Currency
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Min Delivery Time
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Language
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Date Format
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Time Zone
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Application Alignment
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>

          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Powered By Text*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                rowsMax={5}
                placeholder="Powered By Text"
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Footer Text*
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField
                fullWidth
                size="small"
                multiline
                rows={3}
                rowsMax={5}
                placeholder="Footer Text"
              />
            </Grid>
          </Grid>
          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item style={{ alignSelf: "center" }}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ApplicationSetting;
