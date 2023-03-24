import React, {useState} from "react";
import {
  Paper,
  TableContainer,
  Divider,
  Typography,
  Grid,
  Table,
  Select,
  MenuItem,
  ListItemText,
  TextField,
  TableHead,
  TableBody,
  TableRow,
  Modal,
  Backdrop,
  Fade,
  TableCell,
  Autocomplete,
  InputAdornment,
  Box,
  Checkbox,
  Tooltip,
  IconButton,
  TablePagination,
  Button
} from "@mui/material";
import {makeStyles} from "@material-ui/core";
import { Edit, Delete, CurrencyRupee} from "@mui/icons-material";
import AddIcon from "@mui/icons-material/Add";
import Scrollbar from "src/components/Scrollbar";
import { DatePicker } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import FilePresentIcon from '@mui/icons-material/FilePresent';
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
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));
const PaymentLedger = (props) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const openModalHandler = () => {
    setOpenModal(true);
  };
  const openModalHandler2 = () => {
    setOpenModal2(true);
  };
  const openModalHandler3 = () => {
    setOpenModal3(true);
  };
  const closeModalHandler = () => {
    setOpenModal(false);
  };
  const closeModalHandler2 = () => {
    setOpenModal2(false);
  };
  const closeModalHandler3 = () => {
    setOpenModal3(false);
  };
  const columns = [
    { label: "Invoice No", minWidth: 120 },
    { label: "Supplier Code", minWidth: 150 },
    { label: "Supplier Name", minWidth: 150 },
    { label: "Purchased Date", minWidth: 150 },
    { label: "Invoice Amount", minWidth: 150 },
    { label: "Payment Type", minWidth: 150 },
    { label: "Payment Date", minWidth: 170 },
    { label: "Payment Credit", minWidth: 150 },
    { label: "Balance Amount", minWidth: 150 },
    //{ label: "Deposit ID", minWidth: 150 },
    //{ label: "Debit", minWidth: 100 },
    //{ label: "Credit", minWidth: 100 },
    //{ label: "Balance", minWidth: 100 },
    { label: "Action", minWidth: 180 }
  ];

  const createData = (sl, invno, suppcode, suppname, purch_date, invamt, pay_type, payment_date, credit, balance) => {
    return {sl, invno, suppcode, suppname, purch_date, invamt, pay_type, payment_date, credit, balance};
  };
  const data = [
    createData(1, 100, 100, "Name", "01-01-2023", 1000, "Cash", "01-01-2023", 500, 500)
  ]
  const [rows, setRows] = useState(data);
  const cats = [];
  const [startDate,SetStartDate] = useState(null);
  const [endDate,SetEndDate] = useState(null);
  const [purchaseDate,SetPurchaseDate] = useState(null);
  const [paymentDate,SetPayDate] = useState(new Date());
  const [currIndex, setCurrIndex] = useState(null);
  const [suppName, setSuppName] = useState("");
  const [invoiceamt, setInvoiceAmt] = useState();
  const [pay_credit, setPayCredit] = useState();
  const [balanceamt, setBalanceAmt] = useState();
  const deletePosition = (index) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setRows(newRows);
    }
  };
  //for pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };
        //for duty type
        const paytypes= [
          'Cash',
          'Card',
          'UPI',
        ];
        const [payName, setPayName] = React.useState([]);
        const handlePayChange = (event) => {
          const {
            target: { value },
          } = event;
          setPayName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const addPosition = () =>{
    const index = rows.length;
    let today = paymentDate;
    let year = today.getFullYear()
    let month = today.getMonth()+1
    let day = today.getDate()
    let date = day+"-"+month+"-"+year;
    const newPosition = createData(2, 100, 100, "Name", "01-01-2023", 1000, "Cash", date, 500, 0)
    setRows(prev => [...prev,newPosition])
    closeModalHandler2()
  }
  const edit = (i) => {
    openModalHandler3()
    setCurrIndex(i)
    setSuppName(rows[i].suppname)
    SetPurchaseDate(rows[i].purch_date)
    setInvoiceAmt(rows[i].invamt)
    setPayCredit(rows[i].credit)
    setBalanceAmt(rows[i].balance)
    SetPayDate(rows[i].payment_date)
    //setPosition(rows[i].designation)
    //setDetails(rows[i].details)
  }
  return (
    <>
    <Modal
    open={openModal3}
    onClose={closeModalHandler3}
    closeAfterTransition
    BackdropComponent={Backdrop}
    >
    <Fade in={openModal3}>
      <Box className={classes.modal}>
        <Typography variant="h5" align="center">
          Edit Payment
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
          <Grid item container>
          <Grid item xs={4}>
              <Typography variant="subtitle2">Invoice No :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
              //multiple
              size="small"
              id="checkboxes-tags-demo"
              fullWidth
              options={cats}
              disableCloseOnSelect
              getOptionLabel={(option) => option.foodCategory}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.foodCategory}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Invoice No" placeholder="Search" />
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Supplier Code :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
              //multiple
              size="small"
              id="checkboxes-tags-demo"
              fullWidth
              options={cats}
              disableCloseOnSelect
              getOptionLabel={(option) => option.foodCategory}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.foodCategory}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Supplier Code" placeholder="Search" />
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Supplier Name :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                value={suppName}
                onChange={e => setSuppName(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Purchased Date :</Typography>
            </Grid>
            <Grid item xs={8}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={purchaseDate}
              onChange={(newValue) => {
                SetPurchaseDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth
                size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Invoice Amount :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                value={invoiceamt}
                onChange={e => setInvoiceAmt(e.target.value)} 
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
              <Typography variant="subtitle2">Payment Type :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Date :</Typography>
            </Grid>
            <Grid item xs={8}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={paymentDate}
              onChange={(newValue) => {
                SetPayDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth
                size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Credit :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                value={pay_credit}
                onChange={e => setPayCredit(e.target.value)} 
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
              <Typography variant="subtitle2">Balance Amount :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                value={balanceamt}
                onChange={e => setBalanceAmt(e.target.value)} 
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
          <Grid item container justifyContent="flex-end">
            <Grid item  >
              <Button onClick={closeModalHandler3}  variant="contained" size="small" style={{marginRight:"5px"}}>
                Reset
              </Button>
              <Button onClick={closeModalHandler3}  variant="outlined" size="small" style={{marginRight:"5px"}}>
                Cancel
              </Button>
              <Button onClick={closeModalHandler3}  variant="contained" size="small">
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
          Add Payment
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Date :</Typography>
            </Grid>
            <Grid item xs={8}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={paymentDate}
              onChange={(newValue) => {
                SetPayDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth
                size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Type :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Select 
                    name="dutyName"
                    fullWidth 
                    size="small"
                    multiple
                    value={payName}
                    onChange={handlePayChange}
                    renderValue={(selected) => selected.join(', ')}
                  >
                    {paytypes.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={payName.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Balance Amount :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
                defaultValue={500}
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
              <Typography variant="subtitle2">Payment Credit :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
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
          <Grid item container justifyContent="flex-end">
            <Grid item  >
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
    open={openModal}
    onClose={closeModalHandler}
    closeAfterTransition
    BackdropComponent={Backdrop}
    >
    <Fade in={openModal}>
      <Box className={classes.modal}>
        <Typography variant="h5" align="center">
          Add Payment
        </Typography>
        <Grid item container direction="column" spacing={2} sx={{ padding: 2 }}>
          <Grid item container>
          <Grid item xs={4}>
              <Typography variant="subtitle2">Invoice No :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
              //multiple
              size="small"
              id="checkboxes-tags-demo"
              fullWidth
              options={cats}
              disableCloseOnSelect
              getOptionLabel={(option) => option.foodCategory}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.foodCategory}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Invoice No" placeholder="Search" />
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Supplier Code :</Typography>
            </Grid>
            <Grid item xs={8}>
            <Autocomplete
              //multiple
              size="small"
              id="checkboxes-tags-demo"
              fullWidth
              options={cats}
              disableCloseOnSelect
              getOptionLabel={(option) => option.foodCategory}
              renderOption={(props, option, { selected }) => (
                <li {...props}>
                  <Checkbox
                    icon={icon}
                    checkedIcon={checkedIcon}
                    style={{ marginRight: 8 }}
                    checked={selected}
                  />
                  {option.foodCategory}
                </li>
              )}
              renderInput={(params) => (
                <TextField {...params} label="Supplier Code" placeholder="Search" />
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Supplier Name :</Typography>
            </Grid>
            <Grid item xs={8}>
              <TextField fullWidth size="small"
                //value={commision}
                //onChange={e => setCommision(e.target.value)} 
                />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Purchased Date :</Typography>
            </Grid>
            <Grid item xs={8}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={purchaseDate}
              onChange={(newValue) => {
                SetPurchaseDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth
                size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Invoice Amount :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
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
              <Typography variant="subtitle2">Payment Type :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
              />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Date :</Typography>
            </Grid>
            <Grid item xs={8}>
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={paymentDate}
              onChange={(newValue) => {
                SetPayDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                  {...params}
                  fullWidth
                size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item xs={4}>
              <Typography variant="subtitle2">Payment Credit :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
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
              <Typography variant="subtitle2">Balance Amount :</Typography>
            </Grid>
            <Grid item xs={8}>
            <TextField fullWidth size="small"
                //value={designation}
                //onChange={e => setDesignation(e.target.value)} 
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
          <Grid item container justifyContent="flex-end">
            <Grid item  >
              <Button onClick={closeModalHandler}  variant="contained" size="small" style={{marginRight:"5px"}}>
                Reset
              </Button>
              <Button onClick={closeModalHandler}  variant="outlined" size="small" style={{marginRight:"5px"}}>
                Cancel
              </Button>
              <Button onClick={closeModalHandler}  variant="contained" size="small">
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
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={cats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.foodCategory}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.foodCategory}
        </li>
      )}
      sx={{width:"20%" , float: "left"}}
      renderInput={(params) => (
        <TextField {...params} label="Supplier Code" placeholder="Search" />
      )}
    />
    <Autocomplete
      //multiple
      size="small"
      id="checkboxes-tags-demo"
      options={cats}
      disableCloseOnSelect
      getOptionLabel={(option) => option.foodCategory}
      renderOption={(props, option, { selected }) => (
        <li {...props}>
          <Checkbox
            icon={icon}
            checkedIcon={checkedIcon}
            style={{ marginRight: 8 }}
            checked={selected}
          />
          {option.foodCategory}
        </li>
      )}
      sx={{width:"20%" , float: "left", marginLeft:"10px"}}
      renderInput={(params) => (
        <TextField {...params} label="Invoice No" placeholder="Search" />
      )}
    />
    <Button
        //component={NavLink}
        //to="/dashboard/purchase/addpurchase"
        variant="contained"
        sx={{float:"right"}}
        startIcon={<AddIcon />}
        onClick={openModalHandler}
    >
        Add Payment
    </Button>
    <DatePicker
      inputFormat="dd/MM/yyyy"
      value={endDate}
      onChange={(newValue) => {
      SetEndDate(newValue);
      }}
      renderInput={(params) => (
      <TextField 
      {...params}
      label="To" sx={{ width: "15%", float: "right", marginRight:"10px" }}
        size="small" helperText={null}/>
      )}
    />
    <DatePicker
      inputFormat="dd/MM/yyyy"
      value={startDate}
      onChange={(newValue) => {
        SetStartDate(newValue);
      }}
      renderInput={(params) => (
      <TextField 
        {...params}
        label="From" sx={{width: "15%", float: "right", marginRight:"10px" }}
      size="small" helperText={null}/>
      )}
    />
      </Box>
      {/* Second block */}
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
          <TableContainer >
            <Scrollbar>
        <Table size="small">
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
            {rows[0] ? (
              rows.map((row, id) => {
                return (
                  <TableRow key={row.sl} hover>
                    <TableCell align="center">{row.invno}</TableCell>
                    <TableCell align="center">{row.suppcode}</TableCell>
                    <TableCell align="center">{row.suppname}</TableCell>
                    <TableCell align="center">{row.purch_date}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.invamt}</TableCell>
                    <TableCell align="center">{row.pay_type}</TableCell>
                    <TableCell align="center">{row.payment_date}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.credit}</TableCell>
                    <TableCell align="center"><CurrencyRupee fontSize="small" style={{color:"gray", marginRight:"5px"}}/>{row.balance}</TableCell>
                    <TableCell align="center">
                      <Tooltip title=" Add Payment" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          onClick={openModalHandler2}
                          //href="/dashboard/purchase/addpurchase"
                          //onClick={() => navigate("/dashboard/purchase/addmanage")}
                          //onClick={openModalHandler2}
                        >
                          <CurrencyRupee />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Edit" placement="left">
                        <IconButton
                          color="primary"
                          size="small"
                          //onClick={() => navigate("/dashboard/purchase/suppliermanage")}
                          onClick={()=>edit(id)}
                        >
                          <Edit />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete" placement="top">
                        <IconButton 
                        sx={{ color: "error.main" }} 
                        size="small"
                        onClick={() => deletePosition(id)}
                        >
                          <Delete />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow hover>
                <TableCell colSpan={columns.length} align="center">
                  No data available in table.
                </TableCell>
              </TableRow>
            )}
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
export default PaymentLedger;
