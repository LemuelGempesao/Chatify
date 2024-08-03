import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import useGetConversation from '../../hooks/useGetConversation';
import useConversation from '../zustand/useConversation';

const SearchBar = () => {


  const [searchData, setSearchData] = useState("");
  const { conversations } = useGetConversation();
  const { setSelectedConversation } = useConversation();


  console.log(searchData)
  const searchSubmit = (e) => {
    e.preventDefault();
    if (!searchData || searchData.trim() === "") {
      console.log("No Input Characters")
      return;

    }
    const conversation = conversations.find(el => el.fullName
      .toLowerCase().includes(searchData.toLowerCase()));
    if (!conversation) {
      console.log("Cant Find The user")
      return;
    }

    setSelectedConversation(conversation)

  }
  return (


    <form
      onSubmit={searchSubmit}
      className='w-full h-10 flex items-center justify-center '>
     
        <input
          value={searchData}
          onChange={(e) => { setSearchData(e.target.value) }}
          onSubmit={searchSubmit}
          className='w-[60%] flex justify-center items-center bg-slate-950 rounded-[10rem] selection:none text-white text-center outline-none h-full'
          type="text" name="search"
          placeholder='Search User' />
        <button
          className='w-10 h-10 flex justify-center items-center justify-self-end text-white text-4xl'
          type='submit'><CiSearch /></button>

    

    </form>

  )
}

export default SearchBar