import React from 'react'
import { login_icons } from '../assets/assets'

const Title = ({title, desc}) => {
  return (
    <div className='text-[#353F50] pt-12 md:pt-20 lg:pt-30'>
        <img src={login_icons.verve_logo} alt="Verve Logo" 
        className='w-20 h-7 md:w-24 md:h-8 lg:w-26.5 lg:h-9.25' />
        <div className='pt-6 md:pt-8 lg:pt-10 pb-6 md:pb-8 lg:pb-10'>
            <h2 className='font-bold text-2xl md:text-3xl lg:text-4xl '>
                {title}
            </h2>
            <p className='text-xs md:text-sm lg:text-base text-[#353F50]'>
                {desc}
            </p> 
        </div>
       
    </div>
  )
}

export default Title