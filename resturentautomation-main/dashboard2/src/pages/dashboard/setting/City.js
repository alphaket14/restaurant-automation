import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Grid,
  Button,
  IconButton,
  Typography,
  Divider,
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
  Box
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { CurrencyRupee } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
const City = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "ID", minWidth: 50, maxWidth: 100 },
    { label: "Name", minWidth: 50, maxWidth: 200 },

    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (id, name) => {
    return { id, name };
  };

  const rows = [createData(20, "Mumbai")];

  return (
    <>
      <Grid container sx={{ mb: 1 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          City
        </Typography>
        <Divider sx={{ mb: 2, width: "100%" }} />
        <Grid item container rowSpacing={3} direction="column">
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Search City
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="Enter a location" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                City Name
              </Typography>
              <TextField fullWidth size="small" type="text" placeholder="City" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Latitude
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Longitude
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Time to Travel 1km
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Maximum Deliverable Distance(km)
              </Typography>
              <TextField fullWidth size="small" type="text" />
            </Grid>
            <Grid item xs={4}>
              <Typography variant="body1" gutterBottom>
                Delivery Charge Methods
              </Typography>
              <Select size="small" fullWidth>
                <MenuItem>Fixed Delivery Charges</MenuItem>
                <MenuItem>Per Km Delivery Charges</MenuItem>
                <MenuItem>Range wise Delivery Charges</MenuItem>
              </Select>
            </Grid>
          </Grid>

          <Grid item container justifyContent="right" spacing={1}>
            <Grid item xs={1}>
              <Button variant="outlined" fullWidth>
                Reset
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button fullWidth variant="contained">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom>
        City Details
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
      </Box>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
      <TableContainer >
        <Scrollbar>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      align="center"
                      sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.label}
                      {column.endIcon && <>({column.endIcon})</>}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton color="primary" size="small">
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton sx={{ color: "error.main" }} size="small">
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      </Grid>
    </>
  );
};
export default City;
