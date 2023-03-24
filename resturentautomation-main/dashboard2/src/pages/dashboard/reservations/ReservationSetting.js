import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  TextField,
  Typography,
  TableContainer,
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
  Tooltip
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import { Edit, Visibility, Add } from "@mui/icons-material";

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

const ReservationSetting = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const columns = [
    { label: "Day", minWidth: 100, maxWidth: 100 },
    { label: "Actions", minWidth: 100, maxWidth: 150 }
  ];

  const createRows = (day) => ({ day });

  const rows = [
    createRows("Monday"),
    createRows("Tuesday"),
    createRows("Wednesday"),
    createRows("Thursday"),
    createRows("Friday"),
    createRows("Saturday"),
    createRows("Sunday")
  ];

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
              Reservation Setting(Monday)
            </Typography>
            <Grid container spacing={2} direction="column">
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Opening Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Closing Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Maximum Reserved Person :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small" />
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
                  <Button variant="contained">Add</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      
      <Typography variant="h5" sx={{ mb: 2 }}>
            Reservation Setting
          </Typography>
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
        <Table size="small" >
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
                <TableCell align="center">
                  <Tooltip title="Add" placement="left">
                    <IconButton size="small" color="primary" onClick={openModalHandler}>
                      <Add />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="View" placement="top">
                    <IconButton
                      size="small"
                      color="secondary"
                      onClick={() => navigate("/dashboard/reservations/daywise-reservationsetting")}
                    >
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
      </Grid>
    </>
  );
};
export default ReservationSetting;
