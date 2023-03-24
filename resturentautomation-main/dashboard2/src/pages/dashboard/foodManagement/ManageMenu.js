import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Typography,
  Paper
} from "@mui/material";
const ManageMenu = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <Typography variant="h5" gutterBottom>
        Manage Menu
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box"
        }}
      >
        <Grid item container xs={12} direction="column" rowSpacing={2} sx={{ p: 2 }}>
          <Grid item>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Typography variant="body1">Base Menu</Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard/foodmanagement/managefood/foodlist")}
              >
                Manage
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Typography variant="body1">Home Delivery</Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard/foodmanagement/managefood/foodlist")}
              >
                Manage
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Typography variant="body1">Pick-Up</Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard/foodmanagement/managefood/foodlist")}
              >
                Manage
              </Button>
            </Paper>
          </Grid>
          <Grid item>
            <Paper
              elevation={6}
              sx={{
                p: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%"
              }}
            >
              <Typography variant="body1">Dine In</Typography>
              <Button
                variant="contained"
                onClick={() => navigate("/dashboard/foodmanagement/managefood/foodlist")}
              >
                Manage
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ManageMenu;
