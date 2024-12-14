

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment } from '@fortawesome/free-regular-svg-icons'
import testImg from '../test-img.jpg'
import UserInterest from './UserInterest'

const LikedBlogCard = () => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const commentIcon = <FontAwesomeIcon icon={faComment} />

  return (
    <div className='flex flex-col px-2 py-4 my-4 mx-2 rounded-md bg-gray-300'>
        <div className='flex justify-between items-center'>

            <div>
                <UserInterest />

                <div className='my-2'>
                    <span className='w-3/4 font-bold'>Generative AI taking everything by storm</span>
                </div>
            </div>
            

            <div className='bg-orange-300 w-36 h-20'>
                <img className='w-full h-full rounded-md' src={testImg}></img>
            </div>
        </div>

        <div className='flex justify-between py-2 w-full '>
                <span>1 hour ago</span>
                <div className='*:mx-1'>
                    <button>{heartIcon}</button>
                    <span >10</span>
                    <button>{commentIcon}</button>
                    <span>10</span>
                </div>
             </div>
        
    </div>
  )
}

export default LikedBlogCard