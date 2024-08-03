import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import UserForSideBar from '../UserForSideBar/UserForSideBar'
import LogOutBtn from '../LogOutBtn/LogOutBtn'


const Sidebar = () => {
  return (
    <div className='flex items-center flex-col justify-start gap-3 w-full p-1 flex-wrap'>
      <div className='flex justify-center items-center w-full'>
        <SearchBar />
        <span><LogOutBtn /></span>
      </div>

      <UserForSideBar />


    </div>
  )
}

export default Sidebar