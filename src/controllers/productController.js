const mongoose = require("mongoose");
const productModel = require("../models/productModel");
const ObjectId = mongoose.Types.ObjectId;  //make 24 character id and mongoose er inbuild

//! Product create
exports.createProduct = async (req, res) => {
  try {
    const {
      title,
      images,
      sort_description,
      price,
      is_discount,
      discount_price,
      remark,
      stock,
      color,
      size,
      description,
      category_id,
      brand_id,
    } = req.body;

    if (discount_price > price) {
      return res.status(200).json({
        success: false,
        message: "The discount price must be smaller than the main price.",
      });
    }

    let data = await productModel.create({
      title,
      images,
      sort_description,
      price,
      is_discount,
      discount_price,
      remark,
      stock,
      color,
      size,
      description,
      category_id,
      brand_id,
    });

    res.status(200).json({
      success: true,
      message: "Product created successfully",
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


//! Get All Product with Pagination
exports.allProduct = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);  //getting pageno and number from api
    let per_page = Number(req.params.per_page);
    let category_id = req.params.category_id;
    let brand_id = req.params.brand_id;
    let remark = req.params.remark;
    let keyword = req.params.keyword;

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 }; //build in to show new product.last e jeita create hoise

    let MatchingStage;  //with give full product object after match

    //Dynamic Filtering
    if (category_id !== "0") {
      MatchingStage = {
        $match: { category_id: new ObjectId(category_id) }, //id directy provided in api then it with match with databese saved id
      };
    } else if (brand_id !== "0") {
      MatchingStage = {
        $match: { brand_id: new ObjectId(brand_id) },
      };
    } else if (remark !== "0") {
      MatchingStage = {
        $match: { remark: remark },
      };
    } else if (keyword !== "0") {
      let searchRegex = {
        $regex: keyword, //text khojar jonne
        $options: "i", //casei nsensitive,boro choto haater matter kore na.
      };
      let searchParams = [{ title: searchRegex }]; //cheacking if therer are any data in searchregex
      let searchStage = {
        $or: searchParams,  //aaro param thakle or dekhto kontay data ase to search
      };
      MatchingStage = {
        $match: searchStage, //cheacking in product collection for product
      };
    } else {
      MatchingStage = {
        $match: {},
      };
    }

    let joinWithCategory = {  //getting info from category collection. because all info not avilable in prodcut collection
      $lookup: {  //take id from product collection then search by it after entering categories database collection
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category",  //after searching its create a array name category where it kept all info
      },
    };

    let facetStage = {  //showing the found product by a good formation, page,sort and category theke joinwithcategory theke ja ja pailam ta dekhabe ar ki ki dekhabe ta project e bola ase
      $facet: {
        totalCount: [{ $count: "count" }],
        products: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          joinWithCategory,
          {
            $project: {
              _id: 1,
              category_id: 1,
              brand_id: 1,
              title: 1,
              images: 1,
              price: 1,
              is_discount: 1,
              discount_price: 1,
              remark: 1,
              stock: 1,
              createdAt: 1,
              "category.category_name": 1,
            },
          },
        ],
      },
    };

    let products = await productModel.aggregate([MatchingStage, facetStage]); // first match stage will execute then full find product object will be given in facetstage to show it
        //uporer ine tai first e execute hobe because eita main engine, product model er bhitor dhuke product database e jaabe
    res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};



// Get Single Product Details
exports.singleProduct = async (req, res) => {
  try {
    const id = new ObjectId(req.params.id);   //param id used in api to search product thats how we get this

    let matchStage = {
      $match: { _id: id },  //database e _id ase
    };

    let joinWithCategory = {
      $lookup: {
        from: "categories",
        localField: "category_id",
        foreignField: "_id",
        as: "category",
      },
    };

    let joinWithBrand = {
      $lookup: {
        from: "brands",
        localField: "brand_id",
        foreignField: "_id",
        as: "brand",
      },
    };

    let data = await productModel.aggregate([
      matchStage,
      joinWithCategory,
      joinWithBrand,
    ]);

    res.status(200).json({
      success: true,
      message: "Product fetched successfully",
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


// Product update single
exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params; //taking id direct because later findbyidandupdate direct make it objectid,its build in so we donot have to make it now
    const {
      title,
      images,
      sort_description,
      price,
      is_discount,
      discount_price,
      remark,
      stock,
      color,
      size,
      description,
      category_id,
      brand_id,
    } = req.body;

    if (discount_price > price) {
      return res.status(200).json({
        success: false,
        message: "The discount price must be smaller than the main price.",
      });
    }

    let data = await productModel.findByIdAndUpdate(
      id,
      {
        title,
        images,
        sort_description,
        price,
        is_discount,
        discount_price,
        remark,
        stock,
        color,
        size,
        description,
        category_id,
        brand_id,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Product updated successfully",
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


//! Product delete single
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await productModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


