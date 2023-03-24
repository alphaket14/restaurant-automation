import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import AddNew from "./add-new.jsx";
//importing custom components
import Avtar from "./avtar.jsx";
import Switch from "./switch.jsx";
function createData(sl, logo, name, status, action) {
  return { sl, logo, name, status, action };
}


export default function BasicTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell><Typography variant="subtitle1"  sx={{fontWeight:"bold"}}>SL No.</Typography></TableCell>
            <TableCell align="left"><Typography variant="subtitle1"  sx={{fontWeight:"bold",textAlign:'center'}}>Logo</Typography></TableCell>
            <TableCell align="left"><Typography variant="subtitle1"  sx={{fontWeight:"bold",textAlign:'center'}}>Name</Typography></TableCell>
            <TableCell align="left"><Typography variant="subtitle1"  sx={{fontWeight:"bold",textAlign:'center'}}>Status</Typography></TableCell>
            <TableCell align="left"><Typography variant="subtitle1"  sx={{fontWeight:"bold",textAlign:'center'}}>Action</Typography></TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          <>
          {props.content.data.map((array)=>(
            <TableRow
              key={array[0]}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" align="center">
                {array[0]}
              </TableCell>
              <TableCell align="left"><Avtar src={array[1]} align="right"/></TableCell>
              <TableCell align="left">{array[2]}</TableCell>
              {array[3]=="Active"?<TableCell align="left" sx={{color:"green"}}>{array[3]}</TableCell>:<TableCell align="left" sx={{color:"red"}}>{array[3]}</TableCell>}
              {array[3]=="Active"?<TableCell align="left"><Switch id={array[5]} check={true} icon={array[4]}/></TableCell>:<TableCell align="left"><Switch id={array[5]} check={false} icon={array[4]}/></TableCell>}
            </TableRow>
          ))}
          </>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
