import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Tooltip,
  Modal,
  Backdrop,
  Fade,
  TablePagination
} from "@mui/material";

import { makeStyles } from "@material-ui/core";

import { CurrencyRupee, Edit, Delete, Visibility, Send } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";

const SmsBatch = (props) => {
  const navigate = useNavigate();
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Batch No.", minWidth: 50, maxWidth: 100 },
    { label: "Total SMS", minWidth: 50, maxWidth: 100 },
    { label: "Successful SMS", minWidth: 50, maxWidth: 100 },
    { label: "Failed SMS", minWidth: 50, maxWidth: 100 },
    { label: "Sender", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 }
  ];

  const createRows = (batch, totSms, successSms, failedSms, sender, status) => ({
    batch,
    totSms,
    successSms,
    failedSms,
    sender,
    status
  });

  const rows = [createRows("SB-118", 3, 0, 3, "Twilio", "Completed")];
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows2, setRows2] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        {/* <Typography variant="h5">SMS Batch</Typography> */}
      </Box>
      {/* <Divider sx={{ width: "100%", mb: 1 }} /> */}
      <TextField size="small" sx={{ width: "20%", mb: 2 }} label="Search" />
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
                  <TableCell align="center">{row.batch}</TableCell>
                  <TableCell align="center">{row.totSms}</TableCell>
                  <TableCell align="center">{row.successSms}</TableCell>
                  <TableCell align="center">{row.failedSms}</TableCell>
                  <TableCell align="center">{row.sender}</TableCell>
                  <TableCell align="center"><Button
                                color="primary"
                                size="small"
                                variant="outlined"
                              >
                                {row.status}
                              </Button></TableCell>
                  <TableCell align="center">
                    <Tooltip title="View" placement="top">
                      <IconButton
                        size="small"
                        color="secondary"
                        onClick={() => navigate("/dashboard/marketing/smssetting/sms-history")}
                      >
                        <Visibility />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Scrollbar>
      </TableContainer>
      <TablePagination
                component="div"
                count={rows2.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
                />
      </Grid>
    </>
  );
};
export default SmsBatch;
