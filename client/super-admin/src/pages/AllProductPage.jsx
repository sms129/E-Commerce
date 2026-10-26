import MasterLayout from "../layout/MasterLayout";
import Preloader from "../helper/Preloader";
import AllProducts from "../components/AllProducts";

const AllProductPage = () => {
  return (
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* AllProducts */}
      <AllProducts />
    </MasterLayout>
  );
};

export default AllProductPage;
