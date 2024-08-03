import React, { useState } from 'react'
import useConversation from '../components/zustand/useConversation'

const useSendMessage = () => {
    const {selectedConversation, messages, setMessages} = useConversation();
    const [loading, setLoading] = useState(null);
    const[isLoading, setIsLoading] = useState(false);
    
    const sendMessage = async(messageData)=>{

        try {

            setIsLoading(true);
            if(!validateMessage(messageData)){
                throw new Error("messages can't be empty");

            }

            const res = await fetch(`/api/messages/send/${selectedConversation?._id}`,{
                method:"POST",
                headers:{
                    "Content-Type": "application/json"
                },
                body:JSON.stringify({message:messageData}),
               

            })

            const data = await res.json();
            if(data.error){
                throw new Error(data.error);
            }
            setMessages([...messages, data]);
            setLoading("Message Send Successfully")
            console.log("message sent");
            
        } catch (error) {
            setLoading(error.message)
           
            
        }
        finally{
            setIsLoading(false);
        }

    }
  return  {loading, isLoading, sendMessage}
}

export default useSendMessage


const validateMessage = (messageData) =>{

    if(messageData==="" || messageData.trim()===""){
        console.log("not send");
        return false;
        
    }
    console.log("sended 1")
    return true;



}
