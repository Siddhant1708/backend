const express=require("express")
const blogrouter=express.Router()
const {getAllBlogs,addBlog,updateBlog,getById} = require("../controllers/blog-controller")

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add",addBlog);
blogrouter.post("/update/:id",updateBlog);
blogrouter.get("/:id",getById);

module.exports=blogrouter;

