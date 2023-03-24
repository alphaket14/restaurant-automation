import React,{useState} from "react";
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
  Modal,
  Backdrop,
  Fade,
  Box,
  Typography,
  TextField
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

const createData = (
  sl,
  name,
  empId,
  loanNo,
  installmentAmount,
  payment,
  date,
  receiver,
  installNo,
  notes
) => {
  return {
    sl,
    name,
    empId,
    loanNo,
    installmentAmount,
    payment,
    date,
    receiver,
    installNo,
    notes
  };
};
const data = [
  createData(
    1,
    "Mr Kabir",
    "Mr kabir",
    9,
    "34567$",
    "1%",
    "36Month",
    "35647$",
    "2020-04-04",
    "2020-04-04"
  ),
  createData(
    2,
    "Mr Kabir",
    "Mr kabir",
    9,
    "34567$",
    "1%",
    "36Month",
    "35647$",
    "2020-04-04",
    "2020-04-04"
  ),
  createData(
    3,
    "Mr Kabir",
    "Mr kabir",
    9,
    "34567$",
    "1%",
    "36Month",
    "35647$",
    "2020-04-04",
    "2020-04-04"
  )
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

const LoanInstallment = (props) => {
  const[rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [currIndex, setCurrIndex] = useState(null);

  const [name, setName] = useState("")
  const [employeeId, setemployeeId] = useState("")
  const [loanNo, setloanNo] = useState("")
  const [installmentAmount, setinstallmentAmount] = useState("")
  const [payment, setpayment] = useState("")
  const [date, setdate] = useState("")
  const [reciever, setreciever] = useState("")
  const [installmentNo, setinstallmentNo] = useState("")
  const [notes, setnotes] = useState("")

  const classes = useStyles()

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

  const addPosition = () =>{
    const index = rows.length;
    const newPosition = createData(index,name,employeeId,loanNo,installmentAmount,payment,date,reciever,installmentNo,notes)
    setRows(prev => [...prev,newPosition])
    setName("")
    setemployeeId("")
    setinstallmentAmount("")
    setloanNo("")
    setpayment("")
    setreciever("")
    setdate("")
    setinstallmentNo("")
    setnotes("")
    closeModalHandler()
  }

  const deletePosition = (index) =>{
    if(window.confirm("Are you sure you want to delete this item?")){
      let newRows = rows.filter((row,i) =>{
        return index !== i;
      })
      setRows(newRows)
    }

  }

  const edit = (i) => {
    openModalHandler2()
    setCurrIndex(i)
    setName(rows[i].name)
    setemployeeId(rows[i].empId)
    setinstallmentAmount(rows[i].installmentAmount)
    setloanNo(rows[i].loanNo)
    setpayment(rows[i].payment)
    setreciever(rows[i].receiver)
    setdate(rows[i].date)
    setinstallmentNo(rows[i].installNo)
    setnotes(rows[i].notes)
  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].name = name;
    newRows[currIndex].empId = employeeId;
    newRows[currIndex].installmentAmount = installmentAmount;
    newRows[currIndex].loanNo = loanNo;
    newRows[currIndex].payment = payment;
    newRows[currIndex].receiver = reciever;
    newRows[currIndex].date = date;
    newRows[currIndex].installNo = installmentNo;
    newRows[currIndex].notes = notes;


    setRows(newRows)
    setName("")
    setemployeeId("")
    setinstallmentAmount("")
    setloanNo("")
    setpayment("")
    setreciever("")
    setdate("")
    setinstallmentNo("")
    setnotes("")
    closeModalHandler2()
  }

  const reset = () => {
    setName("")
    setemployeeId("")
    setinstallmentAmount("")
    setloanNo("")
    setpayment("")
    setreciever("")
    setdate("")
    setinstallmentNo("")
    setnotes("")

  }

  const columns = [
    { label: "Sr. No.", minWidth: 40, maxWidth: 60 },
    { label: "Name", minWidth: 100, maxWidth: 200 },
    { label: "Employee Id", minWidth: 100, maxWidth: 250 },
    { label: "Loan No.", minWidth: 100, maxWidth: 250 },
    { label: "Installment Amount", minWidth: 100, maxWidth: 250 },
    { label: "Payment", minWidth: 100, maxWidth: 250 },
    { label: "Date", minWidth: 100, maxWidth: 250 },
    { label: "Receiver", minWidth: 100, maxWidth: 250 },
    { label: "Install No.", minWidth: 100, maxWidth: 250 },
    { label: "Notes ", minWidth: 100, maxWidth: 250 },
    { label: "Action ", minWidth: 100, maxWidth: 250 }
  ];

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
                Add Loan Installment
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeId}
                      onChange={e => setemployeeId(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Loan No :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={loanNo}
                      onChange={e => setloanNo(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Installment Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installmentAmount}
                      onChange={e => setinstallmentAmount(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Payment :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={payment}
                      onChange={e => setpayment(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={date}
                      onChange={e => setdate(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Receiver :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={reciever}
                      onChange={e => setreciever(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Install No :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installmentNo}
                      onChange={e => setinstallmentNo(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Notes :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={notes}
                      onChange={e => setnotes(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={addPosition}  variant="contained" size="small">
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
                Edit Loan Installment
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Id :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={employeeId}
                      onChange={e => setemployeeId(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Loan No :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={loanNo}
                      onChange={e => setloanNo(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Installment Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installmentAmount}
                      onChange={e => setinstallmentAmount(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Payment :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={payment}
                      onChange={e => setpayment(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={date}
                      onChange={e => setdate(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Receiver :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={reciever}
                      onChange={e => setreciever(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Install No :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installmentNo}
                      onChange={e => setinstallmentNo(e.target.value)} />
                  </Grid>
                </Grid>                
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Notes :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={notes}
                      onChange={e => setnotes(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={reset}  variant="outlined" size="small" sx={{ marginRight: 1 }}>
                      Reset
                    </Button>
                    <Button onClick={editPosition}  variant="contained" size="small">
                      Save
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Fade>
      </Modal>
      <Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button onClick={openModalHandler} variant="contained">Add Installment</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined">Manage Installment</Button>
        </Grid>
      </Grid>
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
            {rows.map((row,id) => {
              return (
                <TableRow key={row.sl} hover>
                  <TableCell>{row.sl}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.empId}</TableCell>
                  <TableCell>{row.loanNo}</TableCell>
                  <TableCell>{row.installmentAmount}</TableCell>
                  <TableCell>{row.payment}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.receiver}</TableCell>
                  <TableCell>{row.installNo}</TableCell>
                  <TableCell>{row.notes}</TableCell>
                  <TableCell>
                          <IconButton onClick={()=>edit(id)} color="primary">
                            <EditIcon />
                          </IconButton>
                          <IconButton onClick={()=>deletePosition(id)} >
                            <DeleteIcon color="error"/>
                          </IconButton>
                    </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Grid>
    </>
  );
};
export default LoanInstallment;
