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
  TablePagination,
  Autocomplete
} from "@material-ui/core";
import InputLabel from '@mui/material/InputLabel';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
import ListItemText from '@mui/material/ListItemText';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Scrollbar from "../../../components/Scrollbar";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const createData2 = (sl, id, name, department, Shift, wrkdays, avadays, holidays, leaves, action) => {
  return {sl, id, name, department, Shift, wrkdays, avadays, holidays, leaves, action};
};
const data2 = [
  createData2(1,"#EMP0001","Online Order","Accounts", "General","30","22","4","4","general"),
  createData2(2,"#EMP0002","Online Order","Inventory", "General","30","22","4","4","general"),
  createData2(3,"#EMP0003","Online Order","Marketing", "General","30","22","4","4","general"),
  createData2(4,"#EMP0004","Online Order","Accounts", "General","30","22","4","4","general"),
  createData2(5,"#EMP0005","Online Order","Sales", "General","30","22","4","4","general"),
  createData2(6,"#EMP0006","Online Order","Accounts", "General","30","22","4","4","general"),
  createData2(7,"#EMP0007","Online Order","Accounts", "General","30","22","4","4","general")
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
  const [rows2, setRows2] = useState(data2);
  const classes = useStyles();
  const columns2 = [
    { label: "Sr No.", minWidth: 80, maxWidth: 120 },
    { label: "Employee ID", minWidth: 120, maxWidth: 250 },
    { label: "Empolyee Name", minWidth: 120, maxWidth: 250 },
    { label: "Department", minWidth: 100, maxWidth: 250 },
    { label: "Shift", minWidth: 100, maxWidth: 250 },
    { label: "Working Days", minWidth: 105, maxWidth: 250 },
    { label: "Available Days", minWidth: 100, maxWidth: 250 },
    { label: "Holidays", minWidth: 120, maxWidth: 250 },
    { label: "Leaves", minWidth: 120, maxWidth: 250 },
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
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
  const empnames = [
    {name :"emp 1"},
    {name: "emp 2"},
    {name : "emp 3"},
  ]
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
                Edit Monthly Attendance
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
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
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Working Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Available Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Holidays :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Leaves :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <TextField fullWidth size="small" />
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
              <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={empnames}
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
        <TableContainer>
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
                  <TableCell style={{ textAlign: "center"}}>{row.sl}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.id}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.Shift}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.wrkdays}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.avadays}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.holidays}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.leaves}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={openModalHandler} color="primary">
                      <EditIcon color="primary"/>
                    </IconButton>
                    <IconButton href="/dashboard/humanresource/attendance/summaryattendance">
                      <VisibilityIcon fontSize="small" color="secondary" />
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
