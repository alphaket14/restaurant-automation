import React, { useState } from "react";
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
  MenuItem
} from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
const createData = (sl, id, name, department, date, checkIn, checkOut, attendance, shift, overtime, stay, action) => {
  return { sl,id, name, department, date, checkIn, checkOut, attendance, shift, overtime, stay, action };
};
const createData2 = (sl, id, name, department, wrkdays, avadays, holidays, leaves, action) => {
  return {sl, id, name, department, wrkdays, avadays, holidays, leaves, action};
};
const data = [
  createData(1,"E4Y9cax","online order","Accounts","2021-12-10","","","","general"),
  createData(2,"E4Y9cax","online order","Inventory","2021-12-10","","","","general"),
  createData(3,"E4Y9cax","online order","Marketing","2021-12-10","","","","general"),
  createData(4,"E4Y9cax","online order","Accounts","2021-12-10","","","","general"),
  createData(5,"E4Y9cax","online order","Sales","2021-12-10","","","","general"),
  createData(6,"E4Y9cax","online order","Accounts","2021-12-10","","","","general"),
  createData(7,"E4Y9cax","online order","Accounts","2021-12-10","","","","general")
];
const data2 = [
  createData2(1,"E4Y9cax","online order","Accounts","26","22","4","4","general"),
  createData2(2,"E4Y9cax","online order","Inventory","26","22","4","4","general"),
  createData2(3,"E4Y9cax","online order","Marketing","26","22","4","4","general"),
  createData2(4,"E4Y9cax","online order","Accounts","26","22","4","4","general"),
  createData2(5,"E4Y9cax","online order","Sales","26","22","4","4","general"),
  createData2(6,"E4Y9cax","online order","Accounts","26","22","4","4","general"),
  createData2(7,"E4Y9cax","online order","Accounts","26","22","4","4","general")
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
  const [rows2, setRows2] = useState(data2);
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
  const [checkIn, setCheckIn] = useState(false);
  const [checkOut, setCheckOut] = useState(false);
  const [manageAttendance,setManageAttendance] = useState(false);

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
  const handleCheckIn = (id)=>{
    let today = new Date();
    let CheckInTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let newRows = rows.map(row => row)
    newRows[id].checkIn = CheckInTime;
    newRows[id].attendance = "Present";
    setRows(newRows)
  }
  const handleCheckOut = (id)=>{
    let today = new Date();
    let CheckOutTime = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let newRows = rows.map(row => row)
    newRows[id].checkOut = CheckOutTime;
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
    { label: "Sr no.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 105, maxWidth: 250 },
    { label: "Check In", minWidth: 100, maxWidth: 250 },
    { label: "Check Out", minWidth: 120, maxWidth: 250 },
    { label: "Attendance", minWidth: 120, maxWidth: 250 },
    { label: "Shift", minWidth: 100, maxWidth: 250 },
    { label: "Overtime", minWidth: 100, maxWidth: 250 },
    { label: "Stay", minWidth: 100, maxWidth: 250 },
    { label: "Status", minWidth: 120, maxWidth: 250 },
    { label: "Action", minWidth: 130, maxWidth: 250 }
  ];
  const columns2 = [
    { label: "Sr no.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Empolyee Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Working Days", minWidth: 105, maxWidth: 250 },
    { label: "Available Days", minWidth: 100, maxWidth: 250 },
    { label: "Holidays", minWidth: 120, maxWidth: 250 },
    { label: "Leaves", minWidth: 120, maxWidth: 250 },
    { label: "Action", minWidth: 130, maxWidth: 250 }
  ];
  const columns3 = [
    { label: "Sr no.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Empolyee Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Year", minWidth: 105, maxWidth: 250 },
    { label: "Month", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 120, maxWidth: 250 },
    { label: "Day", minWidth: 120, maxWidth: 250 },
    { label: "Status", minWidth: 120, maxWidth: 250 }
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
              <Typography variant="h5" align="center">
                Single Check In
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Select Employee :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Select fullWidth
                      onChange={e => setEmployeeName(e.target.value)}>
                        <MenuItem value="Employee 1">Employee 1</MenuItem>
                        <MenuItem value="Employee 2">Employee 2</MenuItem>
                        <MenuItem value="Employee 3">Employee 3</MenuItem>
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
          <Button onClick={openModalHandler} variant="contained">Single Check In</Button>
        </Grid>
        <Grid item>
          <Button onClick={openModalHandler2} variant="outlined">Bulk Check In</Button>
        </Grid>
        <Grid item>
          <Button onClick={()=>setManageAttendance(prev => !prev)} variant="outlined">Manage Attendance</Button>
        </Grid>
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
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
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
        </Grid>
        <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
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
            {rows.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.checkIn}</TableCell>
                  <TableCell>{row.checkOut}</TableCell>
                  <TableCell>{row.attendance}</TableCell>
                  <TableCell>{row.shift}</TableCell>
                  <TableCell>{row.overtime}</TableCell>
                  <TableCell>{row.stay}</TableCell>
                  <TableCell>
                    {row.checkIn ? row.checkOut ? "Checked Out":
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
                      <DeleteIcon color="error"/>
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
        </TableContainer>
      </Grid>
      <Grid container spacing={2} justifyContent="right">
        <Grid item style={{marginTop:"2px"}}>Monthly</Grid>
        <Grid item>
          <Button  variant="contained">Department</Button>
        </Grid>
        <Grid item style={{marginRight:"600px"}}>
          <Button  variant="contained">Employees</Button>
        </Grid>
        <Grid item>
          <Button  variant="contained">Select year</Button>
        </Grid>
        <Grid item>
          <Button  variant="contained">select Month</Button>
        </Grid>
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
        <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns2.map((column) => {
                return (
                  <TableCell
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
            {rows2.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.wrkdays}</TableCell>
                  <TableCell>{row.avadays}</TableCell>
                  <TableCell>{row.holidays}</TableCell>
                  <TableCell>{row.leaves}</TableCell>
                  <TableCell>
                    <IconButton >
                      <VisibilityIcon fontSize="small" color="primary" />
                    </IconButton>
                    <IconButton  color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton  >
                      <DeleteIcon color="error"/>
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
        </TableContainer>
      </Grid>
      <Grid container spacing={2} justifyContent="right">
        <Grid item style={{marginTop:"2px"}}>Summary</Grid>
        <Grid item>
          <Button  variant="contained">Department</Button>
        </Grid>
        <Grid item style={{marginRight:"600px"}}>
          <Button  variant="contained">Employees</Button>
        </Grid>
        <Grid item>
          <Button  variant="contained">Select year</Button>
        </Grid>
        <Grid item>
          <Button  variant="contained">Select Month</Button>
        </Grid>
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
      <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns3.map((column) => {
                return (
                  <TableCell
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
            {rows2.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.year}</TableCell>
                  <TableCell>{row.month}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.day}</TableCell>
                  <TableCell>{row.status}</TableCell>
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
        </TableContainer>
      </Grid>
    </>
  );
};
export default AttendanceForm;
