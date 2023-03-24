import React from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Grid,
  Paper,
  Box,
  Typography,
  IconButton,
  Button,
  AppBar,
  Modal,
  Backdrop,
  Fade,
  TextField
} from "@mui/material";
import { CheckCircle, ArrowBack, Report } from "@mui/icons-material";
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

const ViewOrder = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();

  const { state } = useLocation();
  const order = state.orderMenu;
  let subTotal = 0;

  const [openModal, setOpenModal] = React.useState(false);
  const onRejectOrder = () => setOpenModal(true);
  const onCloseModal = () => setOpenModal(false);

  return (
    <>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={openModal}>
          <Box className={classes.modal}>
            <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
              <Report sx={{ color: "error.main", mr: 1 }} />
              <Typography variant="body2" color="error.main">
                Rejecting order will automatically refund the full order amount to the customer.
              </Typography>
            </Box>
            <Typography variant="h6" gutterBottom>
              Please mention the reason for rejection.
            </Typography>
            <TextField fullWidth rows={2} maxRows={4} multiline sx={{ mb: 2 }} autoFocus />
            <Button fullWidth variant="contained">
              Continue & Refund
            </Button>
          </Box>
        </Fade>
      </Modal>
      <AppBar position="sticky" sx={{ top: 0 }} elevation={4}>
        <Grid container>
          <Grid item container xs={1} sx={{ pt: 1, justifyContent: "center" }}>
            <Grid item>
              <IconButton sx={{ color: "#fff" }} onClick={() => navigate(-1)}>
                <ArrowBack />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item container xs={6} direction="column" sx={{ p: "15px 30px 15px 0" }}>
            <Grid item>
              <Typography variant="h6" component="span">
                Name:{" "}
              </Typography>
              <Typography variant="h6" component="span">
                Aadarsh
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span">
                Email:{" "}
              </Typography>
              <Typography variant="h5" component="span">
                email@gmail.com
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span">
                Phone:{" "}
              </Typography>
              <Typography variant="h6" component="span">
                +91-9874561230
              </Typography>
            </Grid>
          </Grid>
          <Grid
            item
            container
            xs={5}
            direction="column"
            alignItems="flex-end"
            sx={{
              p: "15px 30px 15px 0"
            }}
          >
            <Grid item>
              <Typography variant="h6" component="span">
                Table No. :{" "}
              </Typography>
              <Typography variant="h3" component="span" gutterBottom>
                {order.table}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="span">
                Order No. :{" "}
              </Typography>
              <Typography variant="h3" component="span">
                {order.orderNo}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </AppBar>
      <Grid
        container
        sx={{ p: 2, borderBottom: "1px solid grey", diplay: "flex", alignItems: "center" }}
      >
        <Typography variant="h6" sx={{ pr: 1, borderRight: "1px solid grey" }}>
          Qty.
        </Typography>
        <Typography
          variant="h6"
          component="span"
          sx={{ pl: 1, borderRight: "1px solid grey", flexGrow: 1 }}
        >
          Particulars
        </Typography>
        <Typography variant="h6" sx={{ pl: 2 }}>
          Amt.
        </Typography>
      </Grid>
      <Grid container sx={{ p: 1 }}>
        {order.menu.map((menu, id) => {
          subTotal += menu.price;
          return (
            <Grid
              item
              container
              justifyContent="space-between"
              alignItems="center"
              sx={{ p: 1, borderBottom: "1px solid grey" }}
            >
              <Grid item sx={{ display: "flex", alignItems: "center" }}>
                <Box
                  sx={{
                    height: 30,
                    width: 30,
                    borderRadius: "50%",
                    border: "2px solid #00AB55",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    mr: 3
                  }}
                >
                  <Typography variant="subtitle1">{menu.qty}</Typography>
                </Box>
                <Typography variant="h6" component="span">
                  {menu.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6">{menu.price}</Typography>
              </Grid>
            </Grid>
          );
        })}

        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey", mt: 1 }}
        >
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              Gross-Total
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              {subTotal.toFixed(2)}
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
            <Typography variant="h6" color="text.secondary">
              Coupon Code
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              ABCD1234
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
            <Typography variant="h6" color="text.secondary">
              Discount(%)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              10
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justifyContent="space-between"
          sx={{ p: 1, borderBottom: "1px solid grey" }}
        >
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              GST(6%)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6" color="text.secondary">
              {(subTotal * 0.06).toFixed(2)}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
          <Grid item>
            <Typography variant="h4">Net Amount Payable</Typography>
          </Grid>
          <Grid item>
            <Typography variant="h5">{(subTotal + subTotal * 0.06).toFixed(2)}</Typography>
          </Grid>
        </Grid>
        <Grid item container justifyContent="space-between" sx={{ p: 1, mt: 1 }}>
          {state.due ? (
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <Report sx={{ color: "error.main" }} />
              <Typography variant="h4" sx={{ ml: 1 }}>
                Payment Due
              </Typography>
            </Grid>
          ) : (
            <Grid item sx={{ display: "flex", alignItems: "center" }}>
              <CheckCircle color="primary" />
              <Typography variant="h4" sx={{ ml: 1 }}>
                Payment Completed
              </Typography>
            </Grid>
          )}
          <Grid item>
            <Button
              variant="text"
              color="secondary"
              onClick={() => navigate("/waiter/view-transaction")}
            >
              View Details
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <AppBar
        className={classes.bottomNav}
        position="fixed"
        sx={{ top: "auto", bottom: 0, borderTop: "1px solid grey" }}
      >
        {state.newOrders ? (
          <Grid container sx={{ p: 1 }} spacing={2}>
            <Grid item xs={6}>
              <Button variant="outlined" fullWidth onClick={onRejectOrder}>
                Reject
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button variant="contained" fullWidth>
                Accept
              </Button>
            </Grid>
          </Grid>
        ) : state.due ? (
          <Grid container sx={{ p: 1 }} spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Paid
              </Button>
            </Grid>
          </Grid>
        ) : (
          <Grid container sx={{ p: 1 }} spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                Served
              </Button>
            </Grid>
          </Grid>
        )}
      </AppBar>
    </>
  );
};
export default ViewOrder;
