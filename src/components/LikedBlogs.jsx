

import React from 'react'
import BlogCard from './BlogCard'

const LikedBlogs = () => {
  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='w-full p-4 flex justify-start'>
            <h3 className='font-bold'>You may also like</h3>
        </div>

        <div>
            <BlogCard />
            <BlogCard />

        </div>

    </div>
  )
}

export default LikedBlogs