import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Paper,
  TextField,
  Checkbox
} from "@mui/material";
import { Star, ArrowBack, ArrowRight, Replay, CheckCircle } from "@mui/icons-material";

const OrderHistory = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <AppBar
        elevation={1}
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "#fff",
          maxHeight: 50,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar sx={{ p: "2px 5px", display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
          <Typography sx={{ ml: 1, color: "#000" }} variant="h6">
            Order History
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ p: 1 }}>
        <TextField
          variant="outlined"
          InputProps={{
            startAdornment: (
              <Box sx={{ color: "#e23744", mr: 1 }}>
                <i className="fas fa-search"></i>
              </Box>
            )
          }}
          size="small"
          type="search"
          placeholder="Search"
          fullWidth
        />
        <Grid item container direction="column" sx={{ mt: 1 }}>
          <Paper elevation={6} sx={{ p: "6px", mb: 1 }}>
            <Box
              sx={{
                pb: "5px",
                display: "flex",
                justifyContent: "space-between"
                // borderBottom: "1px solid grey"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 50,
                    width: 50,
                    overflow: "hidden",
                    borderRadius: 1
                  }}
                >
                  <img
                    src="burgerking.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%" }}
                  />
                </Box>

                <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight={600}>
                    Burger King
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Kolkata
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    28 mins
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button variant="text" size="small" endIcon={<ArrowRight />}>
                  View Menu
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
                // borderBottom: "1px solid grey"
              }}
            >
              <Typography variant="caption" color="text.secondary">
                05-03-22 at 20:15
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>
                349.50
              </Typography>
            </Box>
            <Box
              sx={{ py: 1, display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<Replay />}
                fullWidth
                sx={{ mr: "6px" }}
              >
                Reorder
              </Button>
              <Button variant="contained" size="small" startIcon={<Star />} fullWidth>
                Rate Order
              </Button>
            </Box>
            <Box sx={{ py: 1, display: "flex", alignItems: "center" }}>
              <CheckCircle sx={{ mr: 0.5, color: "green" }} />
              <Typography variant="body1">Delivered</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ p: "6px", mb: 1 }}>
            <Box
              sx={{
                pb: "5px",
                display: "flex",
                justifyContent: "space-between"
                // borderBottom: "1px solid grey"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 50,
                    width: 50,
                    overflow: "hidden",
                    borderRadius: 1
                  }}
                >
                  <img
                    src="burgerking.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%" }}
                  />
                </Box>

                <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight={600}>
                    Burger King
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Kolkata
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    28 mins
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button variant="text" size="small" endIcon={<ArrowRight />}>
                  View Menu
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
                // borderBottom: "1px solid grey"
              }}
            >
              <Typography variant="caption" color="text.secondary">
                05-03-22 at 20:15
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>
                349.50
              </Typography>
            </Box>
            <Box
              sx={{ py: 1, display: "flex", alignItems: "center", justifyContent: "space-around" }}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<Replay />}
                fullWidth
                sx={{ mr: "6px" }}
              >
                Reorder
              </Button>
              <Button variant="contained" size="small" startIcon={<Star />} fullWidth>
                Rate Order
              </Button>
            </Box>
            <Box sx={{ py: 1, display: "flex", alignItems: "center" }}>
              <CheckCircle sx={{ mr: 0.5, color: "green" }} />
              <Typography variant="body1">Delivered</Typography>
            </Box>
          </Paper>
          <Paper elevation={6} sx={{ p: "6px", mb: 1 }}>
            <Box
              sx={{
                pb: "5px",
                display: "flex",
                justifyContent: "space-between"
                // borderBottom: "1px solid grey"
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    position: "relative",
                    height: 50,
                    width: 50,
                    overflow: "hidden",
                    borderRadius: 1
                  }}
                >
                  <img
                    src="burgerking.jpg"
                    style={{ position: "absolute", height: "100%", width: "100%" }}
                  />
                </Box>

                <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" fontWeight={600}>
                    Burger King
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    Kolkata
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    28 mins
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Button variant="text" size="small" endIcon={<ArrowRight />}>
                  View Menu
                </Button>
              </Box>
            </Box>
            <Box
              sx={{
                py: 1,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center"
                // borderBottom: "1px solid grey"
              }}
            >
              <Typography variant="caption" color="text.secondary">
                05-03-22 at 20:15
              </Typography>
              <Typography variant="subtitle2" fontWeight={600}>
                349.50
              </Typography>
            </Box>
            <Box
              sx={{ py: 1, display: "flex", alignItems: "center", justifyContent: "space-around" }}
            >
              <Button
                variant="contained"
                size="small"
                startIcon={<Replay />}
                fullWidth
                sx={{ mr: "6px" }}
              >
                Reorder
              </Button>
              <Button variant="contained" size="small" startIcon={<Star />} fullWidth>
                Rate Order
              </Button>
            </Box>
            <Box sx={{ py: 1, display: "flex", alignItems: "center" }}>
              <CheckCircle sx={{ mr: 0.5, color: "green" }} />
              <Typography variant="body1">Delivered</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};
export default OrderHistory;
