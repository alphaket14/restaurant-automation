import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Container/Homepage/Homepage";
import ProfilePage from "./Container/ProfilePage/ProfilePage";
import FavouriteRestaurants from "./Container/ProfilePage/FavouriteRestaurants";
import NotificationsPage from "./Container/ProfilePage/NotificationsPage";
import OrderHistory from "./Container/ProfilePage/OrderHistory";
import Reservations from "./Container/ProfilePage/Reservations";
import ProfileSettings from "./Container/ProfilePage/ProfileSettings";
import NotificationSettings from "./Container/ProfilePage/NotificationSettings";
import EditProfile from "./Container/ProfilePage/EditProfile";
import SendFeedback from "./Container/ProfilePage/SendFeedback";
import DeleteAccount from "./Container/ProfilePage/DeleteAccount";
import About from "./Container/ProfilePage/About";
import RestaurantPage from "./Container/Restaurants/RestaurantPage";
import BookTable from "./Container/Restaurants/BookTable";
import SelectTable from "./Container/Restaurants/SelectTable";
import TableReservationSummary from "./Container/Restaurants/TableReservationSummary";
import ReviewsPage from "./Container/Restaurants/ReviewsPage";
import Payments from "./Container/Payments";
import ReservationBottomTab from "./Container/ReservationBottomTab";
import BottomAppBar from "./Components/BottomAppBar";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BottomAppBar>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/reservation-tab" element={<ReservationBottomTab />} />
        </Routes>
      </BottomAppBar>
      <Routes>
        <Route path="/restaurant" element={<RestaurantPage />} />
        <Route path="/reserve" element={<BookTable />} />
        <Route path="/select-table" element={<SelectTable />} />
        <Route path="/table-reservation-summary" element={<TableReservationSummary />} />
        <Route path="/give-review" element={<ReviewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/checkout" element={<Payments />} />
        <Route path="/favourite" element={<FavouriteRestaurants />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/reservations" element={<Reservations />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/notification-settings" element={<NotificationSettings />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/delete-account" element={<DeleteAccount />} />
        <Route path="/send-feedback" element={<SendFeedback />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
