import React, { useState } from "react";
import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  makeStyles,
  Box,
  TextField,
  Select,
  Typography,
  MenuItem,
  InputLabel,
  Checkbox,
  FormControl,
  ListItemText,
  TablePagination,
  Autocomplete
} from "@material-ui/core";
import TableContainer from '@mui/material/TableContainer';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Scrollbar from "src/components/Scrollbar";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const createData2 = (sl, id, name, department, year, month, date, day, shift, overtime, wrkhrs, status) => {
  return {sl, id, name, department, year, month, date, day, shift, overtime, wrkhrs, status};
};
const data2 = [
  createData2(1,"#EMP0001","Online Order","Accounts","2022","September","01-09-2022","Thursday", "General", "1:00:00", "8:00:00", "Present"),
  createData2(2,"#EMP0001","Online Order","Accounts","2022","September","02-09-2022","Friday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(3,"#EMP0001","Online Order","Accounts","2022","September","03-09-2022","Saturday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(4,"#EMP0001","Online Order","Accounts","2022","September","05-09-2022","Monday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(5,"#EMP0001","Online Order","Accounts","2022","September","07-09-2022","Tuesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(6,"#EMP0001","Online Order","Accounts","2022","September","08-09-2022","Wednesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(7,"#EMP0001","Online Order","Accounts","2022","September","09-09-2022","Thursday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(8,"#EMP0001","Online Order","Accounts","2022","September","10-09-2022","Friday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(9,"#EMP0001","Online Order","Accounts","2022","September","11-09-2022","Saturday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(10,"#EMP0001","Online Order","Accounts","2022","September","13-09-2022","Monday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(11,"#EMP0001","Online Order","Accounts","2022","September","14-09-2022","Tuesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(12,"#EMP0001","Online Order","Accounts","2022","September","15-09-2022","Wednesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(13,"#EMP0001","Online Order","Accounts","2022","September","16-09-2022","Thursday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(14,"#EMP0001","Online Order","Accounts","2022","September","17-09-2022","Friday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(15,"#EMP0001","Online Order","Accounts","2022","September","18-09-2022","Saturday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(16,"#EMP0001","Online Order","Accounts","2022","September","19-09-2022","Monday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(17,"#EMP0001","Online Order","Accounts","2022","September","20-09-2022","Tuesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(18,"#EMP0001","Online Order","Accounts","2022","September","21-09-2022","Wednesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(19,"#EMP0001","Online Order","Accounts","2022","September","22-09-2022","Thursday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(20,"#EMP0001","Online Order","Accounts","2022","September","23-09-2022","Friday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(21,"#EMP0001","Online Order","Accounts","2022","September","24-09-2022","Saturday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(22,"#EMP0001","Online Order","Accounts","2022","September","25-09-2022","Monday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(23,"#EMP0001","Online Order","Accounts","2022","September","26-09-2022","Tuesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(24,"#EMP0001","Online Order","Accounts","2022","September","27-09-2022","Wednesday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(25,"#EMP0001","Online Order","Accounts","2022","September","28-09-2022","Thursday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(26,"#EMP0001","Online Order","Accounts","2022","September","29-09-2022","Friday",  "General", "1:00:00", "8:00:00", "Present"),
  createData2(27,"#EMP0001","Online Order","Accounts","2022","September","30-09-2022","Saturday",  "General", "1:00:00", "8:00:00", "Present"),
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const classes = useStyles();
  const columns3 = [
    //{ label: "Sr no.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Empolyee Name", minWidth: 150, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Year", minWidth: 105, maxWidth: 250 },
    { label: "Month", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 120, maxWidth: 250 },
    { label: "Day", minWidth: 120, maxWidth: 250 },
    { label: "Shift", minWidth: 120, maxWidth: 250 },
    { label: "Overtime Hr", minWidth: 120, maxWidth: 250 },
    { label: "Working Hrs", minWidth: 120, maxWidth: 250 },
    { label: "Status", minWidth: 120, maxWidth: 250 }
  ];
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
  //for year
  const years= [
    '2012',
    '2013',
    '2014',
    '2015',
    '2016',
    '2017',
    '2018',
    '2019',
    '2020',
    '2021',
    '2022',
  ];
  const [yearName, setYearName] = React.useState([]);
  const handleYearChange = (event) => {
    const {
      target: { value },
    } = event;
    setYearName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for month
  const months= [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  const [monthName, setMonthName] = React.useState([]);
  const handleMonthChange = (event) => {
    const {
      target: { value },
    } = event;
    setMonthName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const deptnames= [
    {title:'Accounts'},
    {title:'Inventory'},
    {title:'Human Resource'},
    {title:'Counter Monitor'},
    {title:'Marketing'},
    {title:'Sales'},
  ];
  const years1= [
    {title:'2022'},
    {title:'2021'},
    {title:'2020'},
    {title:'2019'},
    {title:'2018'},
    {title:'2017'},
    {title:'2016'},
    {title:'2015'},
    {title:'2014'},
    {title:'2013'},
    {title:'2012'},
  ];
  const months1= [
    {title:'January'},
    {title:'February'},
    {title:'March'},
    {title:'April'},
    {title:'May'},
    {title:'June'},
    {title:'July'},
    {title:'August'},
    {title:'September'},
    {title:'October'},
    {title:'November'},
    {title:'December'},
  ];
  return (
    <>
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
          sx={{width:"20%" , float: "left"}}
          renderInput={(params) => (
            <TextField {...params} label="Department" placeholder="Search" />
          )}
        />
        <TextField sx={{ width: "20%", marginLeft:"10px", float: "left"}} label="Employees" size="small"/>
        <Autocomplete
          //multiple
          size="small"
          id="checkboxes-tags-demo"
          options={months1}
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
          sx={{width:"20%" , float: "right"}}
          renderInput={(params) => (
            <TextField {...params} label="Month" placeholder="Search" />
          )}
        />
        <Autocomplete
          //multiple
          size="small"
          id="checkboxes-tags-demo"
          options={years1}
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
          sx={{width:"20%" , float: "right", marginRight:"10px"}}
          renderInput={(params) => (
            <TextField {...params} label="Year" placeholder="Search" />
          )}
        />
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
      <TableContainer >
        <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns3.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center"}}
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
                  {/*<TableCell>{row.sl}</TableCell>*/}
                  <TableCell style={{ textAlign: "center"}}>{row.id}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.year}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.month}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.day}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.shift}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.overtime}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.wrkhrs}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button color="primary" size="small" variant="outlined">
                      {row.status}
                    </Button>
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
        <TablePagination
                component="div"
                count={rows2.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
                </TableContainer>
      </Grid>
      <Box
        sx={{
          width: "100%",
          paddingLeft: 2,
          marginBottom: "10px",
          paddingBottom: 6
        }}
      >
        <TextField sx={{ width: "20%",  float: "right"}} label="Total Working Hrs" size="small"/>
        <TextField sx={{ width: "20%", marginRight:"10px", float: "right"}} label="Total Overtime" size="small"/>
      </Box>
    </>
  );
};
export default AttendanceForm;
