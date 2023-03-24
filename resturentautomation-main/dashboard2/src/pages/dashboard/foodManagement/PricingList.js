import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Divider,
  Tooltip,
  Box
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
const PricingList = (props) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Food Catagory", minWidth: 50, maxWidth: 120 },
    { label: "Food Name", minWidth: 50, maxWidth: 120 },
    { label: "MRP", minWidth: 50, maxWidth: 120 },
    { label: "Dynamic Price", minWidth: 50, maxWidth: 120 },
    { label: "From", minWidth: 50, maxWidth: 120 },
    { label: "To", minWidth: 50, maxWidth: 120 },
    { label: "Weekdays", minWidth: 50, maxWidth: 120 },
    { label: "Recurrence", minWidth: 50, maxWidth: 120 },
    { label: "Rotation", minWidth: 50, maxWidth: 120 },
    { label: "No. of Weeks", minWidth: 50, maxWidth: 120 },
    { label: "Status", minWidth: 50, maxWidth: 120 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (
    itemCode,
    categoryName,
    foodName,
    mrp,
    dynamicPrice,
    from,
    to,
    weekdays,
    recurrence,
    rotation,
    weeks,
    status
  ) => {
    return {
      itemCode,
      categoryName,
      foodName,
      mrp,
      dynamicPrice,
      from,
      to,
      weekdays,
      recurrence,
      rotation,
      weeks,
      status
    };
  };

  const rows = [
    createData(
      "A1",
      "Category name",
      "Food Name",
      100,
      120,
      "07-06-2022",
      "10-06-2022",
      "Mon, Tue, Wed",
      "",
      "",
      3,
      "ACTIVE"
    )
  ];

  const [status, setStatus] = useState(rows[0].status);

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Dynamic Pricing List
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
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/dashboard/foodmanagement/pricing/dynamic-pricing")}
        >
          Add Dynamic Pricing
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
          <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1900 }}>
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
                    <TableCell align="center">{row.itemCode}</TableCell>
                    <TableCell align="center">{row.categoryName}</TableCell>
                    <TableCell align="center">{row.foodName}</TableCell>
                    <TableCell align="center">{row.mrp}</TableCell>
                    <TableCell align="center">{row.dynamicPrice}</TableCell>
                    <TableCell align="center">{row.from}</TableCell>
                    <TableCell align="center">{row.to}</TableCell>
                    <TableCell align="center">{row.weekdays}</TableCell>
                    <TableCell align="center">{row.recurrence}</TableCell>
                    <TableCell align="center">{row.rotation}</TableCell>
                    <TableCell align="center">{row.weeks}</TableCell>
                    <TableCell align="center">
                      <Select
                        size="small"
                        value={status}
                        onChange={(e) => setStatus(e.target.value)}
                      >
                        <MenuItem value="ACTIVE">ACTIVE</MenuItem>
                        <MenuItem value="INACTIVE">INACTIVE</MenuItem>
                      </Select>
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() =>
                            navigate("/dashboard/foodmanagement/pricing/dynamic-pricing")
                          }
                        >
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
export default PricingList;
