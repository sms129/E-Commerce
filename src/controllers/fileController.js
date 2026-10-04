const fileModel = require("../models/fileModel");
const fs= require("fs");
const path= require("path");
// File upload
exports.fileUpload = async (req, res) => {
  try {
    const filename = req.file;

    let data = await fileModel.create({ filename });

    res.status(200).json({
      success: true,
      message: "File Upload successfully",
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


// All File
exports.allFile = async (req, res) => {
  try {
    let page_no = Number(req.params.page_no);
    let per_page = Number(req.params.per_page);

    let skipRow = (page_no - 1) * per_page;
    let sortStage = { createdAt: -1 };

    let facetStage = {
      $facet: {
        totalCount: [{ $count: "count" }],
        files: [
          { $sort: sortStage },
          { $skip: skipRow },
          { $limit: per_page },
          {
            $project: {
              updatedAt: 0,
            },
          },
        ],
      },
    };

    let files = await fileModel.aggregate([facetStage]);

    res.status(200).json({
      success: true,
      message: "Files fetched successfully",
      data: files[0],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};




