import React, { useRef, useState, useEffect } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import axios from 'axios';
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableContainer,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  withStyles,
  makeStyles,
  TablePagination,
  FormGroup,
  FormControlLabel,
  Fade,
  Box,
  Backdrop,
  Modal,
  TextField,
  Typography
} from "@material-ui/core";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { position } from "stylis";
import Scrollbar from "src/components/Scrollbar";

const createData = (sl, designation, details) => {
  return { sl, designation, details };
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

const Designation = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [position, setPosition] = useState("");
  const [details, setDetails] = useState("");
  const [rows, setRows] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);
  const [rowsid, setRowsid] = useState();
  const columns = [
    { label: "Sr No.", minWidth: 80, maxWidth: 300 },
    { label: "Designation", minWidth: 150, maxWidth: 250 },
    { label: "Details", minWidth: 250 },
    { label: "Action", minWidth: 150 }
  ];
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/designation/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const classes = useStyles();

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
    const newPosition = createData(index,position, details)
    var newRows = [...rows, newPosition]
    setRows(prev => [...prev,newPosition])
    axios.post('https://doubtful-tuna-leotard.cyclic.app/designation/update/'+rowsid, {
      rows: newRows,
  })
  .then(res => console.log(res.data))
  .catch((error) => {console.log(error);})
    setPosition("")
    setDetails("")
    closeModalHandler()
  }

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      axios.post('https://doubtful-tuna-leotard.cyclic.app/designation/update/'+rowsid, {
        rows: newRows,
    })
      setRows(newRows)
    }

  }

  const edit = (i) => {
    openModalHandler2()
    setCurrIndex(i)
    setPosition(rows[i].designation)
    setDetails(rows[i].details)
  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].designation = position;
    newRows[currIndex].details = details;
    setRows(newRows)
    axios.post('https://doubtful-tuna-leotard.cyclic.app/designation/update/'+rowsid, {
      rows: newRows,
    })
    setPosition("")
    setDetails("")
    closeModalHandler2()
  }

  const reset = () => {
    setPosition("")
    setDetails("")
  }
  const componentRef = useRef();
  return (
    <>
      <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Add Designation
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Designation :</Typography>
                  </Grid>
                  <Grid item xs={8} fullWidth>
                    <TextField fullWidth size="small"
                      value={position}
                      onChange={e => setPosition(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Details :</Typography>
                  </Grid>
                  <Grid item xs={8} fullWidth>
                    <TextField fullWidth size="small"
                      multiline = "true"
                      maxRows = {5}
                      value={details}
                      onChange={e => setDetails(e.target.value)} />
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
                    <Typography variant="subtitle2">Position* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={position}
                      onChange={e => setPosition(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Details* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={details}
                      onChange={e => setDetails(e.target.value)} />
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
          <Button variant="contained" onClick={openModalHandler}>Add Designation</Button>
        </Grid>
        {/*<Grid item>
          <Button variant="outlined">Manage Position</Button>
  </Grid>*/}
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
            <Button onClick={handlePrint} size="small">Print/PDF</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
        </Grid>*/}
      
        <Grid item container ref={componentRef}>
        <TableContainer >
        <Scrollbar>
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
              {rows.map((row,id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell>{id+1}</TableCell>
                    <TableCell><a href="/dashboard/humanresource/hrm/manageemployee">{row.designation}</a></TableCell>
                    <TableCell>{row.details}</TableCell>
                    <TableCell>
                          <IconButton onClick={()=>edit(id)} color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton  color="error" onClick={()=>deletePosition(id) } >
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
                sx={{display:"flex",justifyContent:"flex-end",width:"100%"}}
              />
            
        </Grid>
      </Grid>
    </>
  );
};
export default Designation;
