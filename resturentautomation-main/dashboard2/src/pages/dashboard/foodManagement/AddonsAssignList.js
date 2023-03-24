import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  Tooltip,
  Box,
  Modal,
  Backdrop,
  Fade,
  Checkbox,
  FormControl,
  InputLabel,
  OutlinedInput,
  ListItemText
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, Delete, Add, CurrencyRupee } from "@mui/icons-material";

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

    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const AddonsList = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [openModal, setOpenModal] = React.useState(false);
  const openModalHandler = () => setOpenModal(true);
  const closeModalHandler = () => setOpenModal(false);

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Add-ons Name", minWidth: 300, maxWidth: 500 },
    {
      label: "Food Item",
      minWidth: 100,
      maxWidth: 120
    },
    { label: "Actions", minWidth: 80, maxWidth: 120 }
  ];

  const createData = (addonName, foodItem) => {
    return { addonName, foodItem };
  };

  const rows = [createData("Addon Names", "Food Name")];

  const addonsArray = ["Addon 1", "Addon 2", "Addon 3"];

  const [addons, setAddons] = useState([]);

  const addonChangeHandler = (event) => {
    const {
      target: { value }
    } = event;
    setAddons(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
            <Typography sx={{ width: "100%", textAlign: "center", mb: 2 }} variant="h5">
              Edit
            </Typography>
            <Grid container direction="column">
              <Typography variant="body1" gutterBottom>
                Food Item
              </Typography>
              <Select fullWidth size="small" sx={{ mb: 2 }}></Select>
              <Typography variant="body1" gutterBottom>
                Addons Name
              </Typography>
              <FormControl fullWidth size="small" sx={{ mb: 2 }}>
                <InputLabel>Select Addons</InputLabel>
                <Select
                  multiple
                  value={addons}
                  onChange={addonChangeHandler}
                  input={<OutlinedInput label="Select Addons" />}
                  renderValue={(selected) => selected.join(", ")}
                >
                  {addonsArray.map((addon) => (
                    <MenuItem key={addon} value={addon}>
                      <Checkbox checked={addons.indexOf(addon) > -1} />
                      <ListItemText primary={addon} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Box sx={{ width: "100%", display: "flex", justifyContent: "right", mb: 1 }}>
                <Button variant="outlined" color="error" onClick={closeModalHandler} sx={{ mr: 1 }}>
                  Cancel
                </Button>
                <Button variant="contained">Save</Button>
              </Box>
            </Grid>
          </Box>
        </Fade>
      </Modal>
      <Typography variant="h5" gutterBottom>
        Add-ons Assign List
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} />
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 1
        }}
      >
        <TextField sx={{ width: "20%" }} label="Search" size="small" />
        {/* <Button
          variant="contained"
          startIcon={<Add />}
          onClick={() => navigate("/dashboard/foodmanagement/manageaddons/addaddons")}
        >
          Add Add-ons
        </Button> */}
      </Box>
      <TableContainer >
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    align="center"
                    sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
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
                  <TableCell align="center">{row.addonName}</TableCell>
                  <TableCell align="center">{row.foodItem}</TableCell>
                  <TableCell align="center">
                    <Tooltip title="Edit" placement="left">
                      <IconButton color="primary" size="small" onClick={openModalHandler}>
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
      </TableContainer>
    </>
  );
};
export default AddonsList;
