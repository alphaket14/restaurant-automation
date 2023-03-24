import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Divider,
  Typography,
  Tooltip,
  Modal,
  Backdrop,
  Fade,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
import DeleteIcon from "@material-ui/icons/Delete";
import { useEffect } from "react";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    width: 500,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const AddTableSection = (props) => {

  const [rows, setrowstoadd] = useState("");
  
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
  }, [])

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
    backgroundColor: "#212B36",
  };
  const navigate = useNavigate();
  const classes = useStyles();

  //column names
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Section Name", minWidth: 50, maxWidth: 100 },

    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  
// Add New Section 
  function submit(e){
    e.preventDefault();
    
    axios.post('https://vast-pink-meerkat-suit.cyclic.app/section/add', {
      sectionName: newdata.sectionName
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
    handleClose()
  }

  const createRows = (sectionName) => ({
    sectionName,
  });


  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const handleOpen = () => setOpen(true);




  const handleOpenEdit = (e) => {
    setdatainedit(e);
    setOpenEdit(true);
  };

  const handleCloseEdit = () => setOpenEdit(false);
  const initialdata = {
    sectionName: "",
  };


  const EditSection = (e, id, sectionName) => {
    // console.log(editid, " hello");
    // rows[editid] = datainedit;
    // localStorage.setItem("sectionbox", JSON.stringify(rows));


    e.preventDefault();
    // console.log(id);
    axios.post(`https://vast-pink-meerkat-suit.cyclic.app/section/update/${id}`, {
      sectionName: sectionName
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
     const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
    handleClose()
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    axios.delete(`https://vast-pink-meerkat-suit.cyclic.app/section/delete/${id}`).then(() => console.log('Section deleted.'))
    .catch(err => console.log('Error: ' + err));
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
  };




  const handleClose = () => setOpen(false);

  const [newdata, setnewdata] = useState(initialdata);

  const handleChange = (e) => {
    e.preventDefault();
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
    console.log(newdata);
  };
  const handleChangeEdit = (e) => {
    e.preventDefault();
    setdatainedit({ ...datainedit, [e.target.name]: e.target.value });
  };

  
  const addNewSection = () => {
    const datatoadd = createRows(newdata.sectionName, newdata.capacity);
    console.log(datatoadd, "ise add krdo");
    setrowstoadd([...rows, datatoadd]);
    console.log(rows);
    localStorage.setItem("sectionbox", JSON.stringify(rows));

    setnewdata(initialdata);
    setOpen(false);
  };



  const [editid, seteditid] = useState();
  const [datainedit, setdatainedit] = useState();
  useEffect(() => {
    localStorage.setItem("sectionbox", JSON.stringify(rows));
  }, [rows]);






  
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
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography
            sx={{ width: "100%", textAlign: "center", mb: 2 }}
            variant="h5"
          >
            Add Section
          </Typography>
          <Grid container direction="column" rowSpacing={1}>
            <Grid item container spacing={2}>
              <Grid item xs={5} align="right" alignSelf="center">
                <Typography label="Search Name" placeholder="Section Name" variant="body1">Section Name  </Typography>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  fullWidth
                  label="Section Name"
                  size="small"
                  name="sectionName"
                  placeholder="Section Name"
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <Grid
              item
              container
              justifyContent="center"
              style={{ marginTop: "2rem", gap: "20px" }}
            >
              <Button variant="outlined" color="error" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                onClick={submit}
                variant="contained"
                sx={{ ml: 1 }}
              >
                Save
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>


      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Box sx={style}>
          <Typography
            sx={{ width: "100%", textAlign: "center", mb: 2 }}
            variant="h5"
          >
            Edit Section
          </Typography>
          {datainedit && (
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={5} align="right" alignSelf="center">
                  <Typography variant="body1">Section Name :</Typography>
                </Grid>
                <Grid item xs={7}>
                  <TextField
                    fullWidth
                    size="small"
                    name="sectionName"
                    placeholder="Section Name"
                    value={datainedit.sectionName}
                    onChange={handleChangeEdit}
                  />
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="center"
                style={{ marginTop: "2rem", gap: "20px" }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  onClick={handleCloseEdit}
                >
                  Cancel
                </Button>
                <Button
                  onClick={(e) => EditSection(e, datainedit._id, datainedit.sectionName)}
                  variant="contained"
                  sx={{ ml: 1 }}
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>

      {/* <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Grid
        container
        spacing={2}
        sx={{ mb: 2 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Grid item sx={{ width: "25%" }}>
          <Grid item sx={{ minWidth: "180px", marginRight: "370px" }}>
            <TextField fullWidth size="small" label="Search Section" placeholder="Search Section" />
          </Grid>
        </Grid>

        <Grid item sx={{ width: { sm: "8rem", md: "10rem" } }} alignSelf="end">
          <Button variant="contained" fullWidth onClick={handleOpen}>
            Add Section
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
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
      <TableContainer >

        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1000 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth,
                    }}
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {console.log(rows)}
              {rows &&
                rows?.data.map((row, id) => (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.sectionName}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="View" placement="top">
                        <IconButton
                          onClick={(e) => {
                            // seteditid(id);
                            handleOpenEdit(row);
                          }}
                          size="small"
                          color="primary"
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton
                          onClick={(e) => handleRemove(e, row._id)}
                          size="small"
                          sx={{ color: "error.main" }}
                        >
                          <DeleteIcon color="error"/>
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))}
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
export default AddTableSection;
