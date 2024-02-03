// const { user } = require("../models/User");
// const bcrypt=require('bcrypt');
// const jwt=require('jsonwebtoken')
// require('dotenv').config();


// exports.login=async(req,res)=>{
//     try {
//         const {email,password}=req.body;
//         console.log(req.body);
//         if (!email || !password) {
//             return res.status(400).json({
//                 sucess:false,
//                 message:"please fill all the details"
//             })
//         }
//         const Isuser = await user.findOne({ where: { email: email } });
//         if (!Isuser) {
//             return res.status(404).json({
//                 sucess:false,
//                 message:"user not found"
//             })
//         }
//         console.log("user found good to go");
//         if(await bcrypt.compare(password,Isuser.password)){
//             Isuser.password=undefined
//             const payload={
//                 email:Isuser.email,
//                 role:Isuser.role,
//                 id:Isuser._id
//             }
//             let token = jwt.sign(payload, process.env.JWT_SECRET || 'fallbackSecret', { expiresIn: "2h" });

//             return res.header('Authorization', `Bearer ${token}`).cookie("token",token,{expires:new Date(Date.now()+3*24*60*60*1000),httpOnly:true}).status(200).json({
//                 token:token,
//                 sucess:true,
//                 message:"ok",
//                 user:Isuser
//             })
//         }else{
//             return res.status(403).json({
//                 sucess:false,
//                 message:"invelid password",
//             })
//         }
//     } catch (e) {
//         console.error(e);
//         return res.status(404).json({
//             sucess:false,
//             message:"error in login",
//             error:e
//         })
//     }
// }



const { user } = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide both email and password",
      });
    }

    const existingUser = await user.findOne({ where: { email } });

    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, existingUser.password);

    if (isPasswordValid) {
      existingUser.password = undefined;

      const payload = {
        email: existingUser.email,
        role: existingUser.role,
        id: existingUser._id,
      };

      const token = jwt.sign(payload, process.env.JWT_SECRET || 'fallbackSecret', { expiresIn: "2h" });

      // Add secure and HTTP-only flags for cookies
      const cookieOptions = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Only set secure flag in production
      };

      res.cookie("token", token, cookieOptions);

      return res.status(200).json({
        token,
        success: true,
        message: "Login successful",
        user: existingUser,
      });
    } else {
      return res.status(403).json({
        success: false,
        message: "Invalid password",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error in login",
      error: error.message,
    });
  }
};
