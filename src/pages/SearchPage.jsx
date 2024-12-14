

import React from 'react'
import LatestBlogs from '../components/LatestBlogs'
import LikedBlogCard from '../components/LikedBlogCard'

const SearchPage = () => {
  return (
    <div className='w-screen h-min-screen p-4 flex flex-col justify-start items-center'>
        <input placeholder='Search a query to find blogs...'
        className='px-4 py-2 rounded-md w-full mt-14 bg-gray-300'></input>
        <div>
            <LikedBlogCard />
            <LikedBlogCard />
            <LikedBlogCard />
            <LikedBlogCard />
        </div>
    </div>
  )
}

export default SearchPage