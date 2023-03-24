import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Divider,
  Typography,
  Tooltip,
  Modal,
  Backdrop,
  Fade,
  Stack,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const EmailContact = (props) => {
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Name", minWidth: 50, maxWidth: 100 },
    { label: "Email", minWidth: 50, maxWidth: 100 },
    { label: "Birth Date", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createRows = (name, email, dob, status) => ({
    name,
    email,
    dob,
    status
  });

  const rows = [createRows("Name", "email@gmail.com", "23-06-2022", "ACTIVE")];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [statustype, setStatusType] = React.useState([]);

  const status = ["ACTIVE", "INACTIVE"];

  const statusChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setStatusType(typeof value === "string" ? value.split(",") : value);
  };

  const [endDate, SetEndDate] = React.useState(new Date());

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
            <Typography sx={{ width: "100%", textAlign: "center", mb: 2 }} variant="h5">
              Edit Contact
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small" placeholder="Name" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Email :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small" placeholder="Email ID" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Date of Birth :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small" type="date" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small">
                    <MenuItem>ACTIVE</MenuItem>
                    <MenuItem>INACTIVE</MenuItem>
                  </Select>
                </Grid>
              </Grid>

              <Grid item container justifyContent="right">
                <Button variant="outlined" color="error" onClick={closeModalHandler}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid container sx={{ mb: 2 }} spacing={2}>
        <Grid item xs={2}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">Total Contacts</Typography>
            <Typography variant="body1">{rows.length}</Typography>
          </Paper>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{ mb: 1 }}
      >
        <Box
          component="span"
          sx={{
            width: "100%",
          }}
        >
          {/* <Typography variant="h5">SMS History</Typography> */}

          <TextField
            sx={{ mr: 1, float: "left", width: "20%", mb: 2 }}
            fullWidth
            size="small"
            placeholder="Name"
            label="Name"
          />
          <TextField
            sx={{ mr: 1, float: "left", width: "20%", mb: 2 }}
            fullWidth
            size="small"
            placeholder="Email Id"
            label="Email Id"
          />

          <FormControl
            sx={{ mr: 1, float: "left", width: "18%"}}
            size="small"
          >
            <InputLabel id="select-type">Status</InputLabel>
            <Select
              labelId="select-type"
              label="Select Type"
              id="select-type"
              value={statustype}
              onChange={statusChangeHandler}
              renderValue={(selected) => selected.join(", ")}
            >
              {status.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={statustype.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          {/* <Select fullWidth size="small">
            <MenuItem>Twilio</MenuItem>
            <MenuItem>Infobip</MenuItem>
          </Select> */}
        
          <Button variant="contained"sx={{ marginLeft: "10px", float: "right" }} >
            Filter
          </Button>



          <DatePicker
            inputFormat="dd/MM/yyyy"
            value={endDate}
            onChange={(newValue) => {
              SetEndDate(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Date of Birth"
                size="small"
                sx={{ width: "15%", marginLeft: "10px", float: "right" }}
                helperText={null}
              />
            )}
          />

        </Box>
      </Stack>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
      <TableContainer >
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.name}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.dob}</TableCell>
                  <TableCell align="center">
                      {row.status=="ACTIVE"? 
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      :
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      }
                      </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton size="small" color="primary" onClick={openModalHandler}>
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton size="small" sx={{ color: "error.main" }}>
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
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
export default EmailContact;
