const express = require ("express");

const app = new express();
const rateLimit=  require("express-rate-limit");
const helmet= require("helmet");
const mongoSanitize= require("express-mongo-sanitize");
const hpp =require("hpp");
const path= require("path");
const cors= require ("cors");
const cookieParser= require("cookie-parser");
const mongoose= require("mongoose");
const dotENV= require("dotenv");
const router= require("./src/routes/api");


dotENV.config();

//connect mongodb
let option = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
};
 const URL = process.env.DB_URI

 
mongoose
  .connect(URL, option)
  .then((res) => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

mongoose.set("strictQuery", false);


// Global Middlewares
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "img-src": ["'self'", "https:", "data:"],
    },
  })
);

app.use(mongoSanitize());
app.use(hpp());

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb" }));
// app.use(express.urlencoded({ limit: "50mb", extended: true }));

const limiter = rateLimit({ windowMs: 15 * 60 * 1000, max: 3000 }); // 3000 requests per 15 minutes
app.use(limiter);

app.use("/api/v1", router); //these is the address of router

app.use("/api/v1/get-file", express.static("uploads"));  //open for every user, user can get image if request in these address

// Serve Frontend
// app.use(
//   "/super-admin",
//   express.static(path.join(__dirname, "client", "super-admin", "dist"), {
//     index: false, // important! prevents redirect 301
//   })
// );

// app.get("/super-admin/*", (req, res) => {
//   res.sendFile(
//     path.resolve(__dirname, "client", "super-admin", "dist", "index.html")
//   );
// });

// app.use(express.static(path.join(__dirname, "client", "ecommerce", "dist")));
// app.get("*", function (req, res) {
//   res.sendFile(
//     path.resolve(__dirname, "client", "ecommerce", "dist", "index.html")
//   );
// });

module.exports = app;

