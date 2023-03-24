import React, { useState, useEffect } from "react";
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import {
  Tabs,
  Tab,
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
  Autocomplete,
  Button,
  Select,
  MenuItem,
  FormControl,
  FormControlLabel,
  FormGroup,
  Checkbox,
  Modal,
  Fade,
  TablePagination
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import { Edit, Delete } from "@mui/icons-material";
import { Backdrop, makeStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
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

const createRows = (name, department, start_date, end_date, start_time, end_time, workingdays1, holidays, workingdays, status1, status) => {
  return { name, department, start_date, end_date, start_time, end_time, workingdays1, holidays, workingdays, status1, status };
};

const data = [
  createRows("General","Accounts","14-08-2022","14-09-2022", "16:30", "21:30", "Regular","Mon, Tue, Wed, Thu, Fri, Sat"),
  createRows("General","Inventory","14-08-2022","14-09-2022", "16:30", "18:30", "Regular","Mon, Tue, Wed, Thu, Fri, Sat"),
  createRows("General","Marketing","14-08-2022","14-09-2022", "16:30", "21:30", "Regular","Mon, Tue, Wed, Thu, Fri, Sat")
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

const ManageShift = (props) => {
  const [tabValue, setTabValue] = useState(0);
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [currIndex,setCurrIndex] = useState(null);
  const [shiftName,setShiftName] = useState("");
  const [department,setDepartment] = useState("");
  const [startDate,SetStartDate] = useState(new Date());
  const [endDate,SetEndDate] = useState(new Date());
  const [startTime,SetStartTime] = useState("");
  const [startDum,SetStartDum] = useState("");
  const [endDum,SetEndDum] = useState("");
  const [endTime,SetEndTIme] = useState("");
  const [days,SetDays] = useState("");
  const [wrkdays, setwrkdays] = useState(
    [
      {
        "dayname" : "Mon",
        "usage": false
      },
      {
        "dayname" : "Tue",
        "usage": false
      },
      {
        "dayname" : "Wed",
        "usage": false
      },
      {
        "dayname" : "Thu",
        "usage": false
      },
      {
        "dayname" : "Fri",
        "usage": false
      },
      {
        "dayname" : "Sat",
        "usage": false
      },
      {
        "dayname" : "Sun",
        "usage": false
      }
    ]
  );
  const [dispdays, setdispdays] = useState([]);
  const [status,setStatus] = useState("");
  const [status1 ,setStatus1] = useState(
    [{
      "statname": "Regular",
      "usage1": false
    },{
      "statname": "Scheduled",
      "usage1": false
    }]
  );
  const [rowsid, setRowsid] = useState();
  const classes = useStyles();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/new-shift/')
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);
  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const addShift = () =>{
    
    var startdate1 = startDate.getDate()+'-'+(startDate.getMonth()+1)+'-'+ startDate.getFullYear();
    var enddate1 = endDate.getDate()+'-'+(endDate.getMonth()+1)+'-'+ endDate.getFullYear();
    //SetDays(dayName.toString())
    let newRows2 = []
    let newRows3 = []
    let newRows4 = []
    let newRows5 = []
    wrkdays.map((row, id) => {
      if(row.usage === true){
        newRows2.push(row.dayname)
      }
      else{
        newRows5.push(row.dayname)
      }
    });
    console.log(newRows2)
    status1.map((row, id) => {
      if(row.usage1 === true){
        newRows3.push(row.statname)
      }
    });
    console.log(newRows3)
    //newRows4.push(deptName[0].name)
    var newRow = createRows(shiftName, ["Accounts"], startdate1, enddate1, startTime, endTime, newRows2, newRows5, wrkdays, newRows3, status1)
    
    var newRows = [...rows, newRow]
    axios.post('https://doubtful-tuna-leotard.cyclic.app/new-shift/update/'+rowsid, {
      rows: newRows,
  })
  .then(res => console.log(res.data))
  .catch((error) => {console.log(error);})
    setRows(prev => [...prev,newRow])
    console.log(days)
    setShiftName("");
    setDepartment("");
    SetStartDate(new Date());
    SetEndDate(new Date());
    SetStartTime("");
    SetEndTIme("");
    setStatus("");
    SetDays("");
    setTabValue(0);
    }
    const deleteShift = (i)=>{
      if(window.confirm("Are you sure you want to delete this item?")){
        let newRows = rows.filter((row,index) =>{
          return index !== i;
        })
        axios.post('https://doubtful-tuna-leotard.cyclic.app/new-shift/update/'+rowsid, {
          rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
        setRows(newRows)
      }
    }
  
    const edit = (i)=>{
      openModalHandler()
    
      setCurrIndex(i);
      setShiftName(rows[i].name);
      setDeptName(rows[i].department);
      SetStartTime(rows[i].start_time);
      //SetStartDate(rows[i].start_date); not working
      SetStartDum(rows[i].start_date);
      SetStartDate(new Date()); 
      //SetEndDate(rows[i].end_date); not working backend date format
      SetEndDate(new Date()); 
      SetEndDum(rows[i].end_date);
      SetEndTIme(rows[i].end_time);
      setStatus(rows[i].status);
      setStatus1(rows[i].status);
      setwrkdays(rows[i].workingdays)
      SetDays(rows[i].workingdays);
      console.log(rows[i].workingdays1);
      console.log(rows[i].status1);

    }
  
    const editShift = ()=>{
      //var startdate1 = startDate.getDate()+'-'+(startDate.getMonth()+1)+'-'+ startDate.getFullYear();
      //var enddate1 = endDate.getDate()+'-'+(endDate.getMonth()+1)+'-'+ endDate.getFullYear();
      //let newRow = createRows(shiftName, deptName, startdate1, enddate1, startTime, endTime, days, status)
      let newRows2 = []
      let newRows3 = []
      let newRows5 = []
      wrkdays.map((row, id) => {
        if(row.usage === true){
          newRows2.push(row.dayname)
        }
        else{
          newRows5.push(row.dayname)
        }
      });
      console.log(newRows2)
      status1.map((row, id) => {
        if(row.usage1 === true){
          newRows3.push(row.statname)
        }
      });
      console.log(newRows3)
      let newRow = createRows(shiftName, deptName, startDum, endDum, startTime, endTime, newRows2, newRows5, wrkdays, newRows3, status1)
      let newRows = rows.map(row =>row);

      newRows[currIndex] = newRow;
      axios.post('https://doubtful-tuna-leotard.cyclic.app/new-shift/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      setRows(newRows);
  
      closeModalHandler()
      
    }

  const columns = [
    { label: "Shift Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 120, maxWidth: 250 },
    { label: "Start Date", minWidth: 120, maxWidth: 250 },
    { label: "End Date", minWidth: 120, maxWidth: 250 },
    { label: "Start Time", minWidth: 110, maxWidth: 250 },
    { label: "End Time", minWidth: 110, maxWidth: 250 },
    { label: "Working Days", minWidth: 220, maxWidth: 250 },
    { label: "Status", minWidth: 110, maxWidth: 250 },
    { label: "Action", minWidth: 120, maxWidth: 150 }
  ];
  const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const depnames1 = [
    {name : 'Accounts'},
    {name : 'Inventory'},
    {name : 'Human Resource'},
    {name : 'Counter Monitor'},
    {name : 'Marketing'},
    {name : 'Sales'},
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
    setDepartment(value)
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
  const handleDay1Change = (index) => {
    setwrkdays(prev => {
      return prev.map((day, id) => {
        if(id === index){
          day.usage = !day.usage;
          return day;
        }
        else{
          return day;
        }
      })
    })
  }
  const handleStat1Change = (index) => {
    setStatus1(prev => {
      return prev.map((day, id) => {
        if(id === index){
          day.usage1 = !day.usage1;
          return day;
        }
        else{
          return day;
        }
      })
    })
  }
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
                    <Typography variant="subtitle2">Shift Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField onChange={(e)=>{setShiftName(e.target.value)}} value={shiftName} fullWidth size="small" />
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
                    <Typography variant="subtitle2">Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <DatePicker
                      value={startDate}
                      inputFormat="dd/MM/yyyy"
                      onChange={(newValue) => {
                      SetStartDate(newValue);
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
                    <Typography variant="subtitle2">End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <DatePicker
                    value={endDate}
                    inputFormat="dd/MM/yyyy"
                    onChange={(newValue) => {
                    SetEndDate(newValue);
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
                    <Typography variant="subtitle2">Start Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField  type="time" onChange={(e)=>{SetStartTime(e.target.value)}} value={startTime} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">End Time :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField  type="time" onChange={(e)=>{SetEndTIme(e.target.value)}} value={endTime} fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <FormControl>
                      <FormGroup  row>
                        {status1.map((row, id) => (
                          <FormControlLabel control={<Checkbox checked={row.usage1} onChange={() => handleStat1Change(id)}/>}  label={row.statname} labelPlacement="end" />
                        ))}
                      </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Select working days : </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <FormControl>
                      <FormGroup row>
                        {wrkdays.map((row, id) => (
                          <FormControlLabel 
                            control=  {
                            <Checkbox 
                              checked={row.usage} 
                              onChange={() => handleDay1Change(id)}
                            />
                             } 
                             label={row.dayname} 
                             labelPlacement="end" 
                            />
                        ))}
                        </FormGroup>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid item container justifyContent="center">
                  <Grid item xs={4} >
                    <Button color="primary" onClick={editShift} variant="contained" size="small" sx={{ marginRight: 1 }}>
                      Save
                    </Button>
                    <Button onClick={closeModalHandler}  variant="outlined" size="small" >
                      Cancel
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
                /*value={deptName}
                onChange={(event, newValue) => {
                  setDeptName(
                    // On autofill we get a stringified value.
                    typeof newValue === 'string' ? newValue.split(',') : newValue,
                  );
                }}*/
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
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={rows}
                sx={{width:"20%", float: "left", marginLeft: "10px"}}
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
                  <TextField {...params} label="Shift" placeholder="Search" />
                )}
              />
            <Button sx={{float: "right"}} onClick={() => {setTabValue(1)}} variant="contained">New Shift</Button>
            <Button sx={{float: "right", marginRight:"10px"}} onClick={() => {setTabValue(0)}} variant="contained">Manage Shift</Button>
          </>
          :
          <>
            <Button sx={{float: "right"}} onClick={() => {setTabValue(1)}} variant="contained">New Shift</Button>
            <Button sx={{float: "right",  marginRight:"10px"}} onClick={() => {setTabValue(0)}} variant="contained">Manage Shift</Button>
              
          </>
        }
        </Box>
        {tabValue == 0?
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
                      <TableCell align="center" key={id} sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                        {column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row, id) => (
                    <TableRow>
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.department}</TableCell>
                      <TableCell align="center">{row.start_date}</TableCell>
                      <TableCell align="center">{row.end_date}</TableCell>
                      <TableCell align="center">{row.start_time}</TableCell>
                      <TableCell align="center">{row.end_time}</TableCell>
                      <TableCell align="center">{row.workingdays1.join(", ")}</TableCell>
                      <TableCell align="center">
                        <Button  color="primary" size="small" variant="outlined">
                          {row.status1.join(", ")}
                        </Button>
                      </TableCell>
                      <TableCell align="center">
                        <IconButton onClick={()=> edit(id)} size="small" color="primary">
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
                count={rows2.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
        </Grid>
          :
          <>
            <Grid item container sx={{ mb: 2 }} >
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Shift Name
              </Grid>
              <Grid item xs={6}>
                <TextField size="small" onChange={(e)=>{setShiftName(e.target.value)}}  fullWidth />
              </Grid>
            </Grid>
            <Grid item container sx={{ mb: 2 }} style={{marginTop:"40px"}}>
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
                /*value={deptName}
                onChange={(event, newValue) => {
                  setDeptName(
                    // On autofill we get a stringified value.
                    typeof newValue === 'string' ? newValue.split(',') : newValue,
                  );
                }}*/
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
            <Grid item container sx={{ mb: 2 }} style={{marginTop:"40px"}}>
              <Grid
                item
                xs={3}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                Start Date
              </Grid>
              <Grid item xs={2}>
                <DatePicker
                  value={startDate}
                  inputFormat="dd/MM/yyyy"
                  onChange={(newValue) => {
                    SetStartDate(newValue);
                  }}
                  renderInput={(params) => (
                  <TextField 
                    {...params}
                    fullWidth size="small" helperText={null}/>
                  )}
                />
              </Grid>
              <Grid
                item
                xs={2}
                align="right"
                sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
              >
                End Date
              </Grid>
              <Grid item xs={2}>
                <DatePicker
                  value={endDate}
                  inputFormat="dd/MM/yyyy"
                  onChange={(newValue) => {
                  SetEndDate(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField 
                      {...params}
                      fullWidth size="small" helperText={null}/>
                  )}
                />
              </Grid>
            </Grid>
        <Grid item container sx={{ mb: 2 }} style={{marginTop:"40px"}}>
          <Grid
            item
            xs={3}
            align="right"
            sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
          >
            Start Time
          </Grid>
          <Grid item xs={2}>
            <TextField onChange={(e)=>{SetStartTime(e.target.value)}} value={startTime} fullWidth size="small" type="time" />
          </Grid>
          <Grid
            item
            xs={2}
            align="right"
            sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
          >
            End Time
          </Grid>
          <Grid item xs={2}>
            <TextField onChange={(e)=>{SetEndTIme(e.target.value)}} value={endTime} fullWidth size="small" type="time" />
          </Grid>
        </Grid>
        <Grid item container sx={{ mb: 2 }} style={{marginTop:"20px"}}>
          <Grid
            item
            xs={3}
            align="right"
            sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
          >
            Select working days
          </Grid>
          <Grid item xs={6}>
            <FormControl>
                <FormGroup row>
                  {wrkdays.map((row, id) => (
                    <FormControlLabel 
                      control=  {
                        <Checkbox 
                          checked={row.usage} 
                          onChange={() => handleDay1Change(id)}
                        />
                      } 
                      label={row.dayname} 
                      labelPlacement="end" 
                    />
                  ))}
                </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item container sx={{ mb: 2 }}>
          <Grid
            item
            xs={3}
            align="right"
            sx={{ mr: 2, display: "flex", justifyContent: "right", alignItems: "center" }}
          >
            Status
          </Grid>
          <Grid item xs={6}>
            <FormControl>
                <FormGroup row>
                  {status1.map((row, id) => (
                    <FormControlLabel control={<Checkbox checked={row.usage1} onChange={() => handleStat1Change(id)}/>}  label={row.statname} labelPlacement="end" />
                  ))}
                </FormGroup>
            </FormControl>
          </Grid>
        </Grid>

        <Grid item container sx={{ mb: 2 }}>
          <Grid item xs={3} sx={{ mr: 2 }}></Grid>
          <Grid item xs={6}>
            <Button onClick={addShift} variant="contained">Create Shift</Button>
          </Grid>
        </Grid>
        </>
          }
    </>
  );
};
export default ManageShift;
