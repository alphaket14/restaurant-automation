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
  TextField
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const createData = (sl, empName, empId, salType, date) => {
  return {
    sl,
    empName,
    empId,
    salType,
    date
  };
};

const data = [
  createData(1, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(2, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(3, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(4, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(5, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(6, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(7, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(8, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20"),
  createData(9, "Fayaz Saraj", "EHRZMEOC", 2, "2021-10-20")
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


const SalarySetup = (props) => {
  const[rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);
  const [empName, setempName] = useState("")
  const [empId, setempId] = useState("")
  const [salType, setsalType] = useState("")
  const [date, setdate] = useState("")

  const classes = useStyles()

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
    const newPosition = createData(index+1,empName, empId, salType, date)
    setRows(prev => [...prev,newPosition])
    setempName("")
    setempId("")
    setsalType("")
    setdate("")

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
    setempName(rows[i].empName)
    setempId(rows[i].empId)
    setsalType(rows[i].salType)
    setdate(rows[i].date)

  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].salType = salType;
    newRows[currIndex].date = date;
    newRows[currIndex].empName = empName;
    newRows[currIndex].empId = empId;

    setRows(newRows)
    setempName("")
    setempId("")
    setsalType("")
    setdate("")
    closeModalHandler2()
  }

  const reset = ()=>{
    setempName("")
    setempId("")
    setsalType("")
    setdate("")
  }

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Employee Name", minWidth: 150, maxWidth: 300 },
    { label: "Employee Id", minWidth: 150, maxWidth: 300 },
    { label: "Salary Type", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 100, maxWidth: 250 },
    { label: "Action", minWidth: 100, maxWidth: 250 }

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
                Add Salary Setup
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empName}
                      onChange={e => setempName(e.target.value)} />
                  </Grid> 
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empId}
                      onChange={e => setempId(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={salType}
                      onChange={e => setsalType(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={date}
                      onChange={e => setdate(e.target.value)} />
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
                Edit Salary Setup
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empName}
                      onChange={e => setempName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empId}
                      onChange={e => setempId(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={salType}
                      onChange={e => setsalType(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={date}
                      onChange={e => setdate(e.target.value)} />
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
          <Button onClick={openModalHandler} variant="contained">Add Salary Setup</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Manage Salary Setup</Button>
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
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.empName}</TableCell>
                  <TableCell>{row.empId}</TableCell>
                  <TableCell>{row.salType}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>
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
      </Grid>
    </>
  );
};
export default SalarySetup;
