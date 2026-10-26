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

function App() {
  return (
    <BrowserRouter basename="/super-admin">
      <ScrollToTop smooth color="#A847F0" />
      <Routes>
        {/* dashboard */}
        <Route exact path="/" element={<DashboardPage />} />
        <Route exact path="/profile" element={<DashboardProfilePage />} />
        <Route exact path="/create-product" element={<CreateProductPage />} />

        <Route exact path="/all-product" element={<AllProductPage />} />
        <Route exact path="/all-reviews" element={<AllReviewPage />} />
        <Route exact path="/category" element={<CategoryPage />} />
        <Route exact path="/brand" element={<BrandPage />} />
        <Route exact path="/all-orders" element={<AllOrdersPage />} />
        <Route exact path="/file-manager" element={<FileManagerPage />} />

        <Route exact path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
