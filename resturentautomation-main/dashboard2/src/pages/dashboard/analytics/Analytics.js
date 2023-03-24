import React, { useState } from "react";
import {
  Box,
  Paper,
  Grid,
  Typography,
  Select,
  FormControl,
  MenuItem,
  TextField,
  InputLabel,
  LinearProgress,
  linearProgressClasses,
  styled,
  List,
  ListItem,
  ListItemText,
  Divider,
  Tabs,
  Tab
} from "@mui/material";

import { DatePicker } from "@material-ui/lab";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  registerables
} from "chart.js";

import { Doughnut, Bar } from "react-chartjs-2";

import { CurrencyRupee } from "@mui/icons-material";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ...registerables
);

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 15,
  borderRadius: 10,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: theme.palette.grey[theme.palette.mode === "light" ? 300 : 900]
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 10,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8"
  }
}));

const Analytics = (props) => {
  const [outlet, setOutlet] = useState(0);

  const [data, setData] = useState({
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Revenue",
        barPercentage: 0.6,
        backgroundColor: "#00AB55",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#5BE584"
      }
    ]
  });
  const [wasteData, setWasteData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Waste",
        barPercentage: 0.6,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });
  const [orderTimeData, setOrderTimeData] = useState({
    labels: ["00:00 - 04:00", "04:00 - 08:00", "08:00 - 12:00", "12:00 - 16:00", "16:00 - 20:00"],
    datasets: [
      {
        label: "Revenue",
        barPercentage: 0.5,
        backgroundColor: "#FFC107",
        data: [50, 30, 100, 36, 56, 30, 90],
        hoverBackgroundColor: "#FFE16A"
      }
    ]
  });
  const [opComparisonData, setOpComparisonData] = useState({
    labels: ["Purchase", "Sale", "Waste", "Expense", "Cust Rcv", "Supp Pay"],
    datasets: [
      {
        barPercentage: 0.6,
        backgroundColor: ["#FFC107", "#00AB55", "#3366FF", "#FF4842", "#54D62C", "#1890FF"],
        data: [50, 30, 100, 36, 56, 30, 90],
        hoverBackgroundColor: ["#FFE16A", "#5BE584", "#84A9FF", "#FFA48D", "#229A16", "#0C53B7"]
      }
    ]
  });

  const [totDiscountData, setTotDiscountData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Discount",
        barPercentage: 0.6,
        backgroundColor: "#00AB55",
        data: [35, 55, 80, 70, 56, 20, 50],
        hoverBackgroundColor: "#5BE584"
      }
    ]
  });

  const [totTaxData, setTotTaxData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Tax",
        barPercentage: 0.6,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });

  const [orderTimeDate, setOrderTimeDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];

  const [foodCatagoryPie, setFoodCatagoryPie] = useState({
    labels: ["Sea Food(65%)", "Starters(10%)", "Soups(25%)"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4
      }
    ]
  });
  const [expenses, setExpenses] = useState({
    labels: ["Maintenance(65%)", "Staff(10%)", "Others(25%)"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4
      }
    ]
  });

  const [type, setType] = useState(0);
  const [revenuePeriod, setRevenuePeriod] = useState(0);
  const [revenueTimePeriod, setRevenueTimePeriod] = useState(0);
  const [wastePeriod, setWastePeriod] = useState(0);

  const [sellingTabs, setSellingTabs] = useState(0);
  const sellingTabsChangeHandler = (event, newValue) => {
    setSellingTabs(newValue);
  };

  const [supplierPaymentsTab, setSupplierPaymentsTab] = useState(0);
  const supplierPaymentsTabChangeHandler = (event, newValue) => {
    setSupplierPaymentsTab(newValue);
  };

  return (
    <Grid container sx={{ p: 2 }} direction="column" rowSpacing={2}>
      <Grid item container>
        <Box sx={{ width: "100%", display: "flex", alignItems: "center", mb: 1 }}>
          <Typography variant="h6" sx={{ mr: 1, mb:1 }}>
            Select Outlet
          </Typography>
          <FormControl size="small">
            <InputLabel>Outlet</InputLabel>
            <Select label="Outlet" value={outlet} onChange={(e) => setOutlet(e.target.value)}>
              <MenuItem value={0}>Restaurant 1</MenuItem>
              <MenuItem value={1}>Restaurant 2</MenuItem>
              <MenuItem value={2}>Restaurant 3</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item container spacing={3}>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "#D5AAFF"
            }}
          >
            <Typography variant="body1">Staff Count</Typography>

            <Typography variant="h6" component="div">
              23
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "#FFB5E8"
            }}
          >
            <Typography variant="body1">Total Food Items</Typography>

            <Typography variant="h6" component="div">
              150
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "#B5EAD6"
            }}
          >
            <Typography variant="body1">Total Menu Catagories</Typography>

            <Typography variant="h6" component="div">
              20
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "#FFDAC1"
            }}
          >
            <Typography variant="body1">Total Inventory Items</Typography>

            <Typography variant="h6" component="div">
              250
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "#A3E1DC"
            }}
          >
            <Typography variant="body1">Total Inventory Catagories</Typography>

            <Typography variant="h6" component="div">
              25
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255,223,186,0.8)"
            }}
          >
            <Typography variant="body1">No. of Vendors</Typography>

            <Typography variant="h6" component="div">
              150
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",

              bgcolor: "rgba(255,179,186,0.8)"
            }}
          >
            <Typography variant="body1">SMS Balance</Typography>

            <Typography variant="h6" component="div">
              200
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255,255,186,0.7)"
            }}
          >
            <Typography variant="body1">Email Balance</Typography>

            <Typography variant="h6" component="div">
              250
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              padding: "5px 15px",
              bgcolor: "rgba(255,223,186,0.8)",
              height: "100%"
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="body2">Storage</Typography>
              <Typography variant="caption">10GB free of 30GB</Typography>
            </Box>
            <BorderLinearProgress variant="determinate" value={60} sx={{ height: 10 }} />
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100",
                py: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Sales Revenue</Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb:1 }}>
                  <InputLabel>Select Type</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Dine In</MenuItem>
                    <MenuItem value={2}>Delivery</MenuItem>
                    <MenuItem value={3}>Pick Up</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenuePeriod}
                    onChange={(e) => setRevenuePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Week</MenuItem>
                    <MenuItem value={1}>This Month</MenuItem>
                    <MenuItem value={2}>Last 3 Months</MenuItem>
                    <MenuItem value={3}>Last 6 Months</MenuItem>
                    <MenuItem value={3}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2, mb: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 4 }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  5000
                </Typography>
                <Typography variant="subtitle2">Total Sales - 10 orders</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 3
                }}
              >
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  1000
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  Dine In (5)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 3 }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  2000
                </Typography>
                <Typography variant="subtitle2" color="warning.main">
                  Delivery (3)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  2000
                </Typography>
                <Typography variant="subtitle2" color="error">
                  Pickup (2)
                </Typography>
              </Box>
            </Box>
            <Bar
              data={data}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },

                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100",
                py: 1,
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Revenue Per Day</Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb:1 }}>
                  <InputLabel>Select Type</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Dine In</MenuItem>
                    <MenuItem value={2}>Delivery</MenuItem>
                    <MenuItem value={3}>Pick Up</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenueTimePeriod}
                    onChange={(e) => setRevenueTimePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Day</MenuItem>
                    <MenuItem value={1}>This Week</MenuItem>
                    <MenuItem value={2}>This Month</MenuItem>
                    <MenuItem value={3}>Last 3 Months</MenuItem>
                    <MenuItem value={4}>Last 6 Months</MenuItem>
                    <MenuItem value={5}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", px: 2, mb: 2 }}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 4 }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  5000
                </Typography>
                <Typography variant="subtitle2">Total Sales - 10 orders</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  mr: 3
                }}
              >
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  1000
                </Typography>
                <Typography variant="subtitle2" color="secondary">
                  Dine In (5)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mr: 3 }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  2000
                </Typography>
                <Typography variant="subtitle2" color="warning.main">
                  Delivery (3)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <Typography variant="body1">
                  <CurrencyRupee sx={{ fontSize: 13 }} />
                  2000
                </Typography>
                <Typography variant="subtitle2" color="error">
                  Pickup (2)
                </Typography>
              </Box>
            </Box>
            <Bar
              data={orderTimeData}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: "right"
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">Wastes</Typography>
              <Typography variant="body1">
                Total : <CurrencyRupee sx={{ fontSize: 13 }} />
                1000
              </Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Bar
              data={wasteData}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6" >Food Revenue by Catagory</Typography>
              <FormControl size="small" >
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Doughnut
                height={200}
                data={foodCatagoryPie}
                options={{
                  maintainAspectRatio: false,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        font: {
                          size: 15
                        }
                      }
                    }
                  },
                  cutout: 75
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography variant="h6">Orders</Typography>
              <Typography variant="body1">Total : 500</Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 4
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Dine In
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={60} />
              </Box>

              <Typography variant="subtitle2" sx={{ width: "25%", textAlign: "center" }}>
                500 (50%)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 4
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Take Away
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Typography variant="subtitle2" sx={{ width: "25%", textAlign: "center" }}>
                200 (25%)
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center"
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Delivery
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Typography variant="subtitle2" sx={{ width: "25%", textAlign: "center" }}>
                210 (25%)
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                aligItems: "center",
                mb: 2
              }}
            >
              <Typography variant="h6">Payment Modes</Typography>
              <Typography variant="body1">
                Total : <CurrencyRupee sx={{ fontSize: 13 }} />
                5000
              </Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Cash
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={50} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">600 (50%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Credit Card
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">200 (20%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Debit Card
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={15} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">125 (15%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Wallet
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={10} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">80 (15%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center"
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Cash On Delivery
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={5} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">40 (5%)</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography variant="h6">Total Refund</Typography>
              <Typography variant="body1">
                Total : <CurrencyRupee sx={{ fontSize: 13 }} />
                5000
              </Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Dine In
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={60} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">500 (50%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Take Away
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">500 (50%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Zomato
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={10} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">500 (50%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                Swiggy
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">500 (50%)</Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-around",
                width: "100%",
                alignItems: "center"
              }}
            >
              <Typography sx={{ width: "25%", textAlign: "center" }} variant="subtitle2">
                App
              </Typography>
              <Box sx={{ width: "50%" }}>
                <BorderLinearProgress variant="determinate" value={20} />
              </Box>
              <Box
                sx={{
                  width: "25%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <CurrencyRupee sx={{ fontSize: 16 }} />
                <Typography variant="subtitle2">500 (50%)</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2
              }}
            >
              <Typography variant="h6">Order Statistics</Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb:1}}>
                  <InputLabel>Select Type</InputLabel>
                  <Select label="Select Type" sx={{ width: 150 }}>
                    <MenuItem value={0}>Dine In</MenuItem>
                    <MenuItem value={1}>Zomato</MenuItem>
                    <MenuItem value={2}>Swiggy</MenuItem>
                    <MenuItem value={3}>Own App</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenuePeriod}
                    onChange={(e) => setRevenuePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Week</MenuItem>
                    <MenuItem value={1}>This Month</MenuItem>
                    <MenuItem value={2}>Last 3 Months</MenuItem>
                    <MenuItem value={3}>Last 6 Months</MenuItem>
                    <MenuItem value={3}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <List sx={{ width: "100%" }}>
              <ListItem>
                <ListItemText primary="Orders Received" />
                <Typography variant="subtitle2">5</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Orders Delivered" />
                <Typography variant="subtitle2">5</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Orders Canceled" />
                <Typography variant="subtitle2">0</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Total Refund" />
                <Typography variant="subtitle2">0</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Operation Comparison</Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Bar
              data={opComparisonData}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                // plugins: {
                //   legend: {
                //     onClick: (e, legendItem, legend) => {
                //       const index = legend.chart.data.labels.indexOf(legendItem.text);
                //       legend.chart.toggleDataVisibility(index);
                //       legend.chart.update();
                //     },
                //     labels: {
                //       generateLabels: (chart) => {
                //         let visibility = [];
                //         for (let i = 0; i < chart.data.labels.length; i++) {
                //           if (chart.getDataVisibility(i) === true) {
                //             visibility.push(false);
                //           } else {
                //             visibility.push(true);
                //           }
                //         }
                //         return chart.data.labels.map((label, id) => ({
                //           text: label,
                //           fillStyle: chart.data.datasets[0].backgroundColor[id],
                //           hidden: visibility[id]
                //         }));
                //       }
                //     }
                //   }
                // },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Expenses</Typography>
              <Typography variant="body1">
                Total : <CurrencyRupee sx={{ fontSize: 13 }} />
                5000
              </Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ width: "100%" }}>
              <Doughnut
                height={200}
                data={expenses}
                options={{
                  maintainAspectRatio: false,
                  cutout: 75,
                  plugins: {
                    legend: {
                      display: true,
                      position: "right",
                      labels: {
                        font: {
                          size: 15
                        }
                      }
                    }
                  }
                }}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">
                Total Discounts : <CurrencyRupee sx={{ fontSize: 15 }} />
                1000
              </Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb: 1 }}>
                  <InputLabel>Select Type</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Dine In</MenuItem>
                    <MenuItem value={2}>Delivery</MenuItem>
                    <MenuItem value={3}>Pick Up</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenuePeriod}
                    onChange={(e) => setRevenuePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Week</MenuItem>
                    <MenuItem value={1}>This Month</MenuItem>
                    <MenuItem value={2}>Last 3 Months</MenuItem>
                    <MenuItem value={3}>Last 6 Months</MenuItem>
                    <MenuItem value={3}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Bar
              data={totDiscountData}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                legend: {
                  display: true,
                  position: "right"
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">
                Total Taxes : <CurrencyRupee sx={{ fontSize: 15 }} />
                1000
              </Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb:1 }}>
                  <InputLabel>Select Type</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Type"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                  >
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={1}>Dine In</MenuItem>
                    <MenuItem value={2}>Delivery</MenuItem>
                    <MenuItem value={3}>Pick Up</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenuePeriod}
                    onChange={(e) => setRevenuePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Week</MenuItem>
                    <MenuItem value={1}>This Month</MenuItem>
                    <MenuItem value={2}>Last 3 Months</MenuItem>
                    <MenuItem value={3}>Last 6 Months</MenuItem>
                    <MenuItem value={3}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Bar
              data={totTaxData}
              height={100}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                legend: {
                  display: true,
                  position: "right"
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    }
                  },
                  y: {
                    grid: {
                      display: false
                    }
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={2}>
        <Grid item xs={4}>
          <Paper sx={{ width: "100%", p: 1 }} elevation={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Top/Low Selling</Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1, mb:1 }}>
                  <InputLabel>Select</InputLabel>
                  <Select size="small" label="Select" sx={{ width: 150 }}>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                  </Select>
                </FormControl>
                <FormControl size="small">
                  <InputLabel>Select Period</InputLabel>
                  <Select
                    size="small"
                    sx={{ width: 150 }}
                    label="Select Period"
                    value={revenuePeriod}
                    onChange={(e) => setRevenuePeriod(e.target.value)}
                  >
                    <MenuItem value={0}>This Week</MenuItem>
                    <MenuItem value={1}>This Month</MenuItem>
                    <MenuItem value={2}>Last 3 Months</MenuItem>
                    <MenuItem value={3}>Last 6 Months</MenuItem>
                    <MenuItem value={3}>Last 12 Months</MenuItem>
                  </Select>
                </FormControl>
              </Box>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
              <Tabs value={sellingTabs} onChange={sellingTabsChangeHandler}>
                <Tab label="Top Selling" value={0} sx={{ mr: 2, borderRadius: 0 }} />
                <Tab label="Low Selling" value={1} sx={{ borderRadius: 0 }} />
              </Tabs>
            </Box>
            <List sx={{ width: "100%" }}>
              <ListItem sx={{ bgcolor: "rgba(51,102,255,0.5)", borderRadius: 1 }}>
                <ListItemText primary="Food Name" />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="subtitle2">Amount</Typography>
                  (<CurrencyRupee sx={{ fontSize: 16 }} />)
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Chicken Bharta" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ width: "100%", p: 1 }} elevation={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6" gutterBottom>
                Alert Stocks
              </Typography>
              <Typography variant="body1" component="span" gutterBottom>
                Total Alert Items :{" "}
                <Typography variant="body1" component="span" color="error">
                  10
                </Typography>
              </Typography>
            </Box>
            <List sx={{ width: "100%" }}>
              <ListItem sx={{ bgcolor: "rgba(51,102,255,0.5)", borderRadius: 1 }}>
                <ListItemText primary="Name" />
                <Typography variant="subtitle2">Stock(Unit)</Typography>
              </ListItem>
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Food" />
                <Typography variant="subtitle2" color="error">
                  15(kg)
                </Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper sx={{ width: "100%", p: 1 }} elevation={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6" sx={{width:"50%"}}>Supplier Payments</Typography>
              <FormControl size="small">
                <InputLabel>Select Period</InputLabel>
                <Select
                  size="small"
                  sx={{ width: 150 }}
                  label="Select Period"
                  value={revenuePeriod}
                  onChange={(e) => setRevenuePeriod(e.target.value)}
                >
                  <MenuItem value={0}>This Week</MenuItem>
                  <MenuItem value={1}>This Month</MenuItem>
                  <MenuItem value={2}>Last 3 Months</MenuItem>
                  <MenuItem value={3}>Last 6 Months</MenuItem>
                  <MenuItem value={3}>Last 12 Months</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
              <Tabs value={supplierPaymentsTab} onChange={supplierPaymentsTabChangeHandler}>
                <Tab label="Due Payments" value={0} sx={{ mr: 2, borderRadius: 0 }} />
              </Tabs>
            </Box>
            <List sx={{ width: "100%" }}>
              <ListItem
                sx={{
                  bgcolor: "rgba(51,102,255,0.5)",
                  borderRadius: 1,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center"
                }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="body1">Amount</Typography>
                  (<CurrencyRupee sx={{ fontSize: 16 }} />)
                </Box>
                <Typography variant="body1">Due Date</Typography>
              </ListItem>
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
              <Divider />
              <ListItem
                sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <Typography variant="body1">Vendor Name</Typography>
                <Typography variant="body1">5000.00</Typography>
                <Typography variant="body1">10 May, 2022</Typography>
              </ListItem>
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Grid>
  );
};
export default Analytics;
