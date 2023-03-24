import React from "react";
import {
  Grid,
  Box,
  TextField,
  Typography,
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
  TableContainer
} from "@mui/material";

import { makeStyles } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import { Edit, Delete } from "@mui/icons-material";

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

const TimeFrames = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const columns = [
    { label: "Start Time", minWidth: 100, maxWidth: 100 },
    { label: "End Time", minWidth: 100, maxWidth: 100 },
    { label: "Delivery Type", minWidth: 100, maxWidth: 100 },
    { label: "Max Orders", minWidth: 100, maxWidth: 100 },
    { label: "Actions", minWidth: 100, maxWidth: 150 }
  ];

  const createRows = (startTime, endTime, deliveryType, maxOrders) => ({ startTime, endTime, deliveryType, maxOrders });

  const rows = [createRows("10:00", "11:00","Zomato", 20), createRows("14:00", "15:00","Swiggy", 8)];

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
              Add Time Frame(Monday)
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
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Maximum Orders :</Typography>
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
      <Grid>
        {/* <Typography variant="h5" sx={{ mb: 2 }}>
          Time Frame(Monday)
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
            <TableContainer>
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
                <TableCell align="center">{row.startTime}</TableCell>
                <TableCell align="center">{row.endTime}</TableCell>
                <TableCell align="center">{row.deliveryType}</TableCell>
                <TableCell align="center">{row.maxOrders}</TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit" placement="left">
                    <IconButton color="primary" size="small" onClick={openModalHandler}>
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
            ))}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
      </Grid>
      </Grid>
    </>
  );
};
export default TimeFrames;
