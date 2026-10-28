import { FaRegStar, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const StarRating = ({ star }) => {
    star = parseInt(star);
    const totalStars = 5;
    const filledStars = Array(star).fill(<FaStar />);
    const emptyStars = Array(totalStars - star).fill(<FaRegStar />);

    return (
      <div className='star'>
        {filledStars.concat(emptyStars).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  return (
    <div className='product-details mt-32 padding-b-120'>
      <div className='container container-two'>
        <div className='row gy-4'>
          {/* Left Column - Product Images and Description */}
          <div className='col-lg-6'>
            <div className='tab-content' id='pills-tabContent'>
              <div
                className='tab-pane fade show active'
                id='pills-product-details'
                role='tabpanel'
                aria-labelledby='pills-product-details-tab'
                tabIndex={0}
              >
                {/* Product Details Content Start */}
                <div className='product-details'>
                  <div>
                    {/* Main Product Image */}
                    <div className='main-product-image mb-3'>
                      <img
                        src="https://placehold.co/600x400"
                        alt="Product"
                        style={{ width: '100%', borderRadius: '8px' }}
                      />
                    </div>

                    {/* Thumbnail Images */}
                    <div className='product-thumbnails d-flex gap-2'>
                      <div style={{ width: '23%' }}>
                        <img
                          src="https://placehold.co/600x400"
                          alt={`Thumbnail`}
                          style={{ width: '100%', borderRadius: '4px', cursor: 'pointer' }}
                        />
                      </div>
                      <div style={{ width: '23%' }}>
                        <img
                          src="https://placehold.co/600x400"
                          alt={`Thumbnail`}
                          style={{ width: '100%', borderRadius: '4px', cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>

                  <h5 className='product-details__desc mt-4'>
                    Product Description
                  </h5>
                  <div className='product-details__item'>
                    This is a premium quality cotton t-shirt perfect for everyday wear. Made from 100% organic cotton, it provides maximum comfort and breathability. Features include reinforced stitching, pre-shrunk fabric, and colorfast dyes.
                  </div>
                </div>
                {/* Product Details Content End */}
              </div>

              {/* Reviews Tab */}
              <div
                className='tab-pane fade'
                id='pills-rating'
                role='tabpanel'
                aria-labelledby='pills-rating-tab'
                tabIndex={0}
              >
                <div className='product-review-wrapper'>
                  <div className='product-review'>
                    <div className='product-review__top flx-between'>
                      <div className='product-review__rating flx-align'>
                        <div className='d-flex align-items-center gap-1'>
                          <div className='star'>
                            <StarRating star={5} />
                          </div>
                          <span className='star-rating__text text-body'>
                            5.0
                          </span>
                        </div>
                        <span className='product-review__reason'>
                          For{" "}
                          <span className='product-review__subject'>
                            Customer Support
                          </span>
                        </span>
                      </div>
                      <div className='product-review__date'>
                        by{" "}
                        <strong className='product-review__user text--base'>
                          John Doe
                        </strong>{" "}
                        (Dec 1, 2024)
                      </div>
                    </div>
                    <div className='product-review__body'>
                      <p className='product-review__desc'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec metus vel ante finibus facilisis. Nullam nec metus vel ante finibus facilisis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Product Info and Purchase Options */}
          <div className='col-lg-6'>
            <div className='product-sidebar pt-0'>
              <div className='product-sidebar__top position-relative flx-between gap-1'>
                <div className='title_box'>
                  <h3 className='product-sidebar__title'>
                    Premium Cotton T-Shirt
                  </h3>
                </div>

                <div className='price py-3'>
                  <h4>
                    ৳1200
                    <del>৳1500 </del>{" "}
                    <span className='discount_percent'>
                      - 20% Off
                    </span>
                  </h4>
                  <p>High quality cotton t-shirt with modern design and comfortable fit</p>
                </div>

                <div className='size py-3'>
                  <h5>Size: M</h5>
                  <div className='size_varient'>
                    <button>
                      M
                    </button>
                    <button>
                      L
                    </button>
                    <button>
                      XL
                    </button>

                  </div>
                </div>

                <div className='color py-3'>
                  <h5>Color: Red</h5>
                  <div className='size_varient'>
                    <button>
                      Red
                    </button>
                    <button>
                      Blue
                    </button>
                    <button>
                      Green
                    </button>

                  </div>
                </div>

                <div className='quantity py-3'>
                  <div className='w-100'>
                    <h5 className='text-danger'>
                      Stock: 10
                    </h5>
                    <div className='inner'>
                      <button
                        className='btn-quantity btn-decrease'>
                        -
                      </button>
                      <span className='quantity-product'>5</span>
                      <button
                        className='btn-quantity btn-increase'
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className='w-100 pt-5'>
                    <button
                      className='btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5'
                    >
                      <img
                        src='assets/images/icons/add-to-cart.svg'
                        alt=''
                      />
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              {/* Meta Attribute List Start */}
              <ul className='meta-attribute'>
                <li className='meta-attribute__item'>
                  <span className='name'>Last Update</span>
                  <span className='details'>
                    Dec 1, 2024
                  </span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Published</span>
                  <span className='details'>
                    Jan 15, 2024
                  </span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Category</span>
                  <span className='details'>
                    Clothing
                  </span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Brand</span>
                  <span className='details'>
                    Fashion Brand
                  </span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Is Discount</span>
                  <span className='details'>
                    True
                  </span>
                </li>
                <li className='meta-attribute__item'>
                  <span className='name'>Discount Percent</span>
                  <span className='details'>20%</span>
                </li>
              </ul>
              {/* Meta Attribute List End */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
