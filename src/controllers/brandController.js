const brandModel = require("../models/brandModel");
const productModel = require("../models/productModel");
//! Brand create
exports.createBrand = async (req, res) => {
  try {
    const { brand_name, brand_img } = req.body;

    let data = await brandModel.create({ brand_name, brand_img });

    res.status(200).json({
      success: true,
      message: "Brand created successfully",
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

//! Get All Brand with Pagination
exports.allBrand = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 };

    let joinWithProduct = {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "brand_id",
        as: "products",
      },
    };

    const addProductCount = {
      $addFields: {
        totalProduct: { $size: "$products" },
      },
    };

    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        brands: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          joinWithProduct,
          addProductCount,
          {
            $project: {
              updatedAt: 0,
              products: 0,
            },
          },
        ],
      },
    };

    let brands = await brandModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Brands fetched successfully",
      data: brands[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//! Get Brand Single
exports.singleBrand = async (req, res) => {
  try {
    const { id } = req.params;

    let data = await brandModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Brand fetched successfully",
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

//! Brand update single
exports.updateBrand = async (req, res) => {
  try {
    const { id } = req.params;
    const { brand_name, brand_img } = req.body;

    let data = await brandModel.findByIdAndUpdate(
      id,
      { brand_name, brand_img },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Brand updated successfully",
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


//! Brand delete single
exports.deleteBrand = async (req, res) => {
  try {
    const { id } = req.params;

    // find product with this brand id
    let products = await productModel.find({ brand_id: id }); //relational depedency
    if (products.length > 0) {
      return res.status(200).json({
        success: false,
        message: "Please delete all products with this brand first.",
      });
    }

    await brandModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Brand deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};