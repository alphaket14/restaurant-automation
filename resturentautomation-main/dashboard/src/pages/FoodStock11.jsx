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
  OutlinedInput,
  Checkbox,
  TextField,
  Menu,
  ListItemText
} from "@material-ui/core";
import FilterAlt from "@material-ui/icons/FilterAlt";

const transfers = [];

const ariaLabel = { 'aria-label': 'description' };

const ingredients = [
  {name:"Jeera 100g",ingredient_id:"ABC123",price:240},
  {name:"Dhaniya 100g",ingredient_id:"ABC124",price:240},
  {name:"Elaichi 100g",ingredient_id:"ABC125",price:240}
]

const FoodStock = () => {
  const [supplierOption,setSupplierOption] = useState("Select Supplier");
  const [openAddTransfer,setOpenAddTransfer] = useState(false);
  const [selectedIngredients,setSelectedIngredients] = useState([]);

  const [anchorEl, setAnchorEl] = useState(null);
  const [anchorEl1, setAnchorEl1] = useState(null);
  const [selectedOptions0, setSelectedOptions0] = useState([]);
  const [selectedOptions1, setSelectedOptions1] = useState([]);
  const [selectedOptions2, setSelectedOptions2] = useState([]);
  const [selectedOptions3, setSelectedOptions3] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(null);
  const [dateOption, setDateOption] = useState(null);
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeItemsPerPage=(event)=>{
    setItemsPerPage(event.target.value);
  }

  const handleChangeDateOptions=(event)=>{
    setDateOption(event.target.value);
  }

  const open = Boolean(anchorEl);
  const open1 = Boolean(anchorEl1);
   
    const MenuProps = {
      PaperProps: {
        style: {
          maxHeight:48 * 4.5 + 8,
          width: 250,
          marginTop:60
        },
      },
    };

    const options0 = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];


    const options1 = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];

    const options2 = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];

    const options3 = [
      'Oliver Hansen',
      'Van Henry',
      'April Tucker',
      'Ralph Hubbard',
      'Omar Alexander',
      'Carlos Abbott',
      'Miriam Wagner',
      'Bradley Wilkerson',
      'Virginia Andrews',
      'Kelly Snyder',
    ];
    
  

  const handleChangeFilter0 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions0(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeFilter1 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions1(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeFilter2 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions2(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const handleChangeFilter3 = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedOptions3(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

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
            Food Menu Stocks
          </Typography>

          <div>
          <Button  onClick={handleClick} style={{margin:"20px"}} variant="contained">FILTER&nbsp;&nbsp;<FilterAlt/></Button>
            <Button type="text" href="/dashboard/Stock/alert">Ingredients Alert</Button>
            <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            sx={{marginTop:5}}
            >
                {/* <MenuItem onClick={handleClose}> */}
                <MenuItem>
                <FormControl sx={{ m: 0, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Order Status</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedOptions0}
                    onChange={handleChangeFilter0}
                    input={<OutlinedInput label="Order Status" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    
                  >
                    {options0.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedOptions0.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </MenuItem>

                <MenuItem>
                      
                <FormControl sx={{ m: 0, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Service</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedOptions1}
                    onChange={handleChangeFilter1}
                    input={<OutlinedInput label="Any Service" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {options1.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedOptions1.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>

                </MenuItem>


                <MenuItem >

                <FormControl sx={{ m: 0, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedOptions2}
                    onChange={handleChangeFilter2}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {options2.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedOptions2.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </MenuItem>


                <MenuItem >

                <FormControl sx={{ m: 0, width: 300 }}>
                  <InputLabel id="demo-multiple-checkbox-label">Assigned User</InputLabel>
                  <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={selectedOptions3}
                    onChange={handleChangeFilter3}
                    input={<OutlinedInput label="Assigned User" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                  >
                    {options2.map((name) => (
                      <MenuItem key={name} value={name}>
                        <Checkbox checked={selectedOptions3.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                </MenuItem>


                <MenuItem>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Age</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={}
                    label="Age"
                    onChange={handleChangeDateOptions}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </MenuItem>



                <MenuItem>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Items per page</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    // value={}
                    label="Age"
                    onChange={handleChangeItemsPerPage}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                </MenuItem>

                <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                <Button onClick={handleClose}   style={{margin:"20px"}} variant="contained">APPLY</Button>
                  </div>
            </Menu>
            
          <Button style={{margin:"20px"}} variant="contained" onClick={()=>setOpenAddTransfer(true)}>
            Add Stock
          </Button>
          </div>

          <Dialog open={openAddTransfer} onClose={handleCloseAddTransfer}>
                <DialogTitle>Add Transfer</DialogTitle>
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
                  No Stocks...
                </Typography>
              )}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </Box>
  </>
);}

export default FoodStock;
