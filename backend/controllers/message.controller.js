import Convo from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import { getReceiverSocketId, io } from "../socket/socket.js";




export const sendMessage = async (req, res) => {
   try {
      const { message } = req.body;
      const { id: receiverId } = req.params;
      const senderId = req.user._id;

      //filtering {{{{A one}}} convo instance with the given senderID and receiverID as participants
      let conversation = await Convo.findOne({
         participants: { $all: [senderId, receiverId] }

      })

      if (!conversation) {
         conversation = await Convo.create({
            participants: [senderId, receiverId],


         })
      }


      //buhat message
      const newMessage = new Message({
         senderId,
         receiverId,
         message


      })


      //if nabuhat is kuhaon ang id ana nya ki pusg sa conversation.message

      if (newMessage) {
         conversation.message.push(newMessage._id)
      }
      
      
      await Promise.all([conversation.save(), newMessage.save()]);

		// SOCKET IO FUNCTIONALITY WILL GO HERE
		const receiverSocketId = getReceiverSocketId(receiverId);
		if (receiverSocketId) {
			// io.to(<socket_id>).emit() used to send events to specific client
			io.to(receiverSocketId).emit("newMessage", newMessage);
		}

      res.status(200).json(newMessage)


   } catch (error) {
      console.log(error.message);
      res.status(500).json({ error: error.message })

   }



}

export const getMessages = async (req, res) =>{

   try{
      const {id:userToChatId} = req.params;
      const senderId = req.user._id;



      const conversation = await Convo.findOne({
         participants:{$all:[senderId, userToChatId]},
      }).populate("message");

     if(!conversation){
         return res.status(200).json([]);
     }

     const messages = conversation.message;
     console.log(messages)

     res.status(200).json(messages);

   }
   
   catch (error) {
      console.log("error");
      res.status(500).json({ error: error.message })

   }
}

