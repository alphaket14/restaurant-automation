import React, { useState, useCallback } from "react";
import {
  Box,
  Button,
  TextField,
  Grid,
  Select,
  MenuItem,
  IconButton,
  Typography,
  Divider,
  FormControl,
  InputLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Modal,
  Backdrop,
  Fade,
  Checkbox,
  ListItemText,
  TableCell,
  TableContainer,
  TableRow,
  TableHead,
  Table,
  InputAdornment,
  TableBody,
  Tooltip
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Add, Edit, Delete, CurrencyRupee } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { DatePicker } from "@material-ui/lab";
import Scrollbar from "../../../components/Scrollbar";
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
const AddWaste = (props) => {
  const classes = useStyles();
  const columns = [
    //{ label: "Sr. No.", minWidth: 100, maxWidth: 200 },
    //{ label: "Item Code No.", minWidth: 50, maxWidth: 100 },
    //{ label: "Parent Catagory", minWidth: 150, maxWidth: 300 },
    { label: "Food Catagory", minWidth: 150, maxWidth: 300 },
    { label: "Food Item", minWidth: 130, maxWidth: 100 },
    { label: "Variant", minWidth: 130, maxWidth: 100 },
    { label: "Loss Amount", minWidth: 150, maxWidth: 400 },
    { label: "Responsible Person", minWidth: 200, maxWidth: 400 },
    { label: "Date", minWidth: 150, maxWidth: 400 },
    { label: "Added By", minWidth: 120, maxWidth: 250 },
    { label: "Comment", minWidth: 120, maxWidth: 250 },
    { label: "Action", minWidth: 120, maxWidth: 250 },
  ];
  const createData = (foodcat, fooditem, variant, lossamt, responsible, date, addedby, comment) => {
    return {foodcat, fooditem, variant, lossamt, responsible, date, addedby, comment};
  };
  const data = [
    createData("Food Category", "Food Item", "Variant", 200, "Responsible", "01-01-2022","Added By", "Comment"),
  ];
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [file, setFile] = useState();
  const [rows, setRows] = useState(data);
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    setFile(acceptedFiles[0]);
  });
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
  const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
    onDrop,
    multiple: false,
    accept: "image/jpg,image/jpeg,image/png"
  });
  //for category
  const cats= [
    'Thai',
    'Chinese',
    'American',
    'European',
  ];
  const [catName, setCatName] = React.useState([]);
  const [lossamt, setLossamt] = React.useState(200);
  const [itemloss, setItemloss] = useState();
  const [foodName, setFoodName] = useState();
  const [price, setPrice] = useState();
  const handleCatChange = (event) => {
    const {
      target: { value },
    } = event;
    setCatName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for period
  const periods= [
    'Past 1 week',
    'Past 1 month',
    'Past 6 months',
  ];
  const [periodName, setPeriodName] = React.useState([]);
  const handlePeriodChange = (event) => {
    const {
      target: { value },
    } = event;
    setPeriodName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const [startDate,SetStartDate] = useState(new Date());
  const [endDate,SetEndDate] = useState(new Date());
  //for loss type
  const losstypes = [
    'Food Price',
    'Making Price',
  ]
  const [LossName, setLossName] = React.useState([]);
  const handleLossChange = (event) => {
    const {
      target: { value },
    } = event;
    setLossName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    value == "Food Price"? setItemloss(1000) : setItemloss(3000);
  };
  const addPosition = () => {
    const newPosition = createData(catName, foodName, "", itemloss, "", "", "", "", "");
    var newRows = [...rows, newPosition]
    setRows((prev) => [...prev, newPosition]);
    setLossamt(lossamt + parseInt(itemloss))
    closeModalHandler();
  }
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setLossamt(lossamt - rows[index].lossamt)
      setRows(newRows);
    }
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
              Edit Waste
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
                  <Typography variant="subtitle2">Food Category:</Typography>
                </Grid>
                <Grid item xs={8}>
                <Select 
                  name="departName"
                  fullWidth 
                  size="small"
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
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Item:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small"></Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Variant :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small"></Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Loss Type:</Typography>
                </Grid>
                <Grid item xs={8}>
                <Select 
                  name="departName"
                  fullWidth 
                  size="small"
                  //multiple
                  value={LossName}
                  onChange={handleLossChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {losstypes.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={LossName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Loss Amount :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    size="small"
                    //value={categoryName}
                    //onChange={e => setCategory(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Responsible Person :</Typography>
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
                  <Typography variant="subtitle2">Date :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <DatePicker
                      inputFormat="dd/MM/yyyy"
                      value={startDate}
                      onChange={(newValue) => {
                      SetStartDate(newValue);
                      }}
                      renderInput={(params) => (
                      <TextField 
                      {...params}
                      fullWidth size="small" helperText={null}/>
                      )}
                    />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Added By :</Typography>
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
                  <Typography variant="subtitle2">Comment :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    size="small"
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
            <Typography variant="h5" align="center">
              Add Waste
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
                  <Typography variant="subtitle2">Food Category:</Typography>
                </Grid>
                <Grid item xs={8}>
                <Select 
                  name="departName"
                  fullWidth 
                  size="small"
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
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Food Item:</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small"></Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Variant :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <Select fullWidth size="small"></Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Loss Type:</Typography>
                </Grid>
                <Grid item xs={8}>
                <Select 
                  name="departName"
                  fullWidth 
                  size="small"
                  //multiple
                  value={LossName}
                  onChange={handleLossChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {losstypes.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={LossName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Loss Amount :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    type="number"
                    size="small"
                    value={itemloss}
                    onChange={e => setPrice(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <CurrencyRupee />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Responsible Person :</Typography>
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
                  <Typography variant="subtitle2">Date :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <DatePicker
                      inputFormat="dd/MM/yyyy"
                      value={startDate}
                      onChange={(newValue) => {
                      SetStartDate(newValue);
                      }}
                      renderInput={(params) => (
                      <TextField 
                      {...params}
                      fullWidth size="small" helperText={null}/>
                      )}
                    />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">Added By :</Typography>
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
                  <Typography variant="subtitle2">Comment :</Typography>
                </Grid>
                <Grid item xs={8}>
                  <TextField
                    fullWidth
                    multiline
                    minRows={4}
                    size="small"
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
                    onClick={addPosition} variant="contained"
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
      <Box
        sx={{
          width: "100%",
          paddingLeft: 2,
          mb: 1,
          paddingBottom: 6,
        }}
      >
        <DatePicker
            inputFormat="dd/MM/yyyy"
            value={startDate}
            onChange={(newValue) => {
            SetStartDate(newValue);
            }}
            renderInput={(params) => (
            <TextField 
            {...params}
            label="From" sx={{width: "20%", float: "left" }}
             size="small" helperText={null}/>
            )}
          />
        <DatePicker
            inputFormat="dd/MM/yyyy"
            value={endDate}
            onChange={(newValue) => {
            SetEndDate(newValue);
            }}
            renderInput={(params) => (
            <TextField 
            {...params}
            label="To" sx={{ width: "20%", float: "left", marginLeft:"10px" }}
             size="small" helperText={null}/>
            )}
          />
        <FormControl sx={{width:"20%" , marginLeft:"10px", float: "left"}} size="small">
          <InputLabel id="demo-select-small">Period</InputLabel>
          <Select 
                  labelId="demo-select-small"
                  label="Period"
                  id="demo-select-small"
                  fullWidth 
                  //size="small"
                  //multiple
                  value={periodName}
                  onChange={handlePeriodChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {periods.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={periodName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
              </Select>
        </FormControl>
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={openModalHandler}
          //sx={{ justifyContent: "end" }}
          sx={{ float: "right" }}
        >
          Add Waste
        </Button>
        <Box
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                display: "flex",
                float: "right",
                justifyContent: "center",
                alignItems: "center",
                mr: 1,
                bgcolor: "rgba(51,102,255,0.5)",
                color: "#fff"
              }}
            >
              <Typography variant="body2">Total Loss Amount : <CurrencyRupee fontSize="small" style={{ marginRight:"5px"}}/>{lossamt}</Typography>
            </Box>
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
                  <TableCell align="center">{row.foodcat}</TableCell>
                  <TableCell align="center">{row.fooditem}</TableCell>
                  <TableCell align="center">{row.variant}</TableCell>
                  <TableCell align="center">
                    <CurrencyRupee
                        fontSize="small"
                        style={{ color: "gray", marginRight: "5px" }}
                    />
                    {row.lossamt}
                  </TableCell>
                  <TableCell align="center">{row.responsible}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.addedby}</TableCell>
                  <TableCell align="center">{row.comment}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton
                        color="primary"
                        size="small"
                        //onClick={() => navigate("/dashboard/foodmanagement/managefood/add-variant")}
                        onClick={openModalHandler2}
                      >
                        <Edit />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="top">
                      <IconButton sx={{ color: "error.main" }} onClick={() => deletePosition(id)} size="small">
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
export default AddWaste;
