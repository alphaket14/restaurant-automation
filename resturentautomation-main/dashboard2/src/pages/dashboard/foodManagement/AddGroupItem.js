import React, { useState, useCallback } from "react";
import {
  Input,
  Box,
  Button,
  IconButton,
  TextField,
  Grid,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { useDropzone } from "react-dropzone";
const AddGroupItem = (props) => {
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
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box"
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
            Purchase Report
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
        <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={4} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Category
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Select Kitchen
              </Grid>
              <Grid item xs={8}>
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Food Name*
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="Food Name" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Component
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="Add Component" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Notes
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="Add Notes" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Description
              </Grid>
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  placeholder="Add Description"
                  fullWidth
                  size="small"
                />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Image
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
          <Grid item container direction="column" rowGap={2} xs={4}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                VAT
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="0%" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Cooking Time
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="00:00" fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Status
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
          <Grid item container direction="column" rowGap={2} xs={4}>
            <Grid item>
              <Table size="small" sx={{ minWidth: 1300 }}>
                <TableHead>
                  <TableRow>
                    <TableCell> Name </TableCell>
                    <TableCell> Variant </TableCell>
                    <TableCell> Price </TableCell>
                    <TableCell> Qty </TableCell>
                    <TableCell> Action </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Price*
              </Grid>
              <Grid item xs={8}>
                <TextField variant="outlined" placeholder="price" fullWidth size="small" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default AddGroupItem;
