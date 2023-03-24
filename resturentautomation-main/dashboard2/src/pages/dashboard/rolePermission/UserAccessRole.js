import React from "react";
import {
  Input,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  MenuItem,
  IconButton
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";

const UserAccessRole = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 60 },
    { label: "User Name", minWidth: 150, maxWidth: 300 },
    { label: "Role Name", minWidth: 150, maxWidth: 300 },
    { label: "Action", minWidth: 80, maxWidth: 120 }
  ];

  const createData = (sl, user, role, action) => {
    return { sl, user, role, action };
  };

  const rows = [
    createData(1, "Admin New", "Admin New", "dummy"),
    createData(2, "Admin New", "Admin New", "dummy"),
    createData(3, "Admin New", "Admin New", "dummy"),
    createData(4, "Admin New", "Admin New", "dummy"),
    createData(5, "Admin New", "Admin New", "dummy"),
    createData(6, "Admin New", "Admin New", "dummy"),
    createData(7, "Admin New", "Admin New", "dummy"),
    createData(8, "Admin New", "Admin New", "dummy"),
    createData(9, "Admin New", "Admin New", "dummy")
  ];

  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",

          margin: "10px 0px"
        }}
      >
        <Grid
          item
          container
          style={{
            borderBottom: "1px solid grey",
            padding: "5px 10px",
            justifyContent: "space-between"
          }}
        >
          <Grid item alignSelf="center">
            User Access Role
          </Grid>
          <Grid item>
            <Button variant="contained" startIcon={<Add />}>
              Assign Role
            </Button>
          </Grid>
        </Grid>
        <Grid
          item
          container
          style={{
            boxSizing: "border-box",
            padding: "20px 20px",
            margin: "20px 0px"
          }}
          direction="column"
          rowGap={2}
        >
          <Table size="small" sx={{ minWidth: 1300 }}>
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
              {rows.map((row, id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell>{row.sl}</TableCell>
                    <TableCell>{row.user}</TableCell>
                    <TableCell>{row.role}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton>
                        <DeleteIcon color="error"/>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    </>
  );
};
export default UserAccessRole;
