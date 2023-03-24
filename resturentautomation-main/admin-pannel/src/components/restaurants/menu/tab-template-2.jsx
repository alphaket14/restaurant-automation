import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

//custom components to pass table pannel
import Table from "../table-template.jsx";
import TaskBar from "../taskbar-above-table-3-tools.jsx";
import FullScreen from "../full-screen-template-with-tools.jsx";
import DownloadOption from "../download-button.jsx";
import UploadOption from "../upload-button.jsx";

//calling a function to receive restaurant id
import * as func from "./menu-list-template.jsx";
//importing data to be displayed
import * as data from "./menu-data.jsx";

//variable to store restaurant id
var restid="";



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  restid=func.sendId();
  //filtering the data from rows to get all those menu list who's restaurant id is passed
  const menus=data.rows.filter(item=>item.restaurantId.includes(restid));


  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"  variant="scrollable"
        scrollButtons="auto" textColor="#2196f3" sx={{margin:"auto",width:"40%"}} display="flex" justifyContent="center">
        {/*Tab label here*/}
          <Tab label="Dine In" {...a11yProps(0)} />
          <Tab label="Online" {...a11yProps(1)} />
          <Tab label="Third Party" {...a11yProps(2)} />
        </Tabs>
      </Box>
      {/*Tab body here*/}
      {/*Dine in */}
      <TabPanel value={value} index={0}>
      <br/>
      <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Item List</Typography>
        <br/>
        <TaskBar tools={<FullScreen sx={{align:"right"}} title="Dine In"  tableRows={menus[0].dineIn} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>} download={<DownloadOption/>} upload={<UploadOption/>}/>
        <Table rows={menus[0].dineIn} columns={data.columns} height={390} rowsPerPage={5}/>
      </TabPanel>
      {/*Online */}
      <TabPanel value={value} index={1}>
      <br/>
      <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Item List</Typography>
        <br/>
        <TaskBar tools={<FullScreen sx={{align:"right"}} title="Online"  tableRows={menus[0].online} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>} download={<DownloadOption/>} upload={<UploadOption/>}/>
        <Table rows={menus[0].online} columns={data.columns} height={390} rowsPerPage={5}/>
      </TabPanel>
      {/*Third Party */}
      <TabPanel value={value} index={2}>
      <br/>
      <Typography variant="h5" align="center" sx={{fontWeight:"bold"}}>Item List</Typography>
        <br/>
        <TaskBar tools={<FullScreen sx={{align:"right"}} title="Third Party"  tableRows={menus[0].thridParty} tableColumns={data.columns} height={'100vh'} rowsPerPage={10}/>} download={<DownloadOption/>} upload={<UploadOption/>}/>
        <Table rows={menus[0].thridParty} columns={data.columns} height={390} rowsPerPage={5}/>
      </TabPanel>
    </Box>
  );
}
