import React from 'react'
import LogoImage from '../assets/logo.jpg'

const Logo = () => {
  return (
    <div>
        <img src={LogoImage} alt='' className='w-20 h-14 rounded-3xl'/>
    </div>
  )
}

export default Logo