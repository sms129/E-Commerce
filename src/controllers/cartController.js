const mongoose = require("mongoose");
const cartModel = require("../models/cartModel");
const productModel = require("../models/productModel");
const ObjectId = mongoose.Types.ObjectId;
// cart create
exports.createCart = async (req, res) => {
  try {
    let user_id = req.headers._id;
    const { product_id, product_name, color, qty, size } = req.body;

    // Find the stock products
    let product = await productModel.findById(product_id);

    // Find existing cart
    let existingCart = await cartModel.findOne({    //its giving all info about product even qty.
      user_id,
      product_id,
      product_name,
      color,
      size,
    });

    if (!!existingCart === true) {  //existingCart return true or false
      // For existing products
      let newReqBody = {
        user_id,
        product_id,
        product_name,
        color,
        size,
        qty: parseInt(existingCart.qty) + parseInt(qty), //we got qty from previous findone
      };

      const carts = await cartModel.find({ product_id }).select("qty"); //product ta khuje shudhu qty value return kore
      const totalQty = carts.reduce((sum, item) => sum + item.qty, 0); //reduce ekta array method,ager line er carts theke asha ekta ekta kore qty er value item e jaay then sum hoy.initial sum value 0
           //sum and item variable name, we can name any  //carts and totalqty gives all info of all users qty number in cart for this  product
      if (product?.stock < totalQty + qty) {  //  ? because if there is no product found system will not crash
        return res.status(200).json({
          success: false,
          message: "You have added all the products in stock.",
        });
      }

      const updateData = await cartModel.updateOne(
        {
          _id: existingCart._id,
          user_id: existingCart.user_id,
        },
        { $set: newReqBody }
      );

      res.status(200).json({
        success: true,
        message: "Cart update.",
        updateData,
      });
    } else {
      // For new products
      const carts = await cartModel.find({ product_id }).select("qty");
      const totalQty = carts.reduce((sum, item) => sum + item.qty, 0);

      if (product?.stock < totalQty + qty) {
        return res.status(200).json({
          success: false,
          message: "You have added all the products in stock.",
        });
      }

      const data = await cartModel.create({
        user_id,
        product_id,
        product_name,
        color,
        qty,
        size,
      });

      res.status(200).json({
        success: true,
        message: "Product add to cart successfully",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

// cart read
exports.readCart = async (req, res) => {
  try {
    let user_id = new ObjectId(req.headers._id);
    let matchStage = { $match: { user_id } };     //matching user id in cart to see how many item user add in cart

    let joinWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };

    let unwindProductStage = { $unwind: "$product" };

    let joinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "product.brand_id",
        foreignField: "_id",
        as: "brand",
      },
    };

    let joinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "product.category_id",
        foreignField: "_id",
        as: "category",
      },
    };

    let unwindBrandStage = { $unwind: "$brand" };
    let unwindCategoryStage = { $unwind: "$category" };

    let projectionStage = {
      $project: {
        _id: 1,
        user_id: 0,
        "product._id": 0,
        "product.category_id": 0,
        "product.brand_id": 0,
        "product.createdAt": 0,
        "product.updatedAt": 0,
        "product.description": 0,
        "product.sort_description": 0,
        "brand._id": 0,
        "brand.createdAt": 0,
        "brand.updatedAt": 0,
        "category._id": 0,
        "category.createdAt": 0,
        "category.updatedAt": 0,
        category_id: 0,
        brand_id: 0,
        createdAt: 0,
        updatedAt: 0,
      },
    };

    let data = await cartModel.aggregate([
      matchStage,
      joinWithProduct,
      unwindProductStage,
      joinWithBrand,
      joinWithCategory,
      unwindBrandStage,
      unwindCategoryStage,
      projectionStage,
    ]);

    res.status(200).json({
      success: true,
      message: "Cart items fetched successfully",
      data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


// cart update-- user jodi cart e product barate chay.
exports.updateCart = async (req, res) => {
  try {
    const { product_id, qty, inc } = req.body;

    let user_id = req.headers._id;
    let cart_id = new ObjectId(req.params.cart_id);
    let initQTY = 1;  //cart e 1 ta product increase korse,jodi abar kore, prottek baar alada alada updatecart call hobe

    if (inc) {   //dekhtese cart e increase korse naki decrease, jodi increase kore
      // Find the stock products
      let product = await productModel.findById(product_id);
      const carts = await cartModel.find({ product_id }).select("qty");
      const totalQty = carts.reduce((sum, item) => sum + item.qty, 0);

      if (product?.stock >= totalQty + initQTY) {  //stock theke beshi hoye jaitese naki cheacking
        const data = await cartModel.updateOne(  //eikhane updated qty overwrite kore,calcuation frontend ei hoye jaay
          { _id: cart_id, user_id: user_id },
          { $set: { user_id, product_id, qty } }
        );

        return res.status(200).json({
          success: true,
          message: "Cart update successfully. inc +",
          data,
        });
      } else {
        return res.status(200).json({
          success: false,
          message: "You have added all the products in stock.",
        });
      }
    } else {
      const data = await cartModel.updateOne(
        { _id: cart_id, user_id: user_id },
        { $set: { user_id, product_id, qty } }
      );

      return res.status(200).json({
        success: true,
        message: "Cart update successfully. inc -",
        data,
      });
    }
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


// cart delete
exports.deleteCart = async (req, res) => {
  try {
    let cart_id = req.params.cart_id;

    let data = await cartModel.findByIdAndDelete(cart_id);

    res.status(200).json({
      success: true,
      message: "Cart deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};











