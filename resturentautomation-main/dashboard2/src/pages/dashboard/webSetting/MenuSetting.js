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

const MenuSetting = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Menu Name", minWidth: 250, maxWidth: 350 },
    { label: "Menu Slug", minWidth: 250, maxWidth: 350 },
    { label: "Parent Menu", minWidth: 150, maxWidth: 300 },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, menuName, menuSlug, parentMenu, status, action) => {
    return { sl, menuName, menuSlug, parentMenu, status, action };
  };

  const rows = [
    createData(1, "Home", "Home", "pages", "Active", "dummy"),
    createData(2, "Home", "Home", "pages", "Active", "dummy"),
    createData(3, "Home", "Home", "pages", "Active", "dummy"),
    createData(4, "Home", "Home", "pages", "Active", "dummy"),
    createData(5, "Home", "Home", "pages", "Active", "dummy"),
    createData(6, "Home", "Home", "pages", "Active", "dummy"),
    createData(7, "Home", "Home", "pages", "Active", "dummy"),
    createData(8, "Home", "Home", "pages", "Active", "dummy")
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
            Menu Setting
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
        <Grid item container style={{ padding: "20px 20px" }} rowGap={3}>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Menu Name*
            </Grid>

            <Grid item xs={8}>
              <TextField fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Menu Slug
            </Grid>

            <Grid item xs={8}>
              <TextField fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Sub Menu
            </Grid>
            <Grid item xs={8}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Status
            </Grid>
            <Grid item xs={8}>
              <Select fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid item align="right" xs={12}>
            <Button variant="contained">Add</Button>
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
                    <TableCell>{row.menuName}</TableCell>
                    <TableCell>{row.menuSlug}</TableCell>
                    <TableCell>{row.parentMenu}</TableCell>
                    <TableCell>{row.status}</TableCell>
                    <TableCell>
                      <IconButton color="primary">
                        <EditIcon />
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
export default MenuSetting;
