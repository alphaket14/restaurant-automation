import React, { useState } from "react";
import {
  TextField,
  Grid,
  Paper,
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
  Divider,
  Checkbox,
  ListItemText,
  Tooltip,
  Modal,
  InputAdornment,
  Backdrop,
  Fade,
  Box,
  FormControl,
  InputLabel
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  Visibility,
  CurrencyRupee,
} from "@mui/icons-material";
import Stack from '@mui/material/Stack';
import Scrollbar from "../../../components/Scrollbar";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
}));

const RecipeList = (props) => {
  const classes = useStyles();

  const columns = [
    { label: "Sr. No.", minWidth: 70, maxWidth: 100 },
    { label: "Item Code No.", minWidth: 120, maxWidth: 300 },
    { label: "Parent Catagory", minWidth: 50, maxWidth: 150 },
    { label: "Food Catagory", minWidth: 50, maxWidth: 120 },
    { label: "Food Item", minWidth: 50, maxWidth: 120 },
    { label: "Serving Unit", minWidth: 50, maxWidth: 120 },
    { label: "Ingredients", minWidth: 50, maxWidth: 120 },
    { label: "Price", minWidth: 50, maxWidth: 120 },
    { label: "Amount", minWidth: 50, maxWidth: 120 },
    { label: "Actions", minWidth: 50, maxWidth: 100 },
  ];

  const createData = (itemCode,parentCategory,categoryName,foodName,serveUnit,component,cost, total) => {
    return {itemCode,parentCategory,categoryName,foodName,serveUnit,component,cost, total
    };
  };
  const rows = [
    createData("A1","Non-Veg","Category name","Food Name","Unit","Ingredients",1000, 3000),
  ];

  const [openModal, setOpenModal] = React.useState(false);
  const [openModal2, setOpenModal2] = React.useState(false);

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
  const modalColumns = [
    { label: "Item Code No.", minWidth: 20, maxWidth: 50 },
    { label: "Inventory Category", minWidth: 20, maxWidth: 50 },
    { label: "Inventory Item", minWidth: 20, maxWidth: 50 },
    { label: "Units", minWidth: 20, maxWidth: 50 },
    { label: "Quantity", minWidth: 20, maxWidth: 50 },
    {
      label: "Price",
      endIcon: <CurrencyRupee sx={{ fontSize: 14 }} />,
      minWidth: 20,
      maxWidth: 50,
    },
  ];

  const createModalRows = (
    itemCode,
    inventoryCategory,
    inventoryItem,
    units,
    qty,
    price
  ) => ({
    itemCode,
    inventoryCategory,
    inventoryItem,
    units,
    qty,
    price,
  });

  const modalRows = [
    createModalRows("A1", "Category", "Item", "Unit", 2, 200),
    createModalRows("A1", "Category", "Item", "Unit", 2, 200),
  ];
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
  return (
    <>
      <Modal
        open={openModal2}
        onClose={closeModalHandler2}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal2}>
          <Box className={classes.modal}>
            <Typography variant="h5" align="center">
              Add Recipe
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
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Name :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Serving Unit :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Component :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Cost :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                    }}
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
        open={openModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Typography
              variant="h4"
              component="div"
              sx={{ mb: 2 }}
              align="center"
            >
              Recipe Details
            </Typography>
            <Grid container direction="column" rowSpacing={2}>
              <Grid item container spacing={1}>
                <Grid item xs={4}>
                  <Typography variant="body1">
                    Parent Category : Non-Veg
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">
                    Food Category : Category
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Food Item : Food</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">
                    Food Variant : Variant
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body1">Serving Unit : Unit</Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Table size="small" sx={{ minWidth: 1300 }}>
                  <TableHead>
                    <TableRow>
                      {modalColumns.map((column, id) => (
                        <TableCell
                          align="center"
                          sx={{
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth,
                          }}
                        >
                          {column.label}
                        </TableCell>
                      ))}
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {modalRows.map((row, id) => (
                      <TableRow>
                        <TableCell align="center">{row.itemCode}</TableCell>
                        <TableCell align="center">
                          {row.inventoryCategory}
                        </TableCell>
                        <TableCell align="center">
                          {row.inventoryItem}
                        </TableCell>
                        <TableCell align="center">{row.units}</TableCell>
                        <TableCell align="center">{row.qty}</TableCell>
                        <TableCell align="center">{row.price}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Grid>
              <Grid item align="right">
                Total Amout Payable :{" "}
                <Typography variant="h6" component="span" color="primary.main">
                  <CurrencyRupee sx={{ fontSize: 16 }} />
                  400
                </Typography>
              </Grid>
              <Grid item container>
                <Grid item xs={9}></Grid>
                <Grid item xs={3}>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={closeModalHandler}
                  >
                    Close
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
          <InputLabel id="demo-select-small">Food Category</InputLabel>
          <Select 
                  labelId="demo-select-small"
                  label="Food Category"
                  id="demo-select-small"
                  fullWidth 
                  //size="small"
                  //multiple
                  value={catName}
                  onChange={handleCatChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {cats.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={catName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
        </FormControl>
        <TextField sx={{ width: "20%", marginLeft:"10px", float: "left"}} label="Food Item" size="small"/>
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
            <Table size="small" sx={{ minWidth: 1300 }} sx={{ minWidth: 1300 }}>
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
                      <TableCell align="center">{row.itemCode}</TableCell>
                      <TableCell align="center">{row.parentCategory}</TableCell>
                      <TableCell align="center">{row.categoryName}</TableCell>
                      <TableCell align="center">{row.foodName}</TableCell>
                      <TableCell align="center">{row.serveUnit}</TableCell>
                      <TableCell align="center">
                      <Stack direction="column" spacing={2}>
                          <Button color="primary" size="small" variant="outlined">
                            {row.component}
                          </Button>
                          <Button color="primary" size="small" variant="outlined">
                            {row.component}
                          </Button>
                          <Button color="primary" size="small" variant="outlined">
                            {row.component}
                          </Button>
                      </Stack>
                      </TableCell>
                      <TableCell align="center">
                      <Stack direction="column" spacing={2}>
                          <Button color="primary" size="small" variant="outlined">
                            <CurrencyRupee
                              fontSize="small"
                              style={{ color: "gray", marginRight: "5px" }}
                            />
                              {row.cost}
                          </Button>
                          <Button color="primary" size="small" variant="outlined">
                            <CurrencyRupee
                              fontSize="small"
                              style={{ color: "gray", marginRight: "5px" }}
                            />
                              {row.cost}
                          </Button>
                          <Button color="primary" size="small" variant="outlined">
                            <CurrencyRupee
                              fontSize="small"
                              style={{ color: "gray", marginRight: "5px" }}
                            />
                              {row.cost}
                          </Button>
                      </Stack>
                      </TableCell>
                      <TableCell align="center">
                        <CurrencyRupee
                          fontSize="small"
                          style={{ color: "gray", marginRight: "5px" }}
                        />
                        {row.total}
                      </TableCell>
                      <TableCell align="center">
                        <Tooltip title="Edit" placement="left">
                          <IconButton href="/dashboard/foodmanagement/manage-recipe/add-recipe" color="primary" size="small">
                            <Edit />
                          </IconButton>
                        </Tooltip>
                        {/*<Tooltip title="View" placement="top">
                          <IconButton
                            color="secondary"
                            size="small"
                            onClick={openModalHandler}
                          >
                            <Visibility />
                          </IconButton>
                          </Tooltip>*/}
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
      </Grid>
    </>
  );
};
export default RecipeList;
