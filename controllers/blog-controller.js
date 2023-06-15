const Blog= require("../model/Blog")

const getAllBlogs=async(req,res,next)=>{
    let allblogs;
    try{
        allblogs=await Blog.find();
    }catch(err){
        return console.log(err);
    }
    if(allblogs.length==0){
        return res.status(400).json({message: "No Blog found"})
    }
    return res.status(200).json({allblogs});
} 

const addBlog=async (req,res,next)=>{
    const {title, description, image, user}=req.body;
    let oldblog;
   
    try{
        oldblog=await Blog.find({title});
    }
    catch(err){
        return console.log(err);
    }
    if(oldblog.length!=0){
        return res.status(400).json({message: "Blog is already there"});
    }
    const blog=new Blog({
        title,
        description,
        image,
        user
    })
    await blog.save();
    res.status(200).json({blog});
}

const updateBlog=async (req,res,next)=>{
    const blogId=req.params.id;
    const {title,description}=req.body;
    let blog;
    try{
        blog=await Blog.findByIdAndUpdate(blogId,{
            title,
            description
        })
    }
    catch(err){
        return console.log(err);
    }
    if(!blog){
        return res.status(500).json({message: "Unable to update the blog"});
    }
    return res.status(200).json({blog});
}


const getById= async(req,res,next)=>{
    let blogbyid;
    let blogId=req.params.id;
    try{
        blogbyid= await Blog.findById(blogId);
    }catch(err){
        return console.log(err);
    }
    
    return res.status(200).json({blogbyid});
}

module.exports= {getAllBlogs,addBlog,updateBlog,getById};