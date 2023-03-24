import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Box,
  Button,
  Paper,
  TextField,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Rating
} from "@mui/material";
import { makeStyles } from "@material-ui/core";
import { Edit, ArrowBack, Add, Remove } from "@mui/icons-material";

const ReviewsPage = (props) => {
  const navigate = useNavigate();

  const [ratingStars, setRatingStars] = useState(0);

  const ratingStarsChangeHandler = (newValue) => {
    setRatingStars(newValue);
  };

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
      <Grid container rowSpacing={4} direction="column" sx={{ p: 1 }}>
        <Grid item>
          <Paper elevation={6} sx={{ display: "flex", p: "3px", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box
                sx={{
                  position: "relative",
                  height: 75,
                  width: 75,
                  overflow: "hidden",
                  borderRadius: 1
                }}
              >
                <img
                  src="burgerking.jpg"
                  style={{ position: "absolute", height: "100%", width: "100%" }}
                />
              </Box>

              <Box sx={{ pl: 1, display: "flex", flexDirection: "column" }}>
                <Typography variant="h6" fontWeight={600}>
                  Burger King
                </Typography>
                <Typography variant="subtitle2" color="text.secondary">
                  Sodepur, Kolkata
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={6} sx={{ p: 2 }}>
            <Typography variant="body1" gutterBottom fontWeight={600}>
              Rate this Restaurant
            </Typography>
            <Box sx={{ width: "100%", textAlign: "center", mb: 2 }}>
              <Rating name="simple-controlled" />
            </Box>
            <Typography variant="body1" fontWeight={600} gutterBottom>
              Write your Review
            </Typography>
            <TextField
              multiline
              rows={5}
              maxRows={8}
              placeholder="Would you like to write something about this restaurant?"
              fullWidth
            />
          </Paper>
        </Grid>
        <AppBar position="fixed" sx={{ top: "auto", bottom: 0, bgcolor: "#fff" }}>
          <Toolbar>
            <Button fullWidth variant="contained">
              Submit Review
            </Button>
          </Toolbar>
        </AppBar>
      </Grid>
    </>
  );
};
export default ReviewsPage;
