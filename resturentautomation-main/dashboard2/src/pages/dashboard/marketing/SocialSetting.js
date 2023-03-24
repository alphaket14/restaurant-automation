import React from "react";
import {
  TableContainer,
  Input,
  TextField,
  Grid,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Button,
  Select,
  MenuItem,
  IconButton,
  Divider,
  Typography,
  Tooltip,
  Stack,
  Box
} from "@mui/material";
import DeleteIcon from "@material-ui/icons/Delete";
import Scrollbar from "src/components/Scrollbar";
import EditIcon from "@mui/icons-material/Edit";

const SocialSetting = (props) => {
  const columns = [
    { label: "Sr. No.", minWidth: 50, maxWidth: 100 },
    { label: "Title", minWidth: 50, maxWidth: 200 },
    { label: "Url", minWidth: 50, maxWidth: 200 },
    { label: "Select Icon", minWidth: 50, maxWidth: 200 },
    { label: "Status", minWidth: 20, maxWidth: 50 },
    { label: "Action", minWidth: 20, maxWidth: 50 }
  ];

  const createData = (title, url, selectIcon, status) => {
    return { title, url, selectIcon, status };
  };

  const rows = [createData("Facebook", "https://www.facebook.com/", "fab fa-facebook", "ACTIVE")];

  return (
    <>
      {/* <Typography variant="h5" gutterBottom>
        Social Setting
      </Typography>
      <Divider sx={{ width: "100%", mb: 2 }} /> */}
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 1 }}>
       
       <Box component="span" sx={{
         width: "100%",
       }}>
           <TextField label="Title" sx={{width:"20%",ml:2}}  size="small" placeholder="Title" />
           <TextField label="URL" sx={{width:"20%",ml:2}}  size="small" placeholder="URL" />
           <Select label="Select Icon" sx={{width:"20%",ml:2}}  size="small" placeholder="Select Icon"></Select>
           <Select label="Status" sx={{width:"20%",ml:2}}  size="small" placeholder="Status"></Select>
          
           <Button sx={{float:"right",ml:2}} variant="contained">Add</Button>
       </Box>
       </Stack>

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
      <TableContainer >
        <Scrollbar>

      <Table size="small" sx={{ minWidth: 1300 }}>
        <TableHead>
          <TableRow>
            {columns.map((column) => {
              return (
                <TableCell
                  align="center"
                  sx={{ minWidth: column.minWidth, maxWidth: column.maxWidth }}
                  key={column.label}
                >
                  {column.label}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, id) => {
            return (
              <TableRow>
                <TableCell align="center">{id + 1}</TableCell>
                <TableCell align="center">{row.title}</TableCell>
                <TableCell align="center">{row.url}</TableCell>
                <TableCell align="center">{row.selectIcon}</TableCell>
                <TableCell align="center">
                      {row.status=="ACTIVE"? 
                        <Button color="primary" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      :
                        <Button color="error" size="small" variant="outlined">
                          {row.status}
                        </Button>
                      }
                      </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit" placement="left">
                    <IconButton color="primary" size="small">
                      <EditIcon />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" placement="top">
                    <IconButton sx={{ color: "error.main" }} size="small">
                      <DeleteIcon color="error"/>
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      </Scrollbar>
      </TableContainer>
      </Grid>
    </>
  );
};
export default SocialSetting;
