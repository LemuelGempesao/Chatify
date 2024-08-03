import mongoose, { Mongoose } from "mongoose";
import 'dotenv/config'



async function  connectToDb (){
    try{
        await mongoose.connect(process.env.connection);
        console.log("db connected");
    }

    catch(error){
        if(error instanceof mongoose.Error){
            console.log("Check Internet Connetion");
        }

        else if(error.message.includes("read ECONNRESET")){
            console.log("Check Internet Connetion");
        }

        else if(error.message.includes("querySrv ECONNREFUSED")){
            console.log("Check Internet Connetion");
        }

        else{

            console.log(`ERROR: ${error.message}`);
        }

    }



}

export default connectToDb;