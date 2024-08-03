import React from 'react'
import { PiUserCircleCheckLight  as User} from "react-icons/pi";
import bgNoSelect from '../../assets/bgNoSelect.svg'


const NoSelectedUser = ({userAccount="None"}) => {
  return (
    <div className='max-h-[400px] min-h-[300px] w-full grid  grid-cols-1 justify-items-center gap-2'>

        <div className='w-full flex items-center justify-start'>
   
        </div>
        <h1 className='text-white font-poppins font-thin'>Hello {userAccount} Select a User to Chat</h1>
            <img 
              width={370}
              height={600}
              src={bgNoSelect}/>
            
       
    </div>
  )
}

export default NoSelectedUser