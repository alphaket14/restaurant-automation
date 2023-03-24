import React, { useState } from "react";
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

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Tax", minWidth: 50, maxWidth: 100 },
    { label: "Name", minWidth: 50, maxWidth: 100 },
    { label: "Value", minWidth: 100, maxWidth: 120 },
    { label: "Type", minWidth: 100, maxWidth: 120 },
    { label: "Order Type", minWidth: 100, maxWidth: 120 },
    { label: "Description", minWidth: 100, maxWidth: 120 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (tax, name, value, type, orderType, desc) => {
    return { tax, name, value, type, orderType, desc };
  };

  const rows = [createData("Tax", "name", "5.5%", "Exclusive", "Dine In", "Description")];

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
  const offers = ["All", "Dine In", "Delivery", "Pickup"];
  const [offer, setOffer] = React.useState([]);

  const offerChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOffer(typeof value === "string" ? value.split(",") : value);
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
            <Typography sx={{ width: "100%", textAlign: "center", mb: 2 }} variant="h5">
              Add Tax
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Internal Name :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" placeholder="Name" />
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
                  <TextField fullWidth size="small" label="Name" placeholder="Name" />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Description :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" label="Description" placeholder="Description..." />
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Value :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth label="Value" placeholder="Value" size="small" />
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
                <InputLabel id="select-type">Value</InputLabel>
                <Select
                  labelId="select-type"
                  label="Value"
                  id="select-type"
                  // size="small"
                  value={value}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {values.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={value.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}  
                </Select>
              </FormControl>
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
                  value={offer}
                  onChange={offerChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {offers.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={offer.indexOf(name) > -1} />
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
                  value={type}
                  onChange={typeChangeHandler}
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
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1" label="State">State :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth placeholder="State" label="State" size="small" />
                </Grid>
              </Grid>

              <Grid item container justifyContent="right">
                <Button variant="outlined" color="error" onClick={closeModalHandler}>
                  Cancel
                </Button>
                <Button variant="contained" sx={{ ml: 1 }}>
                  Save
                </Button>
              </Grid>
            </Grid>
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
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
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
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.tax}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.value}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.orderType}</TableCell>
                    <TableCell align="center">{row.desc}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton color="primary" size="small" onClick={openModalHandler}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small">
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
