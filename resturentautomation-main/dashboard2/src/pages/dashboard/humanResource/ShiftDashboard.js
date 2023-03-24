import React, { useState } from "react";
import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Box,
  Typography,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  InputLabel,
  MenuItem,
  Select,
  Checkbox,
  ListItemText,
  FormControl,
  Button
} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
import TableContainer from '@mui/material/TableContainer';
import Scrollbar from "../../../components/Scrollbar";
const ShiftDashboard = (props) => {
  const [date, setDate] = useState(new Date());

  const time = date.getTime();

  const createColumns = (time) => {
    const date = new Date(time);
    const day = date.getDate() + 1;
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return { label: `${day}-${month}-${year}`, minWidth: 150, maxWidth: 250 };
  };

  const columns = [
    { label: "Department", minWidth: 50, maxWidth: 150 },
    { label: "Employee", minWidth: 150, maxWidth: 250 },
    createColumns(time),
    createColumns(time + 24 * 60 * 60 * 1000),
    createColumns(time + 2 * 24 * 60 * 60 * 1000),
    createColumns(time + 3 * 24 * 60 * 60 * 1000),
    createColumns(time + 4 * 24 * 60 * 60 * 1000),
    createColumns(time + 5 * 24 * 60 * 60 * 1000),
    createColumns(time + 6 * 24 * 60 * 60 * 1000)
  ];

  const rows = [
    { department: "Accounts",employee: "Employee Name" },
    { department: "Accounts" ,employee: "Employee Name" },
    { department: "Accounts" ,employee: "Employee Name" },
    { department: "Accounts" ,employee: "Employee Name" },
    { department: "Accounts" ,employee: "Employee Name" }
  ];
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
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const [deptName, setDeptName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeptName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    //for period
    const periods= [
      'Current Week',
    ];
    const [periodName, setPeriodName] = React.useState([]);
    const handlePeriodChange = (event) => {
      const {
        target: { value },
      } = event;
      setPeriodName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
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
              <Typography variant="h5" align="center">
                Shift Timing
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Start Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField  fullWidth size="small" type="time" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">End Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField  fullWidth size="small" type="time" />
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
      <Box
          sx={{
            width: "100%",
            paddingLeft: 2,
            mb: 1,
            paddingBottom: 6,
          }}
      >
        <FormControl sx={{width:"20%", float: "left"}} size="small">
          <InputLabel id="demo-select-small">Department</InputLabel>
          <Select 
            labelId="demo-select-small"
            id="demo-select-small"
            label="Department"
            fullWidth 
            size="small"
            //multiple
            value={deptName}
            onChange={handleChange}
            //input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {depnames.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={deptName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField sx={{width:"20%", float: "left",  marginLeft:"10px"}}  size="small" label="Employees"/>
        <FormControl sx={{width:"20%", float: "right"}} size="small">
          <InputLabel id="demo-select-small">Shift Period</InputLabel>
          <Select 
            labelId="demo-select-small"
            label="Shift Period"
            id="demo-select-small"
            fullWidth 
            size="small"
            multiple
            value={periodName}
            onChange={handlePeriodChange}
            //input={<OutlinedInput label="Tag" />}
            renderValue={(selected) => selected.join(', ')}
          >
            {periods.map((name) => (
              <MenuItem key={name} value={name}>
                <Checkbox checked={periodName.indexOf(name) > -1} />
                <ListItemText primary={name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        
      </Box>
      <Grid container
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
        {/*<DatePicker
          value={date}
          onChange={(newValue) => {
            setDate(newValue);
          }}
          label="From"
          renderInput={(params) => (
            <TextField {...params} size="small" sx={{ mb: 1 }} helperText={null} />
          )}
          />*/}
        <TableContainer>
          <Scrollbar>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column, id) => (
                <TableCell sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center" }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow>
                <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                <TableCell style={{ textAlign: "center"}}>{row.employee}</TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button  color="warning" size="small" variant="outlined">
                    No Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button onClick={openModalHandler} color="primary" size="small" variant="outlined">
                    Morning Shift
                  </Button>
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
export default ShiftDashboard;
