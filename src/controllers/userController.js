const userModel = require("../models/userModel");
const bcrypt= require("bcrypt");
const { EncodeToken } = require("../utility/tokenHelper");

let options = {
  maxAge: process.env.Cookie_Expire_Time,
  httpOnly: false,
  sameSite: "none",
  secure: true,
};


//! Create user
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // find the existing user
    let ifUser = await userModel.find({ email });
    if (ifUser.length > 0) {
      return res.status(200).json({
        success: false,
        message: "Email already registered.",
      });
    }

    // Create and save the new user
    let user = await userModel.create({ email, password });
    res.status(200).json({
      success: true,
      message: "Registration successfully.",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};



//! User Login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password" });
    }

    // isMatch password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password" });
    }

    if (isMatch) {
      let token = EncodeToken(user.email, user._id.toString());

      // Set cookie
      res.cookie("u_token", token, options);
      res.status(200).json({
        success: true,
        message: "Login successful",
        user: {
          id: user._id,
          email: user.email,
        },
        token: token,
      });
    }
  } catch (error) {
    res.status(200).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


//! get User
exports.user = async (req, res) => {
  try {
    let email = req.headers.email;
    let matchStage = {
      $match: { email },
    };
    let project = {
      $project: {
        password: 0,
      },
    };

    let data = await userModel.aggregate([matchStage, project]);
    res.status(200).json({ success: true, data: data[0] });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


//! user Verify
exports.userVerify = async (req, res) => {
  try {
    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: e.toString(),
      message: "Something went wrong.",
    });
  }
};


//! user Logout
exports.logout = async (req, res) => {
  try {
    res.clearCookie("u_token");
    res.status(200).json({ success: true, message: "Logout success!" });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};


//! update user
exports.update = async (req, res) => {
  try {
    let email = req.headers.email;
    const _id = req.headers._id;
    const {
      password,
      cus_add,
      cus_city,
      cus_country,
      cus_fax,
      cus_name,
      cus_phone,
      cus_postcode,
      cus_state,
      ship_add,
      ship_city,
      ship_country,
      ship_name,
      ship_phone,
      ship_postcode,
      ship_state,
    } = req.body;

    let updatedData = {
      email,
      password,
      cus_add,
      cus_city,
      cus_country,
      cus_fax,
      cus_name,
      cus_phone,
      cus_postcode,
      cus_state,
      ship_add,
      ship_city,
      ship_country,
      ship_name,
      ship_phone,
      ship_postcode,
      ship_state,
    };

    const user = await userModel.findOne({ email, _id });
    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email." });
    }

    // jodi password field thake, tobe seti bcrypt diye hash kore update korbo
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    // isMatch password
    const isMatch = await bcrypt.compare(password, updatedData.password);

    if (!isMatch) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email or password" });
    }

    if (isMatch) {
      // Update user
      const user = await userModel.findByIdAndUpdate(_id, updatedData, {
        new: true,
      });

      let token = EncodeToken(user?.email, user?._id.toString()); 
      // Set cookie
      res.cookie("u_token", token, options);
      res.status(200).json({
        success: true,
        message: "Update data successful",
        user: {
          id: user._id,
          email: user.email,
        },
        token: token,
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


