import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Box,
  Typography,
  TableContainer,
  Tooltip,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  Modal,
  InputAdornment,
  TablePagination
} from "@mui/material";
import Scrollbar from "src/components/Scrollbar";
import { makeStyles } from "@material-ui/core";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";
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
const FoodVariant = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 100, maxWidth: 200 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Topping Name", minWidth: 100, maxWidth: 300 },
    { label: "Price", minWidth: 100, maxWidth: 300 },
    { label: "Status", minWidth: 100, maxWidth: 300 },
    //{ label: "Topping", minWidth: 100, maxWidth: 400 },
    //{ label: "Price", minWidth: 200, maxWidth: 400 },
    { label: "Actions", minWidth: 120, maxWidth: 250 },
  ];

  const createData = (toppingName, price, status) => {
    return {toppingName, price, status};
  };

  const data = [
    createData("name",500, "Active"),
  ];
  const [toppingName, setToppingName] = useState("");
  const [price, setPrice] = useState();
  const [rows, setRows] = useState([]);
  const [rowsid, setRowsid] = useState();
  const [currIndex, setCurrIndex] = useState(null);
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/toppings/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const addPosition = () => {
    const newPosition = createData(toppingName, price, statName);
    var newRows = [...rows, newPosition]
    setRows((prev) => [...prev, newPosition]);
    axios.post('https://doubtful-tuna-leotard.cyclic.app/toppings/update/'+rowsid, {
      rows: newRows,
  })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setToppingName("");
    setPrice();
    setStatName([]);
    closeModalHandler();
  };
  const edit = (i) => {
    openModalHandler2();
    setCurrIndex(i);
    setToppingName(rows[i].toppingName);
    setPrice(rows[i].price);
    setStatName(rows[i].status);
  };
  const editPosition = () => {
    let newRows = rows.map((row) => row);
    newRows[currIndex].toppingName = toppingName;
    newRows[currIndex].price = price;
    newRows[currIndex].status = statName;
    axios.post('https://doubtful-tuna-leotard.cyclic.app/toppings/update/'+rowsid, {
      rows: newRows,
    })
    setRows(newRows);
    setToppingName("");
    setPrice();
    setStatName([]);
    closeModalHandler2();
  };
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      axios.post('https://doubtful-tuna-leotard.cyclic.app/toppings/update/'+rowsid, {
        rows: newRows,
    })
      setRows(newRows);
    }
  };
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
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
  //for status
  const stats = ["Active", "Inactive"];
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
              Add Topping
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
                  <Typography variant="subtitle2">Topping Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={toppingName}
                    onChange={e => setToppingName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Price :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={price}
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                    //onChange={LoanAmtChange}
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
              <Grid item container>
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
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                  </Button>*/}
                  <Button
                    onClick={addPosition} variant="contained"
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
      <Modal
        open={openModal2}
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center">
              Edit Topping
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
                  <Typography variant="subtitle2">Topping Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={toppingName}
                    onChange={e => setToppingName(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Price :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={price}
                    type="number"
                    onChange={e => setPrice(e.target.value)}
                    //onChange={LoanAmtChange}
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
              <Grid item container>
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
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                </Button>*/}
                  <Button
                    variant="contained"
                    size="small" onClick={editPosition}
                  >
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
          mb: 1,
          paddingBottom: 6,
        }}
      >
        <TextField
          sx={{ width: "20%", float: "left" }}
          label="Search"
          size="small"
        />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
          //sx={{ justifyContent: "end" }}
          sx={{ float: "right" }}
        >
          Add Topping
        </Button>
      </Box>
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
        <TableContainer>
          <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
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
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.toppingName}</TableCell>
                    <TableCell align="center">
                      <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                      />
                      {row.price}
                    </TableCell>
                    <TableCell align="center">
                      {row.status == "Active" ? (
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      ) : (
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() => navigate("/dashboard/foodmanagement/managefood/add-variant")}
                          onClick={() => edit(id)}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small" onClick={() => deletePosition(id)}>
                          <Delete />
                        </IconButton>
                      </Tooltip>
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
export default FoodVariant;
