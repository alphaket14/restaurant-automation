import React, { useState } from "react";
import {
  Stack,
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
  Checkbox,
  TablePagination
} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
import ListItemText from '@mui/material/ListItemText';
import { CurrencyRupee } from "@mui/icons-material";
import FormControl from '@mui/material/FormControl';
import Scrollbar from "src/components/Scrollbar";
const createData2 = (sl, id, name, department, emp_stat, salyr, salmonth, netsal, cred_date, cred_by, status, transaction, action) => {
  return {sl, id, name, department, emp_stat, salyr, salmonth, netsal, cred_date, cred_by, status, transaction, action};
};
const data2 = [
  createData2(1,"#EMP0001","Online Order","Accounts", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "notPaid",""),
  createData2(2,"#EMP0002","Online Order","Inventory", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "notPaid",""),
  createData2(3,"#EMP0003","Online Order","Marketing", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "notPaid",""),
  createData2(4,"#EMP0004","Online Order","Accounts", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "notPaid",""),
  createData2(5,"#EMP0005","Online Order","Sales", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "paid","Successfull"),
  createData2(6,"#EMP0006","Online Order","Accounts", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "paid","Successfull"),
  createData2(7,"#EMP0007","Online Order","Accounts", "Permanent", "2022","October","8000","01-10-2022","Mr Kabir Kumar", "paid","Successfull")
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
    minWidth: 900,
    maxHeight: 650,
    overflow: "hidden",
    overflowY: "scroll",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));


const AttendanceForm = (props) => {
  const [rows2, setRows2] = useState(data2);
  const [currIndex, setCurrIndex] = useState(null);
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

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows2.filter((row,i) =>{
        return index !== i;
      })
      setRows2(newRows)
    }

  }
  const columns2 = [
    //{ label: "Sr no.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Empolyee Name", minWidth: 150, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Employment", minWidth: 100, maxWidth: 250 },
    { label: "Salary Year", minWidth: 110, maxWidth: 250 },
    { label: "Salary Month", minWidth: 130, maxWidth: 250 },
    { label: "Net Salary", minWidth: 110, maxWidth: 250 },
    { label: "Credited Date", minWidth: 130, maxWidth: 250 },
    { label: "Credited By", minWidth: 170, maxWidth: 250 },
    { label: "Status", minWidth: 110, maxWidth: 250 },
    { label: "Transaction", minWidth: 100, maxWidth: 250 },
    { label: "Action", minWidth: 180, maxWidth: 250 }
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
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [index, setIndex] = useState(null);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const openModalHandler2 = () => {
    setOpenModal2(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };
  const openPaymentForm = (id) =>{
    setIndex(id)
    openModalHandler()
    
  }
  const Form0 = ()=>{
    const createData3 = (earn, amt1, ded, amt2) => {
      return {earn, amt1, ded, amt2};
    };
    const data3= [
      createData3("Basic Salary", 10000, "Provident Fund", 550),
      createData3("Dearness Allowance", 2000, "Profession Tax", 300),
      createData3("Total Earnings", 12000, "Total Deductions", 850)
      //createData3("Net Amount Payable", 11150)
    ];
    const [rows3, setRows3] = useState(data3);
    const columns3 = [
      //{ label: "Sr no.", minWidth: 80, maxWidth: 120 },
      { label: "Earnings", minWidth: 100, maxWidth: 250 },
      { label: "Amount", minWidth: 50, maxWidth: 250 },
      { label: "Deduction", minWidth: 100, maxWidth: 250 },
      { label: "Amount", minWidth: 50, maxWidth: 250 }
    ];
    return <>
      <Grid container  xs={12} spacing={2}>
          <Typography variant="h5" align="right" style={{marginLeft:"390px"}}>
                Payslip
              </Typography>
        <Grid xs={12} item container justifyContent="center">
            <Box
              component="img"
              sx={{
                objectFit:"cover",
                height: 100,
                width: 100,
                borderRadius: 99999
              }}
              alt="Employee Profile."
              //src="https://cdn-icons-png.flaticon.com/128/45/45332.png"
              src="https://i.pinimg.com/originals/54/58/0d/54580d586a59e096a5813d643c2d1665.png"
            />
        </Grid>
        <Typography variant="h5" align="right" style={{marginLeft:"280px", marginTop:"30px"}} >
                Payslip for the month of Oct'2022
              </Typography>
        <Grid xs={12} mt={6} item direction="row" justifyContent="center"  container >
          <Grid item >
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Employee ID</Typography></Grid>
              <Grid item style={{marginLeft:"25px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}> #EMP0001</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Employee Name</Typography></Grid>
              <Grid item ><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontSize={14} fontWeight={700} > John Smith</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Location</Typography></Grid>
              <Grid item style={{marginLeft:"51px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>Mumbai</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Date Of Joining</Typography></Grid>
              <Grid item style={{marginLeft:"7px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>23-05-2022</Typography></Grid>
            </Grid>
          </Grid>
          
          <Grid item  spacing={2} ml={3}>
          <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Department</Typography></Grid>
              <Grid item style={{marginLeft:"51px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>Accounts</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Designation</Typography></Grid>
              <Grid item style={{marginLeft:"51px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>Manager</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Employment Status</Typography></Grid>
              <Grid item ><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} >Permanent</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Pan No.</Typography></Grid>
              <Grid item style={{marginLeft:"78px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>7988-7542-4324</Typography></Grid>
            </Grid>
          </Grid>

          <Grid item spacing={2} ml={3}>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Aadhaar No.</Typography></Grid>
              <Grid item style={{marginLeft:"2px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}> 7988-7542-4324</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>Bank A/c No.</Typography></Grid>
              <Grid item ><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}> 7988-7542-4324</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>UAN No.</Typography></Grid>
              <Grid item style={{marginLeft:"30px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}> 7988-7542-4324</Typography></Grid>
            </Grid>
            <Grid item mb={2} container spacing={1}>
              <Grid item><Typography fontSize={14}>PF No.</Typography></Grid>
              <Grid item style={{marginLeft:"43px"}}><Typography fontSize={14}>:</Typography></Grid>
              <Grid item><Typography fontWeight={700} fontSize={14}>7988-7542-4324</Typography></Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
        container
        style={{
          marginTop:"80px",
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          //padding: "20px 20px",
          //margin: "20px 0px",
          marginLeft:"30px"
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
            {rows3.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.earn}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.amt1}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.ded}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.amt2}</TableCell>
                </TableRow>
              );
            })}
            <TableRow fullWidth hover>
              <TableCell style={{ textAlign: "center", fontWeight:"bold", fontSize:"large"}}>Net Amount Payable </TableCell>
              <TableCell style={{ textAlign: "center", fontWeight:"bold", fontSize:"large", borderRight:"0"}}></TableCell>
              <TableCell style={{ textAlign: "center", fontWeight:"bold", fontSize:"large", borderRight:"0"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/> 11150</TableCell>
              <TableCell style={{ textAlign: "center", fontWeight:"bold", fontSize:"large"}}></TableCell>
              {/*<Typography fontSize={14}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/> 11150</Typography>*/}

            </TableRow>
          </TableBody>
        </Table>
            </Scrollbar>
        </TableContainer>
      </Grid>
      <Grid xs={12} mt={3} ml={6} item direction="row"  container >
      <Grid item><Typography style={{ textAlign: "right"}}>Eleven Thousand One Hundred Fifty Rupees Only.</Typography></Grid>
      </Grid>
        <Grid xs={12} mt={9} ml={6} item direction="row" justifyContent="flex-start" container >
          <Grid item >
            <Grid item mb={2} container spacing={1} ml={2}>
              <Grid item><Typography>Prepared By</Typography></Grid>
              <Grid item ><Typography>:</Typography></Grid>
              {/*<Grid item><Typography fontWeight={700} > John Smith</Typography></Grid>*/}
            </Grid>
          </Grid>
          <Grid item spacing={2}>
            <Grid item mb={2} container spacing={1} ml={20}>
              <Grid item><Typography>Checked By</Typography></Grid>
              <Grid item ><Typography>:</Typography></Grid>
              {/*<Grid item><Typography fontWeight={700} > John Smith</Typography></Grid>*/}
            </Grid>
          </Grid>
          <Grid item spacing={2}>
            <Grid item mb={2} container spacing={1} ml={18}>
              <Grid item><Typography>Authorised By</Typography></Grid>
              <Grid item ><Typography>:</Typography></Grid>
              {/*<Grid item><Typography fontWeight={700} > John Smith</Typography></Grid>*/}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" mt={3}>
            <Grid item  >
              <Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Download
              </Button>
              <Button   variant="contained" size="small">
                Print
              </Button>
            </Grid>
          </Grid>
      </Grid>
    </>
  }
  return (
    <>
              <Modal
          open={openModal2}
          onClose={closeModalHandler2}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal2}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Edit Salary
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeName}
                      //onChange={e => setEmployeeName(e.target.value)} 
                      />
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
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Year :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Month :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Net Salary :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Credited Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Credited By :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={employeeId}
                      //onChange={e => setEmployeeId(e.target.value)} 
                      />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button   variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>


              </Grid>
            </Box>
          </Fade>
      </Modal>
            <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal}>
              <Form0/>
            </Box>
          </Fade>
        </Modal>

        {/* <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
       <Box component="span" sx={{
         width: "100%",
       }}>
        <FormControl sx={{width:"20%",mr:2}}>
       
        <Select 
                labelId="select-type"
                label="Department Name"
                id="select-type"
               
                value={deptName}
                onChange={handleChange}
                
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
          
           <FormControl sx={{width:"20%",mr:2}}>
           <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Year"
                value={yearName}
                onChange={handleYearChange}
               
                renderValue={(selected) => selected.join(', ')}
              >
                {years.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={yearName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
           </FormControl>     
           <FormControl  sx={{width:"20%",mr:2}} >
           <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
               
                label="Month"
               
                value={monthName}
                onChange={handleMonthChange}
               
                renderValue={(selected) => selected.join(', ')}
              >
                {months.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={monthName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
            </FormControl>  
            <TextField sx={{ width: "20%",mb: 2  }} size="small" label="Employees" />
       </Box>
       </Stack>           */}

      
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
              {columns2.map((column) => {
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
                  <TableCell style={{ textAlign: "center"}}>{row.id}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button color="primary" size="small" variant="outlined">
                      {row.emp_stat}
                    </Button>
                  </TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.salyr}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.salmonth}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/><span >{row.netsal}</span></TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.cred_date}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.cred_by}</TableCell>
                  <TableCell>
                  {row.status==="paid"? 
                    <Button color="primary" size="small" variant="outlined">
                      Paid
                    </Button>
                  :
                    <Button color="error" size="small" variant="outlined">
                      Pay Now
                    </Button>
                    }
                  </TableCell>
                  <TableCell>{row.transaction}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button onClick={openModalHandler} color="primary" size="small" variant="contained">
                      Payslip
                    </Button>
                    {/*<IconButton onClick={openModalHandler}>
                      <VisibilityIcon color="primary" />
                    </IconButton>
                    <IconButton  onClick={openModalHandler2} color="primary">
                      <EditIcon />
                  </IconButton>*/}
                    <IconButton  >
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
export default AttendanceForm;
