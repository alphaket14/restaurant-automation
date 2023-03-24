import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  Select,
  MenuItem,
  Typography,
  Tooltip,
  Box,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  FormControl,
  InputLabel,
  Autocomplete,
  Modal,
  TablePagination
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, Delete, Add } from "@mui/icons-material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import Scrollbar from "src/components/Scrollbar";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));
const FoodAvailability = (props) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const columns = [
    { label: "Sr. No.", minWidth: 70, maxWidth: 60 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    { label: "Parent Catagory", minWidth: 150, maxWidth: 100 },
    { label: "Food Catagory", minWidth: 50, maxWidth: 100 },
    { label: "Food Item", minWidth: 50, maxWidth: 100 },
    { label: "Available Days", minWidth: 50, maxWidth: 100 },
    { label: "Available Time", minWidth: 120, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (parentCategory, categoryName, foodName, days, time) => {
    return { parentCategory, categoryName, foodName, days, time };
  };

  const rows = [
    createData(
      "Non-Veg",
      "Food Catagory",
      "Food Name",
      "Mon, Tue, Wed",
      "12:00 - 18:00"
    ),
  ];
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [status, setStatus] = useState(rows[0].status);
  const [currIndex, setCurrIndex] = useState(null);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const openModalHandler2 = () => {
    setOpenModal2(true);
  };
  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };
  //parent_cat
  const parent_cats = ["Veg", "Non Veg"];
  const [parentName, setParName] = React.useState([]);
  const handleParChange = (event) => {
    const {
      target: { value },
    } = event;
    setParName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for status
  const stats = ["Active", "Inactive"];
  const [statName, setStatName] = React.useState([]);
  const handleStatChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for days
  const daysArray = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const [days, setDays] = useState([]);

  const dayChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setDays(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for category
  const cats= [
    'Thai',
    'Chinese',
    'American',
    'European',
  ];
  const [catName, setCatName] = React.useState([]);
  const handleCatChange = (event) => {
    const {
      target: { value },
    } = event;
    setCatName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for food item
  const f_items= [
    'Item 1',
    'Item 2',
    'Item 3',
    'Item 4',
  ];
  const [itemName, setItemName] = React.useState([]);
  const handleItemChange = (event) => {
    const {
      target: { value },
    } = event;
    setItemName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for foodcats
  const foodcats = [
    { title: 'Category 1'},
    { title: 'Category 2'},
    { title: 'Category 3'},
    { title: 'Category 4'},
  ];
  //for food item
   const fooditems = [
    { title: 'Item 1'},
    { title: 'Item 2'},
    { title: 'Item 3'},
    { title: 'Item 4'},
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
            <Typography variant="h5" align="center">
              Add Food Availability
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Parent Category :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    multiple
                    value={parentName}
                    onChange={handleParChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {parent_cats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={parentName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Category Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={foodcats}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Category" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Item :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={fooditems}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Item" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Available days :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    fullWidth
                    size="small"
                    multiple
                    value={days}
                    onChange={dayChangeHandler}
                    //input={<OutlinedInput label="Select Days" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {daysArray.map((day) => (
                      <MenuItem key={day} value={day}>
                        <Checkbox checked={days.indexOf(day) > -1} />
                        <ListItemText primary={day} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Start Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    type="time"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">End Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    type="time"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                  </Button>*/}
                  <Button
                    /*onClick={addPosition}*/ variant="contained"
                    size="small"
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Modal
        open={openModal2}
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center">
              Edit Food Availability
            </Typography>
            <Grid
              item
              container
              direction="column"
              spacing={2}
              sx={{ padding: 2 }}
            >
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Parent Category :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    name="departName"
                    fullWidth
                    size="small"
                    multiple
                    value={parentName}
                    onChange={handleParChange}
                    //input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {parent_cats.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={parentName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Category Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={foodcats}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Category" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Item :</Typography>
                </Grid>
                <Grid item xs={8}>
                <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={fooditems}
                disableCloseOnSelect
                getOptionLabel={(option) => option.title}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.title}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Food Item" placeholder="Search" />
                )}
              />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Available days :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select
                    fullWidth
                    size="small"
                    multiple
                    value={days}
                    onChange={dayChangeHandler}
                    //input={<OutlinedInput label="Select Days" />}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    {daysArray.map((day) => (
                      <MenuItem key={day} value={day}>
                        <Checkbox checked={days.indexOf(day) > -1} />
                        <ListItemText primary={day} />
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Start Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    type="time"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">End Time :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    type="time"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container justifyContent="flex-end">
                <Grid item>
                  {/*<Button   variant="outlined" size="small" sx={{ marginRight: 1 }}>
                Reset
                </Button>*/}
                  <Button
                    variant="contained"
                    size="small" /*onClick={editPosition}*/
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Box
        sx={{
          width: "100%",
          paddingLeft: 2,
          mb: 1,
          paddingBottom: 6,
        }}
      >
        <FormControl sx={{width:"20%" , float: "left"}} size="small">
          <InputLabel id="demo-select-small">Parent Category</InputLabel>
          <Select 
                  labelId="demo-select-small"
                  label="Food Category"
                  id="demo-select-small"
                  fullWidth 
                  //size="small"
                  //multiple
                  value={parentName}
                  onChange={handleParChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {parent_cats.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={parentName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
        </FormControl>
        <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={foodcats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      //style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Food Category" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={fooditems}
      disableCloseOnSelect
      getOptionLabel={(option) => option.title}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.title}
        </li>
      )}
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      //style={{ width: 500 }}
      renderInput={(params) => (
        <TextField {...params} label="Food Item" placeholder="Search" />
      )}
    />
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
          //sx={{ justifyContent: "end" }}
          sx={{ float: "right" }}
        >
          Add Food Availability
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
                      {column.label}
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
                    <TableCell align="center">{row.parentCategory}</TableCell>
                    <TableCell align="center">{row.categoryName}</TableCell>
                    <TableCell align="center">{row.foodName}</TableCell>
                    <TableCell align="center">{row.days}</TableCell>
                    <TableCell align="center">{row.time}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() =>
                          //  navigate("/dashboard/foodmanagement/managefood/add-availability")
                          //}
                          onClick={openModalHandler2}
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
export default FoodAvailability;
