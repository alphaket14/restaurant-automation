import React from "react";
import {
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Cancel from "@material-ui/icons/Cancel";
const Language = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 30, maxWidth: 50 },
    { label: "Language", minWidth: 250, maxWidth: 350 },
    { label: "Action", minWidth: 100, maxWidth: 200 }
  ];

  const createData = (sl, language, action) => {
    return { sl, language, action };
  };

  const rows = [
    createData(1, "English", "dummy"),
    createData(2, "English", "dummy"),
    createData(3, "English", "dummy"),
    createData(4, "English", "dummy"),
    createData(5, "English", "dummy"),
    createData(6, "English", "dummy"),
    createData(7, "English", "dummy"),
    createData(8, "English", "dummy"),
    createData(9, "English", "dummy"),
    createData(10, "English", "dummy")
  ];

  return (
    <>
      <Grid container spacing={2} justifyContent="space-between">
        <Grid item>
          <Button variant="outlined">Add Phrase</Button>
        </Grid>
        <Grid item>
          <Button variant="contained">Bulk Upload</Button>
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
        <Grid item container spacing={2} style={{ padding: 0 }}>
          <Grid item>
            <TextField size="small" placeholder="Language Name" />
          </Grid>
          <Grid item>
            <Button variant="outlined">Save</Button>
          </Grid>
        </Grid>

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
            {rows.map((row) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.language}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton>
                      <Cancel />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default Language;
