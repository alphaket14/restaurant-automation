import React from "react";
import {
  Grid,
  Button,
  TextField,
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent
} from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchPage = (props) => {
  return (
    <>
      <Grid container style={{ padding: 10, boxSizing: "border-box" }}>
        <Grid item container xs={12}>
          <Grid item xs={9}>
            <TextField
              variant="outlined"
              InputProps={{
                startAdornment: (
                  <Box sx={{ color: "#e23744" }}>
                    <i className="fas fa-search"></i>
                  </Box>
                )
              }}
              size="small"
              type="search"
              placeholder="Search"
              fullWidth
            />
          </Grid>
          <Grid item xs={3}>
            <Button
              variant="contained"
              color="secondary"
              // startIcon={<i class="fas fa-sliders-h"></i>}
              startIcon={<img src="https://img.icons8.com/office/20/000000/sorting-options.png" />}
              fullWidth
            >
              Filter
            </Button>
          </Grid>
        </Grid>
        <Grid item container direction="column" style={{ margin: "15px 0" }}>
          <Grid item style={{ marginBottom: 15 }}>
            <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
              Recently searched
            </Typography>
          </Grid>
          <Grid item container spacing={1}>
            <Grid item>
              <Button variant="outlined" color="secondary" size="small">
                KFC
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" size="small">
                BFC
              </Button>
            </Grid>
            <Grid item>
              <Button variant="outlined" color="secondary" size="small">
                Gloria Jean
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container style={{ marginBottom: 15 }}>
          <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
            Trending Near You
          </Typography>
        </Grid>
        <Grid item container xs={12} spacing={2} style={{ margin: 0, boxSizing: "border-box" }}>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <Card style={{ maxWidth: 500, borderRadius: "15px 15px 5px 5px" }}>
              <CardMedia component="img" height="120" image="veg1.jfif" alt="brocolli" />
              <CardContent style={{ padding: 10 }}>
                <Typography variant="body1" style={{ fontWeight: "bold" }} component="div">
                  Rafu Hotel
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Biriyani, Desserts
                </Typography>
                <hr />
                <Typography align="center" variant="caption" component="div">
                  Price Range 150-550
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <Card style={{ maxWidth: 500, borderRadius: "15px 15px 5px 5px" }}>
              <CardMedia component="img" height="120" image="veg1.jfif" alt="brocolli" />
              <CardContent style={{ padding: 10 }}>
                <Typography variant="body1" style={{ fontWeight: "bold" }} component="div">
                  Prem Dhaba
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  Biriyani, Desserts
                </Typography>
                <hr />
                <Typography align="center" variant="caption" component="div">
                  Price Range 150-550
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SearchPage;
