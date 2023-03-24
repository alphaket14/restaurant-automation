import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  TextField,
  Typography,
  TableContainer,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Paper,
  Button,
  IconButton,
  Modal,
  Fade,
  Backdrop,
  Tooltip,
  FormControl,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  ListItemText
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

const DeliveryTimeFrame = (props) => {
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
    { label: "Day", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
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

  const selections = ["Zomato", "Swiggy", "Online"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
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
                  <Typography variant="body1">Delivery Type :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <TextField fullWidth size="small"  /> */}
                  <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Select Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  // size="small"
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
        {/* <Typography variant="h5" sx={{ mb: 2 }}>
          Delivery Time Frame
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
        <Table size="small">
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
                      onClick={() => navigate("/dashboard/manage/time-frames")}
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
export default DeliveryTimeFrame;
