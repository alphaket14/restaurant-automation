import {useState} from "react";
import { createBrowserHistory } from "history";
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
} from "@material-ui/core";
import GeneralAnalytics from "../pages/dashboard/GeneralAnalytics";

const outletList = [{name:"The Royal Taj",code:"0001",address:"1/2", phone:"+91",email:"sdnsj@jndsjn",outlet_id: "1654"},
{name:"JW Mariott",code:"0001",address:"1/2", phone:"+91",email:"sdnsj@jndsjn",outlet_id: "1214"}];

const Outlets = () => {
  const [analyticsOpen,setAnalyticsOpen] = useState(false);
  const [outletId,setOutletId] = useState("");

  const handleAnalyticsOpen=(outlet_id)=>{
    createBrowserHistory().push("/dashboard/analytics")
    setOutletId(outlet_id);
    setAnalyticsOpen(true);

  }

  return (
  <>
  {analyticsOpen?(<GeneralAnalytics outlet_id={outletId} />):(null)}
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
            Outlets
          </Typography>
          <Button variant="contained">
            Add Outlet
          </Button>
        </div>

          <div style={{display:"flex",flexWrap:"wrap", flexDirection:"row"}}>
        {outletList.map((outlet,index)=>{ 
        return(
        <Paper style={{margin:"20px",flex:"0.3"}}>
            <div style={{display:"flex", flexDirection:"column", justifyContent:"center", margin:"20px 20px 20px 0px"}}>
              
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}><h2>{outlet.name}</h2> </div>
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}><h3>Outlet code: {outlet.code}</h3> </div>
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}><h3>Address: {outlet.address}</h3> </div>
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}><h3>Phone: {outlet.phone}</h3> </div>
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}><h3>Email: {outlet.email}</h3> </div>
            
              <div style={{width:"100%",display:"flex", justifyContent:"center",margin:"10px"}}>
                <Button size="large" variant="contained" style={{margin:"10px"}} onClick={()=>handleAnalyticsOpen(outlet.outlet_id)}>Enter</Button>
                <Button variant="contained" style={{margin:"10px"}}>Edit</Button>
                {index?(<Button variant="contained" style={{margin:"10px"}}>Delete</Button>):(null)}
               </div>
            </div>


        </Paper>
        )})}
        </div>

      </Container>
    </Box>
  </>
);}

export default Outlets;
