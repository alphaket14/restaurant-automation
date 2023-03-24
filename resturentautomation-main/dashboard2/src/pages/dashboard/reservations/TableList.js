import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Typography,
  Box,
  TextField,
  Tooltip,
  Paper,
  Modal,
  Backdrop,
  Fade,
  Select,
  MenuItem,
  TablePagination
} from "@mui/material";
import { makeStyles, TableContainer } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Scrollbar from "src/components/Scrollbar";
import axios from 'axios';
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

const TableList = (props) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    borderRadius: "12px",
    backgroundColor: "#212B36",
  };
  const navigate = useNavigate();
  const classes = useStyles();

  const [rows, setrowstoadd] = useState("");
  const [secData, setSecData] = useState("");
  //For Loading the Tables Data
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/table')
      const section_data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/section')

      // const array = Object.values(section_data.data);

      console.log("sections:",section_data)
      console.log("tables:",data)
      setSecData(section_data)
      
      setrowstoadd(data);
    };
    fetchdata();
  }, [])

  // useEffect(() => {
  //   const fetchdata = async () => {
  //     const data = await axios.get('http://localhost:5000/section/')
  //     console.log("sections:",data)
  //     setrowstoadd(data);
  //   };
  //   fetchdata();
  // }, [])


  const columns = [
    { label: "Sr. No.", minWidth: 100, maxWidth: 150 },
    { label: "Section", minWidth: 200, maxWidth: 300 },
    { label: "Table No.", minWidth: 200, maxWidth: 300 },
    { label: "Capacity", minWidth: 150, maxWidth: 250 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Icon", minWidth: 100, maxWidth: 100 },
    { label: "Action", minWidth: 200, maxWidth: 250 },
  ];

  const createData = (tableNo, section, capacity, status, icon) => {
    return { section, tableNo, capacity, status, icon };
  };


  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };


  // Add New Section 
  function submit(e){
    e.preventDefault();
    
    axios.post('http://localhost:5000/table/add', {
      section: newdata.section,
      tableNo: newdata.tableNo,
      capacity: newdata.capacity,
      status: newdata.status,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/table/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
    handleClose();
  }
///////

  const initialdata = {
    section: "",
    tableNo: "",
    capacity: "",
    status: "",
    icon: "",
  };
  const [newdata, setnewdata] = useState(initialdata);
  const handleChange = (e) => {
    e.preventDefault();
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
    console.log(newdata);
  };
  const sections1 = ["Garden", "Ac", "Non Ac"];
  const status1 = ["Vacant", "Booked", "Order Accepted", "Payment Due"];
  // useEffect(() => {
  //   const rows = JSON.parse(localStorage.getItem("sectionbox"));
  //   console.log(sections1);
  // }, []);

  const addNewtable = () => {
    console.log(newdata);
    const datatoadd = createData(
      newdata.section,
      newdata.tableNo,
      newdata.capacity,
      newdata.status,
      newdata.icon
    );
    setrowstoadd([...rows, datatoadd]);
    console.log(rows);
    setnewdata(initialdata);
    closeModalHandler();
  };
  const handleRemove = (e, id) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/table/delete/${id}`).then(() => console.log('Section deleted.'))
    .catch(err => console.log('Error: ' + err));
    const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/table/')
      console.log("tables:",data)
      setrowstoadd(data);
    };
    fetchdata();
  };
  const [openEdit, setOpenEdit] = useState(false);
  const [editid, seteditid] = useState();

  const [datainedit, setdatainedit] = useState();
  const handleChangeEdit = (e) => {
    e.preventDefault();
    setdatainedit({ ...datainedit, [e.target.name]: e.target.value });
  };

  const [open, setOpen] = useState(false);

  const handleClose = () => setOpen(false);

  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = (e) => {
    setdatainedit(e);
    setOpenEdit(true);
  };

  const EditTable = (e, tabledata) => {
    e.preventDefault();
    // console.log(id);
    axios.post(`http://localhost:5000/table/update/${tabledata._id}`, {
      section: tabledata.section,
      tableNo: tabledata.tableNo,
      capacity: tabledata.capacity,
      status: tabledata.status,
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
     const fetchdata = async () => {
      const data = await axios.get('http://localhost:5000/table/')
      console.log("sections:",data)
      setrowstoadd(data);
    };
    fetchdata();
    // handleClose()
    handleCloseEdit();
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
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography
              sx={{ width: "100%", textAlign: "center", mb: 2 }}
              variant="h5"
            >
              Add Table
            </Typography>

            <Grid container direction="column" rowSpacing={2}>
              {/* <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Section :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField fullWidth size="small"  />

                  <Select
                    name="section"
                    fullWidth
                    size="small"
                    value={newdata.section}
                    onChange={handleChange}
                  >
                    {sections1 &&
                      sections1.map((item) => {
                        return (
                          <MenuItem value={item}>
                            <Checkbox {...label} />
                            {item}
                          </MenuItem>
                        );
                      })}
                  </Select>
                </Grid>
              </Grid> */}
              {/* select code starts */}
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Section :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="section"
                    fullWidth
                    size="small"
                    value={newdata.section}
                    onChange={handleChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected}
                  >
                     {secData && secData?.data.map((name) => (
                      <MenuItem key={name.sectionName} value={name.sectionName}>
                        <Checkbox />
                        <ListItemText primary={name.sectionName} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              {/* select code ends */}
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Table No. :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Table No."
                    size="small"
                    name="tableNo"
                    value={newdata.tableNo}
                    placeholder="Table No."
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Capacity :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    label="Capacity"
                    size="small"
                    name="capacity"
                    value={newdata.capacity}
                    placeholder="Capacity"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <TextField fullWidth size="small"  /> */}
                  <Select
                    name="status"
                    fullWidth
                    size="small"
                    value={newdata.status}
                    onChange={handleChange}
                    renderValue={(selected) => selected}
                  >
                    {status1.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox />
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Table Icon :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="icon"
                    fullWidth
                    size="small"
                    value={newdata.icon}
                    onChange={handleChange}
                  >
                    <MenuItem value={"Icon 1"}>
                      <img
                        width={"40px"}
                        height={"40px"}
                        src="https://i.ibb.co/YRvZLPG/download.jpg"
                        alt=""
                      />
                    </MenuItem>
                    <MenuItem value={"Icon 2"}>
                      <img
                        width={"40px"}
                        height={"40px"}
                        src="https://i.ibb.co/d0Lf99B/istockphoto-1145493140-612x612.jpg"
                      />
                    </MenuItem>
                  </Select>
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
                  onClick={closeModalHandler}
                >
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
        </Fade>
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
            Edit Table
          </Typography>
          {datainedit && (
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Section :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="section"
                    fullWidth
                    size="small"
                    value={datainedit.section}
                    onChange={handleChangeEdit}
                    renderValue={(selected) => selected}
                  >
                    {secData?.data.map((name) => (
                      <MenuItem key={name.sectionName} value={name.sectionName}>
                        <Checkbox />
                        <ListItemText primary={name.sectionName} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Table No. :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    name="tableNo"
                    value={datainedit.tableNo}
                    placeholder="Table No."
                    onChange={handleChangeEdit}
                  />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Capacity :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    name="capacity"
                    value={datainedit.capacity}
                    placeholder="Capacity"
                    onChange={handleChangeEdit}
                  />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  {/* <TextField fullWidth size="small"  /> */}
                  <Select
                    name="status"
                    fullWidth
                    size="small"
                    value={datainedit.status}
                    onChange={handleChangeEdit}
                    renderValue={(selected) => selected}
                  >
                    {status1.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox />
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Table Icon :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="icon"
                    fullWidth
                    size="small"
                    value={datainedit.icon}
                    onChange={handleChangeEdit}
                  >
                    <MenuItem value={"Icon 1"}>Icon 1</MenuItem>
                    <MenuItem value={"Icon 2"}>Icon 2</MenuItem>
                  </Select>
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
                <Button onClick={(e)=>EditTable(e,datainedit)} variant="contained" sx={{ ml: 1 }}>
                  Save
                </Button>
              </Grid>
            </Grid>
          )}
        </Box>
      </Modal>

      <Typography variant="h5" gutterBottom>
        {/* Table List */}
      </Typography>
      {/* <Box
        sx={{
          width: "100%",
          display: "flex",
          flexWrap: "nowrap",

          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            width: "70%",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <Paper
            elevation={6}
            sx={{
              width: "6rem",
              py: 1,
              px: 2,
              gap: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(51,102,255,0.5)",
            }}
          >
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              Garden
            </Typography>
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              20
            </Typography>
          </Paper>
          <Paper
            elevation={6}
            sx={{
              width: "6rem",
              py: 1,
              gap: "10px",
              px: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(51,102,255,0.5)",
            }}
          >
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              Garden
            </Typography>
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              20
            </Typography>
          </Paper>
          <Paper
            elevation={6}
            sx={{
              width: "6rem",
              py: 1,
              gap: "10px",
              px: 2,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(51,102,255,0.5)",
            }}
          >
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              Garden
            </Typography>
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              20
            </Typography>
          </Paper>
          <Paper
            elevation={6}
            sx={{
              width: "6rem",
              py: 1,
              px: 2,
              gap: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(51,102,255,0.5)",
            }}
          >
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              Garden
            </Typography>
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              20
            </Typography>
          </Paper>
          <Paper
            elevation={6}
            sx={{
              width: "6rem",
              py: 1,
              px: 2,
              gap: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              bgcolor: "rgba(51,102,255,0.5)",
            }}
          >
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              Garden
            </Typography>
            <Typography style={{ fontSize: "0.95rem" }} variant="h6">
              20
            </Typography>
          </Paper>
        </div>
      </Box> */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
          marginTop: "1rem",
        }}
      >
        <div
          style={{
            width: "56%",
          }}
        >
          <Grid item sx={{ minWidth: "180px", marginRight: "370px" }}>
            <TextField label="Search"fullWidth size="small" placeholder="Search" />
          </Grid>
        </div>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          {/* <Button
            sx={{ mr: 1 }}
            variant="outlined"
            onClick={() =>
              navigate("/dashboard/setting/manage-table/add-section")
            }
            >
            Add Section
          </Button> */}
          <Button sx={{ height: "2.5rem", mr:2 }} variant="contained">
            Total : {rows ? rows?.data.length: 1}
          </Button>
          <Button variant="contained" onClick={openModalHandler}>
            Add Table
          </Button>
        </Box>
      </Box>
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
        <Table size="small" sx={{ minWidth: 1300 }}aria-label="simple table">
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    align="center"
                    style={{
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
            {console.log(rows.length)}
            {rows && rows?.data.map((row, id) => {
              console.log(rows);
              return (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.section}</TableCell>
                  <TableCell align="center">{row.tableNo}</TableCell>
                  <TableCell align="center">{row.capacity}</TableCell>
                  <TableCell align="center">
                  {
                      row.status==='Vacant'?<Button
                      size="small"
                      variant="outlined"
                      style={{ backgroundColor: "#000", color: "#fff" }}
                    >
                      {row.status}
                    </Button>:row.status==='Booked'?<Button
                      size="small"
                      color="secondary"
                      variant="outlined"
                    >
                      {row.status}
                    </Button>:row.status==='Order Accepted'?<Button
                      color="primary"
                      size="small"
                      variant="outlined"
                    >
                      {row.status}
                    </Button>:
                    <Button
                    color="error"
                    size="small"
                    variant="outlined"
                  >
                    {row.status}
                  </Button>
                    }
                  </TableCell>

                  <TableCell align="center">
                    <img style={{ height: 50, width: 50 }} />
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => {
                          // seteditid(id);

                          handleOpenEdit(row);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton
                        onClick={(e) => handleRemove(e,row._id)}
                        size="small"
                        sx={{ color: "error.main" }}
                      >
                        <DeleteIcon color="error"/>
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

// function EditModal(data) {
//   return (
//     <Modal
//       open={openModal}
//       onClose={closeModalHandler}
//       closeAfterTransition
//       BackdropComponent={Backdrop}
//     >
//       <Fade in={openModal}>
//         <Box className={classes.modal}>
//           <Typography
//             sx={{ width: "100%", textAlign: "center", mb: 2 }}
//             variant="h5"
//           >
//             Edit Table
//           </Typography>
//           <Grid container direction="column" rowSpacing={2}>
//             <Grid item container spacing={2}>
//               <Grid item xs={4} align="right" alignSelf="center">
//                 <Typography variant="body1">Table No. :</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   fullWidth
//                   size="small"
//                   name="tableNo"
//                   value={newdata.tableNo}
//                   placeholder="Table No."
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>
//             <Grid item container spacing={2}>
//               <Grid item xs={4} alignSelf="center" align="right">
//                 <Typography variant="body1">Capacity :</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <TextField
//                   fullWidth
//                   size="small"
//                   name="capacity"
//                   value={newdata.capacity}
//                   placeholder="Capacity"
//                   onChange={handleChange}
//                 />
//               </Grid>
//             </Grid>

//             <Grid item container spacing={2}>
//               <Grid item xs={4} alignSelf="center" align="right">
//                 <Typography variant="body1">Status :</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 {/* <TextField fullWidth size="small"  /> */}
//                 <Select
//                   name="status"
//                   fullWidth
//                   size="small"
//                   value={newdata.status}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={"Enabled"}>Enabled</MenuItem>;
//                   <MenuItem value={"Disabled"}>Disabled</MenuItem>;
//                 </Select>
//               </Grid>
//             </Grid>
//             <Grid item container spacing={2}>
//               <Grid item xs={4} alignSelf="center" align="right">
//                 <Typography variant="body1">Section :</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 {/* <TextField fullWidth size="small"  /> */}
//                 <Select
//                   name="section"
//                   fullWidth
//                   size="small"
//                   value={newdata.section}
//                   onChange={handleChange}
//                 >
//                   {sections.map((item) => {
//                     return <MenuItem value={item}>{item}</MenuItem>;
//                   })}
//                 </Select>
//               </Grid>
//             </Grid>
//             <Grid item container spacing={2}>
//               <Grid item xs={4} alignSelf="center" align="right">
//                 <Typography variant="body1">Table Icon :</Typography>
//               </Grid>
//               <Grid item xs={8}>
//                 <Select
//                   name="icon"
//                   fullWidth
//                   size="small"
//                   value={newdata.icon}
//                   onChange={handleChange}
//                 >
//                   <MenuItem value={"Icon 1"}>Icon 1</MenuItem>
//                   <MenuItem value={"Icon 2"}>Icon 2</MenuItem>
//                 </Select>
//               </Grid>
//             </Grid>

//             <Grid item container justifyContent="right">
//               <Button
//                 variant="outlined"
//                 color="error"
//                 onClick={closeModalHandler}
//               >
//                 Cancel
//               </Button>
//               <Button onClick={addNewtable} variant="contained" sx={{ ml: 1 }}>
//                 Save
//               </Button>
//             </Grid>
//           </Grid>
//         </Box>
//       </Fade>
//     </Modal>
//   );
// }
export default TableList;
