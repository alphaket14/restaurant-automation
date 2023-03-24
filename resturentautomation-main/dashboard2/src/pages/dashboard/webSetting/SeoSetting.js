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

const SeoSetting = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Title", minWidth: 250, maxWidth: 350 },
    { label: "Keyword", minWidth: 250, maxWidth: 350 },
    { label: "Description", minWidth: 150, maxWidth: 300 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (sl, title, keyword, desc, action) => {
    return { sl, title, keyword, desc, action };
  };

  const rows = [
    createData(
      1,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      2,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      3,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      4,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      5,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      6,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      7,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    ),
    createData(
      8,
      "Home Page",
      "restaurant, food, reservation",
      "Best Restaurant Management Software",
      "dummy"
    )
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
            Seo Setting
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
              Title*
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small" placeholder="Title" />
            </Grid>
          </Grid>
          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Keyword
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small" placeholder="Keyword" />
            </Grid>
          </Grid>

          <Grid item container spacing={2}>
            <Grid item xs={4} align="right">
              Desctiption
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth multiline rows={3} maxRows={6} />
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
                    <TableCell>{row.title}</TableCell>
                    <TableCell>{row.keyword}</TableCell>
                    <TableCell>{row.desc}</TableCell>
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
export default SeoSetting;
