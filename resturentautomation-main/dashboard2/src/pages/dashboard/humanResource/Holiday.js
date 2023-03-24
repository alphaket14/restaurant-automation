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
  Button,
  IconButton,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  TableContainer,
  TablePagination
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Scrollbar from "src/components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
const createData = ( holidayName, from, to, noOfDays) => {
  return {  holidayName, from, to, noOfDays };
};


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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const Holiday = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Holiday Name", minWidth: 150, maxWidth: 250 },
    { label: "From", minWidth: 150, maxWidth: 250 },
    { label: "To", minWidth: 150, maxWidth: 250 },
    { label: "No. of Days", minWidth: 150, maxWidth: 250 },
    { label: "Action", minWidth: 150 },
  ];

  const [holiday, setHoliday] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [rows, setRows] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/holiday/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const classes = useStyles();

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openModalHandler2 = () => {
    setOpenModal2(true);
  };

  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };

  const addPosition = () => {
    var newDate = startDate.getDate()+'-'+(startDate.getMonth()+1)+'-'+ startDate.getFullYear();
    var newDate2 = endDate.getDate()+'-'+(endDate.getMonth()+1)+'-'+ endDate.getFullYear();
    const newPosition = createData(holiday, newDate, newDate2, noOfDays);
    var newRows = [...rows, newPosition]
    axios.post('https://doubtful-tuna-leotard.cyclic.app/holiday/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows((prev) => [...prev, newPosition]);
    setHoliday("");
    setFromDate("");
    setToDate("");
    setNoOfDays("");
    closeModalHandler();
  };

  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      axios.post('https://doubtful-tuna-leotard.cyclic.app/holiday/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      setRows(newRows);
    }
  };

  const edit = (i) => {
    openModalHandler2();
    setCurrIndex(i);
    setHoliday(rows[i].holidayName);
    //setFromDate(rows[i].from);
    //setToDate(rows[i].to);
    setNoOfDays(rows[i].noOfDays);
  };

  const editPosition = () => {
    var newDate = startDate.getDate()+'-'+(startDate.getMonth()+1)+'-'+ startDate.getFullYear();
    var newDate2 = endDate.getDate()+'-'+(endDate.getMonth()+1)+'-'+ endDate.getFullYear();
    let newRows = rows.map((row) => row);
    newRows[currIndex].holidayName = holiday;
    newRows[currIndex].from = newDate;
    newRows[currIndex].to = newDate2;
    newRows[currIndex].noOfDays = noOfDays;
    axios.post('https://doubtful-tuna-leotard.cyclic.app/holiday/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(newRows);
    setHoliday("");
    //setFromDate("");
    //setToDate("");
    setNoOfDays("");
    closeModalHandler2();
  };

  const reset = () => {
    setHoliday("");
    setFromDate("");
    setToDate("");
    setNoOfDays("");
  };


  const [startDate,SetStartDate] = React.useState(new Date());
  const [endDate,SetEndDate] = React.useState(new Date());

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
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Holiday Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={holiday}
                    onChange={(e) => setHoliday(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">From :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                inputFormat="dd/MM/yyyy"
                value={startDate}
                onChange={(newValue) => {
                  SetStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    sx={{width:"100%"}}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">To :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                inputFormat="dd/MM/yyyy"
                value={endDate}
                onChange={(newValue) => {
                  SetEndDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    sx={{width:"100%"}}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">No. Of Days :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={reset}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={addPosition}
                    variant="contained"
                    size="small"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModal2}
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center">
              Edit Holiday
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Holiday Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={holiday}
                    onChange={(e) => setHoliday(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">From :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                inputFormat="dd/MM/yyyy"
                value={startDate}

                onChange={(newValue) => {
                  SetStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    sx={{width:"100%"}}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">To :</Typography>
                </Grid>
                <Grid item xs={8}>
                <DatePicker
                inputFormat="dd/MM/yyyy"
                value={endDate}
                onChange={(newValue) => {
                  SetEndDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    sx={{width:"100%"}}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">No. Of Days :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                  />
                </Grid>
              </Grid>

              <Grid item container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={reset}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={editPosition}
                    variant="contained"
                    size="small"
                  >
                    Add
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <TextField label="Search" size="small" />
        </Grid>
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">
            Add Holiday
          </Button>
        </Grid>
        {/*<Grid item>
          <Button variant="outlined">Manage Holiday</Button>
  </Grid>*/}
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
        <Grid
          item
          container
          style={{ padding: 0, justifyContent: "space-between" }}
        >
          <Grid item>
            {/*<Button size="small">Copy</Button>*/}
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          {/*<Grid item>
            <Input type="text" placeholder="Search" />
            </Grid>*/}
        </Grid>
        <TableContainer>
          <Scrollbar>   
        <Table size="small" sx={{width:1300}}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                      textAlign: "center",
                    }}
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
                <TableRow key={id+1} hover>
                  <TableCell style={{ textAlign: "center" }}>
                    {id+1}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.holidayName}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.from}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.to}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.noOfDays}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton onClick={() => edit(id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deletePosition(id)}>
                      <DeleteIcon color="error" />
                    </IconButton>
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
export default Holiday;
