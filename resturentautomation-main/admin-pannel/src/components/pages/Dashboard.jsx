import React, { useState } from "react";
import Drawer from "../navbar/Drawer";
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

import { Doughnut, Bar, Line } from "react-chartjs-2";

import ChartDataLabels from 'chartjs-plugin-datalabels';

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

const Dashboard = (props) => {
  const [outlet, setOutlet] = useState(0);

  const [data, setData] = useState({
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        label: "Revenue",
        barPercentage: 0.6,
        backgroundColor: "#00AB55",
        data: [65, 59, 80, 81, 56, 30, 50],
        tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.label;
                  let value = context.formattedValue;
  
                  if (!label)
                      label = 'Unknown'
  
                  let rupee = '\u20B9' + value;
                  return label + ": " + rupee;
              }
          }
      },  
        hoverBackgroundColor: "#5BE584"
      }
    ]
  });
  const [wasteData, setWasteData] = useState({
    labels: ["Fine Dine ", "Casual Dine", "Sports Bar", "Pubs", "Clubs", "QSR"],
    datasets: [
      {
        label: "Revenue",
        barPercentage: 0.5,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });
  const [citiesData, setCitiesData] = useState({
    labels: ["Mumbai","Chennai","Delhi","Kolkata"],
    datasets: [
      {
        label: "Restaurants",
        barPercentage: 0.3,
        backgroundColor: "#3366FF",
        data: [6, 9, 5, 8],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });
  const [profitGrowthData, setProfitGrowthData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Profit",
        borderColor: "#3366FF",
        data: [50, 30, 82, 36, 56, 30, 90],
        tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.label;
                  let value = context.formattedValue;
  
                  if (!label)
                      label = 'Unknown'
  
                  let percentage = value + '%';
                  return label + ": " + percentage;
              }
          }
      },  
        hoverBackgroundColor: "#FFE16A",
        tension:0.2,
        fill:true
      }
    ]
  });
  const [opComparisonData, setOpComparisonData] = useState({
    labels: ["Dine In(65%)", "Delivery(10%)", "Pick-Up(25%)"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4
      }
    ]
  });

  const [totDiscountData, setTotDiscountData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Customers",
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
        label: "New Customers",
        barPercentage: 0.6,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });
  const [totTransactionsDataBar, setTotTransactionsDataBar] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Cash",
        barPercentage: 0.6,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#84A9FF"
      },
      {
        label: "Credit",
        barPercentage: 0.6,
        backgroundColor: "#00AB55",
        data: [70, 30, 100, 50, 20, 70, 100],
        hoverBackgroundColor: "#5BE584"
      },
      {
        label: "Wallet",
        barPercentage: 0.6,
        backgroundColor: "#FFC107",
        data: [20, 40, 30, 50, 80, 60, 70],
        hoverBackgroundColor: "#FFE16A"
      },
    ]
  });

  const [totTableBookingsData, setTotTableBookingsData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Table Bookings",
        barPercentage: 0.5,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30,50],
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

  const [restaurantCatagoryPie, setRestaurantCatagoryPie] = useState({
    labels: ["Fine Dine(65%)", "Casual Dine(10%)", "Pubs(25%)"],
    datasets: [
      {
        data: [300, 50, 100],
        tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.label;
                  let value = context.formattedValue;
  
                  if (!label)
                      label = 'Unknown'
  
                  let rupee = '\u20B9' + value;
                  return label + ": " + rupee;
              }
          }
      },  
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)", "rgb(255, 205, 86)"],
        hoverOffset: 4
      }
    ]
  });
  const [totTransactionsDataPie, setTotTransactionsDataPie] = useState({
    labels: ["Cash(65%)", "Credit(10%)", "Wallet(25%)"],
    datasets: [
      {
        data: [300, 50, 100],
        tooltip: {
          callbacks: {
              label: function(context) {
                  let label = context.label;
                  let value = context.formattedValue;
  
                  if (!label)
                      label = 'Unknown'
  
                  let rupee = '\u20B9' + value;
                  return label + ": " + rupee;
              }
          }
      },  
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

  const dashboard = (
    <Grid container sx={{ p: 2 }} direction="column" rowSpacing={4}>
      <Grid item container spacing={3}>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">Total Restaurants</Typography>

            <Typography variant="h6" component="div">
              10
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255, 72, 66, 0.5)"
            }}
          >
            <Typography variant="body1">Total Subscribed Restaurants</Typography>

            <Typography variant="h6" component="div">
              8
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Total Unsubscribed Restaurants</Typography>

            <Typography variant="h6" component="div">
              2
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255, 193, 7, 0.5)"
            }}
          >
            <Typography variant="body1">Total SMS</Typography>

            <Typography variant="h6" component="div">
              250
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(0, 171, 85, 0.5)"
            }}
          >
            <Typography variant="body1">Cloud Storage</Typography>

            <Typography variant="h6" component="div">
              500
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255, 193, 7, 0.5)"
            }}
          >
            <Typography variant="body1">Email</Typography>

            <Typography variant="h6" component="div">
              500
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(51,102,255,0.5)"
            }}
          >
            <Typography variant="body1">Total Deliveries</Typography>

            <Typography variant="h6" component="div">
              500
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={3}>
          <Paper
            elevation={12}
            fullWidth
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 15px",
              bgcolor: "rgba(255, 72, 66, 0.5)"
            }}
          >
            <Typography variant="body1">Total Customers</Typography>

            <Typography variant="h6" component="div">
              1000
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      
      <Grid item container spacing={4}>
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
              <Typography variant="h6">Restaurant Categories</Typography>
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
                data={restaurantCatagoryPie}
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
              <Typography variant="h6">Restaurant Categories</Typography>
              <Typography variant="body1">
                Total : 100
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
        
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%",height:"100%" }}>
          <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">Sales Revenue(SaaS)</Typography>
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
              data={data}
              height={150}
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
              <Typography variant="h6">Profit Growth(%)</Typography>
              <Box component="span">
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
            <Line
              data={profitGrowthData}
              height={150}
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
                  },
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
                    },
                    ticks: {
                      // Include a dollar sign in the ticks
                      callback: function(value, index, ticks) {
                          return value+"%";
                      }
                  },
                  min:0
                  }
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Total Orders : 1000</Typography>
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
            <Box sx={{width:"100%"}}>

            <Doughnut
                height={200}
                data={opComparisonData}
                plugins={[ChartDataLabels]}
                options={{
                  maintainAspectRatio: false,
                  cutout: 65,
                  plugins: {
                    datalabels:{
                      color:"#fff"
                    },
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
              <Typography variant="h6">Total Table Bookings : 1000</Typography>
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
              data={totTableBookingsData}
              height={120}
              plugins={[ChartDataLabels]}
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
                  },
                  datalabels:{
                    color:"blue",
                    anchor:"end",
                    align:"top",
                    offset:3
                  }
                },
                borderRadius: 5
              }}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid item container spacing={4}>
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
              <Typography variant="h6">Total Transactions : 1000</Typography>
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
              data={totTransactionsDataBar}
              height={100}
              options={{
                interaction:{
                  mode:"index"
                },
                title: {
                  display: true,
                  fontSize: 20
                },
                scales: {
                  x: {
                    grid: {
                      display: false
                    },
                    stacked:true
                  },
                  y: {
                    grid: {
                      display: false
                    },
                    stacked:true
                  }
                },
                plugins: {
                  legend: {
                    display: false
                  }
                },
                borderRadius: 5,
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
              <Typography variant="h6">Total Transactions</Typography>
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
                data={totTransactionsDataPie}
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

      <Grid item container spacing={4}>
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
                Total Customers
              </Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1 }}>
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
                borderRadius:5,
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
                New Customers
              </Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1 }}>
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
                borderRadius:5,
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
      <Grid item container spacing={4}>
        
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
              <Typography variant="h6">Deliveries</Typography>
              <Typography variant="body1">
                Total : 
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
                Website
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
                Zomato
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
                Swiggy
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
                Uber Eats
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
                <Typography variant="subtitle2">40 (5%)</Typography>
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
                aligItems: "center",
                mb: 2
              }}
            >
              <Typography variant="h6">Customers</Typography>
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
                
                <Typography variant="subtitle2">150 (10%)</Typography>
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
                Website
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
                Zomato
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
                Swiggy
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
                Uber Eats
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
                
                <Typography variant="subtitle2">40 (5%)</Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        
        
      </Grid>
      
      
      <Grid item container spacing={4}>
      <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">Cities</Typography>
              <Typography variant="body1">
                Total : 30
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
              data={citiesData}
              height={100}
              plugins={[ChartDataLabels]}
              options={{
                title: {
                  display: true,
                  fontSize: 20
                },
                plugins: {
                  legend: {
                    display: false
                  },
                  datalabels:{
                    color:"blue",
                    anchor:"end",
                    align:"top",
                    offset:3
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
          <Paper sx={{ width: "100%", p: 1 }} elevation={12}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Top Restaurants</Typography>
              <Box component="span">
                <FormControl size="small" sx={{ mr: 1 }}>
                  <InputLabel>Select</InputLabel>
                  <Select size="small" label="Select" sx={{ width: 100 }}>
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
            <List sx={{ width: "100%" }}>
              <ListItem sx={{ bgcolor: "rgba(51,102,255,0.5)", borderRadius: 1 }}>
                <ListItemText primary="Food Name" />
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Typography variant="subtitle2">Revenue</Typography>
                  (<CurrencyRupee sx={{ fontSize: 16 }} />)
                </Box>
              </ListItem>
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText primary="Restaurant Name" />
                <Typography variant="subtitle2">500.00</Typography>
              </ListItem>
              <Divider />
              
            </List>
          </Paper>
        </Grid>
      </Grid>
     
    </Grid>
  )

  return (
    <div>
    <Drawer content={dashboard}>
    </Drawer>
    </div>
  );
};
export default Dashboard;
