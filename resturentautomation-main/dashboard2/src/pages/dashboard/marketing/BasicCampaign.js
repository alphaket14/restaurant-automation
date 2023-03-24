import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Grid,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Divider,
  Tooltip,
  Box,
  Modal,
  Autocomplete,
  Backdrop,
  Fade,
  Checkbox,
  InputAdornment,
  TablePagination
} from "@mui/material";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { DatePicker } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

import { useDropzone } from "react-dropzone";

import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    //width: 700,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const BasicCampaign = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Title", minWidth: 50, maxWidth: 100 },
    { label: "Start Date", minWidth: 50, maxWidth: 100 },
    { label: "End Date", minWidth: 50, maxWidth: 100 },
    { label: "Daily Start Time", minWidth: 100, maxWidth: 200 },
    { label: "Daily End Time", minWidth: 100, maxWidth: 200 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (title, startDate, endDate, dailyStartTime, dailyEndTime, status) => {
    return {
      title,
      startDate,
      endDate,
      dailyStartTime,
      dailyEndTime,
      status,
    };
  };

  const rows = [
    createData("Title", "28-06-2022",  "30-06-2022", "20:00", "22:00", "ACTIVE"),
  ];

  const [status, setStatus] = useState(rows[0].status);

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const [favicon, setFavicon] = useState();
  const [logo, setLogo] = useState();

  const onDropFavicon = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFavicon(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: onDropFavicon,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png",
    });

  const [fromDate, setFromDate] = useState(new Date());

  const [toDate, setToDate] = useState(
    new Date().getTime() + 24 * 60 * 60 * 1000
  );

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
    "Dec",
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows2, setRows2] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Grid container>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Add Basic Campaign
              </Typography>

              <Grid
                item
                container
                direction="column"
                spacing={2}
                sx={{ padding: 2 }}
              >
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Title
                    </Typography>
                  </Grid>
                  <Grid sx={{ marginBottom: 2 }} xs={8}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      placeholder="New Campaign"
                    />
                  </Grid>

                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Short Description
                    </Typography>
                  </Grid>
                  <Grid xs={8} sx={{ marginBottom: 2 }}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      maxRows={5}
                      type="text"
                      placeholder="Description..."
                      gutterBottom
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Start Date
                    </Typography>
                  </Grid>
                  <Grid xs={8} sx={{ marginBottom: 2, width:"100%" }}>
                    <DatePicker
                      xs={8}
                      sx={{width:"100%"}}
                      value={fromDate}
                      onChange={(newDate) => {
                        setFromDate(newDate);
                      }}
                      renderInput={(params) => {
                        const month = params.inputProps.value.split("/")[0];
                        const day = params.inputProps.value.split("/")[1];
                        const year = params.inputProps.value.split("/")[2];
                        const d = new Date(
                          Number(year),
                          Number(month) - 1,
                          Number(day)
                        );
                        const dateValue = `${days[d.getDay()]}, ${day} ${
                          months[d.getMonth()]
                        } ${year}`;
                        params.inputProps.value = `${dateValue}`;
                        return (
                          <TextField
                            xs={8}
                            sx={{ mr: 1, width:"100%" }}
                            {...params}
                            label="From"
                            size="small"
                            helperText={null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      End Date
                    </Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ marginBottom: 2,width:"100%" }}>
                    <DatePicker
                    sx={{width:"100%"}}
                      value={toDate}
                      onChange={(newDate) => {
                        setToDate(newDate);
                      }}
                      renderInput={(params) => {
                        const month = params.inputProps.value.split("/")[0];
                        const day = params.inputProps.value.split("/")[1];
                        const year = params.inputProps.value.split("/")[2];
                        const d = new Date(
                          Number(year),
                          Number(month) - 1,
                          Number(day)
                        );
                        const dateValue = `${days[d.getDay()]}, ${day} ${
                          months[d.getMonth()]
                        } ${year}`;
                        params.inputProps.value = `${dateValue}`;
                        return (
                          <TextField
                            sx={{width:"100%"}}
                            {...params}
                            label="To"
                            size="small"
                            helperText={null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Daily Start Time
                    </Typography>
                  </Grid>
                  <Grid xs={8} sx={{ marginBottom: 2 }}>
                    <TextField fullWidth size="small" type="time" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Daily End Time
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField fullWidth size="small" type="time" />
                  </Grid>
                </Grid>
                {/* <Grid item container spacing={2}>
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
                        height: 100,
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
                </Grid> */}
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Image</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      type="file"
                      name="photograph"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ marginRight: 1 }}
                    >
                      Reset
                    </Button>
                    <Button variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* <Typography variant="h5" gutterBottom>
        Basic Campaign List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
        <Button
          variant="contained"
          startIcon={<Add />}
          // onClick={() => navigate("/dashboard/marketing/campaign/basic-campaign/add-new")}
          onClick={openModalHandler}
        >
          Add Campaign
        </Button>
      </Box> <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px",
        }}
        direction="column"
        rowGap={2}
      >
      <TableContainer >
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      }}
                      key={column.label}
                    >
                      {column.label} {column.endIcon && <>({column.endIcon})</>}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.startDate}</TableCell>
                    <TableCell align="center">{row.endDate}</TableCell>
                    <TableCell align="center">{row.dailyStartTime}</TableCell>
                    <TableCell align="center">{row.dailyEndTime}</TableCell>
                    <TableCell align="center">
                    {row.status == "ACTIVE" ? (
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      ) : (
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={openModalHandler}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small">
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      <TablePagination
                component="div"
                count={rows2.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
      </Grid>
    </>
  );
};
export default BasicCampaign;
