

import React from 'react'
import BlogCard from '../components/BlogCard'
import testImg from '../test-img.jpg'

const ProfilePage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='p-2 w-full flex justify-center items-center flex-col mt-14'>
            <div className='w-14 h-14 bg-gray-300 rounded-full my-4'>
                <img src={testImg} className='w-full h-full rounded-full'></img>
            </div>
            <p>Ahmad</p>
        </div>

        <div className='h-full w-full p-4 px-4 md:px-8 lg:px-14 xl:px-24'>
            <div className='flex justify-center *:bg-black *:text-white *:rounded-full *:py-2 *:px-4 *:mx-4 sm:*:mx-8 sm:*:px-8 mt-10'>
                <button>Your blogs</button>
                <button>Saved</button>
            </div>

            <div className='mt-8'>
                <BlogCard />
            </div>
        </div>
           
    </div>
  )
}

export default ProfilePage