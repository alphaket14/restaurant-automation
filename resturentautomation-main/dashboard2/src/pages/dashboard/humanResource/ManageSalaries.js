import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  makeStyles,
  Button,
  IconButton,
  withStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
  TablePagination,
  TableContainer
} from "@material-ui/core";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { CurrencyRupee } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
const createData = (sl, empid, empname, department, emp_status, workingdays, period, gross_sal, netsal, action) => {
  return { sl, empid, empname, department, emp_status, workingdays, period, gross_sal, netsal, action };
};

const data = [
  createData(1, "#EMP0001","Online Order","Accounts", "Permanent", 26,"Monthly","10000", "8000"),
  createData(2, "#EMP0002","Online Order","Accounts", "Permanent", 26,"Monthly","10000", "8000"),
  createData(3, "#EMP0003","Online Order","Accounts", "Permanent", 26,"Monthly","10000", "8000"),
  createData(4, "#EMP0004","Online Order","Accounts", "Permanent", 26,"Monthly","10000", "8000"),
  createData(5, "#EMP0005","Online Order","Accounts", "Permanent", 26,"Monthly","10000", "8000")
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

const CommissionSetting = (props) => {
  const [rows,setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  const [designation, setDesignation] = useState("");
  const [commision, setCommision] = useState("");
  const history = useNavigate();
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

  const addPosition = () =>{
    const index = rows.length;
    const newPosition = createData(index,designation, commision)
    setRows(prev => [...prev,newPosition])
    setDesignation("")
    setCommision("")
    closeModalHandler()
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
    openModalHandler2()
    setCurrIndex(i)
    setDesignation(rows[i].designation)
    setCommision(rows[i].commission)
  }

  const [rowsid, setRowsid] = useState();
  const fetchdata = async () => {
    const data = await axios.get('http://localhost:5000/common-var/')
      setRowsid(data.data[0]._id);
    };
  fetchdata();
  const editPosition = () =>{
    /*let newRows = rows.map(row => row);
    newRows[currIndex].designation = designation;
    newRows[currIndex].commission = commision;
    setRows(newRows)
    setDesignation("")
    setCommision("")
    closeModalHandler2()*/
    axios.post('http://localhost:5000/common-var/update/'+rowsid, {
      addemployee_pointer: 8,
    })
    history("/dashboard/humanresource/hrm/addemployee")
  }

  const reset = () => {
    setDesignation("")
    setCommision("")
  }


  const columns = [
    { label: "Employee ID", minWidth: 100, maxWidth: 200 },
    { label: "Employee Name", minWidth: 120, maxWidth: 200 },
    { label: "Department", minWidth: 100, maxWidth: 200 },
    { label: "Employment", minWidth: 100, maxWidth: 200 },
    { label: "Working Days", minWidth: 100, maxWidth: 200 },
    { label: "Period", minWidth: 100, maxWidth: 200 },
    { label: "Gross Salary", minWidth: 100, maxWidth: 200 },
    { label: "Net Salary", minWidth: 100, maxWidth: 200 },
    { label: "Action", minWidth: 100, maxWidth: 100 }
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Commission',
  });
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
                    <Typography variant="subtitle2">Working Days :</Typography>
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
                    <Typography variant="subtitle2">Period :</Typography>
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
                    <Typography variant="subtitle2">Gross Salary :</Typography>
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
      <Grid container spacing={2} justifyContent="left">
        {/*<Grid item style={{marginTop:"2px"}}>Monthly</Grid>*/}
          {/* <Grid item xs={2}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
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
            </Grid> */}
        <Grid item >
        <Grid item  sx={{minWidth:"180px"}}>
              {/* <InputLabel id="demo-simple-select-label">Employees</InputLabel> */}
              {/*<Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="departName"
                fullWidth 
                size="small"
                multiple
                value={empName}
                onChange={handleEmpChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {employee.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={empName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select>*/}
                              <TextField  size="small" label="Employees" />
            </Grid>
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
        {/*<Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button onClick={handlePrint} size="small">Print/PDF</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
        </Grid>*/}
        <TableContainer>
          <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }} >
          <TableHead>
            <TableRow>
              {columns.map((column) => {
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
            {rows.map((row,id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.empid}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.empname}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button color="primary" size="small" variant="outlined">
                      {row.emp_status}
                    </Button>
                  </TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.workingdays}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.period}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.gross_sal}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.netsal}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                  {/*<IconButton >
                      <VisibilityIcon color="primary" />
              </IconButton>*/}
                  <IconButton  href="/dashboard/humanresource/hrm/addemployee/?form_no=salary"  color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={()=>deletePosition(id)} >
                            <DeleteIcon  color="error"/>
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
export default CommissionSetting;
