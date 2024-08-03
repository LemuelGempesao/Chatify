import { useState } from "react";
import { useAuthContext } from "../context/AuthContextProvider";
import{toast} from 'react-hot-toast';



const useLogin = ()=>{
    const {setAuthUser} = useAuthContext();
    const [loading, setLoading] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const login = async(loginData)=>{
        

        try {
            setIsLoading(true);
            const res = await fetch(`/api/auth/login`,{
                method:"POST",
                body:JSON.stringify(loginData),
                headers:{
                    "Content-Type":"application/json"
                }
    
    
            });
            const data = await res.json();
            if(!data.error){
                setLoading(data.message)
                localStorage.setItem("chat-user", JSON.stringify(data));
                setAuthUser(data);
                
            }
            else{
                throw new Error(data.error);
            }
            
        } catch (error) {
            setLoading(error.message)

            
        }

        finally{
            (setIsLoading(false))
 
        }       

    }
        

   

     return{loading, isLoading, login}


    

}

export default useLogin;
