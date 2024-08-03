import React from 'react'
import { CiLogout } from "react-icons/ci";
import useLogOut from '../../hooks/useLogOut';

const LogOutBtn = () => {
  const{logout, loading} = useLogOut();
  return (
    <div 
      onClick={logout}
      className='cursor-pointer min-w-[10%] min-h-full flex items-center justify-center text-4xl text-white' >
        <CiLogout/>
    </div>
  )
}

export default LogOutBtn