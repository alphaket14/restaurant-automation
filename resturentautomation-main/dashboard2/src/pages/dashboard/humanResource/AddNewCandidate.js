import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";
import { Input, 
        TextField, 
        Select, 
        MenuItem, 
        Grid, 
        Button, 
        IconButton, 
        Checkbox,
        Autocomplete,
        ListItemText,
        FormGroup,
        FormControlLabel } from "@material-ui/core";
import { useDropzone } from "react-dropzone";
import { blue } from '@mui/material/colors';
import { useSearchParams } from "react-router-dom";
import { DatePicker } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { useNavigate } from "react-router-dom";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const colorBlue = blue[900];
const createData = (firstname, lastname, name, email, phone, address, city, state, country, pincode, address1, city1, state1, country1, pincode1, masters, degree, high_second, school, pastexp, department, designation) => {
  return { firstname, lastname, name, email, phone, address, city, state, country, pincode, address1, city1, state1, country1, pincode1, masters, degree, high_second, school, pastexp, department, designation};
};
const createData1 = (name) => {
  return {name};
}
const createData2 = (department) => {
  return {department};
}
const createData3 = (companyname, position, from, to) => {
  return {companyname, position, from, to};
}
const AddNewCandidate = (props) => {
  const [formNo, setFormNo] =  useState(1);
  const [buttondisable, setbuttondisable] = useState(true)
  const fields = ["Basic Information", "Educational Information","Past Experience", "Job Position"];


  const Form1 = () =>{
    const [picture, setPicture] = useState();
    const [add1, setAdd1] = useState("");
    const [city1, setCity1] = useState("");
    const [state1, setState1] = useState("");
    const [country1, setCountry1] = useState("");
    const [pincode1, setPincode1] = useState();
    const [add2, setAdd2] = useState("");
    const [city2, setCity2] = useState("");
    const [state2, setState2] = useState("");
    const [country2, setCountry2] = useState("");
    const [pincode2, setPincode2] = useState();
    const [pagetype, setpagetype] = useState(0);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [index, setindex] = useState();
    const [phone, setphone] = useState("");
    const onDropFavicon = useCallback((acceptedFiles) => {
      console.log(acceptedFiles);
      setPicture(acceptedFiles[0]);
    });
    const [perma, setPerma] = useState(false);
    const handleChange = () =>{
      setPerma((prev) => !prev)
      if({...perma}){
        setAdd2(add1);
        setCity2(city1);
        setState2(state1);
        setCountry2(country1);
        setPincode2(pincode1);
      }
    }
    const { getRootProps, getInputProps, isDragAccept, isDragReject } = useDropzone({
      onDrop: onDropFavicon,
      multiple: false,
      accept: "image/jpg,image/jpeg,image/png"
    });
    const [rows, setRows] = useState();
    const [rowsid, setRowsid] = useState();
    const [SearchParams, setSearchParams] = useSearchParams();
    const [rowsid1, setRowsid1] = useState(SearchParams.get('id'));
    const editpage = () => {
      setRowsid1(SearchParams.get('id'))
      console.log(1)
      setpagetype(1)
      setbuttondisable(false)
    }
    const addpage = () => {
      setRowsid1(0)
      console.log(0)
      setpagetype(0)
    }
    const navigate = useNavigate();
    useEffect(() => {
      {
        SearchParams.get('id') ? 
        editpage()
        :
        addpage()
      }
      const fetchdata = async () => {
        const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
        console.log("categories:", data)
        console.log("rowsid1", rowsid1)
        setRowsid(data.data[0]._id);
        setRows(data.data[0].rows);
        let newRows = data.data[0].rows.map((row) => row);
        newRows.map((row, id) => {
          if(row._id === rowsid1){
            setfirstname(row.firstname)
            setlastname(row.lastname)
            setemail(row.email)
            setphone(row.phone)
            setAdd1(row.address)
            setCity1(row.city)
            setState1(row.state)
            setCountry1(row.country)
            setPincode1(row.pincode)
            setAdd2(row.address1)
            setCity2(row.city1)
            setState2(row.state1)
            setCountry2(row.country1)
            setPincode2(row.pincode1)
            setindex(id)
          }
        })
        console.log(newRows)
        //console.log(rowsid); working correctly
      };
      fetchdata();
    },[]);
    const addPosition = () => {
      var newRows1 = []
      newRows1.push("")
      const name = firstname + " " + lastname;
      const newPosition = createData(firstname, lastname, name, email, phone, add1, city1, state1, country1, pincode1, add2, city2, state2, country2, pincode2, "", "", "", "", createData3("", "", null, null), newRows1, newRows1);
      var newRows = [...rows, newPosition]
      axios.post('https://doubtful-tuna-leotard.cyclic.app/candidate/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      const fetchdata = async () => {
        const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
        let newRows = data.data[0].rows.map((row) => row);
        let length1 = newRows.length 
        setbuttondisable(false)
        navigate(`/dashboard/humanresource/recruitment/addnewcandidate/?id=${newRows[length1-1]._id}`)
      }
      fetchdata()
    };
    const editPosition = () => {
      let newRows = rows.map((row) => row);
      newRows[index].firstname = firstname;
      newRows[index].lastname = lastname;
      newRows[index].name = firstname + " " + lastname;
      newRows[index].email = email;
      newRows[index].phone = phone;
      newRows[index].address = add1;
      newRows[index].city = city1;
      newRows[index].state = state1;
      newRows[index].country = country1;
      newRows[index].pincode = pincode1;
      newRows[index].address1 = add2;
      newRows[index].city1 = city2;
      newRows[index].state1 = state2;
      newRows[index].country1 = country2;
      newRows[index].pincode1 = pincode2;
      axios.post('https://doubtful-tuna-leotard.cyclic.app/candidate/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
    }
    const handlesubmit = () => {
      if(pagetype){
        console.log("abhi edit hoga")
        editPosition()
      }
      else{
        addPosition()
      }
      setFormNo(prev=> prev+1)
    }
    const reset = () => {
      setfirstname("")
      setlastname("")
      setemail("")
      setphone("")
      setAdd1("")
      setCity1("")
      setState1("")
      setCountry1("")
      setPincode1("")
      setAdd2("")
      setCity2("")
      setState2("")
      setCountry2("")
      setPincode2("")
    }
    return (
    <form>
    <Grid
        container
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 700,
        float: "left",
        margin: "20px 0px",
        
        }}
      >
        <Grid item container spacing={3} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              First Name* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
                value={firstname}
                onChange={(e) => setfirstname(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Last Name :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
                value={lastname}
                onChange={(e) => setlastname(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Email Address* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Phone* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4} >
              Present Address* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                multiline = "true" 
                minRows= {4}
                value={add1}
                //sx={{width: "250px"}}
                onChange={e => setAdd1(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              City* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField 
                fullWidth 
                size="small" 
                type="text" 
                //sx={{width: "250px"}}
                value={city1}
                onChange={e => setCity1(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              State* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                //sx={{width: "250px"}}
                value={state1}
                onChange={e => setState1(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Country* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={country1}
                //sx={{width: "250px"}}
                onChange={e => setCountry1(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Pin Code* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={pincode1}
                //sx={{width: "250px"}}
                onChange={e => setPincode1(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={2} xs={10}>
            <hr color="grey" style={{minWidth:"670px", maxHeight:"2px", marginTop:"10px", maxWidth:"1800px"}}/>
          </Grid>
          <Grid item container >
            <Grid item align="right" alignSelf="center" xs={4} >
              Same as Present Address
            </Grid>
            <Grid item style={{ alignSelf: "center"/*, marginTop:"30px", marginLeft:"10px"*/}} xs={7}>
              <Checkbox checked={perma} onChange={handleChange} name="perma"/>
              {/*<FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={perma} onChange={handleChange} name="perma" />
                  }
                  label="Gilad Gray"
                />
              </FormGroup>*/}
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4} >
              Permanent Address* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                multiline = "true" 
                minRows= {4}
                //sx={{width: "250px"}}
                value={add2}
                onChange={e => setAdd2(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              City* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={city2}
                //sx={{width: "250px"}}
                onChange={e => setCity2(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              State* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={state2}
                //sx={{width: "250px"}}
                onChange={e => setState2(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Country* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={country2}
                //sx={{width: "250px"}}
                onChange={e => setCountry2(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5} style={{marginBottom:"55px"}}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Pin Code* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <TextField 
                fullWidth 
                size="small" 
                type="text" 
                value={pincode2}
                //sx={{width: "250px"}}
                onChange={e => setPincode2(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item container xs={11} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item container justifyContent="flex-end" columnGap={2}>
              <Button onClick={reset} variant="contained">Reset</Button>
              <Button onClick={handlesubmit} variant="contained">Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
      )
  }

  const Form2 = () =>{
    const [master, setmaster] = useState("");
    const [degree, setdegree] = useState("");
    const [hisec, sethisec] = useState("");
    const [school, setschool] = useState("");
    const [rows, setRows] = useState();
    const [rowsid, setRowsid] = useState();
    const [index, setindex] = useState();
    const [SearchParams, setSearchParams] = useSearchParams();
    const [rowsid1, setRowsid1] = useState(SearchParams.get('id'));
    const [pagetype, setpagetype] = useState(0);
    const editpage = () => {
      setRowsid1(SearchParams.get('id'))
      console.log(1)
      setpagetype(1)
    }
    const addpage = () => {
      setRowsid1(0)
      console.log(0)
      setpagetype(0)
    }
    useEffect(() => {
      {
        SearchParams.get('id') ?
        editpage()
        :
        addpage()
      }
      const fetchdata = async () => {
        const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
        console.log("categories:",data)
        console.log("rowsid1", rowsid1)
        setRows(data.data[0].rows);
        setRowsid(data.data[0]._id);
        let newRows = data.data[0].rows.map((row) => row);
        newRows.map((row, id) => {
          if(row._id === rowsid1){
            setmaster(row.masters)
            setdegree(row.degree)
            sethisec(row.high_second)
            setschool(row.school)
            setindex(id)
          }
        })
        console.log(newRows)
        //console.log(rowsid); working correctly
      };
      fetchdata();
    },[]);
    const reset = () => {
      setmaster("")
      setdegree("")
      sethisec("")
      setschool("")
    }
    const addPosition = () => {
      let newRows = rows.map((row) => row);
      newRows[index].masters = master;
      newRows[index].degree = degree;
      newRows[index].high_second = hisec;
      newRows[index].school = school;
      axios.post('https://doubtful-tuna-leotard.cyclic.app/candidate/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      console.log(newRows)
      //console.log(inputValue)
      setFormNo(prev => prev+1)
    }
    return(
      <form>
      <Grid
        container
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 700,
        float: "left",
        margin: "20px 0px",
        
        }}
      >
        <Grid item container spacing={3} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Master's Degree :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
              value={master}
              onChange={e => setmaster(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Degree :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
              value={degree}
              onChange={e => setdegree(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Higher Secondary :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
                value={hisec}
                onChange={e => sethisec(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5} style={{marginBottom:"55px"}}>
            <Grid item align="right" alignSelf="center" xs={4}>
              School :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
              value={school}
              onChange={e => setschool(e.target.value)}
              />
            </Grid>
          </Grid>

          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item container justifyContent="flex-end" columnGap={2}>
              <Button onClick={reset} variant="contained">Reset</Button>
              <Button onClick={()=> setFormNo(prev => prev-1)} variant="outlined">Previous</Button>
              <Button onClick={addPosition} variant="contained">Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
    )
  }

  const Form3 = () =>{
    const createData = (Srno) => {
      return { Srno };
    };
    const data = [
      createData(1)
    ];
    const [startDate,SetStartDate] = useState(null);
    const [endDate,SetEndDate] = useState(null);
    const [company, setcompany] = useState("");
    const [position, setposition] = useState("");
    const [rows, setRows] = useState(data);
    const [rows1, setRows1] = useState([]);
    const [rows2, setRows2] = useState([]);
    const [rowsid, setRowsid] = useState();
    const [SearchParams, setSearchParams] = useSearchParams();
    const [rowsid1, setRowsid1] = useState(SearchParams.get('id'));
    useEffect(() => {
      {
        SearchParams.get('id') ?
        setRowsid1(SearchParams.get('id'))
        :
        setRowsid1(0)
      }
      const fetchdata = async () => {
        const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
        console.log("categories:",data)
        console.log("rowsid1", rowsid1)
        setRows1(data.data[0].rows);
        setRowsid(data.data[0]._id);
        let newRows = data.data[0].rows.map((row) => row);
        newRows.map((row) => {
          if(row._id === rowsid1){
            setRows(row.pastexp)
            console.log(row.pastexp)
          }
        })
        console.log(newRows)
        //console.log(rowsid); working correctly
      };
      fetchdata();
    },[]);
    const addPosition = () =>{
      const newPosition = createData(rows.length+1)
      setRows(prev => [...prev,newPosition])
    }
    const deletePosition = (index) =>{
      if(window.confirm("Are you sure you want to delete this item?")){
        let newRows = rows.filter((row,i) =>{
          return index !== i;
        })
        setRows(newRows)
      }
  
    }
    const reset = () => {
      setcompany("")
      setposition("")
      SetStartDate(null)
      SetEndDate(null)
    }
    return(
      <form>
      <Grid
        container
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 1000,
        float: "left",
        margin: "20px 0px",
        
        }}
      >
          <Grid item container xs={12} spacing={1} style={{ justifyContent: "right" , marginRight:"70px", marginBottom:"45px"}}>
            <Grid item container justifyContent="flex-end" columnGap={2}>
              <Button variant="contained" onClick={addPosition}>Add</Button>
            </Grid>
          </Grid>
        <Grid item container spacing={3} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          {rows.map((row, id) =>{
            return(
              <>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Company Name :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
              value={company}
              onChange={e => setcompany(e.target.value)}
              />
            </Grid>
            <Grid item align="left" alignSelf="center" xs={2}>
              <IconButton onClick={()=>deletePosition(id)}>
                <DeleteIcon color="error"/>
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Job Title :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
              <TextField fullWidth size="small" type="text" 
              value={position}
              onChange={e => setposition(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5} style={{marginBottom:"55px"}}>
            <Grid item align="right" alignSelf="center" xs={3}>
              Working Period :
            </Grid>
            <Grid item align="right" alignSelf="center" >
              From:
            </Grid>
            <Grid item >
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={endDate}
              onChange={(newValue) => {
              SetEndDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                sx={{maxWidth: "163px"}} size="small" helperText={null}/>
              )}
            />
            </Grid>
            <Grid item align="right" alignSelf="center" style={{marginLeft:"10px"}}>
              To:
            </Grid>
            <Grid item >
            <DatePicker
              inputFormat="dd/MM/yyyy"
              value={startDate}
              onChange={(newValue) => {
              SetStartDate(newValue);
              }}
              renderInput={(params) => (
                <TextField 
                {...params}
                sx={{maxWidth: "163px"}} size="small" helperText={null}/>
              )}
            />
            </Grid>
          </Grid>
              </>
            )})
          }
          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right" }}>
            <Grid item container justifyContent="flex-end" columnGap={2}>
              <Button onClick={reset} variant="contained">Reset</Button>
              <Button onClick={()=> setFormNo(prev => prev-1)} variant="outlined">Previous</Button>
              <Button onClick={()=> setFormNo(prev=> prev+1)} variant="contained">Next</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
    )
  }
  const Form4 = () =>{
    const createData = (name) => {
      return {name};
    }
    const createData1 = (department) => {
      return {department};
    }
    const [department, setdepartment] = useState("");
    const [department1, setdepartment1] = useState(createData1(""));
    const [department2, setdepartment2] = useState([]);
    const [designation, setdesignation] = useState("");
    const [designation1, setdesignation1] = useState(createData(""));
    const [designation2, setdesignation2] = useState([]);
    const [rows, setRows] = useState();
    const [rowsid, setRowsid] = useState();
    const [SearchParams, setSearchParams] = useSearchParams();
    const [rowsid1, setRowsid1] = useState(SearchParams.get('id'));
    useEffect(() => {
      {
        SearchParams.get('id') ?
        setRowsid1(SearchParams.get('id'))
        :
        setRowsid1(0)
      }
      const fetchdata = async () => {
        const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
        const data2 = await axios.get('https://doubtful-tuna-leotard.cyclic.app/new-job/')
        console.log("categories:",data2)
        setdepartment2(data2.data[0].rows);
        console.log("categories:",data)
        setRows(data.data[0].rows);
        setRowsid(data.data[0]._id);
        let newRows = data.data[0].rows.map((row) => row);
        newRows.map((row) => {
          if(row._id === rowsid1){
            setdepartment1(createData1(row.department[0]))
            setdesignation1(createData(row.designation[0]))
            console.log("dept", createData1(row.department[0]))
            console.log("desig", createData(row.department[0]))
            //setRows2(row.pastexp)
            //console.log(row.pastexp)
          }
        })
        //console.log(rowsid); working correctly
      };
      fetchdata();
    },[]);
    const editPosition = () => {
      let newRows2 = []
      let newRows3 = []
      newRows2.push(department)
      newRows3.push(designation)
      let newRows = rows.map((row) => row);
      newRows[rows.length-1].department = newRows2;
      newRows[rows.length-1].designation = newRows3;
      axios.post('https://doubtful-tuna-leotard.cyclic.app/candidate/update/'+rowsid, {
        rows: newRows,
      })
      .then(res => console.log(res.data))
      .catch((error) => {console.log(error);})
      console.log(newRows)
      //console.log(inputValue)
      setFormNo(1)
    };
  const handle_dept = (id) => {
    console.log("id", id)
    setdepartment(id)
    let dept = id[0]
    let newRows = []
    department2.map((row, id2) => {
      if(row.department[0] === dept){
        newRows.push(createData(row.position))
      }
    });
    console.log("newRows", newRows)
    setdesignation2(newRows)
  }
  const handle_desig = (id) => {
    console.log(id)
    setdesignation(id)
  }
  const reset = () => {
    setdepartment1(createData1(""))
    setdesignation1(createData(""))
  }
    return(
      <form>
      <Grid
        container
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 700,
        float: "left",
        margin: "20px 0px",
        
        }}
      >
        <Grid item container spacing={3} style={{ boxSizing: "border-box", padding: "20px 0" }}>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Department* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <Autocomplete
                //multiple
                value={department1}
                onChange={(event, newValue) => {
                  setdepartment1(newValue);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                options={department2}
                sx={{width: "300px"}}
                disableCloseOnSelect
                getOptionLabel={(option) => option.department}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                      onClick={() => handle_dept(option.department)}
                    />
                    {option.department}
                  </li>
                )}
                //style={{ width: 500 }}
                renderInput={(params) => (
                  <TextField {...params} label="Department" placeholder="Search" />
                )}
              />
            </Grid>
          </Grid>
          <Grid item container spacing={5}>
            <Grid item align="right" alignSelf="center" xs={4}>
              Designation* :
            </Grid>
            <Grid item style={{ alignSelf: "center" }} xs={7}>
            <Autocomplete
                //multiple
                value={designation1}
                onChange={(event, newValue) => {
                  setdesignation1(newValue);
                }}
                size="small"
                fullWidth 
                id="checkboxes-tags-demo"
                sx={{width: "300px"}}
                options={designation2}
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
          <Grid item container xs={10} spacing={1} style={{ justifyContent: "right", marginTop:"20px"}}>
            <Grid item container justifyContent="flex-end" columnGap={2}>
              <Button onClick={reset} variant="contained">Reset</Button>
              <Button onClick={()=> setFormNo(prev => prev-1)} variant="outlined">Previous</Button>
              <Button onClick={editPosition} variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </form>
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
      default:
        return <Form1 />

    }
  }

  return (
    <>
        <Grid container columnGap={1} rowGap={1} >
          {fields.map((field, i)=>{
          return(
            <Button  onClick={()=>setFormNo(i+1)}
              style={{
              cursor:"pointer",
              padding: 10,
              borderRadius: "5px 5px 0 0",
              color: "white",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor:  formNo === i+1 ? "green": `${colorBlue}`
            }}  
            disabled={buttondisable}
          >
            {field}
          </Button>
          )
        })}     
      </Grid>
      <ShowForm />
    </>
  );
};


export default AddNewCandidate;
