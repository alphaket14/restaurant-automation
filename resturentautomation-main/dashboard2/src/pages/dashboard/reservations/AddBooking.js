import React, { useState } from "react";
import {
  Grid,
  Paper,
  TableContainer,
  TextField,
  Button,
  Modal,
  Fade,
  Backdrop,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
  IconButton,
  Typography,
  Box,
  TablePagination
} from "@mui/material";

import { Add } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
import { makeStyles } from "@material-ui/core";
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

const AddBooking = () => {
  const classes = useStyles();
  const [startDate, SetStartDate] = React.useState(new Date());

  const columns = [
    { label: "Sr. No.", minWidth: 10, maxWidth: 20 },
    { label: "Table No.", minWidth: 50, maxWidth: 100 },
    { label: "No. of People", minWidth: 50, maxWidth: 100 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Available Slot", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 50, maxWidth: 60 }
  ];

  const createRow = (tableNo, people, date, slot, status) => ({ tableNo, people, date, slot, status });

  const rows = [createRow(10, 5, "28-05-2022", "20:00 - 20:30", "AVAILABLE")];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

    
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [rows2, setRows2] = useState(rows);

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
              Add Booking
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
                  <TextField fullWidth size="small" placeholder="Email" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Phone :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small" placeholder="Phone" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">No of People :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField size="small" />
                </Grid>
              </Grid>

              <Grid item container justifyContent="right">
                <Button variant="outlined" color="error" onClick={closeModalHandler}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      {/* <Typography variant="h5" gutterBottom>
        Take a Reservation
      </Typography> */}
      <Grid
        sx={{
         width:"100%",
         justifyContent:"flex-end"
        }}
        container
      >
        <DatePicker
                inputFormat="dd/MM/yyyy"
                value={startDate}
                onChange={(newValue) => {
                  SetStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Select Date"
                    sx={{ width: "15%", float: "right", margin: "0 10px" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />
          <Button variant="contained" color="primary">
            Check Availability
          </Button>
        
      </Grid>
      <Grid
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
            {columns.map((column, id) => (
              <TableCell
                align="center"
                sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => (
            <TableRow>
              <TableCell align="center">{id + 1}</TableCell>
              <TableCell align="center">{row.tableNo}</TableCell>
              <TableCell align="center">{row.people}</TableCell>
              <TableCell align="center">{row.date}</TableCell>
              <TableCell align="center">{row.slot}</TableCell>
              <TableCell align="center">{row.status==="AVAILABLE"?  <Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}</Button>:<Button
                                color="error"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}</Button>}</TableCell>
              <TableCell align="center">
                <Button variant="contained" startIcon={<Add />} onClick={openModalHandler}>
                  Add Booking
                </Button>
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

export default AddBooking;
