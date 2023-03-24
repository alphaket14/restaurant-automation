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
  Select,
  MenuItem,
  IconButton,
  Stack,Box
} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Done, Cancel } from "@material-ui/icons";
import { TableContainer } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
const EmailTemplate = (props) => {
  const columns = [
    { label: "", minWidth: 50, maxWidth: 70 },
    { label: "Template Name", minWidth: 100, maxWidth: 200 },
    { label: "Type", minWidth: 100, maxWidth: 200 },
    { label: "Email Template", minWidth: 200, maxWidth: 300 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (check, tempName, type, emailTemp, action) => {
    return { check, tempName, type, emailTemp, action };
  };

  const rows = [
    createData(1, "one", "cancel", "your Order {id} is cancel for some reason.", "dummy"),
    createData(0, "two", "cancel", "your Order {id} is cancel for some reason.", "dummy"),
    createData(1, "three", "cancel", "your Order {id} is cancel for some reason.", "dummy"),
    createData(1, "four", "cancel", "your Order {id} is cancel for some reason.", "dummy"),
    createData(0, "five", "cancel", "your Order {id} is cancel for some reason.", "dummy"),
    createData(1, "six", "cancel", "your Order {id} is cancel for some reason.", "dummy")
  ];

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
       <Box component="span" sx={{
         width: "100%",
       }}>
           <TextField label="Template Name" sx={{width:"20%",ml:2}}  size="small" placeholder="Template Name" />
           <Select label="Template Name" sx={{width:"20%",ml:2}}  size="small" placeholder="Select Option"></Select>
           <TextField sx={{width:"20%",ml:2}} label="SMS Template" size="small" placeholder="Email Template" />
           <Button sx={{float:"right",ml:2}} variant="outlined">Reset</Button>
           <Button sx={{float:"right",ml:2}} variant="contained">Submit</Button>
       </Box>
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
        <TableContainer>
          <Scrollbar>
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
            {rows.map((row) => {
              return (
                <TableRow key={row.tempName} s>
                  <TableCell align="center">
                    {row.check === 1 ? (
                      <IconButton color="primary">
                        <Done />
                      </IconButton>
                    ) : (
                      <IconButton>
                        <Cancel color="error" />
                      </IconButton>
                    )}
                  </TableCell>
                  <TableCell align="center">{row.tempName}</TableCell>
                  <TableCell align="center">{row.type}</TableCell>
                  <TableCell align="center">{row.emailTemp}</TableCell>
                  <TableCell align="center">
                    <IconButton color="primary" size="small">
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
        </Scrollbar>
        </TableContainer>
      </Grid>
    </>
  );
};
export default EmailTemplate;
