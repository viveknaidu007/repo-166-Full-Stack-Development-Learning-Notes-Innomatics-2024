const express=require('express')
const blogController=require('../controllers/blogController')
const router=express.Router()

//creating request
router.get('/',blogController.getAll)
router.get('/:id',blogController.getById)
router.post('/',blogController.createBlog)
router.put('/:id',blogController.updateBlog)
router.delete('/:id',blogController.deleteBlog)

module.exports=router