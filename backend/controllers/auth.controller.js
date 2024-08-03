import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import {generateTokenSetCookie} from '../utils/genToken.js'



//SIGNUP
export const signup = async (req, res) => {
    try {
        const { fullName, username, password, confirmPassword, gender } = req.body


        //if passwords do not match
        if (password !== confirmPassword) {
            return res.status(400).json({ error: "Passwords do not match" })
        }


        const user = await User.findOne({ username });

        //if user already exist
        if (user) {
            return res.status(400).json({ error: "User already exist" })
        }


        //hash pass here
        const salt = await bcrypt.genSalt(10);
        const hashedpass = await bcrypt.hash(password, salt);


        //instanciating new user
        const boyPp = "https://avatar.iran.liara.run/public/48"
        const girlPp = "https://avatar.iran.liara.run/public/98"
        
        const newUser = new User({
            fullName,
            username,
            password: hashedpass,
            gender,
            profilePic: gender === "male" ? boyPp : girlPp

        })


        //testing for sucessful user instance
        if (newUser) {
             generateTokenSetCookie(newUser._id, res);
            console.log(res.cookies);
            await newUser.save();


            res.status(201).json({
                message: "Account Added",
                _id: newUser._id,
                fullName,
                username,
            })
        }else{
            res.status(500).json({error:"Error occured"})
        }



    } catch (error) {
       
        console.log(error.message)
        return res.status(500).json({ error: error.message})
    }
}




//LOGIN
export const login = async (req, res) => {
   try{
    const{username, password} = req.body;
    const user = await User.findOne({username});
    const isPasswordCorrect = await bcrypt.compare(password, user?.password || "");


    if(!user || !isPasswordCorrect){
        // res.status(400).json({message:"Invalid username"})
        throw new Error("Invalid username");
        

    }

    generateTokenSetCookie(user._id, res)
    res.status(200).json({
        message:"Log in Successfully",
        _id:user._id,
        fullName: user.fullName,
        username:user.username,
        profilePic:user.profilePic,
    })

   }

    catch (error) {
        if(error.message.includes("Operation `users.findOne()` buffering timed out after 10000ms")){
            console.log("Database Connection Error");
            return res.status(500).json({ error: "Database Connection Error" })
        }
        console.log(error.message)
        return res.status(500).json({ error: error.message })
        
    }
}

//LOGOUT
export const logout = async (req, res) => {
    

    try{

       res.cookie("jwt", "", {maxAge:0})
        res.status(200).json({message:"Logout Successfully"})

    }

    catch (error) {
        return res.status(500).json({ message: error.message })
    }
}
