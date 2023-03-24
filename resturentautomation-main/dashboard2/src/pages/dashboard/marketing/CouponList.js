import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Fade,
  Backdrop,
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
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
  TablePagination
} from "@mui/material";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "../../../components/Scrollbar";

import { makeStyles } from "@material-ui/core";
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

const CouponList = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Title", minWidth: 50, maxWidth: 100 },
    { label: "Code", minWidth: 50, maxWidth: 100 },
    { label: "Type", minWidth: 50, maxWidth: 100 },
    { label: "Uses Count", minWidth: 50, maxWidth: 100 },
    {
      label: "Min Purchase",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Max Discount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    {
      label: "Discount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    { label: "Discount Type", minWidth: 50, maxWidth: 100 },
    { label: "Start Date", minWidth: 50, maxWidth: 100 },
    { label: "Expire Date", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (
    title,
    code,
    type,
    useCount,
    minPurchase,
    maxDisc,
    disc,
    discType,
    startDate,
    expiryDate,
    status
  ) => {
    return {
      title,
      code,
      type,
      useCount,
      minPurchase,
      maxDisc,
      disc,
      discType,
      startDate,
      expiryDate,
      status,
    };
  };

  const rows = [
    createData(
      "Title",
      "Code",
      "Dine In",
      10,
      1000,
      500,
      100,
      "Amount",
      "28-06-2022",
      "30-06-2022",
      "ACTIVE"
    ),
  ];
  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());


  
  const selections = [
   'Percent',
   'Amount'
  ];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const orders = [
    'Dine In',
    'Delivery',
    'Pickup'
  ];
  const [order, setOrder] = React.useState([]);

  const orderChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setOrder(
      typeof value === 'string' ? value.split(',') : value,
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
            <Grid container>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Add Coupon
              </Typography>
              <Divider sx={{ mb: 2, width: "100%" }} />
              <Grid item container rowSpacing={2} direction="column">
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Title
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      placeholder="Title"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Order Type
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Order Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Order Type"
                  id="select-type"
                  value={order}
                  onChange={orderChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {orders.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={order.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Coupon Code
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      placeholder="Code"
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Limit For Same User
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      placeholder="Limit"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Start Date
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                  <DatePicker
                inputFormat="dd/MM/yyyy"
                value={startDate}
                onChange={(newValue) => {
                  SetStartDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="From"
                    sx={{ width: "100%", float: "right" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Expiry Date
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                  <DatePicker
                inputFormat="dd/MM/yyyy"
                value={endDate}
                onChange={(newValue) => {
                  SetEndDate(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="To"
                    sx={{ width: "100%", float: "right", marginLeft: "10px" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Discount Type
                    </Typography>
                  </Grid>
                  <Grid xs={8}> 
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Discount Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Discount Type"
                  id="select-type"
                  value={type}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {selections.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={type.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Discount
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField label="Discount" fullWidth size="small" type="text" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Max Discount
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField label="Max Discount" fullWidth size="small" type="text" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Min Purchase
                    </Typography>
                  </Grid>
                  <Grid xs={8}>  
                    <TextField label="Min Purchase" fullWidth size="small" type="text" />
                  </Grid>
                </Grid>
                
                <Grid item container justifyContent="flex-end">
                <Grid item>
                  <Button
                    variant="outlined"
                    size="small"
                    sx={{ marginRight: 1 }}
                  >
                    Reset
                  </Button>
                  <Button variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>

              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* <Typography variant="h5" gutterBottom>
        Coupons List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
        <Button
          variant="contained"
          startIcon={<Add />}
          // onClick={() => navigate("/dashboard/marketing/coupon-setting/add-coupon")}
          onClick={openModalHandler}
        >
          Add Coupon
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
          <Table size="small"  sx={{ minWidth: 1650 }}>
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
                      {column.label} {column.endIcon && <>({column.endIcon})</>}
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
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell align="center">{row.code}</TableCell>
                    <TableCell align="center">{row.type}</TableCell>
                    <TableCell align="center">{row.useCount}</TableCell>
                    <TableCell align="center"><CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.minPurchase}</TableCell>
                    <TableCell align="center"><CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.maxDisc}</TableCell>
                    <TableCell align="center"><CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />{row.disc}</TableCell>
                    <TableCell align="center">{row.discType}</TableCell>
                    <TableCell align="center">{row.startDate}</TableCell>
                    <TableCell align="center">{row.expiryDate}</TableCell>
                    <TableCell align="center">{row.status == "ACTIVE" ? (
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      ) : (
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      )}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={openModalHandler}
                        >
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
export default CouponList;
