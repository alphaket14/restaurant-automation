import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TablePagination,
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
  Modal,
  Fade,
  Backdrop,
  FormControl,
  InputLabel,
  Checkbox,
  ListItemText
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import Scrollbar from "../../../components/Scrollbar";
import { makeStyles } from "@material-ui/core";
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

const BannerSetting = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [openModal, setOpenModal] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Title", minWidth: 50, maxWidth: 100 },
    { label: "Image", minWidth: 100, maxWidth: 120 },
    { label: "Banner Size", minWidth: 100, maxWidth: 120 },
    { label: "Status", minWidth: 80, maxWidth: 100 },
    { label: "Actions", minWidth: 20, maxWidth: 50 },
  ];

  const createData = (title, image, size, status) => {
    return { title, image, size, status };
  };

  const rows = [createData("Title", "dummy", "1920 X 1080", "ACTIVE")];

  const [status, setStatus] = useState(rows[0].status);

  const selections = [
    'Active',
    'Inactive',
  ];
  const [type, setType] = React.useState([]);

  const typeChangeHandler = (event) => {
    const {
      target: { value },
    } = event;
    setType(
      typeof value === 'string' ? value.split(',') : value,
    );
  };
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
            <Typography variant="h5" gutterBottom>
              Add Banner
            </Typography>
            <Divider sx={{ width: "100%", mb: 2 }} />

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
                    label="New Campaign"
                    placeholder="New Campaign"
                  />
                </Grid>
              </Grid>

              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1">Size </Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField fullWidth size="small" label="Width" />
                </Grid>
                <Grid item xs={1} align="center" alignSelf="center">
                  <Typography variant="body1">X</Typography>
                </Grid>
                <Grid item xs={3}>
                  <TextField fullWidth size="small" label="Height" />
                </Grid>
              </Grid>

              <Grid item container>
                <Grid item xs={4}>
                  <Typography variant="body1">Status </Typography>
                </Grid>
                <Grid item xs={6}>
                <FormControl sx={{ mr: 1, float: "left", width:"100%",mb: 2  }}size="small">
                <InputLabel id="select-type">Status</InputLabel>
                <Select
                  labelId="select-type"
                  label="Select Type"
                  id="select-type"
                  value={type}
                  onChange={typeChangeHandler}
                  renderValue={(selected) => selected.join(', ')}
                >
                  {selections.map((name)=>(
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={type.indexOf(name) > -1} />
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
          </Box>
        </Fade>
      </Modal>

      {/* <Typography variant="h5" gutterBottom>
        Banners List
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
          // onClick={() => navigate("/dashboard/marketing/banner-setting/add-banner")}
          onClick={openModalHandler}
        >
          Add Banner
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
                    <TableCell align="center">{row.title}</TableCell>
                    <TableCell justifyContent="center">
                      <img style={{ height: 50, width: 30 }} />
                    </TableCell>
                    <TableCell align="center">{row.size}</TableCell>
                    <TableCell align="center">
                      {row.status == "ACTIVE" ? (
                        <Button color="primary" size="small" variant="outlined">
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
export default BannerSetting;
