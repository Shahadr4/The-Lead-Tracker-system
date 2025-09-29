
import jwt from "jsonwebtoken"
import User from "../models/User.js"
import bcrypt from 'bcrypt'

const login = async(req, res)=>{

    try {
        const { email, pass } = req.body; // ✅ object destructuring

        const user = await User.findOne({email})
        if(!user ){

            res.status(404).json({success: false,error:"user Not Found"})

        }
        const isMatch = await  bcrypt.compare(pass,user.password)
         if(!isMatch ){

            res.status(404).json({success: false,error:"Worng Password"})

        }
        const token = jwt.sign({_id:user._id,role:user.role},
            process.env.JWT_KEY,{expiresIn:"10d"}


        )
        res.status(200).json({success:true,token,user:{_id:user._id,name:user.name,role:user.role}})


        
    } catch (error) {
        res.status(500).json({success:false,error:error.message})
        
    }

}
export {login}