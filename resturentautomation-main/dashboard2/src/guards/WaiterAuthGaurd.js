//import { useState } from "react";
//import { Navigate, useLocation } from "react-router-dom";
//import PropTypes from "prop-types";
//// hooks
//import useAuth from "../hooks/useAuth";
//// pages
//import Login from "../pages/authentication/Login";
//import LoginWaiter from "src/pages/waiter_authentication/Login";
//
//// ----------------------------------------------------------------------
//
//WaiterAuthGuard.propTypes = {
  //children: PropTypes.node,
//};
//
//export default function WaiterAuthGuard({ children }) {
  //const { isAuthenticated } = useAuth();
  //const { pathname } = useLocation();
  //const [requestedLocation, setRequestedLocation] = useState(null);
//
  //if (!isAuthenticated) {
    //if (pathname !== requestedLocation) {
      //setRequestedLocation(pathname);
    //}
    //return <Navigate to={requestedLocation} />;
    ////return <LoginWaiter />;
  //}
//
  //if (requestedLocation && pathname !== requestedLocation) {
    //setRequestedLocation(null);
    //return <Navigate to={pathname} />;
  //}
//
  //return <>{children}</>;
//}
