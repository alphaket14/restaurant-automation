import React from "react";
import { Grid, Button, IconButton, Typography, Box, Paper, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
const Kitchen = (props) => {
  const { orders } = props;
  const navigate = useNavigate();
  const onViewOrderHandler = (orderMenu) => {
    navigate("/waiter/view-order", { state: { orderMenu, kitchenOrders: true } });
  };
  return (
    <>
      <Grid container spacing={2} sx={{ p: 2 }}>
        {orders.map((order, id) => (
          <Grid item xs={6} sm={4} lg={3}>
            <Paper
              elevation={12}
              fullWidth
              sx={{ display: "flex", flexDirection: "column", p: 1, height: "100%" }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1
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
                  p: 1
                }}
              >
                <Typography variant="body1">Type</Typography>
                <Typography variant="subtitle1">{order.type}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1
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
                  p: 1
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
                  p: 1
                }}
              >
                <Typography variant="body1">Order No.</Typography>
                <Typography variant="subtitle1">{order.orderNo}</Typography>
              </Box>
              {order.type === "Dine In" ? (
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    p: 1
                  }}
                >
                  <Typography variant="body1">Table</Typography>
                  <Typography variant="subtitle1">{order.table}</Typography>
                </Box>
              ) : null}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  p: 1
                }}
              >
                <Typography variant="body1">Amount</Typography>
                <Typography variant="subtitle1">{order.amt}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                  justifyContent: "flex-end"
                }}
              >
                <Button variant="outlined" size="small" fullWidth sx={{ mb: 1 }}>
                  Prepairing
                </Button>
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
    </>
  );
};
export default Kitchen;
