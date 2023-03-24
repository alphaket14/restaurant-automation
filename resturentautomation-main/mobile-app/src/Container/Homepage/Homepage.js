import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import HorizontalScroll from "../../Components/HorizontalScroll";
import SearchPage from "./SearchPage";
import {
  Grid,
  Box,
  Button,
  Card,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Slide,
  Collapse,
  TextField,
  Checkbox
} from "@mui/material";
import { ExpandMore, ExpandLess, Star, StarBorder } from "@mui/icons-material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

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

const Homepage = (props) => {
  const horScrollArray = [
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" },
    { image: "veg1.jfif", title: "Food" }
  ];

  const offersArray = [
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" },
    { image: "momo.jfif", title: "Momo" }
  ];

  const navigate = useNavigate();

  const [search, setSearch] = useState(false);
  const [seeMore, setSeeMore] = useState(false);

  const onSeeMoreHandler = () => setSeeMore(!seeMore);

  return (
    <>
      <Grid container style={{ margin: "20px 0", padding: "0 10px" }}>
        <Grid item xs={2}>
          <Box
            component="div"
            style={{
              boxSizing: "border-box",
              borderRadius: "50%",
              backgroundColor: "#e23744",
              height: 40,
              width: 40,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <img src="https://img.icons8.com/material/24/000000/marker--v1.png" />
          </Box>
        </Grid>
        <Grid item xs={6} style={{ fontWeight: "bold" }}>
          <Typography component="div" variant="body1" style={{ fontWeight: "bold" }}>
            Home <i className="fas fa-chevron-down"></i>
          </Typography>
          <Typography component="div" variant="subtitle2" color="text.secondary">
            Karol Bagh, New Delhi
          </Typography>
        </Grid>
        <Grid item xs={2} align="right">
          <IconButton
            color="primary"
            onClick={() => {
              setSearch(true);
            }}
            style={{ display: search ? "none" : "block" }}
          >
            <i className="fas fa-search"></i>
          </IconButton>
        </Grid>
        <Grid item xs={2} align="right">
          {search ? (
            <Box
              component="div"
              style={{
                boxSizing: "border-box",
                borderRadius: "50%",
                backgroundColor: "#c2c2c2",
                height: 40,
                width: 40,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onClick={() => setSearch(false)}
            >
              <i className="fas fa-times"></i>
            </Box>
          ) : (
            <Box
              component="div"
              onClick={() => navigate("/profile")}
              style={{
                boxSizing: "border-box",
                borderRadius: "50%",
                height: 40,
                width: 40,
                position: "relative",
                overflow: "hidden"
              }}
            >
              <img
                src="dp.jpg"
                style={{ position: "absolute", height: "100%", width: "100%", top: 0, left: 0 }}
              />
            </Box>
          )}
        </Grid>
      </Grid>
      <Collapse in={search}>
        <SearchPage />
      </Collapse>
      <Slide direction="up" in={!search} timeout={{ enter: 500, exit: 500 }}>
        <Grid container>
          <Grid item container style={{ boxSizing: "border-box", padding: "0 10px" }}>
            <Box style={{ borderRadius: 15, overflow: "hidden", width: "100%" }}>
              <Carousel showThumbs={false} showStatus={false} dynamicHeight={true}>
                <div>
                  <img src="2.png" style={{ height: 180 }} />
                </div>
                <div>
                  <img src="1.png" style={{ height: 180 }} />
                </div>
              </Carousel>
            </Box>
          </Grid>
          {/* Carousel Ends */}

          <Grid item container sx={{ pl: 2, mt: 2 }}>
            <Typography variant="body1" fontWeight={600}>
              Top offers for you
            </Typography>
          </Grid>

          <Grid item container spacing={1} sx={{ p: 2 }}>
            {offersArray.map((el) => {
              return (
                <Grid item container xs={3} style={{ alignItems: "center" }} direction="column">
                  <Grid item sx={{ position: "relative" }}>
                    <Box
                      sx={{
                        position: "absolute",
                        bottom: 0,
                        borderRadius: "4px",
                        height: 15,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        p: "1px 2px",
                        bgcolor: "primary.main",
                        zIndex: 100
                      }}
                    >
                      <Typography variant="caption" color="#fff" noWrap textAlign="center">
                        50% OFF on Food
                      </Typography>
                    </Box>
                    <Box
                      style={{
                        position: "relative",
                        boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
                        height: 70,
                        width: 70,
                        borderRadius: "50%",
                        overflow: "hidden"
                      }}
                    >
                      <img
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          height: "100%",
                          width: "100%"
                        }}
                        src={el.image}
                      />
                    </Box>
                  </Grid>
                  <Grid item align="center">
                    {el.title}
                  </Grid>
                </Grid>
              );
            })}
          </Grid>

          {/* Menu Section Starts */}
          <Grid item container sx={{ pl: 2, mt: 2 }}>
            <Typography variant="body1" fontWeight={600}>
              Eat what makes you happy
            </Typography>
          </Grid>

          <Collapse in={seeMore} collapsedSize={230} sx={{ width: "100%" }}>
            <Grid item container spacing={1} sx={{ p: 2 }}>
              {horScrollArray.map((el) => {
                return (
                  <Grid
                    item
                    container
                    xs={3}
                    style={{ alignItems: "center" }}
                    direction="column"
                    rowGap={1}
                  >
                    <Grid item align="center">
                      <Box
                        style={{
                          position: "relative",
                          boxShadow: "0 3px 5px rgba(0,0,0,0.3)",
                          height: 70,
                          width: 70,
                          borderRadius: "50%",
                          overflow: "hidden"
                        }}
                      >
                        <img
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            height: "100%",
                            width: "100%"
                          }}
                          src={el.image}
                        />
                      </Box>
                    </Grid>
                    <Grid item align="center">
                      {el.title}
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Collapse>

          <Grid item container justifyContent="center" sx={{ mt: 1 }}>
            <Button
              variant="text"
              endIcon={seeMore ? <ExpandLess /> : <ExpandMore />}
              size="small"
              fullWidth
              onClick={onSeeMoreHandler}
            >
              {seeMore ? "see less" : "see more"}
            </Button>
          </Grid>
          {/* Menu Section Ends */}

          <Grid container style={{ margin: "20px 0", padding: "0 10px", fontWeight: "bold" }}>
            <Grid item xs={10}>
              127 Restaurants around you
            </Grid>
          </Grid>

          <Grid item container rowSpacing={2} sx={{ p: 1 }} direction="column">
            <Grid item>
              <Card
                style={{ maxWidth: 500, position: "relative" }}
                onClick={() => navigate("/restaurant")}
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
            <Grid item>
              <Card style={{ maxWidth: 500, position: "relative" }}>
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
            <Grid item>
              <Card style={{ maxWidth: 500, position: "relative" }}>
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
        </Grid>
      </Slide>
    </>
  );
};
export default Homepage;
