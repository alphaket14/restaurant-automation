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
import VisibilityIcon from "@mui/icons-material/Visibility";

import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const InboxMessage = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 20, maxWidth: 60 },
    { label: "Sender Name", minWidth: 50, maxWidth: 150 },
    { label: "Subject", minWidth: 50, maxWidth: 200 },
    { label: "Message", minWidth: 100, maxWidth: 200 },
    { label: "Date", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Action", minWidth: 50, maxWidth: 150 }
  ];

  const createData = (sl, sender, subject, message, date, status, action) => {
    return { sl, sender, subject, message, date, status, action };
  };

  const rows = [
    createData(1, "John Maria", "Test Text", "Test Text", "2021-10-20 05:54:55", "Seen", "dummy")
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
            User List
          </Grid>
          <Grid item>
            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <EditIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <ControlCameraIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CachedIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <RemoveIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <FullscreenIcon />
            </IconButton>

            <IconButton size="small" style={{ height: 35, width: 35 }} color="primary">
              <CloseIcon />
            </IconButton>
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

                    <TableCell>{row.sender}</TableCell>
                    <TableCell>{row.subject}</TableCell>
                    <TableCell>{row.message}</TableCell>
                    <TableCell>{row.date}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <IconButton size="small" color="primary">
                        <VisibilityIcon />
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
export default InboxMessage;
