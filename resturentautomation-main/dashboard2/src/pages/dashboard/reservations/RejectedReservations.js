import React, { useState } from "react";
import {
  Paper,
  TableContainer,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  Modal,
  MenuItem,
  Fade,
  Backdrop,
  FormControl,
  Box,
  TextField,
  Tooltip,
  Typography,
  Divider,
  makeStyles,
  Checkbox,
  ListItemText,
  InputLabel,
  TablePagination
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { DatePicker } from "@material-ui/lab";
import { Add, Edit, Delete, Visibility } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
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

const RejectedReservations = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const columns = [
    { label: "Name", minWidth: 100, maxWidth: 120 },
    { label: "Phone", minWidth: 100, maxWidth: 120 },
    { label: "Table No.", minWidth: 100, maxWidth: 120 },
    { label: "No. of People", minWidth: 50, maxWidth: 120 },
    { label: "Booking Date", minWidth: 80, maxWidth: 120 },
    { label: "Reservation Date", minWidth: 80, maxWidth: 120 },
    { label: "Time Slot", minWidth: 80, maxWidth: 120 },
    { label: "Status", minWidth: 80, maxWidth: 120 },
    { label: "Actions", minWidth: 80, maxWidth: 100 }
  ];
  const [startDate, SetStartDate] = React.useState(new Date());
  const createData = (
    custName,
    phone,
    tableNo,
    noOfPerson,
    bookTime,
    reserveTime,
    timeSlot,
    status
  ) => {
    return { custName, phone, tableNo, noOfPerson, bookTime, reserveTime, timeSlot, status };
  };

  const rows = [
    createData(
      "Smith",
      "+91656451258",
      12,
      3,
      "25-05-2022",
      "28-05-2022",
      "20:00 - 20:30",
      "REJECTED"
    )
  ];

  const states = ['ACCEPTED', 'PENDING', 'REJECTED'];
  const [status, setStatus] = useState(['REJECTED']);
  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setStatus(typeof value === "string" ? value.split(",") : value);
  };


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
              Details
            </Typography>
            <Grid container direction="column">
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Name :
                </Grid>
                <Grid item xs={8}>
                  Customer Name
                </Grid>
              </Grid>

              <Divider />

              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Email :
                </Grid>
                <Grid item xs={8}>
                  email@gmail.com
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Phone :
                </Grid>
                <Grid item xs={8}>
                  +91264421215
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Persons :
                </Grid>
                <Grid item xs={8}>
                  3
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Table No. :
                </Grid>
                <Grid item xs={8}>
                  12
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Booking Date :
                </Grid>
                <Grid item xs={8}>
                  25-05-2022
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Reservation Date :
                </Grid>
                <Grid item xs={8}>
                  28-05-2022
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Time Slot :
                </Grid>
                <Grid item xs={8}>
                  20:00 - 20:30
                </Grid>
              </Grid>
              <Divider />
              <Grid item container sx={{ py: 2, px: 1 }}>
                <Grid item xs={4}>
                  Status :
                </Grid>
                <Grid item xs={8}>
                  REJECTED
                </Grid>
              </Grid>
              <Grid item container justifyContent="right">
                <Button variant="outlined" onClick={closeModalHandler}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      {/* <Typography variant="h5" gutterBottom>
        Rejected Reservations (
        <Typography component="span" variant="h5" color="primary">
          {rows.length}
        </Typography>
        )
      </Typography> */}

      <TextField sx={{ width: "20%", mb: 2 }} size="small" label="Search" />
      <TextField sx={{ width: "20%",mb: 2, ml:1  }} size="small" label="Mobile No." />
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
        <Table size="small" sx={{ minWidth: 1300 }} >
          <TableHead>
            <TableRow>
              {columns.map((column, id) => {
                return (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => {
              return (
                <TableRow key={row.sl}>
                  <TableCell align="center">{row.custName}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.tableNo}</TableCell>
                  <TableCell align="center">{row.noOfPerson}</TableCell>
                  <TableCell align="center">{row.bookTime}</TableCell>
                  <TableCell align="center">{row.reserveTime}</TableCell>
                  <TableCell align="center">{row.timeSlot}</TableCell>
                  <TableCell align="center">
                    {/* <FormControl size="small" fullWidth>
                      <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                        <MenuItem value="ACCEPTED">ACCEPTED</MenuItem>
                        <MenuItem value="PENDING">PENDING</MenuItem>
                        <MenuItem value="REJECTED">REJECTED</MenuItem>
                      </Select>
                    </FormControl> */}
                        {
                                row.status==='ACCEPTED'?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button>:row.status==='PENDING'?<Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button>:row.status==='WAITING'?<Button
                                color="secondary"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.status}
                            </Button>
                              }
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip placement="left" title="View">
                      <IconButton color="secondary" size="small" onClick={openModalHandler}>
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                    <Tooltip placement="top" title="Delete">
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
export default RejectedReservations;
