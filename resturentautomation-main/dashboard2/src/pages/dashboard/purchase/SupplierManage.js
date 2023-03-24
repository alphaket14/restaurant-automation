import React, {useState} from "react";
import {
  Button,
  Grid,
  TextField,
  Checkbox,
  Box,
  Autocomplete
} from "@material-ui/core";
import { DatePicker } from "@material-ui/lab";
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { blue } from '@mui/material/colors';
import Scrollbar from "../../../components/Scrollbar";
import { ObjectFlags } from "typescript";
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
const SupplierManage = (props) => {
  const [payDate,SetPayDate] = useState(new Date());
  const [formNo, setFormNo] =  useState(1);
  const fields = ["Basic Information", "Contact Details", "Bank Details"];
  const states=[];
  const colorBlue = blue[900];
  const Form1 = ()=>{
    return (
      <>
      <Grid container 
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
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Supplier Code" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Supplier Name" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="GST No" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Credit Period" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Ingredient Category" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Ingredient Item" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Ingredient Price/Unit" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Ingredient Units" />
        </Grid>
        <Grid item xs={6}>
          <DatePicker
            value={payDate}
            inputFormat="dd/MM/yyyy"
            onChange={(newValue) => {
              SetPayDate(newValue);
            }}
            renderInput={(params) => (
              <TextField 
                {...params}
                fullWidth size="small" helperText={null}/>
              )}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Currency" />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "left" , marginTop:"60px"}}>
        <Button  variant="contained" size="small" sx={{ marginRight: 5 }}>
          Cancel
        </Button>
        <Button variant="outlined" size="small" sx={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button variant="contained">Save</Button>
      </Box>
    </>
    );
  }
  const Form2 = ()=>{
    return (
      <>
      <Grid container 
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 1000,
        float: "left",
        margin: "20px 0px",
        marginTop: "10px"
        }}
      >
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Contact Person" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Mobile No 1" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Mobile No 2" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Mobile No 3" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="Landline No" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="email" fullWidth label="Email ID" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" multiline minRows={4} fullWidth label="Address" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="number" fullWidth label="PIN code" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="City" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="State" />
        </Grid>
        <Grid item xs={6}>
          <TextField size="small" type="text" fullWidth label="Country" />
        </Grid>
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "left" , marginTop:"60px"}}>
        <Button  variant="contained" size="small" sx={{ marginRight: 5 }}>
          Cancel
        </Button>
        <Button variant="outlined" size="small" sx={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button variant="contained">Save</Button>
      </Box>
    </>
    );
  }
  var delid;
  const Form3 = ()=>{
    const createData = (sno) =>{
      return {sno};
    }
    const data = [createData(0)]
    const [rows, setRows] = useState(data);
    const addPosition = () => {
      const newlen = rows.length;
      const obj = createData(newlen)
      setRows((prev) => [...prev, obj]);
    }
    const deletePosition = (index) => {
      //const index = rows.length-1
      let newRows = rows.filter((row, i) => {
        return index !== i;
      });
      setRows(newRows);
    }
    return (
      <>
      <Grid container 
        spacing={3}
        style={{
        borderRadius: 5,
        border: "1px solid grey",
        boxSizing: "border-box",
        padding: "20px 20px",
        width: 1000,
        float: "left",
        margin: "20px 0px",
        marginTop: "10px"
        }}
      >
      <Grid item xs={12}>
        <Button
          variant="contained"
          sx={{float:"right"}}
          onClick={addPosition}
        >
          Add Account
        </Button>
      </Grid>
      {rows.map((row, id) => {
        delid = id;
        return(
          <>
            <Checkbox sx={{marginBottom:"400px"}}/>
            <Grid container
              spacing={3}
              style={{
                borderRadius: 5,
                border: "1px solid grey",
                boxSizing: "border-box",
                padding: "20px 20px",
                margin: "20px 0px",
                width: 900,
                float: "right"
              }}
            >
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Account Holder Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Account Number" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Confirm Account Number" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="IFSC Code" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Bank Name" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Branch Location" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" multiline minRows={4} fullWidth label="Address" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="City" />
            </Grid>
            <Grid item xs={6}>
            <Autocomplete
                size="small"
                fullWidth
                id="checkboxes-tags-demo"
                options={states}
                disableCloseOnSelect
                getOptionLabel={(option) => option.unitName}
                renderOption={(props, option, { selected }) => (
                  <li {...props}>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.unitName}
                  </li>
                )}
                renderInput={(params) => (
                  <TextField {...params} label="State" placeholder="Search" />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Country" />
            </Grid>
            <Grid item xs={6}>
              <TextField size="small" type="text" fullWidth label="Pin Code" />
            </Grid>
          </Grid>
          </>
        )
      })}
      </Grid>
      <Box sx={{ width: "100%", display: "flex", justifyContent: "left" , marginTop:"60px"}}>
        <Button onClick={() => deletePosition(delid)} variant="contained" size="small" sx={{ marginRight: 5 }}>
          Delete
        </Button>
        <Button  variant="contained" size="small" sx={{ marginRight: 5 }}>
          Cancel
        </Button>
        <Button variant="outlined" size="small" sx={{ marginRight: 5 }}>
          Reset
        </Button>
        <Button variant="contained">Save</Button>
      </Box>
      </>
    );
  }
  const ShowForm = ()=>{
    switch(formNo){
      case 1:
        return <Form1 />
      case 2:
        return <Form2 />
      case 3:
        return <Form3 />
      default:
        return <Form1 />
    }
  }
  return (
    <>
        <Grid container columnGap={1} rowGap={1} 
          style={{
            color: "white",
            //width: 1200,
            //float: "right",
            //marginLeft: "45px",
            float: "left",
            
          }}
        >
          {fields.map((field, i)=>{
            return(
              <Grid item onClick={()=>setFormNo(i+1)}
              style={{
                cursor:"pointer",
                padding: 10,
                borderRadius: "5px 5px 0 0",
                backgroundColor:  formNo === i+1 ? "green": `${colorBlue}`,
                textAlign: "center",
                minWidth: "129px"
              }}
            >
              {field}
            </Grid>
            )
          })}
        </Grid>
      <ShowForm />
      
    </>
  );
};
export default SupplierManage;
