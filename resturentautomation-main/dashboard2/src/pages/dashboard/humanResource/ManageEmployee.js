import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useReactToPrint } from "react-to-print";
import Checkbox from "@mui/material/Checkbox";
import ListItemText from "@mui/material/ListItemText";
import {
  Stack,
  FormControl,
  Input,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Typography,
  IconButton,
  Select,
  makeStyles,
  Backdrop,
  Fade,
  Modal,
  Autocomplete,
  Box,
  MenuItem,
  InputLabel,
  TablePagination,
} from "@material-ui/core";
import { blue } from "@mui/material/colors";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TableContainer from "@mui/material/TableContainer";
import { DatePicker } from "@material-ui/lab";
import { CurrencyRupee } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Scrollbar from "src/components/Scrollbar";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const colorBlue = blue[900];
const createData = (
  id,
  department,
  designation,
  name,
  phone,
  email,
  emptype,
  dutyType
) => {
  return { id, department, designation, name, phone, email, emptype, dutyType };
};

const data = [
  createData(
    "#EMP0001",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0002",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0003",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0004",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0005",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0006",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0007",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
  createData(
    "#EMP0008",
    "Accounts",
    "Manager",
    "Mr Kabir Kumar",
    231464,
    "demo@demo.com",
    "Permanent",
    "Full time"
  ),
];

const useStyles = makeStyles((theme) => ({
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90vw",
    height: "98vh",
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
    overflow: "hidden",
    overflowY: "scroll",
  },
}));

const ManageEmployee = (props) => {
  const [openedRow, setOpenedRow] = useState(null);
  const [rows, setRows] = useState([]);
  const [formNo, setFormNo] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [rowsid, setRowsid] = useState();
  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/employee/')
      console.log("categories:",data)
      setRows(data.data[0].rows);
      setRowsid(data.data[0]._id);
      //console.log(rowsid); working correctly
    };
    fetchdata();
  },[]);
  const deleteEmployee = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      let newRows = rows.filter((row, i) => {
        return id !== i;
      });
      axios.post('https://doubtful-tuna-leotard.cyclic.app/employee/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      setRows(newRows);
    }
  };

  const classes = useStyles();
  const fields = [
    "Employee Profile",
    "Basic Information",
    "Personal Info",
    "Supervisor",
    "Biographical Info",
    "Add Documents",
    "Emergency Contact",
    "Bank Details",
    "Salary",
  ];

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const Form1 = () => {
    //for duty type
    const dutytypes = ["Full time", "Part time"];
    const [dutyName, setDutyName] = React.useState([]);
    const handleDutyChange = (event) => {
      const {
        target: { value },
      } = event;
      setDutyName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <Grid
        container
        rowGap={2}
        style={{
          margin: "20px 0",
          height: "90%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>First Name</Grid>
            <Grid item>
              <TextField
                name="firstName"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Last Name</Grid>
            <Grid item>
              <TextField
                name="lastName"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={6} rowGap={1} item>
            <Grid item>Email Address</Grid>
            <Grid item>
              <TextField
                name="email"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Duty Type</Grid>
            <Grid item>
              <Select
                name="dutyName"
                fullWidth
                size="small"
                multiple
                value={dutyName}
                onChange={handleDutyChange}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {dutytypes.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={dutyName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Adhaar Card Info</Grid>
            <Grid item>
              <TextField
                name="adhaarCardInfo"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Pan Card Info</Grid>
            <Grid item>
              <TextField
                name="panCardInfo"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Phone</Grid>
            <Grid item>
              <TextField
                name="phone"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={6} rowGap={1} item>
            <Grid item>Address</Grid>
            <Grid item>
              <TextField
                name="address"
                fullWidth
                size="small"
                multiline="true"
                minRows={4}
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>City</Grid>
            <Grid item>
              <TextField
                name="city"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>State</Grid>
            <Grid item>
              <Select
                name="state"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              ></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Country</Grid>
            <Grid item>
              <Select
                name="country"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              ></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Pin Code</Grid>
            <Grid item>
              <TextField
                name="pincode"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container direction="column" xs={12} spacing={2} item>
          <Grid item>
            <h2>Login Information</h2>
          </Grid>
          <Grid item>
            <hr color="grey" />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{ marginTop: "10px" }}>
          <Grid item container rowGap={1} xs={6} direction="column">
            <Grid item>User Login email</Grid>
            <Grid item>
              <TextField
                placeholder="User Name"
                name="userName"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
          <Grid item container rowGap={1} xs={6} direction="column">
            <Grid item>Password</Grid>
            <Grid item>
              <TextField
                placeholder="password"
                name="password"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container justifyContent="flex-end" style={{ marginTop: "10px" }}>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };

  const Form2 = () => {
    //for date
    const [tarik, setTarik] = React.useState(new Date());
    const [tarik2, setTarik2] = React.useState(new Date());
    const [tarik3, setTarik3] = React.useState(new Date());
    //for pay frequency
    const period = ["Hourly", "Daily", "Weekly", "Monthly"];
    const [periodName, setPeriodName] = React.useState([]);
    const handlePeriodChange = (event) => {
      const {
        target: { value },
      } = event;
      setPeriodName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for department
    const names = [
      "Accounts",
      "Inventory",
      "Human Resource",
      "Counter Monitor",
      "Marketing",
      "Sales",
    ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for designation
    const desigs = [
      "Owner",
      "Waiter",
      "Counter Server",
      "Manager",
      "Jainator",
      "Chef",
    ];
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for payroll
    const payrolls = ["Fixed", "Temporary", "Notice"];
    const [payrollName, setPayrollName] = React.useState([]);
    const handlePayrollChange = (event) => {
      const {
        target: { value },
      } = event;
      setPayrollName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for duty type
    const dutytypes = ["Full time", "Part time"];
    const [dutyName, setDutyName] = React.useState([]);
    const handleDutyChange = (event) => {
      const {
        target: { value },
      } = event;
      setDutyName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <Grid
        container
        xs={12}
        spacing={2}
        style={{
          margin: "20px 0",
          height: "90%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container spacing={1} xs={6} rowGap={2}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Department</Grid>
              <Grid item>
                <Select
                  name="departName"
                  fullWidth
                  size="small"
                  multiple
                  value={personName}
                  onChange={handleChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  inputProps={{ readOnly: true }}
                >
                  {names.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={personName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={6}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Designation</Grid>
              <Grid item>
                <Select
                  name="designation"
                  fullWidth
                  size="small"
                  multiple
                  value={desigName}
                  onChange={handleDesigChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  inputProps={{ readOnly: true }}
                >
                  {desigs.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={desigName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container spacing={1} xs={6}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Recruitment Date</Grid>
              <Grid item>
                <DatePicker
                  value={tarik}
                  onChange={(newValue) => {
                    setTarik(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      helperText={null}
                      inputProps={{ readOnly: true }}
                    />
                  )}
                />
                {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture
                openTo="year"
                views={['year', 'month', 'day']}
                value={tarik}
                onChange={(newValue) => {
                setTarik(newValue);
                }}
                renderInput={(params) => <TextField fullWidth size="small" {...params} />}
                />
              </LocalizationProvider>*/}
                {/*<TextField type="date" name="originalHireDate" fullWidth size="small" />*/}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={6}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Hire Date</Grid>
              <Grid item>
                <DatePicker
                  value={tarik2}
                  onChange={(newValue) => {
                    setTarik2(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      helperText={null}
                      inputProps={{ readOnly: true }}
                    />
                  )}
                />
                {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                disableFuture
                openTo="year"
                views={['year', 'month', 'day']}
                value={tarik2}
                onChange={(newValue) => {
                setTarik2(newValue);
                }}
                renderInput={(params) => <TextField fullWidth size="small" {...params} />}
                />
              </LocalizationProvider>*/}
                {/*<TextField type="date" name="hireDate" fullWidth size="small" />*/}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container spacing={1} xs={6} rowGap={0.5}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Payroll Type</Grid>
              <Grid item>
                <Select
                  name="payRoll"
                  fullWidth
                  size="small"
                  multiple
                  value={payrollName}
                  onChange={handlePayrollChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  inputProps={{ readOnly: true }}
                >
                  {payrolls.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={payrollName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={6} rowGap={0.5}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Pay Frequency</Grid>
              <Grid item>
                <Select
                  name="payFrequency"
                  fullWidth
                  size="small"
                  multiple
                  value={periodName}
                  onChange={handlePeriodChange}
                  //input={<OutlinedInput label="Tag" />}
                  renderValue={(selected) => selected.join(", ")}
                  inputProps={{ readOnly: true }}
                >
                  {period.map((name) => (
                    <MenuItem key={name} value={name}>
                      <Checkbox checked={periodName.indexOf(name) > -1} />
                      <ListItemText primary={name} />
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container spacing={1} xs={6} rowGap={2}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Duty Type</Grid>
            <Grid item>
              <Select
                name="dutyName"
                fullWidth
                size="small"
                multiple
                value={dutyName}
                onChange={handleDutyChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {dutytypes.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={dutyName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container spacing={1} xs={6} rowGap={0.5}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Last Working Date</Grid>
              <Grid item>
                <DatePicker
                  value={tarik3}
                  onChange={(newValue) => {
                    setTarik3(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      fullWidth
                      size="small"
                      helperText={null}
                      inputProps={{ readOnly: true }}
                    />
                  )}
                />
                {/*<LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                openTo="year"
                views={['year', 'month', 'day']}
                value={tarik3}
                onChange={(newValue) => {
                setTarik3(newValue);
                }}
                renderInput={(params) => <TextField fullWidth size="small" {...params} />}
                />
              </LocalizationProvider>*/}
                {/*<TextField type="date" name="terminationDate" fullWidth size="small" />*/}
              </Grid>
            </Grid>
          </Grid>
          <Grid item container spacing={1} xs={6} rowGap={0.5}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Reason For Leaving</Grid>
              <Grid item>
                <TextField
                  name="terminationReason"
                  fullWidth
                  size="small"
                  multiline="true"
                  minRows={4}
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "10px" }}
        >
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };
  const Form8 = () => {
    const createData = (title, amount) => {
      return { title, amount };
    };
    const data = [
      createData("Basic Salary", ""),
      createData("House Rent Allowance", ""),
      createData("Dearness Allowance", ""),
      createData("Travel Allowance", ""),
    ];
    const data2 = [
      createData("Employee Provident Fund", ""),
      createData("Professional Tax", ""),
      createData("", ""),
      createData("", ""),
    ];
    const [rows, setRows] = useState(data);
    const [rows2, setRows2] = useState(data2);
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
    const classes = useStyles();
    const [openModal, setOpenModal] = useState(false);
    const [openModal2, setOpenModal2] = useState(false);
    const [openModal3, setOpenModal3] = useState(false);
    const [openModal4, setOpenModal4] = useState(false);
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [sal_len, setSalActLen] = useState(4);
    const [ded_len, setDedActLen] = useState(2);
    const openModalHandler = () => {
      setOpenModal(true);
    };

    const closeModalHandler = () => {
      setOpenModal(false);
    };

    const openModalHandler2 = () => {
      setOpenModal2(true);
      closeModalHandler();
    };

    const closeModalHandler2 = () => {
      setOpenModal2(false);
    };
    const openModalHandler3 = () => {
      setOpenModal3(true);
      closeModalHandler();
    };

    const closeModalHandler3 = () => {
      setOpenModal3(false);
    };
    const openModalHandler4 = () => {
      setOpenModal4(true);
      closeModalHandler();
    };

    const closeModalHandler4 = () => {
      setOpenModal4(false);
    };
    const addSalPosition = () => {
      if (sal_len < rows.length) {
        let newRows = rows.map((row) => row);
        newRows[sal_len].title = title;
        newRows[sal_len].amount = amount;
        setSalActLen(sal_len + 1);
        //const newPosition = createData(title, amount)
        //setRows2(prev => [...prev,newPosition])
        setRows(newRows);
      } else if (sal_len == rows.length) {
        const newPosition = createData("", "");
        setRows2((prev) => [...prev, newPosition]);
        const newPosition2 = createData(title, amount);
        setRows((prev) => [...prev, newPosition2]);
        setSalActLen(sal_len + 1);
      }
      setTitle("");
      setAmount("");
      closeModalHandler2();
    };
    const addOverPosition = () => {
      const newPosition = createData("Overtime", 1200);
      setRows((prev) => [...prev, newPosition]);
      setTitle("");
      setAmount("");
      closeModalHandler4();
    };
    const addDedPosition = () => {
      if (ded_len < rows2.length) {
        let newRows = rows2.map((row) => row);
        newRows[ded_len].title = title;
        newRows[ded_len].amount = amount;
        setDedActLen(ded_len + 1);
        //const newPosition = createData(title, amount)
        //setRows2(prev => [...prev,newPosition])
        setRows2(newRows);
      } else if (ded_len == rows2.length) {
        const newPosition = createData("", "");
        setRows((prev) => [...prev, newPosition]);
        const newPosition2 = createData(title, amount);
        setRows2((prev) => [...prev, newPosition2]);
        setDedActLen(ded_len + 1);
      }
      setTitle("");
      setAmount("");
      closeModalHandler3();
    };
    const deletePosition = (index) => {
      if (sal_len > ded_len) {
        if (window.confirm("Are you sure you want to delete this item?")) {
          let newRows = rows2.filter((row, i) => {
            return index !== i;
          });
          setRows2(newRows);
          let newRows2 = rows.filter((row, i) => {
            return index !== i;
          });
          setRows(newRows2);
          setSalActLen(sal_len - 1);
        }
      } else {
        if (window.confirm("Are you sure you want to delete this item?")) {
          setSalActLen(sal_len - 1);
          let newRows = rows.map((row) => row);
          newRows[sal_len].title = "";
          newRows[sal_len].amount = "";
          setRows(newRows);
        }
      }
    };
    const deletePosition2 = (index) => {
      if (ded_len > sal_len) {
        if (window.confirm("Are you sure you want to delete this item?")) {
          let newRows = rows.filter((row, i) => {
            return index !== i;
          });
          setRows(newRows);
          let newRows2 = rows2.filter((row, i) => {
            return index !== i;
          });
          setRows2(newRows2);
          setDedActLen(ded_len - 1);
        }
      } else {
        if (window.confirm("Are you sure you want to delete this item?")) {
          setDedActLen(ded_len - 1);
          let newRows = rows2.map((row) => row);
          newRows[ded_len].title = "";
          newRows[ded_len].amount = "";
          setRows2(newRows);
        }
      }
    };
    //for department
    const names = [
      "Accounts",
      "Inventory",
      "Human Resource",
      "Counter Monitor",
      "Marketing",
      "Sales",
    ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for designation
    const desigs = [
      "Owner",
      "Waiter",
      "Counter Server",
      "Manager",
      "Jainator",
      "Chef",
    ];
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <>
        <Modal
          open={openModal4}
          onClose={closeModalHandler4}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal4}>
            <Box className={classes.modal} sx={{ width: "75%" }}>
              <Typography variant="h5" align="center">
                Overtime
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
                    <Typography variant="subtitle2">Department :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <Select
                      name="departName"
                      fullWidth
                      size="small"
                      multiple
                      value={personName}
                      onChange={handleChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {names.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={personName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Designation :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <Select
                      name="designation"
                      fullWidth
                      size="small"
                      multiple
                      value={desigName}
                      onChange={handleDesigChange}
                      //input={<OutlinedInput label="Tag" />}
                      renderValue={(selected) => selected.join(", ")}
                    >
                      {desigs.map((name) => (
                        <MenuItem key={name} value={name}>
                          <Checkbox checked={desigName.indexOf(name) > -1} />
                          <ListItemText primary={name} />
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">
                      Overtime Rate/hr :
                    </Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={100}
                      inputProps={{ readOnly: true }}
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
                    <Typography variant="subtitle2">No. of days :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={12}
                      inputProps={{ readOnly: true }}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">No. of hours :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      inputProps={{ readOnly: true }}
                      value={12}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={1200}
                      inputProps={{ readOnly: true }}
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

                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      onClick={addOverPosition}
                      variant="contained"
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
          open={openModal3}
          onClose={closeModalHandler3}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal3}>
            <Box className={classes.modal} sx={{ width: "75%" }}>
              <Typography variant="h5" align="center">
                Deduction
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
                    <Typography variant="subtitle2">Title* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={amount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      onClick={addDedPosition}
                      variant="contained"
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
          open={openModal2}
          onClose={closeModalHandler2}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal2}>
            <Box className={classes.modal} sx={{ width: "75%" }}>
              <Typography variant="h5" align="center">
                Salary
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
                    <Typography variant="subtitle2">Title* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Grid item container>
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField
                      fullWidth
                      size="small"
                      value={amount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(e) => setAmount(e.target.value)}
                    />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item>
                    <Button
                      onClick={addSalPosition}
                      variant="contained"
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
            <Box className={classes.modal} sx={{ width: "75%" }}>
              <Typography variant="h5" align="center">
                Choose Field Type
              </Typography>
              <Grid
                item
                container
                justifyContent="center"
                spacing={2}
                sx={{ padding: 2 }}
              >
                <Grid item>
                  <Button
                    onClick={openModalHandler2}
                    variant="contained"
                    size="large"
                    sx={{ marginRight: 1 }}
                  >
                    Salary
                  </Button>
                  <Button
                    onClick={openModalHandler3}
                    variant="contained"
                    size="large"
                  >
                    Deduction
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Fade>
        </Modal>
        <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
          <Grid
            item
            container
            direction="column"
            xs={6}
            rowGap={2}
            sx={{ borderRight: 1 }}
          >
            <h2 style={{ textAlign: "center" }}>Salary</h2>
            <hr color="grey" style={{ marginRight: "32px" }} />
            {rows.map((row, id) => {
              return (
                <Grid container direction="column" rowGap={2} item>
                  <Grid item>{row.title}</Grid>
                  {row.title == "" ? (
                    <Grid container direction="row" rowGap={2} item>
                      <Grid item minHeight="71px"></Grid>
                    </Grid>
                  ) : (
                    <Grid container direction="row" rowGap={2} item>
                      <Grid item>
                        <TextField
                          name="benifitAccrualDate"
                          minWidth="500px"
                          size="small"
                          defaultValue={row.amount}
                          //sx={{ paddingRight: 4}}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                <CurrencyRupee />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                      {/*<Grid item>
                                  <IconButton onClick={()=>deletePosition(id)}>
                                  <DeleteIcon color="error"/>
                                  </IconButton>
                                  </Grid>*/}
                    </Grid>
                  )}
                </Grid>
              );
            })}
            <hr color="grey" style={{ marginRight: "32px" }} />
            <Grid container direction="row" rowGap={2} item>
              <Grid item>Total Earnings</Grid>
              <Grid item marginLeft={16}>
                <TextField
                  name="benifitAccrualDate"
                  minWidth="500px"
                  size="small"
                  //defaultValue={row.amount}
                  //sx={{ paddingRight: 4}}
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
            <hr color="grey" style={{ marginRight: "32px" }} />
            <Grid container direction="row" rowGap={2} item margin="auto">
              <Grid item style={{ fontWeight: "bold", fontSize: "large" }}>
                Net Amount Payable
              </Grid>
              <Grid item marginLeft={7}>
                <TextField
                  name="benifitAccrualDate"
                  minWidth="500px"
                  size="small"
                  //defaultValue={row.amount}
                  //sx={{ paddingRight: 4}}
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
          </Grid>

          <Grid item container spacing={1} xs={6}>
            <Grid container direction="column" rowGap={2} item>
              <h2 style={{ textAlign: "center" }}>Deduction</h2>
              <hr color="grey" />
              {rows2.map((row, id) => {
                return (
                  <>
                    <Grid item>{row.title}</Grid>
                    {row.title == "" ? (
                      <Grid container direction="row" rowGap={2} item>
                        <Grid item minHeight="65px"></Grid>
                      </Grid>
                    ) : (
                      <Grid container direction="row" rowGap={2} item>
                        <Grid item>
                          <TextField
                            name="benifitAccrualDate"
                            minWidth="500px"
                            size="small"
                            defaultValue={row.amount}
                            //sx={{ paddingRight: 4}}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <CurrencyRupee />
                                </InputAdornment>
                              ),
                            }}
                          />
                        </Grid>
                        {/*<Grid item>
                                  <IconButton onClick={()=>deletePosition2(id)}>
                                  <DeleteIcon color="error"/>
                                  </IconButton>
                                  </Grid>*/}
                      </Grid>
                    )}
                  </>
                );
              })}
              <hr color="grey" style={{ marginRight: "32px" }} />
              <Grid container direction="row" rowGap={2} item>
                <Grid item>Total Deduction</Grid>
                <Grid item marginLeft={7}>
                  <TextField
                    name="benifitAccrualDate"
                    minWidth="500px"
                    size="small"
                    //defaultValue={row.amount}
                    //sx={{ paddingRight: 4}}
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
              <hr color="grey" style={{ marginRight: "32px" }} />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "120px" }}
        >
          {/*<Button variant="contained" onClick={openModalHandler4}>Overtime</Button>
          <Button variant="contained" onClick={openModalHandler}>Add</Button>*/}
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </>
    );
  };
  const Form3 = () => {
    const names = [
      "Accounts",
      "Inventory",
      "Human Resource",
      "Counter Monitor",
      "Marketing",
      "Sales",
    ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for designation
    const desigs = [
      "Owner",
      "Waiter",
      "Counter Server",
      "Manager",
      "Jainator",
      "Chef",
    ];
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    //for supervisor name
    const sup_names = ["Dorathy McClain"];
    const [supName, setSupName] = React.useState([]);
    const handleSupChange = (event) => {
      const {
        target: { value },
      } = event;
      setSupName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container spacing={1} xs={6}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Department Name</Grid>
            <Grid item xs={4}>
              <Select
                name="departName"
                fullWidth
                size="small"
                multiple
                value={personName}
                onChange={handleChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={personName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Designation</Grid>
            <Grid item>
              <Select
                name="desigName"
                fullWidth
                size="small"
                multiple
                value={desigName}
                onChange={handleDesigChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {desigs.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={desigName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Supervisor Name</Grid>
            <Grid item>
              <Select
                name="supervisorName"
                fullWidth
                size="small"
                multiple
                value={supName}
                onChange={handleSupChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {sup_names.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={supName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "10px" }}
        >
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };
  const Form4 = () => {
    //for date
    const [tarik, setTarik] = React.useState(new Date());
    const genders = ["Male", "Female"];
    const [supName, setSupName] = React.useState([]);
    const handleSupChange = (event) => {
      const {
        target: { value },
      } = event;
      setSupName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    const maritals = ["Married", "Unmarried"];
    const [marName, setMarName] = React.useState([]);
    const handleMarChange = (event) => {
      const {
        target: { value },
      } = event;
      setMarName(
        // On autofill we get a stringified value.
        typeof value === "string" ? value.split(",") : value
      );
    };
    return (
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container spacing={1} xs={6} rowGap={2}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Date of Birth</Grid>
            <Grid item>
              <DatePicker
                value={tarik}
                onChange={(newValue) => {
                  setTarik(newValue);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    fullWidth
                    size="small"
                    helperText={null}
                    inputProps={{ readOnly: true }}
                  />
                )}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Marital Status</Grid>
            <Grid item>
              <Select
                name="supervisorName"
                fullWidth
                size="small"
                multiple
                value={marName}
                inputProps={{ readOnly: true }}
                onChange={handleMarChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
              >
                {maritals.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={marName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
        </Grid>

        <Grid item container spacing={1} xs={6} rowGap={2}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Gender</Grid>
            <Grid item>
              <Select
                name="supervisorName"
                fullWidth
                size="small"
                multiple
                value={supName}
                onChange={handleSupChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(", ")}
                inputProps={{ readOnly: true }}
              >
                {genders.map((name) => (
                  <MenuItem key={name} value={name}>
                    <Checkbox checked={supName.indexOf(name) > -1} />
                    <ListItemText primary={name} />
                  </MenuItem>
                ))}
              </Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Photograph</Grid>
            <Grid item>
              <TextField
                name="photograph"
                fullWidth
                size="small"
                inputProps={{ readOnly: true }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "10px" }}
        >
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };
  const Form5 = () => {
    const createData = (title) => {
      return { title };
    };
    const data = [
      createData("Pan Card", null),
      createData("Aadhar Card", null),
      createData("Highest Education Certificate", null),
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
        backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
      },
    }));
    const [openModal, setOpenModal] = useState(false);
    const [title, setTitle] = useState("");
    const [rows, setRows] = useState(data);
    const classes = useStyles();
    const openModalHandler = () => {
      setOpenModal(true);
    };
    const closeModalHandler = () => {
      setOpenModal(false);
    };
    const addPosition = () => {
      const newPosition = createData(title);
      setRows((prev) => [...prev, newPosition]);
      setTitle("");
      closeModalHandler();
    };
    const deletePosition = (index) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        let newRows = rows.filter((row, i) => {
          return index !== i;
        });
        setRows(newRows);
      }
    };
    return (
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container rowGap={2} spacing={1} xs={6}>
          {rows.map((row, id) => {
            return (
              <Grid container direction="column" rowGap={0.5} item>
                <Grid item>{row.title}</Grid>
                <Grid item>
                  <TextField
                    name="benifitAccrualDate"
                    fullWidth
                    size="small"
                    inputProps={{ readOnly: true }}
                  />
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "10px" }}
        >
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };
  const Form6 = () => {
    const createData = (
      name,
      relation,
      phone,
      email,
      address,
      city,
      state,
      country,
      pincode
    ) => {
      return {
        name,
        relation,
        phone,
        email,
        address,
        city,
        state,
        country,
        pincode,
      };
    };
    const data = [
      createData(
        "Ramesh",
        "Father",
        "9190xxxxxx",
        "abcs@gmail.com",
        "Block-7, Street-5",
        "Mumbai",
        "Maharashtra",
        "India",
        "12345"
      ),
    ];
    return (
      <Grid
        container
        xs={12}
        spacing={4}
        style={{
          margin: "20px 0",
          height: "90%",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        {rows.map((row, id) => {
          return (
            <>
              <h2 style={{ marginLeft: "27px" }}>Emergency Contact {id + 1}</h2>
              <Grid container xs={12} spacing={4}>
                <Grid item container spacing={1} xs={3}>
                  <Grid container direction="column" rowGap={0.5} item>
                    <Grid item>
                      <AccountCircleIcon
                        style={{
                          textAlign: "center",
                          marginTop: "70px",
                          marginLeft: "120px",
                          scale: "5.1",
                        }}
                      />
                      {/*<p style={{textAlign:"center", marginLeft:"110px", marginBottom:"90px"}}>{row.name}</p>*/}
                    </Grid>
                    <Grid
                      item
                      style={{ marginLeft: "100px", marginTop: "65px" }}
                    >
                      {row.name}
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item container spacing={1} xs={4}>
                  <Grid container direction="row">
                    <Grid item style={{ marginLeft: "105px" }}>
                      <PeopleOutlineIcon />
                    </Grid>
                    <Grid item style={{ marginLeft: "6px" }}>
                      {row.relation}
                    </Grid>
                  </Grid>
                  <Grid container direction="row" rowGap={0.5} item>
                    <Grid item style={{ marginLeft: "100px" }}>
                      <PhoneOutlinedIcon />
                    </Grid>
                    <Grid item style={{ marginLeft: "6px" }}>
                      {row.phone}
                    </Grid>
                  </Grid>
                  <Grid container direction="row" rowGap={0.5} item>
                    <Grid item style={{ marginLeft: "100px" }}>
                      <MailOutlineIcon />
                    </Grid>
                    <Grid item style={{ marginLeft: "6px" }}>
                      {row.email}
                    </Grid>
                  </Grid>
                  <Grid container direction="row" rowGap={0.5} item>
                    <Grid item style={{ marginLeft: "100px" }}>
                      <LocationOnOutlinedIcon />
                    </Grid>
                    <Grid item style={{ marginLeft: "6px" }}>
                      {row.address}
                    </Grid>
                  </Grid>
                  <Grid container direction="row" rowGap={0.5} item>
                    <Grid item style={{ marginLeft: "126px" }}>
                      {row.city}, {row.state}
                    </Grid>
                  </Grid>
                  <Grid container direction="row" rowGap={0.5} item>
                    <Grid item style={{ marginLeft: "126px" }}>
                      {row.country}, {row.pincode}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </>
          );
        })}
        <Grid
          item
          container
          justifyContent="flex-end"
          columnGap={2}
          style={{ marginTop: "10px" }}
        >
          <Button
            onClick={() => setFormNo((prev) => prev - 1)}
            variant="outlined"
          >
            Previous
          </Button>
          <Button
            onClick={() => setFormNo((prev) => prev + 1)}
            variant="contained"
          >
            Next
          </Button>
        </Grid>
      </Grid>
    );
  };
  const Form7 = () => {
    const [rows, setRows] = useState([]);

    const FormFields = () => {
      return (
        <Grid
          container
          xs={12}
          spacing={4}
          style={{
            margin: "20px 0",
            height: "90%",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <Grid item container rowGap={2} spacing={1} xs={6}>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Account Holder Name</Grid>
              <Grid item>
                <TextField
                  name="customFieldName"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Account Number</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Confirm Account Number</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>IFSC Code</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Bank Name</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Branch Location</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Address</Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name="customValue"
                  size="small"
                  multiline="true"
                  minRows={4}
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>City</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>State</Grid>
              <Grid item>
                <Select
                  name="state"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                ></Select>
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Country</Grid>
              <Grid item>
                <Select
                  name="country"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                ></Select>
              </Grid>
            </Grid>
            <Grid container direction="column" rowGap={0.5} item>
              <Grid item>Pin Code</Grid>
              <Grid item>
                <TextField
                  name="customValue"
                  fullWidth
                  size="small"
                  inputProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      );
    };

    return (
      <>
        <FormFields />
        {rows.map((item) => item)}

        <Grid
          item
          container
          xs={12}
          alignItems="center"
          justifyContent="space-between"
          style={{
            margin: "20px 0",
            height: "90%",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <Grid
            item
            container
            xs={6}
            justifyContent="flex-end"
            columnGap={2}
            style={{ marginTop: "10px" }}
          >
            <Button
              onClick={() => setFormNo((prev) => prev - 1)}
              variant="outlined"
            >
              Previous
            </Button>
            <Button onClick={closeModalHandler} variant="contained">
              Save
            </Button>
          </Grid>
        </Grid>
      </>
    );
  };

  const Form0 = () => {
    return (
      <>
        <Grid container mt={4} xs={12} spacing={4}>
          <Grid xs={12} item container justifyContent="center">
            <Box
              component="img"
              sx={{
                objectFit: "cover",
                height: 250,
                width: 250,
                borderRadius: 99999,
              }}
              alt="Employee Profile."
              src="https://i.pinimg.com/474x/60/b4/7e/60b47e2dfdbe3f0e2adf74129fbea3b0.jpg"
            />
          </Grid>

          <Grid
            xs={12}
            mt={4}
            item
            direction="row"
            justifyContent="center"
            container
            spacing={6}
          >
            <Grid item>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Employee Name</Typography>
                </Grid>
                <Grid item>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}> John Smith</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Employee ID</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "28px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}> 3fz9883</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Department</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "32px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>Cooking</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Hire Date</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "51px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>23-05-2022</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Payroll Type</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "30px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>Salary</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item spacing={2}>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Aadhar No.</Typography>
                </Grid>
                <Grid item>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>4455-7767-8890</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Pan No.</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "25px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>7988-7542-4324</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>PF No.</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "33px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>7988-7542-4324</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid item spacing={2}>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Phone No.</Typography>
                </Grid>
                <Grid item>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}> +91-8973222134</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Email</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "35px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}> Johnsmith@gmail.com</Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item spacing={2}>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Address</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "4px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>
                    128/C 3rd floor, Heaven Towers
                  </Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>City</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "35px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>Mumbai</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>State</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "25px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>Maharashtra</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Country</Typography>
                </Grid>
                <Grid item style={{ marginLeft: "6px" }}>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>India</Typography>
                </Grid>
              </Grid>
              <Grid item mb={2} container spacing={1}>
                <Grid item>
                  <Typography>Pin Code</Typography>
                </Grid>
                <Grid item>
                  <Typography>:</Typography>
                </Grid>
                <Grid item>
                  <Typography fontWeight={700}>213-482</Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  };

  const ShowForm = () => {
    switch (formNo) {
      case 0:
        return <Form0 />;
      case 1:
        return <Form1 />;
      case 2:
        return <Form2 />;
      case 3:
        return <Form3 />;
      case 4:
        return <Form4 />;
      case 5:
        return <Form5 />;
      case 6:
        return <Form6 />;
      case 7:
        return <Form7 />;
      case 8:
        return <Form8 />;
      default:
        return <Form1 />;
    }
  };

  const columns = [
    { label: "Employee Id", minWidth: 150, maxWidth: 900, maxHeight: 5 },
    //{ label: "Photograph", minWidth: 200, maxWidth: 1200, maxHeight: 5 },
    { label: "Department", minWidth: 200, maxWidth: 600, maxHeight: 5 },
    { label: "Designation", minWidth: 150, maxWidth: 1200, maxHeight: 5 },
    { label: "Employee Name", minWidth: 150, maxWidth: 1200, maxHeight: 5 },
    //{ label: "Pan No.", minWidth: 200, maxWidth: 1200, maxHeight: 5 },
    //{ label: "First Name", minWidth: 200, maxWidth: 1000, maxHeight: 5 },
    //{ label: "Last Name", minWidth: 150, maxWidth: 1000, maxHeight: 5 },
    { label: "Phone", minWidth: 100, maxWidth: 100, maxHeight: 5 },
    { label: "Email Address", minWidth: 175, maxWidth: 1200, maxHeight: 5 },
    { label: "Employment Type", minWidth: 170, maxWidth: 220, maxHeight: 5 },
    { label: "Duty Type", minWidth: 120, maxWidth: 120, maxHeight: 5 },
    { label: "Action", minWidth: 200, maxWidth: 250, maxHeight: 5 },
  ];

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: "ManageEmployee",
  });
  const depnames = [
    "Accounts",
    "Inventory",
    "Human Resource",
    "Counter Monitor",
    "Marketing",
    "Sales",
  ];
  const [deptName, setDeptName] = React.useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setDeptName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  //for employee
  const employee = ["online order"];
  const [empName, setEmpName] = React.useState([]);
  const handleEmpChange = (event) => {
    const {
      target: { value },
    } = event;
    setEmpName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const pageChangeHandler = (event, newPage) => {
    setPage(newPage);
  };

  const rowsPerPageChangeHandler = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const emplo = [];
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
            <Grid container columnGap={1} rowGap={1} style={{ color: "white" }}>
              {fields.map((field, i) => {
                return (
                  <Grid
                    item
                    onClick={() => setFormNo(i)}
                    style={{
                      cursor: "pointer",
                      padding: 10,
                      borderRadius: "5px 5px 0 0",
                      backgroundColor: formNo === i ? "green" : `${colorBlue}`,
                    }}
                  >
                    {field}
                  </Grid>
                );
              })}
            </Grid>
            <ShowForm />
          </Box>
        </Fade>
      </Modal>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ mb: 1 }}
      >
        
          <FormControl sx={{ mr: 1, float: "left", width: "20%" }} size="small">
            <InputLabel id="select-type">Department</InputLabel>
            <Select
              labelId="select-type"
              id="select-type"
              label="Department"
              value={deptName}
              onChange={handleChange}
              renderValue={(selected) => selected.join(", ")}
            >
              {depnames.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={deptName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
            <Box sx={{width:"20%", float:"left"}}>    
            <Autocomplete
                multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={emplo}
                disableCloseOnSelect
                getOptionLabel={(option) => option.toppingName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.toppingName}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Employees" placeholder="Search" />
                )}
              />
            </Box>    
      </Stack>

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
                        style={{
                          minWidth: column.minWidth,
                          maxWidth: column.maxWidth,
                          maxHeight: column.maxHeight,
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
                {rows.map((row, index) => {
                  return (
                    <TableRow key={row.sl} hover>
                      {index !== openedRow && (
                        <>
                          <TableCell style={{ textAlign: "center" }}>
                            
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.department}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.designation}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.name}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.phone}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.email}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.employment_type}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            {row.duty_type}
                          </TableCell>
                          <TableCell style={{ textAlign: "center" }}>
                            <IconButton href="/dashboard/humanresource/hrm/addemployee">
                              <EditIcon color="primary"/>
                            </IconButton>
                            <IconButton onClick={openModalHandler}>
                              <VisibilityIcon
                                fontSize="small"
                                color="secondary"
                              />
                            </IconButton>
                            <IconButton onClick={() => deleteEmployee(index)}>
                              <DeleteIcon color="error" />
                            </IconButton>
                          </TableCell>
                        </>
                      )}
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
export default ManageEmployee;
