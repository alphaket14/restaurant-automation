import React, { useState, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  withStyles,
  makeStyles,
  Typography,
  TextField,
  Fade,
  Box,
  Backdrop,
  Modal
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import TableContainer from '@mui/material/TableContainer';
const createData = (
  sl,
  empId,
  empName,
  totalSal,
  workHour,
  workPeriod,
  payType,
  date,
  paidBy,
  action
) => {
  return { sl,empId, empName,  totalSal, workHour, workPeriod, payType, date, paidBy, action };
};

const data = [
  createData(1, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "notPaid"),
  createData(2, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "notPaid"),
  createData(3, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "notPaid"),
  createData(4, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "notPaid"),
  createData(5, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "paid"),
  createData(6, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "paid"),
  createData(7, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "paid"),
  createData(8, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "paid"),
  createData(9, "4516em", "Dorathy McClain", "0.00", "0.00", "0", "demo", "demo", "demo", "paid")
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



const ManageEmployeeSalary = (props) => {
  const [rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [index, setIndex] = useState(null);

  const classes = useStyles();

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openPaymentForm = (id) =>{
    setIndex(id)
    openModalHandler()
    
  }

  const pay = () =>{
    let newRows = rows.map(row=>row);
    newRows[index].action = "paid";
    setRows(newRows);
    closeModalHandler();
    setIndex(null);
  }

  const deleteRow = (id) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,index) =>{
        return index !== id;
      })
      setRows(newRows)
    }

  }

  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 70 },
    { label: "Employee Id", minWidth: 150, maxWidth: 600 },
    { label: "Employee Name", minWidth: 150, maxWidth: 600 },
    { label: "Total Salary", minWidth: 120, maxWidth: 600 },
    { label: "Working Hour", minWidth: 130, maxWidth: 600 },
    { label: "Working Period", minWidth: 140, maxWidth: 600 },
    { label: "Payment Type", minWidth: 140, maxWidth: 600 },
    { label: "Date", minWidth: 100, maxWidth: 200 },
    { label: "Paid By", minWidth: 100, maxWidth: 200 },
    { label: "Actions", minWidth: 170, maxWidth: 600 }
  ];

  





  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'ManageEmployeeSalary',
  });
  return (
    <>
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
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
                Payment Form
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Total Salary :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField placeholder="0.00" fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Working Hours :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField placeholder="0.00" fullWidth size="small" />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Working Period :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField placeholder="0" fullWidth size="small" />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="center">
                  <Grid item xs={4} >
                    <Button onClick={closeModalHandler}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Cancel
                    </Button>
                    <Button color="error" onClick={pay} variant="contained" size="small">
                      Pay
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>

        {/*<Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button onClick={handlePrint} size="small">Print/PDF</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
        </Grid>*/}

        <TableContainer>
        <Table size="small" sx={{ minWidth: 1300 }} ref={componentRef}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign:"center" }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell style={{ textAlign: "center"}}>{row.sl}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.empId}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.empName}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.totalSal}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.workHour}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.workPeriod}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.payType}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.date}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.paidBy}</TableCell>
                  <TableCell>
                    {row.action==="paid"? <Typography sx={{display:"inline"}} color="primary">Paid</Typography>:
                    <Button onClick={() =>openPaymentForm(id)} color="error" size="small" variant="outlined">
                      Pay Now
                    </Button>
                    }
                    <IconButton onClick={()=>deleteRow(id)}>
                      <DeleteIcon color="error"/>
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        </TableContainer>
      </Grid>
    </>
  );
};
export default ManageEmployeeSalary;
