import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Modal,
  Backdrop,
  Fade,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  TablePagination
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";

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

const OrderType = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Order Type", minWidth: 50, maxWidth: 100 },
    { label: "Payment", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 80, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (orderType, payment, status) => {
    return { orderType, payment, status };
  };

  const rows = [createData("Zomato", "Online", "ACTIVE")];

  const [status, setStatus] = useState(rows[0].status);

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
              Edit Order Type
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={4} align="right" alignSelf="center">
                  <Typography variant="body1">Order Type :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small">
                    <MenuItem>Dine In</MenuItem>
                    <MenuItem>Delivery</MenuItem>
                    <MenuItem>Pick Up</MenuItem>
                  </Select>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Payment :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <FormControl>
                    <RadioGroup row>
                      <FormControlLabel control={<Radio />} label="Offline" />
                      <FormControlLabel control={<Radio />} label="Online" />
                    </RadioGroup>
                  </FormControl>
                </Grid>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={4} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small">
                    <MenuItem>ACTIVE</MenuItem>
                    <MenuItem>INACTIVE</MenuItem>
                  </Select>
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
        Order Type
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
                    <TableCell align="center">{row.orderType}</TableCell>
                    <TableCell align="center">{row.payment}</TableCell>
                    <TableCell align="center">
                     {row.status==="ACTIVE"?<Button
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
                      <Tooltip title="Edit" placement="left" onClick={openModalHandler}>
                        <IconButton color="primary" size="small">
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
export default OrderType;
