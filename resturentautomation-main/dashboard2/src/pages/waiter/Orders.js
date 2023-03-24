import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Button,
  IconButton,
  Typography,
  Box,
  Paper,
  AppBar,
  Toolbar,
  Tabs,
  Tab,
  Divider,
  Select,
  MenuItem,
  FormControl,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Switch,
} from "@mui/material";
import { Menu, ExpandMore } from "@mui/icons-material";
import { makeStyles, useTheme } from "@material-ui/core";
import SwipeableViews from "react-swipeable-views";
import Kitchen from "./Kitchen";
import Ready from "./Ready";
import PaymentDue from "./PaymentDue";
import BottomNav from "./BottomNav";
import WaiterAppBar from "./waiternavbar/waiternavbar";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
}

const Orders = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const newOrders = [
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 5,
      orderNo: 6,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 4, price: 145.36 },
        { name: "Biriyani", qty: 6, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
      ],
    },
    {
      table: 3,
      orderNo: 10,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 6, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 4, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
  ];
  const kitchenOrders = [
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 5,
      orderNo: 6,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 4, price: 145.36 },
        { name: "Biriyani", qty: 6, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
      ],
    },
    {
      table: 3,
      orderNo: 10,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 6, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 4, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
  ];
  const readyOrders = [
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
      ],
    },
    {
      table: 5,
      orderNo: 6,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 4, price: 145.36 },
        { name: "Biriyani", qty: 6, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
        { name: "Chicken", qty: 10, price: 145.36 },
      ],
    },
    {
      table: 3,
      orderNo: 10,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 6, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 4, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Swiggy",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 6,
      orderNo: 20,
      from: "Zomato",
      type: "Delivery",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 10, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
        { name: "Mutton", qty: 5, price: 145.36 },
      ],
    },
    {
      table: 2,
      orderNo: 5,
      from: "Restaurant",
      type: "Dine In",
      amt: 123.25,
      menu: [
        { name: "Mutton", qty: 2, price: 145.36 },
        { name: "Chicken", qty: 5, price: 100.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
        { name: "Dessert", qty: 6, price: 250.36 },
        { name: "Pulao", qty: 2, price: 250.36 },
        { name: "Paneer", qty: 3, price: 250.36 },
        { name: "Biriyani", qty: 6, price: 250.36 },
      ],
    },
  ];

  const [section, setSection] = React.useState(0);
  const [select, setSelect] = React.useState(0);
  const classes = useStyles();

  const onSectionChangeHandler = (event, newValue) => {
    setSection(newValue);
  };

  const onViewOrderHandler = (orderMenu) => {
    navigate("/waiter/view-order", { state: { orderMenu, newOrders: true } });
  };

  const onSelectChangeHandler = (event) => {
    setSelect(event.target.value);
  };
  const [userid, setuserid] = useState("");

  useEffect(() => {
    const id = sessionStorage.getItem("waiterid");
    if (!id) {
      navigate("/waiter/orders");
    }
    setuserid(id);
  }, []);
  return (
    <>
      <WaiterAppBar />
      <AppBar position="sticky" sx={{ top: 0 }}>
        <Toolbar>
          <FormControl
            variant="standard"
            color="secondary"
            sx={{ minWidth: 120 }}
          >
            <Select value={select} onChange={onSelectChangeHandler}>
              <MenuItem value={0}>Order</MenuItem>
              <MenuItem value={1}>Menu</MenuItem>
            </Select>
          </FormControl>
        </Toolbar>
      </AppBar>
      {select === 0 ? (
        <>
          <AppBar position="sticky" className={classes.tabs}>
            <Tabs
              value={section}
              onChange={onSectionChangeHandler}
              textColor="#00AB55"
              indicatorColor="primary"
              variant="fullWidth"
            >
              <Tab
                label={`Accept Orders (${newOrders.length})`}
                value={0}
                sx={{ borderRadius: 0 }}
              />
              <Tab
                label={`Kitchen Orders (${kitchenOrders.length})`}
                value={1}
                sx={{ borderRadius: 0 }}
              />
              <Tab
                label={`Ready Orders (${readyOrders.length})`}
                value={2}
                sx={{ borderRadius: 0 }}
              />
              <Tab
                label={`Due Payments (${readyOrders.length})`}
                value={3}
                sx={{ borderRadius: 0 }}
              />
            </Tabs>
          </AppBar>
          <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={section}
            onChangeIndex={onSectionChangeHandler}
          >
            <TabPanel value={section} index={0} dir={theme.direction}>
              <Grid container spacing={2} sx={{ p: 2 }}>
                {newOrders.map((order, id) => (
                  <Grid item xs={6} sm={4} lg={3}>
                    <Paper
                      elevation={12}
                      fullWidth
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        p: 1,
                        height: "100%",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">From</Typography>
                        <Typography
                          variant="subtitle1"
                          color={
                            order.from === "Zomato"
                              ? "error"
                              : order.from === "Swiggy"
                              ? "warning.dark"
                              : "primary"
                          }
                        >
                          {order.from}
                        </Typography>
                      </Box>
                      <Divider />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">Type</Typography>
                        <Typography variant="subtitle1">
                          {order.type}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">Date</Typography>
                        <Typography variant="subtitle1">15-02-2022</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">Time</Typography>
                        <Typography variant="subtitle1">15:08</Typography>
                      </Box>

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">Order No.</Typography>
                        <Typography variant="subtitle1">
                          {order.orderNo}
                        </Typography>
                      </Box>
                      {order.type === "Dine In" ? (
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            p: 1,
                          }}
                        >
                          <Typography variant="body1">Table</Typography>
                          <Typography variant="subtitle1">
                            {order.table}
                          </Typography>
                        </Box>
                      ) : null}
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          p: 1,
                        }}
                      >
                        <Typography variant="body1">Amount</Typography>
                        <Typography variant="subtitle1">{order.amt}</Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexGrow: 1,
                          alignItems: "flex-end",
                        }}
                      >
                        <Button
                          variant="contained"
                          size="small"
                          fullWidth
                          onClick={() => onViewOrderHandler(order)}
                        >
                          View Details
                        </Button>
                      </Box>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </TabPanel>
            <TabPanel value={section} index={1} dir={theme.direction}>
              <Kitchen orders={kitchenOrders} />
            </TabPanel>
            <TabPanel value={section} index={2} dir={theme.direction}>
              <Ready orders={readyOrders} />
            </TabPanel>
            <TabPanel value={section} index={3} dir={theme.direction}>
              <PaymentDue orders={readyOrders} />
            </TabPanel>
          </SwipeableViews>
        </>
      ) : (
        <Grid container sx={{ p: 1 }}>
          <Grid item container xs={12} direction="column">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Sea Food</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container xs={12} direction="column">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Sea Food</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container xs={12} direction="column">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Sea Food</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container xs={12} direction="column">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Sea Food</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
          <Grid item container xs={12} direction="column">
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMore />}>
                <Typography variant="h6">Sea Food</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Grid
                  item
                  container
                  xs={12}
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  container
                  justifyContent="space-between"
                  sx={{ p: 1, mt: 1 }}
                >
                  <Grid item>
                    <Typography variant="h6">Food</Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="h6">
                      <Switch />
                    </Typography>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          </Grid>
        </Grid>
      )}

      <BottomNav />
    </>
  );
};
export default Orders;
