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

const createData = (sl, name, candidateId, employeeId, position, selectionTerms) => {
  return { sl, name, candidateId, employeeId, position, selectionTerms };
};

const data = [
  createData(1, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(2, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(3, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(4, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(5, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(6, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(7, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(8, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(9, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez"),
  createData(10, "Mr Kabir", "150078881074S", "E6WBW7YD", "Chief Executive", "feewfgez")
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
const CandidateSelection = (props) => {
  const [rows, setRows] = useState(data);
  const [currIndex, setCurrIndex] = useState(null);
  const [candidateName, setCandidateName] = useState("")
  const [employeeId, setEmployeeId] = useState("")
  const [position, setPosition] = useState("")
  const [selectionTerms, setSelectionTerms] = useState("")
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);


  const classes = useStyles()

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Name", minWidth: 150, maxWidth: 250 },
    { label: "Candidate Id", minWidth: 150, maxWidth: 250 },
    { label: "Employee Id", minWidth: 150, maxWidth: 250 },
    { label: "Position", minWidth: 150, maxWidth: 250 },
    { label: "Selection Terms", minWidth: 150, maxWidth: 250 },
    { label: "Action", minWidth: 100, maxWidth: 150 }
  ];

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
    const newPosition = createData(index+1,candidateName,"342dd21", employeeId, position, selectionTerms)
    setRows(prev => [...prev,newPosition])
    setCandidateName("")
    setPosition("")
    setEmployeeId("")
    setSelectionTerms("")

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
    setCandidateName(rows[i].name)
    setPosition(rows[i].position)
    setEmployeeId(rows[i].employeeId)
    setSelectionTerms(rows[i].selectionTerms)

  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].name = candidateName;
    newRows[currIndex].position = position;
    newRows[currIndex].employeeId = employeeId;
    newRows[currIndex].selectionTerms = selectionTerms;
    setRows(newRows)
    setCandidateName("")
    setPosition("")
    setEmployeeId("")
    setSelectionTerms("")
    closeModalHandler2()
  }

  const reset = () => {
    setCandidateName("")
    setPosition("")
    setEmployeeId("")
    setSelectionTerms("")
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
                Add Selection
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Candidate Name* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={candidateName}
                      onChange={e => setCandidateName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeId}
                      onChange={e => setEmployeeId(e.target.value)} />
                  </Grid>
                </Grid>
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
                    <Typography variant="subtitle2">Selection Terms :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={selectionTerms}
                      onChange={e => setSelectionTerms(e.target.value)} />
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
                Edit Selection
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Candidate Name* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={candidateName}
                      onChange={e => setCandidateName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeId}
                      onChange={e => setEmployeeId(e.target.value)} />
                  </Grid>
                </Grid>
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
                    <Typography variant="subtitle2">Selection Terms :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={selectionTerms}
                      onChange={e => setSelectionTerms(e.target.value)} />
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
          <Button onClick={openModalHandler} variant="contained">Add Selection</Button>
        </Grid>
        {/*<Grid item>
          <Button variant="outlined">Manage Selection</Button>
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
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
      </Grid>*/}

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
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.candidateId}</TableCell>
                  <TableCell>{row.employeeId}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.selectionTerms}</TableCell>
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
export default CandidateSelection;
