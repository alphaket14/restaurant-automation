import React from "react";
import { Grid, List, ListItemButton, Collapse, ListItemText, TextField } from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
const SideFoodMenu = (props) => {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const onClickHandler = () => {
    setOpen(!open);
  };

  const menuItems = [
    { title: "Welcome Drink" },
    { title: "Soup" },
    { title: "Salad" },
    { title: "Starters" },
    { title: "Main Courses" },
    { title: "Dessert" },
    { title: "Chinese" },
    { title: "Mexican" },
    { title: "Italian" }
  ];

  const onSelectItem = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <>
      <Grid
        item
        sx={{ height: "100vh", bgcolor: "#161C24", borderRight: "1px solid #f4f4f4" }}
        xs={2}
      >
        <List sx={{ width: "100%", color: "#fff" }} component="nav">
          <ListItemButton onClick={onClickHandler} sx={{ bgcolor: "#007B55" }}>
            <ListItemText primary="Restaurant" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div">
              {menuItems.map((item, id) => {
                return (
                  <ListItemButton
                    selected={id === selectedIndex}
                    onClick={(event) => onSelectItem(event, id)}
                  >
                    <ListItemText primary={item.title} />
                  </ListItemButton>
                );
              })}
            </List>
          </Collapse>
        </List>
      </Grid>
      <Grid item container xs={4}>
        <Grid item container spacing={3} sx={{ bgcolor: "#161C24", pt: 1, pb: 1 }}>
          <Grid item xs={6}>
            <TextField fullWidth size="small" placeholder="Search Item" />
          </Grid>
          <Grid item xs={6}>
            <TextField fullWidth size="small" placeholder="Search Code" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SideFoodMenu;
