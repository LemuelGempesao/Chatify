import jwt, { decode } from "jsonwebtoken"
import User from "../models/user.model.js";




// protect route - kuhaon ang token sa cookie - decode ang token - kuhan ang id sa token - pagkuha sa id
//find ang user gamit id nga nakuha sa token

const protectRoute = async (req, res, next) => {
    try {



        //kuhaon ang token sa log in to check if login ba ang user bago ka ka send ug message
        const token = req.cookies.jwt;
        console.log(token);
        


        //if wala error status
        if(!token) {

            return res.status(400).json({error:"not authorized"})
        }

        //once naa, i verify if ang token nga nakuha is parehas sa secret jwt
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(!decoded){
            return res.status(401).json({error:"unauthorized"})
        }

        const user = await User.findById(decoded.userId).select("-password")


        if(!user){
            return res.status(401).json({error:"no user"})
        }


        req.user=user;
        next();


    } catch (error) {
        if(error instanceof mongoose.Error){
            console.log("Check Internet Connetion");
            res.status(500).json({error:"Check Internet Connection"});
        }

        else if(error.message.includes("Operation `users.findOne()`")){
            console.log("Check Internet Connection");
            res.status(500).json({error:"Check Internet Connection"});
        }
        else{
            console.log(error.message);
            res.status(500).json({error:error})
        }

        
        
    }

}

export default protectRoute;

