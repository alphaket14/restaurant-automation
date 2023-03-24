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
import { append } from "stylis";

const createData = (
  sl,
  name,
  leaveType,
  appStart,
  appEnd,
  approveStart,
  approveEnd,
  days,
  approvedDays
) => {
  return { sl, name, leaveType, appStart, appEnd, approveStart, approveEnd, days, approvedDays };
};

const data = [
  createData(
    1,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    2,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    3,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    4,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    5,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    6,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  ),
  createData(
    7,
    "Mr Kabir",
    "earn Leave",
    "10-21-2021",
    "10-26-2021",
    "2020-04-04",
    "10-26-2021",
    5,
    5
  )
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

const LeaveApplication = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Name", minWidth: 80, maxWidth: 150 },
    { label: "Leave Type", minWidth: 80, maxWidth: 200 },
    { label: "Application Start Date", minWidth: 80, maxWidth: 200 },
    { label: "Application End Date", minWidth: 80, maxWidth: 200 },
    { label: "Approve Start Date", minWidth: 80, maxWidth: 200 },
    { label: "Approve End Date", minWidth: 80, maxWidth: 200 },
    { label: "Days", minWidth: 80, maxWidth: 250 },
    { label: "Approved Days", minWidth: 80, maxWidth: 200 },
    { label: "Action", minWidth: 150 }
  ];

  const [rows, setRows] = useState(data);
  const [currIndex, setCurrIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [name, setName] = useState("")
  const [leaveType, setLeaveType] = useState("")
  const [appStartDate, setAppStartDate] = useState("")
  const [appEndDate, setAppEndDate] = useState("")
  const [approveStartDate, setApproveStartDate] = useState("")
  const [approveEndtDate, setApproveEndtDate] = useState("")
  const [days, setDays] = useState("")
  const [approvedDays, setApprovedDays] = useState("")

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

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      setRows(newRows)
    }

  }

  const addPosition = () =>{
    const index = rows.length;
    const newPosition = createData(index,name,leaveType, appStartDate, appEndDate, approveStartDate, approveEndtDate, days,approvedDays)
    setRows(prev => [...prev,newPosition])
    setName("")
    setLeaveType("")
    setAppStartDate("")
    setAppEndDate("")
    setApproveStartDate("")
    setApproveEndtDate("")
    setDays("")
    setApprovedDays("")
    closeModalHandler()
  }
  const edit = (i) => {
    openModalHandler2()
    setCurrIndex(i)
    setName(rows[i].name)
    setLeaveType(rows[i].leaveType)
    setAppStartDate(rows[i].appStart)
    setAppEndDate(rows[i].appEnd)
    setApproveStartDate(rows[i].approveStart)
    setApproveEndtDate(rows[i].approveEnd)
    setDays(rows[i].days)
    setApprovedDays(rows[i].approvedDays)

  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].name = name;
    newRows[currIndex].approveStart = approveStartDate;
    newRows[currIndex].approveEnd = approveEndtDate;
    newRows[currIndex].appStart = appStartDate;
    newRows[currIndex].appEnd = appEndDate;
    newRows[currIndex].days = days;
    newRows[currIndex].approvedDays = approvedDays;
    setRows(newRows)
    setName("")
    setLeaveType("")
    setAppStartDate("")
    setAppEndDate("")
    setApproveStartDate("")
    setApproveEndtDate("")
    setDays("")
    setApprovedDays("")
    closeModalHandler2()
  }

  const reset = () => {
    setName("")
    setLeaveType("")
    setAppStartDate("")
    setAppEndDate("")
    setApproveStartDate("")
    setApproveEndtDate("")
    setDays("")
    setApprovedDays("")
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
                Add Leave Application
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Leave Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={leaveType}
                      onChange={e => setLeaveType(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Application Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={appStartDate}
                      onChange={e => setAppStartDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Application End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={appEndDate}
                      onChange={e => setAppEndDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={approveStartDate}
                      onChange={e => setApproveStartDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={approveEndtDate}
                      onChange={e => setApproveEndtDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={days}
                      onChange={e => setDays(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={approvedDays}
                      onChange={e => setApprovedDays(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={addPosition}  variant="contained" size="small">
                      Add
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
                Edit Leave Application
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Leave Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={leaveType}
                      onChange={e => setLeaveType(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Application Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={appStartDate}
                      onChange={e => setAppStartDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Application End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={appEndDate}
                      onChange={e => setAppEndDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Start Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={approveStartDate}
                      onChange={e => setApproveStartDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved End Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={approveEndtDate}
                      onChange={e => setApproveEndtDate(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={days}
                      onChange={e => setDays(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Days :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={approvedDays}
                      onChange={e => setApprovedDays(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={editPosition}  variant="contained" size="small">
                      Update
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">Others Leave</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Manage Application</Button>
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
            {rows.map((row, id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.leaveType}</TableCell>
                  <TableCell>{row.appStart}</TableCell>
                  <TableCell>{row.appEnd}</TableCell>
                  <TableCell>{row.approveStart}</TableCell>
                  <TableCell>{row.approveEnd}</TableCell>
                  <TableCell>{row.days}</TableCell>
                  <TableCell>{row.approvedDays}</TableCell>
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
export default LeaveApplication;
