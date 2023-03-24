import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ScrollContainer from "react-indiana-drag-scroll";
import {
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Checkbox,
  AppBar,
  Toolbar
} from "@mui/material";
import { ArrowBack, Star, StarBorder } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";

const carouselComp = () => {
  return (
    <Carousel showThumbs={false} showStatus={false} dynamicHeight={true}>
      <div>
        <img src="veg1.jfif" style={{ height: 180 }} />
      </div>
      <div>
        <img src="2.png" style={{ height: 180 }} />
      </div>
    </Carousel>
  );
};

const ReservationBottomTab = (props) => {
  const navigate = useNavigate();

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
      <Grid container sx={{ p: 1 }} direction="column" rowSpacing={2}>
        <Grid item>
          <Card
            style={{ maxWidth: 500, position: "relative" }}
            onClick={() => navigate("/reserve")}
          >
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                right: 0,
                p: "2px 8px",
                bgcolor: "primary.main",
                borderRadius: "5px 0 0 5px",
                zIndex: 100
              }}
              variant="subtitle2"
              color="#fff"
            >
              50% OFF upto 100
            </Typography>
            <Box
              sx={{
                position: "absolute",
                top: 10,
                left: 10,
                zIndex: 100,
                borderRadius: "50%",
                bgcolor: "#fff",
                boxShadow: "0 0 3px rgba(0,0,0,0.3)",
                height: 35,
                width: 35,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Checkbox
                icon={<StarBorder sx={{ color: "primary.main" }} />}
                checkedIcon={<Star />}
              />
            </Box>
            <CardMedia component={carouselComp} height="180" />
            <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <Typography variant="h6" fontWeight={600}>
                  Sultan Kacchi Biriyani
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Biriyani, Desserts, Kacchi
                </Typography>
              </Box>
              <Box>
                <Box
                  sx={{
                    bgcolor: "green",
                    borderRadius: 1,
                    display: "flex",
                    p: "2px 5px",
                    alignItems: "center"
                  }}
                >
                  <Typography color="#fff" component="span">
                    4.0
                  </Typography>
                  <Star sx={{ color: "#fff", ml: "2px", fontSize: 15 }} />
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};
export default ReservationBottomTab;
