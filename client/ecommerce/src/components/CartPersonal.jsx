import { Link } from "react-router-dom";

const CartPersonal = () => {

  return (
    <section className='cart-personal padding-y-120'>
      <div className='container container-two'>
        <div className='row gy-5'>
          <div className='col-lg-8 pe-sm-5'>
            <div className='cart-personal__content'>
              <h5 className='cart-personal__title '>Personal information</h5>
              <p>We will send the purchase receipt to this address.</p>
              <div>
                <div className='profile-info'>
                  <div className='profile-info__inner mb-40 text-center'>
                    <span className='profile-info__designation font-14'>
                      Exclusive Author
                    </span>
                  </div>
                  <ul className='profile-info-list'>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>Email</span>
                      </span>
                      <span className='profile-info-list__info'>
                        user@user.com
                      </span>
                    </li>

                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Full Name
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        Alex
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Address
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        *** Please fill address field!
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>City</span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill city field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Country
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill Country field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>Fax</span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill fax field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>Phone</span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill phone field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Postcode
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill postcode field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>State</span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill state field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping name
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping name field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping Address
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping address field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping city
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping city field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping country
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping country field!
                        </span>
                      </span>
                    </li>

                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping phone
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping phone field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping postcode
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping postcode field!
                        </span>
                      </span>
                    </li>
                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <span className='text text-heading fw-500'>
                          Shipping state
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        <span className='text-danger'>
                          *** Please fill shipping state field!
                        </span>
                      </span>
                    </li>

                    <li className='profile-info-list__item'>
                      <span className='profile-info-list__content flx-align flex-nowrap gap-2'>
                        <img
                          src='https://placehold.co/50x50'
                          alt=''
                          className='icon'
                        />
                        <span className='text text-heading fw-500'>
                          Member Since
                        </span>
                      </span>
                      <span className='profile-info-list__info'>
                        Dec 1, 2025
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='cart-content__bottom flx-between gap-2'>
              <Link
                to='/cart'
                className='btn btn-outline-light flx-align gap-2 pill btn-lg'
              >
                <span className='icon line-height-1 font-20'>
                  <i className='las la-arrow-left' />
                </span>
                Back
              </Link>
              <button
                className='btn btn-main flx-align gap-2 pill btn-lg'
              >
                Proceed To Payment
              </button>
            </div>
          </div>
          <div className='col-lg-4'>
            <br />
            <div className='order-summary mt-40'>
              <h5 className='order-summary__title mb-32'>Order Summary</h5>
              <ul className='billing-list'>
                <li className='billing-list__item flx-between'>
                  <span className='text text-heading fw-500'>
                    You have 5 items
                  </span>
                  <span className='amount text-heading fw-500'>
                    ৳2222
                  </span>
                </li>
                <li className='billing-list__item flx-between'>
                  <span className='text text-heading fw-500'>Vat(15%)</span>
                  <span className='amount text-body'>৳{2222 * 5}</span>
                </li>
                <li className='billing-list__item flx-between'>
                  <span className='text text-heading fw-500'>Shipping Fee</span>
                  <span className='amount text-body'>৳{2222}</span>
                </li>
                <li className='billing-list__item flx-between'>
                  <span className='text text-heading font-20 fw-500 font-heading'>
                    Total
                  </span>
                  <span className='amount text-heading font-20 fw-500 font-heading'>
                    ৳{2222 + 2222 * 2 + 2222}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartPersonal;
