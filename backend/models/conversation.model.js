import mongoose from 'mongoose'



const convoSchema = new mongoose.Schema({
    participants:[
        {

            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        }
    ],

    message:[

        {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Message",
        }
    ]




}, {timestamps:true});




const Convo = mongoose.model("Convo", convoSchema)
export default Convo