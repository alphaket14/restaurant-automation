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
import Scrollbar from "src/components/Scrollbar";
import { Edit, Delete, CurrencyRupee } from "@mui/icons-material";
const ProfitLoss = (props) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Particulars", minWidth: 300, maxWidth: 500 },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 200
    },
    {
      label: "Amount",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 100,
      maxWidth: 200
    }
  ];

  const createData = (particular, amount) => {
    return { particular, amount };
  };

  const salesRows = [createData("Sales", 1000), createData("Cost of Goods sold", 600)];

  const expenseRows = [
    createData("Advertisement Expenses", 60000),
    createData("Depreciation Expenses", 80000),
    createData("Rent Expenses", 15000),
    createData("Payroll Taxes", 5000),
    createData("Salaries and Wages", 51000),
    createData("Commission Expense", 5000),
    createData("Other Operating Expense", 7000)
  ];

  const nonOperatingRows = [
    createData("Revenue from Interest", 10500),
    createData("Interest Expenses", 9100)
  ];

  return (
    <>
      {/* <Typography variant="h5" gutterBottom>
        Profit & Loss Report
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}

      <TextField sx={{ width: "25%", mb: 1 }} label="Search" size="small" />
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
        <TableContainer>
          <Scrollbar>

        <Table size="small" >
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label} {column.endIcon && <>({column.endIcon})</>}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {salesRows.map((row, id) => {
              return (
                <TableRow>
                  <TableCell align="center">{row.particular}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Gross Profit
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                400
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Operating Expenses
              </TableCell>
              <TableCell colSpan={columns.length - 1}></TableCell>
            </TableRow>
            {expenseRows.map((row, id) => {
              return (
                <TableRow>
                  <TableCell align="center">{row.particular}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Total Operating Expenses
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                223000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Operating Income
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                177000
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                Non-Operating Income
              </TableCell>
              <TableCell colSpan={columns.length - 1}></TableCell>
            </TableRow>
            {nonOperatingRows.map((row, id) => {
              return (
                <TableRow>
                  <TableCell align="center">{row.particular}</TableCell>
                  <TableCell align="center">{row.amount}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              );
            })}
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Total Non-Operating Income
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                1400
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell align="right" sx={{ fontWeight: "bold" }}>
                Net Income
              </TableCell>
              <TableCell></TableCell>
              <TableCell align="center" sx={{ fontWeight: "bold" }}>
                178400
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        </Scrollbar>
      </TableContainer>
      </Grid>
    </>
  );
};
export default ProfitLoss;
