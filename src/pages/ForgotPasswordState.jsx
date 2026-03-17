import React, { useState } from 'react'
import Title from '../components/Title';
import LoginButton from '../components/LoginButton';
import { useNavigate } from 'react-router-dom';
import ToastMessage from '../components/ToastMessage';

const ForgotPasswordState = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const TEST_MAIL = 'username@test.com';

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage('');
    setError('');

    // If it's an error
    if (email !== TEST_MAIL) {
      setError('This email is not associated with any account on the portal');
      setTimeout(() => setError(''), 5000);  
      return;
    }

    // If it's a success
    setMessage('Kindly check your email to complete your request.');
    setTimeout(() => { 
      setMessage('');
      navigate('/resetpassword');
    }, 2000);
    setEmail('');
  }

  const handleGoBack = () => {
    navigate('/forgotpassword');
  } 

  return (
    <div className='min-h-screen bg-gray-50 p-4 md:p-6 lg:p-8'>  
      
      {/* Toast Messages */}
      <ToastMessage message={error} type='error' onClose={() => setError('')} />
      <ToastMessage message={message} type='success' onClose={() => setMessage('')} />

      {/* Back Button - Top Left */}
      <button 
        onClick={handleGoBack} 
        type='button' 
        className='flex items-center gap-1.5 md:gap-2 text-[#353F50] hover:text-[#0068C8] transition-colors mb-6 md:mb-7 lg:mb-8 border border-[#E1E6ED] rounded px-2 py-1.5 md:px-3 md:py-2 lg:px-4 lg:py-2.5'  
      >
        <svg 
          className='w-4 h-4 md:w-5 md:h-5' 
          fill='none' 
          stroke='currentColor' 
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
        </svg>
        <span className='text-xs md:text-sm lg:text-base font-medium'>Back</span>  
      </button>

      {/* Centered Form Container */}
      <div className='flex items-center justify-center'>
        <div className='w-full max-w-sm md:max-w-md'>  
          <Title title='Forgot Password'/>

          <form onSubmit={handleSubmit} className='space-y-4 md:space-y-5 lg:space-y-6 mt-6 md:mt-7 lg:mt-8'>  
            
            {/* Email Input */}
            <div>
              <label htmlFor="email">
                <p className='text-xs md:text-sm lg:text-base text-[#353F50] mb-1.5 md:mb-2'>Enter Email Address</p>  
                <input 
                  type="email"
                  id="email"
                  placeholder="username@test.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setMessage('')
                    setError('')
                  }}
                  className='bg-[#F3F5F6] hover:bg-[#E1E6ED] rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-[#848F9F] focus:outline-none focus:ring-2 focus:ring-blue-500' 
                  required
                />
              </label>
            </div>

            <LoginButton text='Submit'/>

          </form>
        </div>
      </div>
    </div>
  )
}

export default ForgotPasswordState