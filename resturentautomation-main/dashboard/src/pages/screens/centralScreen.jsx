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
  TextField,IconButton
} from "@material-ui/core";

import {MaterialTable} from "@material-ui/utils"

import Close from "@material-ui/icons/Close"



const ariaLabel = { 'aria-label': 'description' };

const ingredients = [
  {name:"Jeera 100g",ingredient_id:"ABC123",price:240.00},
  {name:"Dhaniya 100g",ingredient_id:"ABC124",price:240.00},
  {name:"Elaichi 100g",ingredient_id:"ABC125",price:240.00}
]

const CentralScreen = () => {
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
      <title>All Screens | Client Portal</title>
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
            All Screens
          </Typography>

          <div>
          
          </div>



        </div>
        <Paper style={{display:"flex", justifyContent:"center"}}>

          <div style={{ display:"flex",flexDirection:"column"}}>
          <Button href="/dashboard/report/attendance" size="large" variant="contained" style={{margin:"20px", width:"200px"}}>Kitchen</Button>
          <Button href="/dashboard/report/consumption" size="large" variant="contained" style={{margin:"20px", width:"200px"}}>Bar</Button>
          <Button href="/dashboard/report/salePOS" size="large" variant="contained" style={{margin:"20px", width:"200px"}}>PoS</Button>
          <Button href="/dashboard/report/customer-ledger" size="large" variant="contained" style={{margin:"20px", width:"200px"}}>Waiter</Button>
          
          </div>

          



          
        </Paper>


        
      </Container>
    </Box>
  </>
);}

export default CentralScreen;
