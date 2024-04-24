import React from 'react'
import './laoding.css'

const Loading = () => {
  return (
    <div className='flex flex-col items-center space-y-2'>
        <div className='dots'></div>
        <div className='text-gray-800 font-extrabold text-xl'>
        Loading...
        </div>
       
    </div>
  )
}

export default Loading