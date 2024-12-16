

import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
import BlogCard from '../components/BlogCard'

const SearchPage = () => {
  return (
    <div className='w-screen h-min-screen p-4 flex flex-col justify-start items-center'>
          <div className='w-full mt-14'>
              <input placeholder='Search a query to find blogs...'
              className='px-4 py-2 rounded-md w-full bg-gray-100
              border-2 border-gray-200 placeholder:text-gray-400 outline-black'>
            </input>
          </div>
        <div>
        
            <BlogCard />
        </div>
    </div>
  )
}

export default SearchPage