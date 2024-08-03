import React, { useState } from 'react'
import { LinearGradient as Lg } from 'react-text-gradients'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import useSignUp from '../../hooks/useSignUp'
import {PulseLoader} from 'react-spinners'

const SignUp = () => {
    // const [loading, setLoading] = useState(null)
    const{loading, signup, isLoading} = useSignUp();

    const [SignInData, setSignInData] = useState({
        fullName: "",
        username: "",
        gender: "male",
        password: "",
        confirmPassword: ""

    })

    const onChangeEventHandler = (e) => {
        const { name, value, type, checked } = e.target;
        setSignInData(prevData => ({
            ...prevData,
            [name]: type === 'radio' ? (checked ? value : prevData[name]) : value
        }));
    };



    const signUpSubmission = async (e) => {
        e.preventDefault();
        await signup(SignInData, setSignInData)  
    }


    return (
        <div className='w-[320px] sm:w-[360px] max-w-[360px] font-poppins relative flex items-center flex-col justify-center h-[60%] sm:h-[500px] bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-green-300'>
            <h1 className='text-2xl absolute top-[5%] left-50% font-bold '>
                <Lg gradient={["to bottom", "white, yellowgreen"]}>
                    Sign Up
                </Lg>
            </h1>

            <form
                onSubmit={signUpSubmission}
                className=' text-white w-5/6 flex flex-col flex-wrap gap-2 justify-center'>
                <input

                    value={SignInData.fullName}
                    className=' bg-slate-950 rounded-md text-center input-accent h-10'
                    type="text"
                    name="fullName"
                    onChange={onChangeEventHandler}
                    required
                    placeholder='Enter Full Name' />

                <input
                    value={SignInData.username}
                    className='bg-slate-950 rounded-md text-center input-accent h-10'
                    type="text"
                    name="username"
                    onChange={onChangeEventHandler}
                    required
                    placeholder='Enter Username' />

                <div className='text-center bg-slate-950 rounded-md  h-10 flex items-center justify-evenly '>
                    <label
                        className='text-gray-400'
                        htmlFor='male'>
                        <input
                            checked={SignInData.gender === "male"}
                            onChange={onChangeEventHandler}
                            className='accent-green-300'
                            type="radio"
                            name="gender"
                            id="male"
                            required
                            value="male" />
                        {" "}Male
                    </label>
                    {" "}
                    <label
                        className='text-gray-400'
                        htmlFor='female'>
                        <input
                            checked={SignInData.gender === "female"}
                            onChange={onChangeEventHandler}
                            className='accent-green-300'
                            type="radio"
                            name="gender"
                            id="female"
                            required
                            value="female" />
                        {" "}Female
                    </label>
                </div>

                <input
                    value={SignInData.password}
                    className='bg-slate-950 rounded-md text-center input-accent h-10'
                    type="password"
                    name="password"
                    required
                    onChange={onChangeEventHandler}
                    placeholder='Enter password' />


                <input
                    value={SignInData.confirmPassword}
                    className='bg-slate-950 rounded-md text-center input-accent h-10 '
                    type="password"
                    name="confirmPassword"
                    required
                    onChange={onChangeEventHandler}
                    placeholder='Confirm password' />

                <button
                    disabled={isLoading}
                    className="bg-green-600 flex items-center justify-center  rounded-md  h-10 hover:bg-green-300 transition-colors duration-200 ease-in text-slate-900 font-bold "
                    type="submit">
                    {isLoading? <PulseLoader
                                    size={12}
                                    color='black'/>:"Sign Up"}
                </button>



            </form>
            <div className="w-[80%] my-4 h-[1px] bg-green-300"></div>
            <Link to="/">
                <h1 className='text-white text-[15px]'>Already have an account? <span className='text-green-600'>Log In here</span></h1>
            </Link>
            <br />
            <motion.h3
                className={`
                        ${loading === "Account Added"?
                        "text-green-300": "text-red-500" } absolute bottom-6 font-poppins`}
                layout>
                {loading}
            </motion.h3>
        </div>
    )
}

export default SignUp