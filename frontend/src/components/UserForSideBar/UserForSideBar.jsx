import React from 'react'
import User from '../Users/User'
import useGetConversation from '../../hooks/useGetConversation'
import UserLoader from '../UserLoader/UserLoader';
import { motion } from 'framer-motion';


const UserForSideBar = () => {
  
  const {isLoading, loading, conversations} = useGetConversation();
  console.log(conversations)
  

  return (
    <motion.div 
      layout
      className={`flex w-full h-[100px] overflow-y-auto p-1 gap-1 ${isLoading? "justify-center items-center":""} `}>

        {isLoading && <UserLoader/>}
        <h1>{loading}</h1>
        {conversations.map(conversation=>{

          return(
            <User
              key={conversation._id} 
              conversation={conversation}/>
          )
          
        })}  
       
    </motion.div>
  )
}

export default UserForSideBar
