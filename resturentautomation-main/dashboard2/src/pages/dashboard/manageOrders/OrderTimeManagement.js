import React, { useState } from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
  TableContainer,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Button,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Tooltip,
  Select,
  MenuItem,
  FormControl
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import { Edit } from "@mui/icons-material";

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

const OrderTimeManagement = (props) => {
  const classes = useStyles();

  const columns = [
    { label: "Day", minWidth: 100, maxWidth: 150 },
    { label: "Start Time", minWidth: 100, maxWidth: 150 },
    { label: "End Time", minWidth: 100, maxWidth: 150 },
    { label: "Status", minWidth: 100, maxWidth: 150 },
    { label: "Actions", minWidth: 100, maxWidth: 150 },
  ];

  const createRows = (day, startTime, endTime, status) => ({ day, startTime, endTime, status });

  const rows = [
    createRows("Monday", "8:00", "20:00", "ENABLE"),
    createRows("Tuesday", "8:00", "20:00", "ENABLE"),
    createRows("Wednesday", "8:00", "20:00", "ENABLE"),
    createRows("Thursday", "8:00", "20:00", "ENABLE"),
    createRows("Friday", "8:00", "20:00", "ENABLE"),
    createRows("Saturday", "8:00", "20:00", "ENABLE"),
    createRows("Sunday", "8:00", "20:00", "ENABLE")
  ];

  const [status, setStatus] = useState(rows[0].status);

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
            <Typography variant="h5" sx={{ width: "100%", textAlign: "center", mb: 3 }}>
              Order Time(Monday)
            </Typography>
            <Grid container spacing={2} direction="column">
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Start Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">End Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={12} align="right">
                  <Button
                    variant="outlined"
                    sx={{ mr: 1 }}
                    color="error"
                    onClick={closeModalHandler}
                  >
                    Cancel
                  </Button>
                  <Button variant="contained">Update</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      {/* <Grid> */}
        {/* <Typography variant="h5" sx={{ mb: 2 }}>
          Order Time Management
        </Typography> */}
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
                <TableCell align="center">{row.day}</TableCell>
                <TableCell align="center">{row.startTime}</TableCell>
                <TableCell align="center">{row.endTime}</TableCell>
               
                <TableCell align="center">
                  {/* <FormControl size="small">
                    <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                      <MenuItem value="ENABLE">ENABLE</MenuItem>
                      <MenuItem value="DISABLE">DISABLE</MenuItem>
                    </Select>
                  </FormControl> */}
                  <Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}</Button>
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit" placement="top">
                    <IconButton size="small" color="primary" onClick={openModalHandler}>
                      <Edit />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
        </Grid>
      {/* </Grid> */}
    </>
  );
};
export default OrderTimeManagement;
