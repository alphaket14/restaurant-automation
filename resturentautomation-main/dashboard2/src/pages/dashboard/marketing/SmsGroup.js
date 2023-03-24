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
  TablePagination
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

const SmsGroup = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Name", minWidth: 50, maxWidth: 100 },
    { label: "Contacts", minWidth: 100, maxWidth: 120 },
    { label: "Status", minWidth: 100, maxWidth: 120 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (name, contacts, status) => {
    return { name, contacts, status };
  };

  const rows = [createData("Name", 5, "ACTIVE")];

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
              Edit Group
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Name :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" placeholder="Name" />
                </Grid>
              </Grid>

              <Grid item container spacing={2}>
                <Grid item xs={3} alignSelf="center" align="right">
                  <Typography variant="body1">Status :</Typography>
                </Grid>
                <Grid item xs={9}>
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
      <Grid container sx={{ mb: 2 }} spacing={2}>
        <Grid item xs={2}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">Total Groups</Typography>
            <Typography variant="body1">{rows.length}</Typography>
          </Paper>
        </Grid>
      </Grid>
      {/* <Typography variant="h5" gutterBottom>
        SMS Groups
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
          Add Group
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
                    <TableCell align="center">{row.name}</TableCell>

                    <TableCell align="center">{row.contacts}</TableCell>
                    <TableCell align="center">
                      {row.status=="ACTIVE"? 
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      :
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      }
                      </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton color="primary" size="small" onClick={openModalHandler}>
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="View" placement="top">
                        <IconButton
                          color="secondary"
                          size="small"
                          onClick={() =>
                            navigate("/dashboard/marketing/smssetting/sms-group/view-sms-group")
                          }
                        >
                          <Visibility />
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
export default SmsGroup;
