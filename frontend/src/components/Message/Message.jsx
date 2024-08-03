import React from 'react'
import useConversation from '../zustand/useConversation'
import { useAuthContext } from '../../context/AuthContextProvider';
import { extractTime } from '../../utils/extractTime';

const Message = ({message}) => {

  const {selectedConversation} = useConversation();
  const {authUser} = useAuthContext();
  const fromUser = message.senderId === authUser._id;
  const chatUser = fromUser? "chat-end":"chat-start";
  const profilePic = chatUser? selectedConversation?.profilePic : authUser.profilePic;
  const time = extractTime(message.createdAt)

  return (
    <div className={`chat ${chatUser} font-poppins`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={profilePic}/>
        </div>
      </div>
    <div className={`chat-bubble  ${fromUser? "chat-bubble-success":"bg-slate-900"}`}>{message.message}</div>
    <time className="text-xs text-slate-600 opacity-80">{time}</time>
    
    </div>
  )
}

export default Message