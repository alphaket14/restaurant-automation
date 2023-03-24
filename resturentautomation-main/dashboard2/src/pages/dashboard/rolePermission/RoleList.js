import React from "react";
import { useNavigate } from "react-router-dom";
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

const RoleList = (props) => {
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 60 },
    { label: "Person Name", minWidth: 150, maxWidth: 300 },
    { label: "Role Name", minWidth: 150, maxWidth: 300 },
    { label: "Description", minWidth: 150, maxWidth: 300 },
    { label: "Action", minWidth: 80, maxWidth: 120 }
  ];

  const createData = (personName, role, desc) => {
    return { personName, role, desc };
  };

  const rows = [
    createData("Admin Name", "Admin New", "Description"),
    createData("Admin Name", "Admin New", "Description"),
    createData("Admin Name", "Admin New", "Description")
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
            Add Role
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={() => navigate("/dashboard/setting/rolepermission/addrole")}
            >
              Add Role
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
              {rows.map((row, id) => {
                return (
                  <TableRow>
                    <TableCell align="center">{id + 1}</TableCell>
                    <TableCell align="center">{row.personName}</TableCell>
                    <TableCell align="center">{row.role}</TableCell>
                    <TableCell align="center">{row.desc}</TableCell>
                    <TableCell align="center">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => navigate("/dashboard/setting/rolepermission/addrole")}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small" sx={{ color: "error.main" }}>
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
export default RoleList;
