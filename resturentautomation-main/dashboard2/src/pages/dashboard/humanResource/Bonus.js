import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
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
const createData = (sl, department, designation, bonus, period, status, action) => {
  return { sl, department, designation, bonus, period, status, action };
};

const data = [
  createData(1, "Accounts", "Manager", 500, "Monthly", "Enabled"),
  createData(2, "Accounts", "Manager", 500, "Monthly", "Enabled"),
  createData(3, "Accounts", "Manager", 500, "Monthly", "Enabled"),
  createData(4, "Accounts", "Manager", 500, "Monthly", "Enabled"),
  createData(5, "Accounts", "Manager", 500, "Monthly", "Enabled")
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

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].designation = designation;
    newRows[currIndex].commission = commision;
    setRows(newRows)
    setDesignation("")
    setCommision("")
    closeModalHandler2()
    

  }

  const reset = () => {
    setDesignation("")
    setCommision("")
  }


  const columns = [
    //{ label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Department", minWidth: 100, maxWidth: 350 },
    { label: "Designation", minWidth: 100, maxWidth: 350 },
    { label: "Bonus ", minWidth: 100, maxWidth: 350 },
    { label: "Period", minWidth: 100, maxWidth: 350 },
    { label: "Status", minWidth: 100, maxWidth: 350 },
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
    //for month
    const months= [
      'Monthly',
      'Quaterly',
      'Half Yearly',
      'Yearly',
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
          Add Bonus
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
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
              <Typography variant="subtitle2">Designation :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={designation}
                onChange={e => setDesignation(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Bonus :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={commision}
                //onChange={e => setCommision(e.target.value)} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee/>
                    </InputAdornment>
                  )
                }}/>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Period :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Select 
                name="periodName"
                fullWidth 
                size="small"
                multiple
                value={monthName}
                onChange={handleMonthChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {months.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={monthName.indexOf(name) > -1} />
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
            <FormControl >
                {/*<FormLabel id="demo-row-radio-buttons-group-label">Restaurant Type</FormLabel>*/}
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Enable" control={<Radio />} label="Enable" />
                    <FormControlLabel value="Disable" control={<Radio />} label="Disable" />
                  </RadioGroup>
              </FormControl>
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
                Edit position
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
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
              <Typography variant="subtitle2">Designation :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={designation}
                onChange={e => setDesignation(e.target.value)} />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Bonus :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={commision}
                //onChange={e => setCommision(e.target.value)} 
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <CurrencyRupee/>
                    </InputAdornment>
                  )
                }}/>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Period :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Select 
                name="periodName"
                fullWidth 
                size="small"
                multiple
                value={monthName}
                onChange={handleMonthChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {months.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={monthName.indexOf(name) > -1} />
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
            <FormControl >
                {/*<FormLabel id="demo-row-radio-buttons-group-label">Restaurant Type</FormLabel>*/}
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel value="Enable" control={<Radio />} label="Enable" />
                    <FormControlLabel value="Disable" control={<Radio />} label="Disable" />
                  </RadioGroup>
              </FormControl>
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
          <Button onClick={openModalHandler} variant="contained">Add</Button>
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
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.designation}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.bonus}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.period}</TableCell>
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
                          <IconButton onClick={()=>deletePosition(id)} >
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
export default CommissionSetting;
