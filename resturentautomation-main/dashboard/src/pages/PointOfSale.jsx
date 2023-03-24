import React, { useState } from "react";

import { Helmet } from "react-helmet";
import { v4 as uuid } from "uuid";
import { Box, Container, Grid, Typography } from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PointOfSaleDetails from "./dashboard/PointOfSaleDetails";
import PropTypes from "prop-types";
import FilterAltIcon from "@material-ui/icons/FilterAlt";
import PersonIcon from "@material-ui/icons/Person";
const Orders = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const pointofsales = [
    {
      id: uuid(),
      status: "Pending",
      color: "",
      tableno: "2",
      totalprice: "1,000 ₹",
    },
    {
      id: uuid(),
      ref: "CDD1048",
      status: "Delivered",
      color: "success",
      tableno: "6",
      totalprice: "1,000 ₹",
    },
    {
      id: uuid(),
      ref: "CDD1047",
      status: "Refunded",
      color: "error",
      tableno: "1",
      totalprice: "1,000 ₹",
    },
    {
      id: uuid(),
      ref: "CDD1046",
      status: "Pending",
      color: "",
      tableno: "8",
      totalprice: "1,000 ₹",
    },
    {
      id: uuid(),
      ref: "CDD1045",
      status: "Delivered",
      color: "success",
      tableno: "6",
      totalprice: "1,000 ₹",
    },
    {
      id: uuid(),
      ref: "CDD1044",
      status: "Delivered",
      color: "success",
      tableno: "4",
      totalprice: "1,000 ₹",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Point of Sale</title>
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
              Point of Sale
            </Typography>
          </div>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <AppBar
                position="static"
                style={{ background: "transparent", boxShadow: "none" }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="simple tabs example"
                >
                  <Tab

                    label={"DINE IN"}
                    {...a11yProps(0)}
                  />
                  <Tab

                    label="DELIVERY"
                    {...a11yProps(1)}
                  />
                  <Tab

                    label="PICK UP"
                    {...a11yProps(2)}
                  />
                </Tabs>
              </AppBar>

              <TabPanel value={value} index={0}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <AppBar
                    position="static"
                    style={{ background: "#E8E8E8", boxShadow: "none" }}
                  >
                    <Tabs onChange={() => {}} aria-label="simple tabs example">
                      <Tab
                        iconPosition="end"
                        icon={<FilterAltIcon fontSize="large" />}
                      />
                      <Tab icon={<PersonIcon fontSize="large" />} />
                    </Tabs>
                  </AppBar>
                </Box>
                <PointOfSaleDetails pointofsales={pointofsales} />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <AppBar
                    position="static"
                    style={{ background: "#E8E8E8", boxShadow: "none" }}
                  >
                    <Tabs onChange={() => {}} aria-label="simple tabs example">
                      <Tab
                        iconPosition="end"
                        icon={<FilterAltIcon fontSize="large" />}
                      />
                      <Tab icon={<PersonIcon fontSize="large" />} />
                    </Tabs>
                  </AppBar>
                </Box>
                <PointOfSaleDetails pointofsales={pointofsales.slice(0, 2)} />
              </TabPanel>
              <TabPanel value={value} index={2}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <AppBar
                    position="static"
                    style={{ background: "#E8E8E8", boxShadow: "none" }}
                  >
                    <Tabs onChange={() => {}} aria-label="simple tabs example">
                      <Tab
                        iconPosition="end"
                        icon={<FilterAltIcon fontSize="large" />}
                      />
                      <Tab icon={<PersonIcon fontSize="large" />} />
                    </Tabs>
                  </AppBar>
                </Box>
                <PointOfSaleDetails pointofsales={pointofsales.slice(0, 2)} />
              </TabPanel>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Orders;
