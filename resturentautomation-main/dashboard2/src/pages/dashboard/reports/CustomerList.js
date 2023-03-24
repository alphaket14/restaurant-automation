import React from "react";
import { useNavigate } from "react-router-dom";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid";
import {
  Input,
  Box,
  Button,
  TextField,
  Grid,
  IconButton,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
  Divider,
  Typography,
  Tooltip
} from "@mui/material";

import { CurrencyRupee, Edit, Delete, Add } from "@mui/icons-material";

import Scrollbar from "../../../components/Scrollbar";

const CustomerList = (props) => {
  const navigate = useNavigate();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Customer ID", minWidth: 50, maxWidth: 100 },
    { label: "Customer Name", minWidth: 50, maxWidth: 100 },
    { label: "Contact No.", minWidth: 50, maxWidth: 100 },
    {
      label: "Email",
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Order Type",
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Address",
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "City",
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Pincode",
      minWidth: 50,
      maxWidth: 100
    },
    {
      label: "Actions",
      minWidth: 20,
      maxWidth: 50
    }
  ];

  const createRows = (custId, custName, phone, email, orderType, address, city, pin) => ({
    custId,
    custName,
    phone,
    email,
    orderType,
    address,
    city,
    pin
  });

  const rows = [
    createRows(1, "Name", +91445221451, "email@gmail.com", "Dine In", "address", "City", 456123)
  ];

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Customer List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between", mb: 1 }}>
        <TextField size="small" label="Search" sx={{ width: "50%" }} />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/dashboard/report/customer/add-customer")}
        >
          Add Customer
        </Button>
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
          <Table size="small"  sx={{ minWidth: 1500 }}>
            <TableHead>
              <TableRow>
                {columns.map((column, id) => (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, id) => (
                <TableRow>
                  <TableCell align="center">{id + 1}</TableCell>
                  <TableCell align="center">{row.custId}</TableCell>
                  <TableCell align="center">{row.custName}</TableCell>
                  <TableCell align="center">{row.phone}</TableCell>
                  <TableCell align="center">{row.email}</TableCell>
                  <TableCell align="center">{row.orderType}</TableCell>
                  <TableCell align="center">{row.address}</TableCell>
                  <TableCell align="center">{row.city}</TableCell>
                  <TableCell align="center">{row.pin}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton
                        size="small"
                        color="primary"
                        onClick={() => navigate("/dashboard/report/customer/add-customer")}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton size="small" sx={{ color: "error.main" }}>
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
      </Grid>
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
    </>
  );
};
export default CustomerList;
