import React, { useEffect, useRef } from 'react'
import Message from '../Message/Message'
import useGetMessages from '../../hooks/useGetMessages'
import useListenMessage from '../../hooks/useListenMessage';
import MessageLoading from '../MessageLoading/MessageLoading';


const MessageWrapper = () => {
  const { messages, loading, isloading } = useGetMessages();
  useListenMessage();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);


  return (
    <div className='max-h-[300px] min-h-[300px] w-full py-2 overflow-y-auto text-center '>
      {!isloading && messages.length === 0 && <h1 className='text-slate-200 opacity-60 font-poppins font-thin'>Start a Conversation </h1>}

      {
        !isloading && messages.length > 0 && messages.map((message) => {
          return (
            <div key={message._id} ref={lastMessageRef}>
              <Message message={message} />
            </div>
          )
        })
      }
      
      {
        isloading && messages.length !== 0 && <MessageLoading />
      }


    </div>
  )
}

export default MessageWrapper