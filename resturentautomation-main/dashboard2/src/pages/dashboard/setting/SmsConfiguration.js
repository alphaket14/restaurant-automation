import React from "react";
import {
  Box,
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
const SmsConfiguration = (props) => {
  const columns = [
    { label: "Status", minWidth: 30, maxWidth: 50 },
    { label: "", minWidth: 30, maxWidth: 50 },
    { label: "User Name", minWidth: 100, maxWidth: 200 },
    { label: "Password", minWidth: 100, maxWidth: 200 },
    { label: "UserID", minWidth: 100, maxWidth: 200 },
    { label: "From", minWidth: 100, maxWidth: 200 }
  ];

  const createData = (status, userName, password, userID, from) => {
    return { status, userName, password, userID, from };
  };

  const rows = [
    createData("SMS Rank", "Rabbani", 123456, "dummy", "smsrank"),
    createData("SMS Rank", "Rabbani", 123456, "dummy", "smsrank"),
    createData("SMS Rank", "Rabbani", 123456, "dummy", "smsrank")
  ];

  return (
    <>
      <Box
        component="div"
        style={{
          margin: "30px 0",
          boxSizing: "border-box",
          padding: 10,
          background: "black",
          borderRadius: 10,
          boxShadow: "1px 1px 5px rgba(255,255,255,0.4)"
        }}
      >
        <p>
          To get 50 free sms from smsrank.com click here and register in registration section click
          Already envato user and put your envato purchace key and product id after registration put
          your username and password into the password and user name field this form.
        </p>
      </Box>
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
                <TableRow key={row.status} hover>
                  <TableCell>Radio</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth placeholder={row.userName} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth placeholder={row.userID} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth placeholder={row.password} />
                  </TableCell>
                  <TableCell>
                    <TextField size="small" fullWidth placeholder={row.from} />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Grid item align="right">
          <Button variant="contained">Update</Button>
        </Grid>
      </Grid>
    </>
  );
};
export default SmsConfiguration;
