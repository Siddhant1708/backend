const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const blogrouter=require("./routes/blog-routes");
const app = express();

app.use(express.json())
app.use("/api/user",router);
app.use("/api/blog",blogrouter)

mongoose
  .connect(
    "mongodb+srv://siddhantpratapsingh917:lm9RDbi2doAoeOOJ@cluster0.fg2gmcl.mongodb.net/blogapp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
