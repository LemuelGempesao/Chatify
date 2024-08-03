import React, { useState } from 'react'
import { useAuthContext } from '../context/AuthContextProvider';

const useLogOut = () => {
    const {setAuthUser} = useAuthContext();


    const[loading, setLoading] = useState(null);
    const logout = async()=>{

        try {
            const res = await fetch("/api/auth/logout",{

                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                }
            })
    
            const data = await res.json();
            if(data){
                console.log(data.message);
                localStorage.removeItem("chat-user");
                setAuthUser(null);
    
            }
            
        } catch (error) {
            console.log(error.message)
            
        }
       
    }
  return {loading, logout}
}

export default useLogOut
