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
  withStyles,
  Typography
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";

const SupplierPayment = (props) => {
  const columns = [
    { label: "Supplier Code", minWidth: 40, maxWidth: 60 },
    { label: "Supplier Name", minWidth: 120, maxWidth: 150 },
    { label: "Food Category", minWidth: 80, maxWidth: 120 },
    { label: "Ingredients", minWidth: 80, maxWidth: 120 },
    { label: "Invoice No.", minWidth: 40, maxWidth: 60 },
    { label: "Credit Period", minWidth: 40, maxWidth: 80 },
    { label: "Outstanding Amount", minWidth: 60, maxWidth: 100 },
    { label: "Action payment", minWidth: 60, maxWidth: 150 },
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
            Supplier Payment
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
              <Grid item xs={4} align="right">
                Voucher No.
              </Grid>
              <Grid item xs={8}>
                <TextField size="small" placeholder="PM-7" fullWidth />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Payment Type
              </Grid>
              <Grid item xs={8}>
                <Select size="small" placeholder="Select Option" fullWidth></Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Date
              </Grid>
              <Grid item xs={8}>
                <TextField size="small" type="date" fullWidth />
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Remark
              </Grid>
              <Grid item xs={8}>
                <TextField size="small" type="text" multiline rows={3} maxRows={5} fullWidth />
              </Grid>
            </Grid>
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
              <TableRow hover>
                <TableCell>
                  <TextField fullWidth size="small" />
                </TableCell>
                <TableCell>
                  <Select fullWidth size="small"></Select>
                </TableCell>
                <TableCell>
                  <TextField size="small" fullWidth />
                </TableCell>
                <TableCell>
                  <Select fullWidth size="small"></Select>
                </TableCell>
                <TableCell>
                  <TextField fullWidth size="small" />
                </TableCell>
                <TableCell>
                  <TextField fullWidth size="small" />
                </TableCell>
                <TableCell>
                  <TextField fullWidth size="small" />
                </TableCell>
                <TableCell>
                <Grid item align="right">
                  <Button color="error" size="small" variant="outlined">
                      Pay Now
                  </Button>
                </Grid>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell></TableCell>
                <TableCell>Total</TableCell>
                <TableCell>
                  <Typography>0.00</Typography>
                </TableCell>
              </TableRow>

            </TableBody>
          </Table>
            <Grid item align="right">
              <Button variant="contained">Save</Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SupplierPayment;
