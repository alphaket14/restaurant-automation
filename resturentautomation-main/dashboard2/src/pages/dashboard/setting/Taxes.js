import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Box,
  Paper,
  Table,
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
  TableContainer,
  InputAdornment,
  Modal,
  Fade,
  Backdrop,
  Grid,
  TablePagination,
  InputLabel,Checkbox,
  ListItemText,FormControl
} from "@mui/material";
import { Edit, Delete, CurrencyRupee, Visibility, Add } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";

import { makeStyles } from "@material-ui/core";
import axios from "axios";
import SearchBar from "material-ui-search-bar";

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

const TaxAndCharge = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();


  const initialdata = {
    tax:"", 
    menu: [],
    order_type :[],
    value_type:"",
    value:"",
    type:"",
    desc: "",
    status: ""
  };
  const [newdata, setnewdata] = useState(initialdata);
  const handleChange = (e) => {
    e.preventDefault();
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
    console.log(newdata);
  };

  const [searched, setSearched] = useState("");

  const requestSearch = (searchedVal) => {
    if(searchedVal !== "")
    {
        const filteredRows = rows?.filter((row) => {
            return row.tax.toLowerCase().includes(searchedVal.toLowerCase());
        });
    setrowstoadd(filteredRows);
    }else{
        const  fetchdata = async () =>{
            const taxes  = await axios.get("https://vast-pink-meerkat-suit.cyclic.app/taxes/");
            console.log(taxes)
            const filteredRows = taxes.data.filter((row) => {
                return row
                });
                setrowstoadd(filteredRows)
            }
            fetchdata();    
    }
  };

  const cancelSearch = () => {
    setSearched("");
    requestSearch(searched);
    const  fetchdata = async () =>{
    const taxes  = await axios.get("https://vast-pink-meerkat-suit.cyclic.app/taxes/");
    console.log(taxes)
    const filteredRows = taxes.data.filter((row) => {
        return row
        });
        setrowstoadd(filteredRows)
    }
    fetchdata();    
  };

  useEffect(()=>{
   const  fetchdata = async () =>{
        const taxes  = await axios.get("https://vast-pink-meerkat-suit.cyclic.app/taxes/");
        console.log(taxes)
        const filteredRows = taxes.data.filter((row) => {
            return row
          });
        setrowstoadd(filteredRows)
    }
    fetchdata();
  },[])  

  const columns = [
    { label: "Sr. No.", minWidth: 70, maxWidth: 100 },
    { label: "Name", minWidth: 50, maxWidth: 100 },
    { label: "Menu", minWidth: 50, maxWidth: 100 },
    { label: "Order Type", minWidth: 100, maxWidth: 120 },
    { label: "Value Type", minWidth: 100, maxWidth: 120 },
    { label: "Value", minWidth: 100, maxWidth: 120 },
    { label: "Type", minWidth: 100, maxWidth: 120 },
    { label: "Description", minWidth: 120, maxWidth: 150 },
    { label: "Status", minWidth: 100, maxWidth: 120 },
    { label: "Actions", minWidth: 100, maxWidth: 120 },
  ];

  const createData = (tax, menu, order_type, value_type, value, type, desc, status) => {
    return { tax, menu, order_type, value_type, value, type, desc,  status};
  };

  const [rows, setrowstoadd] = useState("");


//   const rows = [createData("Tax", "MENU", "Order Type", "Value Type ", "value", "type", "Decription", "Active")];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };
  const values = ["Percentage", "Fixed"];
  const [value, setValue] = React.useState([]);

  const valueChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };
  const offers = ["Inclusive", "Exclusive"];
  const [offer, setOffer] = React.useState([]);

  const offerChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOffer(typeof value === "string" ? value.split(",") : value);
  };

  const handleMultipleChange = async(event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    const newOrderType = typeof value === "string" ? value.split(",") : value 
    setnewdata({ ...newdata, [event.target.name]: newOrderType });
    console.log(newdata);
    // setValue(typeof value === "string" ? value.split(",") : value);
  };


  function submit(e){
    e.preventDefault();
    const fetchdata = async () => {
        const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/taxes/')
        console.log("sections:",data)
        const filteredRows = data.data.filter((row) => {
            return row
          });
        setrowstoadd(filteredRows);
    };

    axios.post('https://vast-pink-meerkat-suit.cyclic.app/taxes/add', {
        tax:newdata.tax, 
        menu: newdata.menu,
        order_type : newdata.order_type,
        value_type:newdata.value_type,
        value:newdata.value,
        type:newdata.type,
        desc: newdata.desc,
        status: newdata.status
    })
    .then(res => {console.log(res.data);fetchdata();})
    .catch((error) => {console.log(error);})
   
    
    // handleClose();
  }
  const status1 = ["Active", "Inactive"];


  //edit part
  const [openEdit, setOpenEdit] = useState(false);

  const [datainedit, setdatainedit] = useState();
  const handleChangeEdit = (e) => {
    e.preventDefault();
    setdatainedit({ ...datainedit, [e.target.name]: e.target.value });
  };

  const handleMultipleChangeEdit = async(event) => {
    event.preventDefault();
    const {
      target: { value },
    } = event;
    const newOrderType = typeof value === "string" ? value.split(",") : value 
    setnewdata({ ...newdata, [event.target.name]: newOrderType });
    console.log(newdata);
    // setValue(typeof value === "string" ? value.split(",") : value);
  };


  const handleCloseEdit = () => setOpenEdit(false);
  const handleOpenEdit = (e) => {
    setdatainedit(e);
    setOpenEdit(true);
  };

  const EditTable = (e, tabledata) => {
    e.preventDefault();
    // console.log(id);
    axios.post(`https://vast-pink-meerkat-suit.cyclic.app/taxes/update/${tabledata._id}`, {
        tax:datainedit.tax, 
        menu: datainedit.menu,
        order_type : datainedit.order_type,
        value_type:datainedit.value_type,
        value:datainedit.value,
        type:datainedit.type,
        desc: datainedit.desc,
        status: datainedit.status
    })
    .then(res => console.log(res.data))
    .catch((error) => {console.log(error);})
     const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/taxes')
      const filteredRows = data.data.filter((row) => {
        return row
      });
      console.log("sections:",data)
      setrowstoadd(filteredRows);
    };
    fetchdata();
    // handleClose()
    handleCloseEdit();
  };

  const handleRemove = (e, id) => {
    e.preventDefault();
    axios.delete(`https://vast-pink-meerkat-suit.cyclic.app/taxes/delete/${id}`).then(() => console.log('Taxes deleted.'))
    .catch(err => console.log('Error: ' + err));
    const fetchdata = async () => {
      const data = await axios.get('https://vast-pink-meerkat-suit.cyclic.app/taxes/')
      console.log("Taxes:",data)
      const filteredRows = data.data.filter((row) => {
        return row
      });
      setrowstoadd(filteredRows);
    };
    fetchdata();
  };


  //Split Taxes
  const [openModal3, setOpenModal3] = useState(false);

  const openModalHandler3 = () => {
    setOpenModal3(true);
  };
  const closeModalHandler3 = () => {
    setOpenModal3(false);
  };



  return (
    <>
    {/* Split Tax Modal */}
      <Modal
          open={openModal3}
          onClose={closeModalHandler3}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal3}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Split Taxes
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                {/* <Grid item container>
                  <Grid item xs={4}>
                    <Button  variant="contained" size="small">
                      Add Split
                    </Button>
                  </Grid>
                </Grid> */}
                
                <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">CGST :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" label="CGST" placeholder="Name" name="tax" value={newdata.tax}
                    onChange={handleChange} />
                </Grid>
                </Grid>
                <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">SGST :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" label="SGST" placeholder="Name" name="tax" value={newdata.tax}
                    onChange={handleChange} />
                </Grid>
                </Grid>

                <Grid item container justifyContent="center">
                  <Grid item  >
                    <Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button  variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>



      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography sx={{ width: "100%", textAlign: "center", mb: 2 }} variant="h5">
              Add Tax
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              {/* <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Internal Name :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" placeholder="Name"  />
                  <Typography variant="caption" color="text.secondary">
                    *Only visible to Admin
                  </Typography>
                </Grid>
              </Grid> */}

              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Name :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" label="Name" placeholder="Name" name="tax" value={newdata.tax}
                    onChange={handleChange} />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Menu :</Typography>
                </Grid>
                <Grid item xs={9}>
                <FormControl
                sx={{ width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Menu</InputLabel>
                <Select
                  labelId="select-type"
                  label="Menu"
                  id="select-type"
                  // size="small"
                  name="menu"
                  multiple
                  value={newdata.menu}
                  onChange={handleMultipleChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                 
                </Select>
              </FormControl>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Order Type :</Typography>
                </Grid>
                <Grid item xs={9}>
                <FormControl
                sx={{ width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Order Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Order Type"
                  id="select-type"
                  // size="small"
                  name="order_type"
                  value={newdata.order_type}
                //   onChange={handleChange }
                  multiple
                  onChange={handleMultipleChange}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={newdata.order_type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                 
                </Select>
              </FormControl>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Value Type :</Typography>
                </Grid>
                <Grid item xs={9}>
                <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Value Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Value"
                  id="select-type"
                  // size="small"
                  name="value_type"
                  value={newdata.value_type}
                  onChange={handleChange}
                  renderValue={(selected) => selected}
                >
                  {values.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={newdata.value_type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}  
                </Select>
              </FormControl>
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Value :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth label="Value" placeholder="Value" size="small" value={newdata.value} name="value"
                  onChange={handleChange}
                  />
                </Grid>
              </Grid>
              
              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Type :</Typography>
                </Grid>
                <Grid item xs={9}>
                <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Type"
                  id="select-type"
                  // size="small"
                  name="type"
                  value={newdata.type}
                  onChange={handleChange}
                  renderValue={(selected) => selected}
                >
                  {offers.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={newdata.type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                
                </Select>
              </FormControl>
                </Grid>
              </Grid>
              
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Description :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" label="Description" placeholder="Description..." name="desc" value={newdata.desc}
                  onChange={handleChange}
                  />
                </Grid>
              </Grid>
              
              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={9}>
                  {/* <TextField fullWidth size="small"  /> */}
                  <Select
            
                    label="Status"
                    
                    name="status"
                    fullWidth
                    size="small"
                    value={newdata.status}
                    onChange={handleChange}
                    renderValue={(selected) => selected}
                  >
                    {status1.map((item) => (
                      <MenuItem key={item} value={item}>
                        <Checkbox checked={newdata.status.indexOf(item) > -1}/>
                        <ListItemText primary={item} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>

              <Grid item container justifyContent="right">
              <Button onClick={openModalHandler3}  variant="contained" size="small" sx={{ marginRight: 5 }}>
                Split Tax
              </Button>
                <Button variant="outlined" color="error" onClick={closeModalHandler}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }} onClick={submit}>
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

    {/* Edit Tax Modal */}

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
        <Fade in={openEdit}>
          <Box className={classes.modal}>
          <Typography
            sx={{ width: "100%", textAlign: "center", mb: 2 }}
            variant="h5"
          >
            Edit Tax
          </Typography>
          {datainedit && (
           <Grid container direction="column" rowSpacing={2}>
           <Grid item container spacing={2}>
             <Grid item xs={3} align="right" alignSelf="center">
               <Typography variant="body1">Internal Name :</Typography>
             </Grid>
             <Grid item xs={9}>
               <TextField fullWidth size="small" placeholder="Name"  />
               <Typography variant="caption" color="text.secondary">
                 *Only visible to Admin
               </Typography>
             </Grid>
           </Grid>

           <Grid item container spacing={2}>
             <Grid item xs={3} align="right" alignSelf="center">
               <Typography variant="body1">Name :</Typography>
             </Grid>
             <Grid item xs={9}>
               <TextField fullWidth size="small" label="Name" placeholder="Name" name="tax" value={datainedit.tax}
                 onChange={handleChangeEdit} />
             </Grid>
           </Grid>

           <Grid item container spacing={2}>
             <Grid item xs={3} alignSelf="center" align="right">
               <Typography variant="body1">Menu :</Typography>
             </Grid>
             <Grid item xs={9}>
             <FormControl
             sx={{ width: "100%" ,mb: 2 }}
             size="small"
           >
             <InputLabel id="select-type">Menu</InputLabel>
             <Select
               labelId="select-type"
               label="Menu"
               id="select-type"
               // size="small"
               name="menu"
               multiple
               value={datainedit.menu}
               onChange={handleMultipleChangeEdit}
               renderValue={(selected) => selected.join(", ")}
             >
               {selections.map((name) => (
                 <MenuItem key={name} value={name}>
                   <Checkbox checked={type.indexOf(name) > -1} />
                   <ListItemText primary={name} />
                 </MenuItem>
               ))}

              
             </Select>
           </FormControl>
             </Grid>
           </Grid>

           <Grid item container spacing={2}>
             <Grid item xs={3} alignSelf="center" align="right">
               <Typography variant="body1">Order Type :</Typography>
             </Grid>
             <Grid item xs={9}>
             <FormControl
             sx={{ width: "100%" ,mb: 2 }}
             size="small"
           >
             <InputLabel id="select-type">Order Type</InputLabel>
             <Select
               labelId="select-type"
               label="Order Type"
               id="select-type"
               // size="small"
               name="order_type"
               value={datainedit.order_type}
             //   onChange={handleChangeEdit }
               multiple
               onChange={handleMultipleChangeEdit}
               renderValue={(selected) => selected.join(", ")}
             >
               {selections.map((name) => (
                 <MenuItem key={name} value={name}>
                   <Checkbox checked={datainedit.order_type.indexOf(name) > -1} />
                   <ListItemText primary={name} />
                 </MenuItem>
               ))}

              
             </Select>
           </FormControl>
             </Grid>
           </Grid>

           <Grid item container spacing={2}>
             <Grid item xs={3} alignSelf="center" align="right">
               <Typography variant="body1">Value Type :</Typography>
             </Grid>
             <Grid item xs={9}>
             <FormControl
             sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
             size="small"
           >
             <InputLabel id="select-type">Value Type</InputLabel>
             <Select
               labelId="select-type"
               label="Value"
               id="select-type"
               // size="small"
               name="value_type"
               value={datainedit.value_type}
               onChange={handleChangeEdit}
               renderValue={(selected) => selected}
             >
               {values.map((name) => (
                 <MenuItem key={name} value={name}>
                   <Checkbox checked={datainedit.value_type.indexOf(name) > -1} />
                   <ListItemText primary={name} />
                 </MenuItem>
               ))}  
             </Select>
           </FormControl>
             </Grid>
           </Grid>

           <Grid item container spacing={2}>
             <Grid item xs={3} align="right" alignSelf="center">
               <Typography variant="body1">Value :</Typography>
             </Grid>
             <Grid item xs={9}>
               <TextField fullWidth label="Value" placeholder="Value" size="small" value={datainedit.value} name="value"
               onChange={handleChangeEdit}
               />
             </Grid>
           </Grid>
           
           <Grid item container spacing={2}>
             <Grid item xs={3} alignSelf="center" align="right">
               <Typography variant="body1">Type :</Typography>
             </Grid>
             <Grid item xs={9}>
             <FormControl
             sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
             size="small"
           >
             <InputLabel id="select-type">Type</InputLabel>
             <Select
               labelId="select-type"
               label="Type"
               id="select-type"
               // size="small"
               name="type"
               value={datainedit.type}
               onChange={handleChangeEdit}
               renderValue={(selected) => selected}
             >
               {offers.map((name) => (
                 <MenuItem key={name} value={name}>
                   <Checkbox checked={datainedit.type.indexOf(name) > -1} />
                   <ListItemText primary={name} />
                 </MenuItem>
               ))}

             
             </Select>
           </FormControl>
             </Grid>
           </Grid>
           
           <Grid item container spacing={2}>
             <Grid item xs={3} align="right" alignSelf="center">
               <Typography variant="body1">Description :</Typography>
             </Grid>
             <Grid item xs={9}>
               <TextField fullWidth size="small" label="Description" placeholder="Description..." name="desc" value={datainedit.desc}
               onChange={handleChangeEdit}
               />
             </Grid>
           </Grid>
           
           <Grid item container spacing={2}>
             <Grid item xs={3} alignSelf="center" align="right">
               <Typography variant="body1">Status :</Typography>
             </Grid>
             <Grid item xs={9}>
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
                     <Checkbox checked={datainedit.status.indexOf(item) > -1}/>
                     <ListItemText primary={item} />
                   </MenuItem>
                 ))}
               </Select>
             </Grid>
           </Grid>

           <Grid item container justifyContent="right">
             <Button variant="outlined" color="error" onClick={closeModalHandler}>
               Cancel
             </Button>
             <Button variant="contained" sx={{ ml: 1 }} onClick={(e)=>EditTable(e,datainedit)}>
               Save
             </Button>
           </Grid>
         </Grid>
          )}
        </Box>
        </Fade>
      </Modal>



      
      {/* <Typography variant="h5" gutterBottom>
        Taxes & Charges
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        {/* <TextField sx={{ width: "20%" }} label="Search" size="small"  /> */}
        <SearchBar
          value={searched}
          sx={{ width: "20%" }}
          onChange={(searchVal) => requestSearch(searchVal)}
          onCancelSearch={() => cancelSearch()}
        />
        <Button variant="contained" startIcon={<Add />} onClick={openModalHandler}>
          Add Tax
        </Button>
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
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.label}
                      {column.endIcon && <>({column.endIcon})</>}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows && rows?.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.tax}</TableCell>
                    <TableCell align="center">{row.menu.length !== 1  ? row.menu.map((item)=>`${item}, `): row.menu}</TableCell>
                    <TableCell align="center">{row.order_type.length !== 1  ? row.order_type.map((item)=>`${item}, `): row.order_type }</TableCell>
                    <TableCell align="center">{row.value_type }</TableCell>
                    <TableCell align="center">{row.value_type === 'Fixed'? 
                    <Typography variant="subtitle2"><CurrencyRupee sx={{ fontSize: 16 }} /> {row.value} </Typography>
                    :  <Typography variant="subtitle2">{row.value} %</Typography>}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.desc}</TableCell>
                    <TableCell align="center">
                   {
                        row.status==='Active'?<Button
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
                      <Tooltip title="Edit" placement="left">
                        <IconButton color="primary" size="small" onClick={()=>handleOpenEdit(row)}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small" onClick={(e) => handleRemove(e,row._id)}>
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
export default TaxAndCharge;
