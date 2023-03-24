import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Backdrop,
  Fade,
  TextField,
  Grid,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Divider,
  Tooltip,
  Box,
  TablePagination,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import Scrollbar from "../../../components/Scrollbar";
import { makeStyles } from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    //width: 700,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const FoodCampaign = (props) => {
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const [favicon, setFavicon] = useState();
  const [logo, setLogo] = useState();

  const onDropFavicon = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFavicon(acceptedFiles[0]);
  });

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop: onDropFavicon,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png",
    });

  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Title", minWidth: 50, maxWidth: 100 },
    { label: "Start Date", minWidth: 50, maxWidth: 100 },
    { label: "End Date", minWidth: 50, maxWidth: 100 },
    { label: "Daily Start Time", minWidth: 100, maxWidth: 200 },
    { label: "Daily End Time", minWidth: 100, maxWidth: 200 },
    {
      label: "Price",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 50,
      maxWidth: 100,
    },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (
    title,
    startDate,
    endDate,
    dailyStartTime,
    dailyEndTime,
    price,
    status
  ) => {
    return {
      title,
      startDate,
      endDate,
      dailyStartTime,
      dailyEndTime,
      price,
      status,
    };
  };

  const rows = [
    createData(
      "Title",
      "28-06-2022",
      "30-06-2022",
      "20:00",
      "22:00",
      1000,
      "ACTIVE"
    ),
  ];

  const [fromDate, setFromDate] = useState(new Date());

  const [toDate, setToDate] = useState(
    new Date().getTime() + 24 * 60 * 60 * 1000
  );

  const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
  const weekDays = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows2, setRows2] = React.useState(rows);

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const selections = ["Zone 1", "Zone 2"];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(typeof value === "string" ? value.split(",") : value);
  };

  const restaurants = ["Restaurant 1", "Restaurant 2"];
  const [res, setRes] = React.useState([]);

  const resChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setRes(typeof value === "string" ? value.split(",") : value);
  };

  const discounts = ["Percent", "Amount"];
  const [dis, setDis] = React.useState([]);

  const disChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setDis(typeof value === "string" ? value.split(",") : value);
  };

  const categories = ["Non Veg", "Veg"];
  const [cat, setCat] = React.useState([]);

  const catChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setCat(typeof value === "string" ? value.split(",") : value);
  };

  const attributes = ["Capacity", "Size", "Type"];
  const [att, setAtt] = React.useState([]);

  const attChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setAtt(typeof value === "string" ? value.split(",") : value);
  };
  const addons = [];
  const [add, setAdd] = React.useState([]);

  const addChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setAdd(typeof value === "string" ? value.split(",") : value);
  };

  const [status, setStatus] = useState(rows[0].status);

  return (
    <>
      <Modal
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Grid container>
              <Typography variant="h5" sx={{ mb: 1 }}>
                Add Basic Campaign
              </Typography>
              <Divider sx={{ width: "100%" }} />
              <Grid
                item
                container
                rowSpacing={3}
                sx={{ mt: 2 }}
                direction="column"
              >
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Title
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField
                      fullWidth
                      size="small"
                      type="text"
                      placeholder="New Campaign"
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Short Description
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField
                      fullWidth
                      multiline
                      rows={2}
                      maxRows={5}
                      type="text"
                      placeholder="Description..."
                    />
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Zone
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <FormControl
                      sx={{ mr: 1, float: "left", width: "100%", mb: 2 }}
                      size="small"
                    >
                      <InputLabel id="select-type">Zone</InputLabel>
                      <Select
                        labelId="select-type"
                        label="Select Type"
                        id="select-type"
                        value={type}
                        onChange={typeChangeHandler}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {selections.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={type.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Restaurant
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <FormControl
                      sx={{ mr: 1, float: "left", width: "100%", mb: 2 }}
                      size="small"
                    >
                      <InputLabel id="select-type">Restaurant</InputLabel>
                      <Select
                        labelId="select-type"
                        label="Restaurant"
                        id="select-type"
                        value={res}
                        onChange={resChangeHandler}
                        renderValue={(selected) => selected.join(", ")}
                      >
                        {restaurants.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={res.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Start Date
                    </Typography>
                  </Grid>
                  <Grid xs={8} sx={{ marginBottom: 2 }}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={fromDate}
                      onChange={(newDate) => {
                        setFromDate(newDate);
                      }}
                      renderInput={(params) => {
                        const month = params.inputProps.value.split("/")[0];
                        const day = params.inputProps.value.split("/")[1];
                        const year = params.inputProps.value.split("/")[2];
                        const d = new Date(
                          Number(year),
                          Number(month) - 1,
                          Number(day)
                        );
                        const dateValue = `${days[d.getDay()]}, ${day} ${
                          months[d.getMonth()]
                        } ${year}`;
                        params.inputProps.value = `${dateValue}`;
                        return (
                          <TextField
                            sx={{ mr: 1, width: "100%" }}
                            {...params}
                            label="From"
                            size="small"
                            helperText={null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      End Date
                    </Typography>
                  </Grid>
                  <Grid item xs={8} sx={{ marginBottom: 2 }}>
                    <DatePicker
                      sx={{ width: "100%" }}
                      value={toDate}
                      onChange={(newDate) => {
                        setToDate(newDate);
                      }}
                      renderInput={(params) => {
                        const month = params.inputProps.value.split("/")[0];
                        const day = params.inputProps.value.split("/")[1];
                        const year = params.inputProps.value.split("/")[2];
                        const d = new Date(
                          Number(year),
                          Number(month) - 1,
                          Number(day)
                        );
                        const dateValue = `${days[d.getDay()]}, ${day} ${
                          months[d.getMonth()]
                        } ${year}`;
                        params.inputProps.value = `${dateValue}`;
                        return (
                          <TextField
                            sx={{ width: "100%" }}
                            xs={8}
                            {...params}
                            label="To"
                            size="small"
                            helperText={null}
                          />
                        );
                      }}
                    />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Daily Start Time
                    </Typography>
                  </Grid>
                  <Grid xs={8} sx={{ marginBottom: 2 }}>
                    <TextField fullWidth size="small" type="time" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Daily End Time
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField fullWidth size="small" type="time" />
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Price
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Discount
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Discount Type
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Discount Type</InputLabel>
                <Select
                  labelId="select-type"
                  label="Discount Type"
                  id="select-type"
                  value={dis}
                  onChange={disChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {discounts.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={dis.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Parent Catagory
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Parent Categories</InputLabel>
                <Select
                  labelId="select-type"
                  label="Parent Categories"
                  id="select-type"
                  value={cat}
                  onChange={catChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {categories.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={cat.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                </Grid>
                <Grid item container spacing={2}>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Attribute
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Attributes</InputLabel>
                <Select
                  labelId="select-type"
                  label="Attributes"
                  id="select-type"
                  value={att}
                  onChange={attChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {attributes.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={att.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="body1" gutterBottom>
                      Addon
                    </Typography>
                  </Grid>
                  <Grid xs={8}>
                  <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Addons</InputLabel>
                <Select
                  labelId="select-type"
                  label="Addons"
                  id="select-type"
                  value={add}
                  onChange={addChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {addons.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={add.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                  ))}

              
                </Select>
              </FormControl>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Image </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField
                      type="file"
                      name="photograph"
                      fullWidth
                      size="small"
                    />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      variant="outlined"
                      size="small"
                      sx={{ marginRight: 1 }}
                    >
                      Reset
                    </Button>
                    <Button variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>

      {/* <Typography variant="h5" gutterBottom>
        Food Campaign List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1,
        }}
      >
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
        <Button
          variant="contained"
          startIcon={<Add />}
          // onClick={() => navigate("/dashboard/marketing/campaign/food-campaign/add-new")}
          onClick={openModalHandler}
        >
          Add Campaign
        </Button>
      </Box>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px",
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
                        sx={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                        }}
                        key={column.label}
                      >
                        {column.label}{" "}
                        {column.endIcon && <>({column.endIcon})</>}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, id) => {
                  return (
                    <TableRow>
                      <TableCell align="center">{id + 1}</TableCell>
                      <TableCell align="center">{row.title}</TableCell>
                      <TableCell align="center">{row.startDate}</TableCell>
                      <TableCell align="center">{row.endDate}</TableCell>
                      <TableCell align="center">{row.dailyStartTime}</TableCell>
                      <TableCell align="center">{row.dailyEndTime}</TableCell>
                      <TableCell align="center">
                        <CurrencyRupee
                          fontSize="small"
                          style={{ color: "gray", marginRight: "5px" }}
                        />
                        {row.price}
                      </TableCell>
                      <TableCell align="center">
                        {row.status == "ACTIVE" ? (
                          <Button
                            color="primary"
                            size="small"
                            variant="outlined"
                          >
                            {row.status}
                          </Button>
                        ) : (
                          <Button color="error" size="small" variant="outlined">
                            {row.status}
                          </Button>
                        )}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit" placement="left">
                          <IconButton
                            color="primary"
                            size="small"
                            onClick={openModalHandler}
                          >
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        <Tooltip title="Delete" placement="top">
                          <IconButton sx={{ color: "error.main" }} size="small">
                            <Delete />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </Scrollbar>
        </TableContainer>
        <TablePagination
          component="div"
          count={rows2.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={pageChangeHandler}
          onRowsPerPageChange={rowsPerPageChangeHandler}
        />
      </Grid>
    </>
  );
};
export default FoodCampaign;
