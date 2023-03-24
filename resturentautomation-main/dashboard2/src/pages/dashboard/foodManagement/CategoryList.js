import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  TextField,
  Grid,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Divider,
  Tooltip,
  Box,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  Modal,
  TablePagination
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, Delete, Add } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import Scrollbar from "../../../components/Scrollbar";
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
const CategoryList = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 30, maxWidth: 60 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Image", minWidth: 100, maxWidth: 120 },
    { label: "Parent Category", minWidth: 70, maxWidth: 120 },
    { label: "Food Category", minWidth: 70, maxWidth: 120 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (image, parentCategory, foodCategory, status) => {
    return { image, parentCategory, foodCategory, status };
  };
  const data = [createData("dummy", "Non-Veg", "Thai", "Active"),];
  const [rows, setRows] = useState(data);
  //const [status, setStatus] = useState(rows[0].status);

  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  //const [parentCategory, setParent] = useState("");
  const [categoryName, setCategory] = useState("");
  const [currIndex, setCurrIndex] = useState(null);
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
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/food-category/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const addPosition = () => {
    const newPosition = createData("", parentName, categoryName, statName);
    var newRows = [...rows, newPosition]
    setRows((prev) => [...prev, newPosition]);
    axios.post('http://localhost:5000/food-category/update/'+rowsid, {
      rows: newRows,
  })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    setCategory("");
    setParName([]);
    setStatName([]);
    closeModalHandler();
  };
  const edit = (i) => {
    openModalHandler2();
    setCurrIndex(i);
    setParName(rows[i].parentCategory);
    setCategory(rows[i].foodCategory);
    setStatName(rows[i].status);
  };
  const editPosition = () => {
    let newRows = rows.map((row) => row);
    newRows[currIndex].parentCategory = parentName;
    newRows[currIndex].foodCategory = categoryName;
    newRows[currIndex].status = statName;
    axios.post('http://localhost:5000/food-category/update/'+rowsid, {
      rows: newRows,
    })
    setRows(newRows);
    setCategory("");
    setParName([]);
    setStatName([]);
    closeModalHandler2();
  };
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      axios.post('http://localhost:5000/food-category/update/'+rowsid, {
        rows: newRows,
    })
      setRows(newRows);
    }
  };
  //for image
  const [file, setFile] = useState();

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png",
    });
  //parent_cat
  const parent_cats = ["Veg", "Non Veg"];
  const [parentName, setParName] = React.useState([]);
  const handleParChange = (event) => {
    const {
      target: { value },
    } = event;
    setParName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
              Add Category
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
                  <Typography variant="subtitle2">Category Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={categoryName}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Parent Category :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    //name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={parentName}
                    onChange={handleParChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {parent_cats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={parentName.indexOf(name) > -1} />
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
                  <Select
                    //name="departName"
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
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Image :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <div
                    {...getRootProps()}
                    style={{
                      cursor: "pointer",
                      border: isDragReject
                        ? "1px dashed red"
                        : isDragAccept
                        ? "1px dashed green"
                        : "1px dashed grey",
                      padding: 10,
                      borderRadius: 10,
                      textAlign: "center",
                      height: 100,
                    }}
                  >
                    <input {...getInputProps()} />
                    {isDragReject ? (
                      <p>File not Supported.</p>
                    ) : (
                      <>
                        <p>Drag and Drop.</p>
                        <p>(.jpg, .jpeg and .png)</p>
                      </>
                    )}
                    {file ? (
                      <p style={{ color: "green", marginTop: 10 }}>
                        {file?.name} Selected.
                      </p>
                    ) : null}
                  </div> */}
                  <TextField
                      type="file"
                      name="photograph"
                      fullWidth
                      size="small"
                    />
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                  </Button>*/}
                  <Button
                    onClick={addPosition}
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
      <Modal
        open={openModal2}
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center">
              Edit Category
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
                  <Typography variant="subtitle2">Category Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    value={categoryName}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Parent Category :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    //multiple
                    value={parentName}
                    onChange={handleParChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {parent_cats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={parentName.indexOf(name) > -1} />
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
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Image :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <div
                    {...getRootProps()}
                    style={{
                      cursor: "pointer",
                      border: isDragReject
                        ? "1px dashed red"
                        : isDragAccept
                        ? "1px dashed green"
                        : "1px dashed grey",
                      padding: 10,
                      borderRadius: 10,
                      textAlign: "center",
                      height: 100,
                    }}
                  >
                    <input {...getInputProps()} />
                    {isDragReject ? (
                      <p>File not Supported.</p>
                    ) : (
                      <>
                        <p>Drag and Drop.</p>
                        <p>(.jpg, .jpeg and .png)</p>
                      </>
                    )}
                    {file ? (
                      <p style={{ color: "green", marginTop: 10 }}>
                        {file?.name} Selected.
                      </p>
                    ) : null}
                  </div> */}
                  <TextField
                      type="file"
                      name="photograph"
                      fullWidth
                      size="small"
                    />
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                </Button>*/}
                  <Button
                    variant="contained"
                    size="small"
                    onClick={editPosition}
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
          Add Category
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
          <Table size="small" sx={{ minWidth: 1400 }}>
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
                    {/*<TableCell align="center">{row.itemCode}</TableCell>*/}
                    <TableCell justifyContent="center">
                      <img style={{ height: 50, width: 30 }} />
                    </TableCell>
                    <TableCell align="center">{row.parentCategory}</TableCell>
                    <TableCell align="center">{row.foodCategory}</TableCell>
                    <TableCell align="center">
                      {/*<Select
                        size="small"
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                        color="primary"
                        variant="outlined"
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                        </Select>
                      <Button color="primary" size="small" variant="outlined">
                        {row.status}
                      </Button>*/}
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
                          onClick={() => edit(id)}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton
                          sx={{ color: "error.main" }}
                          size="small"
                          onClick={() => deletePosition(id)}
                        >
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
export default CategoryList;
