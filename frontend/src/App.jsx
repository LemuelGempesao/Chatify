import React from 'react'
import LoginPage from './pages/login/LoginPage'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/mainLayout/MainLayout'
import Signup from './pages/signup/Signup'
import ChatPage from './pages/chat/ChatPage'
import { useAuthContext } from './context/AuthContextProvider'



const App = () => {
  const {authUser} = useAuthContext();



  return (
    <div className='w-full h-full'>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={authUser?<ChatPage/>:<LoginPage />} />
          <Route path="/signup" element={authUser?<ChatPage/>:<Signup/>} />
          <Route path="/message" element = {authUser?<ChatPage/>:<LoginPage/>}/>
        </Route>
      </Routes>

    </div>
  )
}

export default App