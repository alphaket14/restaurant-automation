import React, { useState } from "react";
import {
  Input,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Select,
  MenuItem,
  Button,
  IconButton,
  withStyles,
  TableContainer,
  InputLabel,
  Checkbox,
  ListItemText,
  TablePagination
} from "@material-ui/core";
import { CurrencyRupee } from "@mui/icons-material";
import PercentIcon from '@mui/icons-material/Percent';
import Scrollbar from "src/components/Scrollbar";
const createData = (sl, empId, name, dept, Loan_amt, int_rate, ins_paid, prin_out, ins_rem, totAmount, repayTotal) => {
  return {sl, empId,name, dept, Loan_amt, int_rate, ins_paid, prin_out, ins_rem, totAmount,repayTotal};
};

const data = [
  createData(1, "#EMP0001", "Mr Kabir", "Accounts", 100,"5", 2,0, 3, 0, 0),
  createData(2, "#EMP0002", "Mr Kabir", "Accounts", 100,"5", 2,0, 3, 0, 0),
  createData(3, "#EMP0003", "Mr Kabir", "Accounts", 100,"5", 2,0, 3, 0, 0)
];
const LoanReport = (props) => {
  const [rows, setRows] = useState(data);
  const [empId, setEmpId] = useState(null);

  const columns = [
    //{ label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Employee Id", minWidth: 120, maxWidth: 250 },
    { label: "Employee Name", minWidth: 160, maxWidth: 200 },
    { label: "Department", minWidth: 100, maxWidth: 200 },
    { label: "Loan Amount", minWidth: 130, maxWidth: 250 },
    { label: "Interest Rate", minWidth: 130, maxWidth: 250 },
    { label: "Installments Paid", minWidth: 160, maxWidth: 250 },
    { label: "Principle Outstanding", minWidth: 200, maxWidth: 250 },
    { label: "Installment Remaining", minWidth: 200, maxWidth: 250 },
    { label: "Total Outstanding Amt", minWidth: 200, maxWidth: 250 },
    /*{ label: "Total Loan", minWidth: 100, maxWidth: 250 },
    { label: "Repayment Total", minWidth: 100, maxWidth: 250 }*/
  ];


  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const filter = () =>{
    let newRows = rows.map(row => row)
    newRows = newRows.filter((row)=> parseInt(row.empId) === parseInt(empId))
    setRows(newRows)
    setEmpId(null)
    
  }
  //department
  const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const [deptName, setDeptName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeptName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for employee
  const employee= [
    'online order',
  ];
  const [empName, setEmpName] = React.useState([]);
  const handleEmpChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmpName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  return (
    <>
            <Grid container spacing={2} justifyContent="left">
        {/*<Grid item style={{marginTop:"2px"}}>Monthly</Grid>*/}
          {/* <Grid item xs={2}>
              <InputLabel id="demo-simple-select-label">Department</InputLabel>
              <Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="departName"
                fullWidth 
                size="small"
                multiple
                value={deptName}
                onChange={handleChange}
               
                renderValue={(selected) => selected.join(', ')}
              >
                {depnames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={deptName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
            </Grid> */}
        <Grid item >
        <Grid item  sx={{minWidth:"180px"}}>
              {/* <InputLabel id="demo-simple-select-label">Employees</InputLabel> */}
              {/*<Select 
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="departName"
                fullWidth 
                size="small"
                multiple
                value={empName}
                onChange={handleEmpChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {employee.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={empName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
                </Select>*/}
              <TextField  size="small" label="Employees" />
            </Grid>
        </Grid>
        </Grid>
     
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
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            {/*<Button size="small">Copy</Button>*/}
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          {/* <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid> */}
        </Grid>

        <TableContainer>
          <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center" }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.empId}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.dept}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.Loan_amt}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.int_rate}<PercentIcon fontSize="small" style={{color:"gray", marginLeft:"5px"}}/></TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.ins_paid}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.prin_out}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.ins_rem}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.totAmount}</TableCell>
                  {/*<TableCell>{row.repayTotal}</TableCell>*/}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
        <TablePagination
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
              />
      </Grid>
    </>
  );
};
export default LoanReport;
