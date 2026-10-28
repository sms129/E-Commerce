import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import AllOrdersPage from "./pages/AllOrdersPage";
import AllProductPage from "./pages/AllProductPage";
import AllReviewPage from "./pages/AllReviewPage";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import CreateProductPage from "./pages/CreateProductPage";
import DashboardPage from "./pages/DashboardPage";
import DashboardProfilePage from "./pages/DashboardProfilePage";
import FileManagerPage from "./pages/FileManagerPage";
import LoginPage from "./pages/LoginPage";
import PrivateRoute from "./layout/PrivateRoute";

function App() {
  return (
    <BrowserRouter basename='/super-admin'>
      <ScrollToTop smooth color='#A847F0' />
      <Routes>
        {/* dashboard */}
        <Route
          exact
          path='/'
          element={
            <PrivateRoute>
              <DashboardPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/profile'
          element={
            <PrivateRoute>
              <DashboardProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/create-product'
          element={
            <PrivateRoute>
              <CreateProductPage />
            </PrivateRoute>
          }
        />

        <Route
          exact
          path='/all-products'
          element={
            <PrivateRoute>
              <AllProductPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/all-reviews'
          element={
            <PrivateRoute>
              <AllReviewPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/category'
          element={
            <PrivateRoute>
              <CategoryPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/brand'
          element={
            <PrivateRoute>
              <BrandPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/all-orders'
          element={
            <PrivateRoute>
              <AllOrdersPage />
            </PrivateRoute>
          }
        />
        <Route
          exact
          path='/file-manager'
          element={
            <PrivateRoute>
              <FileManagerPage />
            </PrivateRoute>
          }
        />

        <Route exact path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
