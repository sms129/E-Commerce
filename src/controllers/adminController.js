const adminModel = require("../models/adminModel");
const bcrypt= require("bcrypt");
const { EncodeToken } = require("../utility/tokenHelper");

let options = {
  maxAge: process.env.Cookie_Expire_Time,
  httpOnly: false,
  sameSite: "none",
  secure: true,
};
//! Create admin
exports.register = async (req, res) => {
  try {
    const { email, password } = req.body;

    await adminModel.create({ email, password });

    res.status(200).json({
      success: true,
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//admin login
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await adminModel.findOne({ email }); //if it match it wil give id,email,pass motkotha full admin er object ta aisha jaabe jeita use korte parbo 
    if (!user) {
      return res.status(200).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    // isMatch password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(200).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    if (isMatch) {
      let token = EncodeToken(user.email, user._id.toString());

      // Set cookie
      res.cookie("a_token", token, options);

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
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//get admin
exports.admin = async (req, res) => { //in the deshboard showing and taking the admin data
  try {
    let email = req.headers.email;

    let MatchStage = {
      $match: { email },
    };

    let project = {
      $project: {
        password: 0,
      },
    };

    let data = await adminModel.aggregate([MatchStage, project]); //onkgula kaaj dhape dhape shes kore aggregate,serially

    res.status(200).json({
      success: true,
      data: data[0],
    });

   // console.log(data);
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
};

//admin verify
exports.adminVerify =async (req,res) =>{  //to see if admin still login
  try{
    res.status(200).json({success: "true"});


  }catch (error) {
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });
  }
}


//admin logout
exports.logout = async (req, res) => {
  try{
    res.clearCookie("a_token");

    res.status(200).json({success: "true" ,message: "Logout success! "});

  }catch(error){
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });

  }
}

//! Update admin
exports.update = async (req, res) => {
  try {
    const { email, password } = req.body;
    const _id = req.headers._id;

    let updatedData = { email }; //only email because otherwise we have to change both email and pass. now we can change only one.
    //otherwise if we change only email the pass will remain empty string,and we couldnot login
    const user = await adminModel.findOne({ email, _id });

    if (!user) {
      return res
        .status(200)
        .json({ success: false, message: "Invalid email." });
    }

    // যদি password ফিল্ড থাকে, তবে সেটি bcrypt দিয়ে হ্যাশ করে আপডেট করবো
    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updatedData.password = hashedPassword;
    }

    // Update user
    const updatedUser = await adminModel.findByIdAndUpdate(_id, updatedData, {  //find the id and then update the data.
      new: true,  //new :true dile new data fherot dey updateuser variable e to use it.
    });

    let token = EncodeToken(updatedUser?.email, updatedUser?._id.toString());//updateuser? to prevent crash it send undefiend insted if didnot get id and couldnot change the data in findByIdAndUpdate operation
              //updateuser?  it does not mean if its change or not it just to prevent crash
    // Set cookie
    res.cookie("a_token", token, options);

    res.status(200).json({
      success: true,
      message: "Admin updated successfully",
      user: {
        email: updatedUser.email,
      },
    });
  } catch(error){
    res.status(500).json({
      success: false,
      error: error.toString(),
      message: "Something went wrong.",
    });

  }
};







