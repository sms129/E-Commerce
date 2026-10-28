import Preloader from "../helper/Preloader";
import HeaderOne from "../components/HeaderOne";
import BreadcrumbSearch from "../components/BreadcrumbSearch";

import FooterOne from "../components/FooterOne";
import AllProduct from "../components/AllProduct";

const AllProductPage = () => {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      {/* HeaderOne */}
      <HeaderOne />

      {/* BreadcrumbSearch */}
      {/* <BreadcrumbSearch /> */}

      {/* AllProduct */}
      <AllProduct />

      {/* FooterOne */}
      <FooterOne />
    </>
  );
};

export default AllProductPage;
