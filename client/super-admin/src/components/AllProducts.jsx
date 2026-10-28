import ReactQuill from "react-quill-new";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import {
  DeleteAlert,
  ErrorToast,
  formats,
  IsEmpty,
  modules,
} from "../helper/helper";
import Paginate from "../helper/Paginate";
import productStore from "../store/productStore";
import categoryStore from "../store/categoryStore";
import brandStore from "../store/brandStore";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { baseURLFile, hostURL } from "../helper/config";

const AllProducts = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  let {
    allProducts,
    totalProducts,
    allProductsRequest,
    deleteProductRequest,
    updateProductRequest,
    singleProductsRequest,
  } = productStore();
  let { allCategoryRequest, allCategory } = categoryStore();
  let { allBrandRequest, allBrand } = brandStore();

  const per_page = 12;
  const page_no = searchParams.get("page_no") || 1;

  // all Products
  useEffect(() => {
    (async () => {
      await allProductsRequest(0, 0, 0, 0, per_page, page_no);
      await allCategoryRequest(100, 1);
      await allBrandRequest(100, 1);
    })();
  }, [allBrandRequest, allCategoryRequest, allProductsRequest, page_no]);

  const handelPageClick = async (event) => {
    let page_no = event.selected;
    await allProductsRequest(0, 0, 0, 0, per_page, page_no + 1); //"/:category_id/:brand_id/:remark/:keyword/:per_page/:page_no",
    navigate(`/all-products?page_no=${page_no + 1}`);
  };

  // delete Product

  let deleteProduct = async (_id) => {
    let res = await DeleteAlert(deleteProductRequest, _id);
    if (res) {
      await allProductsRequest(0, 0, 0, 0, per_page, page_no);
    }
  };

  // readSingleProduct
  let [data, setData] = useState({
    title: "",
    images: [],
    sort_description: "",
    price: "",
    is_discount: true,
    discount_price: 0,
    remark: "",
    stock: 0,
    color: [],
    size: [],
    description: "",
    category_id: "",
    brand_id: "",
  });
  const [value, setValue] = useState("");
  let [_id, setId] = useState("");
  let readSingleProduct = async (_id) => {
    let res = await singleProductsRequest(_id);

    if (res) {
      setId(res?._id);
      setData({
        title: res?.title,
        images: res?.images,
        sort_description: res?.sort_description,
        price: res?.price,
        is_discount: res?.is_discount,
        discount_price: res?.discount_price,
        remark: res?.remark,
        stock: res?.stock,
        color: res?.color,
        size: res?.size,
        category_id: res?.category_id,
        brand_id: res?.brand_id,
      });
      setValue(res?.description);
    }
  };

  // Validation rules
  const validations = [
    { field: data.title, message: "Title is required!" },
    { field: data.images, message: "Images is required!" },
    { field: data.sort_description, message: "Sort description is required!" },
    { field: data.price, message: "Price is required!" },
    { field: data.is_discount, message: "Discount is required!" },
    { field: data.discount_price, message: "Discount price is required!" },
    { field: data.remark, message: "Remark is required!" },
    { field: data.stock, message: "Stock is required!" },
    { field: data.color, message: "Color is required!" },
    { field: data.size, message: "Size is required!" },
    { field: value, message: "Description is required!" },
    { field: data.category_id, message: "Category is required!" },
    { field: data.brand_id, message: "Brand is required!" },
  ];

  // update Product
  let updateProduct = async () => {
    for (const { field, message } of validations) {
      if (IsEmpty(field)) {
        return ErrorToast(message);
      }
    }
    data.description = value;
    let res = await updateProductRequest(_id, data);
    if (res) {
      await allProductsRequest(0, 0, 0, 0, per_page, page_no);
    }
  };

  return (
    <>
      {/* Cover Photo Start */}
      <div className='cover-photo  overflow-hidden'>
        <div className='avatar-upload p-5'>
          <h2>Supper Admin</h2>
          <h5>All Product</h5>
        </div>
      </div>
      <div className='dashboard-body__content mt-0'>
        {/* ========================= Statement section start =========================== */}
        <div className='row gy-4'>
          <div className='col-12'>
            <div className='card common-card border border-gray-five'>
              <div className='card-body'>
                <div className='table-responsive'>
                  <table className='table text-body '>
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Is Discount</th>
                        <th>Stock</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {allProducts?.length < 1 && <p>No data found!</p>}

                      {allProducts === null ? (
                        <>
                          {[...Array(6)].map(() => (
                            <tr className='super_admin_all-product '>
                              <td className='Skeleton'>
                                <Skeleton count={1} />
                              </td>
                              <td className='Skeleton'>
                                <Skeleton count={1} />
                              </td>
                              <td className='Skeleton'>
                                <Skeleton count={1} />
                              </td>
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
                          {allProducts?.map((item, index) => (
                            <tr key={index} className='super_admin_all-product'>
                              <td>
                                <img
                                  src={`${baseURLFile}/${item?.images?.[0]}`}
                                  alt=''
                                  className='cover-img'
                                />
                              </td>
                              <td>
                                {" "}
                                <h6 className='product-item__title'>
                                  <Link
                                    to={`${hostURL}/product-details?product_id=${item?._id}`}
                                    className='link'
                                  >
                                    {item?.title}
                                  </Link>
                                </h6>
                              </td>
                              <td>
                                <div className='flx-align justify-content-center gap-2'>
                                  <h6 className='product-item__price mb-0'>
                                    {item?.is_discount === false
                                      ? `৳${item?.price}`
                                      : `৳${item?.discount_price}`}
                                  </h6>
                                  <span className='product-item__prevPrice font-12 text-danger text-decoration-line-through'>
                                    {item?.is_discount === false
                                      ? ""
                                      : `৳${item?.price}`}
                                  </span>
                                </div>{" "}
                              </td>
                              <td> {item?.is_discount ? "Yes" : "No"}</td>
                              <td> {item?.stock}</td>
                              <td>
                                <div className='d-flex justify-content-end gap-2'>
                                  <button
                                    onClick={() => readSingleProduct(item?._id)}
                                    className='btn btn-success'
                                    data-bs-toggle='modal'
                                    data-bs-target={`#exampleModal_${1}`}
                                  >
                                    Edit
                                  </button>
                                  <button
                                    onClick={() => deleteProduct(item?._id)}
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
                        {allProducts?.length > 1 && (
                          <Paginate
                            handelPageClick={handelPageClick}
                            page_no={page_no}
                            per_page={per_page}
                            totalCount={totalProducts}
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
        {/* ========================= Statement section End =========================== */}
      </div>

      {/*  */}
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
                  Update Product
                </h6>
                <button
                  type='button'
                  className='btn-close'
                  data-bs-dismiss='modal'
                  aria-label='Close'
                />
              </div>
              <div className='modal-body'>
                <div className='profile'>
                  <div className='row gy-4'>
                    <div className='col-12'>
                      <div className='dashboard-card'>
                        <div className='profile-info-content'>
                          <div className='tab-content' id='pills-tabContent'>
                            <div className='tab-pane fade show active'>
                              <div>
                                <div className='row gy-4'>
                                  <div className='col-sm-6 col-xs-6'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Title
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          title: e.target.value,
                                        })
                                      }
                                      value={data.title}
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-6 col-xs-6'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Short Description
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          sort_description: e.target.value,
                                        })
                                      }
                                      value={data.sort_description}
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-12'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Image (Use comma for multi images. Ex:
                                      image_1.png, image_2.jpg, image_3.png)
                                    </label>
                                    <textarea
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          images: e.target.value
                                            .split(",")
                                            .map((item) => item.trim()),
                                        })
                                      }
                                      value={data.images}
                                      name=''
                                      id=''
                                      className='common-input border'
                                    ></textarea>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Price
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          price: Number(e.target.value),
                                        })
                                      }
                                      value={data.price}
                                      type='number'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Is Discount?
                                    </label>
                                    <div className='select-has-icon'>
                                      <select
                                        className='common-input border'
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            is_discount:
                                              e.target.value === "true",
                                          })
                                        }
                                        value={data.is_discount}
                                      >
                                        <option value={true}>True</option>
                                        <option value={false}>False</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Discount Price
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          discount_price: Number(
                                            e.target.value
                                          ),
                                        })
                                      }
                                      value={data.discount_price}
                                      type='number'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Category
                                    </label>
                                    <div className='select-has-icon'>
                                      <select
                                        className='common-input border'
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            category_id: e.target.value,
                                          })
                                        }
                                        value={data.category_id}
                                      >
                                        <option value={""}>
                                          Please Select A Category **
                                        </option>
                                        {allCategory?.map((item, index) => (
                                          <option key={index} value={item?._id}>
                                            {item?.category_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Brand
                                    </label>
                                    <div className='select-has-icon'>
                                      <select
                                        className='common-input border'
                                        onChange={(e) =>
                                          setData({
                                            ...data,
                                            brand_id: e.target.value,
                                          })
                                        }
                                        value={data.brand_id}
                                      >
                                        <option value={""}>
                                          Please Select A Brand **
                                        </option>
                                        {allBrand?.map((item, index) => (
                                          <option key={index} value={item?._id}>
                                            {item?.brand_name}
                                          </option>
                                        ))}
                                      </select>
                                    </div>
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Remark (Ex: New)
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          remark: e.target.value,
                                        })
                                      }
                                      value={data.remark}
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Stock
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          stock: Number(e.target.value),
                                        })
                                      }
                                      value={data.stock}
                                      type='number'
                                      className='common-input border'
                                    />
                                  </div>
                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Color (Ex: Red, Green, Blue)
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          color: e.target.value
                                            .split(",")
                                            .map((item) => item.trim()),
                                        })
                                      }
                                      value={data.color}
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-sm-4 col-xs-4'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Size (Ex: XXL, XL, X)
                                    </label>
                                    <input
                                      onChange={(e) =>
                                        setData({
                                          ...data,
                                          size: e.target.value
                                            .split(",")
                                            .map((item) => item.trim()),
                                        })
                                      }
                                      value={data.size}
                                      type='text'
                                      className='common-input border'
                                    />
                                  </div>

                                  <div className='col-12'>
                                    <label className='form-label mb-2 font-18 font-heading fw-600'>
                                      Description
                                    </label>

                                    <ReactQuill
                                      theme='snow'
                                      modules={modules}
                                      formats={formats}
                                      value={value}
                                      onChange={setValue}
                                    />
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
                  onClick={updateProduct}
                  data-bs-dismiss='modal'
                  type='button'
                  className='btn btn-primary'
                >
                  Update Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default AllProducts;
