import React from 'react'

const LoginButton = ({text}) => {
  return (
    <>
        <button className=' w-full bg-primary text-white rounded py-3 px-7 transform transition-transform duration-200 ease-in-out hover:scale-102 hover:bg-[#0368c1] active:scale-95 font-semibold'>{text}</button>

    
    </>
  )
}

export default LoginButton