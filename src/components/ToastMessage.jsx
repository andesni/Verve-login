import React from 'react'

const ToastMessage = ({ message, type = 'error', onClose }) => {
  if (!message) return null;

  const styles = {
    error: 'bg-red-50 border-red-400 text-red-700',
    success: 'bg-green-50 border-green-400 text-green-700',
  };

  return (
    <div className='fixed top-4 left-1/2 -translate-x-1/2 z-50'>
      <div className={`${styles[type]} border-2 rounded px-4 md:px-5 lg:px-6 py-2.5 md:py-3 shadow-lg flex gap-6 md:gap-8 min-w-[300px] md:min-w-[350px] lg:min-w-[400px] max-w-md`}>
        <div className='flex-1'>
          <p className='font-semibold text-xs md:text-sm'>
            {type === 'error' ? 'Request failed' : 'Success'}
          </p>
          <p className='text-[10px] md:text-xs mt-0.5'>
            {message}
          </p>
        </div>

        <button 
          onClick={onClose}
          className='text-gray-500 hover:text-gray-700 text-2xl md:text-3xl font-extralight leading-none h-fit -mt-1 md:-mt-2'
        >
          ×
        </button>
      </div>
    </div>
  )
}

export default ToastMessage