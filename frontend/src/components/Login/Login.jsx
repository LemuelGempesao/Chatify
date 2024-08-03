import React, { useState } from 'react'
import { LinearGradient as Lg } from 'react-text-gradients'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin'
import { motion, AnimatePresence } from 'framer-motion';
import {PulseLoader} from 'react-spinners'


const LogIn = () => {
    const { isLoading, loading, login } = useLogin();
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""

    })


    const onLoginSubmit = async (e) => {
        e.preventDefault();
        await login(loginData);
        console.log(loginData)
    }



    const onChangeEventHandler = (e) => {
        const { name, value, type, checked } = e.target;

        setLoginData(prevData => ({
            ...prevData,
            [name]: type === 'radio' ? (checked ? value : prevData[name]) : value
        }));
    };

    return (
        <div className=' w-[320px] sm:w-[360px] min-h-[60%] sm:min-h-[500px] font-poppins relative flex items-center 
                        flex-col justify-center  bg-white-300 rounded-md bg-clip-padding 
                        backdrop-filter backdrop-blur-md bg-opacity-10 border border-green-300'>

            <h1 className='text-2xl absolute top-[5%] left-50% font-bold'>
                <Lg gradient={["to bottom", "white, yellowgreen"]}>
                    Log In
                </Lg>
            </h1>
            <form
                onSubmit={onLoginSubmit}
                className=' text-white w-5/6 flex flex-col flex-wrap gap-2 justify-center'>
                <input
                    value={loginData.username}
                    className='bg-slate-950 rounded-md text-center input-accent h-10'
                    type="text"
                    name="username"
                    onChange={onChangeEventHandler}
                    required
                    placeholder='Enter Username' />
                <input
                    value={loginData.password}
                    className='bg-slate-950 rounded-md text-center input-accent h-10 '
                    type="password"
                    name="password"
                    required
                    onChange={onChangeEventHandler}
                    placeholder='Password' />

                <button
                    disabled={isLoading}
                    className="bg-green-600 flex items-center justify-center rounded-md  h-10 hover:bg-green-300 transition-colors duration-200 ease-in text-slate-900 font-bold "
                    type="submit">
                    {isLoading? <PulseLoader
                                    size={12}
                                    color='black'/> : "Submit" }
                </button>

            </form>
            <div className="w-[80%] my-4 h-[1px] bg-green-300"></div>
            <Link to="/signup">
                <h1 className='text-white text-[15px]'>Dont have an account? <span className='text-green-600'>Sign up here</span></h1>
            </Link>
            <br />
            <AnimatePresence>
                <motion.h3
                    layout
                    className={`${loading === "Log in Successfully" ? "text-green-300" : "text-red-500"} absolute bottom-12`}>
                    {loading}
                </motion.h3>
            </AnimatePresence>

        </div>
    )
}

export default LogIn