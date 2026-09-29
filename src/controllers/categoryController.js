const categoryModel = require("../models/categoryModel");

//! Category create
exports.createCategory = async (req, res) => {
  try {
    const { category_name, category_img } = req.body;

    let data = await categoryModel.create({ category_name, category_img });

    res.status(200).json({
      success: true,
      message: "Category created successfully",
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


//! Category Get All with Pagination
exports.allCategory = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 };

    let joinWithProduct = {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "category_id",
        as: "products",
      },
    };

    const addProductCount = {
      $addFields: {
        totalProduct: { $size: "$products" },  //uporer build kora products e giye er bhitor koyta product ase ta ber kore
      },
    };

    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        categories: [
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

    let categories = await categoryModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


//! Category Get Single
exports.singleCategory = async (req, res) => {
  try {
    const { id } = req.params;
    let data = await categoryModel.findById(id);

    res.status(200).json({
      success: true,
      message: "Category fetched successfully",
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


//! Category update single
exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { category_name, category_img } = req.body;

    let data = await categoryModel.findByIdAndUpdate(
      id,
      { category_name, category_img },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Category updated successfully",
      data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


//! Category delete single
exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;

    // find product with this category id --case of Relational Dependency
    let products = await productModel.find({ category_id: id });  //category id saves while creating product, thats how it helping to find product
    if (products.length > 0) {    //cheacking if there any product in category before delete otherwise it can crash or create orphan case
      return res.status(200).json({
        success: false,
        message: "Please delete all products with this category first.",
      });
    }

    await categoryModel.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
      message: "Category deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};