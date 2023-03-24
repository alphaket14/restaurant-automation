import React, { useState } from "react";
import { Grid, Button, IconButton, Box, Typography, Checkbox } from "@mui/material";
const Payments = (props) => {
  const [openPaymentDrawer, setOpenPaymentDrawer] = useState(false);

  return (
    <>
      <Grid container sx={{ padding: "0 10px", boxSizing: "border-box", position: "relative" }}>
        <Grid item container style={{ alignItems: "center", padding: "5px 0" }}>
          <Grid item xs={8} style={{ display: "flex", alignItems: "center" }}>
            <IconButton sx={{ marginRight: 1 }} color="secondary">
              <i class="fas fa-arrow-left"></i>
            </IconButton>
            <Typography variant="h6" component="span" fontWeight="fontWeightBold">
              Pizzakart
            </Typography>
          </Grid>
          <Grid item xs={4} align="right">
            <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-discount-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" />
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "10px 0" }}>
          <Grid item xs={1}>
            <Typography color="primary">
              <i class="fas fa-map-marker-alt"></i>
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Typography variant="subtitle2" component="p">
              Delivery at Home - A-52/7 West Model Town Ghaziabad MMH College Road.
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Button fullWidth size="small">
              Change
            </Button>
          </Grid>
        </Grid>
        <Grid container item style={{ margin: "10px 0" }}>
          <Grid item xs={1}>
            <i class="fas fa-stopwatch"></i>
          </Grid>
          <Grid item xs={11}>
            <Typography variant="subtitle2" component="p">
              Delivery in 41 mins
            </Typography>
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "10px 0" }}>
          <Grid item xs={1}>
            <i class="fas fa-utensils"></i>
          </Grid>
          <Grid item xs={10}>
            <Typography variant="subtitle2" component="div">
              Always send cutlery to this address
            </Typography>
            <Typography variant="body2" color="text.secondary" component="div">
              Please only select this if completely necessary
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Checkbox color="success" />
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "10px 0" }} rowSpacing={1}>
          <Grid item container>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="fontWeightBold">
                Your Cart <i class="fas fa-shopping-bag"></i>
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={1} style={{ color: "green" }}>
              <i class="far fa-dot-circle"></i>
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle2" component="div">
                Paneer and onion pizza [7 inches]
              </Typography>
              <Typography variant="subtitle2" component="div">
                99
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Button
                size="small"
                fullWidth
                variant="outlined"
                endIcon={
                  <IconButton size="small" color="primary">
                    <i class="fas fa-plus"></i>
                  </IconButton>
                }
                startIcon={
                  <IconButton size="small" color="primary">
                    <i class="fas fa-minus"></i>
                  </IconButton>
                }
              >
                1
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container style={{ margin: "10px 0" }} rowSpacing={1}>
          <Grid item container>
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="fontWeightBold">
                Offers
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={1}>
              <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-discount-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle2" component="div">
                Buy 2 get 1 free
              </Typography>
              <Typography variant="body2" component="div" color="text.secondary">
                Add items from 'T20 BOGO Buy 2 get 1 free'
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Button size="small" fullWidth>
                Add Items
              </Button>
            </Grid>
          </Grid>
          <Grid item container xs={12} style={{ margin: "10px 0" }}>
            <Grid item xs={1}>
              <img src="https://img.icons8.com/external-kiranshastry-lineal-color-kiranshastry/25/000000/external-discount-banking-and-finance-kiranshastry-lineal-color-kiranshastry.png" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="subtitle2" component="div">
                Buy 2 get 1 free
              </Typography>
              <Typography variant="body2" component="div" color="text.secondary">
                Add items from 'T20 BOGO Buy 2 get 1 free'
              </Typography>
            </Grid>
            <Grid item xs={3}>
              <Button size="small" fullWidth>
                Add Items
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container style={{ position: "sticky", marginTop: 20 }}>
          <Grid item direction="column" container xs={5}>
            <Grid item onClick={() => setOpenPaymentDrawer((prevState) => !prevState)}>
              <Typography variant="caption" component="div" color="secondary">
                <img src="https://img.icons8.com/color/25/000000/paytm.png" /> PAY USING{" "}
                <i class={openPaymentDrawer ? "fas fa-sort-up" : "fas fa-sort-down"}></i>
              </Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{ display: openPaymentDrawer ? "block" : "none" }}
            >
              <Grid item>
                <Typography variant="subtitle1">Paytm UPI</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">BHIM UPI</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">PhonePe</Typography>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">Net Banking</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={7}>
            <Button
              fullWidth
              variant="contained"
              size="large"
              startIcon={
                <Typography variant="caption" style={{ fontSize: 18 }} component="div">
                  148.95
                </Typography>
              }
              endIcon={<i class="fas fa-caret-right"></i>}
            >
              Place Order
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default Payments;
