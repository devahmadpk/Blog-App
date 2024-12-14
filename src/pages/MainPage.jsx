

import React from 'react'
import '../mainpage-anim.gif'
import { useNavigate } from 'react-router-dom'

const MainPage = () => {

  const navigate = useNavigate();

  const navigateSignUp = () => {
    navigate('/signup')
  }

  return (
    <div className='flex align-center justify-center h-screen bg-gray-200 p-4 '>
        <div className='flex flex-col align-center justify-center h-screen px-10 py-6 m-2'>

            <h3 className='font-bold text-2xl my-4'>
              Discover and share stories that matter to you
            </h3>
            <p className='text-lg my-4'>
              Find hundreds of stories suited exactly according to your taste. Create new stories to help people find what they need. 
            </p>
            <button className='text-lg text-white bg-black px-10 py-2 rounded-full my-4 w-fit' onClick={navigateSignUp}>
              Get Started
            </button>

        </div>

    </div>
  )
}

export default MainPage