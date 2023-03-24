import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Slide,
  Collapse,
  TextField,
  Checkbox
} from "@mui/material";
import { Star, ArrowBack } from "@mui/icons-material";

const FavouriteRestaurants = (props) => {
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
      <Grid container direction="column" rowSpacing={2} sx={{ p: 1 }}>
        <Grid item>
          <Typography variant="h5">Favourite Restaurants</Typography>
        </Grid>
        <Grid item>
          <Card style={{ maxWidth: 500, position: "relative" }}>
            <CardMedia component="img" height="180" src="veg1.jfif" />
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
        <Grid item>
          <Card style={{ maxWidth: 500, position: "relative" }}>
            <CardMedia component="img" height="180" src="veg1.jfif" />
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
export default FavouriteRestaurants;
