import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { alpha, experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Link, List, Drawer, Typography } from "@material-ui/core";
// hooks
import useAuth from "../../hooks/useAuth";
// routes
import { PATH_DASHBOARD, PATH_DOCS } from "../../routes/paths";
// components
import Logo from "../../components/Logo";
import MyAvatar from "../../components/MyAvatar";
import Scrollbar from "../../components/Scrollbar";
import NavSection from "../../components/NavSection";
import { MHidden } from "../../components/@material-extend";
//
import sidebarConfig from "./SidebarConfig";
import StoreIcon from "@material-ui/icons/Store";
import RoomServiceIcon from "@material-ui/icons/RoomService";
import DescriptionIcon from "@material-ui/icons/Description";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney"
import ReceiptIcon from '@material-ui/icons/Receipt';
import AssessmentIcon from '@material-ui/icons/Assessment';
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import PaymentIcon from "@material-ui/icons/Payment";
import DriveFileMoveIcon from "@material-ui/icons/DriveFileMove";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import KitchenIcon from "@material-ui/icons/Kitchen"
import FastfoodIcon from "@material-ui/icons/Fastfood"
import AddBoxIcon from "@material-ui/icons/AddBox"
import DeleteSweepIcon from "@material-ui/icons/DeleteSweep"
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet"
import LocalAtmIcon from "@material-ui/icons/LocalAtm"
import FactCheckIcon from "@material-ui/icons/FactCheck"
import SmsIcon from "@material-ui/icons/Sms"
import ConfirmationNumberIcon from "@material-ui/icons/ConfirmationNumber";
import { BarChart as BarChartIcon } from "react-feather";
import NavItem from "./NavItem";
import useSettings from "../../hooks/useSettings";
import Button from "src/theme/overrides/Button";
import { PanoramaPhotosphere, PointOfSale, Settings } from "@material-ui/icons";
// ----------------------------------------------------------------------

const DRAWER_WIDTH = 280;

const items = [
  {
    href: "/dashboard/app",
    icon: BarChartIcon,
    title: "Home",
  },
  {href: "/dashboard/outlet-settings",
  icon: Settings,
  title:"Settings"
},
  {
    href: "/dashboard/outlets",
    icon: StoreIcon,
    title: "Outlets",
  },
  {
    href: "/dashboard/analytics",
    icon: AssessmentIcon,
    title: "Analytics",
  },
  {
    href:"/dashboard/all-screens",
    icon: PanoramaPhotosphere,
    title: "All Screens"
  },
  {
    href: "/dashboard/orders",
    icon: StoreIcon,
    title: "Orders",
  },
  {
    href: "/dashboard/services",
    icon: RoomServiceIcon,
    title: "Food Menu",
  },
  {
    href: "/dashboard/tickets",
    icon: ConfirmationNumberIcon,
    title: "Tickets",
  },
  {
    href: "/dashboard/invoices",
    icon: DescriptionIcon,
    title: "Soft copies of Invoice",
  },
  {
    href: "/dashboard/subscriptions",
    icon: CardMembershipIcon,
    title: "Subscriptions",
  },
  {
    href: "/dashboard/commisions",
    icon: PaymentIcon,
    title: "Commision",
  },
  {
    href: "/dashboard/Purchase",
    icon: AttachMoneyIcon,
    title: "Purchase",
  },
  {
    href: "/dashboard/Transfer",
    icon: DriveFileMoveIcon,
    title: "Transfer",
  },
  {
    href: "/dashboard/Sale",
    icon: MonetizationOnIcon,
    title: "Sale",
  },
  {
    href: "/dashboard/stock",
    icon: AllInboxIcon,
    title: "Stock",
  },
  {
    href: "/dashboard/food-menu-stock",
    icon: FastfoodIcon,
    title: "Food Menu Stock",
  },
  {
    href: "/dashboard/adjustments-stock",
    icon: AddBoxIcon,
    title: "Stock Adjustments",
  },
  {
    href: "/dashboard/Waste",
    icon: DeleteSweepIcon,
    title: "Waste",
  },
  {
    href: "/dashboard/Expense",
    icon: AccountBalanceWalletIcon,
    title: "Expense",
  },
  {
    href: "/dashboard/SDR",
    icon: LocalAtmIcon,
    title: "Supplier Due Payments",
  },
  {
    href: "/dashboard/CDR",
    icon: LocalAtmIcon,
    title: "Customer Due Recieve",
  },
  {
    href: "/dashboard/attendance",
    icon: FactCheckIcon,
    title: "Attendence",
  },
  {
    href: "/dashboard/SMS",
    icon: SmsIcon,
    title: "Send SMS",
  },
  {
    href: "/dashboard/reservationmanagement",
    icon: SmsIcon,
    title: "Reservation Management",
  },
  {
    href: "/dashboard/wait",
    icon: SmsIcon,
    title: "Wait List Manangment",
  },
  {
    href: "/dashboard/cheques",
    icon: SmsIcon,
    title: "Split cheques/Divide Bills",
  },
  {
    href: "/dashboard/banner",
    icon: SmsIcon,
    title: "Generate custom Banner Ads",
  },
  {
    href: "/dashboard/loyalty",
    icon: SmsIcon,
    title: "Custome Loyalty Program",
  },
  {
    href: "/dashboard/Billing",
    icon: ReceiptIcon,
    title: "Billing",
  }
];

const AccountStyle = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(2, 2.5),
  borderRadius: theme.shape.borderRadiusSm,
  backgroundColor: theme.palette.grey[500_12],
}));

const DocStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(2.5),
  borderRadius: theme.shape.borderRadiusMd,
  backgroundColor:
    theme.palette.mode === "dark"
      ? alpha(theme.palette.primary.main, 0.08)
      : theme.palette.primary.lighter,
}));

// ----------------------------------------------------------------------

DashboardSidebar.propTypes = {
  isOpenSidebar: PropTypes.bool,
  onCloseSidebar: PropTypes.func,
};

export default function DashboardSidebar({ isOpenSidebar, onCloseSidebar }) {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const { themeMode, themeDirection } = useSettings();
  const isLight = themeMode === "light";
  console.log(themeMode);

  useEffect(() => {
    if (isOpenSidebar) {
      onCloseSidebar();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const RootStyle = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("lg")]: {
      flexShrink: 0,
      width: DRAWER_WIDTH,
    },
  }));

  const renderContent = (
    <Scrollbar
      sx={{
        height: "100%",
        "& .simplebar-content": {
          height: "100%",
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      <Box sx={{ px: 2.5, py: 3 }}>
        <Box component={RouterLink} to="/" sx={{ display: "inline-flex" }}>
          <Logo />
        </Box>
      </Box>

      {/* <NavSection navConfig={sidebarConfig} /> */}
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
          <NavItem
              href="/dashboard/report"
              key="report"
              title="Report"
              icon={StoreIcon}
            />

<NavItem
              href="/dashboard/master"
              key="master"
              title="Master"
              icon={StoreIcon}
            />
        <NavItem
              href="/dashboard/point-of-sale"
              key="pointofsale"
              title="Point of Sale"
              icon={PointOfSale}
            />
        </List>
       

      </Box>
          
      <Box sx={{ flexGrow: 1 }} />

      <Box sx={{ px: 2.5, pb: 3, mt: 10 }}>
        <Link
          underline="none"
          component={RouterLink}
          to={PATH_DASHBOARD.user.account}
        >
          <AccountStyle>
            <MyAvatar />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2" sx={{ color: "white" }}>
                {user.displayName}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {user.role}
              </Typography>
            </Box>
          </AccountStyle>
        </Link>
      </Box>
    </Scrollbar>
  );

  return (
    <RootStyle>
      <MHidden width="lgUp">
        <Drawer
          open={isOpenSidebar}
          onClose={onCloseSidebar}
          PaperProps={{
            sx: { width: DRAWER_WIDTH, bgcolor: "#161C24 !important" },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>

      <MHidden width="lgDown">
        <Drawer
          open
          variant="persistent"
          PaperProps={{
            sx: { width: DRAWER_WIDTH },
          }}
        >
          {renderContent}
        </Drawer>
      </MHidden>
    </RootStyle>
  );
}
