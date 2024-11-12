const express=require('express')
const eventController=require('../controllers/eventController')

const router=express.Router()

//setting path of router
router.post('/event',eventController.sendMessage)

module.exports=router