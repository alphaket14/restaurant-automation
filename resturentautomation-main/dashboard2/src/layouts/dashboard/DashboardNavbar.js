import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Stack, AppBar, Toolbar, IconButton } from "@material-ui/core";
// components
import { MHidden } from "../../components/@material-extend";
//
import Searchbar from "./Searchbar";
import AccountPopover from "./AccountPopover";
import LanguagePopover from "./LanguagePopover";
import ContactsPopover from "./ContactsPopover";
import NotificationsPopover from "./NotificationsPopover";

import { DateRange } from "@mui/icons-material";

import { Link, NavLink } from "react-router-dom";

// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;
const DRAWER_WIDTH_CLOSED = 64;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72)
  // [theme.breakpoints.up("lg")]: {
  //   width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  // }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,

  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  },
  width: "100%"
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

export default function DashboardNavbar({ onOpenSidebar, sidebarOpen }) {
  return (
    <RootStyle
      sx={{
        width: sidebarOpen
          ? `calc(100% - ${DRAWER_WIDTH + 1}px)`
          : `calc(100% - ${DRAWER_WIDTH_CLOSED + 1}px)`
      }}
    >
      <ToolbarStyle>
        {/* <MHidden width="lgUp">
          <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: "text.primary" }}>
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden> */}

        <Searchbar />
        <Box sx={{ flexGrow: 1 }} />

        <Stack direction="row" spacing={{ xs: 0.5, sm: 1.5 }}>
          <IconButton component={NavLink} to="/dashboard/calendar">
            <DateRange />
          </IconButton>
          <LanguagePopover />
          <NotificationsPopover />
          <ContactsPopover />
          <AccountPopover />
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
