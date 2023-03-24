import React from "react";

import Scrollbar from "../../../components/Scrollbar";

import { Paper, Grid, Box, Typography, styled, Button } from "@mui/material";

const KitchenView = (props) => {
  const CustomColor = styled(Typography)(({ theme }) => ({
    // background: "-webkit-linear-gradient(-45deg, #FF4842 , #3366FF )",
    background: "-webkit-linear-gradient(-45deg, #007B55 , #FFC107 )",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  }));

  const colors = {
    green: {
      hex: "#00AB55",
      alpha_2: "rgba(0, 171, 85, 0.2)",
      alpha_3: "rgba(0, 171, 85, 0.3)"
    },
    blue: {
      hex: "#3366FF",
      alpha_2: "rgba(51,102,255,0.2)",
      alpha_3: "rgba(51,102,255,0.3)"
    },
    yellow: {
      hex: "#FFC107",
      alpha_2: "rgba(255, 193, 7, 0.2)",
      alpha_3: "rgba(255, 193, 7, 0.3)"
    }
  };

  const orders = [
    {
      orderNo: 12,
      tableNo: 2,
      type: "Dine In",
      from: "Restaurant",
      waiterName: "Captain",
      color: {
        hex: colors.green.hex,
        rgba: colors.green.alpha_3
      },
      menu: [
        { name: "Kebab Platter", qty: 1 },
        { name: "Veg Soup", qty: 3 },
        { name: "Kebab Platter", qty: 1 },
        { name: "Veg Soup", qty: 3 }
      ]
    },
    {
      orderNo: 10,
      tableNo: 3,
      type: "Dine In",
      from: "Garden",
      waiterName: "Captain",
      color: {
        hex: colors.blue.hex,
        rgba: colors.blue.alpha_3
      },
      menu: [
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Kadhai Chicken", qty: 3 }
      ]
    },
    {
      orderNo: 10,
      tableNo: 3,
      type: "Delivery",
      from: "Zomato",
      color: {
        hex: colors.green.hex,
        rgba: colors.green.alpha_3
      },
      menu: [
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 }
      ]
    },
    {
      orderNo: 10,
      tableNo: 3,
      type: "Pick Up",
      from: "Swiggy",
      color: {
        hex: colors.yellow.hex,
        rgba: colors.yellow.alpha_3
      },
      menu: [
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 },
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 }
      ]
    },
    {
      orderNo: 10,
      tableNo: 3,
      type: "Delivery",
      from: "App",
      color: {
        hex: colors.blue.hex,
        rgba: colors.blue.alpha_3
      },
      menu: [
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 }
      ]
    },
    {
      orderNo: 10,
      tableNo: 3,
      type: "Dine In",
      from: "Garden",
      waiterName: "Captain",
      color: {
        hex: colors.yellow.hex,
        rgba: colors.yellow.alpha_3
      },
      menu: [
        { name: "Biriyani", qty: 4 },
        { name: "Kadhai Chicken", qty: 3 }
      ]
    }
  ];

  return (
    <>
      <Grid container sx={{ padding: 1 }} spacing={2}>
        {orders.map((order, id) => (
          <Grid item xs={4} lg={3}>
            <Paper elevation={6} fullWidth sx={{ bgcolor: order.color.rgba, padding: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "100%",
                  margin: 0
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: "60%",
                    padding: "0 5px",
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                  }}
                >
                  <Typography variant="body1" component="div">
                    Order No. :{" "}
                    <Typography variant="h6" component="span">
                      {order.orderNo}
                    </Typography>
                  </Typography>
                  {order.type === "Dine In" ? (
                    <Typography variant="body1" component="div">
                      Table No. :{" "}
                      <Typography variant="h6" component="span">
                        {order.tableNo}
                      </Typography>
                    </Typography>
                  ) : null}
                </Box>
                <Box
                  sx={{ width: "40%", padding: "0 5px", display: "flex", justifyContent: "right" }}
                >
                  <Box
                    component="div"
                    sx={{
                      bgcolor: order.color.hex,
                      height: 55,
                      width: 55,
                      borderRadius: "50%",
                      padding: "0 3px",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center"
                    }}
                  >
                    <Typography variant="caption">15 min</Typography>
                  </Box>
                </Box>
              </Box>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    margin: "5px 0",
                    justifyContent: "space-around",
                    alignItems: "center"
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      padding: "4px 5px",
                      borderRadius: 1,
                      boxShadow: "1px 1px 2px rgba(0,0,0,0.3),-1px -1px 2px rgba(255,255,255,0.3) "
                    }}
                  >
                    {order.from}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      padding: "4px 5px",
                      borderRadius: 1,
                      boxShadow: "1px 1px 2px rgba(0,0,0,0.3),-1px -1px 2px rgba(255,255,255,0.3)"
                    }}
                  >
                    {order.type}
                  </Typography>
                </Box>
                {order.waiterName && (
                  <Typography variant="body2" component="div" gutterBottom>
                    Waiter: {order.waiterName}
                  </Typography>
                )}
                <Box
                  component="div"
                  sx={{
                    maxHeight: 160,
                    marginBottom: 1,
                    boxSizing: "border-box",
                    padding: 1,
                    borderRadius: 2,
                    // bgcolor: "rgba(51,102,255,0.3)",
                    boxShadow: "2px 2px 2px rgba(0,0,0,0.3),-1px -1px 2px rgba(255,255,255,0.3)"
                  }}
                >
                  <Scrollbar
                    sx={{
                      height: "100%",
                      maxHeight: 150,
                      "& .simplebar-content": {
                        height: "100%",
                        display: "flex",
                        flexDirection: "column"
                      }
                    }}
                  >
                    {order.menu.map((menuItem, id) => (
                      <Box
                        component="div"
                        sx={{
                          padding: "3px",
                          marginBottom: 1
                        }}
                      >
                        <Typography variant="body1">
                          <Typography
                            variant="subtitle1"
                            component="span"
                            sx={{
                              color: "#000",
                              p: "2px 7px",
                              borderRadius: "50%",
                              bgcolor: order.color.hex
                            }}
                          >
                            {menuItem.qty}
                          </Typography>{" "}
                          {menuItem.name}
                        </Typography>
                      </Box>
                    ))}
                  </Scrollbar>
                </Box>
                <Button size="small" variant="contained">
                  Order Ready
                </Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
export default KitchenView;


