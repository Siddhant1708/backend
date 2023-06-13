const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/user-routes");
const app = express();

app.use(router);

mongoose
  .connect(
    "mongodb+srv://siddhantpratapsingh917:lm9RDbi2doAoeOOJ@cluster0.fg2gmcl.mongodb.net/blogapp?retryWrites=true&w=majority"
  )
  .then(() => app.listen(3000))
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));
