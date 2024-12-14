

import React from 'react'
import testImg from '../test-img.jpg'

const CommentsBox = () => {
  return (
    <div className='p-4 bg-gray-200 my-4 rounded-md'>
        <div className=''>
            <img src={testImg} className='rounded-full w-12 h-12'></img>
        </div>
        <div className='mt-4'>
            <h3 className='font-bold'>Ahmad</h3>
            <p className='mt-2'>This is my comment about your blog you bastard. Go kill yourself. I hope you die a slow painful death.</p>
        </div>
    </div>
  )
}

export default CommentsBox