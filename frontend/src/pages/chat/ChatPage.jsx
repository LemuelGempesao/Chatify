import React from 'react'
import Sidebar from '../../components/Sidebar/SideBar'
import MessageContainer from '../../components/MessageContainer/MessageContainer'

const ChatPage = () => {
  return (
    <div className='w-[95%] md:w-[70%] md:-h-[90%] h-[90%] s:h-[90%] bg-white-300 rounded-md px-2 border-2 border-green-300 backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col justify-start items-center'> 
      <Sidebar/>
      <MessageContainer/>
    </div>
  )
}

export default ChatPage