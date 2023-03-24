import React, { useState, useEffect } from "react";
import axios from 'axios';
import * as moment from 'moment'
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
  Typography,
  TextField,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
  InputLabel,
  TablePagination,
  Autocomplete
} from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Scrollbar from "../../../components/Scrollbar";



const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const createData = (sl, id, name, department, date, checkIn, checkOut, attendance, shift, overtime, stay, action,  startpt, endpt) => {
  return { sl,id, name, department, date, checkIn, checkOut,  attendance, shift, overtime, stay, action,  startpt, endpt };
};
const data = [
  createData(1,"xdf","Online Order","Accounts","10-12-2021","","","","Accounts","",""),
  createData(2,"zddff","Online Order","Inventory","10-12-2021","","","","Sales","",""),
  createData(3,"#EMP0003","Online Order","Marketing","10-12-2021","","","","General","",""),
  createData(4,"#EMP0004","Online Order","Accounts","10-12-2021","","","","General","",""),
  createData(5,"#EMP0005","Online Order","Sales","10-12-2021","","","","General","",""),
  createData(6,"#EMP0006","Online Order","Accounts","10-12-2021","","","","General","",""),
  createData(7,"#EMP0007","Online Order","Accounts","10-12-2021","","","","General","","")
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

const AttendanceForm = (props) => {
  const [rows, setRows] = useState(data);
  const [currIndex, setCurrIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [employeeId, setEmployeeId] = useState("")
  const [employeeName, setEmployeeName] = useState("")
  const [department, setDepartment] = useState("")
  const [date, setDate] = useState("")
  const [checkInTime, setCheckInTime] = useState("")
  const [checkOuTime, setCheckOutTime] = useState("")
  const [attendance, setAttendance] = useState("")
  const [shift, setShift] = useState("")
  const [overtime, setOvertime] = useState("")
  const [workhrs, setworkhrs] = useState()
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [manageAttendance,setManageAttendance] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
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

  const openModalHandler3 = () => {
    setOpenModal3(true);
  };

  const closeModalHandler3 = () => {
    setOpenModal3(false);
  };
  const [rowsid, setRowsid] = useState();
  const [assign_data, setAssignData] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const data3 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/assign-shift/')
      setAssignData(data3.data[0].rows);
      setRowsid(data3.data[0]._id);
    };
    fetchdata();
  },[]);
  const handleCheckIn = (id)=>{
    let today = new Date();
    let CheckInTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let newRows = rows.map(row => row)
    newRows[id].checkIn = CheckInTime;
    let startpt = today.getDate()+"/"+today.getMonth()+1+"/"+today.getFullYear()+" "+ CheckInTime;
    newRows[id].startpt = startpt;
    console.log(newRows[id].startpt)
    newRows[id].attendance = "Present";
    setRows(newRows)
  }
  const handleCheckOut = (id)=>{
    let today = new Date();
    let CheckOutTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let endpt = today.getDate()+"/"+today.getMonth()+1+"/"+today.getFullYear()+" "+CheckOutTime;
    let newRows = rows.map(row => row)
    newRows[id].endpt = endpt;
    console.log(newRows[id].endpt)
    newRows[id].stay = moment.utc(moment(newRows[id].endpt,"DD/MM/YYYY HH:mm:ss").diff(moment(newRows[id].startpt,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm:ss")
    let overtime = moment.utc(moment(newRows[id].endpt,"DD/MM/YYYY HH:mm:ss").diff(moment(newRows[id].startpt,"DD/MM/YYYY HH:mm:ss"))).format("HH:mm")
    console.log(overtime)
    newRows[id].checkOut = CheckOutTime;
    {assign_data.map((name) => {
      if(name.employeeId == newRows[id].id){
        console.log("mil gaya")
        let over_check = moment.utc(moment(name.endTime,"HH:mm").diff(moment(name.startTime,"HH:mm"))).format("HH:mm")
        if(overtime > over_check){
          newRows[id].overtime = moment.utc(moment(overtime,"HH:mm").diff(moment(over_check,"HH:mm"))).format("HH:mm")
        }
        else{
          newRows[id].overtime = "00:00:00"
        }
        console.log(over_check)
        
      }
    })}
    setRows(newRows)
  }

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      setRows(newRows)
    }

  }

  const edit = (i) => {
    openModalHandler3()
    setCurrIndex(i)

    setEmployeeId(rows[i].id)
    setEmployeeName(rows[i].name)
    setDate(rows[i].date)
    setCheckInTime(rows[i].checkIn)
    setCheckOutTime(rows[i].checkOut)


  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].id = employeeId;
    newRows[currIndex].name = employeeName;
    newRows[currIndex].date = date;
    newRows[currIndex].checkIn = checkInTime;
    newRows[currIndex].checkOut = checkOuTime;

    setRows(newRows);

    setEmployeeId("")
    setEmployeeName("")
    setDate("")
    setCheckInTime("")
    setCheckOutTime("")

    closeModalHandler3()
  }

  const reset = () => {
    setEmployeeId("")
    setEmployeeName("")
    setDate("")
    setCheckInTime("")
    setCheckOutTime("")
  }

  const addEmployee = () =>{
    let today = new Date();
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let day = today.getDate()
    let date = year+"-"+month+"-"+day;
    let CheckIntime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const index = rows.length;
    const newEntry = createData(index+1,"E4Y9cax", employeeName, date, CheckIntime, "", "00:00:07", "dummy")
    setRows(prev => [...prev,newEntry])
    setEmployeeName("")
    closeModalHandler()
  }

  const sortByDate = () =>{
    let newRows = rows.map(row => row);
    newRows.sort((a,b) => a.date - b.date)
    setRows(newRows)
  }

  const columns = [
    { label: "Sr No.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 105, maxWidth: 250 },
    { label: "Check In", minWidth: 100, maxWidth: 250 },
    { label: "Check Out", minWidth: 120, maxWidth: 250 },
    { label: "Attendance", minWidth: 120, maxWidth: 250 },
    { label: "Shift", minWidth: 100, maxWidth: 250 },
    { label: "Overtime", minWidth: 100, maxWidth: 250 },
    { label: "Worked Hrs.", minWidth: 120, maxWidth: 250 },
    { label: "Status", minWidth: 140, maxWidth: 250 },
    { label: "Action", minWidth: 130, maxWidth: 250 }
  ];
  const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const deptnames= [
    {title:'Accounts'},
    {title:'Inventory'},
    {title:'Human Resource'},
    {title:'Counter Monitor'},
    {title:'Marketing'},
    {title:'Sales'},
  ];
  const empnames= [
    {title:'Employee 1'},
    {title:'Employee 2'},
    {title:'Employee 3'},
    {title:'Employee 4'},
    {title:'Employee 5'},
    {title:'Employee 6'},
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
    setDepartment(deptName.join(","))
  };
    //for employee
    const employee= [
      'online order',
    ];
    const [empName, setEmpName] = React.useState([]);
    const handleEmpChange = (event) => {
      const {
        target: { value },
      } = event;
      setEmpName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for attendance
    const attend_types= [
      'PRESENT',
      'Sick Leave',
      'PAID Leave',
      'Hoilday',
      'Weekly Off',
      'Unpaid Leave',
    ];
    const [attendName, setAttendName] = React.useState([]);
    const handleAttendChange = (event) => {
      const {
        target: { value },
      } = event;
      setAttendName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
      setAttendance(attendName.join(","))
    };




    const [startDate,SetStartDate] = useState(new Date());
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
                Single Check In
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                {/*<Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Select Employee :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Select fullWidth size="small"
                      onChange={e => setEmployeeName(e.target.value)}>
                        <MenuItem value="Employee 1">Employee 1</MenuItem>
                        <MenuItem value="Employee 2">Employee 2</MenuItem>
                        <MenuItem value="Employee 3">Employee 3</MenuItem>
                    </Select>
                  </Grid>
  </Grid>*/}
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee ID :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
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
                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={addEmployee}  variant="contained" size="small">
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
                Bulk Check In
              </Typography>
              <Grid item container direction="column" sx={{ padding: 2 }}>
                <Grid item container align="center">
                  <Grid item xs={12} mb={2}>
                    <Typography variant="subtitle2">Attach a CSV file or an Excel Sheet for Bulk Check In</Typography>
                  </Grid>
                  <Grid item xs={12}  mb={2}>
                    <TextField type="file" />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button onClick={closeModalHandler2}  variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
      <Modal
          open={openModal3}
          onClose={closeModalHandler3}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal3}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Edit Employee Attendance
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeId}
                      onChange={e => setEmployeeId(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeName}
                      onChange={e => setEmployeeName(e.target.value)} />
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
                    <Typography variant="subtitle2">Attendance :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="attendName"
                fullWidth 
                size="small"
                multiple
                value={attendName}
                onChange={handleAttendChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {attend_types.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={attendName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={date}
                      type="date"
                      onChange={e => setDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Check In Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={checkInTime}
                      type="time"
                      onChange={e => setCheckInTime(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Check Out Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={checkOuTime}
                      type="time"
                      onChange={e => setCheckOutTime(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Note :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={checkOuTime}
                      type="time"
                      multiline = "true"
                      minRows={3}
                      />
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
      <Box
        sx={{
          width: "100%",
          paddingLeft: 2,
          marginBottom: "10px",
          paddingBottom: 6
        }}
      >
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={deptnames}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      sx={{width:"20%" , float: "left", overflow:"none"}}
      renderInput={(params) => (
        <TextField {...params} label="Department" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={empnames}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      renderInput={(params) => (
        <TextField {...params} label="Employees" placeholder="Search" />
      )}
    />
    <Button sx={{float: "right", marginLeft:"10px"}} onClick={openModalHandler2} variant="outlined">Bulk Check In</Button>
    <Button sx={{float: "right"}} onClick={openModalHandler} variant="contained">Single Check In</Button>
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
          {/*<Grid item xs={5}>
            <Input type="text" placeholder="Search By Name" fullWidth/>
      </Grid>*/}
        </Grid>
        <TableContainer >
          <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
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
            {rows.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.sl}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.id}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.checkIn}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.checkOut}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.attendance}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.shift}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.overtime}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.stay}</TableCell>
                  <TableCell>
                    {row.checkIn ? row.checkOut ? 
                    <Button color="error" size="small" variant="contained">
                      Checked Out
                    </Button>
                    :
                    <Button color="error" onClick={()=>handleCheckOut(id)} size="small" variant="contained">
                      Check Out
                    </Button>:                    
                    <Button onClick={()=>handleCheckIn(id)} size="small" variant="contained">
                      Check In
                    </Button>
                    }
                  </TableCell>
                  <TableCell>
                    <IconButton onClick={()=>edit(id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={()=>deletePosition(id)} >
                      <DeleteIcon color="error" />
                    </IconButton>
                  </TableCell>
                  {/*{manageAttendance ?
                  <TableCell>
                    <IconButton onClick={()=>edit(id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={()=>deletePosition(id)} >
                      <DeleteIcon color="error"/>
                    </IconButton>
                  </TableCell>:
                  <TableCell>
                    {row.checkOut ? "Checked Out":
                    <Button onClick={()=>handleCheckOut(id)} size="small" variant="outlined">
                      Check Out
                    </Button>}
                  </TableCell>}*/}

                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
        <TablePagination
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
              />
      </Grid>
    </>
  );
};
export default AttendanceForm;
