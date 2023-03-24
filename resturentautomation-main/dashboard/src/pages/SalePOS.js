import React from "react";
import {
  Button,
  IconButton,
  ButtonGroup,
  TextField,
  Paper,
  Container,
} from "@material-ui/core";

import { ArrowForwardIos } from "@material-ui/icons";

const runningOrders = [
  {
    id: 564654,
    table_no: 2,
    items: [],
    bill: 557,
  },
  {
    id: 564654,
    table_no: 2,
    items: [],
    bill: 557,
  },
  {
    id: 564654,
    table_no: 2,
    items: [],
    bill: 557,
  },
  {
    id: 564654,
    table_no: 2,
    items: [],
    bill: 557,
  },
  {
    id: 564654,
    table_no: 2,
    items: [],
    bill: 557,
  },
];

function SalePOS() {
  const [showOrderDets, setShowOrderDets] = [];

  return (
    <div
      className="app"
      style={{ height: "100vh", display: "flex", flexDirection: "column" }}
    >
      <div
        className="header"
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "20px",
          flex: "0.06",
        }}
      >
        <div style={{ flex: "0.5", display: "flex", alignItems: "flex-start" }}>
          <Button variant="contained">Back to sale</Button>
        </div>

        <div
          style={{ flex: "0.5", display: "flex", justifyContent: "flex-end" }}
        >
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button>All</Button>
            <Button>Category</Button>
            <Button>Vegetarian Items</Button>
            <Button>Beverages</Button>
            <Button>Bar Items</Button>
          </ButtonGroup>
        </div>
      </div>

      <div
        className="body"
        style={{
          display: "flex",
          flexDirection: "row",
          flex: "0.8",
          height: "100%",
        }}
      >
        <div
          className="orders"
          style={{
            flex: "0.16",
            display: "flex",
            flexDirection: "column",
            margin: "5px",
            height: "100%",
          }}
        >
          <div
            className="running-orders"
            style={{
              flex: "0.6",
              display: "flex",
              flexDirection: "column",
              height: "100%",
            }}
          >
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />

            <div
              style={{ flex: "0.6", display: "flex", flexDirection: "column" }}
            >
              {runningOrders.map((ele, index) => {
                return (
                  <Paper
                    sx={{ m: 1 }}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <h3 style={{ padding: "5px" }}>
                      Customer order at table {ele.table_no}
                    </h3>
                    <ArrowForwardIos style={{ marginTop: "7px" }} />
                    {}
                  </Paper>
                );
              })}
            </div>

            <div style={{ flex: "0.2", display: "flex", flexWrap: "wrap" }}>
              <Button type="text" size="large" style={{ minWidth: "100px" }}>
                ABC
              </Button>
            </div>
          </div>

          <div className="order-options" style={{ flex: "0.4" }}></div>
        </div>

        <div className="billing" style={{ flex: "0.4" }}>
          <Container fullWidth>
            <Paper fullWidth>
              <h1>as</h1>
            </Paper>
          </Container>
        </div>

        <div className="menu" style={{ flex: "0.4", height: "100%" }}>
          <Container fullWidth>
            <Paper fullWidth>
              <h1>as</h1>
            </Paper>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default SalePOS;
