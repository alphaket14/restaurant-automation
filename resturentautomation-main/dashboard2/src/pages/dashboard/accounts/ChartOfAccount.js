import React, { useEffect, useState } from "react";
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
  withStyles,
  TablePagination,
  FormGroup,
  FormControlLabel,
  Checkbox,
  makeStyles,
  Typography,
  Modal,
  Backdrop,
  Fade,
  Box
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import EditIcon from "@mui/icons-material/Edit";
import ControlCameraIcon from "@mui/icons-material/ControlCamera";
import CachedIcon from "@mui/icons-material/Cached";
import RemoveIcon from "@mui/icons-material/Remove";
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloseIcon from "@mui/icons-material/Close";
import { Form } from "formik";
import { width } from "@mui/system";

const createData = (headCode, headName, parentHead, headType, action) => {
  return { headCode, headName, parentHead, headType, action };
};

let data = [
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy"),
  createData(1, "assets", "COA", "A", "dummy")
];

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

const ChartOfAccount = (props) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [headName, setHeadName] = useState("");
  const [currIndex, setCurrIndex] = useState(null);
  const [updatedHeadName, setUpdatedHeadName] = useState("");
  const [parentHeadName, setParentHeadName] = useState("Assets");
  const [rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);

  const columns = [
    { label: "Head Code", minWidth: 50, maxWidth: 70 },
    { label: "Head Name", minWidth: 250, maxWidth: 350 },
    { label: "Parent Head", minWidth: 150, maxWidth: 300 },
    { label: "Head Type", minWidth: 150, maxWidth: 300 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];
  
  const classes = useStyles();

  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    let newItem = createData(1,headName,parentHeadName,"COA","A","dummy")
    setRows(prev => [...prev,newItem])
    setHeadName("")
    setParentHeadName("Assets")
  }

  const reset = () => {
    setHeadName("")
    setParentHeadName("Assets")
  }

  const edit = (i) => {
    openModalHandler()
    setCurrIndex(i)
  }

  const editHeadName = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].headName = updatedHeadName;
    setRows(newRows)
    closeModalHandler()
    setUpdatedHeadName("")
    setCurrIndex(null)
  }

  const deleteItem = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      setRows(newRows)
    }

  }



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
        <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal}>
              <Typography variant="h5" align="center">
                Update
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Head Name* :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={updatedHeadName}
                      onChange={e => setUpdatedHeadName(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container alignItems="center">
                  <Grid item xs={8} container align="left">
                    <FormGroup row >
                      <FormControlLabel name="Transaction" control={<Checkbox />} label="Transaction" />
                      <FormControlLabel checked name="Active"  control={<Checkbox />} label="Active" />
                      <FormControlLabel name="GL"  control={<Checkbox />} label="GL" />
                    </FormGroup>
                  </Grid>

                  <Grid item xs={4} align="right">
                    <Button onClick={()=>setUpdatedHeadName("")} variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={()=>editHeadName()} variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>


              </Grid>
            </Box>
          </Fade>
        </Modal>
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
            Chart Of Account
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
        
        <form style={{width:"100%"}}>
        <Grid item container style={{ padding: "20px 20px" }}>
          <Grid item container direction="column" xs={6} rowGap={2}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                *
              </Grid>
              <Grid item xs={8}>
                <Select size="small" placeholder="Select Option" fullWidth>
                  <MenuItem value="Assets">Assets</MenuItem>
                  <MenuItem value="Equity">Equity</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Liabilities">Liabilities</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Head Name*
              </Grid>
              <Grid item xs={8}>
                <TextField name="headName" required size="small"
                value={headName}
                onChange={e => setHeadName(e.target.value)}
                placeholder="head Name"  
                fullWidth
                
                 />
              </Grid>
            </Grid>
          </Grid>
          <Grid item container direction="column" rowGap={2} xs={6}>
            <Grid item container spacing={3}>
              <Grid item xs={4} align="right">
                Parent Head Name
              </Grid>
              <Grid item xs={8}>
                <Select size="small" name="parentHeadName"
                  value={parentHeadName}
                  onChange={e => setParentHeadName(e.target.value)}
                  required fullWidth>
                  <MenuItem value="Assets">Assets</MenuItem>
                  <MenuItem value="Equity">Equity</MenuItem>
                  <MenuItem value="Expense">Expense</MenuItem>
                  <MenuItem value="Income">Income</MenuItem>
                  <MenuItem value="Liabilities">Liabilities</MenuItem>
                </Select>
              </Grid>
            </Grid>

            <Grid item container spacing={2} style={{ justifyContent: "right", alignItems:"center" }}>
              <Grid item>
                <FormGroup row >
                  <FormControlLabel name="Transaction" control={<Checkbox />} label="Transaction" />
                  <FormControlLabel checked name="Active"  control={<Checkbox />} label="Active" />
                  <FormControlLabel name="GL"  control={<Checkbox />} label="GL" />
              </FormGroup>
              </Grid>
              <Grid item>
                <Button type="reset" onClick={reset} variant="outlined">Reset</Button>
              </Grid>
              <Grid item>
                <Button type="submit" onClick={onSubmit} variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        </form>
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
          <Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
            <Grid item>
              <Button size="small">Copy</Button>
              <Button size="small">CSV</Button>
              <Button size="small">Excel</Button>
              <Button size="small">PDF</Button>
              <Button size="small">Print</Button>
            </Grid>
            <Grid item>
              <Input type="text" placeholder="Search" />
            </Grid>
          </Grid>

          <Grid item container>
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
                    <TableRow key={id} hover>
                      <TableCell>{id}</TableCell>
                      <TableCell>{row.headName}</TableCell>
                      <TableCell>{row.parentHead}</TableCell>
                      <TableCell>{row.headType}</TableCell>
                      <TableCell>
                        <IconButton color="primary" onClick={() => edit(id)}>
                          <EditIcon />
                        </IconButton>
                        <IconButton onClick={() => deleteItem(id)}>
                          <DeleteIcon color="error"/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
            <TablePagination
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
              />
            </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ChartOfAccount;
