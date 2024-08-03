import { createContext, useEffect, useState, useContext } from "react";
import { useAuthContext } from "./AuthContextProvider";
import io from "socket.io-client";


export const SocketContxt = createContext();
export const useSocketContext = ()=>{
    return useContext(SocketContxt);
  
  }


export const SocketContxtProvider = ({children})=>{
    const [socket, setSocket] = useState(null);
    const[onlineUsers, setOnlineUsers] = useState([]);
    const{authUser} = useAuthContext();

    useEffect(()=>{
        if(authUser){
            const socket = io("https://chatify-lem.onrender.com",{
                query:{
                    userId: authUser._id,
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users)=>{
                setOnlineUsers(users);
            })

            return ()=> socket.close();
        }
        else{
            if(socket){
                socket.close();
                setSocket(null);
    
            }
            
        }


    },[authUser]);
    return(

        <SocketContxt.Provider value={{socket, onlineUsers}}>
            {children}
        </SocketContxt.Provider>




    )


}
