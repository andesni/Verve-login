import React, { useState } from 'react'
import Title from '../components/Title';
import { login_icons } from '../assets/assets';
import LoginButton from '../components/LoginButton';
import { useNavigate } from 'react-router-dom';
import ToastMessage from '../components/ToastMessage';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const [error, setError] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  }

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  }

  const hasMinimumLength = newPassword.length >= 8;
  const hasUpperCase = /[A-Z]/.test(newPassword || '');
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword || '');
  
  const handleSubmit = (e) => {
    e.preventDefault();

    setError('');

    if (!hasMinimumLength || !hasUpperCase || !hasSpecialChar) {
      setError('Password does not meet all requirements');
      setTimeout(() => setError(''), 5000);
      return;
    }

    if (newPassword !== confirmNewPassword) {
      setError('Passwords do not match');
      setTimeout(() => setError(''), 5000);
      return;
    }

    // Save new password to localStorage
    localStorage.setItem('userPassword', newPassword);
    
    console.log('Password reset successful');
    
    // Navigate to login with success message flag
    navigate('/', { state: { passwordResetSuccess: true } });
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-white p-4 md:p-6 lg:p-8'>
      
      {/* Error Toast */}
      <ToastMessage 
        message={error} 
        type="error"
        onClose={() => setError('')}
      />

      <div className='w-full max-w-sm md:max-w-md'>
        <Title title='Reset Password'/>

        <form onSubmit={handleSubmit} className='space-y-4 md:space-y-5 lg:space-y-6 mt-6 md:mt-7 lg:mt-8'>
          
          {/* New Password */}
          <div>
            <label htmlFor="newPassword">
              <p className='text-xs md:text-sm lg:text-base font-medium text-gray-800 mb-1.5 md:mb-2'>New Password</p>
              <div className='relative'>
                <input 
                  type={showNewPassword ? 'text' : 'password'}
                  id="newPassword"
                  placeholder="Enter new password"
                  value={newPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value)
                    setError('')
                  }}
                  required 
                  className='bg-[#F5F7FA] border border-gray-200 rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-gray-400 pr-10 md:pr-12 focus:outline-none focus:border-blue-500'  
                />
                <button 
                  onClick={togglePasswordVisibility}
                  className='absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 cursor-pointer'
                  type='button'
                >
                  {showNewPassword ? (
                    <img 
                      src={login_icons.view_password} 
                      alt='Hide password' 
                      className='w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5'  
                    />
                  ) : (
                    <img 
                      src={login_icons.hide_password} 
                      alt='View password' 
                      className='w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5'  
                    />
                  )}
                </button>
              </div>
            </label>

            {/* Password Requirements */}
           <div className='mt-2 md:mt-2.5 space-y-1'>

            {/* First Line - Two requirements */}
            <div className='flex items-center gap-2'>
              <span className={hasMinimumLength ? 'text-[#6B7280] bg-[#F1FEF1] px-2 py-1 rounded text-xs md:text-sm' : 'text-[#6B7280] bg-[#FBE9E9] px-2 py-1 rounded text-xs md:text-sm'}>
                at least 8 characters long
              </span>
              <span className={hasUpperCase ? 'text-[#6B7280] bg-[#F1FEF1] px-2 py-1 rounded text-xs md:text-sm' : 'text-[#6B7280] bg-[#FBE9E9] px-2 py-1 rounded text-xs md:text-sm'}>
                one upper case
              </span>
            </div>
            
            {/* Second Line - One requirement */}
            <div>
              <span className={hasSpecialChar ? 'text-[#6B7280] bg-[#F1FEF1] px-2 py-1 rounded text-xs md:text-sm' : 'text-[#6B7280] bg-[#FBE9E9] px-2 py-1 rounded text-xs md:text-sm'}>
                one special character
              </span>
            </div>
          </div>
        </div>
          {/* Re-enter Password */}
          <div>
            <label htmlFor="confirmPassword">
              <p className='text-xs md:text-sm lg:text-base font-medium text-gray-800 mb-1.5 md:mb-2'>Re-enter Password</p>
              <div className='relative'>
                <input 
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  placeholder="Enter new password"
                  value={confirmNewPassword}
                  onChange={(e) => {
                    setConfirmNewPassword(e.target.value)
                    setError('')
                  }}
                  required 
                  className='bg-[#F5F7FA] border border-gray-200 rounded h-10 md:h-11 lg:h-12 w-full text-xs md:text-sm lg:text-base px-3 md:px-4 lg:px-4 placeholder-gray-400 pr-10 md:pr-12 focus:outline-none focus:border-blue-500'  
                />
                <button 
                  onClick={toggleConfirmPasswordVisibility}
                  className='absolute top-1/2 right-3 md:right-4 transform -translate-y-1/2 cursor-pointer'
                  type='button'
                >
                  {showConfirmPassword ? (
                    <img 
                      src={login_icons.view_password} 
                      alt='Hide password' 
                      className='w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5'
                    />
                  ) : (
                    <img 
                      src={login_icons.hide_password} 
                      alt='View password' 
                      className='w-4 h-4 md:w-5 md:h-5 lg:w-5 lg:h-5'
                    />
                  )}
                </button>
              </div>
            </label>
          </div>

          <LoginButton text='Submit' />

        </form>
      </div>
    </div>
  )
}

export default ResetPassword