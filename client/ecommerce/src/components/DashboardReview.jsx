import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import Paginate from "../helper/Paginate";

const DashboardReview = () => {
  return (
    <div className="dashboard-body__content">
      point
      {/* ===================== Review Section Start ========================== */}
      <div className="card common-card border border-gray-five">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table text-body mt--24">
              <thead>
                <tr>
                  <th>Product | Date</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>QTY</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="review-product d-flex align-items-center gap-2">
                      <div className="review-product__thumb flex-shrink-0">
                        <img
                          src={`https://placehold.co/50x50`}
                          alt="review product"
                        />
                      </div>
                      <div className="review-product__content">
                        <h6 className="review-product__name font-15 fw-500 mb-0">
                          <Link
                            target="_blank"
                            to={`/product-details?product_id=1`}
                            className="link"
                          >
                            Baby Toy
                          </Link>
                        </h6>
                        <span className="review-product__date font-12">
                          Dec 1, 2020
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-16">
                      <strong className="fw-600 badge bg-dark text-capitalize">
                        Red
                      </strong>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-16">
                      <strong className="fw-600 badge bg-dark text-uppercase">
                        L
                      </strong>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-16">
                      <strong className="fw-600 badge bg-dark">2</strong>
                    </div>
                  </td>
                  <td>
                    <div className="product-user font-16">
                      <strong className="fw-600 badge bg-danger ">1000</strong>
                    </div>
                  </td>

                  <td>
                    <button
                      data-bs-toggle="modal"
                      data-bs-target={`#exampleModal_1`}
                      className="btn btn-main"
                    >
                      Make a review
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="flx-between justify-content-end gap-2">
              <nav aria-label="Page navigation example">
                <Paginate page_no={1} per_page={5} totalCount={10} />
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
      {/*  */}
      <>
        <div
          className="modal fade order_item"
          id={`exampleModal_1`}
          tabIndex={-1}
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h6 className="modal-title fs-5" id="exampleModalLabel">
                  Product Review
                </h6>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>

              <div className="modal-body">
                <div className="profile">
                  <div className="row gy-4">
                    <div className="col-12">
                      <div className="dashboard-card">
                        <div className="profile-info-content">
                          <div className="tab-content" id="pills-tabContent">
                            <div className="tab-pane fade show active">
                              <form action="#" autoComplete="off">
                                <div className="row gy-4">
                                  <div className="col-12">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">
                                      Add Feedback
                                    </label>
                                    <textarea className="common-input border"></textarea>
                                  </div>
                                  <div className="col-12">
                                    <label className="form-label mb-2 font-18 font-heading fw-600">
                                      Add Review
                                    </label>
                                    <ReactStars
                                      count={5}
                                      size={34}
                                      color2={"#ffd700"}
                                      value={4}
                                      half={false}
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button data-bs-dismiss="modal" className="btn btn-primary">
                  Submit review
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default DashboardReview;
