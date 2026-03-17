import React from 'react'
import { login_icons } from '../assets/assets';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      
      {/* Image Side - Hidden on mobile, visible on tablet+ */}
      <div className='hidden md:block md:w-1/2'>
        <img 
          src={login_icons.signin_image} 
          alt="man typing away at a computer" 
          className='w-full h-full object-cover' 
        />
      </div>

      {/* Form Side */}
      <div className='w-full md:w-1/2 flex flex-col justify-center p-4 md:p-6 lg:p-8 pb-20 md:pb-40 lg:pb-[309px]'>
        <LoginForm/>
      </div>

    </div>
  )
}

export default LoginPage