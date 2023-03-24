import React, {useState} from "react";
import {
  Paper,
  TableContainer,
  Divider,
  Typography,
  Grid,
  Table,
  TextField,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Autocomplete,
  Box,
  Checkbox,
  Tooltip,
  IconButton,
  Button
} from "@mui/material";
import { Edit, Delete, CurrencyRupee, Add } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FilePresentIcon from '@mui/icons-material/FilePresent';
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const SupplierLedger = (props) => {
  const columns = [
    { label: "Invoice No", minWidth: 120 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Purchased Date", minWidth: 150 },
    { label: "Unit", minWidth: 150 },
    { label: "Price/Unit", minWidth: 170 },
    { label: "Discount Amount", minWidth: 150 },
    { label: "Tax Amount", minWidth: 150 },
    { label: "Invoice Amount", minWidth: 150 },
    //{ label: "Deposit ID", minWidth: 150 },
    //{ label: "Debit", minWidth: 100 },
    //{ label: "Credit", minWidth: 100 },
    //{ label: "Balance", minWidth: 100 },
    { label: "Action", minWidth: 180 }
  ];

  const createData = (sl, invno, suppcode, suppname, purch_date, unit, rate, discamt, tax, invamt) => {
    return {sl, invno, suppcode, suppname, purch_date, unit, rate, discamt, tax, invamt};
  };
  const data = [
    createData(1, 100, 100, "Name", "01-01-2023", "Litre", 100, 500, 100, 1000)
  ]
  const [rows, setRows] = useState(data);
  const cats = [];
  const [startDate,SetStartDate] = useState(null);
  const [endDate,SetEndDate] = useState(null);
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setRows(newRows);
    }
  };
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
        <TextField {...params} label="Supplier Code" placeholder="Search" />
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
        <TextField {...params} label="Supplier Name" placeholder="Search" />
      )}
    />
    <DatePicker
      inputFormat="dd/MM/yyyy"
      value={endDate}
      onChange={(newValue) => {
      SetEndDate(newValue);
      }}
      renderInput={(params) => (
      <TextField 
      {...params}
      label="To" sx={{ width: "15%", float: "right" }}
        size="small" helperText={null}/>
      )}
    />
    <DatePicker
      inputFormat="dd/MM/yyyy"
      value={startDate}
      onChange={(newValue) => {
        SetStartDate(newValue);
      }}
      renderInput={(params) => (
      <TextField 
        {...params}
        label="From" sx={{width: "15%", float: "right", marginRight:"10px" }}
      size="small" helperText={null}/>
      )}
    />
      </Box>
      {/* Second block */}
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
        <Table size="small">
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
              rows.map((row, id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell align="center">{row.invno}</TableCell>
                    <TableCell align="center">{row.suppcode}</TableCell>
                    <TableCell align="center">{row.suppname}</TableCell>
                    <TableCell align="center">{row.purch_date}</TableCell>
                    <TableCell align="center">{row.unit}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.rate}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.discamt}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.tax}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.invamt}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Payment" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          href="/dashboard/purchase/paymentledger"
                          //onClick={() => navigate("/dashboard/purchase/paymentledger")}
                          //onClick={openModalHandler2}
                        >
                          <CurrencyRupee />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Soft Copy" placement="top">
                      <IconButton color="secondary">
                        <FilePresentIcon />
                      </IconButton>
                    </Tooltip>
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() => navigate("/dashboard/purchase/suppliermanage")}
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
export default SupplierLedger;
