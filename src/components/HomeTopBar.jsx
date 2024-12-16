

import React from 'react'
import testImg from '../test-img.jpg'

const HomeTopBar = () => {
  return (
    <div className='flex p-4 justify-between px-4 md:px-8 lg:px-14 xl:px-24'>
        <div className='flex flex-col'>
            <span className='text-xl font-bold'>Blogs</span>
            <span className='my-1 text-gray-500'>Friday, Dec 9</span>
        </div>
        <div className='rounded-full h-14 w-14 bg-gray-300'>
            <img src={testImg} className='w-full h-full rounded-full'></img>
        </div>
    </div>
  )
}

export default HomeTopBar