import React from "react";
import { NavLink } from "react-router-dom";

import {
  Grid,
  AppBar,
  Tabs,
  Tab,
  Paper,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Typography,
  Box,
  Modal,
  Fade,
  Backdrop
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Add, Circle, Delete, Print, Bookmark } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

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
    width: 800,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const PickupView = (props) => {
  const instructions = [
    { label: "Orders Accepted", color: "secondary.light" },
    { label: "Orders Done", color: "primary.light" },
    { label: "Payment Due", color: "error.main" }
  ];

  const [section, setSection] = React.useState("app");
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const classes = useStyles();

  const onSectionChangeHandler = (event, newValue) => {
    setSection(newValue);
  };

  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }));

  return (
    <>
      {/* Modal */}
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <CustomColor variant="h4" component="div" gutterBottom align="center">
              Order Details
            </CustomColor>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Order Type : Pick Up</Grid>
                  <Grid item>Captain : Captain</Grid>
                </Grid>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Order No. : 123456789</Grid>
                  <Grid item>Customer : Customer Name</Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Table size="small" sx={{ minWidth: 1300 }}>
                  <TableHead>
                    <TableRow>
                      <TableCell>Items</TableCell>
                      <TableCell align="center">Price</TableCell>
                      <TableCell align="center">Qty</TableCell>
                      <TableCell align="center">Discount</TableCell>
                      <TableCell align="right">Total</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Food & Beverages</TableCell>
                      <TableCell align="center">220.00</TableCell>
                      <TableCell align="center">1</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="right">220.00</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item container>
                <Grid item container xs={4} direction="column" rowSpacing={1}>
                  <Grid item>Discount : 5%</Grid>
                  <Grid item>Service charge : 80</Grid>
                </Grid>
                <Grid item container xs={4} align="center" direction="column" rowSpacing={1}>
                  <Grid item>SGST : 80</Grid>
                  <Grid item>CGST : 80</Grid>
                </Grid>
                <Grid item container xs={4} align="right" direction="column" rowSpacing={1}>
                  <Grid item>Vat : 0</Grid>
                  <Grid item>Sub Total : 80</Grid>
                </Grid>
              </Grid>
              <Grid item align="right">
                Total Amout Payable :{" "}
                <Typography variant="h6" component="span" color="primary.main">
                  180
                </Typography>
              </Grid>
              <Grid item container spacing={2}>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Create Invoice
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    E-Bill
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="contained" fullWidth>
                    Print KOT
                  </Button>
                </Grid>
                <Grid item xs={3}>
                  <Button variant="outlined" fullWidth onClick={closeModalHandler}>
                    Close
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid container>
        {/* side menu */}
        <Grid item container xs={2} mt={1} direction="column" sx={{ padding: 2 }} rowSpacing={2}>
          <Grid fullWidth item>
            <Button fullWidth variant="outlined" component={NavLink} to="/manageorder/table-view">
              Dine In
            </Button>
          </Grid>
          <Grid fullWidth item>
            <Button fullWidth variant="outlined" component={NavLink} to="/manageorder/delivery-view">
              Delivery
            </Button>
          </Grid>
          <Grid fullWidth item>
            <Button fullWidth variant="contained" component={NavLink} to="/manageorder/pickup-view">
              Pick Up
            </Button>
          </Grid>
        </Grid>
        <Grid item container xs={10} direction="column">
          {/* upper color instrutions */}
          <Grid
            item
            container
            sx={{
              padding: 1,
              display: "flex",
              justifyContent: "right",
              alignItems: "center"
            }}
          >
            {instructions.map((instruction) => (
              <Grid
                item
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginRight: 2
                }}
              >
                <Circle sx={{ color: instruction.color, fontSize: "medium", marginRight: 1 }} />
                <Typography variant="subtitle2" component="span">
                  {instruction.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
          {/* Appbar */}
          <Grid item container>
            <AppBar position="sticky" className={classes.tabs}>
              <Tabs
                value={section}
                onChange={onSectionChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab label="Own App" value="app" sx={{ borderRadius: 0 }} />
                <Tab label="Zomato" value="zomato" sx={{ borderRadius: 0 }} />
                <Tab label="Swiggy" value="swiggy" sx={{ borderRadius: 0 }} />
              </Tabs>
            </AppBar>
          </Grid>
          {/* Orders */}
          <Grid item container direction="column">
            <Grid item container sx={{ padding: 1 }} spacing={2}>
              <Grid item xs={4}>
                <Paper
                  onClick={openModalHandler}
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px",
                    // bgcolor: "secondary.light"
                    bgcolor: "rgba(51,102,255,0.5)"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <CustomColor variant="h3" component="div">
                      1
                    </CustomColor>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "50%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Order No. : 5
                    </Typography>
                  </Box>

                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "35%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Paper
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px",
                    // bgcolor: "primary.light"
                    bgcolor: "rgba(0, 171, 85, 0.5)"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <CustomColor variant="h3" component="div">
                      2
                    </CustomColor>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "50%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Order No. : 3
                    </Typography>
                  </Box>

                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "35%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>

              <Grid item xs={4}>
                <Paper
                  fullWidth
                  elevation={6}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    // height: 85,
                    padding: "16px 5px",
                    // bgcolor: "error.light"
                    bgcolor: "rgba(255, 72, 66, 0.5)"
                  }}
                >
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                      width: "15%"
                    }}
                  >
                    <CustomColor variant="h3" component="div">
                      3
                    </CustomColor>
                  </Box>
                  <Box
                    component="div"
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection: "column",
                      width: "50%",
                      borderRight: "1px solid",
                      borderLeft: "1px solid",
                      borderColor: "grey.900",
                      height: "100%",
                      padding: "0 5px"
                    }}
                  >
                    <Typography variant="body1" component="div">
                      Order No. : 1
                    </Typography>
                  </Box>

                  <Box
                    variant="div"
                    sx={{
                      display: "flex",
                      // flexDirection: "column",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      width: "35%"
                    }}
                  >
                    <IconButton size="small">
                      <Delete sx={{ fontSize: "medium", color: "error.main" }} />
                    </IconButton>
                    <IconButton size="small" color="secondary">
                      <Print sx={{ fontSize: "medium" }} />
                    </IconButton>
                    <IconButton size="small" color="primary">
                      <Bookmark sx={{ fontSize: "medium" }} />
                    </IconButton>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default PickupView;
