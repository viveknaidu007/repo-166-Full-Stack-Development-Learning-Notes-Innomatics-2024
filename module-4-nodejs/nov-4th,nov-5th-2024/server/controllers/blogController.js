const Blog=require('../models/blogSchema')

//getall post
const getAll=async(req,res)=>{
    try{
        const blog=await Blog.find()
        res.status(200).json(blog)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}

//getspecific blog
const getById=async(req,res)=>{
    try{
        const blog=await Blog.findById(req.params.id)
        if(!blog){
            res.status(404).json({msg:'Blog not found'})
        }
        res.status(200).json(blog)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}

//post blog
const createBlog=async(req,res)=>{
    try{
        const{title,content,imageUrl,author}=req.body
        const blog=await Blog.create({title,content,imageUrl,author})
        await blog.save()
        res.status(201).json(blog)

    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}
//update method
const updateBlog=async(req,res)=>{
    try{
        const{title,content,imageUrl,author}=req.body
        const update_blog=await Blog.findByIdAndUpdate(req.params.id,{title,content,imageUrl,author},{new:true})
        if(!update_blog){
            res.status(404).json({msg:'Blog not found'})
        }
        res.status(201).json(update_blog)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}
//delete 
const deleteBlog=async(req,res)=>{
    try{
        const delete_blog=await Blog.findByIdAndDelete(req.params.id)
        if(!delete_blog){
            res.status(404).json({msg:'blog not found'})
        }
        res.status(200).json(delete_blog)
    }catch(err){
        res.status(500).json({msg:err.msg})
    }
}
module.exports={getAll,getById,createBlog,updateBlog,deleteBlog}