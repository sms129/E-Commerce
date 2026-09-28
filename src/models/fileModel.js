const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    filename: { type: String }, //only name will be save in database, file will save in local storage 
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const fileModel = mongoose.model("files", DataSchema);

module.exports = fileModel;