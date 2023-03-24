import React, { useState, useEffect } from "react";
import axios from 'axios';
import {
  TableContainer,
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
  TextField,
  Radio,
  RadioGroup,
  FormControl,
  InputAdornment,
  FormControlLabel,
  Select,
  MenuItem,
  ListItemText,
  Checkbox,
} from "@material-ui/core";
import { CurrencyRupee } from "@mui/icons-material";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Scrollbar from "src/components/Scrollbar";

const createData = (name, type, amount, status, allow_earn) => {
  return { name, type, amount, status, allow_earn };
};

const data = [
  createData("Earn Leave", "Paid", 30, "Enable", "Yes"),
  createData("Earn Leave", "Paid", 25, "Enable", "Yes"),
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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const AddLeaveType = (props) => {
  const columns = [
    { label: "Name", minWidth: 100, maxWidth: 200 },
    { label: "Type", minWidth: 100, maxWidth: 200 },
    { label: "Amount", minWidth: 100, maxWidth: 200 },
    { label: "Allow Earning", minWidth: 100, maxWidth: 200 },
    { label: "Status", minWidth: 100, maxWidth: 200 },
    { label: "Action", minWidth: 100, maxWidth: 200 },
  ];

  const [rows, setRows] = useState([]);
  const [currIndex, setCurrIndex] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [typeName, setTypeName] = useState("");
  const [amount, setAmount] = useState("");
  const [noOfDays, setNoOfDays] = useState("");
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/leavetype/')
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

  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      axios.post('https://doubtful-tuna-leotard.cyclic.app/leavetype/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      setRows(newRows);
    }
  };

  const addPosition = () => {
    const index = rows.length;
    const newPosition = createData(typeName, noOfDays, amount, statName, earnName);
    var newRows = [...rows, newPosition]
    axios.post('https://doubtful-tuna-leotard.cyclic.app/leavetype/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows((prev) => [...prev, newPosition]);
    setTypeName("");
    setNoOfDays("");
    closeModalHandler();
  };
  const edit = (i) => {
    openModalHandler2();
    setCurrIndex(i);
    setTypeName(rows[i].name);
    setNoOfDays(rows[i].type);
    setAmount(rows[i].amount)
    setStatName(rows[i].status)
    setEarnName(rows[i].allow_earn)
  };

  const editPosition = () => {
    let newRows = rows.map((row) => row);
    newRows[currIndex].name = typeName;
    newRows[currIndex].type = noOfDays;
    newRows[currIndex].amount = amount;
    newRows[currIndex].status = statName;
    newRows[currIndex].allow_earn = earnName;
    axios.post('https://doubtful-tuna-leotard.cyclic.app/leavetype/update/'+rowsid, {
      rows: newRows,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setRows(newRows);
    setTypeName("");
    setNoOfDays("");
    closeModalHandler2();
  };

  const reset = () => {
    setTypeName("");
    setNoOfDays("");
  };
  //for status
  const stats = ["Enable", "Disable"];
  const [statName, setStatName] = React.useState([]);
  const handleStatChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for allowearn
  const allearn = ["Yes", "No"];
  const [earnName, setEarnName] = React.useState([]);
  const handleEarnChange = (event) => {
    const {
      target: { value },
    } = event;
    setEarnName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
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
              Add Leave Type
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={typeName}
                    onChange={(e) => setTypeName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Type :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Amount :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={statName}
                    onChange={handleStatChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {stats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={statName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Allow Earning :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={earnName}
                    onChange={handleEarnChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {allearn.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={earnName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={reset}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={addPosition}
                    variant="contained"
                    size="small"
                  >
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
              Edit Leave Type
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={typeName}
                    onChange={(e) => setTypeName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Type :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={noOfDays}
                    onChange={(e) => setNoOfDays(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Amount :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={statName}
                    onChange={handleStatChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {stats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={statName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container direction="row">
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Allow Earning :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={earnName}
                    onChange={handleEarnChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {allearn.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={earnName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  <Button
                    onClick={reset}
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Reset
                  </Button>
                  <Button
                    onClick={editPosition}
                    variant="contained"
                    size="small"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <TextField label="Search" size="small" />
        </Grid>
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">
            Add Leave
          </Button>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px",
        }}
        direction="column"
        rowGap={2}
      >
        <Grid
          item
          container
          style={{ padding: 0, justifyContent: "space-between" }}
        >
          <Grid item>
            {/*<Button size="small">Copy</Button>*/}
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          {/*<Grid item>
            <Input type="text" placeholder="Search" />
            </Grid>*/}
        </Grid>
        <TableContainer>
          <Scrollbar>

        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                      textAlign: "center",
                    }}
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
                <TableRow key={id+1} hover>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.name}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.type}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <CurrencyRupee
                      fontSize="small"
                      style={{ color: "gray", marginRight: "5px" }}
                    />
                    {row.amount}
                  </TableCell>
                  
                  <TableCell style={{ textAlign: "center" }}>
                    {row.allow_earn == "Yes" ? (
                      <Button color="primary" size="small" variant="outlined">
                        {row.allow_earn}
                      </Button>
                    ) : (
                      <Button color="error" size="small" variant="outlined">
                        {row.allow_earn}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    {row.status == "Enable" ? (
                      <Button color="primary" size="small" variant="outlined">
                        {row.status}
                      </Button>
                    ) : (
                      <Button color="error" size="small" variant="outlined">
                        {row.status}
                      </Button>
                    )}
                  </TableCell>
                  <TableCell style={{ textAlign: "center" }}>
                    <IconButton onClick={() => edit(id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => deletePosition(id)}>
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
      </Grid>
    </>
  );
};
export default AddLeaveType;
