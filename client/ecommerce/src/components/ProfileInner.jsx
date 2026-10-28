const ProfileInner = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className="cover-photo position-relative z-index-1 overflow-hidden">
        <div className="avatar-upload">
          <div className="avatar-preview">
            <div id="imagePreviewTwo"></div>
          </div>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100">
        {/* Profile Content Start */}
        <div className="profile">
          <div className="row gy-4">
            <div className="col-xxl-3 col-xl-4">
              <div className="profile-info">
                <div className="profile-info__inner mb-40 text-center">
                  <h5 className="profile-info__name mb-1">Alex Jeo</h5>
                  <span className="profile-info__designation font-14">
                    Exclusive Author
                  </span>
                </div>
                <ul className="profile-info-list">
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="assets/images/icons/profile-info-icon2.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500">Email</span>
                    </span>
                    <span className="profile-info-list__info">
                      AlexJeo@mail.com
                    </span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="assets/images/icons/profile-info-icon3.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500">Phone</span>
                    </span>
                    <span className="profile-info-list__info">
                      123-456-7890
                    </span>
                  </li>
                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="assets/images/icons/profile-info-icon4.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500">Country</span>
                    </span>
                    <span className="profile-info-list__info"> USA</span>
                  </li>

                  <li className="profile-info-list__item">
                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                      <img
                        src="assets/images/icons/profile-info-icon6.svg"
                        alt=""
                        className="icon"
                      />
                      <span className="text text-heading fw-500">
                        Member Since
                      </span>
                    </span>
                    <span className="profile-info-list__info">
                      January 1, 2020
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-9 col-xl-8">
              <div className="dashboard-card">
                <div className="profile-info-content">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active">
                      <div>
                        <div className="row gy-4">
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer Name
                            </label>
                            <input
                              required
                              value="Alex Jeo"
                              name="cus_name"
                              type="text"
                              className="common-input border"
                              placeholder="Customer Name"
                            />
                          </div>

                          <div className="col-sm-6 col-xs-6">
                            <label
                              htmlFor="confirm-password"
                              className="form-label mb-2 font-18 font-heading fw-600"
                            >
                              Password
                            </label>
                            <div className="position-relative">
                              <input
                                value="password123"
                                name="password"
                                type="password"
                                className="common-input common-input--withIcon common-input--withLeftIcon "
                              />
                              <span className="input-icon input-icon--left">
                                <img
                                  src="assets/images/icons/lock-two.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer address
                            </label>
                            <input
                              required
                              value="123 Main St"
                              name="cus_add"
                              type="text"
                              className="common-input border"
                              placeholder="Customer address"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer city
                            </label>
                            <input
                              required
                              value="New York"
                              name="cus_city"
                              type="text"
                              className="common-input border"
                              placeholder="Customer city"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer country
                            </label>
                            <input
                              required
                              value="USA"
                              name="cus_country"
                              type="text"
                              className="common-input border"
                              placeholder="Customer country"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer fax
                            </label>
                            <input
                              required
                              value="123-456-7890"
                              name="cus_fax"
                              type="text"
                              className="common-input border"
                              placeholder="Customer fax"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer phone
                            </label>
                            <input
                              required
                              value="123-456-7890"
                              name="cus_phone"
                              type="text"
                              className="common-input border"
                              placeholder="Customer phone"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer postcode
                            </label>
                            <input
                              required
                              value="10001"
                              name="cus_postcode"
                              type="text"
                              className="common-input border"
                              placeholder="Customer postcode"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Customer state
                            </label>
                            <input
                              required
                              value="NY"
                              name="cus_state"
                              type="text"
                              className="common-input border"
                              placeholder="Customer state"
                            />
                          </div>

                          {/* Shipping */}

                          <div>
                            <p>
                              -------- 🚚 Shipping Information 🛳️ ----------
                            </p>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping name
                            </label>
                            <input
                              required
                              value="Alex Jeo"
                              name="ship_name"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping name"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping address
                            </label>
                            <input
                              required
                              value="123 Main St"
                              name="ship_add"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping address"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping city
                            </label>
                            <input
                              required
                              value="New York"
                              name="ship_city"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping city"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping country
                            </label>
                            <input
                              required
                              value="USA"
                              name="ship_country"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping country"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping phone
                            </label>
                            <input
                              required
                              value="123-456-7890"
                              name="ship_phone"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping phone"
                            />
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping postcode
                            </label>
                            <input
                              required
                              value="10001"
                              name="ship_postcode"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping postcode"
                            />
                          </div>
                          <div className="col-12">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Shipping state
                            </label>
                            <input
                              required
                              value="NY"
                              name="ship_state"
                              type="text"
                              className="common-input border"
                              placeholder="Shipping state"
                            />
                          </div>

                          <div className="col-sm-12 text-end">
                            <button className="btn btn-main btn-lg pill mt-4">
                              Update Profile
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Content End */}
      </div>
    </>
  );
};

export default ProfileInner;
