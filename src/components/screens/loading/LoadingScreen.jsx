import React from 'react'
import ICON from '../../../assets/icons/logo.png'

const LoadingScreen = () => {
  return (
    <div className='min-h-screen min-w-screen bg-white flex justify-center'>
      <div className="flex justify-center items-center">
        <img className='md:h-56 h-44 animate-bounce' src={ICON} alt="icon-png" />
      </div>
    </div>
  )
}

export default LoadingScreen