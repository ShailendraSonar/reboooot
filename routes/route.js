const express=require('express');
const register = require('../controllers/resgister');
const { login } = require('../controllers/login');
const allUser = require('../controllers/allUser')
const router=express.Router();
 
router.post("/register",register)
router.post("/login",login)
router.get("/allUser",allUser)


module.exports=router;




