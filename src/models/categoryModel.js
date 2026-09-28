const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        category_name: { type: String, unique: true, required: true },  //unique because so that same name doesnot create 
        category_img: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const categoryModel = mongoose.model("categories", DataSchema);

module.exports = categoryModel;