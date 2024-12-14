

import React from 'react'
import CreatedBlogCard from '../components/CreatedBlogCard'

const ProfilePage = () => {
  return (
    <div className='w-screen h-screen flex flex-col justify-center items-center'>
        <div className='p-2 w-full flex justify-center items-center flex-col'>
            <div className='w-14 h-14 bg-gray-300 rounded-full my-4'>

            </div>
            <p>Ahmad</p>
        </div>

        <div className='h-full w-full p-4'>
            <div className='flex justify-evenly *:bg-black *:text-white *:rounded-full *:py-2 *:px-4 '>
                <button>Your blogs</button>
                <button>Saved</button>
            </div>

            <div className=''>
                <CreatedBlogCard />
            </div>
        </div>
           
    </div>
  )
}

export default ProfilePage