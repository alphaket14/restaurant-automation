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
  Stack,
  Box
} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { Done, Cancel } from "@material-ui/icons";
import { TableContainer } from "@material-ui/core";
import Scrollbar from "src/components/Scrollbar";
import Scroll from "src/pages/components-overview/extra/animate/scroll";
const SmsTemplate = (props) => {
  const columns = [
    { label: "", minWidth: 50, maxWidth: 70 },
    { label: "Template Name", minWidth: 100, maxWidth: 200 },
    { label: "Type", minWidth: 100, maxWidth: 200 },
    { label: "SMS Template", minWidth: 200, maxWidth: 300 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (check, tempName, type, smsTemp, action) => {
    return { check, tempName, type, smsTemp, action };
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
      {/* <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px",
          width:"99%"
        }}
        spacing={2}
      >
        
        <Grid xs={6} item container direction="column" rowGap={2}>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Template Name:
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small" placeholder="Template Name" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Type:
            </Grid>
            <Grid item xs={8}>
              <Select fullWidth size="small" placeholder="Select Option"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              SMS Template:
            </Grid>
            <Grid item xs={8}>
              <TextField type="text-area" fullWidth size="small" placeholder="Template Name" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4}></Grid>
            <Grid item>
              <Button variant="outlined">Reset</Button>
            </Grid>
            <Grid item>
              <Button variant="contained">Submit</Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid xs={3} item container align="right">
          <Grid item>Please Use Format Without Quotation To Set Dynamic Value Inside Template</Grid>
        </Grid>
        
      </Grid> */}

<Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
       <Box component="span" sx={{
         width: "100%",
       }}>
           <TextField label="Template Name" sx={{width:"20%",ml:2}}  size="small" placeholder="Template Name" />
           <Select label="Template Name" sx={{width:"20%",ml:2}}  size="small" placeholder="Select Option"></Select>
           <TextField sx={{width:"20%",ml:2}} label="SMS Template" size="small" placeholder="SMS Template" />
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
      ><TableContainer>
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
                <TableRow key={row.tempName} hover>
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
                  <TableCell align="center">{row.smsTemp}</TableCell>
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
export default SmsTemplate;
