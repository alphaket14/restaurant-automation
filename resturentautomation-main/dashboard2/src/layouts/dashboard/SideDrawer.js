import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useAuth from "../../hooks/useAuth";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Logo from "../../components/Logo";
import MyAvatar from "../../components/MyAvatar";
import { Link as RouterLink } from "react-router-dom";
import { Box, Link, Toolbar } from "@material-ui/core";
import sidebarConfig from "./SidebarConfig";
import { PATH_DASHBOARD } from "../../routes/paths";
import NavSection from "../../components/NavSection";
import DashboardNavbar from "./DashboardNavbar";
import DashboardSidebar from "./DashboardSidebar";
import ExpandLessRoundedIcon from "@material-ui/icons/ExpandLessRounded";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { MHidden } from "../../components/@material-extend";
import Scrollbar from "src/components/Scrollbar";
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import * as actionTypes from "../../redux/action";
import { connect } from "react-redux";

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "relative"
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: 36
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: "1201"
  },
  drawerOpen: {
    width: drawerWidth,
    overflowY: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.standard
    })
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.easeIn,
      duration: theme.transitions.duration.standard
    }),
    overflowX: "hidden",
    overflowY: "hidden",
    // width: theme.spacing(7) + 1,
    // [theme.breakpoints.up("sm")]: {
    //   width: theme.spacing(9) + 1,
    // },
    width: "64px",
    [theme.breakpoints.down("md")]: {
      width: 0
    }
  },
  toolbar: {
    position: "fixed",
    top: "1%",
    left: "265px",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    zIndex: "1200",
    "& :hover": {
      background: "whitesmoke"
    },

    // necessary for content to be below app bar
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  closeButton: {
    border: "1px solid rgba(145, 158, 171, 0.24)",
    borderRadius: "10px",
    background: "white",
    "& :hover": {
      background: "whitesmoke"
    }
  }
}));

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12]
}));

const DocStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor:
    theme.palette.mode === "light"
      ? alpha(theme.palette.primary.main, 0.08)
      : theme.palette.primary.lighter
}));

const SideDrawer = (props) => {
  const { user } = useAuth();

  const classes = useStyles();
  const theme = useTheme();
  // const [props.open, setOpen] = React.useState(true);

  // const props.onOpenDrawer = () => {
  //   setOpen(true);
  // };

  // const props.onCloseDrawer = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />

      <DashboardNavbar onClick={props.onOpenDrawer} sidebarOpen={props.open} />
      <Drawer
        onMouseOver={props.onOpenDrawer}
        variant="permanent"
        PaperProps={{
          sx: { bgcolor: "background.default" }
        }}
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: props.open,
          [classes.drawerClose]: !props.open
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: props.open,
            [classes.drawerClose]: !props.open
          })
        }}
      >
        <Scrollbar
          sx={{
            height: "100%",
            "& .simplebar-content": {
              height: "100%",
              display: "flex",
              flexDirection: "column"
            }
          }}
        >
          <MHidden width="lgDown">
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
              }}
            >
              {!props.open && (
                <>
                  <Box
                    component={RouterLink}
                    to="/"
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      pt: 2,
                      justifyContent: "center"
                    }}
                  >
                    <Logo />
                  </Box>
                  {/*Button to Open*/}

                  {/* <IconButton
                    onClick={props.onOpenDrawer}
                    sx={{ mx: "auto", color: "text.primary" }}
                  >
                    <ExpandLessRoundedIcon style={{ transform: "rotate(90deg)" }} />
                  </IconButton> */}
                </>
              )}
            </Box>
          </MHidden>

          {props.open && (
            <>
              <Box sx={{ px: 2.5, py: 2 }}>
                <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
                  <Logo />
                </Box>
              </Box>

              <Box sx={{ mb: 2, mx: 2.5 }}>
                <Link underline="none" component={RouterLink} to={PATH_DASHBOARD.user.account}>
                  <AccountStyle>
                    <MyAvatar />
                    <Box sx={{ ml: 2 }}>
                      <Typography variant="subtitle2" sx={{ color: "text.primary" }}>
                        {user.displayName}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary" }}>
                        {user.role}
                      </Typography>
                    </Box>
                  </AccountStyle>
                </Link>
              </Box>
            </>
          )}

          <NavSection navConfig={sidebarConfig} open={props.open} />

          <Box sx={{ flexGrow: 1 }} />
        </Scrollbar>
      </Drawer>
      {props.open && (
        <>
          <div className={classes.toolbar}>
            <IconButton onClick={props.onCloseDrawer} sx={{ p: 1 }} className={classes.closeButton}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    open: state.sideDrawer.openSidedrawer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenDrawer: () => dispatch({ type: actionTypes.OPEN_SIDEDRAWER }),
    onCloseDrawer: () => dispatch({ type: actionTypes.CLOSE_SIDEDRAWER })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);
