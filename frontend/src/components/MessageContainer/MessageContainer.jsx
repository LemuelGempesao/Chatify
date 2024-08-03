import React, { useEffect } from 'react'
import MessageHeader from '../MessageHeader/MessageHeader'
import MessageWrapper from '../MessageWrapper/MessageWrapper'
import MessageSender from '../MessageSender/MessageSender'
import useConversation from '../zustand/useConversation'
import {motion} from 'framer-motion'
import NoSelectedUser from '../NoSelecteduser/NoSelectedChatUser'
import { useAuthContext } from '../../context/AuthContextProvider'

const MessageContainer = () => {
  const{selectedConversation, setSelectedConversation} = useConversation();
  const{authUser} = useAuthContext();

  useEffect(()=>{




    return ()=>{
      setSelectedConversation(null)
    }
  },[setSelectedConversation])

  return (
    <motion.div 
        layout
        className='w-full h-full flex flex-col justify-center items-center'>

        {!selectedConversation? 
        <NoSelectedUser userAccount={authUser.fullName}/>
        :<>
        <MessageHeader fullName={selectedConversation.fullName}/>
        <MessageWrapper/>
        <MessageSender/>
        
        </>}
    </motion.div>
  )
}

export default MessageContainer