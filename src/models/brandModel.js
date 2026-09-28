const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
    {
        category_name: { type: String, unique: true, required: true },
        category_img: { type: String, required: true },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const brandModel = mongoose.model("brands", DataSchema);

module.exports = brandModel;