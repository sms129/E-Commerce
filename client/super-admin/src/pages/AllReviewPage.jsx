import MasterLayout from "../layout/MasterLayout";
import Preloader from "../helper/Preloader";
import AllReviews from "../components/AllReviews";

const AllReviewPage = () => {
  return (
    <MasterLayout>
      {/* Preloader */}
      <Preloader />

      {/* AllReviews */}
      <AllReviews />
    </MasterLayout>
  );
};

export default AllReviewPage;
