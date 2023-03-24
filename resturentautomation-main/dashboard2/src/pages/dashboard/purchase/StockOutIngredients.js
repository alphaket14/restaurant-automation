import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Paper,
  Box,
  Button,
  IconButton,
  TextField,
  Grid,
  TableContainer,
  Divider,
  Typography,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Autocomplete,
  Checkbox,
  Tooltip,
  TableHead
} from "@mui/material";
import { Edit, Delete, CurrencyRupee, Add } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Scrollbar from "src/components/Scrollbar";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const StockOutIngredients = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 80 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Supplied Date", minWidth: 150 },
    { label: "GST No", minWidth: 150 },
    { label: "Ingredient Category", minWidth: 170 },
    { label: "Ingredient Item", minWidth: 150 },
    { label: "Ingredient Unit", minWidth: 150 },
    { label: "City", minWidth: 100 },
    { label: "Currency", minWidth: 100 },
    { label: "Payment Type", minWidth: 150 },
    { label: "Credit Period", minWidth: 150 },
    { label: "Action", minWidth: 120 }
  ];

  const createData = (sl, invNo, supplierName, date, gstno, invcat, invitem, invunit, city, currency, paytype, credperiod, action) => {
    return { sl, invNo, supplierName, date, gstno, invcat, invitem, invunit, city, currency, paytype, credperiod, action };
  };
  const data = [
    createData( 1, 1001, "Supplier 1", "01-01-2023", 200, "Category 1", "Item 1", "Kilogram", "City 1", "Rupee", "Online", "1 month")
  ];
  const [rows, setRows] = useState(data);
  const cats = [];
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setRows(newRows);
    }
  };
  const navigate = useNavigate();
  return (
    <>
      <Box 
        sx={{
          width: "100%",
          paddingLeft: 2,
          mb: 1,
          paddingBottom: 6,
        }}
      >
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={cats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.foodCategory}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.foodCategory}
        </li>
      )}
      sx={{width:"20%" , float: "left"}}
      renderInput={(params) => (
        <TextField {...params} label="Inventory Category" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={cats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.foodCategory}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.foodCategory}
        </li>
      )}
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      renderInput={(params) => (
        <TextField {...params} label="Inventory Item" placeholder="Search" />
      )}
    />
        {/*<Button
          component={NavLink}
          to="/dashboard/purchase/suppliermanage"
          variant="contained"
          sx={{float:"right"}}
          startIcon={<AddIcon />}
        >
          Add Supplier
        </Button>*/}
      </Box>
      <Divider sx={{ mb: 2 }} />
      <Grid
          container
          style={{
            borderRadius: 5,
            border: "1px solid grey",
            boxSizing: "border-box",
            padding: "20px 20px",
            margin: "20px 0px",
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
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows[0] ? (
              rows.map((row, id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell align="center">{row.sl}</TableCell>
                    <TableCell align="center">{row.invNo}</TableCell>
                    <TableCell align="center">{row.supplierName}</TableCell>
                    <TableCell align="center">{row.date}</TableCell>
                    <TableCell align="center">{row.gstno}</TableCell>
                    <TableCell align="center">{row.invcat}</TableCell>
                    <TableCell align="center">{row.invitem}</TableCell>
                    <TableCell align="center">{row.invunit}</TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                    <TableCell align="center"><CurrencyRupee style={{color:"gray"}}/></TableCell>
                    <TableCell align="center">{row.paytype}</TableCell>
                    <TableCell align="center">{row.credperiod}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={() => navigate("/dashboard/purchase/suppliermanage")}
                          //onClick={openModalHandler2}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton 
                        sx={{ color: "error.main" }} 
                        size="small"
                        onClick={() => deletePosition(id)}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow hover>
                <TableCell colSpan={columns.length} align="center">
                  No data available in table.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </Scrollbar>
      </TableContainer>
      </Grid>
    </>
  );
};
export default StockOutIngredients;
