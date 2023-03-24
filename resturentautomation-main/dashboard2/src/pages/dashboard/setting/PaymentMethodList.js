import React, { useState } from "react";
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
  FormGroup,
  FormControlLabel,
  Checkbox,
  Radio,
  RadioGroup,
  FormControl,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Visibility } from "@mui/icons-material";
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
    padding: "20px 30px",
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const PaymentMode = (props) => {
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Payment Mode", minWidth: 200, maxWidth: 300 },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (paymentMethod, status) => {
    return { paymentMethod, status };
  };

  const rows = [createData("Credit Card", "ACTIVE")];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [status, setStatus] = useState(rows[0].status);
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
              Payment Setting
            </Typography>
            <Typography variant="body1" gutterBottom>
              Order Type
            </Typography>
            <FormControl sx={{ mb: 1 }}>
              <RadioGroup row>
                <FormControlLabel control={<Radio />} label="Offline" />
                <FormControlLabel control={<Radio />} label="Online" />
              </RadioGroup>
            </FormControl>
            <Select fullWidth size="small">
              <MenuItem>Zomato</MenuItem>
              <MenuItem>Swiggy</MenuItem>
            </Select>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" gutterBottom>
              Payment Mode
            </Typography>
            <FormControl sx={{ mb: 1 }}>
              <RadioGroup row>
                <FormControlLabel control={<Radio />} label="Cash" />
                <FormControlLabel control={<Radio />} label="Card" />
                <FormControlLabel control={<Radio />} label="Online" />
              </RadioGroup>
            </FormControl>
            <Select fullWidth size="small">
              <MenuItem>PayTM</MenuItem>
              <MenuItem>GPay</MenuItem>
            </Select>
            <Divider sx={{ my: 1 }} />
            <Typography variant="body1" gutterBottom>
              Bill Status
            </Typography>
            <FormControl sx={{ mb: 1 }}>
              <RadioGroup row>
                <FormControlLabel control={<Radio />} label="Cancelled" />
                <FormControlLabel control={<Radio />} label="Free" />
              </RadioGroup>
            </FormControl>
            <TextField fullWidth size="small" placeholder="Comment" />
            <Grid container direction="column" sx={{ mt: 1 }}>
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
      <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 1 }}>
        {/* <Typography variant="h5">Payment Mode</Typography> */}
        <Button variant="contained" onClick={openModalHandler}>
          Add Payment
        </Button>
      </Box>
      {/* <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="end"
            label="Enable Pre-payment"
          />
          <FormControlLabel
            control={<Checkbox />}
            labelPlacement="end"
            label="Enable Post-payment"
          />
        </FormGroup>
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
          <Table size="small" sx={{ minWidth: 1000 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.paymentMethod}</TableCell>
                  <TableCell align="center">
                    {/* <Select
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      fullWidth
                      size="small"
                    >
                      <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                      <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                    </Select> */}
                    {row.status == "ACTIVE" ? (
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
                      <IconButton size="small" color="primary" onClick={openModalHandler}>
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
export default PaymentMode;
