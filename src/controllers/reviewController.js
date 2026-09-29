const mongoose = require("mongoose");
const reviewModel = require("../models/reviewModel");
const ObjectId = mongoose.Types.ObjectId;
// Review Create or Update Controller
exports.createReview = async (req, res) => {
  try {
    // Auth Middleware theke user id header e ashbe
    let user_id = req.headers._id;
    
    // Request Body theke data destructure kora hochhe
    const { product_id, invoice_id, des, rating } = req.body;

    // Review update kora hobe, na thakle notun toiri (upsert) hobe
    let data = await reviewModel.updateOne(
      { user_id, product_id, invoice_id }, // Filter: Ei 3-ti milay check korbe shb authentic kina,thik user,product,invoice kina
      { user_id, product_id, invoice_id, des, rating }, // Data to set or update,maane ki ki save thakbe review er shathe
      { new: true, upsert: true } // Options: Notun thakle insert korbe (upsert) and ekoi product e amar purano review thakle ta update hobe,error dibena 
    );

    res.status(200).json({
      success: true,
      message: "Review created successfully",
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

// Get All Review with Pagination Controller
exports.allReview = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 };

    // Lookup Stage with Users Collection
    let joinStageWithUser = {
      $lookup: {
        from: "users",
        localField: "user_id", //get it when user gives review. 
        foreignField: "_id",   //users e thaka id er shathe match hobe loaclfield er id
        as: "user",
      },
    };

    // Lookup Stage with Products Collection
    let joinStageWithProduct = {
      $lookup: {
        from: "products",
        localField: "product_id",
        foreignField: "_id",
        as: "product",
      },
    };

    // Unwind Stages (Array-ke single Object-e convert kora) to show good..
    let unwindStageUser = { $unwind: "$user" };
    let unwindStageProduct = { $unwind: "$product" };

    // Project Stage (shudhu dorkari field dekhano)
    let projectStage = {
      $project: {
        _id: 1,
        invoice_id: 1,
        product_id: 1,
        user_id: 1,
        createdAt: 1,
        des: 1,
        rating: 1,
        "user.cus_name": 1,
        "user.email": 1,
        "product.title": 1,
        "product.images": 1,
      },
    };

    // Facet Stage (Pagination and Grouping)
    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        data: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          joinStageWithUser,
          joinStageWithProduct,
          unwindStageUser,
          unwindStageProduct,
          projectStage,
        ],
      },
    };

    // Aggregate Execution
    let data = await reviewModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
      data: data[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


// Get Review by single product
exports.allReviewByProducts = async (req, res) => {
  try {
    let product_id = new ObjectId(req.params.product_id);

    let matchingStage = {
      $match: {
        product_id,
      },
    };

    let joinWithUser = {
      $lookup: {
        from: "users",
        localField: "user_id",
        foreignField: "_id",
        as: "user",
      },
    };

    let unwindUseStage = { $unwind: "$user" };

    let project = {
      $project: {
        createdAt: 1,
        updatedAt: 1,
        des: 1,
        rating: 1,
        "user.cus_name": 1,
        "user.email": 1,
      },
    };

    let data = await reviewModel.aggregate([
      matchingStage,
      joinWithUser,
      unwindUseStage,
      project,
    ]);

    res.status(200).json({
      success: true,
      message: "Review fetched successfully",
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