import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  Switch,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import { CheckCircle, ArrowBack, Report, ExpandMore } from "@mui/icons-material";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bottomNav: {
    backgroundColor: theme.palette.mode === "light" ? "#fff" : ""
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100%",
    boxShadow: 24,
    padding: 20,
    backgroundColor: theme.palette.mode === "light" ? "#fff" : "#212B36"
  }
}));

const MenuPage = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  return (
    <>
      <Grid container sx={{ p: 1 }}>
        <Grid item container xs={12} direction="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Sea Food</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item container xs={12} direction="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Sea Food</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item container xs={12} direction="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Sea Food</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item container xs={12} direction="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Sea Food</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item container xs={12} direction="column">
          <Accordion>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">Sea Food</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid
                item
                container
                xs={12}
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                container
                justifyContent="space-between"
                sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
              >
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
              <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
                <Grid item>
                  <Typography variant="h6">Food</Typography>
                </Grid>
                <Grid item>
                  <Typography variant="h6">
                    <Switch />
                  </Typography>
                </Grid>
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};
export default MenuPage;
