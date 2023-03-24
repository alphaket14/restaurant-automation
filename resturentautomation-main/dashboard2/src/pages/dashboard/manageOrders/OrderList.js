import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Stack,
  FormControl,
  TextField,
  Button,
  IconButton,
  Select,
  MenuItem,
  InputLabel,
  Modal,
  Fade,
  Backdrop,
  Checkbox,
  Grid,
  Divider,
  Tooltip,
  TablePagination
} from "@mui/material";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  AppBar,
  ListItem,
  ListItemText,
  makeStyles,
  Tab,
  Tabs,
} from "@material-ui/core";

import { Edit, Delete, Visibility, CurrencyRupee } from "@mui/icons-material";
import { styled } from "@material-ui/styles";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "src/components/Scrollbar";

const useStyles = makeStyles((theme) => ({
  tabs: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
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

const BarPanel = (props) => {
  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }));

  const allOrders = [
    {
      from: "Restaurant, AC",
      type: "Dine In",
      orderNo: 123,
      tableNo: 2,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Garden",
      type: "Dine In",
      orderNo: 125,
      tableNo: 4,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Restaurant, Non-AC",
      type: "Dine In",
      orderNo: 220,
      tableNo: 3,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Garden",
      type: "Dine In",
      orderNo: 200,
      tableNo: 6,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Zomato",
      type: "Delivery",
      orderNo: 50,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Swiggy",
      type: "Delivery",
      orderNo: 55,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "App",
      type: "Delivery",
      orderNo: 60,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Zomato",
      type: "Pick Up",
      orderNo: 100,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "Swiggy",
      type: "Pick Up",
      orderNo: 120,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
    {
      from: "App",
      type: "Pick Up",
      orderNo: 150,
      orders: [
        { name: "Drink", qty: 2 },
        { name: "Cocktail", qty: 3 },
      ],
    },
  ];

  return (
    <>
      <Grid container columnSpacing={2} sx={{ padding: 2 }}>
        <Grid item container xs={3} rowSpacing={3} direction="column">
          <Grid item>
            <Paper
              elevation={12}
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
              }}
            >
              <Typography variant="body1">Dine In Orders</Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 15px",
                  borderRadius: 1,
                  // bgcolor: "rgba(0,0,0,0.3)"
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                }}
              >
                <CustomColor variant="h3" component="div">
                  23
                </CustomColor>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={12}
              sx={{
                padding: "10px 15px ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {allOrders
                .filter((orders) => orders.type === "Dine In")
                .map((orders) => (
                  <Paper
                    elevation={24}
                    sx={{
                      marginBottom: 2,
                      padding: 0,
                    }}
                  >
                    <Accordion
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <AccordionSummary
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box
                          sx={{
                            width: "60%",
                            display: "flex",
                            alignItems: "center",
                          }}
                        >
                          <Typography variant="body2" component="div">
                            {orders.from}
                          </Typography>
                        </Box>
                        <Box sx={{ width: "40%" }}>
                          <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                          >
                            Order No. :{" "}
                            <Typography
                              variant="subtitle2"
                              component="span"
                              color="text.primary"
                            >
                              {orders.orderNo}
                            </Typography>
                          </Typography>
                          <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                          >
                            Table No. :{" "}
                            <Typography
                              variant="subtitle2"
                              component="span"
                              color="text.primary"
                            >
                              {orders.tableNo}
                            </Typography>
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {orders.orders.map((order) => (
                          <Box
                            sx={{
                              width: "100%",
                              bgcolor: "rgba(0, 0, 0, 0.2)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 1,
                              padding: 1,
                              borderRadius: 1,
                            }}
                          >
                            <Typography variant="body2" component="div">
                              {order.qty} {order.name}
                            </Typography>
                          </Box>
                        ))}

                        <Button variant="contained" size="small">
                          Mark As Done
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                ))}
            </Paper>
          </Grid>
        </Grid>
        <Grid item container xs={3} rowSpacing={3} direction="column">
          <Grid item>
            <Paper
              elevation={12}
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
              }}
            >
              <Typography variant="body1">Delivery Status</Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 15px",
                  borderRadius: 1,
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                }}
              >
                <CustomColor variant="h3" component="div">
                  15
                </CustomColor>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={12}
              sx={{
                padding: "10px 15px ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 15px",
                  marginBottom: 2,
                  bgcolor: "rgba(51,102,255,0.3)",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "60%",
                    padding: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">
                    Order No. :{" "}
                    <Typography
                      variant="subtitle2"
                      component="span"
                      color="text.primary"
                    >
                      220
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Food and Beverages
                  </Typography>
                </Box>

                <Box
                  component="div"
                  sx={{
                    bgcolor: "primary.main",
                    height: 55,
                    width: 55,
                    borderRadius: "50%",
                    padding: "0 3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption">15 min</Typography>
                </Box>
              </Paper>
              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 15px",
                  marginBottom: 2,
                  bgcolor: "rgba(255, 193, 7, 0.3)",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "60%",
                    padding: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">
                    Order No. :{" "}
                    <Typography
                      variant="subtitle2"
                      component="span"
                      color="text.primary"
                    >
                      220
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Food and Beverages
                  </Typography>
                </Box>

                <Box
                  component="div"
                  sx={{
                    bgcolor: "error.main",
                    height: 55,
                    width: 55,
                    borderRadius: "50%",
                    padding: "0 3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption">30 min</Typography>
                </Box>
              </Paper>

              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 15px",
                  marginBottom: 2,
                  bgcolor: "rgba(51,102,255,0.3)",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "60%",
                    padding: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">
                    Order No. :{" "}
                    <Typography
                      variant="subtitle2"
                      component="span"
                      color="text.primary"
                    >
                      220
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Food and Beverages
                  </Typography>
                </Box>

                <Box
                  component="div"
                  sx={{
                    bgcolor: "primary.main",
                    height: 55,
                    width: 55,
                    borderRadius: "50%",
                    padding: "0 3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption">15 min</Typography>
                </Box>
              </Paper>
              <Paper
                elevation={24}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "10px 15px",
                  marginBottom: 2,
                  bgcolor: "rgba(255, 72, 66, 0.3)",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "60%",
                    padding: "0 5px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography variant="caption" component="div">
                    Order No. :{" "}
                    <Typography
                      variant="subtitle2"
                      component="span"
                      color="text.primary"
                    >
                      220
                    </Typography>
                  </Typography>
                  <Typography variant="subtitle2" component="div">
                    Food and Beverages
                  </Typography>
                </Box>

                <Box
                  component="div"
                  sx={{
                    bgcolor: "warning",
                    height: 55,
                    width: 55,
                    borderRadius: "50%",
                    padding: "0 3px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="caption">45 min</Typography>
                </Box>
              </Paper>
            </Paper>
          </Grid>
        </Grid>
        <Grid item container xs={3} rowSpacing={3} direction="column">
          <Grid item>
            <Paper
              elevation={12}
              fullWidth
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px 15px",
              }}
            >
              <Typography variant="body1">Delivery Orders</Typography>
              <Box
                component="div"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2px 15px",
                  borderRadius: 1,
                  boxShadow: "0 0 15px rgba(0,0,0,0.3)",
                }}
              >
                <CustomColor variant="h3" component="div">
                  08
                </CustomColor>
              </Box>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={12}
              sx={{
                padding: "10px 15px ",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              {allOrders
                .filter((order) => order.type === "Delivery")
                .map((order) => (
                  <Paper
                    elevation={24}
                    sx={{
                      marginBottom: 2,
                      padding: 0,
                    }}
                  >
                    <Accordion
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <AccordionSummary
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "60%" }}>
                          <Typography variant="body2" component="div">
                            {order.from}
                          </Typography>
                        </Box>
                        <Box sx={{ width: "40%" }}>
                          <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                          >
                            Order No. :{" "}
                            <Typography
                              variant="subtitle2"
                              component="span"
                              color="text.primary"
                            >
                              {order.orderNo}
                            </Typography>
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {order.orders.map((menu) => (
                          <Box
                            sx={{
                              width: "100%",
                              bgcolor: "rgba(0, 0, 0, 0.2)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 1,
                              padding: 1,
                              borderRadius: 1,
                            }}
                          >
                            <Typography variant="body2" component="div">
                              {menu.qty} {menu.name}
                            </Typography>
                          </Box>
                        ))}
                        <Button variant="contained" size="small">
                          Mark As Done
                        </Button>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            margin: "15px 0",
                          }}
                        >
                          <Typography variant="body2" component="div">
                            Delivery Boy Name
                          </Typography>
                          <Button variant="contained" size="small">
                            Call Now
                          </Button>
                        </Box>
                        <Button variant="outlined" size="small">
                          Change
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                ))}
            </Paper>
          </Grid>
        </Grid>
        <Grid item container xs={3} spacing={0} direction="column">
          <Grid item>
            <Paper
              fullWidth
              elevation={12}
              sx={{
                padding: "10px 15px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                variant="body1"
                component="div"
                sx={{ marginBottom: 3 }}
              >
                Pick-Up Orders
              </Typography>
              {allOrders
                .filter((order) => order.type === "Pick Up")
                .map((order) => (
                  <Paper
                    elevation={24}
                    sx={{
                      marginBottom: 2,
                      padding: 0,
                    }}
                  >
                    <Accordion
                      sx={{
                        padding: "5px 0",
                      }}
                    >
                      <AccordionSummary
                        sx={{
                          width: "100%",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <Box sx={{ width: "60%" }}>
                          <Typography variant="body2" component="div">
                            {order.from}
                          </Typography>
                        </Box>
                        <Box sx={{ width: "40%" }}>
                          <Typography
                            variant="caption"
                            component="div"
                            color="text.secondary"
                          >
                            Order No. :{" "}
                            <Typography
                              variant="subtitle2"
                              component="span"
                              color="text.primary"
                            >
                              {order.orderNo}
                            </Typography>
                          </Typography>
                        </Box>
                      </AccordionSummary>
                      <AccordionDetails>
                        {order.orders.map((menu) => (
                          <Box
                            sx={{
                              width: "100%",
                              bgcolor: "rgba(0, 0, 0, 0.2)",
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                              marginBottom: 1,
                              padding: 1,
                              borderRadius: 1,
                            }}
                          >
                            <Typography variant="body2" component="div">
                              {menu.qty} {menu.name}
                            </Typography>
                          </Box>
                        ))}

                        <Button variant="contained" size="small">
                          Mark As Done
                        </Button>
                        <Box
                          sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-around",
                            alignItems: "center",
                            margin: "15px 0",
                          }}
                        >
                          <Typography variant="body2" component="div">
                            Captain Name
                          </Typography>
                          <Button variant="contained" size="small">
                            Call Now
                          </Button>
                        </Box>
                        <Button variant="outlined" size="small">
                          Change
                        </Button>
                      </AccordionDetails>
                    </Accordion>
                  </Paper>
                ))}
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

const OrderList = () => {
  const classes = useStyles();

  const columns = [
    { label: "Order No.", minWidth: 20, maxWidth: 50 },
    { label: "Inv No.", minWidth: 20, maxWidth: 50 },
    { label: "Name", minWidth: 20, maxWidth: 20 },
    { label: "Phone", minWidth: 50, maxWidth: 150 },
    { label: "Waiter", minWidth: 20, maxWidth: 20 },
    { label: "Table", minWidth: 20, maxWidth: 50 },
    { label: "Order Date", minWidth: 20, maxWidth: 20 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150,
    },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Actions", minWidth: 250, maxWidth: 300 },
  ];

  const deliveryColumns = [
    { label: "Order No.", minWidth: 50, maxWidth: 150 },
    { label: "Invoice No.", minWidth: 50, maxWidth: 150 },
    { label: "Customer Name", minWidth: 50, maxWidth: 150 },
    { label: "Phone", minWidth: 50, maxWidth: 150 },
    { label: "Type", minWidth: 50, maxWidth: 150 },
    { label: "From", minWidth: 50, maxWidth: 150 },
    { label: "Order Date", minWidth: 20, maxWidth: 50 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 150,
    },
    { label: "Status", minWidth: 50, maxWidth: 150 },
    { label: "Actions", minWidth: 50, maxWidth: 150 },
  ];

  const createData = (
    orderNo,
    invoice,
    customerName,
    phone,
    waiter,
    tableNumber,
    orderDate,
    amount,
    state,
  ) => {
    return {
      orderNo,
      invoice,
      customerName,
      phone,
      waiter,
      tableNumber,
      orderDate,
      amount,
      state,
    };
  };

  const createRows = (
    orderNo,
    invoice,
    customerName,
    phone,
    type,
    from,
    orderDate,
    amount,
    state,
  ) => {
    return {
      orderNo,
      invoice,
      customerName,
      phone,
      type,
      from,
      orderDate,
      amount,
      state,
    };
  };

  const [rows, setRows] = React.useState([
    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "20-05-2022",
      2599.0,
      "PAID",
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "20-05-2022",
      2599.0,
      "PAID",
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "20-05-2022",
      2599.0,
      "PAID",
    ),

    createData(
      "12",
      "500",
      "Walkin",
      "+918546124871",
      "Rahul Kumar",
      "Table-3",
      "20-05-2022",
      2599.0,
      "PAID",
    ),
  ]);

  const deleteRow = (rowId) => {
    console.log("delete");
    const temp = [...rows];
    temp.splice(rowId, 1);
    setRows(temp);
  };

  // const rows = [
  //   createData("535", "Walkin", "Rahul Kumar", "Table-3", "Pending", "Nov 30, 2021", 2599),
  //   createData("535", "Walkin", "Rahul Kumar", "Table-3", "Pending", "Nov 30, 2021", 2599),
  //   createData("535", "Walkin", "Rahul Kumar", "Table-3", "Pending", "Nov 30, 2021", 2599),
  //   createData("535", "Walkin", "Rahul Kumar", "Table-3", "Pending", "Nov 30, 2021", 2599),
  //   createData("535", "Walkin", "Rahul Kumar", "Table-3", "Pending", "Nov 30, 2021", 2599)
  // ];

  const deliveryRows = [
    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "20-05-2022",
      2599.0,
      "PAID",
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "20-05-2022",
      2599.0,
      "PENDING",
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "20-05-2022",
      2599.0,
      "CANCELLED",
    ),

    createRows(
      "13",
      "535",
      "Walkin",
      "+918546124871",
      "Delivery",
      "Zomato",
      "20-05-2022",
      2599.0,
      "WAITING",
    ),
  ];

  const selections = ["All", "Dine In", "Delivery", "Pickup"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [tabValue, setTableValue] = React.useState("order-list");

  const onSectionChangeHandler = (e, newValue) => {
    console.log(newValue);
    setTableValue(newValue);
  };

  const [startDate, SetStartDate] = React.useState(new Date());
  const [endDate, SetEndDate] = React.useState(new Date());

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
      {/* <AppBar position="sticky" className={classes.tabs}>
        <Tabs
          value={tabValue}
          onChange={onSectionChangeHandler}
          textColor="#00AB55"
          indicatorColor="primary"
          variant="fullWidth"
        >
          <Tab label="Order List" value="order-list" sx={{ borderRadius: 0 }} />
          <Tab label="Bar Panel" value="bar-panel" sx={{ borderRadius: 0 }} />
        </Tabs>
      </AppBar>
      {tabValue === "order-list" ? ( */}
        <Box style={{ margin: 0 }}>
          <Modal
            open={openModal}
            onClose={closeModalHandler}
            closeAfterTransition
            BackdropComponent={Backdrop}
          >
            <Fade in={openModal}>
              <Box className={classes.modal}>
                <Typography
                  variant="h4"
                  component="div"
                  sx={{ mb: 2 }}
                  align="center"
                >
                  Order Details
                </Typography>
                <Grid container direction="column" rowSpacing={2}>
                  <Grid item container spacing={1}>
                    <Grid item xs={4}>
                      Order Type : Dine In
                    </Grid>
                    <Grid item xs={4}>
                      Table : Table 02
                    </Grid>
                    <Grid item xs={4}>
                      Order No. : 123
                    </Grid>
                    <Grid item xs={4}>
                      Customer : Customer Name
                    </Grid>
                    <Grid item xs={4}>
                      Email : email@gmail.com
                    </Grid>
                    <Grid item xs={4}>
                      Phone : +91545521456
                    </Grid>
                    <Grid item xs={4}>
                      Waiter : Captain
                    </Grid>
                  </Grid>
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
                        <Table size="small">
                          <TableHead>
                            <TableRow>
                              <TableCell align="center">Items</TableCell>
                              <TableCell align="center">Price</TableCell>
                              <TableCell align="center">Qty</TableCell>
                              <TableCell align="center">Discount</TableCell>
                              <TableCell align="center">Total</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell align="center">Food & Beverages</TableCell>
                              <TableCell align="center">220.00</TableCell>
                              <TableCell align="center">1</TableCell>
                              <TableCell align="center">0</TableCell>
                              <TableCell align="center">220.00</TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell align="center">Food & Beverages</TableCell>
                              <TableCell align="center">220.00</TableCell>
                              <TableCell align="center">1</TableCell>
                              <TableCell align="center">0</TableCell>
                              <TableCell align="center">220.00</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Scrollbar>
                    </TableContainer>
                  </Grid>
                  <Grid item container>
                    <Grid
                      item
                      container
                      xs={4}
                      direction="column"
                      rowSpacing={1}
                    >
                      <Grid item>Discount : 5%</Grid>
                      <Grid item>Service charge : 80</Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={4}
                      align="center"
                      direction="column"
                      rowSpacing={1}
                    >
                      <Grid item>SGST : 80</Grid>
                      <Grid item>CGST : 80</Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={4}
                      align="right"
                      direction="column"
                      rowSpacing={1}
                    >
                      <Grid item>Vat : 0</Grid>
                      <Grid item>Sub Total : 80</Grid>
                    </Grid>
                  </Grid>
                  <Grid item align="right">
                    Total Amout Payable :{" "}
                    <Typography
                      variant="h6"
                      component="span"
                      color="primary.main"
                    >
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
                      <Button
                        variant="outlined"
                        fullWidth
                        onClick={closeModalHandler}
                      >
                        Close
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Fade>
          </Modal>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ mt: 4, mb: 2 }}
          >
            {/* <Typography variant="h5">Order List</Typography> */}
            <Box component="span" sx={{ width: "100%" }}>
              <FormControl
                sx={{ mr: 1, float: "left", width: "20%" ,mb: 2 }}
                size="small"
              >
                <InputLabel id="select-type">Select Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  // size="small"
                  value={type}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {selections.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={type.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}

                  {/* <MenuItem value={"All"}>All</MenuItem>
                  <MenuItem value={"Dine In"}>Dine In</MenuItem>
                  <MenuItem value={"Delivery"}>Delivery</MenuItem>
                  <MenuItem value={"Pickup"}>Pickup</MenuItem> */}
                </Select>
              </FormControl>
              <TextField sx={{ width: "20%",mb: 2  }} size="small" label="Order No." />   
              <TextField sx={{ width: "20%",mb: 2,ml:1  }} size="small" label="Mobile No." />   
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
                    sx={{ width: "15%", float: "right", marginLeft: "10px" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />
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
                    sx={{ width: "15%", float: "right" }}
                    size="small"
                    helperText={null}
                  />
                )}
              />

              {/* <FormControl size="small" sx={{ mr: 1 }}>
                <TextField required label="From" size="small" />
              </FormControl>
              <FormControl size="small" sx={{ mr: 1 }}>
                <TextField required label="To" size="small" />
              </FormControl> */}

              {/* <Button variant="outlined" sx={{ mr: 1, float:"right"}}>Reset</Button>
              <Button variant="contained" sx={{ mr: 1, float:"right"}}>Search</Button> */}
            </Box>
          </Stack>
          {/* <Divider sx={{ mb: 1 }} />
          <Box sx={{ width: "50%", mb: 1 }}>
            <TextField
              label="Search"
              sx={{ width: "50%" }}
              size="small"
              fullWidth
            />
          </Box> */}
          <Box>
            {type === "Dine In" ? (
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
                    <Table size="small">
                      <TableHead>
                        <TableRow>
                          {columns.map((column) => (
                            <TableCell align="center">
                              {column.label}
                              {column.endIcon && <>({column.endIcon})</>}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {rows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell align="center">{row.orderNo}</TableCell>
                            <TableCell align="center">{row.invoice}</TableCell>
                            <TableCell align="center">
                              {row.customerName}
                            </TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.waiter}</TableCell>
                            <TableCell align="center">
                              {row.tableNumber}
                            </TableCell>
                            
                            <TableCell align="center">
                              {row.orderDate}
                            </TableCell>
                            <TableCell align="center">
                              <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />
                              {row.amount}
                            </TableCell>
                            <TableCell align="center">
                              {/* <Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button> */}
                               {
                                row.state==='PAID'?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='PENDING'?<Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='WAITING'?<Button
                                color="secondary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.state}
                            </Button>
                              }
                            </TableCell>
                            <TableCell align="center" sx={{ p: 0 }}>
                              {/* <IconButton color="primary" size="small">
                                <Edit />
                              </IconButton> */}
                              <IconButton
                                size="small"
                                sx={{ color: "error.main" }}
                                onClick={() => deleteRow(index)}
                              >
                                <Delete />
                              </IconButton>
                              <IconButton
                                color="secondary"
                                size="small"
                                onClick={openModalHandler}
                              >
                                <Visibility />
                              </IconButton>
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
            ) : (
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
                <TableContainer >
                  <Scrollbar>
                    <Table size="small" sx={{ minWidth: 1300 }}>
                      <TableHead>
                        <TableRow>
                          {deliveryColumns.map((column) => (
                            <TableCell align="center">
                              {column.label}
                              {column.endIcon && <>({column.endIcon})</>}
                            </TableCell>
                          ))}
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {deliveryRows.map((row, index) => (
                          <TableRow key={index}>
                            <TableCell align="center">{row.orderNo}</TableCell>
                            <TableCell align="center">{row.invoice}</TableCell>
                            <TableCell align="center">
                              {row.customerName}
                            </TableCell>
                            <TableCell align="center">{row.phone}</TableCell>
                            <TableCell align="center">{row.type}</TableCell>
                            <TableCell align="center">{row.from}</TableCell>
                            
                            <TableCell align="center">
                              {row.orderDate}
                            </TableCell>
                            <TableCell align="center">
                              {" "}
                              <CurrencyRupee
                                fontSize="small"
                                style={{ color: "gray", marginRight: "5px" }}
                              />
                              {row.amount}
                            </TableCell>
                            <TableCell align="center">
                            {
                                row.state==='PAID'?<Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='PENDING'?<Button
                                color="warning"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:row.state==='WAITING'?<Button
                                color="secondary"
                                size="small"
                                variant="outlined"
                              >
                                {row.state}
                              </Button>:
                              <Button
                              color="error"
                              size="small"
                              variant="outlined"
                            >
                              {row.state}
                            </Button>
                              }
                            </TableCell>
                            <TableCell align="center" sx={{ p: 0 }}>
                              {/* <Tooltip title="Edit" placement="left">
                                <IconButton color="primary" size="small">
                                  <Edit />
                                </IconButton>
                              </Tooltip> */}
                              <Tooltip title="View" placement="top">
                                <IconButton
                                  color="secondary"
                                  size="small"
                                  onClick={openModalHandler}
                                >
                                  <Visibility />
                                </IconButton>
                              </Tooltip>
                              <Tooltip title="Delete" placement="top">
                                <IconButton
                                  sx={{ color: "error.main" }}
                                  size="small"
                                >
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
            )}
          </Box>
        </Box>
      {/* // ) : (
      //   <BarPanel />
      // )} */}
    </>
  );
};

export default OrderList;
