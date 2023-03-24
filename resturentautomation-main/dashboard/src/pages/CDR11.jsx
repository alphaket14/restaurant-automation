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
  TextField
} from "@material-ui/core";

const transfers = [];

const ariaLabel = { 'aria-label': 'description' };

const ingredients = [
  {name:"Jeera 100g",ingredient_id:"ABC123",price:240},
  {name:"Dhaniya 100g",ingredient_id:"ABC124",price:240},
  {name:"Elaichi 100g",ingredient_id:"ABC125",price:240}
]

const CDR= () => {
  const [supplierOption,setSupplierOption] = useState("Select Supplier");
  const [openAddTransfer,setOpenAddTransfer] = useState(false);
  const [selectedIngredients,setSelectedIngredients] = useState([]);

  const handleCloseAddTransfer=()=>{
    setOpenAddTransfer(false)
  }

  const handleChangeSupplierOption=(e)=>{
    setSupplierOption(e.target.value)
  }

  const handleAddIngredient=(ingredientid)=>{
    
    let found = ingredients.find((ing)=> ing.ingredient_id===ingredientid)
  //   let foundSelected = selectedIngredients.find((elem)=>elem.name==found.name && elem.price===found.price)

  //   if(foundSelected)
  //     {
  //       let foundIndex = selectedIngredients.findIndex(found)
  //       selectedIngredients.splice(foundIndex,1)
  //       let newIngredient = {name:foundSelected.name,quantity:(foundSelected.quantity+1),price:foundSelected.price, total: ((foundSelected.quantity+1)*foundSelected.price)}
  //       setSelectedIngredients([...selectedIngredients,newIngredient])
  //     }
  //     else
  //  { 
     let newSelectedIngredients = [...selectedIngredients,{name:found.name,quantity:1,price:found.price,total: found.price}]
    setSelectedIngredients(newSelectedIngredients)
  // }
  }
  
  return (
  <>
    <Helmet>
      <title>Customers | Client Portal</title>
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
            Customer Due Payments
          </Typography>
          <div>
          <Button style={{margin:"10px"}} type="text" onClick={()=>setOpenAddTransfer(true)}>
            Add Due Payment
          </Button>
          <Button style={{margin:"10px"}} variant="contained" onClick={()=>setOpenAddTransfer(true)}>
            Export
          </Button>
          </div>

          <Dialog open={openAddTransfer} onClose={handleCloseAddTransfer}>
                <DialogTitle>Add expense</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                  Adding a order manually will not trigger any notifications or payments. 
                  To add a paid order you can create a new invoice and mark it as paid. 
                  </DialogContentText>
                  
                  <Input disabled defaultValue="Reference no." inputProps={ariaLabel} style={{width:"95%",margin:"10px"}} />

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
                      // onChange={handleChangeSupplierOption}
                    >
                     {ingredients.map((ing,index)=>{
                      return (<MenuItem value={ing.ingredient_id} onClick={()=>handleAddIngredient(ing.ingredient_id)}>{ing.name}</MenuItem>)
                    })}
                    </Select>
                  </FormControl>

                  {selectedIngredients.map((elem)=>{
                      <h4>{elem.name}</h4>
                  })}
                
                <div style={{display:"flex", justifyContent:"center"}}>

                <div style={{display:"flex", flexDirection:"column", justifyContent:"center", width:"94%"}}>
                <Input disabled defaultValue="Grand Total" inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                <Input disabled defaultValue="Paid" inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                <Input disabled defaultValue="Due" inputProps={ariaLabel} style={{width:"92%",margin:"10px"}} />
                </div>
                
                </div>

                </DialogContent>


                <DialogActions>
                  <Button onClick={handleCloseAddTransfer}>Cancel</Button>
                  <Button onClick={handleCloseAddTransfer}>Add</Button>
                </DialogActions>


              </Dialog>


        </div>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>SUBJECT</TableCell>
                <TableCell>DATE</TableCell>
                <TableCell align="right">STATUS</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {transfers.length > 0 ? (
                transfers?.map((transfer) => (
                  <TableRow hover key={transfer.id}>
                    <TableCell style={{ color: "blue" }}>
                      {transfer.ref}
                    </TableCell>
                    <TableCell>{transfer.customer.name}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))
              ) : (
                <Typography variant="subtitle2" sx={{ p: 2 }}>
                  No due payments...
                </Typography>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  </>
);}

export default CDR;
