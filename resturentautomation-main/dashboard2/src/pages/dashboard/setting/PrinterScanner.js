import React, { useState } from "react";
import {
  TextField,
  Grid,
  Select,
  MenuItem,
  Box,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Divider,
  Tooltip,
  IconButton,
  Modal,
  Backdrop,
  Fade
} from "@mui/material";
import { Delete, CurrencyRupee, Add } from "@mui/icons-material";
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

const PrinterScanner = (props) => {
  const classes = useStyles();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Select Printer", minWidth: 50, maxWidth: 200 },
    { label: "Section", minWidth: 50, maxWidth: 200 },
    { label: "Select Size", minWidth: 50, maxWidth: 200 },
    { label: "No. of Copies", minWidth: 20, maxWidth: 40 },
    { label: "Status", minWidth: 50, maxWidth: 200 },
    { label: "Actions", minWidth: 20, maxWidth: 60 }
  ];

  const createRows = (status) => ({
    status
  });
  const [rows, setRows] = useState([createRows("ACTIVE")]);

  const [status, setStatus] = useState(rows[0].status);

  const addRows = (status) => {
    const tempArray = [...rows];
    tempArray.push(createRows(status));
    setRows(tempArray);
  };
  const deleteRows = (id) => {
    const tempArray = [...rows];
    const filteredArray = tempArray.filter((row, index) => index !== id);
    setRows(filteredArray);
  };

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
              Add New Section
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
                  Add
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="h5">Printers & Scanners</Typography>
        <Button variant="contained" startIcon={<Add />} onClick={openModalHandler}>
          Add
        </Button>
      </Box>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        Invoice
      </Typography>
      <TableContainer  sx={{ mb: 2 }}>
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                    align="center"
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">
                      <Select value="Printer 1" size="small" fullWidth>
                        <MenuItem>Printer 1</MenuItem>
                        <MenuItem>Printer 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="Section 1" size="small" fullWidth>
                        <MenuItem>Section 1</MenuItem>
                        <MenuItem>Section 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="A5" size="small" fullWidth>
                        <MenuItem>A4</MenuItem>
                        <MenuItem>A5</MenuItem>
                        <MenuItem>58</MenuItem>
                        <MenuItem>80</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <TextField size="small" fullWidth placeholder="no. of copies" />
                    </TableCell>
                    <TableCell align="center">
                      <Select
                        size="small"
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Tooltip placement="top" title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => deleteRows(id)}
                          sx={{ color: "error.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <Button variant="outlined" onClick={() => addRows("ACTIVE")}>
                  Add More Item
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        Quick Bill
      </Typography>
      <TableContainer  sx={{ mb: 2 }}>
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                    align="center"
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">
                      <Select value="Printer 1" size="small" fullWidth>
                        <MenuItem>Printer 1</MenuItem>
                        <MenuItem>Printer 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="Section 1" size="small" fullWidth>
                        <MenuItem>Section 1</MenuItem>
                        <MenuItem>Section 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="A5" size="small" fullWidth>
                        <MenuItem>A4</MenuItem>
                        <MenuItem>A5</MenuItem>
                        <MenuItem>58</MenuItem>
                        <MenuItem>80</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <TextField size="small" fullWidth placeholder="no. of copies" />
                    </TableCell>
                    <TableCell align="center">
                      <Select
                        size="small"
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Tooltip placement="top" title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => deleteRows(id)}
                          sx={{ color: "error.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <Button variant="outlined" onClick={() => addRows("ACTIVE")}>
                  Add More Item
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        Kitchen Order Ticket
      </Typography>
      <TableContainer  sx={{ mb: 2 }}>
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                    align="center"
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">
                      <Select value="Printer 1" size="small" fullWidth>
                        <MenuItem>Printer 1</MenuItem>
                        <MenuItem>Printer 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="Section 1" size="small" fullWidth>
                        <MenuItem>Section 1</MenuItem>
                        <MenuItem>Section 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="A5" size="small" fullWidth>
                        <MenuItem>A4</MenuItem>
                        <MenuItem>A5</MenuItem>
                        <MenuItem>58</MenuItem>
                        <MenuItem>80</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <TextField size="small" fullWidth placeholder="no. of copies" />
                    </TableCell>
                    <TableCell align="center">
                      <Select
                        size="small"
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Tooltip placement="top" title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => deleteRows(id)}
                          sx={{ color: "error.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <Button variant="outlined" onClick={() => addRows("C2")}>
                  Add More Item
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </Scrollbar>
      </TableContainer>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Typography variant="body1" gutterBottom>
        Table Invoice
      </Typography>
      <TableContainer  sx={{ mb: 2 }}>
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.label}
                    style={{
                      minWidth: column.minWidth,
                      maxWidth: column.maxWidth
                    }}
                    align="center"
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">
                      <Select value="Printer 1" size="small" fullWidth>
                        <MenuItem>Printer 1</MenuItem>
                        <MenuItem>Printer 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="Section 1" size="small" fullWidth>
                        <MenuItem>Section 1</MenuItem>
                        <MenuItem>Section 2</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Select value="A5" size="small" fullWidth>
                        <MenuItem>A4</MenuItem>
                        <MenuItem>A5</MenuItem>
                        <MenuItem>58</MenuItem>
                        <MenuItem>80</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <TextField size="small" fullWidth placeholder="no. of copies" />
                    </TableCell>
                    <TableCell align="center">
                      <Select
                        size="small"
                        fullWidth
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell>
                      <Tooltip placement="top" title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => deleteRows(id)}
                          sx={{ color: "error.main" }}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
            <TableRow>
              <TableCell colSpan={4}>
                <Button variant="outlined" onClick={() => addRows("C2")}>
                  Add More Item
                </Button>
              </TableCell>
            </TableRow>
          </Table>
        </Scrollbar>
      </TableContainer>
    </>
  );
};
export default PrinterScanner;
