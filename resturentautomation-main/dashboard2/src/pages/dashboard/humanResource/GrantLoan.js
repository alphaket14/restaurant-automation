import React, { useState } from "react";
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
  Modal,
  Backdrop,
  makeStyles,
  Fade,
  Box,
  Typography,
  TextField,
  TableContainer,
  MenuItem,
  Checkbox,
  Select,
  ListItemText,
  InputAdornment,
  TablePagination
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { DatePicker } from "@material-ui/lab";
import { CurrencyRupee } from "@mui/icons-material";
import PercentIcon from '@mui/icons-material/Percent';
import Scrollbar from "src/components/Scrollbar";
const createData = (sl, empid,name, dept,amount,intPercent,no_of_ins, ins_type, tot_rp, ins_amt,approvedBy,approveDate, status,installMentPeriod,repayTotal,repayFrom) => {
  return {sl, empid,name, dept,amount,intPercent,no_of_ins, ins_type, tot_rp, ins_amt,approvedBy,approveDate, status,installMentPeriod,repayTotal,repayFrom};
};

const data = [
  createData(1, "#EMP0001","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(2, "#EMP0002","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(3, "#EMP0003","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(4, "#EMP0004","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(5, "#EMP0005","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(6, "#EMP0006","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(7, "#EMP0007","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(8, "#EMP0008","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020"),
  createData(9, "#EMP0009","Mr Kabir","Accounts","34567","1", 9,"Monthly", 0,0,"Mr kabir","04-04-2020","Active","36Month","35647","04-04-2020")
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
    overflow: "hidden",
    overflowY: "scroll",
    height: 600,
    width: 800,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const GrantLoan = (props) => {
  const[rows, setRows] = useState(data);
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [currIndex, setCurrIndex] = useState(0);

  const [empid, setEmpid] = useState("")
  const [name, setName] = useState("")
  const [loan_amt, setLoanAmt] = useState(0)
  const [interest, setInterest] = useState(0)
  const [installments, setInstallments] = useState(0)
  const [totalpayable, setTotalpayable] = useState(0)
  const [instl_amt, setInstl_amt] = useState(0)
  const [permittedBy, setpermittedBy] = useState("")
  const [loanNo, setloanNo] = useState("")
  const [amount, setamount] = useState("")
  const [interestPercentage, setinterestPercentage] = useState("")
  const [installmentPeriod, setinstallmentPeriod] = useState("")
  const [repaymentTotal, setrepaymentTotal] = useState("")
  const [approveDate, setapproveDate] = useState("")
  const [repaymentFrom, setrepaymentFrom] = useState("")

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
    const newPosition = createData(index,name,permittedBy,loanNo,amount,interestPercentage,installmentPeriod,repaymentTotal,approveDate,repaymentFrom)
    setRows(prev => [...prev,newPosition])
    setName("")
    setpermittedBy("")
    setrepaymentTotal("")
    setloanNo("")
    setamount("")
    setinterestPercentage("")
    setinstallmentPeriod("")
    setapproveDate("")
    setrepaymentFrom("")


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
    setpermittedBy(rows[i].permittedBy)
    setrepaymentTotal(rows[i].repayTotal)
    setloanNo(rows[i].loanNo)
    setamount(rows[i].amount)
    setinterestPercentage(rows[i].intPercent)
    setinstallmentPeriod(rows[i].installMentPeriod)
    setapproveDate(rows[i].approveDate)
    setrepaymentFrom(rows[i].repayFrom)
  }

  const editPosition = () =>{
    let newRows = rows.map(row => row);
    newRows[currIndex].name = name;
    newRows[currIndex].permittedBy = permittedBy;
    newRows[currIndex].repayTotal = repaymentTotal;
    newRows[currIndex].loanNo = loanNo;
    newRows[currIndex].amount = amount;
    newRows[currIndex].intPercent = interestPercentage;
    newRows[currIndex].installMentPeriod = installmentPeriod;
    newRows[currIndex].approveDate = approveDate;
    newRows[currIndex].repayFrom = repaymentFrom;


    setRows(newRows)
    setName("")
    setpermittedBy("")
    setrepaymentTotal("")
    setloanNo("")
    setamount("")
    setinterestPercentage("")
    setinstallmentPeriod("")
    setapproveDate("")
    setrepaymentFrom("")
    closeModalHandler2()
  }

  const reset = () => {
    setName("")
    setpermittedBy("")
    setrepaymentTotal("")
    setloanNo("")
    setamount("")
    setinterestPercentage("")
    setinstallmentPeriod("")
    setapproveDate("")
    setrepaymentFrom("")
  }

  const columns = [
    { label: "Employee ID", minWidth: 120, maxWidth: 200 },
    { label: "Employee Name", minWidth: 150, maxWidth: 200 },
    { label: "Department", minWidth: 100, maxWidth: 200 },
    { label: "Loan Amount", minWidth: 130, maxWidth: 250 },
    { label: "Interest Rate", minWidth: 140, maxWidth: 250 },
    { label: "No of Installments", minWidth: 160, maxWidth: 250 },
    { label: "Installment Type", minWidth: 160, maxWidth: 250 },
    { label: "Total Repayment Amount", minWidth: 200, maxWidth: 450 },
    { label: "Installment Amount", minWidth: 170, maxWidth: 450 },
    { label: "Approved By", minWidth: 120, maxWidth: 250 },
    { label: "Approved Date", minWidth: 140, maxWidth: 250 },
    { label: "Status", minWidth: 100, maxWidth: 250 },
    /*{ label: "Installment Period", minWidth: 100, maxWidth: 250 },
    { label: "Repayment Total", minWidth: 100, maxWidth: 250 },
    { label: "Repayment From ", minWidth: 100, maxWidth: 250 },*/
    { label: "Action ", minWidth: 130, maxWidth: 250 }
  ];


  const depnames= [
    'Accounts',
    'Inventory',
    'Human Resource',
    'Counter Monitor',
    'Marketing',
    'Sales',
  ];
  const [deptName, setDeptName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeptName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    //setDepartment(deptName.join(","))
  };
  // for approved by
  const approve_names= [
    'Mr Hari',
    'Mr Kunal',
  ];
  const [approveBy, setApproveBy] = React.useState([]);
  const handleApproveChange = (event) => {
    const {
      target: { value },
    } = event;
    setApproveBy(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    //setDepartment(deptName.join(","))
  };
  // for status
  const stat_name= [
    'Active',
    'Inactive',
    'Closed',
  ];
  const [stat_n1, setStatn1] = React.useState([]);
  const handleStatChange = (event) => {
    const {
      target: { value },
    } = event;
    setStatn1(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  //for interest type
  const interest_names= [
    'Fixed',
    'Reducing',
  ];

  const exec = () =>{
    setTotalpayable( parseFloat(loan_amt)+Math.round(parseFloat(loan_amt)*(parseFloat(interest))*(parseFloat(installments)/1200)))
    setInstl_amt( Math.round((parseFloat(loan_amt)+(parseFloat(loan_amt)*parseFloat(interest)*(parseFloat(installments)/1200)))/parseFloat(installments)))
  };
  const exec2 = () => {
    setTotalpayable(Math.round(((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1))*parseFloat(installments)))
    setInstl_amt(Math.round((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1)));
  };
  const [int_type, setIntType] = React.useState([]);
  const handleIntChange = (event) => {
    const {
      target: { value },
    } = event;
    setIntType(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    //value === "Fixed"? setExec(1):setExec(2);
    value === "Fixed"? exec() : exec2();
  };
  const [endDate,SetEndDate] = useState(new Date());
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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
            <Box className={classes.modal} >
              <Typography variant="h5" align="center">
                Grant Loan
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee ID :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empid}
                      onChange={e => setEmpid(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Department :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="departName"
                fullWidth 
                size="small"
                multiple
                value={deptName}
                onChange={handleChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {depnames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={deptName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Loan Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={loan_amt}
                      type="number"
                      onChange={e => setLoanAmt(e.target.value)} 
                      //onChange={LoanAmtChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interest Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="interestType"
                fullWidth 
                size="small"
                value={int_type}
                onChange={handleIntChange}
                //onChange={e => setInt1Type(e.target.key)}
                //input={<OutlinedInput label="Tag" />}
                //renderValue={int1_type}
                renderValue={(selected) => selected.join(', ')}
              >
                {/*<MenuItem key="Fixed" value="Fixed">
                  <Checkbox checked={fixed_type} onChange={handleFixedChange}/>
                  Fixed
                  </MenuItem>
                <MenuItem key="Reducing" value="Reducing">
                  <Checkbox checked={redu_type} onChange={handleReduChange}/>
                  Reducing
                </MenuItem>*/}
                {interest_names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={int_type.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interest Rate :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={interest}
                      type="number"
                      onChange={e => setInterest(e.target.value)} 
                      //onChange={IntreChange} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PercentIcon/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">No of Installments :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installments}
                      type="number"
                      onChange={e => setInstallments(e.target.value)} 
                      //onChange={installChange} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Installment Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value="Monthly"
                      inputProps={{ readOnly: true, }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Total Repayment Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={totalpayable} 
                      type="number"
                      //value={exec} 
                      //value={Math.round(((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1))*parseFloat(installments))}
                      inputProps={{ readOnly: true, }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">EMI :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={parseFloat(loan_amt)/2}
                      //value={Math.pow(parseInt(loan_amt),2)} correct for power
                      //value={Math.round((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1))}
                      value={instl_amt}
                      inputProps={{ readOnly: true, }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved By :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="approveByName"
                fullWidth 
                size="small"
                multiple
                value={approveBy}
                onChange={handleApproveChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {approve_names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={approveBy.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <DatePicker
                    value={endDate}
                    onChange={(newValue) => {
                    SetEndDate(newValue);
                    }}
                    renderInput={(params) => (
                    <TextField 
                    {...params}
                    fullWidth size="small" helperText={null}/>
                    )}
                    />
                    {/*<TextField type="date" fullWidth size="small"
                      value={approveDate}
                    onChange={e => setapproveDate(e.target.value)} />*/}
                  </Grid>
                </Grid>
                {/*<Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Repayment From :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField type="date" fullWidth size="small"
                      value={repaymentFrom}
                      onChange={e => setrepaymentFrom(e.target.value)} />
                  </Grid>
                </Grid>*/}
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                      <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={stat_n1}
                        onChange={handleStatChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {stat_name.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={stat_n1.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
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
                Edit Loan
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
              <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee ID :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={empid}
                      onChange={e => setEmpid(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Employee Name :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Department :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="departName"
                fullWidth 
                size="small"
                multiple
                value={deptName}
                onChange={handleChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {depnames.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={deptName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Loan Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={loan_amt}
                      type="number"
                      onChange={e => setLoanAmt(e.target.value)} 
                      //onChange={LoanAmtChange}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interest Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="interestType"
                fullWidth 
                size="small"
                value={int_type}
                onChange={handleIntChange}
                //onChange={e => setInt1Type(e.target.key)}
                //input={<OutlinedInput label="Tag" />}
                //renderValue={int1_type}
                renderValue={(selected) => selected.join(', ')}
              >
                {interest_names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={int_type.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Interest Rate :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={interest}
                      type="number"
                      onChange={e => setInterest(e.target.value)} 
                      //onChange={IntreChange} 
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <PercentIcon/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">No of Installments :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={installments}
                      type="number"
                      onChange={e => setInstallments(e.target.value)} 
                      //onChange={installChange} 
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Installment Type :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value="Monthly"
                      inputProps={{ readOnly: true, }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Total Repayment Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      value={totalpayable} 
                      type="number"
                      //value={exec} 
                      //value={Math.round(((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1))*parseFloat(installments))}
                      inputProps={{ readOnly: true, }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Installment Amount :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <TextField fullWidth size="small"
                      //value={parseFloat(loan_amt)/2}
                      //value={Math.pow(parseInt(loan_amt),2)} correct for power
                      //value={Math.round((parseFloat(loan_amt)*(parseFloat(interest)/1200)*(Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments))))/((Math.pow(1+(parseFloat(interest)/1200),parseFloat(installments)))-1))}
                      value={instl_amt}
                      inputProps={{ readOnly: true, }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved By :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                name="approveByName"
                fullWidth 
                size="small"
                multiple
                value={approveBy}
                onChange={handleApproveChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
              >
                {approve_names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={approveBy.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
            </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Approved Date :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <DatePicker
                    value={endDate}
                    onChange={(newValue) => {
                    SetEndDate(newValue);
                    }}
                    renderInput={(params) => (
                    <TextField 
                    {...params}
                    fullWidth size="small" helperText={null}/>
                    )}
                    />
                    {/*<TextField type="date" fullWidth size="small"
                      value={approveDate}
                    onChange={e => setapproveDate(e.target.value)} />*/}
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Status :</Typography>
                  </Grid>
                  <Grid item xs={8}>
                  <Select 
                        name="departName"
                        fullWidth 
                        size="small"
                        multiple
                        value={stat_n1}
                        onChange={handleStatChange}
                        //input={<OutlinedInput label="Tag" />}
                        renderValue={(selected) => selected.join(', ')}
                      >
                        {stat_name.map((name) => (
                          <MenuItem key={name} value={name}>
                            <Checkbox checked={stat_n1.indexOf(name) > -1} />
                            <ListItemText primary={name} />
                          </MenuItem>
                        ))}
                      </Select>
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
          <Button onClick={openModalHandler} variant="contained">Add Loan</Button>
        </Grid>
        {/*<Grid item>
          <Button variant="outlined">Manage Granted Loan</Button>
  </Grid>*/}
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
            {/*<Button size="small">Copy</Button>*/}
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          {/* <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid> */}
        </Grid>
        <TableContainer >
          <Scrollbar>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center" }}
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
                  <TableCell style={{ textAlign: "center"}}>{row.empid}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.dept}</TableCell>
                  <TableCell style={{ textAlign: "center"}}><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.amount}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.intPercent}<PercentIcon fontSize="small" style={{color:"gray", marginLeft:"5px"}}/></TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.no_of_ins}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.ins_type}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.tot_rp}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.ins_amt}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.approvedBy}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.approveDate}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>
                    <Button color="primary" size="small" variant="outlined">
                      {row.status}
                    </Button>
                  </TableCell>
                  {/*<TableCell>{row.installMentPeriod}</TableCell>
                  <TableCell>{row.repayTotal}</TableCell>
              <TableCell>{row.repayFrom}</TableCell>*/}
                  <TableCell style={{ textAlign: "center"}}>
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
        </Scrollbar>
        </TableContainer>
        <TablePagination
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={pageChangeHandler}
                onRowsPerPageChange={rowsPerPageChangeHandler}
              />
      </Grid>
    </>
  );
};
export default GrantLoan;
