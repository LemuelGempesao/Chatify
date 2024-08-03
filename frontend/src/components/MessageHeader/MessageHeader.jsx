import React from 'react'

const MessageHeader = ({fullName}) => {
  return (
    <div className='bg-gradient-to-b to-green-700 from-green-900 w-full min-h-[10%]  flex justify-start items-center p-1 rounded-t-lg'>
        <h3 className='text-white font-poppins'>{fullName}</h3>
    </div>
  )
}

export default MessageHeader