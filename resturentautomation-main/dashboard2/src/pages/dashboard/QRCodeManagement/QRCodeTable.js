import React from "react";
import QR from "qrcode.react";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Button,
  Grid,
  Typography,
  AppBar,
  Tabs,
  Tab,
  Box,
  Modal,
  Fade,
  Backdrop,
  TextField,
  Select,
  MenuItem
} from "@mui/material";

import { Add } from "@mui/icons-material";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff"
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      style={{ width: "100%" }}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const QRCodeManagement = (props) => {
  const classes = useStyles();

  const [section, setSection] = React.useState(0);
  const [openModal, setOpenModal] = React.useState(false);
  const [type, setType] = React.useState("dine");

  const onSectionChangeHandler = (event, newValue) => {
    setSection(newValue);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const columns = [
    { label: "QR Code", minWidth: 100, maxWidth: 200 },
    { label: "Details", minWidth: 200, maxWidth: 300 }
  ];

  const createData = (tableNo, type, restoName, restoEmail, restoUid, details) => {
    const qrDetails = { tableNo, type, restoName, restoEmail, restoUid };
    return { qrDetails, details };
  };

  const rows = [
    createData(1, "Dine In", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData(2, "Dine In", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData(3, "Dine In", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData(6, "Dine In", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData(4, "Dine In", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Delivery", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Delivery", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Delivery", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Pick-Up", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Pick-Up", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Pick-Up", "Resto name", "email@gmail.com", 1245, "Details and Data and Time"),
    createData("", "Pick-Up", "Resto name", "email@gmail.com", 1245, "Details and Data and Time")
  ];

  return (
    <>
      <Grid container sx={{ p: 1 }}>
        <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Add QR
              </Typography>
              <Grid item container direction="column" rowSpacing={2} sx={{ padding: 2 }}>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Select
                      size="small"
                      value={type}
                      onChange={(event) => setType(event.target.value)}
                      fullWidth
                    >
                      <MenuItem value={"dine"}>Dine In</MenuItem>
                      <MenuItem value={"delivery"}>Delivery</MenuItem>
                      <MenuItem value={"pickup"}>Pick-Up</MenuItem>
                    </Select>
                  </Grid>
                </Grid>
                {type === "dine" ? (
                  <Grid item container spacing={2}>
                    <Grid item xs={4}>
                      <Typography variant="subtitle2">Table No.:</Typography>
                    </Grid>
                    <Grid item xs={4}>
                      <TextField size="small" fullWidth />
                    </Grid>
                  </Grid>
                ) : null}

                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Restaurant Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField size="small" fullWidth value="Resto Name" disabled />
                  </Grid>
                </Grid>

                <Grid item align="right">
                  <Button variant="outlined" size="small" sx={{ marginRight: 1 }}>
                    Reset
                  </Button>
                  <Button variant="contained" size="small">
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
        <Grid
          item
          xs={12}
          sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2 }}
        >
          <Typography variant="h4" component="div">
            QR Code Management
          </Typography>
          <Button startIcon={<Add />} variant="contained" onClick={openModalHandler}>
            Add QR
          </Button>
        </Grid>
        <AppBar position="sticky" className={classes.tabs} sx={{ mb: 1 }}>
          <Tabs
            value={section}
            onChange={onSectionChangeHandler}
            textColor="#00AB55"
            indicatorColor="primary"
            variant="fullWidth"
          >
            <Tab label="Dine In" value={0} sx={{ borderRadius: 0 }} />
            <Tab label="Delivery" value={1} sx={{ borderRadius: 0 }} />
            <Tab label="Pick-Up" value={2} sx={{ borderRadius: 0 }} />
          </Tabs>
        </AppBar>
        <TabPanel value={section} index={0}>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center">{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((row) => row.qrDetails.type === "Dine In")
                .map((row) => (
                  <TableRow>
                    <TableCell align="center">
                      <QR
                        value={`Table No. = ${row.qrDetails.tableNo}, Type = ${row.qrDetails.type}, Restaurant Name = ${row.qrDetails.restoName}, Restaurant Email = ${row.qrDetails.restoEmail}, Restaurant UID = ${row.qrDetails.restoUid}`}
                      />
                    </TableCell>
                    <TableCell>{row.details}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabPanel>
        <TabPanel value={section} index={1}>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center">{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((row) => row.qrDetails.type === "Delivery")
                .map((row) => (
                  <TableRow>
                    <TableCell align="center">
                      <QR
                        value={` Type = ${row.qrDetails.type}, Restaurant Name = ${row.qrDetails.restoName}, Restaurant Email = ${row.qrDetails.restoEmail}, Restaurant UID = ${row.qrDetails.restoUid}`}
                      />
                    </TableCell>
                    <TableCell>{row.details}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabPanel>
        <TabPanel value={section} index={2}>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell align="center">{column.label}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .filter((row) => row.qrDetails.type === "Pick-Up")
                .map((row) => (
                  <TableRow>
                    <TableCell align="center">
                      <QR
                        value={`Type = ${row.qrDetails.type}, Restaurant Name = ${row.qrDetails.restoName}, Restaurant Email = ${row.qrDetails.restoEmail}, Restaurant UID = ${row.qrDetails.restoUid}`}
                      />
                    </TableCell>
                    <TableCell>{row.details}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TabPanel>
      </Grid>
    </>
  );
};
export default QRCodeManagement;
