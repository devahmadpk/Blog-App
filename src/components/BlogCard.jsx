

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment} from '@fortawesome/free-regular-svg-icons'
import testImg from '../test-img.jpg'
import UserInterest from './UserInterest'
const BlogCard = () => {

    const heartIcon = <FontAwesomeIcon icon={faHeart} />
    const commentIcon = <FontAwesomeIcon icon={faComment} />

  return (
    <div className='flex flex-col p-4 my-4 mx-2 rounded-md bg-gray-100 border-2 border-gray-200'>
        <div className='flex vsm:justify-between vsm:items-center flex-col-reverse vsm:flex-row'>

            <div className='vsm:mr-8 py-4 vsm:p-0 md:mr-12'>
                <UserInterest />

                <div className='my-2'>
                    <span className='font-bold'>Generative AI taking everything by storm. Its so cool to see how its happening because were fucked to be very honest</span>
                </div>
            </div>
            

            <div className='vsm:w-28 vsm:h-20 md:w-36 md:h-28 lg:w-44 shrink-0 w-full h-32'>
                <img className='w-full h-full rounded-md' src={testImg}></img>
            </div>
        </div>

        <div className='flex justify-between py-2 w-full *:text-gray-400 md:mt-4'>
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