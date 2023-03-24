import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  Grid,
  Box,
  Button,
  Divider,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  ButtonBase
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, ArrowBack } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  activeDay: {
    backgroundColor: "#e23744",
    color: "#fff"
  }
}));

const SelectTable = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const [acTables, setAcTables] = useState(null);
  const [nonAcTables, setNonAcTables] = useState(null);
  const acTablesChangeHandler = (id) => {
    setAcTables(id);
    setNonAcTables(null);
  };
  const nonAcTablesChangeHandler = (id) => {
    setNonAcTables(id);
    setAcTables(null);
  };
  const tables = [
    { type: "AC", tableNo: 1, persons: 5 },
    { type: "AC", tableNo: 2, persons: 5 },
    { type: "AC", tableNo: 3, persons: 5 },
    { type: "AC", tableNo: 4, persons: 5 },
    { type: "AC", tableNo: 5, persons: 5 },
    { type: "Non-AC", tableNo: 10, persons: 2 },
    { type: "Non-AC", tableNo: 11, persons: 2 },
    { type: "Non-AC", tableNo: 12, persons: 2 },
    { type: "Non-AC", tableNo: 13, persons: 2 },
    { type: "Non-AC", tableNo: 14, persons: 2 }
  ];

  return (
    <>
      <AppBar
        elevation={1}
        position="sticky"
        sx={{
          top: 0,
          bgcolor: "#fff",
          maxHeight: 50,
          display: "flex",
          justifyContent: "center"
        }}
      >
        <Toolbar sx={{ p: "2px 5px" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBack />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Grid container sx={{ p: 1 }}>
        <Typography variant="h5" gutterBottom>
          AC
        </Typography>
        <Grid item container spacing={2} sx={{ mb: 2 }}>
          {tables
            .filter((table) => table.type === "AC")
            .map((table, id) => (
              <Grid item xs={3}>
                <ButtonBase sx={{ mr: 1, borderRadius: 1, width: "100%" }}>
                  <Box
                    fullWidth
                    sx={{
                      width: "100%",
                      height: 30,
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    className={acTables === id ? classes.activeDay : ""}
                    onClick={() => acTablesChangeHandler(id)}
                  >
                    <Typography variant="subtitle1">{table.tableNo}</Typography>
                    <Typography variant="caption">{table.persons} Persons</Typography>
                  </Box>
                </ButtonBase>
              </Grid>
            ))}
        </Grid>
        <Divider sx={{ borderBottomWidth: 2, width: "100%", mb: 1 }} />
        <Typography variant="h5" gutterBottom>
          Non-AC
        </Typography>
        <Grid item container spacing={2} sx={{ mb: 2 }}>
          {tables
            .filter((table) => table.type === "Non-AC")
            .map((table, id) => (
              <Grid item xs={3}>
                <ButtonBase sx={{ mr: 1, borderRadius: 1, width: "100%" }}>
                  <Box
                    fullWidth
                    sx={{
                      width: "100%",
                      height: 30,
                      p: 1,
                      borderRadius: 1,
                      border: "1px solid grey",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                    className={nonAcTables === id ? classes.activeDay : ""}
                    onClick={() => nonAcTablesChangeHandler(id)}
                  >
                    <Typography variant="subtitle1">{table.tableNo}</Typography>
                    <Typography variant="caption">{table.persons} Persons</Typography>
                  </Box>
                </ButtonBase>
              </Grid>
            ))}
        </Grid>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0, bgcolor: "#fff" }}>
          <Toolbar>
            <Button
              fullWidth
              variant="contained"
              onClick={() => navigate("/table-reservation-summary")}
            >
              Confirm Booking
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
export default SelectTable;
