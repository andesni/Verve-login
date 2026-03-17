import React, { useState } from 'react'
import Title from '../components/Title';
import LoginButton from '../components/LoginButton';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/forgotpasswordstate');
  }

  const handleGoBack = () => {
    navigate('/');
  } 

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-50 p-4 md:p-6 lg:p-8'>
      <div className='w-full max-w-sm md:max-w-md'>
        <Title title='Forgot Password'/>

        <form onSubmit={handleSubmit} className='space-y-4 md:space-y-5 lg:space-y-6 mt-6 md:mt-7 lg:mt-8'>

          {/* Email Input */}
          <div>
            <label htmlFor="email">
              <p className='text-xs md:text-sm lg:text-base text-[#353F50] font-semibold mb-1.5 md:mb-2'>Enter Email Address</p>
              <input 
                type="email"
                id="email"
                placeholder="username@test.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='bg-[#F3F5F6] hover:bg-[#E1E6ED] rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-[#848F9F] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                required
              />
            </label>
          </div>

          {/* Submit Button */}
          <LoginButton text='Submit'/>

          {/* Go Back Button */}
          <button 
            onClick={handleGoBack} 
            type='button' 
            className='border border-[#C8D2DF] w-full h-10 md:h-11 lg:h-12 rounded text-xs md:text-sm lg:text-base text-[#353F50] font-semibold hover:bg-[#F1EFEF] transition-colors'
          >
            Go Back
          </button>

        </form>
      </div>
    </div>
  )
}

export default ForgotPassword