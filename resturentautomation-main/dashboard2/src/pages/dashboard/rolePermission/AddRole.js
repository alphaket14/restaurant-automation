import React, { useState } from "react";
import {
  Input,
  TextField,
  Typography,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Checkbox,
  withStyles,
  FormControlLabel,
  Select,
  MenuItem,
  Divider,
  Box,
  Tabs,
  Tab
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Add from "@mui/icons-material/Add";

const columns = [
  { label: "Sr. No.", minWidth: 20, maxWidth: 60, align: "left" },
  { label: "Person Name", hasCheck: false, minWidth: 150, maxWidth: 300, align: "center" },
  { label: "Can Create", hasCheck: true, minWidth: 150, maxWidth: 300, align: "center" },
  { label: "Can Read", hasCheck: true, minWidth: 150, maxWidth: 300, align: "center" },
  { label: "Can Edit", hasCheck: true, minWidth: 150, maxWidth: 300, align: "center" },
  { label: "Can Delete", hasCheck: true, minWidth: 150, maxWidth: 300, align: "center" }
];

const createData = (menuTitle, align) => {
  return { menuTitle, align };
};

const tables = [
  {
    title: "Accounts",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Human Resource",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Food Management",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Manage Order",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Production",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Purchase Manage",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Report",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Reservation",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Setting",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  },
  {
    title: "Unit and Measurement",
    columns: [...columns],
    rows: [
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New"),
      createData("Admin New")
    ]
  }
];

function TabPanel(props) {
  const { value, index, ...other } = props;

  return (
    <div
      style={{ width: "100%" }}
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <>
          <Typography variant="h6" componenent="div" gutterBottom>
            {tables[value].title}
          </Typography>
          <Table size="small" sx={{ minWidth: 1300 }}>
            <TableHead>
              <TableRow>
                {tables[value].columns.map((column) => {
                  return (
                    <TableCell
                      align={column.align}
                      style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                      key={column.label}
                    >
                      {column.hasCheck ? (
                        <FormControlLabel control={<Checkbox />} label={column.label} />
                      ) : (
                        column.label
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            <TableBody>
              {tables[value].rows.map((row, id) => {
                return (
                  <TableRow hover>
                    <TableCell>{id + 1}</TableCell>
                    <TableCell align="center">{row.menuTitle}</TableCell>
                    <TableCell align="center">
                      <Checkbox />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox />
                    </TableCell>
                    <TableCell align="center">
                      <Checkbox />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </>
      )}
    </div>
  );
}

const AddRole = (props) => {
  const [tabValue, setTabValue] = useState(0);

  const tabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Add Role
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <Grid container spacing={2} sx={{ px: 2 }}>
        <Grid item container spacing={3}>
          <Grid item align="right" xs={3} alignSelf="center">
            <Typography variant="body1">Department</Typography>
          </Grid>
          <Grid item xs={9}>
            <Select size="small" fullWidth>
              <MenuItem>Dept 1</MenuItem>
              <MenuItem>Dept 2</MenuItem>
              <MenuItem>Dept 3</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item align="right" xs={3} alignSelf="center">
            <Typography variant="body1">Person Name</Typography>
          </Grid>
          <Grid item xs={9}>
            <Select size="small" fullWidth>
              <MenuItem>Person 1</MenuItem>
              <MenuItem>Person 2</MenuItem>
              <MenuItem>Person 3</MenuItem>
            </Select>
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item align="right" xs={3} alignSelf="center">
            <Typography variant="body1">Role Name</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField fullWidth size="small" placeholder="Role name" />
          </Grid>
        </Grid>
        <Grid item container spacing={3}>
          <Grid item align="right" xs={3}>
            <Typography variant="body1">Description</Typography>
          </Grid>
          <Grid item xs={9}>
            <TextField fullWidth multiline rows={3} maxRows={5} />
          </Grid>
        </Grid>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", mb: 1 }}>
            <Tabs
              value={tabValue}
              onChange={tabChangeHandler}
              variant="scrollable"
              scrollButtons="auto"
            >
              {tables.map((table, id) => (
                <Tab label={table.title} sx={{ px: 2 }} />
              ))}
            </Tabs>
          </Box>

          {tables.map((table, id) => (
            <TabPanel value={tabValue} index={id} />
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "right", width: "100%", mt: 1 }}>
          <Button variant="contained">Save</Button>
        </Box>
      </Grid>
    </>
  );
};
export default AddRole;
