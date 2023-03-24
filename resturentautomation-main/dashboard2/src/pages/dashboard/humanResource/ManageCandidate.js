import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
  Input,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  IconButton,
  withStyles,
  TablePagination
} from "@material-ui/core";
import MoreTimeTwoToneIcon from '@mui/icons-material/MoreTimeTwoTone';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { blue } from '@mui/material/colors';
import TableContainer from '@mui/material/TableContainer';
import Scrollbar from "src/components/Scrollbar";
const createData = (sl, name, candidateId, photo, email, ssn, phone, mdeg, deg, hsc, school, company, jbtitle, wrkst, wrkend, dept, desig) => {
  return { sl, name, candidateId, photo, email, ssn, phone, mdeg, deg, hsc, school, company, jbtitle, wrkst, wrkend, dept, desig };
};

const colorBlue = blue[900];

const ManageCandidate = (props) => {
  const [tableNo, setTableNo] = useState(1);
  const fields = ["Basic Information", "Educational Information","Past Experience"];



  const Table1 = ()=>{
    const columns = [
      //{ label: "Sr no.", minWidth: 80, maxWidth: 100 },
      //{ label: "Candidate ID", minWidth: 100, maxWidth: 200 },
      { label: "Name", minWidth: 100, maxWidth: 200 },
      { label: "Department", minWidth: 100, maxWidth: 200 },
      { label: "Position", minWidth: 100, maxWidth: 200 },
      { label: "Email Address", minWidth: 150, maxWidth: 250 },
      { label: "Phone", minWidth: 100, maxWidth: 200 },
      //{ label: "Master's Degree", minWidth: 150, maxWidth: 200 },
      //{ label: "Degree", minWidth: 100, maxWidth: 200 },
      //{ label: "Higher Secondary", minWidth: 160, maxWidth: 200 },
      //{ label: "School", minWidth: 100, maxWidth: 200 },
      //{ label: "Company Name", minWidth: 140, maxWidth: 200 },
      //{ label: "Job Title", minWidth: 100, maxWidth: 200 },
      //{ label: "Work Start Date", minWidth: 150, maxWidth: 200 },
      //{ label: "Work End Date", minWidth: 150, maxWidth: 200 },
      { label: "Action", minWidth: 130, maxWidth: 150 }
    ];

     const data = [
       createData(1,"Mr Kabir Kumar","#CANDIDATE0001","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(2,"Mr Kabir Kumar","#CANDIDATE0002","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(3,"Mr Kabir Kumar","#CANDIDATE0003","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(4,"Mr Kabir Kumar","#CANDIDATE0005","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(5,"Mr Kabir Kumar","#CANDIDATE0005","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(6,"Mr Kabir Kumar","#CANDIDATE0006","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(7,"Mr Kabir Kumar","#CANDIDATE0007","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(8,"Mr Kabir Kumar","#CANDIDATE0008","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager"),
       createData(9,"Mr Kabir Kumar","#CANDIDATE0009","dummy","tolveasnaandlinna@yahoo.com","12645","+855968888182","dummy", "dummy", "dummy", "dummy", "dummy", "dummy", "01-10-2021", "01-11-2021", "Accounts", "Manager")
     ];

     const [rows, setRows] = useState(data);
     const [rowsid, setRowsid] = useState();
     useEffect(() => {
       const fetchdata = async () => {
         const data = await axios.get('https://doubtful-tuna-leotard.cyclic.app/candidate/')
         console.log("categories:",data)
         setRows(data.data[0].rows);
         setRowsid(data.data[0]._id);
         //console.log(rowsid); working correctly
       };
       fetchdata();
     },[]);
     const [page, setPage] = useState(0);
     const [rowsPerPage, setRowsPerPage] = useState(10);
     const pageChangeHandler = (event, newPage) => {
       setPage(newPage);
     };
   
     const rowsPerPageChangeHandler = (event) => {
       setRowsPerPage(parseInt(event.target.value, 10));
       setPage(0);
     };
     const deletePosition = (index) => {
      if (window.confirm("Are you sure you want to delete this item?")) {
        let newRows = rows.filter((row, i) => {
          return index !== i;
        });
        axios.post('https://doubtful-tuna-leotard.cyclic.app/candidate/update/'+rowsid, {
          rows: newRows,
        })
        .then(res => console.log(res.data))
        .catch((error) => {console.log(error);})
        setRows(newRows);
      }
    };
    const navigate = useNavigate();
    const edit = (id) => {
      navigate(`/dashboard/humanresource/recruitment/addnewcandidate/?id=${rows[id]._id}`)
    }
    return(
      <>
      <TableContainer>
        <Scrollbar>
      <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth, textAlign: "center" }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row,id) => {
              return (
                <TableRow key={row.sl} hover>
                  {/*<TableCell style={{ textAlign: "center"}}>{row.candidateId}</TableCell>*/}
                  <TableCell style={{ textAlign: "center"}}>{row.name}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.department}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.designation}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.email}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. phone}</TableCell>
                  {/*<TableCell style={{ textAlign: "center"}}>{row.sl}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row.photo}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. mdeg}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. deg}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. hsc}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. school}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. company}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. jbtitle}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. wrkst}</TableCell>
                  <TableCell style={{ textAlign: "center"}}>{row. wrkend}</TableCell>*/}
                  <TableCell style={{ textAlign: "center"}}>
                          <IconButton onClick={() => edit(id)} color="primary" >
                            <EditIcon />
                          </IconButton>
                          <IconButton  color="primary" >
                            <MoreTimeTwoToneIcon />
                          </IconButton>
                          <IconButton onClick={() => deletePosition(id)}>
                            <DeleteIcon color="error"/>
                          </IconButton>
                    </TableCell>
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
      </>
    )


  }
  const Table2 = ()=>{
    const columns = [
      { label: "Sr no.", minWidth: 80, maxWidth: 100 },
      { label: "Candidate ID", minWidth: 100, maxWidth: 200 },
      { label: "Company Name", minWidth: 100, maxWidth: 200 },
      { label: "Working Period", minWidth: 150, maxWidth: 250 },
      { label: "Duties", minWidth: 80, maxWidth: 150 },
      { label: "Supervisor", minWidth: 100, maxWidth: 200 },
    ];

    return (
      <>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          
        </Table>
      </>
    )
  }
  const Table3 = ()=>{
    const columns = [
      { label: "Sr no.", minWidth: 60, maxWidth: 100 },
      { label: "Candidate ID", minWidth: 100, maxWidth: 200 },
      { label: "Obtained Degree", minWidth: 100, maxWidth: 200 },
      { label: "University", minWidth: 150, maxWidth: 250 },
      { label: "CGPA", minWidth: 80, maxWidth: 150 },
      { label: "Comments", minWidth: 100, maxWidth: 200 },
    ];

    return (
      <>
        <Table size="small" sx={{ minWidth: 1300 }}>
          <TableHead>
            <TableRow>
              {columns.map((column) => {
                return (
                  <TableCell
                    style={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                    key={column.label}
                  >
                    {column.label}
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          
        </Table>
      </>
    )
  }

  const ShowTable = () =>{
    switch(tableNo){
      case 1:
        return <Table1 />
      case 2:
        return <Table2 />
      case 3:
        return <Table3 />
      default:
        return <Table1 />
    }
  }

  return (
    <>
      {/*<Grid container columnGap={1} rowGap={1} >
          {fields.map((field, i)=>{
          return(
            <Button  onClick={()=>setTableNo(i+1)}
              style={{
              cursor:"pointer",
              padding: 10,
              borderRadius: "5px 5px 0 0",
              color: "white",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor:  tableNo === i+1 ? "green": `${colorBlue}`
            }}  
          >
            {field}
          </Button>
          )
        })}     
      </Grid>*/}
      <Grid
        container
        style={{
          borderRadius: 5,
          border: "1px solid grey",
          boxSizing: "border-box",
          padding: "20px 20px",
          margin: "20px 0px"
        }}
        direction="column"
        rowGap={2}
      >
        {/*<Grid item container style={{ padding: 0, justifyContent: "space-between" }}>
          <Grid item>
            <Button size="small">Copy</Button>
            <Button size="small">CSV</Button>
            <Button size="small">Excel</Button>
            <Button size="small">PDF</Button>
            <Button size="small">Print</Button>
          </Grid>
          <Grid item>
            <Input type="text" placeholder="Search" />
          </Grid>
      </Grid>*/}
        <ShowTable />
        
      </Grid>
    </>
  );
};
export default ManageCandidate;
