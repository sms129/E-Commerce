import React from "react";
import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import ProductDetails from "../components/ProductDetails";
// import BrandSectionOne from "../components/BrandSectionOne";
import FooterOne from "../components/FooterOne";
import BreadcrumbProductDetails from "../components/BreadcrumbProductDetails";

const ProductDetailsPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbTwo */}
      <BreadcrumbProductDetails />

      {/* ProductDetails */}
      <ProductDetails />

      {/* BrandSectionOne */}

      {/* <BrandSectionOne /> */}

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default ProductDetailsPage;
