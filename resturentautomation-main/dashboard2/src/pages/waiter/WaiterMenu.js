import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  TextField,
  Box,
  AppBar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Paper,
  Grid,
  Modal,
  Fade,
  Backdrop,
  Checkbox,
  Divider,
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";

import {
  makeStyles,
  IconButton,
  Button,
  TableContainer,
} from "@material-ui/core";
import { styled } from "@mui/material/styles";
// import DashboardSidebar from "../../../../backend/dashboard/src/components/DashboardSidebar";
// import DashboardSidebar from "src/layouts/dashboard/DashboardSidebar";
import WaiterAppBar from "./waiternavbar/waiternavbar";
import {
  ExpandLess,
  ExpandMore,
  Search,
  Add,
  Remove,
  Delete,
} from "@mui/icons-material";
// import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

// import ManageOrderNavbar from "../../../layouts/manage-order/ManageOrderNavbar";
// import SideFoodMenu from "../../../layouts/manage-order/SideFoodMenu";
import BottomNav from "./BottomNav";
// import Scrollbar from "src/components/Scrollbar";

const useStyles = makeStyles((theme) => ({
  sideFoodMenu: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#161C24",
  },
  popup: {
    backgroundColor: theme.palette.mode === "light" ? "#f6f7f8" : "inherit",
  },
  section3BillSection: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  appbar: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
  },
  input: {
    color: "#fff",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  variant1: {
    background: "#000",
    color: "#fff",
    border: "none",
  },
}));

const TableGrid = styled(Grid)(({ theme }) => ({
  ["@media (max-height:600px)"]: {
    maxHeight: 200,
  },
  ["@media (min-height:600px)"]: {
    maxHeight: 200,
  },
  ["@media (min-height:800px)"]: {
    maxHeight: 250,
  },
  ["@media (min-height:900px)"]: {
    maxHeight: 300,
  },
  ["@media (min-height:1080px)"]: {
    maxHeight: 340,
  },
}));

const CustomColor = styled(Typography)(({ theme }) => ({
  // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
  background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const WaiterMenu = (props) => {
  const [openSideMenu, setOpenSideMenu] = React.useState(true);
  const [openTableModal, setOpenTableModal] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  const [tabValue, setTabValue] = React.useState("dine-in");
  const [vegValue, setVegValue] = React.useState("veg");
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const navigate = useNavigate();
  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const onTableModalOpenHandler = () => {
    setOpenTableModal(true);
  };
  const onTableModalCloseHandler = () => {
    setOpenTableModal(false);
  };

  const sideMenuClickHandler = () => {
    setOpenSideMenu(!openSideMenu);
  };

  const onTabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const onVegChangeHandler = (event, newValue) => {
    setVegValue(newValue);
  };

  const menuItems = [
    { title: "Welcome Drink" },
    { title: "Soup" },
    { title: "Salad" },
    { title: "Starters" },
    { title: "Main Courses" },
    { title: "Dessert" },
    { title: "Chinese" },
    { title: "Mexican" },
    { title: "Italian" },
  ];

  const onSelectItem = (event, index) => {
    setSelectedIndex(index);
  };

  const classes = useStyles();

  const [variant1, setVariant1] = React.useState(null);
  const [variant2, setVariant2] = React.useState(null);
  const [variant3, setVariant3] = React.useState(null);

  return (
    <>
      {/* <DashboardSidebar /> */}
      <WaiterAppBar />
      <BottomNav />
      <Modal
        open={openTableModal}
        onClose={onTableModalCloseHandler}
        BackdropComponent={Backdrop}
        closeAfterTransition
      >
        <Fade in={openTableModal}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center" gutterBottom>
              Food Name
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Variations 1
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {[0, 1, 2].map((_, id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant1 === id ? classes.variant1 : ""}
                    onClick={() => setVariant1(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      Variant {id + 1}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; 50
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Variations 2
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {[0, 1].map((_, id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant2 === id ? classes.variant1 : ""}
                    onClick={() => setVariant2(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      Variant {id + 1}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; 50
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Typography variant="subtitle1" gutterBottom>
              Variations 3
            </Typography>
            <Divider sx={{ mb: 1 }} />
            <Grid container spacing={2} sx={{ mb: 2 }}>
              {[0, 1, 2, 3].map((_, id) => (
                <Grid item xs={3}>
                  <Box
                    className={variant3 === id ? classes.variant1 : ""}
                    onClick={() => setVariant3(id)}
                    sx={{
                      width: "100%",
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      cursor: "pointer",
                    }}
                  >
                    <Typography variant="body1" align="center">
                      Variant {id + 1}
                    </Typography>
                    <Typography variant="body2" align="center">
                      {/* <CurrencyRupee sx={{ fontSize: 15 }} /> */}
                      &#8377; 50
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
              }}
            >
              <Typography variant="body2" sx={{ mr: 1 }}>
                &#8377; 50
              </Typography>
              <Button
                variant="outlined"
                color="error"
                onClick={onTableModalCloseHandler}
                sx={{ mr: 1 }}
              >
                Cancel
              </Button>
              <Button variant="contained">Add</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Grid
              container
              direction="column"
              spacing={1}
              className={classes.section3BillSection}
              sx={{
                boxSizing: "border-box",
                padding: "10px 20px",
                paddingBottom: "0px",
                borderBottom: "1px solid lightGrey",
              }}
            >
              <Grid
                p={1}
                className={classes.popup}
                item
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} fontWeight={900} item>
                  Item Total
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography fontWeight={900}>Rs. 290</Typography>
                </Grid>
              </Grid>
              <Grid p={1} item container justifyContent="space-between">
                <Grid sx={{ borderRight: 1 }} color="#239F54" xs={6} item>
                  Coupon - (SAVE50)
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography color="#239F54">You saved Rs. 50</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                className={classes.popup}
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  Service charge
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid p={1} item container justifyContent="space-between">
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  SGST
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                className={classes.popup}
                container
                justifyContent="space-between"
              >
                <Grid sx={{ borderRight: 1 }} xs={6} item>
                  CGST
                </Grid>
                <Grid xs={6} justifyContent="flex-end" container>
                  <Typography>Rs. 20</Typography>
                </Grid>
              </Grid>
              <Grid
                p={1}
                item
                onClick={() => setOpen(!open)}
                style={{ cursor: "pointer" }}
                container
                justifyContent="space-between"
              >
                <Grid fontWeight={900} item>
                  Grand Total
                </Grid>
                <Grid fontWeight={900} item>
                  Rs. 300
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Grid
        container
        // xs={12}
        sx={{ height: "calc(100vh - 65px)" }}
      >
        {/* <SideFoodMenu /> */}
        {/* <ManageOrderNavbar /> */}
        {/* First Section */}
        <Grid
          className={classes.sideFoodMenu}
          item
          container
          direction="column"
          xs={3}
          sx={{
            height: "100%",
            borderRight: "1px solid",
            borderColor: "grey.800",
          }}
        >
          <Grid item xs={12}>
            <List sx={{ width: "100%" }} component="nav">
              <ListItemButton onClick={sideMenuClickHandler}>
                <ListItemText primary="Restaurant" />
                {openSideMenu ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={openSideMenu} timeout="auto" unmountOnExit>
                <List component="div">
                  {menuItems.map((item, id) => {
                    return (
                      <ListItemButton
                        divider
                        alignItems="center"
                        selected={id === selectedIndex}
                        style={{
                          marginBottom: "2px",
                          padding: "16px",
                          backgroundColor:
                            id === selectedIndex ? "#239F54" : "inherit",
                          color: id === selectedIndex ? "#fff" : "inherit",
                        }}
                        onClick={(event) => onSelectItem(event, id)}
                      >
                        <ListItemText
                          disableTypography
                          primary={
                            <Typography
                              align="center"
                              variant="body1"
                              fontWeight={600}
                            >
                              {item.title}
                            </Typography>
                          }
                        />
                      </ListItemButton>
                    );
                  })}
                </List>
              </Collapse>
            </List>
          </Grid>
        </Grid>
        {/* Second Section */}
        <Grid
          item
          container
          xs={9}
          direction="column"
          sx={{
            boxSizing: "border-box",
            borderRight: "1px solid",
            borderColor: "grey.800",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid
            item
            container
            className={classes.sideFoodMenu}
            sx={{
              boxSizing: "border-box",
              padding: 1,
              display: "flex",
              justifyContent: "space-between",
              gap: "1rem",
            }}
          >
            <Grid item>
              <TextField
                fullWidth
                size="small"
                placeholder="Search Item"
                InputProps={{
                  startAdornment: <Search sx={{ marginRight: 1 }} />,
                }}
              />
            </Grid>
            <Grid item>
              {/* <Button
                onClick={() => navigate("/waiter/waiterinvoice")}
                variant="contained"
                sx={{ ml: 1 }}
              >
                Place Order
              </Button> */}
              <Button
                variant="contained"
                onClick={() => navigate("/waiter/waiterinvoice")}
              >
                Place Order
              </Button>
            </Grid>
          </Grid>
          <Grid item container>
            <AppBar
              position="sticky"
              className={classes.appbar}
              sx={{ bgcolor: "transparent" }}
            >
              <Tabs
                value={vegValue}
                onChange={onVegChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab
                  label="Veg"
                  icon={
                    <img src="https://img.icons8.com/color/25/000000/vegetarian-food-symbol.png" />
                  }
                  iconPosition="start"
                  value="veg"
                  sx={{ borderRadius: 0 }}
                />
                <Tab
                  label="Non-Veg"
                  icon={
                    <img src="https://img.icons8.com/color/25/000000/non-vegetarian-food-symbol.png" />
                  }
                  iconPosition="start"
                  value="non-veg"
                  sx={{ borderRadius: 0 }}
                />
              </Tabs>
            </AppBar>
          </Grid>
          <Grid
            item
            container
            spacing={2}
            style={{ boxSizing: "border-box", padding: "10px 20px" }}
            align="center"
          >
            <Grid item xs={3}>
              <Paper
                onClick={onTableModalOpenHandler}
                fullWidth
                elevation={6}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                fullWidth
                elevation={12}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                fullWidth
                elevation={12}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                fullWidth
                elevation={12}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                fullWidth
                elevation={12}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
            <Grid item xs={3}>
              <Paper
                fullWidth
                elevation={12}
                style={{
                  height: 75,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography>food</Typography>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        {/* Third Section */}
      </Grid>
    </>
  );
};
export default WaiterMenu;
