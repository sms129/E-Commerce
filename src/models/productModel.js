const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
    {
        title: { type: String },
        images: [String],  //can attach multiple picture as an array. didnot use type because it does not have any other rules
        sort_description: { type: String },
        price: { type: Number },
        is_discount: { type: Boolean },
        discount_price: { type: Number },
        remark: { type: String },
        stock: { type: Number },
        color: [String],
        size: [String],
        description: { type: String },

        category_id: { type: mongoose.Schema.Types.ObjectId, required: true }, //category and brand will save as id not name so that when we change one,it can be change for everyone
        brand_id: { type: mongoose.Schema.Types.ObjectId, required: true }, //mongoose.Schema.Types.ObjectId 24 word er id ene boshai eikhane, require true means its mendatory to fillup
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const productModel = mongoose.model("products", DataSchema);

module.exports = productModel;


