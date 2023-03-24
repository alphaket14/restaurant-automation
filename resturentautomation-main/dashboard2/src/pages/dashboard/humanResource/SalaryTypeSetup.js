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
  Typography,
  TextField,
  Box,
  MenuItem,
  Select
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

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

const createData = (sl, salType,action) => {
  return {
    sl,
    salType,
    action
  };
};

const data = [
  createData(1, "Monthly","add"),
  createData(2, "Monthly","add"),
  createData(3, "Monthly","add"),
  createData(4, "Monthly","add"),
  createData(5, "Monthly","add"),
  createData(6, "Monthly","add"),
  createData(7, "Monthly","add"),
  createData(8, "Monthly","add"),
  createData(9, "Monthly","add")
];

const SalaryTypeSetup = (props) => {

  const[rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);

  const[salType, setSalType] = useState("")
  const[action, setAction] = useState("")

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
    const newPosition = createData(index+1,salType, action)
    setRows(prev => [...prev,newPosition])
    setSalType("")
    setAction("")

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
    setSalType(rows[i].salType)
    setAction(rows[i].action)

  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].salType = salType;
    newRows[currIndex].action = action;

    setRows(newRows)
    setSalType("")
    setAction("")
    closeModalHandler2()
  }

  const reset = () => {
    setSalType("")
    setAction("")

  }

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Salary Type", minWidth: 200, maxWidth: 400 },
    { label: "", minWidth: 100, maxWidth: 250 },
    { label: "Action", minWidth: 100, maxWidth: 250 },

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
                Add Salary Type
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={salType}
                      onChange={e => setSalType(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Action :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Select fullWidth onChange={(e)=> setAction(e.target.value)}>
                      <MenuItem value="Add">Add</MenuItem>
                      <MenuItem value="Deduct">Deduct</MenuItem>
                    </Select>
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
                Edit Salary Type
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Salary Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={salType}
                      onChange={e => setSalType(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Action :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Select fullWidth onChange={(e)=> setAction(e.target.value)}>
                      <MenuItem value="Add">Add</MenuItem>
                      <MenuItem value="Deduct">Deduct</MenuItem>
                    </Select>
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
          <Button onClick={openModalHandler} variant="contained">Add Salary Type</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Manage Salary Type</Button>
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
                  <TableCell>{row.salType}</TableCell>
                  <TableCell>{row.action}</TableCell>
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
export default SalaryTypeSetup;
