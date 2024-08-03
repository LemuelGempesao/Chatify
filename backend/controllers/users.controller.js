import User from "../models/user.model.js";



const getUsers = async (req, res) =>{

    try {

        //imohang account gikan sa protect route (req.user=user)
        const loggedInAccount = req.user._id;
        const allFilteredUsers = await User.find({_id:{$ne: loggedInAccount}}).select("-password");

        res.status(200).json(allFilteredUsers);

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message })
        
    }



}


export default getUsers;