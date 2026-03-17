import React, { useState } from 'react'
import { BrowserRouter, Link, Routes } from 'react-router-dom';
import ForgotPassword from '../pages/ForgotPassword';



const RememberMe = () => {

    const[isChecked, setIsChecked] = useState(false);

    const handleChange = (e) =>{
        setIsChecked(e.target.checked)
    }
  return (
    <div className='text-xs md:text-sm flex items-center justify-between pt-1 md:pt-1.5 lg:pt-2'>

        <div>
            <input 
                id='remember-me'
                type="checkbox"
                checked= {isChecked}
                onChange={handleChange}
                className='border-[#AAB7C6] cursor-pointer w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5'
            />
            <label 
            className='text-[#5F738C]'
            htmlFor="remember-me">
                Remember Me
            </label> 
        </div>

        <Link to="/forgotpassword" className='text-primary font-bold'>
            Forgot Password?
        </Link>

        
        
    </div>
  )
}

export default RememberMe