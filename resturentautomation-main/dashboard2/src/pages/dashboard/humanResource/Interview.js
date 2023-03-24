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
  withStyles,
  makeStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  Typography,
  TextField,
  TablePagination
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
import SalaryTypeSetup from "./SalaryTypeSetup";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";
const createData = (name,department,jobPosition,interviewDate,inter_time, inter_type, meetlink, status,comment) => {
  return {name,department,jobPosition,interviewDate,inter_time, inter_type, meetlink, status,comment};
};


const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    height: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));
const Interview = (props) => {
  const [rows, setRows] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);
  const [candidateName, setCandidateName] = useState("")
  const [jobPosition, setJobPosition] = useState("")
  const [interviewDate, setInterviewDate] = useState("")
  const [meetlink, setmeetlink] = useState("")
  const [comment, setComment] = useState("")
  const [status, setStatus] = useState("")
  const [inter_time, setinter_time] = useState()
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/interview/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const classes = useStyles()

  const columns = [
    //{ label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Candidate Name", minWidth: 150, maxWidth: 200 },
    //{ label: "Candidate Id", minWidth: 100, maxWidth: 200 },
    { label: "Department", minWidth: 100, maxWidth: 200 },
    { label: "Job Position", minWidth: 150, maxWidth: 250 },
    { label: "Interview Date", minWidth: 140, maxWidth: 200 },
    { label: "Interview Time", minWidth: 130, maxWidth: 200 },
    { label: "Interview Type", minWidth: 130, maxWidth: 200 },
    { label: "Meeting Link", minWidth: 120, maxWidth: 200 },
    // { label: "Viva Marks", minWidth: 50, maxWidth: 100 },
    // { label: "Written Total Marks", minWidth: 50, maxWidth: 100 },
    // { label: "MCQ Total Marks", minWidth: 50, maxWidth: 100 },
    // { label: "Total Marks", minWidth: 50, maxWidth: 100 },
    { label: "Comment", minWidth: 50, maxWidth: 120 },
    { label: "Status", minWidth: 50, maxWidth: 120 },
    { label: "Action", minWidth: 130, maxWidth: 150 }
  ];

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
  const [date,SetDate] = useState(new Date());
  const addPosition = () =>{
    //var startdate1 = startDate.getDate()+'/'+(startDate.getMonth()+1)+'/'+ startDate.getFullYear();
    var newDate = date.getDate()+'-'+(date.getMonth()+1)+'-'+ date.getFullYear();
    const newPosition = createData(candidateName, deptName, jobpos, newDate, inter_time, type, meetlink, statusName, comment)
    var newRows = [...rows, newPosition]
    axios.post('https://doubtful-tuna-leotard.cyclic.app/interview/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(prev => [...prev,newPosition])
    setCandidateName("")
    setPosition([])
    setDeptName([])
    setStatusType([])
    setinter_time()
    setmeetlink("")
    setComment("")
    closeModalHandler()
  }

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      axios.post('https://doubtful-tuna-leotard.cyclic.app/interview/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      setRows(newRows)
    }

  }

  const edit = (i) => {
    openModalHandler2()
    setCurrIndex(i)
    setCandidateName(rows[i].name)
    setPosition(rows[i].jobPosition)
    setDeptName(rows[i].department)
    //SetDate(rows[i].interviewDate) not working as required
    setType(rows[i].inter_type)
    setinter_time(rows[i].inter_time)
    setComment(rows[i].comment)
    setmeetlink(rows[i].meetlink)
    setStatusType(rows[i].status)
  }

  const editPosition = () =>{
    var newDate2 = date.getDate()+'-'+(date.getMonth()+1)+'-'+ date.getFullYear();
    let newRows = rows.map(row => row);
    newRows[currIndex].name = candidateName;
    newRows[currIndex].department = deptName;
    newRows[currIndex].jobPosition = jobpos;
    newRows[currIndex].interviewDate = newDate2;
    newRows[currIndex].inter_time = inter_time;
    newRows[currIndex].meetlink = meetlink;
    newRows[currIndex].status = statusName;
    newRows[currIndex].comment = comment;
    axios.post('https://doubtful-tuna-leotard.cyclic.app/interview/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(newRows)
    setCandidateName("")
    setJobPosition("")
    setDeptName([])
    setStatusType([])
    setComment("")
    closeModalHandler2()
  }

  const reset = () => {
    setCandidateName("")
    setJobPosition("")
    setStatus("")
    setComment("")
    setInterviewDate("")
  }

  //department
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
  //for job position
  const position= [
    'Kitchen Manager',
    'Chef',
    'Jainator',
    'Counter Monitor',
    'Waitor',
  ];
  const [jobpos, setPosition] = React.useState([]);
  const handlePositionChange = (event) => {
    const {
      target: { value },
    } = event;
    setPosition(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for interviewtype
  const types= [
    'Online',
    'Offline',
  ];
  const [type, setType] = React.useState([]);
  const handleTypeChange = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
    //for status
    const statustype= [
      'Selected',
      'Not Selected',
      'Hold',
    ];
    const [statusName, setStatusType] = React.useState([]);
    const handleStatusChange = (event) => {
      const {
        target: { value },
      } = event;
      setStatusType(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
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
                Add Interview
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Candidate Name* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={candidateName}
                      onChange={e => setCandidateName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                      <Typography variant="subtitle2">Department :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
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
                    </Grid>
                  </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Job Position* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={jobpos}
                        onChange={handlePositionChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {position.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={jobpos.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interview Date* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <DatePicker
                    value={date}
                    onChange={(newValue) => {
                    SetDate(newValue);
                    }}
                  renderInput={(params) => (
                  <TextField 
                    {...params}
                    fullWidth size="small" helperText={null}/>
                    )}
                  />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Interview Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" type="time"
                      value={inter_time}
                      onChange={e => setinter_time(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interview Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={type}
                        onChange={handleTypeChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {types.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={type.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Meeting Link</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" 
                      value={meetlink}
                      onChange={e => setmeetlink(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={statusName}
                        onChange={handleStatusChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {statustype.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={statusName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Comment</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" multiline="true" minRows={4}
                      value={comment}
                      onChange={e => setComment(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={addPosition}  variant="contained" size="small">
                      Save
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
                Edit Interview
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Candidate Name* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={candidateName}
                      onChange={e => setCandidateName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                      <Typography variant="subtitle2">Department :</Typography>
                    </Grid>
                    <Grid item xs={8}>
                    <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
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
                    </Grid>
                  </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Job Position* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={jobpos}
                        onChange={handlePositionChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {position.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={jobpos.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interview Date* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <DatePicker
                    value={date}
                    onChange={(newValue) => {
                    SetDate(newValue);
                    }}
                  renderInput={(params) => (
                  <TextField 
                    {...params}
                    fullWidth size="small" helperText={null}/>
                    )}
                  />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Interview Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" type="time"
                      value={inter_time}
                      onChange={e => setinter_time(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interview Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={type}
                        onChange={handleTypeChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {types.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={type.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Meeting Link</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" 
                      value={meetlink}
                      onChange={e => setmeetlink(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={statusName}
                        onChange={handleStatusChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {statustype.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={statusName.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography  variant="subtitle2">Comment</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" multiline="true" minRows={4}
                      value={comment}
                      onChange={e => setComment(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={editPosition}  variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">Add Interview</Button>
        </Grid>
        {/*<Grid item>
          <Button variant="outlined">Manage Interview</Button>
  </Grid>*/}
      </Grid>
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
        {/*<Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
      </Grid>*/}
      <TableContainer>
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
            {rows.map((row,id) => {
              return (
                <TableRow key={id+1} hover>
                  {/*<TableCell>{row.sl}</TableCell>*/}
                  <TableCell align="center" >{row.name}</TableCell>
                  <TableCell align="center">{row.department}</TableCell>
                  <TableCell align="center">{row.jobPosition}</TableCell>
                  <TableCell align="center">{row.interviewDate}</TableCell>
                  <TableCell align="center">{row.inter_time}</TableCell>
                  <TableCell align="center">{row.inter_type}</TableCell>
                  <TableCell align="center">{row.meetlink}</TableCell>
                  <TableCell align="center">{row.comment}</TableCell>
                  <TableCell align="center">
                    <Button color="primary" size="small" variant="outlined">
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                          <IconButton onClick={()=>edit(id)} color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={()=>deletePosition(id)} >
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
export default Interview;
