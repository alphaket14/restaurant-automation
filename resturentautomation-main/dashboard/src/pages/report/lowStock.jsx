import {useState} from "react";
import { Helmet } from "react-helmet";
import {
  Box,
  Container,
  Paper,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Input,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,IconButton,
  Autocomplete
} from "@material-ui/core";

import {MaterialTable} from "@material-ui/utils"

import Close from "@material-ui/icons/Close"



const ariaLabel = { 'aria-label': 'description' };

const ingredients = [
  {name:"Jeera 100g",ingredient_id:"ABC123",price:240.00},
  {name:"Dhaniya 100g",ingredient_id:"ABC124",price:240.00},
  {name:"Elaichi 100g",ingredient_id:"ABC125",price:240.00}
]

const LowStockReport = () => {
  const [refno,setRefno] = useState(1)
  const [supplierOption,setSupplierOption] = useState("Select Supplier");
  const [openAddCDR,setOpenAddCDR] = useState(false);
  const [selectedIngredients,setSelectedIngredients] = useState([])
  const [grandTotal,setGrandTotal] = useState(0.00)
  const [CDR, setCDR] = useState([]);
  const [paidAlready,setPaidAlready ] = useState(0.00)

  const handleCloseAddCDR= ()=>{
    setOpenAddCDR(false)
  }
  
  const handleAddCDR=(ref_no,supplier,ingredients_list, total_price, paid_price, due_price)=>{
    let newCDR = [...CDR,{ref_no: ref_no,supplier: supplier,ingredients_list: ingredients_list,total_price: total_price, paid_price: paid_price, due_price: due_price}]
    setCDR(newCDR)
    setOpenAddCDR(false)
    setSupplierOption("Select Supplier")
    setPaidAlready(0.00)
    setGrandTotal(0.00)
    setSelectedIngredients([])
  }

  const handleChangeSupplierOption=(e)=>{
    setSupplierOption(e.target.value)
  }

  const handleChangeIngredient=(index,e,price)=>{
    let newFormValues = [...selectedIngredients];
    let tempq=newFormValues[index]["quantity"]
    newFormValues[index]["quantity"] = e.target.value;
    let temp=grandTotal
    newFormValues[index]["total"] = ((e.target.value)*price);
    setGrandTotal(temp+((e.target.value-tempq)*price))
    console.log("Total: ",newFormValues)
    setSelectedIngredients(newFormValues);

  }

  const addFormFields=(name,price)=>{
    setSelectedIngredients([...selectedIngredients,{name:name, quantity:1,price:price, total: price}]);
  }
  const removeFormFields=(index)=>{
    let newFormValues = [...selectedIngredients];
    newFormValues.splice(index,1);
    setSelectedIngredients(newFormValues);
  }






    const csvString = [
      [
        "Reference No.",
        "Supplier",
        "Total Price",
        "Paid Amount",
        "Due Amount"
      ],
      ...CDR.map(item => [
        item.ref_no,
        item.supplier,
        item.total_price,
        item.paid_price,
        item.due_price
      ])
    ] .map(e => e.join(",")) 
    .join("\n");


  let csvContent = "data:text/csv;charset=utf-8," 
    + csvString;

    var encodedUri = encodeURI(csvContent);


  
  return (
  <>
    <Helmet>
      <title>Low Stock Report | Client Portal</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        padding: "30px",
      }}
    >
      <Container maxWidth={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h4" sx={{ my: "20px" }}>
            Low Stock Report
          </Typography>

          <div style={{display:"flex", flexDirection:"row"}}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={ingredients}
           style={{margin:"20px", width:"250px"}}
           getOptionLabel={(opt)=>opt.name}
          renderInput={(params) => <TextField {...params} label="Search" variant="standard"/>}
          />
          <Button type="text" style={{margin:"20px"}} size="large" onClick={()=>{window.open(encodedUri)}}>
            Export
          </Button>
          <Button style={{margin:"20px"}} size="large" variant="contained" onClick={()=>{setRefno(CDR.length+1);setOpenAddCDR(true)}}>
            Add Low Stock Alert
          </Button>

          </div>

          <Dialog open={openAddCDR} onClose={handleCloseAddCDR}>
                <DialogTitle>Add Low Stock Alert</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Adding a low stock alert manually will not trigger any notifications or payments. 
                  To add a paid order you can create a new invoice and mark it as paid. 
                  </DialogContentText>
                  
                  <Input disabled value={refno} defaultValue="Reference no." inputProps={ariaLabel} style={{width:"95%",margin:"10px"}} />

                  <div style={{display:"flex",flexWrap:"wrap"}}>

                  <FormControl fullWidth style={{flex:0.45, margin:"20px"}}>
                    <InputLabel id="demo-simple-select-label">Supplier Options</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={supplierOption}
                      label="Supplier Option"
                      onChange={handleChangeSupplierOption}
                    >
                      <MenuItem value="Ten">Ten</MenuItem>
                      <MenuItem value="Twenty">Twenty</MenuItem>
                      <MenuItem value="Thirty">Thirty</MenuItem>
                    </Select>
                  </FormControl>

                  <TextField style={{flex:"0.45", minWidth:"200px", margin:"20px"}} type="date" variant="outlined" color="primary"/>
                 
                  </div>


                  <FormControl style={{ margin:"20px", width:"92%"}}>
                    <InputLabel id="demo-simple-select-label">Ingredients</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value="Select Ingredient"
                      label="Ingredient"
                      //onChange={handleChangeSupplierOption}
                    >
                     {ingredients.map((ing,index)=>{
                      return (<MenuItem value={ing.ingredient_id} 
                        onClick={()=>{setGrandTotal(grandTotal+ing.price);addFormFields(ing.name,ing.price)}}
                      >{ing.name}</MenuItem>)
                    })}
                    </Select>
                  </FormControl>
                  
                  <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
                  
                  {selectedIngredients.map((elem,index)=>{
                      return (
                        <div style={{display:"flex", justifyContent:"center", margin:"10px"}}>
                           <TextField  style={{margin:"10px", flex:"0.45"}}
                              id="outlined-read-only-input"
                              label="Ingredient"
                              defaultValue={elem.name}
                              InputProps={{
                                readOnly: true,
                              }}
                            />
                            <TextField style={{margin:"10px",flex:"0.25"}}
                              id="outlined-number"
                              label="Number"
                              type="number"
                              defaultValue={elem.quantity}
                              InputLabelProps={{
                                shrink: true,
                              }}
                              onChange={(e)=>handleChangeIngredient(index,e,elem.price)}
                            />
                            <TextField
                            style={{margin:"10px",flex:"0.25"}}
                              id="outlined-read-only-input"
                              label="Total"
                              value={elem.total}
                              defaultValue={elem.total}
                              InputProps={{
                                readOnly: false,
                              }}
                            />

                              <IconButton style={{margin:"10px"}} onClick={()=>{setGrandTotal(grandTotal-elem.total);removeFormFields(index)}}>
                                <Close/>
                              </IconButton>
                              


                        </div>
                      )
                  })}
                  </div>
                
                <div style={{display:"flex", justifyContent:"center"}}>

                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"94%"}}>
                  
                <Input disabled value={`Grand Total: ${grandTotal}`}
                //  defaultValue="Grand Total" 
                 inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                <Input value={`Paid: ${paidAlready}`} disabled defaultValue="Paid" inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                <Input value={`Due: ${grandTotal-paidAlready}`} disabled defaultValue="Due" inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                </div>
                
                </div>

                </DialogContent>


                <DialogActions>
                  <Button onClick={handleCloseAddCDR}>Cancel</Button>
                  <Button onClick={()=>handleAddCDR(CDR.length+1,supplierOption,selectedIngredients,grandTotal,paidAlready,(grandTotal-paidAlready))}>Add</Button>
                </DialogActions>


              </Dialog>


        </div>
        <Paper>



          <Table>
            <TableHead>
              <TableRow>
                <TableCell>REF. NO</TableCell>
                <TableCell>SUPPLIER</TableCell>
                <TableCell align="right">TOTAL</TableCell>
                <TableCell align="right">PAID</TableCell>
                <TableCell align="right">DUE</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {CDR.length > 0 ? (
                CDR?.map((CDR) => (
                  <TableRow hover key={CDR.ref_no}>
                    <TableCell style={{  }}>
                      {CDR.ref_no}
                    </TableCell>
                    
                    <TableCell>{CDR.supplier}</TableCell>
                    <TableCell  align="right" >{CDR.total_price}</TableCell>
                    <TableCell  align="right">{CDR.paid_price}</TableCell>
                    <TableCell  align="right">{CDR.total_price - CDR.paid_price}</TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography variant="subtitle2" sx={{ p: 2 }}>
                  No low stock alerts...
                </Typography>
              )}
            </TableBody>
          </Table>
        </Paper>


        
      </Container>
    </Box>
  </>
);}

export default LowStockReport;
