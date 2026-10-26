import { FaRegStar, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import Paginate from "../helper/Paginate";

const AllReviews = () => {
  const StarRating = ({ star }) => {
    star = parseInt(star);
    const totalStars = 5;
    const filledStars = Array(star).fill(<FaStar />);
    const emptyStars = Array(totalStars - star).fill(<FaRegStar />);

    return (
      <div className="star">
        {filledStars.concat(emptyStars).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div className="dashboard-body__content">
      {/* ===================== Review Section Start ========================== */}
      <div className="card common-card border border-gray-five">
        <div className="card-body">
          <div className="table-responsive">
            <div className="product-review-wrapper">
              <div className="product-review">
                <div className="product-review__top flx-between">
                  <div className="review_img">
                    <img src={`https://placehold.co/80x80`} />
                    <div>
                      <Link
                        target="_blank"
                        to={`/super-admin/product-details?product_id=1`}
                      >
                        <h5>Baby Toy Car</h5>
                      </Link>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex align-items-center gap-1">
                      <div className="star">
                        <p className="font-20 fw-bold">Name: Alex Johnson</p>
                        <strong>Email:</strong> alex.johnson@example.com
                      </div>
                    </div>
                    <div className="d-flex align-items-center gap-1">
                      <div className="star d-flex align-items-center gap-1">
                        <StarRating star={5} />
                        <span className="star-rating__text text-body mt-1">
                          5.0 (2024-06-01)
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-review__body">
                  <p className="product-review__desc">
                    A fun and safe toy car for babies.
                  </p>
                </div>
              </div>
            </div>
            <div className="flx-between justify-content-end gap-2">
              <nav aria-label="Page navigation example">
                <div>
                  <Paginate page_no={1} per_page={5} totalCount={10} />
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
    </div>
  );
};

export default AllReviews;
