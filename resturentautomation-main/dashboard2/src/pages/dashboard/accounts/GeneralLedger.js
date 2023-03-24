import React from "react";
import {
  Input,
  TextField,
  Button,
  IconButton,
  Grid,
  Select,
  MenuItem,
  Checkbox,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const GeneralLedger = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Head Code.", minWidth: 150, maxWidth: 250 },
    { label: "Head Name", minWidth: 150, maxWidth: 300 },
    { label: "Debit", minWidth: 150, maxWidth: 250 },
    { label: "Credit", minWidth: 150, maxWidth: 250 },
    { label: "Balance", minWidth: 100, maxWidth: 150 }
  ];

  const createData = (sl, headCode, headName, debit, credit, balance) => {
    return { sl, headCode, headName, debit, credit, balance };
  };

  let rows = [createData(1,"abc","abc","abc","abc","abc")]

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
            General Ledger
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
                GL Head
              </Grid>
              <Grid item xs={8} alignSelf="center">
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} alignSelf="center" align="right">
                Transaction Head
              </Grid>
              <Grid item xs={8} alignSelf="center">
                <Select fullWidth size="small"></Select>
              </Grid>
            </Grid>
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
          <Grid item container>
            <Typography variant="subtitle2" gutterBottom component="div">Pre Balance : 0.00</Typography>
          </Grid>
          <Grid item container mb={2}>
            <Typography variant="subtitle2" gutterBottom  component="div">Current Balance : 0.00</Typography>
          </Grid>
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
                    <TableRow key={row.sl}>
                      <TableCell>{row.sl}</TableCell>
                      <TableCell>{row.headCode}</TableCell>
                      <TableCell>{row.headName}</TableCell>
                      <TableCell>{row.debit}</TableCell>
                      <TableCell>{row.credit}</TableCell>
                      <TableCell>{row.balance}</TableCell>
                    </TableRow>
                  );
                })}
                <TableRow>
                  <TableCell colSpan={3} align="right">Total</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>0.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Grid mt={4} item container style={{ justifyContent: "center" }}>
              <Grid item>
                <Button variant="contained">Print</Button>
              </Grid>
            </Grid>
      </Grid>
    </>
  );
};
export default GeneralLedger;
