import React from 'react'
import useConversation from '../zustand/useConversation'
import { useSocketContext } from '../../context/SocketContext';
import { motion } from 'framer-motion'

const User = ({ conversation }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const selected = selectedConversation?._id === conversation._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(conversation._id)


  return (
    <motion.div
      
      layout
      onClick={() => setSelectedConversation(conversation)}
      className={`${selected ? "bg-green-500 " : "bg-gradient-to-tr from-green-900 to-emerald-700"} hover:bg-green-600 transition-colors duration-100  cursor-pointer flex flex-col items-center justify-center  h-full min-w-[100px] rounded-md`}>
      <div

        className='text-xl w-[40px] h-[40px] relative rounded-[100px] bg-white flex justify-center items-center'>
        <img src={conversation.profilePic} />
        <div className={`${isOnline ? "online w-3 h-3 bg-green-600 absolute top-0 right-0 rounded-full border-black border-solid border-[1px]" : ""} `}></div>
      </div>
      <h5 className='text-white font-poppins text'>{conversation.fullName.slice(0, conversation.fullName.indexOf(" "))}</h5>
    </motion.div>
  )
}

export default User