import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  IconButton,
  Modal,
  Backdrop,
  Fade,
  Box,
  Paper,
  TableContainer,
  Divider,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { Add, Edit, Delete } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    borderRadius: 10,
    padding: 20
  }
}));

const IngredientUnits = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const modalOpenHandler = () => setOpenModal(true);
  const modalCloseHandler = () => setOpenModal(false);
  const [openModal2, setOpenModal2] = useState(false);
  const modalOpenHandler2 = () => setOpenModal2(true);
  const modalCloseHandler2 = () => setOpenModal2(false);

  const columns = [
    { label: "Sr. No.", minWidth: 10, maxWidth: 20 },
    { label: "Unit Name", minWidth: 50, maxWidth: 150 },
    { label: "Description", minWidth: 50, maxWidth: 150 },
    { label: "Actions", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (unitName, description) => {
    return { unitName, description };
  };
  const [rows, setRows] = useState([]);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/inventory-unit/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);
  const [unitName, setUnitName] = useState("");
  const [description, setDescription] = useState("");
  const [currIndex, setCurrIndex] = useState("");

  const onSubmitHandler = (unitname, desc) => {
    const temp = [...rows];
    temp.push(createRows(unitname, desc));
    axios.post('http://localhost:5000/inventory-unit/update/'+rowsid, {
      rows: temp,
    })
    setRows(temp);
    setUnitName("");
    setDescription("");
    modalCloseHandler();
  };

  const onDeleteRowHandler = (id) => {
    const temp = [...rows];
    const newArray = temp.filter((el, index) => index !== id);
    axios.post('http://localhost:5000/inventory-unit/update/'+rowsid, {
      rows: newArray,
    })
    setRows(newArray);
  };

  const edit = (id) => {
    setCurrIndex(id);
    setUnitName(rows[id].unitName);
    setDescription(rows[id].description);
    modalOpenHandler2();
  };

  const onEditHandler = () => {
    let temp = [...rows];
    temp[currIndex].unitName = unitName;
    temp[currIndex].description = description;
    axios.post('http://localhost:5000/inventory-unit/update/'+rowsid, {
      rows: temp,
    })
    setRows(temp);
    setUnitName("");
    setDescription("");
    modalCloseHandler2();
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
        onClose={modalCloseHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
          <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Unit Name
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    onChange={(e) => setUnitName(e.target.value)}
                    value={unitName}
                    fullWidth
                    size="small"
                    label="Unit Name"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom >
                    Description
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    sx={{ mb: 2 }}
                    fullWidth
                    size="small"
                    multiline 
                    minRows={4}
                    label="Description"
                    required
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" mt={2}>
            <Grid item  >
              <Button onClick={modalCloseHandler} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                Cancel
              </Button>
              <Button onClick={() => onSubmitHandler(unitName, description)}  variant="contained" size="small">
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
        onClose={modalCloseHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom>
                    Unit Name
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    onChange={(e) => setUnitName(e.target.value)}
                    value={unitName}
                    fullWidth
                    size="small"
                    label="Unit Name"
                    required
                    sx={{ mb: 2 }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1" gutterBottom >
                    Description
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    onChange={(e) => setDescription(e.target.value)}
                    value={description}
                    sx={{ mb: 2 }}
                    fullWidth
                    multiline 
                    minRows={4}
                    size="small"
                    label="Description"
                    required
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="center" mt={2}>
            <Grid item  >
              <Button onClick={modalCloseHandler2} variant="outlined" size="small" sx={{ marginRight: 5 }}>
                Cancel
              </Button>
              <Button onClick={onEditHandler}  variant="contained" size="small">
                Update
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
        {/*<Typography variant="h5">Ingredient Units</Typography>*/}
        <Button variant="contained" sx={{ float: "right" }} onClick={modalOpenHandler} startIcon={<Add />}>
          Add Unit
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
      <TableContainer >
        <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column, id) => (
                <TableCell align="center" sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.length ? (
              rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.unitName}</TableCell>
                  <TableCell align="center">{row.description}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => edit(id)} size="small" color="primary">
                      <Edit />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => onDeleteRowHandler(id)}
                      sx={{ color: "error.main" }}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={5} align="center">
                  No data available.
                </TableCell>
              </TableRow>
            )}
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
export default IngredientUnits;
