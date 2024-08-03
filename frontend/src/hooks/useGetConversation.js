import React, { useEffect, useState } from 'react'

const useGetConversation = () => {
    const [loading, setLoading] = useState(null)
    const [isLoading, setIsLoading] = useState(null);
    const [conversations, setConversations] = useState([])


    useEffect(()=>{

        const getConversations = async () =>{

            setIsLoading(true)
            try {

                const res = await fetch("/api/users");
                const data = await res.json();
                if(data.error){
                    throw new Error(data.error);
                }
                setConversations(data);

                
            } catch (error) {
                setLoading(error.message)
                
            }
            finally{
                setIsLoading(false)
            }
        }
        getConversations();

    }, [])




return {loading, isLoading, conversations}
}

export default useGetConversation
