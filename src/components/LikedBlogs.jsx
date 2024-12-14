

import React from 'react'
import LikedBlogCard from './LikedBlogCard'

const LikedBlogs = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full p-4 flex justify-start'>
            <h3 className='font-bold'>You may also like</h3>
        </div>

        <div>
            <LikedBlogCard />
            <LikedBlogCard />

        </div>

    </div>
  )
}

export default LikedBlogs