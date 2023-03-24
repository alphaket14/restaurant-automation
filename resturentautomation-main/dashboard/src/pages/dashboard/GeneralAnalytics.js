// material
import { Box, Grid, Container, Typography,
FormControl,InputLabel,Select,MenuItem,Menu } from '@material-ui/core';
import { useState } from 'react';
// components
import Page from '../../components/Page';
import {
  AnalyticsTasks,
  AnalyticsNewUsers,
  AnalyticsBugReports,
  AnalyticsItemOrders,
  AnalyticsNewsUpdate,
  AnalyticsWeeklySales,
  AnalyticsOrderTimeline,
  AnalyticsCurrentVisits,
  AnalyticsWebsiteVisits,
  AnalyticsTrafficBySite,
  AnalyticsCurrentSubject,
  AnalyticsConversionRates
} from '../../components/_dashboard/general-analytics';
import Paper from '@material-ui/core/Paper';
// ----------------------------------------------------------------------

const outletList = [{name:"The Royal Taj",code:"0001",address:"1/2", phone:"+91",email:"sdnsj@jndsjn",outlet_id: "87758"},
{name:"JW Mariott",code:"0001",address:"1/2", phone:"+91",email:"sdnsj@jndsjn",outlet_id: "46847"}];


export default function GeneralAnalytics({outlet_id}) {
  const [outletId,setOutletId] =useState(outlet_id || "877578")
  const handleChangeOutletId = (e)=>{
    setOutletId(e.target.value);
  }
  return (
    <Page title="General: Analytics | Minimal-UI">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Dashboard Analytics</Typography>
          
          <FormControl style={{margin:"20px", width:"95%"}}>
            <InputLabel id="demo-simple-select-label">Outlet ID</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={outletId}
              defaultValue={outlet_id}
              label="Outlet ID"
            onChange={handleChangeOutletId}
            >
              <MenuItem value="877578">877578</MenuItem>
              <MenuItem value="468487">468487</MenuItem>
              <MenuItem value="305875">305875</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsWeeklySales weekly_sales={10000}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsNewUsers no_new_users={15} />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsItemOrders no_item_orders={10}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <AnalyticsBugReports no_bug_reports={4} />
          </Grid>

          

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsWebsiteVisits />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentVisits />
          </Grid>

          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Ingredients in Alert/Low Stock (134)
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Top 10 Food Items This Month
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>

          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Top 10 Customers This Month
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Customer Receivables
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Supplier Payables
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Monthly Sale Comparison
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>


          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Zomato
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} >
            <Paper style={{ padding: '10px' }}>
              <h3>
              Swiggy
              </h3>
              <AnalyticsTasks />
            </Paper>
          </Grid>

          {/* <Grid item xs={12} md={6} lg={8}>
            <AnalyticsConversionRates />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsCurrentSubject />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AnalyticsNewsUpdate />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsOrderTimeline />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AnalyticsTrafficBySite />
          </Grid> */}

        </Grid>
      </Container>
    </Page>
  );
}
