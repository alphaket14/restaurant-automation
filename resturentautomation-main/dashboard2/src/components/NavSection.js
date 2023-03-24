import { useState } from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import { NavLink as RouterLink, matchPath, useLocation } from "react-router-dom";
import arrowIosForwardFill from "@iconify/icons-eva/arrow-ios-forward-fill";
import arrowIosDownwardFill from "@iconify/icons-eva/arrow-ios-downward-fill";
// material
import { alpha, useTheme, experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  List,
  ListItem,
  Collapse,
  ListItemText,
  ListItemIcon,
  ListSubheader
} from "@material-ui/core";

import * as actionTypes from "../redux/action";
import { connect } from "react-redux";
import { CircleOutlined } from "@mui/icons-material";

// ----------------------------------------------------------------------

const ListSubheaderStyle = styled((props) => (
  <ListSubheader disableSticky disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.overline,
  marginTop: theme.spacing(3),
  marginBottom: theme.spacing(2),
  paddingLeft: theme.spacing(5),
  color: theme.palette.text.primary
}));

const ListItemStyle = styled((props) => <ListItem button disableGutters {...props} />)(
  ({ theme }) => ({
    ...theme.typography.body2,
    height: 48,
    position: "relative",
    textTransform: "capitalize",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(2.5),
    color: theme.palette.text.secondary,
    overflowX: "hidden",
    "&:before": {
      top: 0,
      right: 0,
      width: 3,
      bottom: 0,
      content: "''",
      display: "none",
      position: "absolute",
      borderTopLeftRadius: 4,
      borderBottomLeftRadius: 4,
      backgroundColor: theme.palette.primary.main
    }
  })
);

const ListItemIconStyle = styled(ListItemIcon)({
  width: 22,
  height: 22,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
  // marginRight: 1
});

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
  active: PropTypes.func
};

function NavItem({ item, active, sub, sub2, onclick, headerOpen }) {
  const theme = useTheme();
  const isActiveRoot = active(item.path);
  const { title, path, icon, info, children, subchildren } = item;
  const [open, setOpen] = useState(isActiveRoot);
  const [open2, setOpen2] = useState(false);
  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  const activeRootStyle = {
    color: "primary.main",
    fontWeight: "fontWeightMedium",
    bgcolor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    "&:before": { display: "block" }
  };

  const activeSubStyle = {
    color: "text.primary",
    fontWeight: "fontWeightMedium"
  };
  if (subchildren) { //HRM shift, Employee manage ka baccha h kya?
    return (
      <>
        <ListItemStyle
          onClick={() => {
            handleOpen();
            onclick();
          }}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle sx={{ ml: sub ? sub2 ? 6 : 3: 0 , mr: sub ? 1 : 2 }}>
            {icon ? (
              icon
            ) : (
              <Box
                component="span"
                sx={{
                  width: 4,
                  height: 4,
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "text.disabled",
                  transition: (theme) => theme.transitions.create("transform"),
                  ...(isActiveRoot && {
                    transform: "scale(2)",
                    bgcolor: "primary.main"
                  })
                }}
              />
            )}
          </ListItemIconStyle>
          <ListItemText disableTypography primary={title} sx={{ fontSize: sub ? 14 : 15 }} /> {/*prints employee manage or Payroll*/}
          {info && info}
          <Box
            component={Icon}
            icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16 }}
          />
        </ListItemStyle>

        <Collapse in={open && headerOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {subchildren.map((item) => { //this maps HRM, shift manage, ...
              const { title, path, children, subchildren } = item;
              const isActiveSub = active(path);
              if (subchildren){
                return(
                  <NavItem 
                  item={item}
                  active={active}
                  sub={true}
                  sub2={true}
                  onclick={onclick}
                  headerOpen={headerOpen}
                  />
                );
              }
              else if (children) { //if HRM has children
                return(
                  <NavItem 
                  item={item}
                  active={active}
                  sub={true}
                  onclick={onclick}
                  headerOpen={headerOpen}
                  />
                );
              }

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle)
                  }}
                >
                  <ListItemIconStyle sx={{ ml: sub ? sub2 ? 9: 6 : 3, mr: 1 }}>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) => theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "primary.main"
                        })
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText
                    disableTypography
                    primary={title}
                    sx={{ fontSize: sub ? 13 : 14 }}
                  />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }
  if (children) { //HRM shift, Employee manage ka baccha h kya?
    return (
      <>
        <ListItemStyle
          onClick={() => {
            handleOpen();
            onclick();
          }}
          sx={{
            ...(isActiveRoot && activeRootStyle)
          }}
        >
          <ListItemIconStyle sx={{ ml: sub ? sub2 ? 6 : 3: 0 , mr: sub ? 1 : 2 }}>
            {icon ? (
              icon
            ) : (
              <Box
                component="span"
                sx={{
                  width: 4,
                  height: 4,
                  display: "flex",
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "text.disabled",
                  transition: (theme) => theme.transitions.create("transform"),
                  ...(isActiveRoot && {
                    transform: "scale(2)",
                    bgcolor: "primary.main"
                  })
                }}
              />
            )}
          </ListItemIconStyle>
          <ListItemText disableTypography primary={title} sx={{ fontSize: sub ? 14 : 15 }} /> {/*prints employee manage or Payroll*/}
          {info && info}
          <Box
            component={Icon}
            icon={open ? arrowIosDownwardFill : arrowIosForwardFill}
            sx={{ width: 16, height: 16 }}
          />
        </ListItemStyle>

        <Collapse in={open && headerOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {children.map((item) => { //this maps HRM, shift manage, ...
              const { title, path, children, subchildren } = item;
              //const isActiveRoot2 = active(path);
              const isActiveSub = active(path);
              const handleOpen2 = () => {
                setOpen2((prev) => !prev);
              };
              if (subchildren){
                return(
                  <NavItem 
                  item={item}
                  active={active}
                  sub={true}
                  sub2={true}
                  onclick={onclick}
                  headerOpen={headerOpen}
                  />
                );
              }
              else if (children) { //if HRM has children
                return(
                  <NavItem 
                  item={item}
                  active={active}
                  sub={true}
                  onclick={onclick}
                  headerOpen={headerOpen}
                  />
                );
              }

              return (
                <ListItemStyle
                  key={title}
                  component={RouterLink}
                  to={path}
                  sx={{
                    ...(isActiveSub && activeSubStyle)
                  }}
                >
                  <ListItemIconStyle sx={{ ml: sub ? sub2 ? 9: 6 : 3, mr: 1 }}>
                    <Box
                      component="span"
                      sx={{
                        width: 4,
                        height: 4,
                        display: "flex",
                        borderRadius: "50%",
                        alignItems: "center",
                        justifyContent: "center",
                        bgcolor: "text.disabled",
                        transition: (theme) => theme.transitions.create("transform"),
                        ...(isActiveSub && {
                          transform: "scale(2)",
                          bgcolor: "primary.main"
                        })
                      }}
                    />
                  </ListItemIconStyle>
                  <ListItemText
                    disableTypography
                    primary={title}
                    sx={{ fontSize: sub ? 13 : 14 }}
                  />
                </ListItemStyle>
              );
            })}
          </List>
        </Collapse>
      </>
    );
  }

  return (
    <ListItemStyle
      component={RouterLink}
      to={path}
      sx={{
        ...(isActiveRoot && activeRootStyle)
      }}
    >
      <ListItemIconStyle>{icon && icon}</ListItemIconStyle>
      <ListItemText disableTypography primary={title} sx={{ fontSize: 15 }} />
      {info && info}
    </ListItemStyle>
  );
}

const NavSection = ({ navConfig, open, ...other }) => {
  const { pathname } = useLocation();
  const match = (path) => (path ? !!matchPath({ path, end: false }, pathname) : false);

  return (
    <Box {...other}>
      {navConfig.map((list) => {
        const { subheader, items } = list;
        return (
          <List key={subheader} disablePadding>
            {open && <ListSubheaderStyle>{subheader}</ListSubheaderStyle>}
            {items.map((item) => (
              <NavItem
                key={item.title}
                item={item}
                active={match}
                onclick={other.onOpenDrawer}
                headerOpen={open}
              />
            ))}
          </List>
        );
      })}
    </Box>
  );
};

// NavSection.propTypes = {
//   navConfig: PropTypes.array
// };

const mapStateToProps = (state) => {
  return {
    openSideDrawer: state.sideDrawer.openSidedrawer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenDrawer: () => dispatch({ type: actionTypes.OPEN_SIDEDRAWER }),
    onCloseDrawer: () => dispatch({ type: actionTypes.CLOSE_SIDEDRAWER })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavSection);
