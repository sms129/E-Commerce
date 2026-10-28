import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import RouteScrollToTop from "./helper/RouteScrollToTop";
import AllProductPage from "./pages/AllProductPage";
import CartPage from "./pages/CartPage";
import CartPersonalPage from "./pages/CartPersonalPage";
import CartThankYouPage from "./pages/CartThankYouPage";
import ContactPage from "./pages/ContactPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import OrdersPage from "./pages/OrdersPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import RegisterPage from "./pages/RegisterPage";
import ReviewPage from "./pages/ReviewPage";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
  return (
    <BrowserRouter>
      <RouteScrollToTop />
      <ScrollToTop smooth color='#A847F0' />
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        {/* all-products/:category_id/:brand_id/:remark/:keyword/:per_page/:page_no */}
        <Route exact path='/all-products' element={<AllProductPage />} />
        <Route exact path='/product-details' element={<ProductDetailsPage />} />
        <Route exact path='/contact' element={<ContactPage />} />

        <Route exact path='/register' element={<RegisterPage />} />
        <Route exact path='/login' element={<LoginPage />} />
        <Route
          exact
          path='/cart'
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/cart-personal'
          element={
            <PrivateRoute>
              <CartPersonalPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/cart-thank-you'
          element={
            <PrivateRoute>
              <CartThankYouPage />
            </PrivateRoute>
          }
        />

        {/* dashboard */}
        <Route
          exact
          path='/dashboard-profile'
          element={
            <PrivateRoute>
              <DashboardProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/dashboard-all-orders'
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/dashboard-review'
          element={
            <PrivateRoute>
              <ReviewPage />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
