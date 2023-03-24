import React from "react";
import WaiterAppBar from "./waiternavbar/waiternavbar";
import {
  AppBar,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  Typography,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Grid,
} from "@mui/material";
import { CurrencyRupee } from "@mui/icons-material";
import { useNavigate } from "react-router";

import {
  makeStyles,
  IconButton,
  Button,
  TableContainer,
} from "@material-ui/core";
import { Add, Remove, Delete } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  sideFoodMenu: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#161C24",
  },
  popup: {
    backgroundColor: theme.palette.mode === "light" ? "#f6f7f8" : "inherit",
  },
  section3BillSection: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  appbar: {
    backgroundColor: theme.palette.mode === "light" ? "#DFE3E8" : "#212B36",
    color: theme.palette.mode === "light" ? "#000" : "#fff",
  },
  input: {
    color: "#fff",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    borderRadius: 10,
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36",
  },
  variant1: {
    background: "#000",
    color: "#fff",
    border: "none",
  },
}));

const WaiterInvoice = () => {
  const [tabValue, setTabValue] = React.useState("dine-in");
  const [open, setOpen] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const onTabChangeHandler = (event, newValue) => {
    setTabValue(newValue);
  };

  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <>
      <div>
        <WaiterAppBar />
        {/* <BottomNav /> */}
        <Grid
          item
          container
          xs={12}
          sx={{
            height: "100%",
            display: "flex",
            padding: "20px 0px",
            flexDirection: "column",
          }}
          direction="column"
        >
          {/* Tabs */}
          {/* <Grid item container style={{ border: "2px solid red" }}>
            <AppBar position="sticky" className={classes.appbar}>
              <Tabs
                value={tabValue}
                onChange={onTabChangeHandler}
                textColor="#00AB55"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab label="Dine In" value="dine-in" sx={{ borderRadius: 0 }} />
                <Tab
                  label="Delivery"
                  value="delivery"
                  sx={{ borderRadius: 0 }}
                />
                <Tab label="Pick Up" value="pick-up" sx={{ borderRadius: 0 }} />
              </Tabs>
            </AppBar>
          </Grid> */}
          {/* <Grid
            item
            container
            sx={{
              border: "2px solid red",
              boxSizing: "border-box",
              padding: 1,
            }}
          >
            <Table size="small" sx={{ minWidth: 1300 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="center">Orders</TableCell>
                  <TableCell align="center">Preparing</TableCell>
                  <TableCell align="center">Ready</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell align="center">7</TableCell>
                  <TableCell align="center">5</TableCell>
                  <TableCell align="center">4</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid> */}
          <Grid
            container
            px={2}
            py={0.5}
            mb={1}
            justifyContent="space-between"
            sx={{ borderTop: 1, borderBottom: 1 }}
          >
            <Grid item>
              <Typography fontSize={18} component="span">
                Order No:{" "}
                <Typography component="span" fontWeight={600}>
                  546694
                </Typography>
              </Typography>
            </Grid>
            <Grid item pr={1}>
              <Typography fontSize={18} component="span">
                Invoice No:{" "}
                <Typography component="span" fontWeight={600}>
                  98694
                </Typography>
              </Typography>
            </Grid>
          </Grid>

          {/* Table */}
          <Grid item container flex={1} style={{ overflowY: "scroll" }}>
            <Table stickyHeader size="small">
              <TableHead>
                <TableRow>
                  <TableCell style={{ minWidth: 170 }}>Items</TableCell>
                  <TableCell align="center">Qty.</TableCell>
                  <TableCell align="center">
                    Total(
                    <CurrencyRupee sx={{ fontSize: 14 }} />)
                  </TableCell>
                  <TableCell align="center">Remove</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Food</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Remove />
                    </IconButton>
                    <Typography
                      variant="body2"
                      component="span"
                      sx={{ margin: "0 10px" }}
                    >
                      1
                    </Typography>
                    <IconButton size="small" color="primary">
                      <Add />
                    </IconButton>
                  </TableCell>
                  <TableCell align="center">80.00</TableCell>
                  <TableCell align="center">
                    <IconButton size="small" sx={{ color: "error.main" }}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
          {/* Bottom Controls */}
          <Grid item container direction="column">
            <Grid
              item
              container
              direction="column"
              className={classes.section3BillSection}
              sx={{
                boxSizing: "border-box",
                padding: "10px 20px",
                paddingBottom: "0px",
                borderBottom: "1px solid lightGrey",
                borderTop: "1px solid lightGrey",
              }}
            >
              <Grid
                py={0.5}
                item
                onClick={openModalHandler}
                style={{ cursor: "pointer" }}
                container
                justifyContent="space-between"
              >
                <Grid fontWeight={900} item>
                  Grand Total
                </Grid>
                <Button
                  color="secondary"
                  onClick={() => setOpen(!open)}
                  aria-label="expand"
                  size="small"
                >
                  {!openModal ? "view full details" : ""}
                </Button>
                <Grid fontWeight={900} item>
                  Rs. 300
                </Grid>
              </Grid>
            </Grid>
            {/* <Grid
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: 1,
               
              }}
            >
              <FormControl>
                <RadioGroup row>
                  <FormControlLabel
                    value="cash"
                    control={<Radio defaultChecked />}
                    label="Cash"
                  />
                  <FormControlLabel
                    value="card"
                    control={<Radio />}
                    label="Card"
                  />
                  <FormControlLabel
                    value="due"
                    control={<Radio />}
                    label="Due"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                  <FormControlLabel
                    value="part"
                    control={<Radio />}
                    label="Part"
                  />
                </RadioGroup>
              </FormControl>
            </Grid> */}
            <Grid
              className={classes.section3BillSection}
              item
              container
              sx={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: 1,
                marginY: 1,
              }}
            >
              <Button
                onClick={() => navigate("/waiter/waitermenu")}
                variant="contained"
              >
                Back
              </Button>
              <Button
                onClick={() => navigate("/waiter/waitersection")}
                variant="contained"
              >
                Confirm Order
              </Button>
            </Grid>
            {/* Bottom Table */}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default WaiterInvoice;
