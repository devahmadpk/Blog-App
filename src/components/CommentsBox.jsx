

import React from 'react'
import testImg from '../test-img.jpg'

const CommentsBox = () => {
  return (
    <div className='p-4 bg-gray-200 my-4 rounded-md flex flex-col vsm:flex-row items-start vsm:items-center justify-center sm:justify-start md:w-4/5'>
        <div className='shrink-0'>
            <img src={testImg} className='rounded-full w-12 h-12'></img>
        </div>
        <div className='my-4 vsm:mx-8'>
            <h3 className='font-bold'>Ahmad</h3>
            <p className='mt-2'>This is my comment about your blog you bastard. Go kill yourself. I hope you die a slow painful death.</p>
        </div>
    </div>
  )
}

export default CommentsBox