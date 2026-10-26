const ProfileInner = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className="cover-photo  overflow-hidden">
        <div className="avatar-upload p-5">
          <h2>Supper Admin</h2>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--150">
        {/* Profile Content Start */}
        <div className="profile">
          <div className="row gy-4">
            <div className="col-12">
              <div className="dashboard-card">
                <div className="dashboard-card__header pb-0">
                  <ul className=" tab-bordered ">
                    <li className="nav-item">
                      <button className="nav-link font-18 font-heading">
                        Change Password
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="profile-info-content">
                  <div>
                    <div>
                      <div>
                        <div className="row gy-4">
                          <div className="col-sm-6 col-xs-6">
                            <label className="form-label mb-2 font-18 font-heading fw-600">
                              Email
                            </label>
                            <div className="position-relative">
                              <input
                                type="email"
                                className="common-input common-input--withIcon common-input--withLeftIcon "
                              />
                              <span className="input-icon input-icon--left">
                                <img
                                  src="/super-admin/assets/images/icons/profile-info-icon2.svg"
                                  alt=""
                                />
                              </span>
                            </div>
                          </div>
                          <div className="col-sm-6 col-xs-6">
                            <label
                              htmlFor="new-password"
                              className="form-label mb-2 font-18 font-heading fw-600"
                            >
                              New Password
                            </label>
                            <div className="position-relative">
                              <input
                                type="password"
                                className="common-input common-input--withIcon common-input--withLeftIcon "
                                id="new-password"
                              />
                            </div>
                          </div>

                          <div className="col-sm-12 text-end">
                            <button className="btn btn-main btn-lg  pill">
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
