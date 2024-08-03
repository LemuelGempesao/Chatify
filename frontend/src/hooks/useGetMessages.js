import React, {useEffect, useState} from 'react'
import useConversation from '../components/zustand/useConversation';

const useGetMessages = () => {

    const{messages, setMessages, selectedConversation} = useConversation();
    const [loading, setLoading] = useState(null);
    const [isloading, setIsLoading] = useState(null);

    useEffect(()=>{

        const getMessages = async()=>{
            setIsLoading(true);
            try {   

                const res = await fetch(`api/messages/${selectedConversation._id}`);
                const data = await res.json();
                if(data.error){
                    throw new Error("Cant get messages");
                }
                setMessages(data);        
            } catch (error) {
                console.log(error.message)
                setLoading(error.message)
                
            }
            finally{
                setIsLoading(false);
            }
        }

        if(selectedConversation?._id){
            getMessages();
        }




    },[selectedConversation?._id, setMessages]);




  return {messages, isloading, loading}
  
}

export default useGetMessages
