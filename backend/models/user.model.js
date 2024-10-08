import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({

    fullName:{
        type: String,
        required:true,
        minLength:6,
        
    },
    
    username:{

        type:String,
        required:true,
        unique:true,
        minLength:6
       
    },
    password:{

        type:String,
        required:true,
        minLength:6
        
    },
    gender:{
        type:String,
        required:true,
        enum:["male", "female"]
    },
    profilePic:{
        type:String,
        default:""

    }

}, {timestamps:true});

const User = mongoose.model("User", userSchema);
export default User;