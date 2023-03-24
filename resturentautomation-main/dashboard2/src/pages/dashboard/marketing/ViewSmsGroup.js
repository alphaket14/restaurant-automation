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
  Grid
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

const ViewSmsGroup = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Phone No.", minWidth: 100, maxWidth: 200 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (phone) => {
    return { phone };
  };

  const rows = [createData("+91456123451"), createData("+91456123451")];

  const [openModal, setOpenModal] = useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
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
              Add Contact
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={2}>
                <Grid item xs={3} align="right" alignSelf="center">
                  <Typography variant="body1">Phone No. :</Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField fullWidth size="small" placeholder="Phone" />
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
      <Typography variant="h5" gutterBottom>
        Group (Group Name)
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
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
          Add Contact
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
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">
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
      </Grid>
    </>
  );
};
export default ViewSmsGroup;
