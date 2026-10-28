import { Link } from "react-router-dom";

const Cart = () => {

  return (
    <div className='cart padding-y-120'>
      <div className='container'>
        <div className='cart-content'>
          <div className='table-responsive'>
              <table className='table style-two'>
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>
                        <div className='cart-item'>
                          <div className='d-flex align-items-center gap-3'>
                            <div className='cart-item__thumb'>
                              <Link to='/product-details' className='link'>
                                <img
                                  src={`https://placehold.co/600x400`}
                                  alt=''
                                  className='cover-img'
                                />
                              </Link>
                            </div>
                            <div className='cart-item__content'>
                              <h6 className='cart-item__title font-heading fw-700 text-capitalize font-18 mb-4'>
                                {" "}
                                <Link to='/product-details' className='link'>
                                  Baby Toy
                                </Link>
                              </h6>
                              <div className='cart-item__price font-15 text-heading fw-500'>
                                Category:{" "}
                                <span className='text-body font-18'>
                                  Baby
                                </span>
                              </div>
                              <div className='cart-item__price font-15 text-heading fw-500'>
                                Size:{" "}
                                <span className='text-body font-18'>
                                  12
                                </span>
                              </div>
                              <div className='cart-item__price font-15 text-heading fw-500'>
                                Color:{" "}
                                <span className='text-body font-18'>
                                  Red
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className='flx-align gap-4 mt-3 mt-lg-4'>
                            <button
                              className='rounded-btn delete-btn text-danger hover-text-decoration-underline'
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className='cart-item__count'>
                          <button
                            data-decrease='data-decrease'
                          >
                            {" "}
                            <i className='fas fa-minus' />
                          </button>
                          <input
                            data-value='data-value'
                            type='number'
                            value={5}
                            readOnly
                          />
                          <button
                            data-increase='data-increase'
                          >
                            <i className='fas fa-plus' />
                          </button>
                        </div>
                      </td>
                      <td>
                        <span className='cart-item__totalPrice text-body font-18 fw-400 mb-0'>
                          {/* {item?.product?.price} */}
                          ৳500
                          <del className='font-12 text-danger '>
                            {" "}
                            ৳600
                          </del>{" "}
                        </span>
                      </td>
                      <td>
                        <span className='cart-item__totalPrice text-body font-18 fw-400 mb-0'>
                          ৳{Number(500) * Number(5)}
                        </span>
                      </td>
                    </tr>
                </tbody>
              </table>
          </div>

          <div className='cart-content__bottom flx-between gap-2'>
              <Link
                to='/all-products?category_id=0&brand_id=0&remark=0&keyword=0&per_page=12&page_no=1'
                className='btn btn-outline-light flx-align gap-2 pill btn-lg'
              >
                <span className='icon line-height-1 font-20'>
                  <i className='las la-arrow-left' />
                </span>
                Continue Shopping
              </Link>
              <Link
                to='/cart-personal'
                className='btn btn-main flx-align gap-2 pill btn-lg'
              >
                Next
                <span className='icon line-height-1 font-20'>
                  <i className='las la-arrow-right' />
                </span>
              </Link>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
