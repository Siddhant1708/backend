const express=require("express")
const blogrouter=express.Router()
const {getAllBlogs,addBlog,updateBlog} = require("../controllers/blog-controller")

blogrouter.get("/",getAllBlogs);
blogrouter.post("/add",addBlog);
blogrouter.post("/update/:id",updateBlog)

module.exports=blogrouter;

