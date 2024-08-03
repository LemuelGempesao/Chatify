import React, {useState} from 'react'
import { TiLeaf as Sen } from "react-icons/ti";
import useSendMessage from '../../hooks/useSendMessage';

const MessageSender = () => {
  const {loading, isLoading, sendMessage} = useSendMessage();
  const [message, setMessage] = useState("");


  const onSubmitMessage = async(e) =>{
    e.preventDefault();
    await sendMessage(message);
    console.log(message)
    setMessage("")
  }
  
  return (
    

    <form
        onSubmit={onSubmitMessage}
        className='w-full bg-gradient-to-b from-green-700 to bg-green-900 min-h-[12%] flex justify-center items-center rounded-b-lg'
        >
        <input 
            onChange={(e)=>{setMessage(e.target.value)}}
            value={message}
            className='rounded-[100px] input-accent text-center bg-slate-950 min-w-[80%] h-[80%] text-white '
            type="text"
            placeholder='Message...' 
            name="messageInput"/>
        <button
            className='p-1 text-white h-[80%] min-w-[5%] flex justify-center items-center rounded-[200px] text-3xl' 
            type="submit"><Sen/></button>
    </form>
  )
}

export default MessageSender