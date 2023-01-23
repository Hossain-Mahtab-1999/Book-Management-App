import express from "express";
const app = express();

import booksapiroute from "./routes/booksapi.js";
import authroute from "./routes/auths.js";
import usersroute from "./routes/users.js";
import cors from "cors";
import cookieParser from "cookie-parser";
// import multer from "multer";

// import { db } from "./connect.js";


 //middleware
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Credentials", true);
  next()
})
app.use(express.json())
app.use(cors(
  {
    origin: "http://localhost:3000",
    credentials: true
  }
))
app.use(cookieParser())


//app.use("/uploads", express.static("./uploads"))
 
app.use("/server/booksapi", booksapiroute);
app.use("/server/auths", authroute);
app.use("/server/users", usersroute);


app.listen(8800, () => {
  console.log("Server is running on port 8800");
})