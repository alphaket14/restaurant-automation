import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TableTemplate from "../../../components/TableTemplate";
import {
  Box,
  Button,
  IconButton,
  Divider,
  Typography,
  Tooltip,
  TablePagination,
  TableCell,
  TableRow,
  Table,
  TableBody,
  TableHead,
  TableContainer,
  Grid
} from "@mui/material";

import { Add, PlaylistAddCheck, Person, Block } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
const WebCustomerList = (props) => {
  const navigate = useNavigate();

  const columns = [
    // {
    //   field: "id",
    //   headerName: "Customer ID",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 150
    // },
    // {
    //   field: "custName",
    //   headerName: "Customer Name",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200
    // },
    // { field: "email", headerName: "Email ID", align: "center", headerAlign: "center", width: 200 },
    // { field: "phone", headerName: "Phone", align: "center", headerAlign: "center", width: 200 },
    // { field: "city", headerName: "City", align: "center", headerAlign: "center", width: 200 },
    // { field: "account", headerName: "Account", align: "center", headerAlign: "center", width: 200 },
    // {
    //   field: "actions",
    //   headerName: "Actions",
    //   align: "center",
    //   headerAlign: "center",
    //   width: 200,
    //   renderCell: () => (
    //     <>
    //       <Tooltip title="Profile" placement="left">
    //         <IconButton
    //           size="small"
    //           color="primary"
    //           onClick={() => navigate("/dashboard/report/customer/add-customer")}
    //         >
    //           <Person />
    //         </IconButton>
    //       </Tooltip>
    //       <Tooltip title="Order List" placement="top">
    //         <IconButton
    //           size="small"
    //           color="secondary"
    //           onClick={() => navigate("/dashboard/report/customer/customer-order-history")}
    //         >
    //           <PlaylistAddCheck />
    //         </IconButton>
    //       </Tooltip>
    //       <Tooltip title="Block" placement="top">
    //         <IconButton size="small" sx={{ color: "error.main" }}>
    //           <Block />
    //         </IconButton>
    //       </Tooltip>
    //     </>
    //   )
    // }
    { label: "Sr. No.", minWidth: 80 },
    { label: "Customer Name", minWidth: 150 },
    { label: "Email ID", minWidth: 150 },
    { label: "Phone", minWidth: 150 },
    { label: "City", minWidth: 100 },
    { label: "Account", minWidth: 100 },
    { label: "Actions", minWidth: 100 },
  ];

  const createRows = (custName, email, phone, city, account) => {
    return {
      custName,
      email,
      phone,
      city,
      account,
    };
  };

  const rows = [
    createRows("Name", "email@gmail.com", +91445221451, "City", "ACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "ACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
    createRows("Name", "email@gmail.com", +91445221451, "City", "INACTIVE"),
  ];

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
          width: "100%",
          justifyContent: "flex-end",
          mb: 1,
        }}
      >
        {/* <Typography variant="h5">Web Customer List</Typography> */}
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/dashboard/report/customer/add-customer")}
        >
          Add Customer
        </Button>
      </Box>
      {/* <Divider sx={{ width: "100%", mb: 1 }} /> */}
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
            <Table size="small" sx={{ minWidth: 1300 }}>
              <TableHead>
                <TableRow>
                  {columns.map((column, id) => (
                    <TableCell
                      align="center"
                      sx={{
                        minWidth: column.minWidth,
                        maxWidth: column.maxWidth,
                      }}
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
                    <TableCell align="center">{row.custName}</TableCell>
                    <TableCell align="center">{row.email}</TableCell>
                    <TableCell align="center">{row.phone}</TableCell>
                    <TableCell align="center">{row.city}</TableCell>
                    <TableCell align="center">{row.account === "INACTIVE" ? (
                          <Button color="error"size="small" variant="outlined">
                            {row.account}
                          </Button>
                        ) : (
                          <Button color="primary" size="small" variant="outlined">
                            {row.account}
                          </Button>
                        )}  </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Profile" placement="left">
                        <IconButton
                          size="small"
                          color="primary"
                          onClick={() =>
                            navigate("/dashboard/report/customer/add-customer")
                          }
                        >
                          <Person />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Order List" placement="top">
                        <IconButton
                          size="small"
                          color="secondary"
                          onClick={() =>
                            navigate(
                              "/dashboard/report/customer/customer-order-history"
                            )
                          }
                        >
                          <PlaylistAddCheck />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Block" placement="top">
                        <IconButton size="small" sx={{ color: "error.main" }}>
                          <Block />
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
export default WebCustomerList;
