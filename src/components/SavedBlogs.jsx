
import React from 'react'
import BlogCard from './BlogCard'

const SavedBlogs = () => {
  return (
    <div className='flex flex-col px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='w-full p-4 flex justify-between'>
            <h3 className='font-bold'>Saved</h3>
            <button className='font-bold'>View more</button>
        </div>

        <div>
            <BlogCard />
            <BlogCard />

        </div>

    </div>
  )
}

export default SavedBlogs