import React, {useState} from "react";
import {
  Paper,
  Box,
  Button,
  IconButton,
  Typography,
  Divider,
  Grid,
  Tooltip,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Autocomplete,
  Checkbox,
  TextField,
  TableHead,
  TableContainer
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { CurrencyRupee } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import Scrollbar from "src/components/Scrollbar";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import FilePresentIcon from '@mui/icons-material/FilePresent';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const ReturnInvoice = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 80 },
    { label: "Purchase Date", minWidth: 150 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Inventory Category", minWidth: 170 },
    { label: "Inventory Item", minWidth: 150 },
    { label: "Unit", minWidth: 100 },
    { label: "Order Qty", minWidth: 100 },
    { label: "Price/Unit", minWidth: 100 },
    { label: "Total Amount", minWidth: 150 },
    { label: "Tax %", minWidth: 100 },
    { label: "Discount", minWidth: 100 },
    { label: "Invoice Amt", minWidth: 150 },
    { label: "Action", minWidth: 200 }
  ];

  const createData = (sl, purch_date, supp_code, supplierName, invcat, invitem, unit, quat, rate, tot_amt, tax, disc, inv_amt) => {
    return {sl, purch_date, supp_code, supplierName, invcat, invitem, unit, quat, rate, tot_amt, tax, disc, inv_amt };
  };
  const data = [createData(1, "01-01-2003", 100, "Name", "Category 1", "Item 1", "Kilogram", 20, 50, 1000, 300, 200, 1100)]
  const [rows, setRows] = useState(data);
  const cats =[]
  const printSoft = () => {
    window.print();
  }
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
        {/* <Typography variant="h5">Purchase Return List</Typography> */}
        <Button
          component={NavLink}
          to="/dashboard/purchase/purchasereturn"
          variant="contained"
          sx={{float:"right"}}
          startIcon={<AddIcon />}
        >
          Add Return
        </Button>
      </Box>
      {/*<Divider sx={{ mb: 2 }} />*/}
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
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign:"center" }}
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
              rows.map((row) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell style={{ textAlign: "center"}}>{row.sl}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.purch_date}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.supp_code}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.supplierName}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.invcat}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.invitem}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.unit}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>{row.quat}</TableCell>
                    <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.rate}</TableCell>
                    <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.tot_amt}</TableCell>
                    <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.tax}</TableCell>
                    <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.disc}</TableCell>
                    <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.inv_amt}</TableCell>
                    <TableCell style={{ textAlign: "center"}}>
                    <Tooltip title="Soft Copy" placement="top">
                      <IconButton onClick={printSoft} color="secondary">
                        <FilePresentIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Edit" placement="top">
                      <IconButton color="primary" >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton>
                        <DeleteIcon color="error" />
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
export default ReturnInvoice;
