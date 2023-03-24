import React from "react";
import {
  Input,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  IconButton,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  Table
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const TrialBalance = (props) => {
  const columns = [
    { label: "Code", minWidth: 50, maxWidth: 100 },
    { label: "Account Name", minWidth: 150, maxWidth: 250 },
    { label: "Debit", minWidth: 150, maxWidth: 250 },
    { label: "Credit", minWidth: 150, maxWidth: 250 },
  ];

  const createData = (code, accountName, debit, credit) => {
    return { code, accountName, debit, credit };
  };

  let rows = [createData(1,"abc","abc","abc")]

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
            Trial Balance
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
        <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={6} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} alignSelf="center" align="right">
                From Date
              </Grid>
              <Grid item xs={8} alignSelf="center">
                <TextField size="small" type="date" fullWidth />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} alignSelf="center" align="right">
                To Date
              </Grid>
              <Grid item xs={8} alignSelf="center">
                <TextField size="small" type="date" fullWidth />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} alignSelf="center" align="right"></Grid>
              <Grid item xs={8} alignSelf="center">
                <Checkbox />
                With Details
              </Grid>
            </Grid>
            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="contained">Find</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          margin: "40px 0px",
          padding: "10px"
        }}>

          <Grid item container justifyContent="center" mb={2}>
            <Typography sx={{ letterSpacing: 3 }} variant="h6">22/05/2021  -  22/07/2021</Typography>
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
                    <TableRow key={row.code}>
                      <TableCell>{row.code}</TableCell>
                      <TableCell>{row.accountName}</TableCell>
                      <TableCell>{row.debit}</TableCell>
                      <TableCell>{row.credit}</TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={2} align="right">Total</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>0.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Grid mt={10} item container justifyContent="space-around" style={{borderTop:"1px solid gray"}}>
              <Typography style={{color: "gray"}}>Prepared By</Typography>
              <Typography style={{color: "gray"}}>Chairman</Typography>
            </Grid>
            <Grid mt={4} item container spacing={2} style={{ justifyContent: "center" }}>
              <Grid item>
                <Button variant="contained">Print</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">PDF</Button>
              </Grid>
            </Grid>
      </Grid>
    </>
  );
};
export default TrialBalance;
