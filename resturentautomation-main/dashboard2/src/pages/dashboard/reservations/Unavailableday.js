import React, { useState } from "react";
import {
  Input,
  Box,
  Button,
  IconButton,
  Tooltip,
  TextField,
  Grid,
  TableContainer,
  Paper,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Modal,
  Fade,
  Backdrop,
  makeStyles,
  Typography,
  Select,
  MenuItem,
  TablePagination,
  Checkbox,
  ListItemText,
  FormControl
} from "@material-ui/core";

import { Add, Edit, Delete } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
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

const Unavailableday = (props) => {
  const classes = useStyles();

  const [modal, setModal] = useState(false);
  const modalOpenHandler = () => setModal(true);
  const modalCloseHandler = () => setModal(false);

  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 80 },
    { label: "Unavailable Date", minWidth: 100, maxWidth: 250 },
    { label: "Unavailable Time", minWidth: 100, maxWidth: 250 },
    { label: "Status", minWidth: 100, maxWidth: 250 },
    { label: "Action", minWidth: 100, maxWidth: 250 }
  ];

  const createData = (unavailDate, unavailTime, status) => {
    return { unavailDate, unavailTime, status };
  };

  const rows = [createData("01-06-2022", "20:00", "INACTIVE")];

    
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

  const [date, SetDate] = React.useState(new Date());
  const states = ["ACTIVE","INACTIVE"]
  const [tableNo, setTableNo] = useState(["ACTIVE"]);
  const tableChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setTableNo(typeof value === "string" ? value.split(",") : value);
  };
  

  return (
    <>
      <Modal
        open={modal}
        onClose={modalCloseHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={modal}>
          <Box className={classes.modal}>
            <Typography variant="h5" sx={{ width: "100%", textAlign: "center", mb: 3 }}>
              Add Unavailability
            </Typography>
            <Grid container spacing={2} direction="column">
              <Grid item container spacing={2}>
                <Grid item align="right" xs={4} alignSelf="center">
                  <Typography variant="body1">Unavailable Date :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                inputFormat="dd/MM/yyyy"
                value={date}
                onChange={(newValue) => {
                  SetDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    sx={{ width: "100%", float: "right", marginLeft: "10px" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                </Grid>
              </Grid>

              <Grid item container spacing={2} alignSelf="center">
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Start Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>

              <Grid item container spacing={2} alignSelf="center">
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">End Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField type="time" fullWidth size="small" />
                </Grid>
              </Grid>

              <Grid item container spacing={2} alignSelf="center">
                <Grid item align="right" xs={4}>
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                <FormControl
                          sx={{ mr: 1, float: "left", width:"100%"}}
                          size="small"
                          fullWidth
                        >
                <Select
                            value={tableNo} 
                            onChange={tableChangeHandler}
                            renderValue={(selected)=>selected.join(", ")}
                            
                          >
                            {states.map((name) => (
                              <MenuItem key={name} value={name}>
                                <Checkbox checked={tableNo.indexOf(name) > -1} />
                                <ListItemText primary={name} />
                              </MenuItem>
                            ))}
                          </Select>
                          </FormControl>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={12} align="right">
                  <Button variant="outlined" sx={{ mr: 1 }}>
                    Reset
                  </Button>
                  <Button variant="contained">Add</Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* <Typography variant="h5" gutterBottom>
        Unavailable Days
      </Typography> */}
      <Box
        sx={{
          mb: 2,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <TextField sx={{ width: "20%", mb: 2 }} size="small" label="Search" />
        <Button variant="contained" startIcon={<Add />} onClick={modalOpenHandler}>
          Add Unavailability
        </Button>
      </Box>
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
            {columns.map((column) => {
              return (
                <TableCell
                  align="center"
                  style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  key={column.label}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows[0] ? (
            rows.map((row, id) => {
              return (
                <TableRow key={id}>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.unavailDate}</TableCell>
                  <TableCell align="center">{row.unavailTime}</TableCell>
                  <TableCell align="center">
                  {row.status === "INACTIVE" ? (
                          <Button color="error"size="small" variant="outlined">
                            {row.status}
                          </Button>
                        ) : (
                          <Button color="primary" size="small" variant="outlined">
                            {row.status}
                          </Button>
                        )}  
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton size="small" color="primary" onClick={modalOpenHandler}>
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
              );
            })
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} align="center">
                No data available in table.
              </TableCell>
            </TableRow>
          )}
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
export default Unavailableday;
