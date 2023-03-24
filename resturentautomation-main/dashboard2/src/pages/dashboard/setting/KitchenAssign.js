import React from "react";
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  MenuItem,
  withStyles,
  TablePagination,
  Box,
  Stack
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Scrollbar from "src/components/Scrollbar";
const KitchenAssign = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Kitchen Name", minWidth: 200, maxWidth: 300 },
    { label: "User", minWidth: 50, maxWidth: 100 }
  ];

  const createData = (sl, kitchenName, user) => {
    return { sl, kitchenName, user };
  };

  const rows = [];
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
      {/* <h2>Kitchen Assign</h2> */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
       
        <Select sx={{width:"20%"}} size="small" fullWidth></Select>
        <Button sx={{justifyContent:'flex-end'}} variant="contained">Save</Button>
   
       </Stack>
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
        {/* <Grid container item justifyContent="center" spacing={3}>
          <Grid item container xs={5} spacing={2}>
            <Grid item xs={5} align="right" alignSelf="center">
              User*
            </Grid>
            <Grid item xs={7}>
              <Select size="small" fullWidth></Select>
            </Grid>
          </Grid>
          <Grid item container xs={5} spacing={2}>
            <Grid item xs={5} align="right" alignSelf="center">
              Kitchen Name*
            </Grid>
            <Grid item xs={7}>
              <Select size="small" fullWidth></Select>
            </Grid>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Save</Button>
          </Grid>
        </Grid> */}
        <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          {/* <Grid item>
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid> */}
          {/* <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid> */}
        </Grid>
          <Scrollbar>
        <Table size="small" sx={{ minWidth: 900 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
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
              rows.map((row) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell>{row.sl}</TableCell>
                    <TableCell>{row.kitchenName}</TableCell>
                    <TableCell>{row.user}</TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow hover>
                <TableCell colSpan={3} align="center">
                  No data available in table.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </Scrollbar>
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
export default KitchenAssign;
