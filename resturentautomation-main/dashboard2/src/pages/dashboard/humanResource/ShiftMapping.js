import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  Tabs,
  Tab,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  Autocomplete,
  TableCell,
  TextField,
  Box,
  Typography,
  IconButton,
  Button,
  Select,
  FormControl,
  MenuItem,
  Modal,
  Checkbox,
  ListItemText,
  TablePagination
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { DatePicker } from "@material-ui/lab";
import { Edit, Delete } from "@mui/icons-material";
import { Backdrop, Fade, makeStyles } from "@material-ui/core";
import TableContainer from '@mui/material/TableContainer';
import Scrollbar from "../../../components/Scrollbar";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid item container>
      <div role="tabpanel" hidden={value !== index} style={{ width: "100%" }} {...other}>
        {value === index && <Box>{children}</Box>}
      </div>
    </Grid>
  );
}
const dept = (deptName) => {
  return{deptName};
};
const createRows = (employeeId, employeeName, department, shiftName, startDate, endDate, startTime, endTime, workingdays) => {
  return {employeeId, employeeName, department, shiftName, startDate, endDate, startTime, endTime, workingdays};
};
const data2=[
  dept("Accounts"),
  dept("Inventory"),
  dept("Human Resource"),
  dept("Counter Monitor"),
  dept("Marketing"),
  dept("Sales")
];
const data = [
  createRows("#EMP0001","Orla Whitney","Accounts", "Afternoon Shift", "04.11.2022","05.11.2022", "16.30","21.30","Mon, Tue, Wed, Thu, Fri, Sat"),
  createRows("#EMP0002","Orla Whitney","Marketing", "Afternoon Shift", "04.11.2022","05.11.2022", "16.30","21.30","Mon, Tue, Wed, Thu, Fri, Sat"),
  createRows("#EMP0003","Orla Whitney","Sales", "Afternoon Shift", "04.11.2022","05.11.2022", "16.30","21.30","Mon, Tue, Wed, Thu, Fri, Sat")
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

const ShiftMapping = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const [rows, setRows] = useState([]);
  const [employeeName,setEmployeeName] = useState("");
  const [rows2, setRows2] = useState(data2);
  const [department,setDepartment] = useState("");
  const [employeeId,setEmployeeId] = useState("");
  const [shiftName,setShifteName] = useState("");
  const [startDate,setStartDate] = useState("");
  const [startTime,setStartTime] = useState("");
  const [endDate,setEndDate] = useState("");
  const [endTime,setEndTime] = useState("");
  const [workinddays,setWorkingdays] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [currIndex,setCurrIndex] = useState(null);
  const [depnames, setDepname] = useState([]);
  const [shifts, setShift] = useState([]);
  const [shiftname, setshiftname] = useState([]);
  const [empname, setempname] = useState([]);
  const [days,SetDays] = useState("");
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/department/')
      const data2 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/new-shift/')
      const data3 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/assign-shift/')
      setRows(data3.data[0].rows);
      setRowsid(data3.data[0]._id);
      setDepname(data.data[0].rows);
      setShift(data2.data[0].rows);
      //setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);
  const classes = useStyles();

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const depnames1 = [
    {name : 'Accounts'},
    {name : 'Inventory'},
    {name : 'Human Resource'},
    {name : 'Counter Monitor'},
    {name : 'Marketing'},
    {name : 'Sales'},
  ];
  const empnames1 = [
    {name : 'emp 1'},
    {name : 'emp 2'},
    {name : 'emp 3'},
  ];
  const addShift = () =>{
  var today = new Date();
  var start_dt = date.getDate()+ '-'+(date.getMonth()+1)+'-'+ date.getFullYear();
  var end_dt = date2.getDate()+ '-'+(date.getMonth()+1)+'-'+ date2.getFullYear();;
  //var dateTime = date+', '+time;

  var newRow = createRows(employeeId, empname, deptName, shiftname, start_dt, end_dt, startTime, endTime, days)
  var newRows = [...rows, newRow]
  axios.post('https://doubtful-tuna-leotard.cyclic.app/assign-shift/update/'+rowsid, {
    rows: newRows,
  })
.then(res => console.log(res.data))
.catch((error) => {console.log(error);})
  setRows(prev => [...prev,newRow])

  setEmployeeName("");
  setEmployeeId("")
  setShifteName("");
  setStartDate("");
  setEndDate("");
  setTabValue(0);
  }
  const deleteShift = (i)=>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,index) =>{
        return index !== i;
      })
      axios.post('https://doubtful-tuna-leotard.cyclic.app/assign-shift/update/'+rowsid, {
        rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
      setRows(newRows)
    }
  }

  const edit = (i) =>{
    openModalHandler() 
    setCurrIndex(i);
    setEmployeeName(rows[i].employeeName);
    setShifteName(rows[i].shiftName);
    setEmployeeId(rows[i].employeeId)
  }

  const editShift = ()=>{
    var today = new Date();
    var start_dt = (date.getMonth()+1)+'-'+date.getDate()+ '-'+ date.getFullYear();
    var end_dt = (date2.getMonth()+1)+'-'+date2.getDate()+ '-'+ date2.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes();
    var dateTime = date+', '+time;

    let newRow = createRows(employeeId,employeeName, shiftName, dateTime, startDate, endDate)
    let newRows = rows.map(row =>row);
    newRows[currIndex] = newRow;
    setRows(newRows);

    closeModalHandler()
    
  }

  const columns = [
    { label: "Employee Id", minWidth: 120, maxWidth: 250 },
    { label: "Employee", minWidth: 130, maxWidth: 250 },
    { label: "Department", minWidth: 150, maxWidth: 250 },
    { label: "Shifts", minWidth: 150, maxWidth: 250 },
    { label: "Start Date", minWidth: 130, maxWidth: 250 },
    { label: "End Date", minWidth: 130, maxWidth: 250 },
    { label: "Start Time", minWidth: 120, maxWidth: 250 },
    { label: "End Time", minWidth: 100, maxWidth: 250 },
    { label: "Working days", minWidth: 220, maxWidth: 250 },
    //{ label: "Modified On", minWidth: 100, maxWidth: 250 },
    { label: "Action", minWidth: 120, maxWidth: 150 }
  ];
  const [date, setDate] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  /*const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];*/
  const [deptName, setDeptName] = React.useState([]);
  const handleShiftChange = (event) => {
    const {
      target: { value },
    } = event;
    setshiftname(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    {shifts.map((name) => {
      if(name.name == value){
        console.log("mil gaya")
        SetDays(name.workingdays)
        setStartTime(name.start_time)
        setEndTime(name.end_time)
      }
    })}
  };
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeptName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    setDepartment(deptName.join(","))
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows3, setRows3] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const empnames = [
    "emp 1",
    "emp 2",
    "emp 3",
  ]
  const handleEmpChange = (event) => {
    const {
      target: { value },
    } = event;
    setempname(
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
                Edit Shift
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField inputProps={{ readOnly: true, }} onChange={(e)=>{setEmployeeId(e.target.value)}} value={employeeId} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField inputProps={{ readOnly: true, }} onChange={(e)=>{setEmployeeName(e.target.value)}} value={employeeName} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Department :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField inputProps={{ readOnly: true, }} onChange={(e)=>{setEmployeeName(e.target.value)}} value={department} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Shift Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField onChange={(e)=>{setShifteName(e.target.value)}} value={shiftName} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField inputProps={{ readOnly: true, }} onChange={(e)=>{setStartDate(e.target.value)}} name="endDate" type="date" fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField inputProps={{ readOnly: true, }} onChange={(e)=>{setEndDate(e.target.value)}} name="endDate" type="date" fullWidth size="small" />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="center">
                  <Grid item xs={4} >
                    <Button onClick={closeModalHandler}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Cancel
                    </Button>
                    <Button color="primary" onClick={editShift} variant="contained" size="small">
                      Edit
                    </Button>
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
          {tabValue==0 ?
                <>
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={depnames1}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                sx={{width:"20%", float: "left"}}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" placeholder="Search" />
                )}
              />
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={empnames1}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                sx={{width:"20%", float: "left", marginLeft: "10px"}}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Employees" placeholder="Search" />
                )}
              />
                <Button sx={{float: "right"}} onClick={() => {setTabValue(1)}} variant="contained">Assign Shift</Button>
                <Button sx={{float: "right", marginRight:"10px"}} onClick={() => {setTabValue(0)}} variant="contained">Shift Mapping</Button>
          </>
          :
          <>
            <Button sx={{float: "right"}} onClick={() => {setTabValue(1)}} variant="contained">Assign Shift</Button>
            <Button sx={{float: "right", marginRight:"10px"}} onClick={() => {setTabValue(0)}} variant="contained">Shift Mapping</Button>
          </>
        }
        </Box>
        {tabValue==0 ?
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
                  <TableCell key={id} align="center"sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth,textAign:"center" }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{row.employeeId}</TableCell>
                  <TableCell align="center">{row.employeeName}</TableCell>
                  <TableCell align="center">{row.department}</TableCell>
                  <TableCell align="center">{row.shiftName}</TableCell>
                  <TableCell align="center">{row.startDate}</TableCell>
                  <TableCell align="center">{row.endDate}</TableCell>
                  <TableCell align="center">{row.startTime}</TableCell>
                  <TableCell align="center">{row.endTime}</TableCell>
                  <TableCell align="center">{row.workingdays}</TableCell>
                  {/*<TableCell>{row.modOn}</TableCell>*/}
                  <TableCell align="center">
                    <IconButton onClick={()=>edit(id)} size="small" color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton onClick={()=>deleteShift(id)} size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </Scrollbar>
          </TableContainer>
          <TablePagination
                component="div"
                count={rows3.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
          </Grid>
        :
          <>
          <Grid item container sx={{ mx: 2 }}>
            <Grid item container sx={{ my: 2 }}>
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Department
              </Grid>
              <Grid item xs={6}>
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={depnames1}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" placeholder="Search" />
                )}
              />
              </Grid>
            </Grid>
            <Grid item container sx={{ mb: 2 }}>
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Employee Id
              </Grid>
              <Grid item xs={6}>
                <TextField onChange={(e)=>{setEmployeeId(e.target.value)}} value={employeeId} name="startDate"  fullWidth size="small" />
              </Grid>
            </Grid>
            <Grid item container sx={{ mb: 2 }}>
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Employee Name
              </Grid>
              <Grid item xs={6}>
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={empnames1}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Employees" placeholder="Search" />
                )}
              />
              </Grid>
            </Grid>
            <Grid item container sx={{ mb: 2 }}>
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Select Shift Name
              </Grid>
              <Grid item xs={6}>
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={shifts}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Shift Name" placeholder="Search" />
                )}
              />
              </Grid>
            </Grid>
          <Grid item container sx={{ mb: 2 }}>
            <Grid
              item
              xs={3}
              align="right"
              sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
            >
              Start Date
            </Grid>
            <Grid item xs={6}>
            <DatePicker
              value={date}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
              setDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                onChange={(e)=>{setStartDate(e.target.value)}} 
                {...params}
                fullWidth size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container sx={{ mb: 2 }}>
            <Grid
              item
              xs={3}
              sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
            >
              End Date
            </Grid>
            <Grid item xs={6}>
            <DatePicker
              value={date2}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
              setDate2(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                onChange={(e)=>{setEndDate(e.target.value)}} 
                {...params}
                fullWidth size="small" 
                name="endDate"
                helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container sx={{ mb: 2 }}>
            <Grid item xs={3} sx={{ mr: 2 }}></Grid>
            <Grid item xs={6}>
              <Button onClick={addShift} variant="contained">Assign</Button>
            </Grid>
          </Grid>
          </Grid>
          </>
        }
    </>
  );
};
export default ShiftMapping;
