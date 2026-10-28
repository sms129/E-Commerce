import { FaArrowRotateRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Paginate from "../helper/Paginate";

const AllProduct = () => {
  return (
    <>
      <section className="breadcrumb breadcrumb-one padding-y-60 section-bg position-relative z-index-1 overflow-hidden">
        <img
          src="assets/images/gradients/breadcrumb-gradient-bg.png"
          alt=""
          className="bg--gradient"
        />
        <img
          src="assets/images/shapes/element-moon3.png"
          alt=""
          className="element one"
        />
        <img
          src="assets/images/shapes/element-moon1.png"
          alt=""
          className="element three"
        />
        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="breadcrumb-one-content">
                <h3 className="breadcrumb-one-content__title text-center mb-3 text-capitalize">
                  10 products available for purchase
                </h3>
                <p className="breadcrumb-one-content__desc text-center text-black-three">
                  Explore the best Product available for sale. Our unique
                  collection is hand-curated by experts. Find and buy the
                  perfect premium product.
                </p>
                <div className="search-box">
                  <input
                    type="text"
                    className="common-input common-input--lg pill shadow-sm"
                    placeholder="Search product & more..."
                  />
                  <button className="btn btn-main btn-icon icon border-0">
                    <img src="assets/images/icons/search.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`all-product padding-y-120`}>
        <div className="container container-two">
          <div className="row">
            <div className="col-lg-12">
              <div className="filter-tab gap-3 flx-between">
                <div className="gap-3 flx-between">
                  <button
                    type="button"
                    className="filter-tab__button btn btn-outline-light pill d-flex align-items-center"
                  >
                    <span className="icon icon-left">
                      <FaArrowRotateRight />
                    </span>
                    <span className="font-18 fw-500">Reset</span>
                  </button>
                </div>

                <div className="list-grid d-flex align-items-center gap-2">
                  <button
                    className={`list-grid__button list-button d-sm-flex d-none text-body`}
                  >
                    <i className="las la-list" />
                  </button>
                  <button
                    className={`list-grid__button grid-button d-sm-flex d-none  text-body`}
                  >
                    <i className="las la-border-all" />
                  </button>
                  <button className="list-grid__button sidebar-btn text-body d-lg-none d-flex">
                    <i className="las la-bars" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4">
              {/* ===================== Filter Sidebar Start ============================= */}
              <div className={`filter-sidebar`}>
                <button
                  type="button"
                  className="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block"
                >
                  <i className="las la-times" />
                </button>

                {/* sidebar item */}
                <div className="filter-sidebar__item">
                  <div>
                    <button
                      type="button"
                      className="filter-sidebar__button font-16 text-capitalize fw-500"
                    >
                      Category
                    </button>
                    <div className="filter-sidebar__content">
                      <ul className="filter-sidebar-list">
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Home Appliances <span className="qty">2</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Jewellery <span className="qty">0</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Groceries <span className="qty">3</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Men's <span className="qty">5</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Women's <span className="qty">9</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-5">
                    <button
                      type="button"
                      className="filter-sidebar__button font-16 text-capitalize fw-500"
                    >
                      Brands
                    </button>
                    <div className="filter-sidebar__content">
                      <ul className="filter-sidebar-list">
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            No Brand <span className="qty">10</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Philips <span className="qty">3</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Dell <span className="qty">8</span>
                          </span>
                        </li>
                        <li className="filter-sidebar-list__item courser">
                          <span className="filter-sidebar-list__text">
                            Lg <span className="qty">5</span>
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              {/* ===================== Filter Sidebar End ============================= */}
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="tab-content">
                <div
                  className="tab-pane fade show active"
                  id="pills-product"
                  role="tabpanel"
                  aria-labelledby="pills-product-tab"
                  tabIndex={0}
                >
                  <div className="row gy-4 list-grid-wrapper">
                    {[...Array(10)].map(() => (
                      <div className="col-xl-3 col-lg-4 col-sm-6">
                        <div className="product-item">
                          <div className="product-item__thumb d-flex">
                            <Link
                              to={`/product-details?product_id=0`}
                              className="link w-100"
                            >
                              <img
                                src={`https://placehold.co/200x200`}
                                alt=""
                                className="cover-img"
                              />
                            </Link>
                          </div>
                          <div className="product-item__content">
                            <h6 className="product-item__title">
                              <Link
                                to={`/product-details?product_id=0`}
                                className="link"
                              >
                                Baby Sleeping Bag for Infant Boys Girls
                              </Link>
                            </h6>
                            <div className="product-item__info flx-between gap-2">
                              <span className="product-item__author">
                                <span className="link hover-text-decoration-underline">
                                  Admin
                                </span>
                              </span>
                            </div>
                            <div className="product-item__bottom flx-between  gap-2">
                              <div className="flx-align gap-2">
                                <h6 className="product-item__price mb-0">
                                  ৳1230
                                </h6>
                                <span className="product-item__prevPrice text-decoration-line-through">
                                  ৳1450
                                </span>
                              </div>
                              <Link
                                to={`/product-details?product_id=0`}
                                className="btn btn-outline-light btn-sm pill"
                              >
                                View Product
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <nav aria-label="Page navigation example">
                    {/* Paginate */}
                    <Paginate
                      handelPageClick={() => {}}
                      page_no={1}
                      per_page={5}
                      totalCount={10}
                    />
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllProduct;
