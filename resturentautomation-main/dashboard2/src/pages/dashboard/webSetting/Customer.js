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
  IconButton,
  withStyles
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const Customer = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 60 },
    { label: "Title", minWidth: 50, maxWidth: 150 },
    { label: "Name", minWidth: 50, maxWidth: 150 },
    { label: "Review Text", minWidth: 300, maxWidth: 400 },
    { label: "Rating", minWidth: 50, maxWidth: 120 },
    { label: "Email Address", minWidth: 100, maxWidth: 200 },
    { label: "Action", minWidth: 100, maxWidth: 150 }
  ];

  const createData = (sl, title, name, review, rating, email, action) => {
    return { sl, title, name, review, rating, email, action };
  };

  const rows = [
    createData(1, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(2, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(3, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(4, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(5, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(6, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(7, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy"),
    createData(8, "dummy", "Dummy", "Very GOOD", "5.00", "email@email.com", "dummy")
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
            boxSizing: "border-box",
            padding: "20px 20px",
            margin: "20px 0px"
          }}
          direction="column"
          rowGap={2}
        >
          <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
            <Grid item>
              <Button size="small">Copy</Button>
              <Button size="small">CSV</Button>
              <Button size="small">Excel</Button>
              <Button size="small">PDF</Button>
              <Button size="small">Print</Button>
            </Grid>
            <Grid item>
              <Input type="text" placeholder="Search" />
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
              {rows.map((row, id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell>{row.sl}</TableCell>
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.review}</TableCell>
                    <TableCell>{row.rating}</TableCell>
                    <TableCell>{row.email}</TableCell>

                    <TableCell>
                      <IconButton size="small" color="primary">
                        <EditIcon />
                      </IconButton>
                      <IconButton size="small">
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
export default Customer;
