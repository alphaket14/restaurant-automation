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

const DashboardTickets = (props) => {
  
  const [totalTicketsReceivedData, setTotalTicketsReceivedData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "New Tickets",
        barPercentage: 0.5,
        backgroundColor:"#FFC107",
        data: [5, 10, 2, 0, 6, 11, 12],
        hoverBackgroundColor:"#FFE16A",
      }
    ]
  });

 
  const [summaryData, setSummaryData] = useState({
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "New",
        barPercentage: 0.6,
        backgroundColor: "#3366FF",
        data: [65, 59, 80, 81, 56, 30, 50],
        hoverBackgroundColor: "#84A9FF"
      },
      {
        label: "Closed",
        barPercentage: 0.6,
        backgroundColor: "#00AB55",
        data: [70, 30, 100, 50, 20, 70, 100],
        hoverBackgroundColor: "#5BE584"
      },
      {
        label: "Overdue",
        barPercentage: 0.6,
        backgroundColor: "#FFC107",
        data: [20, 40, 30, 50, 80, 60, 70],
        hoverBackgroundColor: "#FFE16A"
      },
    ]
  });

  const [totalTicketsClosedData, setTotalTicketsClosedData] = useState({
    labels: ["April 27 ", "April 28", "April 29", "April 30", "May 1", "May 2", "May 3"],
    datasets: [
      {
        label: "Closed Tickets",
        barPercentage: 0.5,
        backgroundColor: "#3366FF",
        data: [6, 5, 8, 8, 5, 3,5],
        hoverBackgroundColor: "#84A9FF"
      }
    ]
  });

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

  const [ticketsOverviewDataPie, setTicketsOverviewDataPie] = useState({
    labels: ["New Tickets", "Active Tickets", "Closed Tickets","On-Hold Tickets","Assigned Tickets","Overdue Tickets"],
    datasets: [
      {
        data: [10, 20, 30, 25, 30, 50],
        backgroundColor: ["yellow", "blue", "red","green","pink","orange"],
        hoverOffset: 4
      }
    ]
  });

  const [openTicketsDataPie, setOpenTicketsDataPie] = useState({
    labels: ["Concluded", "Pending", "Unassigned",],
    datasets: [
      {
        data: [10, 20, 30],
        backgroundColor: [ "blue", "red","green"],
        hoverOffset: 4
      }
    ]
  });
  const [revenuePeriod, setRevenuePeriod] = useState(0);

  return (
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
            <Typography variant="body1">All Tickets</Typography>

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
            <Typography variant="body1">New Tickets</Typography>

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
            <Typography variant="body1">Active Tickets</Typography>

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
            <Typography variant="body1">Closed Tickets</Typography>

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
            <Typography variant="body1">On-Hold Tickets</Typography>

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
            <Typography variant="body1">Assigned Tickets</Typography>

            <Typography variant="h6" component="div">
              5
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
            <Typography variant="body1">Overdue Tickets</Typography>

            <Typography variant="h6" component="div">
              50
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
              <Typography variant="h6">Overview</Typography>
              <Typography variant="body2">Total : 100</Typography>
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
                height={300}
                plugins={[ChartDataLabels]}
                data={ticketsOverviewDataPie}
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
                    },
                    datalabels:{
                        color:"white"
                    }
                  },
                  cutout: 80
                }}
              />
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%",position:"relative" }}>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
              }}
            >
              <Typography variant="h6">Request Summary</Typography>
              <Typography variant="body2">Total : 100</Typography>
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
            style={{position:"absolute",bottom:0}}
              data={summaryData}
              height={180}
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
        
      </Grid>
      <Grid item container spacing={4}>
        <Grid item xs={6}>
          <Paper elevation={12} sx={{ p: 1, width: "100%", height: "100%" }}>
            <Box
              sx={{
                display: "flex",
                width: "100",
                justifyContent: "space-between",
                alignItems: "center",
                mb:1
              }}
            >
              <Typography variant="h6">Total Tickets : 100</Typography>
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
              data={totalTicketsReceivedData}
              height={120}
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
                display: "flex",
                width: "100",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Total Tickets Closed : 100</Typography>
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
              data={totalTicketsClosedData}
              height={120}
              
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
                alignItems: "center"
              }}
            >
              <Typography variant="h6">Open Tickets By Status</Typography>
              <Typography variant="body2">Total : 100</Typography>
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
                height={300}
                plugins={[ChartDataLabels]}
                data={openTicketsDataPie}
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
                    },
                    datalabels:{
                        color:"white"
                    }
                  },
                  cutout: 80
                }}
              />
            </Box>
          </Paper>
        </Grid>
        
      </Grid>
     
    </Grid>
  );
};
export default DashboardTickets;
