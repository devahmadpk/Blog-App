

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import testImg from '../test-img.jpg'
import UserInterest from './UserInterest'
const BlogCard = () => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const commentIcon = <FontAwesomeIcon icon={faComment} />
    const arrowIcon = <FontAwesomeIcon icon={faArrowUpRightFromSquare} />

  return (
    <div className='bg-gray-300 p-4 flex flex-col justify-start rounded-md my-4 mx-2'>
        <UserInterest />
        <div className='w-full mt-4 rounded-md h-32'>
            <img className='w-full h-full rounded-md' src={testImg}></img>
        </div>
        <div className='flex justify-between px-1 py-2 mt-2'>
            <span className='w-3/4 font-bold'>Generative AI taking everything by storm</span>
            <button className='bg-[#E0F2FF] px-5 rounded-md text-[#449BDA] '>{arrowIcon}</button>
        </div>
        <div className='flex justify-between px-1 py-2'>
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

export default BlogCard