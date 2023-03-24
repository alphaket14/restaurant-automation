import React, {useState, useEffect} from "react";
import { TextField, Grid, Button, Select, MenuItem } from "@material-ui/core";
import { useSearchParams } from "react-router-dom";
import { blue } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import ListItemText from '@mui/material/ListItemText';
import axios from 'axios';
import {
  makeStyles,
  Fade,
  Box,
  IconButton,
  Autocomplete,
  Backdrop,
  Modal,
  Typography
} from "@material-ui/core";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { DatePicker } from "@material-ui/lab";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { CurrencyRupee } from "@mui/icons-material";
import { InputAdornment } from "@mui/material";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const colorBlue = blue[900];

const AddEmployee = (props) => {
  const [SearchParams, setSearchParams] = useSearchParams();
  const [depnames, setDepname] = useState([]);
  const [formNo, setFormNo] =  useState(SearchParams.get('form_no'));
  useEffect(() => {
    {
      SearchParams.get('form_no') ?
      setFormNo(SearchParams.get('form_no'))
      :
      setFormNo(1)
    }
    console.log(SearchParams.get('form_no'));
    console.log(formNo);
    const fetchdata = async () => {
      const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/department/')
      setDepname(data.data[0].rows);
      //setRowsid(data.data[0]._id);
    };
    fetchdata();
  },[]);

  //const fields = ["Basic Information", "Personal Info","Salary","Supervisor","Biographical Info","Addition Address","Emergency Contact","Custom"];
  const fields = ["Basic Information", "Personal Info","Supervisor","Biographical Info","Add Documents", "Emergency Contact", "Bank Details","Salary"];
  /*axios.post('http://localhost:5000/common-var/update/'+rowsid, {
    addemployee_pointer: 0,
  })*/
  const Form1 = ()=>{
    //for countries
    const [rows, setRows] = useState([]);
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
    const countries = [
      {name : "Afghanistan"},
      {name : "Albania"},
      {name : "Algeria"},
      {name : "Andorra"},
      {name : "Angola"},
      {name : "Antigua & Deps"},
      {name : "Argentina"},
      {name : "Armenia"},
      {name : "Australia"},
      {name : "Austria"},
      {name : "Azerbaijan"},
      {name : "Bahamas"},
      {name : "Bahrain"},
      {name : "Bangladesh"},
      {name : "Barbados"},
      {name : "Belarus"},
      {name : "Belgium"},
      {name : "Belize"},
      {name : "Benin"},
      {name : "Bhutan"},
      {name : "Bolivia"},
      {name : "Bosnia Herzegovina"},
      {name : "Botswana"},
      {name : "Brazil"},
      {name : "Brunei"},
      {name : "Bulgaria"},
      {name : "Burkina"},
      {name : "Burundi"},
      {name : "Cambodia"},
      {name : "Cameroon"},
      {name : "Canada"},
      {name : "Cape Verde"},
      {name : "Central African Rep"},
      {name : "Chad"},
      {name : "Chile"},
      {name : "China"},
      {name : "Colombia"},
      {name : "Comoros"},
      {name : "Congo"},
      {name : "Congo {Democratic Rep}"},
      {name : "Costa Rica"},
      {name : "Croatia"},
      {name : "Cuba"},
      {name : "Cyprus"},
      {name : "Czech Republic"},
      {name : "Denmark"},
      {name : "Djibouti"},
      {name : "Dominica"},
      {name : "Dominican Republic"},
      {name : "East Timor"},
      {name : "Ecuador"},
      {name : "Egypt"},
      {name : "El Salvador"},
      {name : "Equatorial Guinea"},
      {name : "Eritrea"},
      {name : "Estonia"},
      {name : "Ethiopia"},
      {name : "Fiji"},
      {name : "Finland"},
      {name : "France"},
      {name : "Gabon"},
      {name : "Gambia"},
      {name : "Georgia"},
      {name : "Germany"},
      {name : "Ghana"},
      {name : "Greece"},
      {name : "Grenada"},
      {name : "Guatemala"},
      {name : "Guinea"},
      {name : "Guinea-Bissau"},
      {name : "Guyana"},
      {name : "Haiti"},
      {name : "Honduras"},
      {name : "Hungary"},
      {name : "Iceland"},
      {name : "India"},
      {name : "Indonesia"},
      {name : "Iran"},
      {name : "Iraq"},
      {name : "Ireland {Republic}"},
      {name : "Israel"},
      {name : "Italy"},
      {name : "Ivory Coast"},
      {name : "Jamaica"},
      {name : "Japan"},
      {name : "Jordan"},
      {name : "Kazakhstan"},
      {name : "Kenya"},
      {name : "Kiribati"},
      {name : "Korea North"},
      {name : "Korea South"},
      {name : "Kosovo"},
      {name : "Kuwait"},
      {name : "Kyrgyzstan"},
      {name : "Laos"},
      {name : "Latvia"},
      {name : "Lebanon"},
      {name : "Lesotho"},
      {name : "Liberia"},
      {name : "Libya"},
      {name : "Liechtenstein"},
      {name : "Lithuania"},
      {name : "Luxembourg"},
      {name : "Macedonia"},
      {name : "Madagascar"},
      {name : "Malawi"},
      {name : "Malaysia"},
      {name : "Maldives"},
      {name : "Mali"},
      {name : "Malta"},
      {name : "Marshall Islands"},
      {name : "Mauritania"},
      {name : "Mauritius"},
      {name : "Mexico"},
      {name : "Micronesia"},
      {name : "Moldova"},
      {name : "Monaco"},
      {name : "Mongolia"},
      {name : "Montenegro"},
      {name : "Morocco"},
      {name : "Mozambique"},
      {name : "Myanmar, {Burma}"},
      {name : "Namibia"},
      {name : "Nauru"},
      {name : "Nepal"},
      {name : "Netherlands"},
      {name : "New Zealand"},
      {name : "Nicaragua"},
      {name : "Niger"},
      {name : "Nigeria"},
      {name : "Norway"},
      {name : "Oman"},
      {name : "Pakistan"},
      {name : "Palau"},
      {name : "Panama"},
      {name : "Papua New Guinea"},
      {name : "Paraguay"},
      {name : "Peru"},
      {name : "Philippines"},
      {name : "Poland"},
      {name : "Portugal"},
      {name : "Qatar"},
      {name : "Romania"},
      {name : "Russian Federation"},
      {name : "Rwanda"},
      {name : "St Kitts & Nevis"},
      {name : "St Lucia"},
      {name : "Saint Vincent & the Grenadines"},
      {name : "Samoa"},
      {name : "San Marino"},
      {name : "Sao Tome & Principe"},
      {name : "Saudi Arabia"},
      {name : "Senegal"},
      {name : "Serbia"},
      {name : "Seychelles"},
      {name : "Sierra Leone"},
      {name : "Singapore"},
      {name : "Slovakia"},
      {name : "Slovenia"},
      {name : "Solomon Islands"},
      {name : "Somalia"},
      {name : "South Africa"},
      {name : "South Sudan"},
      {name : "Spain"},
      {name : "Sri Lanka"},
      {name : "Sudan"},
      {name : "Suriname"},
      {name : "Swaziland"},
      {name : "Sweden"},
      {name : "Switzerland"},
      {name : "Syria"},
      {name : "Taiwan"},
      {name : "Tajikistan"},
      {name : "Tanzania"},
      {name : "Thailand"},
      {name : "Togo"},
      {name : "Tonga"},
      {name : "Trinidad & Tobago"},
      {name : "Tunisia"},
      {name : "Turkey"},
      {name : "Turkmenistan"},
      {name : "Tuvalu"},
      {name : "Uganda"},
      {name : "Ukraine"},
      {name : "United Arab Emirates"},
      {name : "United Kingdom"},
      {name : "United States"},
      {name : "Uruguay"},
      {name : "Uzbekistan"},
      {name : "Vanuatu"},
      {name : "Vatican City"},
      {name : "Venezuela"},
      {name : "Vietnam"},
      {name : "Yemen"},
      {name : "Zambia"},
      {name : "Zimbabwe"},
    ];
    const [country, setCountry] = useState([]);
    const handleCountryChange = (event) => {
      const {
        target: { value },
      } = event;
      setCountry(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
        //for duty type
        const dutytypes= [
          {name : 'Full time'},
          {name : 'Part time'},
        ];
        const [dutyName, setDutyName] = React.useState([]);
        const handleDutyChange = (event) => {
          const {
            target: { value },
          } = event;
          setDutyName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
        //for employment type
        const employtypes= [
          {name : 'Permanent'},
          {name : 'Probation'},
          {name : 'Temporary'},
        ];
        const [employName, setEmployName] = React.useState([]);
        const handleEmployChange = (event) => {
          const {
            target: { value },
          } = event;
          setEmployName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
        const [firstname, setfirstname] = useState("");
        const [lastname, setlastname] = useState("");
        const [email, setemail] = useState("");
        const [phone, setphone] = useState("");
        const [employment, setemployment] = useState("");
        const [dutytype, setdutytype] = useState("");
        const handle_duty = (id) => {
          console.log(id)
          setdutytype(id)
        }
        const handle_employment = (id) => {
          console.log(id)
          setemployment(id)
        }
        const createData = ( name, email, phone, duty_type, employment_type) => {
          return {  name, email, phone, duty_type, employment_type};
        };
        const addPosition = () => {
          let newRows2 = []
          let newRows3 = []
          newRows2.push(dutytype)
          newRows3.push(employment)
          const name = firstname + " " + lastname;
          const newPosition = createData(name, email, phone, newRows2, newRows3);
          var newRows = [...rows, newPosition]
          axios.post('https://doubtful-tuna-leotard.cyclic.app/employee/update/'+rowsid, {
            rows: newRows,
          })
          .then(res => console.log(res.data))
          .catch((error) => {console.log(error);})
          setFormNo(prev=> prev+1)
        };
    return (
      <form>
      <Grid container rowGap={2} style={{ margin: "20px 0" }}>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>First Name</Grid>
            <Grid item>
              <TextField name="firstName" fullWidth size="small" 
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Last Name</Grid>
            <Grid item>
              <TextField name="lastName" fullWidth size="small" 
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={6} rowGap={1} item>
            <Grid item>Email Address</Grid>
            <Grid item>
              <TextField name="email" fullWidth size="small" 
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} item>
        <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Duty Type</Grid>
            <Grid item>
            <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={dutytypes}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_duty(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Duty Type" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Adhaar Card Info</Grid>
            <Grid item>
              <TextField name="adhaarCardInfo" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Pan Card Info</Grid>
            <Grid item>
              <TextField name = "panCardInfo" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Phone</Grid>
            <Grid item>
              <TextField name="phone" fullWidth size="small" 
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </Grid>
          </Grid>

        </Grid>
        <Grid container xs={12} spacing={2} item>
        <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Employment</Grid>
            <Grid item>
            <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={employtypes}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_employment(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Employment" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          </Grid>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={6} rowGap={1} item>
            <Grid item>Address</Grid>
            <Grid item>
              <TextField 
                name = "address" 
                fullWidth 
                size="small" 
                multiline = "true"
                minRows= {4}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container xs={12} spacing={2} item>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>City</Grid>
            <Grid item>
              <TextField name="city" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>State</Grid>
            <Grid item>
              <Select name="state" fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Country</Grid>
            <Grid item>
            <Autocomplete
                //multiple
                size="small"
                fullWidth 
                /*value={deptName}
                onChange={(event, newValue) => {
                  setDeptName(
                    // On autofill we get a stringified value.
                    typeof newValue === 'string' ? newValue.split(',') : newValue,
                  );
                }}*/
                id="checkboxes-tags-demo"
                options={countries}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Countries" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" xs={3} rowGap={1} item>
            <Grid item>Pin Code</Grid>
            <Grid item>
              <TextField name = "pincode" fullWidth size="small" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/*<h2>Login Information</h2>
      <hr color="grey" />
      <Grid container spacing={2} style={{marginTop:"10px"}}>
        <Grid item container rowGap={1} xs={6} direction="column" >
          <Grid item>User Login email</Grid>
          <Grid item>
            <TextField placeholder="User Name" name="userName" fullWidth  size="small" />
          </Grid>
        </Grid>
        <Grid item container rowGap={1} xs={6}  direction="column">
          <Grid item>Password</Grid>
          <Grid item>
            <TextField placeholder="password"  name="password" fullWidth  size="small" />
          </Grid>
        </Grid>
      </Grid>*/}
      <Grid container justifyContent="flex-end" style={{marginTop:"10px"}}>
          <Button onClick={addPosition}  variant="contained">Next</Button>
      </Grid>
      </form>
    )
  }

  const Form2 = ()=>{
    //for date
    const [tarik, setTarik] = React.useState(new Date());
    const [tarik2, setTarik2] = React.useState(new Date());
    const [tarik3, setTarik3] = React.useState(new Date());
    //for pay frequency
    const period= [
      'Hourly',
      'Daily',
      'Weekly',
      'Monthly',
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
    const [rows, setRows] = useState();
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
    const [department, setdepartment] = useState("");
    const [designation, setdesignation] = useState("");
  //department
  const depnames= [
    {name : 'Accounts'},
    {name : 'Inventory'},
    {name : 'Human Resource'},
    {name : 'Counter Monitor'},
    {name : 'Marketing'},
    {name : 'Sales'},
  ];
  //for job position
  const position= [
    {name: 'Kitchen Manager'},
    {name:'Chef'},
    {name : 'Jainator'},
    {name : 'Counter Monitor'},
    {name : 'Waitor'},
  ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for designation
    const desigs= [
      'Owner',
      'Waiter',
      'Counter Server',
      'Manager',
      'Jainator',
      'Chef',
    ];
    const handle_dept = (id) => {
      console.log(id)
      setdepartment(id)
    }
    const handle_desig = (id) => {
      console.log(id)
      setdesignation(id)
    }
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for payroll
    const payrolls= [
      'Fixed',
      'Temporary',
      'Notice',
    ];
    const [payrollName, setPayrollName] = React.useState([]);
    const handlePayrollChange = (event) => {
      const {
        target: { value },
      } = event;
      setPayrollName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const editPosition = () => {
      let newRows2 = []
      let newRows3 = []
      newRows2.push(department)
      newRows3.push(designation)
      let newRows = rows.map((row) => row);
      newRows[rows.length-1].department = newRows2;
      newRows[rows.length-1].designation = newRows3;
      axios.post('https://doubtful-tuna-leotard.cyclic.app/employee/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      console.log(newRows)
      //console.log(inputValue)
      setFormNo(prev=> prev+1)
    };
    return (
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
        <Grid item container spacing={1} xs={6} rowGap={2}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Department</Grid>
            <Grid item>
            <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={depnames}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_dept(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          </Grid>
          <Grid item container  spacing={1} xs={6} >
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Designation</Grid>
            <Grid item>
            <Autocomplete
                //multiple
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={position}
                disableCloseOnSelect
                getOptionLabel={(option) => option.name}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_desig(option.name)}
                    />
                    {option.name}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Designation" placeholder="Search" />
                )}
              />
            </Grid>
            </Grid>
            </Grid>
        </Grid>
        <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container  spacing={1} xs={6} >
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Recruitment Date</Grid>
            <Grid item>
            <DatePicker
              value={tarik}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
              setTarik(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
          </Grid>
          <Grid item container  spacing={1} xs={6} >
          <Grid container direction="column" rowGap={0.5} item>
          <Grid item>Hire Date</Grid>
            <Grid item>
            <DatePicker
              value={tarik2}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
              setTarik2(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
              )}
            />
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
                renderValue={(selected) => selected.join(', ')}
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
                renderValue={(selected) => selected.join(', ')}
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
        {/*<Grid item container spacing={1} xs={6} rowGap={2}>
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
                renderValue={(selected) => selected.join(', ')}
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
        </Grid>*/}
          <Grid container xs={12} spacing={4} style={{ margin: "5px 0" }}>
          <Grid item container spacing={1} xs={6} rowGap={0.5}>
            <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Last Working Date</Grid>
              <Grid item>
              <DatePicker
              value={tarik3}
              inputFormat="dd/MM/yyyy"
              onChange={(newValue) => {
              setTarik3(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
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
                multiline = "true"
                minRows= {4}
              />
            </Grid>
          </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={editPosition}  variant="contained">Next</Button>
        </Grid>
        </Grid>
    )
  }

  const Form3 = ()=>{
    const names= [
      'Accounts',
      'Inventory',
      'Human Resource',
      'Counter Monitor',
      'Marketing',
      'Sales',
    ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for designation
    const desigs= [
      'Owner',
      'Waiter',
      'Counter Server',
      'Manager',
      'Jainator',
      'Chef',
    ];
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for supervisor name
    const sup_names= [
      'Dorathy McClain',
    ];
    const [supName, setSupName] = React.useState([]);
    const handleSupChange = (event) => {
      const {
        target: { value },
      } = event;
      setSupName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    return (
      <Grid container rowGap={2} xs={12} spacing={4} style={{ margin: "20px 0" }}>
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
                renderValue={(selected) => selected.join(', ')}
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
                renderValue={(selected) => selected.join(', ')}
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
                renderValue={(selected) => selected.join(', ')}
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
        {/*<Grid item container spacing={1} xs={6}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>SuperVisor Name</Grid>
            <Grid item>
            <Select fullWidth size="small"
                name="supervisorName"
                fullWidth 
                size="small"
                multiple
                value={supName}
                onChange={handleSupChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
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
        </Grid>*/}
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
        </Grid>
      </Grid>
    )
  }
  const Form4 = ()=>{
    //for date
    const [tarik, setTarik] = React.useState(new Date());
    const genders= [
      'Male',
      'Female',
    ];
    const [supName, setSupName] = React.useState([]);
    const handleSupChange = (event) => {
      const {
        target: { value },
      } = event;
      setSupName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    const maritals= [
      'Married',
      'Unmarried',
    ];
    const [marName, setMarName] = React.useState([]);
    const handleMarChange = (event) => {
      const {
        target: { value },
      } = event;
      setMarName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    return (
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container spacing={1} xs={6} rowGap={2} >
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
                fullWidth size="small" helperText={null}/>
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
              {/*<TextField type="date" name="dateOfBirth" fullWidth size="small" />*/}
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
                onChange={handleMarChange}
                //input={<OutlinedInput label="Tag" />}
                renderValue={(selected) => selected.join(', ')}
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
          {/*<Grid container direction="column" rowGap={0.5} item>
            <Grid item>EEO Class</Grid>
            <Grid item>
              <TextField  name="EEOClass" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Work in State</Grid>
            <Grid item>
              <Select name="workInState" fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Citizenship</Grid>
            <Grid item>
              <Select name="citizenship" fullWidth size="small"></Select>
            </Grid>
    </Grid>*/}
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
                renderValue={(selected) => selected.join(', ')}
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
          {/*<Grid container direction="column" rowGap={0.5} item>
            <Grid item>Ethnic Group</Grid>
            <Grid item>
              <TextField name="ethnicGroup" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>SSN</Grid>
            <Grid item>
              <TextField name="SSN" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Live in State</Grid>
            <Grid item>
              <Select name="liveInState" fullWidth size="small"></Select>
            </Grid>
  </Grid>*/}
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Photograph</Grid>
            <Grid item>
              <TextField type="file" name="photograph" fullWidth size="small" />
            </Grid>
          </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
        </Grid>
      </Grid>
    )
  }
  const Form5 = ()=>{
    const createData = (title) => {
      return { title};
    };
    const data = [
      createData("Pan Card", null),
      createData("Aadhar Card", null),
      createData("Highest Education Certificate", null)
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
      const addPosition = () =>{
        const newPosition = createData(title)
        setRows(prev => [...prev,newPosition])
        setTitle("")
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
    return (
      <>
        <Modal
          open={openModal}
          onClose={closeModalHandler}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal}>
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Document
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Title* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={title}
                      onChange={e => setTitle(e.target.value)} />
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
      {/*<Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button variant="contained" onClick={openModalHandler}>Add</Button>
        </Grid>
    </Grid>*/}
      <Grid container xs={12} rowGap={2} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container rowGap={2} spacing={1} xs={6}>
          {rows.map((row, id) => {
            return(
              <Grid container direction="column" rowGap={0.5} item>
                <Grid item>{row.title}</Grid>
                <Grid container direction="row" item>
                <Grid item>
                  <TextField 
                    name="benifitAccrualDate" 
                    type = "file"
                    fullWidth 
                    size="small" 
                  />
                </Grid>
                <Grid item>
                <IconButton onClick={()=>deletePosition(id)}>
                    <DeleteIcon color="error"/>
                  </IconButton>
                </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"120px"}}>
          <Button variant="contained" onClick={openModalHandler}>Add</Button>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
        </Grid>
    </>
    )
  }
  const Form6 = ()=>{
    const createData = (name, relation, phone, email, address, city, state, country, pincode) => {
      return { name, relation, phone, email, address, city, state, country, pincode};
    };
    const data = [
      createData("Ramesh", "Father", "9190xxxxxx", "abcs@gmail.com", "Block-7, Street-5", "Mumbai", "Maharashtra", "India", "12345")
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
        height: 500,
        backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
      }
    }));
      const [openModal, setOpenModal] = useState(false);
      const [openModal2, setOpenModal2] = useState(false);
      const [name, setName] = useState("");
      const [relation, setRelation] = useState("");
      const [phone, setPhone] = useState("");
      const [email, setEmail] = useState("");
      const [address, setAddress] = useState("");
      const [city, setCity] = useState("");
      const [state, setState] = useState("");
      const [country, setCountry] = useState("");
      const [pincode, setPincode] = useState("");
      const [rows, setRows] = useState(data);
      const [currIndex, setCurrIndex] = useState(null);
      const classes = useStyles();
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
        const newPosition = createData(name, relation, phone, email, address, city, state, country, pincode)
        setRows(prev => [...prev,newPosition])
        setName("")
        setRelation("")
        setPhone("")
        setEmail("")
        setAddress("")
        setCity("")
        setState("")
        setCountry("")
        setPincode("")
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
        setRelation(rows[i].relation)
        setPhone(rows[i].phone)
        setEmail(rows[i].email)
        setAddress(rows[i].address)
        setCity(rows[i].city)
        setState(rows[i].state)
        setCountry(rows[i].country)
        setPincode(rows[i].pincode)
      }
    
      const editPosition = () =>{
        let newRows = rows.map(row => row);
        newRows[currIndex].name = name;
        newRows[currIndex].relation = relation;
        newRows[currIndex].phone = phone;
        newRows[currIndex].email = email;
        newRows[currIndex].address = address;
        newRows[currIndex].city = city;
        newRows[currIndex].state = state;
        newRows[currIndex].country = country;
        newRows[currIndex].pincode = pincode;
        setRows(newRows)
        setName("")
        setRelation("")
        setPhone("")
        setEmail("")
        setAddress("")
        setCity("")
        setState("")
        setCountry("")
        setPincode("")
        closeModalHandler2()
      }
    return (
      <>
      <Modal
          open={openModal2}
          onClose={closeModalHandler2}
          closeAfterTransition
          BackdropComponent={Backdrop}
        >
          <Fade in={openModal2}>
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Edit Emergency Contact
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Relationship* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={relation}
                      onChange={e => setRelation(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Phone Number* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={phone}
                      onChange={e => setPhone(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Email* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Address Details* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      multiline = "true"
                      minRows= {4}
                      value={address}
                      onChange={e => setAddress(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">City* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={city}
                      onChange={e => setCity(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">State* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={state}
                      onChange={e => setState(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Country* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={country}
                      onChange={e => setCountry(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Pincode* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={editPosition}  variant="contained" size="small">
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
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Add Emergency Contact
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Name* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={name}
                      onChange={e => setName(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Relationship* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={relation}
                      onChange={e => setRelation(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Phone Number* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={phone}
                      onChange={e => setPhone(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Email* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={email}
                      onChange={e => setEmail(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Address Details* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      multiline = "true"
                      minRows= {4}
                      value={address}
                      onChange={e => setAddress(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">City* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={city}
                      onChange={e => setCity(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">State* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={state}
                      onChange={e => setState(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Country* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={country}
                      onChange={e => setCountry(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Pincode* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={pincode}
                      onChange={e => setPincode(e.target.value)} />
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
      {/*<Grid container spacing={2} justifyContent="right">
        <Grid item>
          <Button variant="contained" onClick={openModalHandler}>Add</Button>
        </Grid>
    </Grid>*/}
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
          {rows.map((row, id) => {
            return(
              <>
              <h2 style={{ marginLeft: "27px" }}>Emergency Contact  {id+1}</h2>
              <Grid container xs={12} spacing={4} >
              <Grid item container spacing={1} xs={3}>
                <Grid container direction="column" rowGap={0.5} item>
                <Grid item >
                  <AccountCircleIcon style={{textAlign:"center", marginTop: "70px", marginLeft:"120px", scale:"5.1"}} />
                  {/*<p style={{textAlign:"center", marginLeft:"110px", marginBottom:"90px"}}>{row.name}</p>*/}
                </Grid>
                <Grid item style={{marginLeft:"100px", marginTop:"65px"}}>{row.name}</Grid>
                </Grid>
                </Grid>
              <Grid item container spacing={1} xs={4}>
              <Grid container direction="row" >
                <Grid item style={{marginLeft:"105px"}}><PeopleOutlineIcon /></Grid>
                <Grid item style={{marginLeft:"6px"}}>{row.relation}</Grid>
                </Grid>
              <Grid container direction="row" rowGap={0.5} item>
              <Grid item style={{marginLeft:"100px"}}><PhoneOutlinedIcon/></Grid>
                <Grid item style={{marginLeft:"6px"}}>{row.phone}</Grid>
              </Grid>
              <Grid container direction="row" rowGap={0.5} item>
              <Grid item style={{marginLeft:"100px"}}><MailOutlineIcon/></Grid>
                <Grid item style={{marginLeft:"6px"}}>{row.email}</Grid>
              </Grid>
              <Grid container direction="row" rowGap={0.5} item>
                <Grid item style={{marginLeft:"100px"}}><LocationOnOutlinedIcon/></Grid>
                <Grid item style={{marginLeft:"6px"}}>{row.address}</Grid>
              </Grid>
              <Grid container direction="row" rowGap={0.5} item>
                <Grid item style={{marginLeft:"126px"}}>{row.city}, {row.state}</Grid>
              </Grid>
              <Grid container direction="row" rowGap={0.5} item>
                <Grid item style={{marginLeft:"126px"}}>{row.country}, {row.pincode}</Grid>
              </Grid>
              </Grid>
              <Grid item container spacing={1} xs={3} >
                <Grid item style={{marginLeft:"120px", marginTop:"80px" }} >
                  <IconButton color="primary">
                    <EditIcon onClick={()=>edit(id)}/>
                  </IconButton>
                  <IconButton >
                    <DeleteIcon onClick={()=>deletePosition(id)}/>
                  </IconButton>
                </Grid>
              </Grid>
              </Grid>
              </>
            );
          })}
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"120px"}}>
          <Button variant="contained" style={{marginRight:"105px"}} onClick={openModalHandler}>Add</Button>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
        </Grid>
      </Grid>
      </>
    )
  }
  const Form7 = ()=>{
    const [rows, setRows] = useState([])
    

    const FormFields = () =>{
      return (
        <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container rowGap={2} spacing={1} xs={6}>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Account Holder Name</Grid>
            <Grid item>
              <TextField name="customFieldName" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Account Number</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Confirm Account Number</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>IFSC Code</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Bank Name</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Branch Location</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Address</Grid>
            <Grid item>
              <TextField fullWidth 
                name="customValue" 
                size="small" 
                multiline = "true"
                minRows= {4}
              />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>City</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>State</Grid>
            <Grid item>
              <Select name="state" fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Country</Grid>
            <Grid item>
              <Select name="country" fullWidth size="small"></Select>
            </Grid>
          </Grid>
          <Grid container direction="column" rowGap={0.5} item>
            <Grid item>Pin Code</Grid>
            <Grid item>
              <TextField name="customValue" fullWidth size="small" />
            </Grid>
          </Grid>
        </Grid>
        </Grid>
      )
    }
    

    
    return (
      <>
      
      <FormFields />
      {rows.map(item=> item)}

        {/*<Grid item container xs={6}>
          <Button style={{marginLeft: "32px"}} variant="contained" onClick={()=>{setRows(prev =>[...prev,<FormFields />])}}>Add More</Button>
          {rows.length>0 && <Button style={{marginLeft: "32px"}} variant="contained" color="error" onClick={()=>setRows([])}>Close</Button>}
    </Grid>*/}
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"10px"}}>
            <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
            <Button onClick={()=> setFormNo(1)}  variant="contained">Save</Button>
        </Grid>
      </>
    )
  }

  const Form8 = ()=>{
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
      createData("Loan", ""),
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
        backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
      }
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
    const addSalPosition = () =>{
      if(sal_len<rows.length){
        let newRows = rows.map(row => row);
        newRows[sal_len].title = title;
        newRows[sal_len].amount = amount;
        setSalActLen(sal_len+1);
        //const newPosition = createData(title, amount)
        //setRows2(prev => [...prev,newPosition])
        setRows(newRows)
      }
      else if(sal_len==rows.length){
        const newPosition = createData("", "")
        setRows2(prev => [...prev,newPosition])
        const newPosition2 = createData(title, amount)
        setRows(prev => [...prev,newPosition2])
        setSalActLen(sal_len+1);
      }
      setTitle("")
      setAmount("")
      closeModalHandler2()
    }
    const addOverPosition = () =>{
      const newPosition = createData("Overtime", 1200)
      if(sal_len<rows.length){
        let newRows = rows.map(row => row);
        newRows[sal_len].title = "Overtime";
        newRows[sal_len].amount = 1200;
        setSalActLen(sal_len+1);
        //const newPosition = createData(title, amount)
        //setRows2(prev => [...prev,newPosition])
        setRows(newRows)
      }
      else if(sal_len==rows.length){
        const newPosition = createData("", "")
        setRows2(prev => [...prev,newPosition])
        const newPosition2 = createData("Overtime", 1200)
        setRows(prev => [...prev,newPosition2])
        setSalActLen(sal_len+1);
      }
      setTitle("")
      setAmount("")
      closeModalHandler4()
    }
    const addDedPosition = () =>{
      if(ded_len<rows2.length){
        let newRows = rows2.map(row => row);
        newRows[ded_len].title = title;
        newRows[ded_len].amount = amount;
        setDedActLen(ded_len+1);
        //const newPosition = createData(title, amount)
        //setRows2(prev => [...prev,newPosition])
        setRows2(newRows)
      }
      else if(ded_len==rows2.length){
        const newPosition = createData("", "")
        setRows(prev => [...prev,newPosition])
        const newPosition2 = createData(title, amount)
        setRows2(prev => [...prev,newPosition2])
        setDedActLen(ded_len+1);
      }
      setTitle("")
      setAmount("")
      closeModalHandler3()
    }
    const deletePosition = (index) =>{
      if(sal_len>ded_len){
        if(window.confirm("Are you sure you want to delete this item?")){
          let newRows = rows2.filter((row,i) =>{
            return index !== i;
          })
          setRows2(newRows)
          let newRows2 = rows.filter((row,i) =>{
            return index !== i;
          })
          setRows(newRows2)
          setSalActLen(sal_len-1);
        }
      }
      else{
        if(window.confirm("Are you sure you want to delete this item?")){
          setSalActLen(sal_len-1);
          let newRows = rows.map(row => row);
          newRows[sal_len].title = "";
          newRows[sal_len].amount = "";
          setRows(newRows)
        }
      }
  
    }
    const deletePosition2 = (index) =>{
      if(ded_len>sal_len){
        if(window.confirm("Are you sure you want to delete this item?")){
          let newRows = rows.filter((row,i) =>{
            return index !== i;
          })
          setRows(newRows)
          let newRows2 = rows2.filter((row,i) =>{
            return index !== i;
          })
          setRows2(newRows2)
          setDedActLen(ded_len-1);
        }
      }
      else{
        if(window.confirm("Are you sure you want to delete this item?")){
          setDedActLen(ded_len-1);
          let newRows = rows2.map(row => row);
          newRows[ded_len].title = "";
          newRows[ded_len].amount = "";
          setRows2(newRows)
        }
      }
  
    }
    //for department
    const names= [
      'Accounts',
      'Inventory',
      'Human Resource',
      'Counter Monitor',
      'Marketing',
      'Sales',
    ];
    const [personName, setPersonName] = React.useState([]);
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
    //for designation
    const desigs= [
      'Owner',
      'Waiter',
      'Counter Server',
      'Manager',
      'Jainator',
      'Chef',
    ];
    const [desigName, setDesigName] = React.useState([]);
    const handleDesigChange = (event) => {
      const {
        target: { value },
      } = event;
      setDesigName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
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
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Overtime
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
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
                      renderValue={(selected) => selected.join(', ')}
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
                <Grid item container >
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
                      renderValue={(selected) => selected.join(', ')}
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
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Overtime Rate/hr :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={100}
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
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">No. of days :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={12}
                      inputProps={{ readOnly: true, }}
                      />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">No. of hours :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      inputProps={{ readOnly: true, }}
                      value={12}
                      />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={1200}
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

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={addOverPosition}  variant="contained" size="small">
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
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Deduction
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Title* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={title}
                      onChange={e => setTitle(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={amount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      onChange={e => setAmount(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={addDedPosition}  variant="contained" size="small">
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
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Salary
              </Typography>
              <Grid item container direction="column" spacing={2} sx={{ padding: 2}}>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Title* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={title}
                      onChange={e => setTitle(e.target.value)} />
                  </Grid>
                </Grid>
                <Grid item container >
                  <Grid item xs={4}>
                    <Typography variant="subtitle2">Amount* :</Typography>
                  </Grid>
                  <Grid item xs={13} fullWidth>
                    <TextField fullWidth size="small"
                      value={amount}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <CurrencyRupee/>
                          </InputAdornment>
                        )
                      }}
                      onChange={e => setAmount(e.target.value)} />
                  </Grid>
                </Grid>

                <Grid item container justifyContent="flex-end">
                  <Grid item  >
                    <Button onClick={addSalPosition}  variant="contained" size="small">
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
            <Box className={classes.modal} sx={{ width: '75%' }}>
              <Typography variant="h5" align="center">
                Choose Field Type
              </Typography>
              <Grid item container justifyContent="center" spacing={2} sx={{ padding: 2}}>
                  <Grid item >
                    <Button onClick={openModalHandler2}  variant="contained" size="large" sx={{ marginRight: 1 }}>
                      Salary
                    </Button>
                    <Button onClick={openModalHandler3}  variant="contained" size="large">
                      Deduction
                    </Button>
                  </Grid>
                </Grid>
            </Box>
          </Fade>
      </Modal>
      <Grid container xs={12} spacing={4} style={{ margin: "20px 0" }}>
        <Grid item container direction="column"  xs={6} rowGap={2} sx={{ borderRight: 1}}>
          <h2 style={{ textAlign: "center" }}>Salary</h2>
          <hr color="grey" style={{  marginRight: "32px" }}/>
          {rows.map((row, id) => {
            return(
              <Grid container direction="column" rowGap={2} item>
                <Grid item>{row.title}</Grid>
                  {row.title == "" ? 
                  <Grid container direction="row" rowGap={2} item>
                    <Grid item minHeight="71px"></Grid>
                  </Grid>
                  :
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
                                          <CurrencyRupee/>
                                        </InputAdornment>
                                      )
                                    }}
                                  />
                                </Grid>
                                <Grid item>
                                  <IconButton onClick={()=>deletePosition(id)}>
                                  <DeleteIcon color="error"/>
                                  </IconButton>
                                </Grid>
                                </Grid>
                  }
              </Grid>
            );
          })}
            <hr color="grey" style={{  marginRight: "32px" }}/>
            <Grid container direction="row" rowGap={2} item >
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
                          <CurrencyRupee/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <hr color="grey" style={{  marginRight: "32px" }}/>
              <Grid container direction="row" rowGap={2} item margin="auto">
                <Grid item style={{fontWeight:"bold", fontSize:"large"}}>Net Amount Payable</Grid>
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
                          <CurrencyRupee/>
                        </InputAdornment>
                      )
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
            return(
              <>
                <Grid item>{row.title}</Grid>
                {row.title == "" ? 
                  <Grid container direction="row" rowGap={2} item>
                    <Grid item minHeight="71px"></Grid>
                  </Grid>
                  :
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
                                          <CurrencyRupee/>
                                        </InputAdornment>
                                      )
                                    }}
                                  />
                                </Grid>
                                <Grid item>
                                  <IconButton onClick={()=>deletePosition2(id)}>
                                  <DeleteIcon color="error"/>
                                  </IconButton>
                                </Grid>
                                </Grid>
                  }
              </>
            );
          })}
              <hr color="grey" style={{  marginRight: "32px" }}/>
              <Grid container direction="row" rowGap={2} item>
                <Grid item>Total Deduction</Grid>
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
                          <CurrencyRupee/>
                        </InputAdornment>
                      )
                    }}
                  />
                </Grid>
              </Grid>
              <hr color="grey" style={{  marginRight: "32px" }}/>
          </Grid>
        </Grid>
        </Grid>
        <Grid item container justifyContent="flex-end" columnGap={2} style={{marginTop:"120px"}}>
          <Button variant="contained" onClick={openModalHandler4}>Overtime</Button>
          <Button variant="contained" onClick={openModalHandler}>Add</Button>
          <Button onClick={()=> setFormNo(prev=> prev-1)}  variant="outlined">Previous</Button>
          <Button onClick={()=> setFormNo(prev=> prev+1)}  variant="contained">Next</Button>
        </Grid>
      </>
    )
  }
  const ShowForm = ()=>{
    switch(formNo){
      case 1:
        return <Form1 />
      case 2:
        return <Form2 />
      case 3:
        return <Form3 />
      case 4:
        return <Form4 />
      case 5:
        return <Form5 /> 
      case 6:
        return <Form6 /> 
      case 7:
        return <Form7 />
      case 'salary':
        return <Form8 />
      case 8:
        return <Form8 />
      default:
        return <Form1 />

    }

  }

  return (
    <>
      <Grid container columnGap={1} rowGap={1} style={{color: "white" }}>
        {fields.map((field, i)=>{
          return(
            <Typography onClick={()=>setFormNo(i+1)}
            style={{
              cursor:"pointer",
              padding: 10,
              borderRadius: "5px 5px 0 0",
              backgroundColor:  formNo === i+1 ? "green": `${colorBlue}`,
              textAlign: "center",
              fontSize: "15px",
              minWidth: "129px"
            }}  
          >
            {field}
          </Typography>
          )
        })}
        </Grid>
      <ShowForm />
      
    </>
  );
};
export default AddEmployee;
