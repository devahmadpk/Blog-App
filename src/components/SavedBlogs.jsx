
import React from 'react'
import BlogCard from './BlogCard'

const SavedBlogs = () => {
  return (
    <div className='flex flex-col'>
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