import React, { useState, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
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
  Autocomplete,
  IconButton,
  withStyles,
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  Select,
  MenuItem,
  Checkbox,
  Radio,
  RadioGroup,
  ListItemText,
  TextField,
  FormControl,
  FormControlLabel,
  InputAdornment,
  TablePagination,
  TableContainer
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import { CurrencyRupee } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const createData = (department, position, jobtype, no_of_pos, status) => {
  return { department, position, jobtype, no_of_pos, status };
};
const createData2 = (name) => {
  return { name };
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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const CreateJob = (props) => {
  const [rows, setRows] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  const [designation, setDesignation] = useState("");
  const [position, setPosition] = useState("");
  const [no_of_pos, setPosno] = useState();
  const [commision, setCommision] = useState("");
  const [department1, setdepartment1] = useState(createData2(""));
  const [department3, setdepartment3] = useState([]);
  const [jobtype2, setjobtype2] = useState(createData2(""));
  const [jobtype3, setjobtype3] = useState([]);
  const [status2, setstatus2] = useState(createData2(""));
  const [status3, setstatus3] = useState([]);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/new-job/')
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
  const openModalHandler3 = (index) => {
    setdelindex(index)
    setOpenModal3(true);
  };

  const closeModalHandler3 = () => {
    setOpenModal3(false);
  };
  const addPosition = () =>{
    let newRows2 = []
    let newRows3 = []
    let newRows4 = []
    newRows2.push(jobtype1)
    newRows3.push(status1)
    newRows4.push(department)
    const newPosition = createData(newRows4, position, newRows2, no_of_pos, newRows3)
    var newRows = [...rows, newPosition]
    axios.post('https://doubtful-tuna-leotard.cyclic.app/new-job/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(prev => [...prev,newPosition])
    setPosition("")
    setPosno()
    closeModalHandler()
  }

  const deletePosition = () =>{
      let newRows = rows.filter((row,i) =>{
        return delindex !== i;
      })
      axios.post('https://doubtful-tuna-leotard.cyclic.app/new-job/update/'+rowsid, {
        rows: newRows,
    })
      setRows(newRows)
      closeModalHandler3()
  }

  const edit = (i) => {
    openModalHandler2()
    setCurrIndex(i)
    setdepartment3(createData2(rows[i].department[0]))
    setdepartment(rows[i].department[0])
    console.log(rows[i].department[0])
    setPosition(rows[i].position)
    setjobtype3(createData2(rows[i].jobtype[0]))
    setjobtype1(rows[i].jobtype[0])
    setPosno(rows[i].no_of_pos)
    setstatus3(createData2(rows[i].status[0]))
    setstatus1(rows[i].status[0])
  }

  const editPosition = () =>{
    let newRows2 = []
    let newRows3 = []
    let newRows4 = []
    newRows2.push(jobtype1)
    newRows3.push(status1)
    newRows4.push(department)
    let newRows = rows.map(row => row);
    newRows[currIndex].department = newRows4;
    newRows[currIndex].position = position;
    newRows[currIndex].jobtype = newRows2;
    newRows[currIndex].no_of_pos = no_of_pos;
    newRows[currIndex].status = newRows3;
    axios.post('https://doubtful-tuna-leotard.cyclic.app/new-job/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(newRows)
    setPosition("")
    setPosno()
    closeModalHandler2()
  }

  const reset = () => {
    setPosition("")
    setPosno()
    setdepartment1(createData2(""))
    setjobtype2(createData2(""))
    setstatus2(createData2(""))
  }


  const columns = [
    //{ label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Department", minWidth: 100, maxWidth: 350 },
    { label: "Position", minWidth: 100, maxWidth: 350 },
    { label: "Job Type", minWidth: 100, maxWidth: 350 },
    { label: "No of Position", minWidth: 100, maxWidth: 350 },
    //{ label: "Period", minWidth: 100, maxWidth: 350 },
    { label: "Status", minWidth: 100, maxWidth: 350 },
    { label: "Action", minWidth: 90, maxWidth: 250 }
  ];

  //department
  const depnames= [
    {name : 'Accounts'},
    {name : 'Inventory'},
    {name : 'Human Resource'},
    {name : 'Counter Monitor'},
    {name : 'Marketing'},
    {name : 'Sales'},
  ];
  const [department, setdepartment] = useState("");
  const [jobtype1, setjobtype1] = useState("");
  const [status1, setstatus1] = useState("");
  const [delindex, setdelindex] = useState()
  const handle_dept = (id) => {
    console.log(id)
    setdepartment(id)
    setdepartment3(id[0])
  }
  const handle_jobtype = (id) => {
    console.log(id)
    setjobtype1(id)
  }
  const handle_status = (id) => {
    console.log(id)
    setstatus1(id)
  }
  //for jobtype
  const jobtype= [
    {name :'Full Time'},
    {name :'Part Time'},
  ];
  //for status
  const status= [
    {name :'Active'},
    {name :'Closed'},
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
          Create Job
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
          <Grid item container>
          <Grid item xs={4}>
              <Typography variant="subtitle2">Department :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                value={department1}
                onChange={(event, newValue) => {
                  setdepartment1(newValue);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={depnames}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_dept(option.name)}
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
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Position :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={position}
                onChange={e => setPosition(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Job Type :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                value={jobtype2}
                onChange={(event, newValue) => {
                  setjobtype2(newValue);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={jobtype}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_jobtype(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Job Type" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">No of position :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={no_of_pos}
                onChange={e => setPosno(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Status :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                value={status2}
                onChange={(event, newValue) => {
                  setstatus2(newValue);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={status}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_status(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Status" placeholder="Search" />
                )}
              />
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
    open={openModal3}
    onClose={closeModalHandler3}
    closeAfterTransition
    BackdropComponent={Backdrop}
    >
    <Fade in={openModal3}>
      <Box className={classes.modal}>
        <Typography variant="h5" align="center" style={{marginBottom: "55px"}}>
          Confirm Delete
        </Typography>
          <Grid item container justifyContent="center">
            <Grid item  >
              <Button onClick={closeModalHandler3} variant="outlined" size="small" sx={{ marginRight: 1 }}>
                No
              </Button>
              <Button onClick={deletePosition}  variant="contained" size="small">
                Yes
              </Button>
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
                Edit Job
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
          <Grid item xs={4}>
              <Typography variant="subtitle2">Department :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                /*value={department3}
                onChange={(event, newValue) => {
                  setdepartment3(newValue);
                }}*/
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={depnames}
                //disableCloseOnSelect
                defaultValue={department3}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_dept(option.name)}
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
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Position :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={position}
                onChange={e => setPosition(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Job Type :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                defaultValue={jobtype3}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={jobtype}
                //disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_jobtype(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Job Type" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">No of position :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={no_of_pos}
                onChange={e => setPosno(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Status :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
                //multiple
                defaultValue={status3}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={status}
                //disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_status(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Status" placeholder="Search" />
                )}
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
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">Add Job</Button>
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
                <TableRow key={id+1} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.position}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.jobtype}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.no_of_pos}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button color="primary" size="small" variant="outlined">
                      {row.status}
                    </Button>
                  </TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                  {/*<IconButton >
                      <VisibilityIcon color="primary" />
              </IconButton>*/}
                  <IconButton onClick={()=>edit(id)} color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={() => openModalHandler3(id)} >
                            <DeleteIcon color="error"/>
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
export default CreateJob;
