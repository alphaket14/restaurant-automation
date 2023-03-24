import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Button,
  IconButton,
  withStyles,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  ListItemIcon,
  ListItemText,
  TableContainer,
  TablePagination
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Scrollbar from "src/components/Scrollbar";

const createData = (sl, department, shiftname, weekLeave, action) => {
  return {sl, department, shiftname, weekLeave, action };
};

const data = [
  createData(1,"Accounts", "General","Sunday", "Dummy"),
  createData(2,"Sales", "General","Saturday", "Dummy")
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

const WeeklyHoliday = (props) => {
  const columns = [
    { label: "Department", minWidth: 100 },
    { label: "Shift Name", minWidth: 100 },
    { label: "Weekly Holiday", minWidth: 200 },
    //{ label: "Action", minWidth: 100, maxWidth: 200 }
  ];

  const [openModal, setOpenModal] = useState(false);
  const [holiday, setHoliday] = useState([])
  const [rows, setRows] = useState([]);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/new-shift/')
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);
  const options = ["Monday","Tuesday","Wednesday","Thursday","Friday", "Saturday", "Sunday"]

  let classes = useStyles()

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const edit = () => {
    openModalHandler()

  }

  const editPosition = () =>{
    setRows([createData(1,holiday.join(", "))])
    closeModalHandler()
  }

  const handleChange = (e) =>{
    const value = e.target.value;
    setHoliday(value)
  }
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
              <Typography variant="h5" align="center">
                Add Holiday
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Holiday :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <FormGroup row  >
                    <Select multiple renderValue={(holiday) => holiday.join(", ")} value={holiday} onChange={handleChange} fullWidth>
                      {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          <Checkbox checked={holiday.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                      ))}
                    </Select>
                    </FormGroup>
                  </Grid>
                </Grid>


                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={editPosition}  variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>


              </Grid>
            </Box>
          </Fade>
      </Modal>
      {/*<Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">Add Weekly Holiday</Button>
        </Grid>
      </Grid>*/}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <TextField sx={{ width: "21%" }} label="Search" size="small" />
      </Box>
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
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            {/*<Button size="small">Copy</Button>*/}
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          {/*<Grid item>
            <Input type="text" placeholder="Search" />
            </Grid> was another way of shifting to edges without boxes*/}
        </Grid>
        <TableContainer>
          <Scrollbar>    
        <Table size="small" sx={{ minWidth: 1000 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center" }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.holidays.join(", ")}</TableCell>
                  {/*<TableCell style={{ textAlign: "center"}}>
                    <IconButton onClick={edit} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton >
                      <DeleteIcon color="error"/>
                    </IconButton>
                    </TableCell>*/}
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
export default WeeklyHoliday;
