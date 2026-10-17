const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController.js");
const userController = require("../controllers/userController.js");
const categoryController = require("../controllers/categoryController.js");
const brandController = require("../controllers/brandController.js");
const productController = require("../controllers/productController.js");
const reviewController = require("../controllers/reviewController.js");
const cartController = require("../controllers/cartController.js");
const invoiceController = require("../controllers/invoiceController.js");
const fileController = require("../controllers/fileController.js");
const dashboardSummaryController = require("../controllers/dashboardSummaryController.js");
const authVerificationAdmin = require("../middlewares/authVerificationAdmin.js");
const authVerificationUser = require("../middlewares/authVerificationUser.js");
const fileUpload = require("../middlewares/fileUpload.js");


//! ================= For Super admin =================
router.post("/admin-register", adminController.register);
router.post("/admin-login", adminController.login);
router.get("/admin",authVerificationAdmin, adminController.admin);
router.get("/admin-verify",authVerificationAdmin, adminController.adminVerify);
router.get("/admin-logout",authVerificationAdmin, adminController.logout);
router.put("/admin-update",authVerificationAdmin, adminController.update);

//! ================= For user =================

router.post("/user-register", userController.register);
router.post("/user-login", userController.login);
router.get("/user",authVerificationUser, userController.user);
router.get("/user-verify",authVerificationUser, userController.userVerify);
router.get("/user-logout",authVerificationUser, userController.logout);
router.put("/user-update",authVerificationUser, userController.update); 


//! ================= create product =================
router.post("/create-product",authVerificationAdmin, productController.createProduct); 
router.get(
  "/all-products/:category_id/:brand_id/:remark/:keyword/:per_page/:page_no",
  productController.allProduct
);
router.get("/single-product/:id",productController.singleProduct); 

router.put("/update-product/:id",authVerificationAdmin,productController.updateProduct); 
router.delete("/delete-product/:id",authVerificationAdmin,productController.deleteProduct); 


//! ================= category =================
router.post("/create-category",authVerificationAdmin, categoryController.createCategory);
router.get("/all-category/:per_page/:page_no", categoryController.allCategory);
router.get("/single-category/:id",categoryController.singleCategory);
router.put("/update-category/:id",authVerificationAdmin, categoryController.updateCategory);
router.delete("/delete-category/:id",authVerificationAdmin, categoryController.deleteCategory);

//! ================= brand =================
router.post("/create-brand",authVerificationAdmin, brandController.createBrand);
router.get("/all-brand/:per_page/:page_no", brandController.allBrand);
router.get("/single-brand/:id",brandController.singleBrand);
router.put("/single-brand/:id",authVerificationAdmin, brandController.singleBrand);
router.delete("/delete-brand/:id",authVerificationAdmin, brandController.deleteBrand);


//! ================= review =================
router.post("/create-review",authVerificationUser, reviewController.createReview);
router.get("/all-review/:per_page/:page_no", reviewController.allReview);
router.get(
  "/all-review-by-product/:product_id",
  reviewController.allReviewByProducts
);


//! ================= cart =================
router.post("/create-cart",authVerificationUser, cartController.createCart);
router.get("/read-cart",authVerificationUser, cartController.readCart);
router.put("/update-cart/:cart_id",authVerificationUser, cartController.updateCart);
router.delete("/delete-cart/:cart_id",authVerificationUser, cartController.deleteCart);


//! ================= for invoice and payment =================

//--for user:
router.post("/create-invoice",authVerificationUser, invoiceController.createInvoice);
router.get(
  "/read-all-invoice-single-user/:per_page/:page_no",
  authVerificationUser,
  invoiceController.readAllInvoiceSingleUser
);

router.get(
  "/read-single-invoice-single-user/:invoice_id",authVerificationUser,
  invoiceController.readSingleInvoiceSingleUser
);

router.get(
  "/read-invoice-product-list-single-user/:per_page/:page_no",
  authVerificationUser,
  invoiceController.readInvoiceProductListSingleUser
);

router.post(
  "/payment-success/:trx_id",
  invoiceController.paymentSuccess
);


router.post(
  "/payment-cancel/:trx_id",
  invoiceController.paymentCancel
);

router.post(
  "/payment-fail/:trx_id",
  invoiceController.paymentFail
);

router.post(
  "/payment-ipn/:trx_id",
  invoiceController.paymentIpn
);




// for admin:



router.get(
  "/all-order-list/:per_page/:page_no",
  authVerificationAdmin,
  invoiceController.allOrderList
);


router.get(
  "/export-csv",
  authVerificationAdmin,
  invoiceController.exportCSV
);


router.put(
  "/update-invoice",
  authVerificationAdmin,
  invoiceController.updateInvoice
);


//file upload

router.post(
  "/file-upload",
  authVerificationAdmin,
  fileUpload,
  fileController.fileUpload
);

//get all file
router.get("/all-file/:per_page/:page_no", fileController.allFile);

//file remove
router.post("/file-remove", authVerificationAdmin, fileController.fileRemove);


// Dashboard Summary
router.get("/dashboard-summary", dashboardSummaryController.dashboardSummary);




module.exports = router;