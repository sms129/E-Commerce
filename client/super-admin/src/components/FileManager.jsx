import { baseURLFile } from "../helper/config";
import { SuccessToast } from "../helper/helper";
import Paginate from "../helper/Paginate";
const FileManager = () => {
  return (
    <>
      {/* Cover Photo Start */}
      <div className="cover-photo  overflow-hidden">
        <div className="avatar-upload p-5">
          <h2>Supper Admin</h2>
          <h5>File Manager</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--150">
        {/* Profile Content Start */}
        <div className="profile">
          <div className="row gy-4">
            <div className="col-12">
              <div className="profile-info">
                <div className="container my-5 p-4 border rounded shadow-sm bg-white">
                  <h4 className="mb-3">Upload Files</h4>
                  {/* Upload Input */}
                  <div className="mb-3">
                    <input type="file" className="form-control" multiple />
                  </div>

                  <div>
                    <button className="btn btn-danger ">Upload File</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
              <div className="dashboard-card">
                <div className=" p-5">
                  <h4 className="mb-3">Image Gallery</h4>
                  <div className="row g-3">
                    <div className="col-2 col-xl-3 col-md-4 mb-5">
                      <div className="card img_g shadow-sm position-relative">
                        {/* Delete button */}
                        <button
                          className="btn  btn-danger position-absolute top-0 end-0 m-1 rounded-circle"
                        >
                          &times;
                        </button>

                        {/* Image */}
                        <img
                          src={`https://placehold.co/100x100`}
                          className="card-img-top"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />

                        {/* Card body */}
                        <div className="card-body p-2 text-center">
                          <p
                            className="small text-truncate mb-0 text-primary"
                            style={{ cursor: "pointer" }}
                            title="Click to copy"
                          >
                            Image1.jpg
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <nav aria-label="Page navigation example">
                    <Paginate page_no={1} per_page={5} totalCount={10} />
                  </nav>
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

export default FileManager;
