import Paginate from "../helper/Paginate";
import { useNavigate, useSearchParams } from "react-router-dom";
import categoryStore from "../store/categoryStore";
import { useEffect, useState } from "react";
import { DeleteAlert, ErrorToast, IsEmpty } from "../helper/helper";
import Skeleton from "react-loading-skeleton";
import { baseURLFile } from "../helper/config";
const Category = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const per_page = 6;
  const page_no = searchParams.get("page_no") || 1;

  let {
    createCategoryRequest,
    createCategoryLoading,
    allCategoryRequest,
    allCategory,
    totalCategory,
    deleteCategoryRequest,
    singleCategoryRequest,

    updateCategoryRequest,
  } = categoryStore();

  let [data, setData] = useState({
    category_name: "",
    category_img: "",
  });

  // all Category
  useEffect(() => {
    (async () => {
      await allCategoryRequest(per_page, page_no);
    })();
  }, [allCategoryRequest, page_no]);

  // Validation rules
  const validations = [
    { field: data.category_name, message: "Category name is required!" },
    { field: data.category_img, message: "Category image is required!" },
  ];

  let categorySubmit = async () => {
    for (const { field, message } of validations) {
      if (IsEmpty(field)) {
        return ErrorToast(message);
      }
    }
    await createCategoryRequest(data);
    await allCategoryRequest(per_page, page_no);
  };

  //! pagination function
  const handelPageClick = async (event) => {
    let page_no = event.selected;
    await allCategoryRequest(per_page, page_no + 1);

    navigate(`/category?page_no=${page_no + 1}`);
  };

  // delete Category
  let deleteCategory = async (_id) => {
    let res = await DeleteAlert(deleteCategoryRequest, _id);
    if (res) {
      await allCategoryRequest(per_page, page_no);
    }
  };

  // read single Category
  let [_id, setId] = useState("");
  let readSingleCategory = async (_id) => {
    let res = await singleCategoryRequest(_id);
    if (res) {
      setId(res?._id);
      setData({
        category_name: res?.category_name,
        category_img: res?.category_img,
      });
    }
  };

  // update Category
  let updateCategory = async () => {
    let res = await updateCategoryRequest(_id, data);
    if (res) {
      await allCategoryRequest(per_page, page_no);
    }
  };

  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5 mb-5'>
          <h2>Supper Admin</h2>
          <h5>Create Category</h5>
        </div>
      </div>
      {/* Cover Photo End */}
      <div className='dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100 pt-2'>
        {/* Profile Content Start */}
        <div className='profile'>
          <div className='row gy-4'>
            <div className='col-12 '>
              <div className='dashboard-card'>
                <div className='profile-info-content'>
                  <div className='tab-content' id='pills-tabContent'>
                    <div className='tab-pane fade show active'>
                      <div>
                        <div className='row gy-4'>
                          <div className='col-md-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Category name
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  category_name: e.target.value,
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>
                          <div className='col-md-6'>
                            <label className='form-label mb-2 font-18 font-heading fw-600'>
                              Image Single
                            </label>
                            <input
                              onChange={(e) =>
                                setData({
                                  ...data,
                                  category_img: e.target.value,
                                })
                              }
                              type='text'
                              className='common-input border'
                            />
                          </div>

                          <div className='col-sm-12 text-end'>
                            <button
                              onClick={categorySubmit}
                              disabled={createCategoryLoading}
                              className='btn btn-main btn-lg pill mt-4 '
                            >
                              {createCategoryLoading
                                ? "Loading..."
                                : "Create Category"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-12 '>
              <div className='card common-card border border-gray-five'>
                <div className='card-body'>
                  <div className='table-responsive'>
                    <table className='table text-body '>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Category Name</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {allCategory?.length < 1 && <p>No data found!</p>}

                        {allCategory === null ? (
                          <>
                            {[Array(4)].map(() => (
                              <tr>
                                <td className='Skeleton'>
                                  <Skeleton count={1} />
                                </td>
                                <td className='Skeleton'>
                                  <Skeleton count={1} />
                                </td>
                                <td className='Skeleton'>
                                  <Skeleton count={1} />
                                </td>
                              </tr>
                            ))}
                          </>
                        ) : (
                          <>
                            {allCategory?.map((item, index) => (
                              <tr key={index}>
                                <td>
                                  <div className='img-100'>
                                    <img
                                      src={`${baseURLFile}/${item?.category_img}`}
                                      alt=''
                                    />
                                  </div>
                                </td>
                                <td>{item?.category_name}</td>
                                <td>
                                  <div className='d-flex justify-content-end gap-2'>
                                    <button
                                      onClick={() =>
                                        readSingleCategory(item?._id)
                                      }
                                      className='btn btn-success'
                                      data-bs-toggle='modal'
                                      data-bs-target={`#exampleModal_${1}`}
                                    >
                                      Edit
                                    </button>
                                    <button
                                      onClick={() => deleteCategory(item?._id)}
                                      className='btn btn-danger'
                                    >
                                      Delete
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </>
                        )}
                      </tbody>
                    </table>
                    <div className='flx-between justify-content-end gap-2'>
                      <nav aria-label='Page navigation example'>
                        <div>
                          {allCategory?.length > 1 && (
                            <Paginate
                              handelPageClick={handelPageClick}
                              page_no={page_no}
                              per_page={per_page}
                              totalCount={totalCategory}
                            />
                          )}
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Profile Content End */}
      </div>

      {/* Category update section */}
      <>
        <div
          className='modal fade'
          id={`exampleModal_${1}`}
          tabIndex={-1}
          aria-labelledby='exampleModalLabel'
          aria-hidden='true'
        >
          <div className='modal-dialog'>
            <div className='modal-content'>
              <div className='modal-header'>
                <h6 className='modal-title fs-5' id='exampleModalLabel'>
                  Update Category
                </h6>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className='dashboard-card'>
                  <div className='profile-info-content'>
                    <div className='tab-content' id='pills-tabContent'>
                      <div className='tab-pane fade show active'>
                        <div>
                          <div className='row gy-4'>
                            <div className='col-md-6'>
                              <label className='form-label mb-2 font-18 font-heading fw-600'>
                                Category name
                              </label>
                              <input
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    category_name: e.target.value,
                                  })
                                }
                                value={data.category_name}
                                type='text'
                                className='common-input border'
                              />
                            </div>
                            <div className='col-md-6'>
                              <label className='form-label mb-2 font-18 font-heading fw-600'>
                                Image Single
                              </label>
                              <input
                                onChange={(e) =>
                                  setData({
                                    ...data,
                                    category_img: e.target.value,
                                  })
                                }
                                value={data.category_img}
                                type='text'
                                className='common-input border'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-bs-dismiss='modal'
                >
                  Close
                </button>
                <button
                  onClick={() => updateCategory()}
                  type='button'
                  className='btn btn-primary'
                  data-bs-dismiss='modal'
                >
                  Update Category
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default Category;
