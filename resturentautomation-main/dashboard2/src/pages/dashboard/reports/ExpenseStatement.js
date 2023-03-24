import React,{useState} from "react";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../../../components/TableTemplate";

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
  TablePagination,
  InputLabel,
  FormControl,
  Checkbox,
  ListItemText,
  InputAdornment,
  Modal,
  Backdrop,
  Fade
} from "@mui/material";
import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Add } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    //width: 700,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));
const ExpenseStatement = (props) => {
  const classes = useStyles();

  const navigate = useNavigate();
  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 50 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Category", minWidth: 50, maxWidth: 100 },
    { label: "Expense Item", minWidth: 50, maxWidth: 100 },
    { label: "Payment Type", minWidth: 50, maxWidth: 100 },
    { label: "Note", minWidth: 50, maxWidth: 100 },
    { label: "Added By", minWidth: 50, maxWidth: 100 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createRows = (
    refNo,
    date,
    category,
    expenseItem,
    paymentType,
    amount,
    note,
    addedBy
  ) => ({
    refNo,
    date,
    category,
    expenseItem,
    paymentType,
    amount,
    note,
    addedBy,
  });

  const rows = [
    createRows(
      1,
      "16-06-2022",
      "Category",
      "Item",
      "Credit Card",
      1000,
      "Note text",
      "Person"
    ),
  ];

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

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const selections = ["Item 1", "Item 2", "Item 3"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  const category = ["Category 1", "Category 2", "Category 3"];
  const [cat, setCat] = React.useState([]);

  const catChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setCat(typeof value === "string" ? value.split(",") : value);
  };

  const payments = ["Cash On Delivery", "Credit Card", "Debit Card"];
  const [pay, setPay] = React.useState([]);

  const payChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setPay(typeof value === "string" ? value.split(",") : value);
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
          <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={12}sx={{mb:2}} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Category :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Category</InputLabel>
                <Select
                  labelId="select-type"
                  label="Category"
                  id="select-type"
                  // size="small"
                  value={cat}
                  onChange={catChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {category.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={cat.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                  
                </Select>
              </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Expense Item :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">List Items</InputLabel>
                <Select
                  labelId="select-type"
                  label="List Items"
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

            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Payment Type :</Typography>
              </Grid>
              <Grid item xs={8}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "100%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Payment Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Payment Type"
                  id="select-type"
                  // size="small"
                  value={pay}
                  onChange={payChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {payments.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={pay.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                
                </Select>
              </FormControl>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Added By :</Typography>
              </Grid>
              <Grid item xs={8}>
              <TextField
                  fullWidth
                  size="small"
                  label="Name"
                  placeholder="Name"
                  multiline
                 
                />
                </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={12}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right" alignSelf="center">
                <Typography variant="body1">Amount :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  size="small"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <CurrencyRupee fontSize="small" />
                      </InputAdornment>
                    )
                  }}
                />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                <Typography variant="body1">Note :</Typography>
              </Grid>
              <Grid item xs={8}>
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Note"
                  label="Note"
                  multiline
                  rows={3}
                  maxRows={5}
                />
              </Grid>
            </Grid>

            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="outlined">Reset</Button>
              </Grid>
              <Grid item>
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
          </Box>
        </Fade>
      </Modal>



      {/* <Typography variant="h5" gutterBottom>
        Customer List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}

        <TextField size="small" label="Search" sx={{ width: "20%",mb:2 }} />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
         
          sx={{ float:"right",mb:2 }}
        >
          Add Expense
        </Button>
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
          <Table size="small"sx={{ minWidth: 1500 }}>
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
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{row.refNo}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.category}</TableCell>
                  <TableCell align="center">{row.expenseItem}</TableCell>
                  <TableCell align="center">{row.paymentType}</TableCell>
                  <TableCell align="center">{row.note}</TableCell>
                  <TableCell align="center">{row.addedBy}</TableCell>
                  <TableCell align="center">
                    {" "}
                    <CurrencyRupee
                      fontSize="small"
                      style={{ color: "gray", marginRight: "5px" }}
                    />
                    {row.amount}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={openModalHandler}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton size="small" sx={{ color: "error.main" }}>
                        <Delete />
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
export default ExpenseStatement;
