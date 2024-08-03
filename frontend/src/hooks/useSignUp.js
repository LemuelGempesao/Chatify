import { useState } from "react"

const useSignUp = () => {
    const [loading, setLoading] = useState(null);
    const [isLoading, setIsLoading] = useState(null);


    const signup = async (SignInData, setSignInData) => {

        setIsLoading(true)

        try {
            if(!validateInput(SignInData)){
                throw new Error("Minimum Input Character is 6");

            }

            const res = await fetch("/api/auth/signup",{
                method:"POST",
                body:JSON.stringify(SignInData),
                headers:{
                    "Content-Type":"application/json"
                }

            })

            const data = await res.json();

            if (data.message) {
                setLoading(data.message);
                setSignInData({
                    fullName: "",
                    username: "",
                    gender: "male",
                    password: "",
                    confirmPassword: ""

                })

            }

            else if (data.error) {
                setSignInData((prev) => {
                    return ({
                        ...prev,
                        password: "",
                        confirmPassword: ""
                    }
                    )
                })
                throw new Error(data.error)

            }

            else{
                throw new Error("Server Error");
            }

            console.log(SignInData)

        } catch (error) {
            if (error.name === 'SyntaxError') {
                console.error('Network error, please check your connection');
                setLoading("Network error, please check your connection")
                return;
                
              }
              
            console.log(error)
            setLoading(error.message)
         

        }

        finally {
            setIsLoading(false);
        }
    }

    return { loading, signup, isLoading }

}


export default useSignUp



const validateInput = (data) =>{
    const{password, username, fullName} = data;
    if(password.length <6 && username.length < 6 && fullName.length <6){
        return false;
    }

    return true;

}
