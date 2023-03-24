import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Button,
  IconButton,
  Typography,
  Grid,
  Box,
  Modal,
  Backdrop,
  Fade,
  Select,
  MenuItem,
  TableContainer
} from "@mui/material";
import { Edit, Delete, Add } from "@mui/icons-material";
import Scrollbar from "src/components/Scrollbar";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const AdvertisementQR = (props) => {
  const navigate = useNavigate();
  const columns = [
    { label: "Type", minWidth: 50, maxWidth: 100 },
    { label: "Status", minWidth: 50, maxWidth: 100 },
    { label: "Actions", minWidth: 50, maxWidth: 100 },
    { label: "Generate", minWidth: 50, maxWidth: 100 }
  ];

  const createRows = (type, status) => ({ type, status });

  const rows = [createRows("Advertisement Type", "ACTIVE")];

  const [addTableModal, setAddTableModal] = useState(false);

  const openModalHandler = () => {
    setAddTableModal(true);
  };

  const closeModalHandler = () => setAddTableModal(false);

  const classes = useStyles();

  return (
    <>
      <Modal
        open={addTableModal}
        onClose={closeModalHandler}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={addTableModal}>
          <Box className={classes.modal}>
            <Typography variant="h6" sx={{ width: "100%", textAlign: "center", mb: 2 }}>
              Add Campaign
            </Typography>
            <Typography variant="body1" gutterBottom>
              Advertisement Type
            </Typography>
            <TextField fullWidth placeholder="Type" sx={{ mb: 2 }} />
            <Typography variant="body1" gutterBottom>
              Status
            </Typography>
            <Select fullWidth>
              <MenuItem>Active</MenuItem>
              <MenuItem>Inactive</MenuItem>
            </Select>
            <Box
              sx={{
                width: "100%",
                display: "flex",
                justifyContent: "right",
                alignItems: "center",
                mt: 1
              }}
            >
              <Button variant="outlined" sx={{ mr: 1 }} color="error" onClick={closeModalHandler}>
                Cancel
              </Button>
              <Button variant="contained">Save</Button>
            </Box>
          </Box>
        </Fade>
      </Modal>
      <Grid container>
        <Box sx={{ display: "flex", justifyContent: "space-between", width: "100%", mb: 1 }}>
          {/* <Typography variant="h5">Advertisements</Typography> */}
          <Button variant="contained" sx={{ mr: 1 }} startIcon={<Add />} onClick={openModalHandler}>
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
              {columns.map((column, id) => (
                <TableCell
                  align="center"
                  sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, id) => (
              <TableRow>
                <TableCell align="center">{row.type}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <IconButton size="small" color="primary" onClick={openModalHandler}>
                    <Edit />
                  </IconButton>
                  <IconButton size="small" sx={{ color: "error.main" }}>
                    <Delete />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => navigate("/dashboard/qr-code/qr-generate")}
                  >
                    Generate
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Scrollbar>
        </TableContainer>
      </Grid>
      </Grid>
    </>
  );
};
export default AdvertisementQR;
