import React from "react";
import {
  Input,
  TextField,
  Button,
  Grid,
  Select,
  MenuItem,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  IconButton,
  Typography
} from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const BankBook = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Date", minWidth: 100, maxWidth: 200 },
    { label: "Voucher No.", minWidth: 100, maxWidth: 200 },
    { label: "Type", minWidth: 150, maxWidth: 200 },
    { label: "Debit", minWidth: 50, maxWidth: 150 },
    { label: "Credit", minWidth: 50, maxWidth: 150 },
    { label: "Balance", minWidth: 50, maxWidth: 150 }
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
            Bank Book
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
                Amount Code
              </Grid>
              <Grid item xs={8} alignSelf="center">
                <TextField size="small" type="number" fullWidth />
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
            <Grid item container spacing={2} style={{ justifyContent: "right" }}>
              <Grid item>
                <Button variant="contained">Find</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          margin: "20px 0px"
        }}
      >
        <Grid item container
        style={{
          padding: "20px",
        }}
        direction="column"
        rowGap={2}>
          <Grid item container         
            direction="column"
            rowGap={2}>
            <Grid item container justifyContent="center">
              <Typography variant="h5">2021-12-09 - 2021-12-31</Typography>
            </Grid>
            <Grid item container justifyContent="flex-end">Open Balance : 0.00</Grid>
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
              <TableRow>
                <TableCell colSpan={4} align="right">
                  Total
                </TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
                <TableCell>0.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Grid item align="center" mt={2}>
            <Button variant="contained">Print</Button>
          </Grid>
      </Grid>
      <Grid item
          container
            style={{
              borderTop: "1px solid grey",
              padding: "5px",
              justifyContent: "flex-end"
            }}
        >
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
      </Grid>
    </>
  );
};
export default BankBook;
