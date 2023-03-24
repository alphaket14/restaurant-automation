import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
  TextField,
  FormGroup,
  FormControlLabel,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Checkbox,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Backdrop,
  Fade,
  List,
  ListItemText,
  ListItemButton,
  Select,
  MenuItem,
  Tabs,
  Tab,
  AppBar,
  Toolbar
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { StarBorder, Star, MenuBook, ArrowBack, Share } from "@mui/icons-material";
import ScrollContainer from "react-indiana-drag-scroll";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const StyledCardContent = styled(CardContent)(`
  padding:8px;
  &:last-child {
    padding-bottom: 8px;
  }
`);

const StyledButton = styled(Button)({
  backgroundColor: "#000",
  color: "#fff",
  ":hover": {
    backgroundColor: "#000"
  }
});

const style = {
  position: "absolute",
  top: "50%",
  right: "150px",
  transform: "translate(50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  maxHeight: 500,
  overflow: "scroll",
  borderRadius: "5px"
};

const RestaurantPage = (props) => {
  const theme = useTheme();
  const navigate = useNavigate();

  const [select, setSelect] = React.useState(0);
  const selectChangeHandler = (event) => {
    setSelect(event.target.value);
  };

  const [openMenuModal, setOpenMenuModal] = React.useState(false);
  const handleOpen = () => setOpenMenuModal(true);
  const handleClose = () => setOpenMenuModal(false);

  const [tab, setTab] = React.useState(0);
  const tabChangeHandler = (event, newValue) => {
    setTab(newValue);
  };

  const menuList = [
    {
      name: "Thick Chocolate Shake",
      type: "In Drinks",
      price: 165.01,
      description: "Our signature chocolate thick shake.",
      image: "shake.jfif"
    },
    {
      name: "Thick Chocolate Shake",
      type: "In Drinks",
      price: 165.01,
      description: "Our signature chocolate thick shake.",
      image: "shake.jfif"
    },
    {
      name: "Thick Chocolate Shake",
      type: "In Drinks",
      price: 165.01,
      description: "Our signature chocolate thick shake.",
      image: "shake.jfif"
    },
    {
      name: "Thick Chocolate Shake",
      type: "In Drinks",
      price: 165.01,
      description: "Our signature chocolate thick shake.",
      image: "shake.jfif"
    }
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
        <Toolbar
          sx={{
            p: "2px 5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}
        >
          <Box>
            <IconButton onClick={() => navigate(-1)}>
              <ArrowBack />
            </IconButton>
          </Box>
          <Box>
            <IconButton sx={{ mr: 1 }}>
              <StarBorder />
            </IconButton>
            <IconButton>
              <Share />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Grid container style={{ padding: "0 10px", position: "relative" }}>
        <Modal
          open={openMenuModal}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={openMenuModal}>
            <Box sx={style}>
              <List sx={{ width: "100%" }}>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Previously Ordered" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Recommended" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Soups" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Main Courses" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Desserts" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Starters" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Barbeques" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Rice" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Naans and Rotis" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Biriyani" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Chicken" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
                <ListItemButton sx={{ p: 1 }}>
                  <ListItemText primary="Mutton" />
                  <ListItemText primary="12" align="right" />
                </ListItemButton>
              </List>
            </Box>
          </Fade>
        </Modal>
        <Button
          variant="contained"
          startIcon={<MenuBook />}
          onClick={handleOpen}
          sx={{
            position: "fixed",
            top: "90vh",
            right: 10,
            zIndex: 1000,
            borderRadius: 3
          }}
        >
          Menu
        </Button>

        <Grid item container sx={{ mt: 1 }}>
          <Box style={{ borderRadius: 15, overflow: "hidden", width: "100%" }}>
            <Carousel showThumbs={false} showStatus={false} dynamicHeight={true}>
              <div>
                <img src="burgerking.jpg" style={{ height: 150 }} />
              </div>
              <div>
                <img src="restaurant.jpg" style={{ height: 150 }} />
              </div>
            </Carousel>
          </Box>
        </Grid>

        <Grid item container sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
          <Grid item container direction="column">
            <Grid
              item
              sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
            >
              <Typography variant="h5" style={{ fontWeight: "bold" }} component="div">
                Burger King
              </Typography>
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
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" component="div">
                Burger, Fast Foods, Desserts
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="subtitle2" color="text.secondary" component="div">
                G-13, C-115, Ground Floor, Opulent Mall, East Model Town, G.T Road, Nehrunagar,
                Ghaziabad.
              </Typography>
              <Typography variant="subtitle2" component="div">
                Contact : +91-123467891
              </Typography>
              <Typography variant="subtitle2" component="div">
                Mon-Sun, 10:00 - 22:00
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container sx={{ mt: 1 }}>
          <Grid
            item
            xs={3}
            style={{
              backgroundColor: "#f4f4f4",
              height: 30,
              borderRadius: 5,
              paddingTop: 3
            }}
          >
            <Typography variant="subtitle2" align="center">
              <i class="fas fa-stopwatch fa-sm"></i> 38 mins
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sx={{ mt: 2 }}>
          <ScrollContainer className="scroll-container" style={{ display: "flex" }}>
            <Grid item sx={{ mr: 2 }}>
              <Card sx={{ minWidth: 150 }}>
                <CardMedia component="img" height="50" src="offer.jfif" />
                <StyledCardContent>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Upto 30% extra off
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    on delivery, on top of all other offers.
                  </Typography>
                </StyledCardContent>
              </Card>
            </Grid>
            <Grid item sx={{ mr: 2 }}>
              <Card sx={{ minWidth: 150 }}>
                <CardMedia component="img" height="50" src="offer.jfif" />
                <StyledCardContent>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Upto 30% extra off
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    on delivery, on top of all other offers.
                  </Typography>
                </StyledCardContent>
              </Card>
            </Grid>
            <Grid item sx={{ mr: 2 }}>
              <Card sx={{ minWidth: 150 }}>
                <CardMedia component="img" height="50" src="offer.jfif" />
                <StyledCardContent>
                  <Typography variant="subtitle1" fontWeight={600}>
                    Upto 30% extra off
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    on delivery, on top of all other offers.
                  </Typography>
                </StyledCardContent>
              </Card>
            </Grid>
          </ScrollContainer>
        </Grid>

        <Grid
          container
          sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", mt: 2 }}
        >
          <Select size="small" value={select} onChange={selectChangeHandler}>
            <MenuItem value={0}>Delivery</MenuItem>
            <MenuItem value={1}>Pick-Up</MenuItem>
          </Select>
          <StyledButton variant="contained" onClick={() => navigate("/reserve")}>
            Reservation
          </StyledButton>
          <StyledButton variant="contained" onClick={() => navigate("/give-review")}>
            Reviews
          </StyledButton>
        </Grid>

        <Grid item container sx={{ mt: 2 }}>
          <Tabs value={tab} onChange={tabChangeHandler}>
            <Tab label="Your Likes" />
            <Tab label="Recommended" />
          </Tabs>
        </Grid>

        <Grid item container style={{ marginTop: 20 }}>
          <Grid item xs={12}>
            <TextField
              InputProps={{
                startAdornment: <i style={{ color: "#e23744" }} className="fas fa-search"></i>
              }}
              variant="outlined"
              type="search"
              fullWidth
              placeholder="Search within the menu"
              size="small"
            />
          </Grid>
        </Grid>
        <Grid item container style={{ marginTop: 20, display: "flex" }}>
          <Grid item sx={{ mr: 2 }}>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Veg" />
            </FormGroup>
          </Grid>
          <Grid item>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Non-Veg" />
            </FormGroup>
          </Grid>
        </Grid>
        <Grid item container xs={12} direction="column" sx={{ margin: "15px 0" }}>
          <Accordion>
            <AccordionSummary expandIcon={<i class="fas fa-caret-down "></i>}>
              <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
                Previously Ordered
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid item container xs={12} rowSpacing={2}>
                {menuList.map((menu) => (
                  <Grid item container xs={12} style={{ borderBottom: "1px solid #f4f4f4" }}>
                    <Grid item container direction="column" xs={8}>
                      <Grid item>
                        <Typography variant="h6" component="div" style={{ fontWeight: "bold" }}>
                          {menu.name}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="caption" component="div" color="text.secondary">
                          {menu.type}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="body2" component="div">
                          {menu.price}
                        </Typography>
                      </Grid>
                      <Grid item>
                        <Typography variant="subtitle2" component="div" color="text.secondary">
                          {menu.description}
                        </Typography>
                      </Grid>
                      <Grid item style={{ marginBottom: 5 }}>
                        <Checkbox icon={<StarBorder />} checkedIcon={<Star />} sx={{ p: 0 }} />
                      </Grid>
                    </Grid>
                    <Grid item container xs={4} direction="column" rowSpacing={2}>
                      <Grid item>
                        <Box
                          fullWidth
                          component="div"
                          style={{
                            position: "relative",
                            height: 100,
                            borderRadius: 10,
                            overflow: "hidden"
                          }}
                        >
                          <img
                            src={menu.image}
                            alt="food"
                            style={{ position: "absolute", height: "100%", width: "100%" }}
                          />
                        </Box>
                      </Grid>
                      <Grid item>
                        <Button fullWidth variant="outlined">
                          ADD
                        </Button>
                      </Grid>
                    </Grid>
                  </Grid>
                ))}
              </Grid>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </>
  );
};
export default RestaurantPage;
