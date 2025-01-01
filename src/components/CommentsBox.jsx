

import React from 'react'

const CommentsBox = ({comment}) => {
  return (
    
    <div className='p-4 bg-gray-200 my-4 rounded-md flex flex-col vsm:flex-row items-start vsm:items-center justify-center sm:justify-start md:w-4/5'>
        <div className='shrink-0'>
            <img src={`http://localhost:5000/uploads/${comment.profile_pic}`} className='rounded-full w-12 h-12'></img>
        </div>
        <div className='my-4 vsm:mx-8'>
            <h3 className='font-bold'>{comment.username}</h3>
            <p className='mt-2'>{comment.comment_text}</p>
        </div>
    </div>
  )
}

export default CommentsBox