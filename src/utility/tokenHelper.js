const jwt = require("jsonwebtoken");

exports.EncodeToken = (email, _id) => {
  let key = process.env.JWT_KEY;
  let expire = process.env.JWT_Expire_Time;

  let payload = { email, _id }; //token create hobe id and email er shomonnoye
  return jwt.sign(payload, key, { expiresIn: expire });
};

exports.DecodeToken = (token) => {
  try {
    let key = process.env.JWT_KEY;
    let decoded = jwt.verify(token, key); //cheacking if its correct or not
    return decoded;
  } catch (error) {
    return null;
  }
};