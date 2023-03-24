import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Stack,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
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
  TablePagination
} from "@mui/material";
import { DatePicker } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Visibility, Send } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";

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

const EmailHistory = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Sender", minWidth: 50, maxWidth: 100 },
    { label: "To", minWidth: 50, maxWidth: 100 },
    { label: "Subject", minWidth: 50, maxWidth: 100 },
    { label: "Sent", minWidth: 50, maxWidth: 100 },
    { label: "Initiated", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createRows = (sender, to, subject, sent, initiated, status) => ({
    sender,
    to,
    subject,
    sent,
    initiated,
    status
  });

  const rows = [
    createRows(
      "Twilio",
      "email@gmail.com",
      "Subject Line",
      "23-06-2022, 20:00",
      "23-06-2022, 20:00",
      "FAIL"
    )
  ];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [statustype, setStatusType] = React.useState([]);
  const [type, setType] = React.useState([]);


  const status = ["All", "Completed", "Scheduled", "Failed"];
  const selections = ["Twilio", "Infobip"];

  const statusChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setStatusType(typeof value === "string" ? value.split(",") : value);
  };

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
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
              Email Details
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Email To :</Typography>
                </Grid>
                <Grid item xs={8}>
                  email@gmail.com
                </Grid>
              </Grid>
              <Divider sx={{ width: "100%", mt: 1 }} />
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Initiated :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1">23-06-2022, 20:00</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ width: "100%", mt: 1 }} />
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Subject :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1">Subject Body</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ width: "100%", mt: 1 }} />
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Message :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="body1">Message Body</Typography>
                </Grid>
              </Grid>
              <Divider sx={{ width: "100%", mt: 1 }} />
              <Grid item container justifyContent="right">
                <Button variant="outlined" onClick={closeModalHandler}>
                  Close
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
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
            placeholder="Email"
            label="Email"
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
          <FormControl
            sx={{ mr: 1, float: "left", width: "18%" }}
            size="small"
          >
            <InputLabel id="select-type">SMS Gateway</InputLabel>

            <Select
              labelId="select-type"
              label="Select Type"
              id="select-type"
              value={type}
              onChange={typeChangeHandler}
              renderValue={(selected) => selected.join(", ")}
            >
              {selections.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={type.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <Button
            variant="contained"
            sx={{ marginLeft: "10px", float: "right" }}
            startIcon={<Send />}
            onClick={() => navigate("/dashboard/marketing/email-setting/send-email")}

          >
            Send Email
          </Button>

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
                label="Date"
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
                  <TableCell align="center">{row.sender}</TableCell>
                  <TableCell align="center">{row.to}</TableCell>
                  <TableCell align="center">{row.subject}</TableCell>
                  <TableCell align="center">{row.sent}</TableCell>
                  <TableCell align="center">{row.initiated}</TableCell>
                  <TableCell align="center"><Button
                                color="error"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button></TableCell>
                  <TableCell align="center">
                    <Tooltip title="View" placement="top">
                      <IconButton size="small" color="secondary" onClick={openModalHandler}>
                        <Visibility />
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
export default EmailHistory;
