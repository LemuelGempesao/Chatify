import {createContext, useContext, useState} from 'react'


//buhat context
export const AuthContext = createContext();

//gamition and context as value sa function
export const useAuthContext = ()=>{
  return useContext(AuthContext);

}

const AuthContextProvider = ({children}) => {
  const[authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("chat-user")) || null)
  return (
    <AuthContext.Provider value={{authUser, setAuthUser}}>{children}</AuthContext.Provider>
  )
}

export default AuthContextProvider