const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController.js");
const userController = require("../controllers/userController.js");
const productController = require("../controllers/productController.js");
const authVerificationAdmin = require("../middlewares/authVerificationAdmin.js");
const authVerificationUser = require("../middlewares/authVerificationUser.js");


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

module.exports = router;