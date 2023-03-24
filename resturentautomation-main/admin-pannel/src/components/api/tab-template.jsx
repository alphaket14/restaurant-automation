import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

//custom component Card
import Card from "./card-template.jsx";

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

export default function ScrollableTabsButtonAuto(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md">
    <Box sx={{ width: '100%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
      <Tabs
        textColor="#2196f3"
        sx={{backgroundColor:'#2196f3',borderRadius:3,color:'white'}}
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        aria-label="scrollable auto tabs example"
      >
      {/*Tab label here */}
          {props.tabLabel.map((text)=>(
            <Tab label={text} sx={{color:'white',"&:active":{color:'black'}}}/>
          ))}
        </Tabs>
      </Box>
      {/*tab data here passing card as its data now pass data to card as prop */}
      {props.tabPannel.map((item)=>(
        <TabPanel value={value} index={props.tabPannel.indexOf(item)}><Card content={item}/></TabPanel>
    ))}
    </Box>
  </Container>
  );
}
